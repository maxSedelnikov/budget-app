<template>
  <div class="budget-list-wrap">
    <ElCard>
      <template v-if="isNotEmpty">
        <div slot="header" class="clearfix">
          <span>{{ header }}</span>
          <BudgetSortMenu @sort-list="sortList" />
        </div>
        <BudgetListItem
          v-for="(item, prop) in transactionsFilteredList"
          :key="prop"
          :listItem="item"
        />
      </template>
      <template v-else>
        <div slot="header" class="clearfix">
          <span>{{ header }}</span>
        </div>
        <ElAlert type="info" :title="titleEmpty" :closable="false" />
      </template>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "./BudgetListItem.vue";
import BudgetSortMenu from "./BudgetSortMenu.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BudgetList",
  components: { BudgetListItem, BudgetSortMenu },
  data: () => ({
    header: "Budget List",
    titleEmpty: "Empty List",
  }),
  methods: {
    ...mapActions("budget", ["changeSortingName"]),
    sortList(sortName) {
      return this.changeSortingName(sortName);
    },
  },
  computed: {
    ...mapGetters("budget", ["transactionsList", "transactionsFilteredList"]),
    isNotEmpty() {
      return Boolean(Object.keys(this.transactionsList).length);
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
.el-card__header .clearfix {
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
