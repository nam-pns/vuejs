<template>
  <li :class="['todo_item', todoProps.completed ? 'is-completed' : '']">
    <input type="checkbox"
    :checked="todoProps.completed"
    @change="maskItemCompleted" />
    <div class="todo_name">
      {{ todoProps.title }}
    </div>
    <div class="del" @click="deleteItem">
      Remove
    </div>
  </li>
</template>

<script>

export default {
  name: 'TodoItem',
  props: ['todoProps'],
  setup(props, context) {
    const maskItemCompleted = () => {
      context.emit('item-completed', props.todoProps.id)
    }

    const deleteItem = () => {
      context.emit('delele-item', props.todoProps.id);
    }

    return {
      maskItemCompleted,
      deleteItem
    }
  }
}
</script>

<style scoped>
.todo_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  font-size: 16px;
}

.todo_item .todo_name {
  font-weight: 500;
  margin-left: 10px;
}

.todo_item.is-completed .todo_name {
  text-decoration-line: line-through;
}

.todo_item .del {
  color: red;
  border: 1px solid red;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  margin-left: auto;
}

.todo_item .del:hover {
  background-color: red;
  color: #fff;
}
</style>
