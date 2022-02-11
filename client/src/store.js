import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import  {productListReducers, productDetailReducers, AddproductReducers, getproductbyidReducers, editproductReducers} from './reducers/productReducers'
import { cartListReducer } from './reducers/cartReducer'
import { loginListReducers, registerListReducers, getallusersReducers } from './reducers/userReducers'
import { placeOrderReducers, getUserOrderReducers, getallordersReducers } from './reducers/orderReducer'

const reducer = combineReducers({
    productList:productListReducers,
    productDetail:productDetailReducers,
    cart:cartListReducer,
    Login: loginListReducers,
    register: registerListReducers,
    placeOrderReducers:placeOrderReducers,
    getUserOrderReducers:getUserOrderReducers,
    AddproductReducers:AddproductReducers,
    getproductbyidReducers:getproductbyidReducers,
    editproductReducers:editproductReducers,
    getallordersReducers:getallordersReducers,
    getallusersReducers:getallusersReducers

})

const cartitemsfromStorage = localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem ('cartitems')): []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): null

const initialState = {
    cart: {cartItems: cartitemsfromStorage},
    Login: {currentUser : currentUser}
   
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;