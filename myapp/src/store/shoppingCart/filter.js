import { createSlice } from '@reduxjs/toolkit';


const initialState = () => ({
    data: [],
})


const fliterSlice = createSlice({
    name: 'filter',
    initialState: initialState,

    reducers: {
        sortAsc: (state, { payload }) => {
            const result = payload.sort((a, b) => a.price - b.price)
            return {
                ...state,
                data: result
            }
        },
        sortDes: (state, { payload }) => {
            let result = payload.sort((a, b) => b.price - a.price)
            return {
                ...state,
                data: result
            }
        },
        sortAz: (state, { payload }) => {
            let sortNameAsc = payload.sort((a, b) => a.title.localeCompare(b.title))
            return {
                ...state,
                data: sortNameAsc
            }
        },
        sortZa: (state, { payload }) => {
            let sortNameDes = payload.sort((a, b) => (b.title).localeCompare(a.title))
            return {
                ...state,
                data: sortNameDes
            }
        },
        loadData : (state,{payload}) => {
            return state
          },
    }

})


export const filterActions = fliterSlice.actions;
console.log(filterActions)

export default fliterSlice