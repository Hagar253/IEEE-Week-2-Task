import { createSlice } from "@reduxjs/toolkit";

// Defining the initial state of the sidebar feature with isSidebarOn set to false
const initialState = {
    isSidebarOn: false
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {   // An object of "case reducers". Key names will be used to generate actions
        // A reducer function to set isSidebarOn to true
        setSidebarOn: (state) => {
            state.isSidebarOn = true;
        },

        // A reducer function to set isSidebarOn to false
        setSidebarOff: (state) => {
            state.isSidebarOn = false;
        }
    },
});

// Exporting the action creators generated by createSlice for setting the sidebar on and off
export const { setSidebarOn, setSidebarOff } = sidebarSlice.actions;
// A selector function to get the current status of isSidebarOn from the state
export const getSidebarStatus = (state) => state.sidebar.isSidebarOn;
export default sidebarSlice.reducer;