<template>
  這是前台頁面
  <router-link to="/">Home</router-link> | 
  <router-link to="/about">About</router-link>
  <hr>
  <RouterView></RouterView>
</template>
<script>
import { RouterView } from 'vue-router';
export default {
  components: {
    RouterView,
  }
}

</script>