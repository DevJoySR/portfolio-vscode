import { createSlice } from "@reduxjs/toolkit";

interface ExplorerState {
  selectedFile: string | null;
}

const initialState: ExplorerState = {
  selectedFile: null,
};

const explorerSlice = createSlice({
  name: "explorer",
  initialState,
  reducers: {
    selectFile: (state, action) => {
      state.selectedFile = action.payload;
    },
  },
});

export const { selectFile } = explorerSlice.actions;
export default explorerSlice.reducer;
