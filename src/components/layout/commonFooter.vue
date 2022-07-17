<script setup lang="ts">
import { useI18n } from "vue-i18n";
import footerProperties from "@/hooks/footerProperties";
const { t } = useI18n();

//结构出footerMenu数据
const { footerMenu } = footerProperties();
</script>

<template>
  <div class="footer">
    <ul class="footer-content">
      <li
        class="footer-content-list"
        v-for="(item, index) in footerMenu"
        :key="index"
      >
        <h4 class="footer-content-list-title">
          {{ t(`footer['${item.title}']`) }}
        </h4>
        <a
          target="_blank"
          class="footer-content-list-text"
          :href="item1.link"
          v-for="(item1, index1) in item.menus"
          :key="index1"
        >
          {{ t(`footer['${item1.name}']`) }}
        </a>
      </li>
    </ul>
    <div class="footer-copyRight">
      @2022 Definitelyng, Inc, All rightd reserved
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/layout/commonFooter.scss";
</style>
