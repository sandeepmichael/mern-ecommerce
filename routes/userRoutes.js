const router = require('express').Router()
const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require('google-auth-library')

const client = new OAuth2Client("878786950565-kmum1ne551io15kq1ibvlae1to9bj11a.apps.googleusercontent.com")




router.post('/register', async (req, res) => {
    try {
        const {name, email, password} = req.body
         let user = await User.findOne({email})
         if(user) {
             res.status(401).json({message:'user already exists'})
         }

         

         user  = new User({
             name,
             email,
             password

         })
         await user.save()

         res.status(200).json({message:'user created successfully'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send()
    }



})


router.post('/login', async(req, res) => {
    try {

        const {email, password} = req.body;
        const user = await User.find({email, password})
        
      
        if(user){

           const currentuser = {
               name: user[0].name,
               email:user[0].email,
               isAdmin:user[0].isAdmin,
               _id:user[0]._id
           }
           console.log(currentuser);
           res.send(currentuser)
        } else {
            return res.status(401).json({error:"user login failed"})
        }
     

  




    } catch (error) {
        console.log(error);
        res.status(500).send()
    }
})


// Google route....

router.post('/googlelogin', (req, res) => {
    const {tokenId} = req.body

    client.verifyIdToken({idToken:tokenId, audience:"878786950565-kmum1ne551io15kq1ibvlae1to9bj11a.apps.googleusercontent.com"}).then((response) => {
        const {email_verified, name, email} = response.payload
   
         console.log(response.payload) 

         if (email_verified) {
            User.findOne({ email }).exec((err, user) => {
                if (user) {
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
                    const { _id, email, name,  } = user;
                    return res.json({
                        token,
                        user: { _id, email, name,  }
                    });
                } else {
                   let password = email+process.env.JWT_SECRET
                   let newuser = new User({ name, email, password });
                    newuser.save((err, data) => {
                        if (err) {
                            console.log('ERROR GOOGLE LOGIN ON USER SAVE', err);
                            return res.status(400).json({
                                error: 'User signup failed with google'
                            });
                        }
                        const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
                        const { _id, email, name,  } = data;
                        return res.json({
                            token,
                            user: { _id, email, name,  }
                        });
                    });
                }
            });
        } else {
            return res.status(400).json({
                error: 'Google login failed. Try again'
            });
        }

    })

})



router.get('/getallusers', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        console.log(error)
    }
})

router.post('/deleteuser', async(req, res)=>{
    try {
        const {userid} = req.body
        await User.findOneAndDelete({_id:userid})
        res.send('user deleted')
        
    } catch (error) {
        console.log(error)
        req.status(400).json({message:error})
    }
})


module.exports = router;