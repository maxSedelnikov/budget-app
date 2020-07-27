<template>
  <ElDropdown @command="handleCommand">
    <span class="el-dropdown-link">
      {{sortTitle}}
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <ElDropdownMenu slot="dropdown">
      <ElDropdownItem command="INCOME">Incomes</ElDropdownItem>
      <ElDropdownItem command="OUTCOME">Outcomes</ElDropdownItem>
      <ElDropdownItem command="ALL">All</ElDropdownItem>
    </ElDropdownMenu>
  </ElDropdown>
</template>

<script>
export default {
  name: "BudgetSortMenu",
  data: () => ({
    sortTitle: "Sort by",
  }),
  methods: {
    handleCommand(command) {
      this.$emit("sort-list", command);
    },
  },
};
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>