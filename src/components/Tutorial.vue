<template>
  <div class="tutorial">{{ title }}</div>
</template>

<script>
export default {
  name: 'tutorial',
  data () {
    return {
      title: 'Our very first component!'
    }
  }
}
</script>

<style scoped>
div {
  background: red;
  width: 500px;
  height: 500px;
  color: white;
}
</style>
