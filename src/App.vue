<template>
  <div id="app">
    <h1>{{ headerText }}</h1>
    <Form />
    <TotalBalance />
    <BudgetList />
  </div>
</template>

<script>
import BudgetList from "./components/BudgetList.vue";
import TotalBalance from "./components/TotalBalance.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: { BudgetList, TotalBalance, Form },
  data: () => ({
    headerText: "My Budget",
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.list-item .dialog-container {
  width: 100%;
  max-width: 500px;
}
</style>
