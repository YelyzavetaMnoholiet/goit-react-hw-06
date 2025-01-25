import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // addContact: (state, action) => {
    //   state.contacts.items.push(action.payload);
    // },
    addContact: (state, action) => {
      console.log("Current contacts:", state.contacts.items);
      console.log("Adding contact:", action.payload);

      state.contacts.items = [...state.contacts.items, action.payload];
    },

    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const contactsReducers = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
