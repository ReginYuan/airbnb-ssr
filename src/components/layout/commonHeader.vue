<script setup lang="ts">
import {
  ref,
  defineEmits,
  getCurrentInstance,
  defineAsyncComponent,
  computed,
} from "vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import userFormOperates from "@/hooks/userFormOperates";
import storage from "@/utils/storage";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useStore } from "@/store/index";
//获取useI18n国际化对象
const { t } = useI18n();

// 获取路由对象
const router = useRouter();

//获取vuex对象
const store = useStore();

// 初始化导航选择对象
const activeIndex = ref("orders");

// 获取登陆状态
let userInfo = computed(() => store.state.userInfo);
const { status } = userInfo.value;
console.log(userInfo.value);

let state = computed(() => store.state);
console.log("state", state.value);
// let status = store.state.status;
// 初始化 封装方法对象 结构退出登陆方法
const { userLogout } = userFormOperates(router);

// $emit子组件向父组件传参
const emit = defineEmits<{ (e: "changLang", language: any): void }>();

// 异步组件加载
const orderPopover = defineAsyncComponent(
  () => import("@/views/order/components/orderPopover.vue")
);

// 控制弹窗显隐
const orderStatus = ref(false);

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
  } else if (e === "orders") {
    store.commit("saveOrderStatus");
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
      <el-menu-item class="content-menu-item" index="orders">
        {{ t("header.orders") }}
        <template v-if="store.state.orderStatus">
          <!-- 等待异步组件时渲染一些额外内容，让应用有更好的用户体验 -->
          <Suspense>
            <!-- 放置异步组件 -->
            <template #default>
              <orderPopover></orderPopover>
            </template>
          </Suspense>
        </template>
      </el-menu-item>
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
