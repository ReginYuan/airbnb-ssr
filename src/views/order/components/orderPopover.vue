<template>
 <teleport to="#app">
    <div class="mask" @click="closeMask"></div>
 </teleport>
  <ul class="order">
    <li class="order-item" v-for="(item, index) in orderData" :key="index">
      <img class="order-item-img" :src="item.pictureUrl" alt="" />
      <div class="order-item-info">
        <p class="order-item-info-title">{{ item.title }}</p>
        <p class="order-item-info-price">
          ￥{{ item.price }}/晚 * {{ item.personNumber }}个人
        </p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { reactive, getCurrentInstance } from "vue";
import { useStore } from '@/store/index';
let orderData = reactive<Array<any>>([]);
const { proxy }: any = getCurrentInstance();
const store = useStore()
// 异步获取订单信息对应异步组件
const getOrderList = async () => {
  return proxy.$api.getOrderList().then((res) => {
    if (res) {
      orderData = res.data;
    }
  });
};
await getOrderList();

// 全屏触发关闭 订单弹窗
const closeMask = () => {
  store.commit('saveOrderStatus')
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/order/index.scss";
</style>