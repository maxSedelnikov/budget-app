import Vue from "vue";

const budgetStore = {
  namespaced: true,
  state: {
    list: {},
    sortingName: {
      value: "ALL",
    },
  },
  getters: {
    transactionsList: ({ list }) => list,
    transactionsFilteredList: ({ list, sortingName }) => {
      if (sortingName.value !== "ALL") {
        return Object.values(list)
          .filter((item) => item.type === sortingName.value)
          .reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
          }, {});
      }

      return list;
    },
    balance: ({ list }) =>
      Object.values(list).reduce((acc, item) => {
        if (item.type === "OUTCOME") {
          return acc - item.value;
        }

        return acc + item.value;
      }, 0),
  },
  mutations: {
    ADD_TRANSACTION(state, transaction) {
      Vue.set(state.list, transaction.id, transaction);
    },
    DELETE_TRANSACTION(state, id) {
      Vue.delete(state.list, id);
    },
    CHANGE_SORTING_NAME(state, value) {
      state.sortingName.value = value;
    },
  },
  actions: {
    addNewTransaction({ commit }, transaction) {
      const newTransaction = { ...transaction, id: String(Math.random()) };
      commit("ADD_TRANSACTION", newTransaction);
    },
    deleteTransaction({ commit }, id) {
      commit("DELETE_TRANSACTION", id);
    },
    changeSortingName({ commit }, name) {
      commit("CHANGE_SORTING_NAME", name);
    },
  },
};

export default budgetStore;
