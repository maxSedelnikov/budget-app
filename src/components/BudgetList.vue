<template>
  <div class="budget-list-wrap">
    <ElCard>
      <template v-if="isNotEmpty">
        <div slot="header" class="clearfix">
          <span>{{ header }}</span>
          <BudgetSortMenu @sort-list="sortList" />
        </div>
        <BudgetListItem v-for="(item, prop) in filterList" :key="prop" :listItem="item" />
      </template>
      <template v-else>
        <div slot="header" class="clearfix">
          <span>{{ header }}</span>
        </div>
        <ElAlert type="info" :title="title" :closable="false" />
      </template>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "./BudgetListItem.vue";
import BudgetSortMenu from "./BudgetSortMenu.vue";

export default {
  name: "BudgetList",
  components: { BudgetListItem, BudgetSortMenu },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: "Budget List",
    title: "Empty List",
    filterList: null,
    sortName: "INCOME",
  }),
  methods: {
    sortList(sortName) {
      if (sortName !== "ALL") {
        this.sortName = sortName;
        return (this.filterList = this.sort);
      }

      return (this.filterList = this.list);
    },
  },
  computed: {
    isNotEmpty() {
      return Boolean(Object.keys(this.list).length);
    },
    sort() {
      let result = {};
      for (let item in this.list) {
        let sort = this.list[item];
        if (this.list[item].type === this.sortName) {
          result[item] = sort;
        }
      }
      return result;
    },
  },
  created() {
    this.filterList = this.list;
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
