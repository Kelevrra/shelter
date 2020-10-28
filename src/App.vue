<template>
    <div id="app">
        <TopWrapper />
        <About />
        <Friends />
        <HelpShelter />
        <Additional />
        <Footer />
    </div>
</template>

<script>
import TopWrapper from '@/components/TopWrapper'
import About from '@/components/About'
import Friends from '@/components/Friends'
import HelpShelter from '@/components/HelpShelter'
import Additional from '@/components/Additional'
import Footer from '@/components/Footer'

export default {
    name: 'App',
    components: {
        TopWrapper,
        About,
        Friends,
        HelpShelter,
        Additional,
        Footer
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

body, ul, li, img, picture, source {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
