<template>
  <h1>{{ bookData.title }}</h1>
  <div>{{ $route }}</div>
  <div>{{ bookData }}</div>
</template>

<script>
export default {
  data() {
    return {
      bookData: {},
    };
  },
  async created() {
    const response = await fetch(
      "http://localhost:4730/books/" + this.$route.params.id
    );
    this.bookData = await response.json();
  },
};
</script>
