<template>
  <div class="six-digit-input">
    <input
        v-for="(digit, index) in digits"
        :key="index"
        type="text"
        v-model="digits[index]"
        maxlength="1"
        @input="handleInput(index, $event)"
        @keydown.delete="handleDelete(index, $event)"
        ref="inputs"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      digits: ['', '', '', '', '', '']
    };
  },
  watch: {
    // 监听父组件传递的 value 变化
    value(newVal) {
      this.updateDigits(newVal);
    }
  },
  methods: {
    handleInput(index, event) {
      const value = event.target.value;
      if (value && index < 5) {
        this.$refs.inputs[index + 1].focus();
      }
      this.emitCode();
    },
    handleDelete(index, event) {
      if (!this.digits[index] && index > 0) {
        this.$refs.inputs[index - 1].focus();
      }
      this.emitCode();
    },
    emitCode() {
      const code = this.digits.join('');
      this.$emit('input', code); // 将最新的验证码传递给父组件
    },
    updateDigits(code) {
      // 将父组件传递的 code 同步到 digits
      this.digits = Array.from({ length: 6 }, (_, i) => code[i] || '');
    }
  },
  mounted() {
    // 初始化时根据父组件传递的 value 更新 digits
    this.updateDigits(this.value);
  }
};
</script>

<style scoped>
.six-digit-input {
  display: flex;
}

.six-digit-input input {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 5px;
}

.six-digit-input input:last-child {
  margin-right: 0;
}

.six-digit-input input:focus {
  border-color: #66afe9;
  outline: none;
}
</style>