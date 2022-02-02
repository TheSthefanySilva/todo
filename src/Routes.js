import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'

import store from './redux/store'

import Atividades from "./pages/Atividades/index.js"
import AtividadesPorConclusao from "./pages/AtividadesPorConclusao/index.js"

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter   BrowserRouter>
                <Routes>
                    <Route path="/"                        exact element={<Atividades/>} />
                    <Route path="/PorConclusao"      element={<AtividadesPorConclusao/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}