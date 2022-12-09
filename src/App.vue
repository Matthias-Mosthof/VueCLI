<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'books' }">Books</router-link>
  </nav>
  <router-view />
</template>
