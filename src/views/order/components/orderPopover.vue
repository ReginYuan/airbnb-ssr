<template>
  <ul class="order">
    <li class="order-item" v-for="i in 5" :key="i">
      <img
        class="order-item-img"
        src="https://z1.muscache.cn/im/pictures/da836e42-cf1c-4dce-a6b6-b6780df104dc.jpg?aki_policy=xx_large"
        alt=""
      />
      <div class="order-item-info">
        <p class="order-item-info-title">北京四合院</p>
        <p class="order-item-info-price">￥234/晚 * 1个人</p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">

function fetchApi() {
  return new Promise((resolve)=>{
    setTimeout(() => {
      console.log('111')
    }, 5000);
    resolve(true)
  })
}
await fetchApi()
</script>

<style lang="scss" scoped>
@import'@/assets/scss/order/index.scss'
</style>