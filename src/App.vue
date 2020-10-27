<template>
    <div id="app">
        <TopWrapper />
        <Friends />
    </div>
</template>

<script>
import TopWrapper from '@/components/TopWrapper'
import Friends from '@/components/Friends'

export default {
    name: 'App',
    components: {
        TopWrapper,
        Friends
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
}

body, ul, li, img, picture {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
