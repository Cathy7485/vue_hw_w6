import{_ as c,o as r,c as a,d as s,t as n,F as u,b as _}from"./index.281c0acc.js";const{VITE_APP_URL:d,VITE_APP_PATH:i}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"kc777",BASE_URL:"/vue_hw_w6/",MODE:"production",DEV:!1,PROD:!0},p={data(){return{product:{}}},methods:{getProduct(){const{id:t}=this.$route.params;this.$http.get(`${d}/v2/api/${i}/product/${t}`).then(e=>{this.product=e.data.product})}},mounted(){this.getProduct()}},l=_(" \u9019\u662F\u55AE\u4E00\u7522\u54C1\u9801\u9762 "),h=["src"];function P(t,e,m,E,o,V){return r(),a(u,null,[l,s("h2",null,n(o.product.title),1),s("img",{src:o.product.imageUrl,class:"w-50",alt:""},null,8,h)],64)}const g=c(p,[["render",P]]);export{g as default};
