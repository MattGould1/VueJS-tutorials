<template>
  <div class="tutorial">{{ title }}</div>
  <md-layout md-gutter>
    <md-bottom-bar md-shift>
      <md-bottom-bar-item md-icon="power_settings_new" href="#/">Drive</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="music_note" href="#/settings">Settings</md-bottom-bar-item>
    </md-bottom-bar>
  </md-layout>  
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
