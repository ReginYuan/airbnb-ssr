<template>
  <detail-list></detail-list>
</template>

<script lang="ts">
import { useStore } from "@/store/index";
import { defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import DetailList from "@/views/detail/components/detailList.vue";
import { IRoomDetailParams } from "@/interface/index";
export default defineComponent({
  components: {
    DetailList,
  },
  setup() {
    const route = useRoute();
  },
  asyncData({ store, route }: any) {
    const { roomId } = store.state;
    const { id } = route.value.params;
    return store.dispatch("saveHouseDetail", {
      id: roomId || id,
    } as IRoomDetailParams);
  },
});
</script>

<style scoped>
</style>