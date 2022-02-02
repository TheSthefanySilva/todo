import { configureStore } from "@reduxjs/toolkit";
import atividadesReducer from './slices/atividadesSlice'

export default configureStore({
    reducer: {
        atividades: atividadesReducer
    }
}) 