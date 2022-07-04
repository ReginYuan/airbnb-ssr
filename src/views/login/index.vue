<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, reactive, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
const { t } = useI18n();
import { userSignApi, userLoginApi } from "@/api/login/index";
import { IResultOr } from "@/api/interface";
import { ElMessage } from "element-plus";
interface IRuleForm {
  mobile: string;
  password: string;
}
const router = useRouter();
const { proxy }: any = getCurrentInstance();
const activeName = ref("login");
const ruleFormRef = ref();
const loginText = ref(t("login.loginBtn"));
const form: IRuleForm = reactive({
  mobile: "",
  password: "",
});

// 表单校验
const rules = reactive({
  mobile: [
    {
      required: true,
      min: 11,
      max: 11,
      message: t("login.placeMobile"),
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: t("login.placePass"),
      trigger: "blur",
    },
  ],
});

const handleText = (e: any) => {
  const { name, label } = e.props;
  if (name === "login") {
    loginText.value = t("login.loginBtn");
  } else if (name === "sign") {
    loginText.value = t("login.signTab");
  }
};

// 注册接口
const userSign = async (params: IRuleForm) => {
  const res = await proxy.$api.sign(params);
  if (res.code == 200) {
    ElMessage.success(res.msg);
  } else {
    ElMessage.error(res.msg);
  }
};
// 登录接口
const userLogin = async (params: IRuleForm) => {
  const res = await proxy.$api.login(params);
  if (res.code == 200) {
    ElMessage.success(res.msg);
  } else {
    ElMessage.error(res.msg);
  }
  proxy.$store.commit("saveUserInfo", res);
  router.push({ name: "welcome" });
};

const onSubmit = () => {
  ruleFormRef.value.validate((valid: any) => {
    if (valid) {
      console.log(activeName);
      console.log(activeName.value === "sign");
      if (activeName.value === "sign") {
        userSign(form);
      } else if (activeName.value === "login") {
        userLogin(form);
      }
    } else {
      return false;
    }
  });
};
</script>

<template>
  <div class="login">
    <div class="login-leftPart"></div>
    <div class="login-rightPart">
      <!-- 表单组件 -->
      <div class="login-rightPart-panel">
        <!-- tabs -->
        <el-tabs
          v-model="activeName"
          class="login-rightPart-panel-tabs"
          @tab-click="handleText"
        >
          <el-tab-pane
            :label="t(`${'login.loginTab'}`)"
            class="login-rightPart-panel-tabs-pane"
            name="login"
          >
          </el-tab-pane>
          <el-tab-pane
            :label="t(`${'login.signTab'}`)"
            name="sign"
          ></el-tab-pane>
        </el-tabs>
        <el-form
          ref="ruleFormRef"
          :model="form"
          :rules="rules"
          label-width="120px"
          class="login-rightPart-panel-tabs-pane-form"
        >
          <el-form-item
            prop="mobile"
            class="login-rightPart-panel-tabs-pane-form-item"
          >
            <el-input
              class="login-rightPart-panel-tabs-pane-form-item-input"
              :placeholder="t(`${'login.placeMobile'}`)"
              v-model="form.mobile"
            />
          </el-form-item>
          <el-form-item
            prop="password"
            class="login-rightPart-panel-tabs-pane-form-item"
          >
            <el-input
              :placeholder="t(`${'login.placePass'}`)"
              v-model="form.password"
            />
          </el-form-item>
          <el-form-item class="login-rightPart-panel-tabs-pane-form-item">
            <el-button
              type="primary"
              @click="onSubmit"
              class="login-rightPart-panel-tabs-pane-form-item-button"
              >{{ loginText }}</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
@import "@/assets/scss/login/index.scss";
</style>
