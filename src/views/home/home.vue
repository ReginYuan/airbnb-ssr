<script lang="ts">
import houseOperates from "@/hooks/houseOperates";
import { useStore } from "@/store/index";
import { defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import HomeList from "@/views/home/commponents/homeList.vue";
export default defineComponent({
  components: {
    HomeList,
  },
  setup() {
    const route = useRoute();
  },
  asyncData({ store, route }: any) {
    const { pageNum, cityCode } = store.state;
    return store.dispatch("saveHouseList", { pageNum, cityCode });
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
      <HomeList></HomeList>
    </div>
  </div>
</template>

<style lang='scss'>
@import "@/assets/scss/home/index.scss";
</style>
