<template>
    <div>
        <Header />
        <Intro />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Intro from '@/components/Intro'

export default {
    components: {
        Header,
        Intro
    }
}
</script>

<style scoped>
div {
    background: radial-gradient(110.67% 538.64% at 5.73% 50%, #513D2F 0%, #1A1A1C 100%),#211F20;
    background-image: url('../assets/images/start-screen-background.png');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>