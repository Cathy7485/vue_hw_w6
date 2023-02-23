<template>
  這是後台頁面
  <router-link to="/admin/products">後台產品列表</router-link> |
  <router-link to="/admin/orders">後台訂單列表</router-link> |
  <router-link to="/">回前台首頁</router-link> |
  <hr />
  <RouterView></RouterView>
</template>
<script>
import { RouterView } from "vue-router";
export default {
  components: {
    RouterView,
  },
};
</script>
