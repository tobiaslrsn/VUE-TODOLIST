<template>
  <div>
    <Header></Header>

    <TodoList>
      <!-- Här ligger SingleTodo -->
    </TodoList>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import Header from "./components/Header.vue";

@Options({
  components: {
    TodoInput,
    Header,
    TodoList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  // background-color: #c7e9fb;
  background: linear-gradient(
    90deg,
    #ebeff62c 0%,
    rgba(234, 236, 238, 0.319) 21%,
    rgba(225, 229, 230, 0.305) 83%,
    rgba(233, 242, 255, 0.325) 100%
  );
  height: 100%;
}

i:hover {
  cursor: pointer;
  transition: 0.2s;
}
#app {
  font-family: sans-serif;
  font-weight: 100;
}

@media screen and (min-width: 930px) {
  .parent {
    flex-direction: row;
    gap: 5rem;
  }
}
</style>
