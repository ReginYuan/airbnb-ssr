<template>
  <!-- 城市筛选 -->
  <home-tabs></home-tabs>
  <!-- 民宿列表 -->
  <div class="home-content-list">
    <div
      class="home-content-list-item"
      v-for="(item, index) in store.state.roomList"
      :key="index"
      @click="cliclItem(item)"
    >
      <img
        class="home-content-list-item-img"
        :src="item.pictureUrl"
        alt=""
        srcset=""
      />
      <p class="home-content-list-item-title">{{ item.title }}</p>
      <p class="home-content-list-item-price">￥{{ item.price }}元</p>
    </div>
  </div>
  <!-- 分页 -->
  <Pagination @changePage="changePage"></Pagination>
</template>

<script setup lang="ts">
import { useStore } from "@/store/index";
import Pagination from "@/components/common/pagination.vue";
import HomeTabs from "@/views/home/components/homeTabs.vue";
import { IRoomListParams } from "@/interface/index";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const cliclItem = (item) => {
  const { id } = item;
  store.commit("saveRoomId", { id } as IRoomDetailParams);
  router.push({ path: `/detail/${id}` });
};
const changePage = (params: IRoomListParams) => {
  console.log("父组件", params);
  store.dispatch("saveHouseList", params);
};
</script>

<style scoped>
</style>