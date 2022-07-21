<template>
  <div class="room" v-if="roomDetail && roomDetail.owner && roomDetail.info">
    <!-- 照片墙 -->
    <el-carousel
      class="room-carousel"
      trigger="click"
      height="380px"
      :interval="3000"
      indicator-position="none"
      type="card"
      v-if="roomDetail.imgs && roomDetail.imgs.length > 0"
    >
      <el-carousel-item v-for="(item, index) in roomDetail.imgs" :key="index">
        <img :src="item" alt="室内图片" srcset="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 房屋详情信息 -->
    <div class="room-detail">
      <div class="room-detail-part">
        <h2>{{ roomDetail.title }}</h2>
        <!-- 房屋信息 -->
        <div class="room-detail-part-info">
          <div class="room-detail-part-info-room room-detail-part-info-item">
            {{ roomDetail.info.room }}卧室
          </div>
          <div class="room-detail-part-info-bed room-detail-part-info-item">
            {{ roomDetail.info.bed }}张床
          </div>
          <div class="room-detail-part-info-toilet room-detail-part-info-item">
            {{ roomDetail.info.toilet }}洗手间
          </div>
          <div
            class="room-detail-part-info-liveNume room-detail-part-info-item"
          >
            可住{{ roomDetail.info.liveNumber }}个人
          </div>
        </div>
        <div class="room-detail-part-tags">
          <el-tag size="small">{{ roomDetail.info.remarks }}评价</el-tag>
          <el-tag size="small" type="danger" v-if="roomDetail.info.metro"
            >靠近地铁</el-tag
          >
          <el-tag size="small" type="warning" v-if="roomDetail.info.parking"
            >可以免费停车</el-tag
          >
          <el-tag size="small" type="success" v-if="roomDetail.info.luggage"
            >可以放置行李</el-tag
          >
        </div>
        <div class="room-detail-part-border"></div>
        <!-- 房东信息 -->
        <div class="room-detail-part-landlord">
          <img
            class="room-detail-part-landlord-img"
            :src="roomDetail.owner.avatar"
            alt="房东头像"
          />
          <div class="room-detail-part-landlord-info">
            <p class="room-detail-part-landlord-info-name">
              房东名称:{{ roomDetail.owner.name }}
            </p>
            <p class="room-detail-part-landlord-info-p">
              <span v-if="roomDetail.owner.certify">已验证身份</span>
              <span v-if="roomDetail.info.goodOwner">超赞房东</span>
            </p>
          </div>
        </div>
        <!-- 基本介绍 -->
        <div class="room-detail-part-introduce">
          {{ roomDetail.owner.introduce }}
        </div>
      </div>
      <!-- 基本介绍 -->
      <div class="room-detail-form">
        <p class="room-detail-form-price">
          <span>￥{{ roomDetail.price }}</span
          >/晚
        </p>
        <el-form ref="ruleForm" :model="orderForm">
          <el-form-item prop="personNumber" class="room-detail-form-itemNumber">
            <span>人数</span>
            <select v-model="orderForm.personNumber">
              <option v-for="item in 3" :value="item" :key="item">
                {{ item }}
              </option>
            </select>
          </el-form-item>
          <el-form-item class="room-detail-form-item">
            <el-button type="primary" @click="submitForm">预定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, getCurrentInstance } from "vue";
import { useStore } from "@/store/index";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";
const ruleForm = ref();
const orderForm = reactive({ personNumber: 1 });
const store = useStore();
const route = useRoute();
const roomDetail = computed(() => store.state.roomDetail);
const { proxy }: any = getCurrentInstance();
// 预定民宿功能
const saveOrder = async () => {
  const { id: orderId } = route.params;
  const { personNumber } = orderForm;
  const { title, price, pictureUrl } = roomDetail.value;
  const params = { orderId, personNumber, title, price, pictureUrl };
  const res = await proxy.$api.saveOrder(params);
  if (res) {
    ElMessage.success(res.msg)
  }else{
    ElMessage.error(res.msg)
  }
};
const submitForm = () => {
  // if (store.state.userInfo.) {
    
  // }
  saveOrder();
};
</script>

<style lang='scss'>
@import "@/assets/scss/detail/index.scss";
</style>
