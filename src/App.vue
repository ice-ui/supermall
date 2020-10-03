<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
// 引入MainTabBar文件
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>

<style>
/* 引入css初始化样式 */
@import "assets/css/base.css";
</style>
