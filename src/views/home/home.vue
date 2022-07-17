<script lang="ts">
import houseOperates from "@/hooks/houseOperates";
import { useStore } from "@/store/index";
import { defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
     const store = useStore();
    const cliclItem = (item) => {
      console.log("item", item);
    };
    return {
      store,
      cliclItem
    };
  },
  asyncData({ store, route }: any) {
    return store.dispatch('saveHouseList')
  },
});
</script>

<template>
  <div class="home">
    <!-- branner -->
    <div class="home-banner"></div>
    <!-- 房屋列表 -->
    <div class="home-content main-wapper">
      <div class="home-content-all">
        <div class="home-content-all-title">主标题</div>
        <p class="home-content--all-subtitle">副标题</p>
      </div>
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
    </div>
  </div>
</template>

<style lang='scss'>
@import "@/assets/scss/home/index.scss";
</style>
