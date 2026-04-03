import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../supabase";


// ----------fetch expenses----------------

export const fetchExpenses = createAsyncThunk(
"expenses/fetchExpenses",

async(user_id, { rejectWithValue }) => {
const { data, error } = await supabase
.from("expenses")
.select("*")
.eq("user_id", user_id)
.order("date", { ascending: false });

if(error) return rejectWithValue(error.message);
return data;
}
);

// ----------add expense----------------

export const addExpense = createAsyncThunk(
    "expenses/addExpense",
    
    async({user_id, title, amount, category, date }, {rejectWithValue}) => {
        const { data, error } = await supabase
        .from("expenses")
        .insert([{ user_id, title, amount, category, date }])
        .select()

        if(error) return rejectWithValue(error.message);
        return data[0];
    }
)

// ----------update expense----------------

export const updateExpense = createAsyncThunk(
    "expenses/updateExpense",
    async({id, title, amount, category, date}, {rejectWithValue}) => {
        const { data, error } = await supabase
        .from("expenses")
        .update({ title, amount, category, date })
        .eq("id", id)
        .select()

        if(error) return rejectWithValue(error.message);
        return data[0];
    }
)

// ----------delete expense----------------

export const deleteExpense = createAsyncThunk(
    "expenses/deleteExpense",
    async(id, {rejectWithValue}) => {
        const { data, error } = await supabase
        .from("expenses")
        .delete()
        .eq("id", id)

        if(error) return rejectWithValue(error.message);
        return id;
    }
)


const expenseSlice = createSlice({
    name: 'expenses',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder

        // ----------fetch expenses----------------

        .addCase(fetchExpenses.pending, (state) => {
            state.loading = true;
            state.error = null;
            console.log("Fetching expenses...");
        })
        .addCase(fetchExpenses.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
            console.log("Expenses fetched:", state.items);
        }) 
        .addCase(fetchExpenses.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
            console.error("Error fetching expenses:", state.error);
        })

        // ----------add expense----------------

        .addCase(addExpense.fulfilled, (state, action) => {
            state.items.unshift(action.payload);
         console.log("Expense added:", action.payload);
        })

        .addCase(addExpense.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
            console.error("Error adding expense:", state.error);
        })

        // ----------update expense----------------

        .addCase(updateExpense.fulfilled, (state, action)  => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);

            if(index !== -1) {
                state.items[index] = action.payload;
            }
        })

        .addCase(updateExpense.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
            console.error("Error updating expense:", state.error);

        })

        // ----------delete expense----------------

         .addCase(deleteExpense.fulfilled, (state, action) => {
            state.items = state.items.filter((item) => 
                item.id !== action.payload);
         })
            .addCase(deleteExpense.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
            console.error("Error deleting expense:", state.error);
            })
    }
})


export default expenseSlice.reducer;