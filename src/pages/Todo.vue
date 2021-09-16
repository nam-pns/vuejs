<template>
<div class="todo_container">
  <div class="container_box">
    <h2 class="title_todo">Todo List</h2>
    <div>
      <span class="subtitle">Sub title</span>
    </div>
    <p class="note">{{ updateMessage }}</p>
    <AddTodo @add-todo="addTodo" />
    <ul class="todo_list">
      <TodoItem v-for="todo in todos" :key="todo.id" :todoProps="todo" @item-completed="maskComplete" @delele-item="deleteTodo" />
    </ul>
  </div>
</div>
</template>

<script>
import {
  ref,
  computed
} from 'vue'

import {
  v4 as uuidv4
} from 'uuid'

import AddTodo from '../components/AddTodo.vue'
import TodoItem from '../components/TodoItem.vue'

export default {
  name: 'Todo',
  components: {
    TodoItem,
    AddTodo
  },
  setup(props) {
    const todos = ref([{
        id: uuidv4(),
        title: 'Viec 1',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Viec 2',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Viec 3',
        completed: false
      }
    ])

    const message = ref("");

    const maskComplete = id => {
      todos.value = todos.value.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo
      })
    }

    const deleteTodo = id => {
      todos.value = todos.value.filter(todo => todo.id !== id)
    }

    const addTodo = newTodo => {
      todos.value.push(newTodo)
    }

    const updateMessage = computed(() => {
      if (todos.value.length > 5) {
          return message.value = "Lưu ý: Bạn Cần hoàn thành công việc"
        }
    })

    return {
      todos,
      message,
      maskComplete,
      deleteTodo,
      addTodo,
      updateMessage
    }
  }

}
</script>

<style scoped>

div .subtitle {
  color: pink;
}

.todo_container >>> .todo_form {
  padding: 20px;
  background-color: green;
}

.todo_container {
  background-color: #afd;
  padding: 100px;
}

.container_box {
  padding: 25px;
  border-radius: 10px;
  background-color: #fff;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.container_box .title_todo {
  font-size: 30px;
}

.todo_list {
  padding: 0;
}

.note {
  color:red;
}
</style>
