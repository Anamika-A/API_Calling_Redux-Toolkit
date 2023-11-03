import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: null,
  isError: false
};

export const fetchtodo = createAsyncThunk("fetchtodo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchtodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchtodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchtodo.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  }
});

export default todoSlice.reducer;
