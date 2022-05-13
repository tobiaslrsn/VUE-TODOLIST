<template>
  <div class="test">
    <h1>An average todolist</h1>
    <div class="link-container">
      <p><a href="https://github.com/tobiaslrsn">Github</a></p>
      <p><a href="https://github.com/tobiaslrsn">linkedIn</a></p>
      <p><a href="mailto: tobias.larsson@medieinstitutet.se"> Email</a></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.test {
  background-image: url(https://source.unsplash.com/900x600/?landscape);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 15rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: white;
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.374);
  }
  .link-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    a,
    p {
      color: white;
      font-size: 1.4rem;
      text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.374);
      text-decoration: none;
      font-weight: 400;
    }
  }
}
</style>
