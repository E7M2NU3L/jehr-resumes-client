import { createSlice } from "@reduxjs/toolkit";
import {PayloadAction} from '@reduxjs/toolkit'

interface ResumeSidebarProps {
    modify: boolean;
    upload: boolean;
    templates: boolean;
    fillers: boolean;
}

export const initialState: ResumeSidebarProps = {
    modify: true,
    upload: false,
    templates: false,
    fillers: false
}

export const ResSlice = createSlice({
    name: 'resume-sidebar',
    initialState: initialState,
    reducers: {
        openModify: (state, action: PayloadAction<ResumeSidebarProps>) => {
            state.modify = action.payload.modify,
            state.upload = false,
            state.templates = false,
            state.fillers = false
        },
        openFillers: (state, action: PayloadAction<ResumeSidebarProps>) => {
            state.fillers = action.payload.fillers,
            state.upload = false,
            state.templates = false,
            state.modify = false
        },
        openTemplates: (state, action: PayloadAction<ResumeSidebarProps>) => {
            state.templates = action.payload.templates,
            state.upload = false,
            state.modify = false,
            state.fillers = false
        },
        openupload: (state, action: PayloadAction<ResumeSidebarProps>) => {
            state.upload = action.payload.upload,
            state.modify = false,
            state.templates = false,
            state.fillers = false
        }
    }
});

export const {openFillers, openModify, openTemplates, openupload} = ResSlice.actions;
export const ResReducer = ResSlice.reducer;