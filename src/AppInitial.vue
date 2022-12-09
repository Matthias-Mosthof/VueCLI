<template>
  <LayoutHeader />
  <BookList />
</template>

<script>
import LayoutHeader from "./components/LayoutHeader.vue";
import BookList from "./components/BookLists.vue";

export default {
  name: "App",
  components: {
    LayoutHeader,
    BookList,
  },
};
</script>

<style>
@import url("./assets/base.css");
</style>
