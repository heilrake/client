import { UserState } from "../types.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  users: [],
  loading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
