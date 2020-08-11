<template>
  <div class="total-value" :style="{ color: textColor }">
    {{ balanceText }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TotalBalance",
  data: () => ({
    text: "Balance:",
  }),
  computed: {
    ...mapGetters("budget", ["balance"]),
    textColor() {
      let color = "";

      if (this.balance > 0) {
        color = "green";
      } else if (this.balance === 0) {
        color = "black";
      } else {
        color = "red";
      }

      return color;
    },
    balanceText() {
      return `${this.text} ${this.balance}`;
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
