import { createSlice } from "@reduxjs/toolkit";

export const atividadesSlice = createSlice({
    name: 'atividades',
    initialState: [],
    reducers: {
        addAtividade: (state, action) => {
            const item = {
                id: state.length + 1,
                titulo: action.payload.titulo,
                descricao: action.payload.descricao,
                concluido: action.payload.concluido
            }
            state.push(item)
        },

        updateAtividade: (state, action) => {
            let idx = state.findIndex(item => item.id === action.payload.id)
           
            state[idx].titulo = action.payload.titulo
            state[idx].descricao = action.payload.descricao
            state[idx].concluido = action.payload.concluido
        },

        removeAtividade: (state, action) => {
            let idx = state.findIndex(item => item.id === action.payload.id)
            state.splice(idx, 1)
        }
    }
})

export const { addAtividade, updateAtividade, removeAtividade, returnEstado } = atividadesSlice.actions
export default atividadesSlice.reducer