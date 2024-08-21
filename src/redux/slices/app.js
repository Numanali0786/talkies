import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "../store";

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT"
    }
}

const slice = createSlice({

    name: 'App',
    initialState,
    reducers: {
        toggleSidebar(state, action) {
            state.sidebar.open = !state.sidebar.open
        },
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type
        },
    }
})


// export const {toggleSidebar,updateSidebarType} = slice.actions

export default slice.reducer


export function ToggleSidebar() {
    return async () => {
        dispatch(slice.actions.toggleSidebar())
    }
}

export function UpdateSidebarType(type) {
    return async () => {
        dispatch(slice.actions.updateSidebarType({
            type,
        }))
    }
}