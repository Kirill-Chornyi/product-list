import {configureStore} from "@reduxjs/toolkit";
import toggleReducer from "./listSlice";

export default configureStore ({
    reducer:{
        toggle: toggleReducer
    }
})