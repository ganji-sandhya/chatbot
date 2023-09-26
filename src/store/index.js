import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialMessageState = [{
    user_type: 'bonnie',
    message_summary: "Hey! I'm Bonnie, your assistent for customer events in Paluo Alto! I'll do it all:",
    message_detail_type: 1,
    list_with_icons: true,
    end_message_note: "What kind of customer event are you planning"
}];

const messagesSlice = createSlice({
    name: 'messages',
    initialState: initialMessageState,
    reducers: {
        addMessage(state, action) {
           state.push(action.payload);
        }
    }
});

const store = configureStore({
    reducer: {messages: messagesSlice.reducer}
});

export const messageActions = messagesSlice.actions;

export default store;