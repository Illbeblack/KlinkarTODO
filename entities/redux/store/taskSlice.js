import { createSlice, nanoid } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTask = {
        id: nanoid(),
        title: action.payload.title,
        desc: action.payload.desc,
      };
      state.push(newTask);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = taskSlice.actions;

export default taskSlice.reducer;
