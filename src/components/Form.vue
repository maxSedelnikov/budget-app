<template>
  <ElCard class="form-card">
    <ElForm :model="formData" status-icon :rules="rules" ref="addItemForm">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" :placeholder="selectPlaceHolder">
          <ElOption label="Income" value="INCOME" />
          <ElOption label="Outcome" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">{{ buttonFormText }}</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: "Form",
  data() {
    var checkValue = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Please input the value different from 0"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("Please input digits"));
        } else {
          if (value <= 0) {
            callback(new Error("Value must greater than 0"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var checkComment = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Please leave the comment"));
      }
      setTimeout(() => {
        if (value.length < 2) {
          callback(new Error("Please provide more information"));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      formData: {
        type: "INCOME",
        comment: "",
        value: 0,
      },
      rules: {
        type: [
          { required: true, message: "Please select type", trigger: "blur" },
        ],
        comment: [{ validator: checkComment, trigger: "blur" }],
        value: [{ validator: checkValue, trigger: "blur" }],
      },
      buttonFormText: "Submit",
      selectPlaceHolder: "Choose type...",
    };
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          this.$emit("submit-form", { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}
.type-select {
  width: 100%;
}
</style>
