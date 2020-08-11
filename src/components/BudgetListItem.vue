<template>
  <div class="list-item">
    <template v-if="listItem.type === 'INCOME'">
      <span class="budget-icon">
        <i class="el-icon-top" :style="{ color: textColor }"></i>
      </span>
    </template>
    <template v-else>
      <span class="bidget-icon">
        <i class="el-icon-bottom" :style="{ color: textColor }"></i>
      </span>
    </template>
    <span class="budget-comment">{{ listItem.comment }}</span>
    <span class="budget-value" :style="{ color: textColor }">{{
      listItem.value
    }}</span>
    <ElButton type="danger" size="mini" @click="dialogVisible = true">{{
      deleteButtonText
    }}</ElButton>
    <ElDialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      custom-class="dialog-container"
    >
      <span>{{ dialogConfirmation }}</span>
      <span slot="footer" class="dialog-footer">
        <ElButton @click="dialogVisible = false">{{
          dialogButtonCancel
        }}</ElButton>
        <ElButton type="primary" @click="removeItem(listItem.id)">{{
          dialogButtonConfirm
        }}</ElButton>
      </span>
    </ElDialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BudgetListItem",
  props: {
    listItem: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    deleteButtonText: "Delete",
    dialogVisible: false,
    dialogTitle: "Please confirm your action",
    dialogButtonCancel: "Cancel",
    dialogButtonConfirm: "Confirm",
  }),
  methods: {
    ...mapActions("budget", ["deleteTransaction"]),
    removeItem(id) {
      this.dialogVisible = false;
      this.deleteTransaction(id);
    },
  },
  computed: {
    dialogConfirmation() {
      return `Are you sure you want to delete ${this.listItem.comment}`;
    },
    textColor() {
      let color = "green";

      if (this.listItem.type !== "INCOME") {
        return (color = "red");
      }

      return color;
    },
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
}
.list-item .budget-comment {
  margin-left: 20px;
}
.list-item .budget-value {
  font-weight: bold;
  margin-right: 20px;
  margin-left: auto;
}
.budget-icon i {
  font-weight: bold;
}
</style>
