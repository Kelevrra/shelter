<template>
    <div id="app">
      <friends />
    </div>
</template>

<script>
import Friends from '@/components/Friends'

export default {
    name: 'App',
    components: {
      Friends
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body, ul, li, img, picture {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
