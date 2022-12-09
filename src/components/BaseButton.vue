<template>
  <div>
    <button :class="styling" @click="bookmarking">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: { default: "Add Bookmark" },
    variant: {
      type: String,
      default: "primary",
    },
  },

  computed: {
    styling() {
      return `btn + " " + btn--${this.variant}`;
    },
  },
  methods: {
    bookmarking(event) {
      console.log(event);
      this.$emit("bookmarking", event);
    },
  },
};
</script>
<style scoped>
.btn {
  border: 3px solid transparent;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
  height: 50px;
  width: 140px;
}

.btn--primary {
  border-color: var(--primary-dark);
  background-color: var(--primary);
  color: #fff;
}

.btn--primary:hover {
  border-color: var(--primary);
  background-color: var(--primary-dark);
}

.btn--secondary {
  border-color: var(--primary);
  background-color: transparent;
  color: var(--primary);
}

.btn--secondary:hover {
  background-color: var(--primary);
  color: #fff;
}
</style>
