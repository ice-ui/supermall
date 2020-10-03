<template>
  <swiper>
    <!-- 动态获取banners里面的信息 -->
    <swiper-item v-for="(item, index) in banners" :key="index">
      <!-- 由于图片是可以进行点击的，包含在a标签里面 -->
      <a :href="item.link">
        <!-- 插入图片 -->
        <img :src="item.image" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
// 将Swiper和SwiperItem导入到此处
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style scoped>
</style>