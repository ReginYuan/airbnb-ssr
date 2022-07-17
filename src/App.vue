<script setup lang="ts">
import { onMounted, ref, getCurrentInstance } from "vue";
import { useI18n } from "vue-i18n";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import headerCommon from "@/components/layout/commonHeader.vue";
import footerCommon from "@/components/layout/commonFooter.vue";
import { useRoute } from "vue-router";
const { locale: localeLanguage } = useI18n();
console.log("useI18n", useI18n);
const locale = ref(zhCn);

//修改语言
const changLang = (language: any) => {
  locale.value = language;
  localeLanguage.value = language.name;
  console.log("name", language);
};
const route = useRoute();
</script>

<template>
  <el-config-provider :locale="locale">
    <!-- 头部 -->
    <headerCommon
      v-show="route.fullPath.indexOf('login') === -1"
      @changLang="changLang"
    />
    <!-- 主体 -->
    <div class="containera">
      <router-view />
    </div>
    <!-- 底部 -->
    <footerCommon
      v-show="route.fullPath.indexOf('login') === -1"
      @changLang="changLang"
    />
  </el-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
