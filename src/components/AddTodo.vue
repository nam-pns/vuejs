<template>
<form class="todo_form" @submit="addItem">
  <div class="form_input">
    <input type="text" name="todo" placeholder="Add Todo" v-model="title" />
  </div>
  <div class="form_button">
    <button type="submit" name="button" class="btn_submit">Add</button>
  </div>
</form>
</template>

<script>
import {
  ref
} from 'vue'

import {v4 as uuidv4} from 'uuid'

export default {
  name: 'AddTodo',
  setup(props, context) {
    const title = ref('')
    const addItem = event => {
      event.preventDefault()

      const newItem = {
        id: uuidv4(),
        title: title.value,
        completed: false
      }

      context.emit('add-todo', newItem)

      title.value = ''
    }
    return {
      title,
      addItem
    }
  }
}
</script>

<style scoped>
.todo_form {
  display: flex;
  justify-content: space-between;
}

.todo_form .form_input {
  width: 85%;
}

.todo_form .form_input input,
.todo_form .form_button button {
  width: 100%;
  padding: 10px;
  font-size: 15px;
}

.todo_form .form_input input {
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
}

.todo_form .form_input input:focus,
.todo_form .form_input input:hover,
.todo_form .form_input input:click {
  border-color: green;
}

.todo_form .form_button button {
  border: 1px solid green;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.01);
  color: green;
  background-color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.todo_form .form_button button:hover {
  color: #fff;
  background-color: green;
}

.todo_form .form_button {
  width: 10%;
}
</style>
