<template>
  <div>about 子路由A </div>
</template>

<script>
export default {
  name: 'aboutSonA',
  data() {
    return {

    }
  },
  created() {
    console.log('about 子页面A 创建')
  },
  destroyed() {
    console.log('about 子页面A 销毁')
  }
}
</script>