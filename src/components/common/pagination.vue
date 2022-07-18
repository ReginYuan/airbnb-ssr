<template>
  <el-pagination
    class="pagination"
    :current-page="pageNum"
    :page-size="pageSize"
    :total="total"
    background
    layout="prev,pager,next"
    @current-change="changePage"
  >
  </el-pagination>
</template>

<script setup lang="ts">
import { computed, defineEmits } from "vue";
import { useStore } from "@/store/index";
import { IRoomListParams } from "@/interface/index";
const store = useStore();
const pageNum = computed(() => store.state.pageNum);
const pageSize = computed(() => store.state.pageSize);
const total = computed(() => store.state.total);

const emit = defineEmits<{
  (e: "changePage", params: IRoomListParams): void;
}>();
function changePage(pageNum: number, cityCode: string) {
  let params = { pageNum, cityCode: store.state.cityCode };
  console.log("子组件", params);
  emit("changePage", params);
}
</script>

<style scoped>
@import "@/assets/scss/components/common/pagination/index.scss";
</style>