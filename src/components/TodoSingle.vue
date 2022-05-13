<template>
  <div class="wrapper">
    <li>
      <div>
        <span class="todo-input" :class="{ todo_complete: todoProp.done }">
          {{ todoProp.todo }}</span
        >
      </div>
    </li>
    <div class="todo-updates">
      <p @click="todoDelete"><i class="fa-solid fa-eraser"></i></p>
      <p @click="changeStatus"><i class="fa-solid fa-check"></i></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Todo } from "../models/Todo";

export default class TodoSingle extends Vue {
  @Prop() todoProp!: Todo;

  changeStatus() {
    this.$emit("todoStatusUpdate", this.todoProp.id);
  }

  todoDelete() {
    this.$emit("todoDelete", this.todoProp.id);
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0;
  justify-content: space-between;
  border-bottom: 1px solid black;

  .todo_complete {
    text-decoration: line-through;
    color: lightblue;
  }

  li {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }
  }

  .todo-updates {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
    gap: 2rem;
    font-size: 1.5rem;
  }

  span {
    width: 5rem;
    word-break: break-all;
  }

  input {
    border: none;
    outline: none;
  }

  .todo-input {
    font-size: 1.2rem;
    width: 50vw;
    font-weight: 200;
  }
}

.fa-eraser:hover {
  color: rgba(255, 0, 0, 0.375);
}

.fa-check:hover {
  color: lightblue;
}

@media screen and (min-width: 930px) {
  .wrapper {
    justify-content: normal;
    gap: 0;

    .todo-input {
      width: 30vw;
    }
  }
}
</style>
