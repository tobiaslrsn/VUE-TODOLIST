<template>
  <div class="parent">
    <TodoInput @todoInput="pushTodo($event)"></TodoInput>

    <ul>
      <div v-if="oneTodo.length > 0">
        <div class="filter">
          <div class="filter-container">
            <p class="sort-by">Sort by:</p>
            <p @click="allTodos" class="filter-hover">All</p>
            <p @click="mostRecent()" class="filter-hover">Newest</p>
            <p @click="oldestTodo()" class="filter-hover">Oldest</p>
            <p @click="doneTodo()" class="filter-hover">Done</p>
            <p @click="notDone()" class="filter-hover">Not done</p>
          </div>
        </div>

        <div v-for="(loopTodo, d) in oneTodo" :key="d.id">
          <TodoSingle
            :todoProp="loopTodo"
            @todoStatusUpdate="updateTodo($event)"
            @todoDelete="deleteTodo($event)"
          >
          </TodoSingle>
        </div>
      </div>
      <div class="empty-todolist" v-else>
        <h3>YOU HAVE NOTHING TODO</h3>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoSingle from "./TodoSingle.vue";
import TodoInput from "./TodoInput.vue";
import { Todo } from "../models/Todo";

@Options({
  components: { TodoSingle, TodoInput },
})
export default class TodoList extends Vue {
  oneTodo: Todo[] = [];

  mounted() {
    this.oneTodo = JSON.parse(localStorage.getItem("todos") || "[]");
  }

  pushTodo(p: Todo) {
    this.oneTodo.unshift(p);

    localStorage.setItem("todos", JSON.stringify(this.oneTodo));
  }

  updateTodo(id: number) {
    let todo = this.oneTodo.find((todo) => todo.id === id);

    if (todo) {
      todo.done = !todo.done;
      localStorage.setItem("todos", JSON.stringify(this.oneTodo));
    }
  }

  deleteTodo(d: number) {
    let index = this.oneTodo.findIndex((todo) => todo.id === d);
    this.oneTodo.splice(index, 1);

    localStorage.setItem("todos", JSON.stringify(this.oneTodo));
  }

  mostRecent() {
    this.oneTodo.sort((a, b) => {
      if (a.id > b.id) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  oldestTodo() {
    this.oneTodo.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  doneTodo() {
    this.oneTodo = JSON.parse(localStorage.getItem("todos") || "[]").filter(
      (todo: { done: boolean }) => {
        return todo.done === true;
      }
    );
  }
  notDone() {
    this.oneTodo = JSON.parse(localStorage.getItem("todos") || "[]").filter(
      (todo: { done: boolean }) => {
        return todo.done === false;
      }
    );
  }

  allTodos() {
    this.oneTodo = JSON.parse(localStorage.getItem("todos") || "[]").filter(
      (todo: { done: boolean }) => {
        return todo.done === todo.done;
      }
    );
  }
}
</script>

<style scoped lang="scss">
.sort-by {
  font-weight: 400;
  background-color: lightblue;
  padding: 0.5rem;
}

.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;

  .filter {
    width: 90vw;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 1.1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .filter-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
    }
  }

  .filter-hover {
    transition: 0.3s;
    cursor: pointer;
  }

  .filter-hover:hover {
    color: gray;
    opacity: 1;
  }

  ul {
    width: 90vw;
    height: 100px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .empty-todolist {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;

      h3 {
        color: gray;
      }
    }
  }
}

@media screen and (min-width: 930px) {
  .parent {
    flex-direction: row;

    ul {
      width: 40vw;
    }

    .filter {
      width: 30vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      left: 0;
      margin-top: 1.5rem;

      .filter-container {
        gap: 1.5;
        width: 40vw;
      }
    }
  }
}
</style>
