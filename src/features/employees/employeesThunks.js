import { createAsyncThunk } from '@reduxjs/toolkit';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

export const fetchEmployees = createAsyncThunk(
    'employees/fetchEmployees',
    async (_, thunkAPI) => {
        try {
            const res = await fetch(ENDPOINT);

            if (!res.ok) {
                return thunkAPI.rejectWithValue(`HTTP ${res.status}`);
            }

            const ct = res.headers.get('content-type') || '';
            if (!ct.includes('application/json')) {
                return thunkAPI.rejectWithValue('Unexpected content-type');
            }

            const data = await res.json();
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message || 'Request failed');
        }
    }
);