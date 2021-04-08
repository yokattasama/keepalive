<template>
  <div class="about">
    <h1>This is an about page</h1>
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
    console.log('About created')
  },
  mounted() {
    console.log('About mounted')
  },
  destroyed() {
    console.log('About destroyed')
  }
}
</script>