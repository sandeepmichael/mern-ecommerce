const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
  {
       name:{type:String, require},
       email:{type:String, require},
       userid: {type:String, require},
       orderItems : [],
       shippingAddress:{type:Object},
       orderAmount:{type:Number, require},
       isDelivered:{type:Boolean, require, default:false},
       transcationId:{type:Boolean, require}
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;