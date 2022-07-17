<template>
  <el-pagination
    :current-page="pageNum"
    :page-size="pageSize"
    :total="total"
    @current-change="changePage"
  >
  </el-pagination>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const pageNum = computed(() => return store.state.pageNum);
const pageSize = computed(() => return store.state.pageSize);
const total = computed(() => return store.state.total);
function changePage(pageNum:number) {
  console.log(pageNum)
}
</script>

<style scoped>
</style>