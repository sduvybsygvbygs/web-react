import {configureStore} from "@reduxjs/toolkit";
import themeReducer from '../features/theme/themeSlice';
import employeesReducer from '../features/employees/employeesSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        employees: employeesReducer,
    },
    devTools: {
        name: 'Web React Lab 13',
    },
})