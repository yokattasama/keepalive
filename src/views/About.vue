<template>
  <div class="about">
    <h3>About 关于</h3>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      message: '',
    }
  },
  created() {
    console.log('About 创建')
  },
  mounted() {
    // console.log('About mounted')
  },
  destroyed() {
    console.log('About 销毁')
  }
}
</script>