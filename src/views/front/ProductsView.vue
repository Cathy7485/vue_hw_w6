<template>
  這是產品列表頁面
  <table class="table">
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td><img :src="product.imageUrl" width="200" alt=""></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH }  = import.meta.env

export default{
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${ VITE_APP_PATH }/products/all`)
      .then((res) =>{
        console.log(res)
        this.products = res.data.products 
      })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>