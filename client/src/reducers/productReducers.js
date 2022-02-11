



export const productListReducers = (state = { products: []}, action) => {
    switch  (action.type) {
        case 'PRODUCT_LIST_REQUEST':
            return {loading: true, ...state}
        case 'PRODUCT_LIST_SUCCESS':
            return {loading : false, products: action.payload}
        case 'PRODUCT_LIST_FAIL':
            return {loading: false, error: action.payload}
        default:
            return state;
    }

}


export const productDetailReducers = (state = {product : { reviews: []}}, action) => {
    switch  (action.type) {
        case 'PRODUCT_DETAIL_REQUEST':
            return {loading: true, ...state}
        case 'PRODUCT_DETAIL_SUCCESS':
            return {loading : false, product: action.payload}
        case 'PRODUCT_DETAIL_FAIL':
            return {loading: false, error: action.payload}
        default:
            return state;
    }

}



export const getproductbyidReducers = (state = {}, action) => {
    switch  (action.type) {
        case 'GET_PRODUCTBYID_REQUEST':
            return {loading: true, ...state}
        case 'GET_PRODUCTBYID_SUCCESS':
            return {loading : false, product: action.payload}
        case 'GET_PRODUCTBYID_FAIL':
            return {loading: false, error: action.payload}
        default:
            return state;
    }

}





export const AddproductReducers = (state = { }, action) => {
    switch  (action.type) {
        case 'ADD_PRODUCT_REQUEST':
            return {loading: true, ...state}
        case 'ADD_PRODUCT_SUCCESS':
            return {loading : false, success:true}
        case 'ADD_PRODUCT_FAIL':
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export const editproductReducers = (state = { }, action) => {
    switch  (action.type) {
        case 'EDIT_PRODUCT_REQUEST':
            return {editloading: true, ...state}
        case 'EDIT_PRODUCT_SUCCESS':
            return {editloading : false, editsuccess:true}
        case 'EDIT_PRODUCT_FAIL':
            return {editloading: false, editerror: action.payload}
        default:
            return state;
    }
}
