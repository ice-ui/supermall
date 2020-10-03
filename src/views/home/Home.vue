<template>
  <div id="home">
    <!-- 首页部分只有中间部分需要替换 -->
    <nav-bar class="home-nav"> <div slot="center">购物街</div></nav-bar>
    <!-- 在组建中使用轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends" />
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
// 用大括号导入的原因是因为前面导出不是采取export default的方式
// 注意此处的路径问题
import { getHomeMultidata } from "../../components/network/home";
import RecommendView from "./childComps/RecommendView";
export default {
  name: "Home",

  //   在此处注册一下
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      // result: null,
      banners: [],
      recommends: [],
    };
  },
  // 什么时候发送网络请求？组件一创建好久发送网络请求，使用created声明周期函数
  created() {
    //1.请求多个数据
    getHomeMultidata().then((res) => {
      console.log(res);
      // this.result = res;
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>