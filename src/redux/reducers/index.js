import { combineReducers } from "redux";
import auth from "./auth";
import getVendor from "./getVendor";
import product from "./product";
import search from "./search";
import booking from "./booking";
import home from "./home";




export default combineReducers ({
    auth,
    getVendor,
    product,
    search,
    booking,
    home,
})
