<template>
  <div class="total-value" :style="{ color: textColor }">
    {{ balanceText }} {{ total }}
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    balanceText: "Balance:",
  }),
  computed: {
    textColor() {
      let color = "";

      if (this.total > 0) {
        color = "green";
      } else if (this.total === 0) {
        color = "black";
      } else {
        color = "red";
      }

      return color;
    },
  },
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>
