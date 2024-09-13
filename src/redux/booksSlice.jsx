import { createSlice } from '@reduxjs/toolkit';
import { books } from '../data/BookData'; 
const booksSlice = createSlice({
    name: 'books',
    initialState: {
        items: books, 
    },
    reducers: {
        addBook: (state, action) => {
            state.items.push({ id: Date.now(), ...action.payload });
        }
    }
});
export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
