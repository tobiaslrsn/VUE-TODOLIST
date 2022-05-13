<template>
  <div>
    <form @submit.prevent>
      <input type="text" placeholder="New todo..." v-model="todoTask" />
      <button
        @click="
          () => {
            addTodo();
          }
        "
      >
        ADD
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Todo } from "../models/Todo";

export default class TodoInput extends Vue {
  todoTask = "";
  // todoDate: Date = new Date();

  todoStatus = false;
  id: number = new Date().getTime();

  addTodo() {
    if (this.todoTask) {
      this.$emit(
        "todoInput",
        new Todo(
          this.todoTask,

          /* this.todoDate, */ this.todoStatus
        )
      );
      this.todoTask = "";
    } else {
      console.log("Kan inte lämna tomt");
    }
  }
}
</script>

<style scoped lang="scss">
form {
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  input {
    margin: 1rem 0 1rem 0;
    width: 20rem;
    padding: 0.5rem 0 0.5rem 0.3rem;
    height: 2rem;
    border: none;
    font-size: 1.3rem;
    color: gray;
    border-bottom: 1px solid lightblue;
    border-left: 1px solid lightblue;
  }
  input::placeholder {
    font-size: 1.3rem;
  }
}
button {
  width: 5rem;
  height: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
}

@media screen and (min-width: 930px) {
  form {
    justify-content: normal;
    width: 100%;
  }
}
</style>
