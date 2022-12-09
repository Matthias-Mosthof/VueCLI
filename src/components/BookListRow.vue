<template>
  <tr class="table-item__table-row">
    <td>{{ title }}</td>
    <td>{{ isbn }}</td>
    <td>
      <BaseButton :text="changeText" @bookmarking="bookmarkBook" />
    </td>
  </tr>
</template>

<script>
import BaseButton from "./BaseButton";
export default {
  components: {
    BaseButton,
  },
  name: "BookListRow",
  props: {
    title: { title: String, default: "no title found" },
    isbn: String,
    isBookmarked: Boolean,
  },
  computed: {
    changeText() {
      return this.isBookmarked ? "Remove Bookmark" : "Add Bookmark";
    },
  },
  methods: {
    bookmarkBook() {
      this.$emit("bookmarking123");
    },
  },
};
</script>
<style scoped>
.table-item__table td {
  padding: 12px 15px;
}
</style>
