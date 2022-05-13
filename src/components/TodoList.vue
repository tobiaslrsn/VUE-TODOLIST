<template>
  <!-- PARENT -->
  <div class="parent">
    <TodoInput @todoInput="pushTodo($event)"></TodoInput>

    <ul>
      <div v-if="oneTodo.length > 0">
        <div class="filter">
          <div class="div">
            <p class="sort-by">Sort by:</p>
            <p @click="mostRecent()" class="filter-hover">newest</p>
            <p @click="oldestTodo()" class="filter-hover">oldest</p>
            <p @click="doneTodo()" class="filter-hover">done</p>
            <p @click="doneTodo()" class="filter-hover">not done</p>
          </div>
        </div>
        <!-- <transition-group> -->
        <div v-for="(loopTodo, d) in oneTodo" :key="d.id">
          <TodoSingle
            :todoProp="loopTodo"
            @todoStatusUpdate="updateTodo($event)"
            @todoDelete="deleteTodo($event)"
          >
          </TodoSingle>
        </div>
        <!-- </transition-group> -->
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
  /* Här sker alla förändringar */
  oneTodo: Todo[] = [];

  mounted() {
    this.oneTodo = JSON.parse(localStorage.getItem("todos") || "[]");
    this.mostRecent;
  }

  pushTodo(p: Todo) {
    this.oneTodo.unshift(p);

    localStorage.setItem("todos", JSON.stringify(this.oneTodo));
    console.log(this.oneTodo);
  }

  updateTodo(id: number) {
    let todo = this.oneTodo.find((todo) => todo.id === id);

    if (todo) {
      todo.done = !todo.done;
      localStorage.setItem("todos", JSON.stringify(this.oneTodo));
    }

    console.log(this.oneTodo);
  }

  deleteTodo(d: number) {
    let index = this.oneTodo.findIndex((todo) => todo.id === d);

    this.oneTodo.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.oneTodo));

    console.log(d);
  }

  mostRecent() {
    this.oneTodo.sort((a, b) => {
      if (a.id > b.id) {
        return -1;
      }
      {
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
    /* 
    if (done === !done) {
      this.oneTodo.sort((x, y) => x.id - y.id);
      console.log("works");
    } else {
      console.log("fel");
      return [];
    } */
    /* 
    this.oneTodo.sort((a, b) => {
      if (a.done !== b.done) {
        return 1;
      }
      if (b.done !== a.done) {
        return -1;
      }
      return 0;
    }); */
  }
  notDone() {
    /* 
    if (done === !done) {
      this.oneTodo.sort((x, y) => x.id - y.id);
      console.log("works");
    } else {
      console.log("fel");
      return [];
    } */
    this.oneTodo.sort((a, b) => {
      if (a.done != b.done) {
        return 1;
      } else {
        return -1;
      }
    });
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

    .div {
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
    // width: 60vw;
    // margin-left: 2rem;
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5 ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
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
    }
  }
}
</style>
