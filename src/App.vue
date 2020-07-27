<template>
  <div id="app">
    <h1>{{ headerText }}</h1>
    <Form @submit-form="onSubmitForm" />
    <TotalBalance :total="total" />
    <BudgetList :list="list" />
  </div>
</template>

<script>
import BudgetList from "./components/BudgetList.vue";
import TotalBalance from "./components/TotalBalance.vue";
import Form from "./components/Form.vue";
import EventBus from "./event-bus";

/**
 * this.$delete(this.list, id);
 * {Object} - this.list
 * {Any} - option to delete on
 */

export default {
  name: "App",
  components: { BudgetList, TotalBalance, Form },
  data: () => ({
    headerText: "My Budget",
    list: {},
    listBackup: null,
  }),
  methods: {
    onSubmitForm(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };

      this.$set(this.list, newObj.id, newObj);
    },
  },
  computed: {
    total() {
      return Object.values(this.list).reduce((acc, item) => {
        if (item.type === "OUTCOME") {
          return acc - item.value;
        }

        return acc + item.value;
      }, 0);
    },
  },
  mounted() {
    EventBus.$on("remove-item", (itemId) => {
      this.$delete(this.list, itemId);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list-item .dialog-container {
  width: 100%;
  max-width: 500px;
}
</style>
