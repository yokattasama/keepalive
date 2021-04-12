<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/other">Other</router-link> |
      <router-link to="/SonA">子路由A</router-link>
    </div>
    <div>{{shouldKeepAlive}}</div>
    <p>配置说明：子路由A是 about的子路由，并在keepAlive中缓存，其他路由均不缓存，about 也不缓存</p>
    <p>操作说明：默认进入Home页面， 首先点击进入 about， 再次 点击查看子路由A， 查看控制台打印</p>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },
  computed: {
    shouldKeepAlive() {
      return this.$route.meta.keepAlive ? '缓存页面': '不缓存当前页面'
    }
  },
  watch: {
    '$route': function(val) {}
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
