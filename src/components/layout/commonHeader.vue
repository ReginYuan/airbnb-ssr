<script setup lang="ts">
import { ref, defineEmits, getCurrentInstance } from "vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

//获取useI18n国际化对象
const { t } = useI18n();

// 获取路由对象
const router = useRouter();

//获取vuex对象
const store = useStore();

// 初始化导航选择对象
const activeIndex = ref("orders");

// 全局对象
const { proxy }: any = getCurrentInstance();

// $emit子组件向父组件传参
const emit = defineEmits<{ (e: "changLang", language: any): void }>();

// 切换语言
const handleSelect = (e: any) => {
  if (e === "zh") {
    emit("changLang", zhCn);
    saveLanguageHandler("zhCn");
  } else if (e === "en") {
    emit("changLang", en);
    saveLanguageHandler("en");
  } else if (e === "login") {
    router.push({ name: "login" });
  } else if (e === "logout") {
    userLogout();
  }
};

// 保存当前语言包
const saveLanguageHandler = (language) => {
  store.commit("saveLanguage", { name: language });
};

// 获取当前语言包
const getLanguage = () => {
  let language = store.state.language;
  if (language) {
    if (language.name === "zh") {
      emit("changLang", zhCn);
    } else if (language.name === "en") {
      emit("changLang", en);
    }
  } else {
    store.commit("saveLanguage", { name: zhCn });
  }
  console.log("获取当前语言包成功");
};
getLanguage();

// 获取登陆状态
let status = (store.state.userInfo && store.state.userInfo.status) || "0";

// 登出方法
const userLogout = async () => {
  let { mobile, password } = store.state.userInfo;
  let params = { mobile, password };
  const res = await proxy.$api.logout(params);
  proxy.$store.commit("saveUserInfo", res);
  router.push({ name: "login" });
};
</script>

<template>
  <div class="content">
    <img
      class="content-logo"
      src="~@/assets/images/layout/logo.png"
      alt="爱此迎"
    />
    <el-menu
      :default-active="activeIndex"
      class="content-menu"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="orders">{{ t("header.orders") }}</el-menu-item>
      <el-menu-item index="records">{{ t("header.records") }}</el-menu-item>
      <el-sub-menu class="content-menu-sub" index="language">
        <template #title>{{ t("header.language") }}</template>
        <el-menu-item class="content-menu-su-zh" index="zh">中文</el-menu-item>
        <el-menu-item class="content-menu-su-zh" index="en"
          >English</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu
        class="content-menu-personal"
        v-if="status === '1'"
        index="avatar"
      >
        <template #title>
          <img
            class="content-menu-personal-img"
            src="~@/assets/images/layout/avatar.png"
            alt="个人中心"
        /></template>
        <el-menu-item class="content-menu-personal-logout" index="logout"
          >退出</el-menu-item
        >
      </el-sub-menu>
      <el-menu-item class="content-menu-personal" v-else index="login">
        {{ t("login.loginTab") }} / {{ t("login.signTab") }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/layout/commonHeader.scss";
</style>
