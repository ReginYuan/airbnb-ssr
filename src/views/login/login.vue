<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import useFormProperties from "@/hooks/useFormProperties";
import userFormOperates from "@/hooks/userFormOperates";
const { t } = useI18n();
const router = useRouter();
const { activeName, ruleFormRef, loginText, form, rules } =
  useFormProperties(t);
const { userSign, userLogin } = userFormOperates(router, form);

// 登录注册切换
const handleText = (e: any) => {
  const { name } = e.props;
  loginText.value = t(`login['${name}'Btn`);
};

// 提交数据
const onSubmit = () => {
  ruleFormRef.value.validate((valid: any) => {
    if (valid) {
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
