import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchall', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async contact => {
    const { id, name, number } = contact;
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);
