<template>
    <div>
        <TopWrapper />
        <!-- <About />
        <Friends />
        <HelpShelter />
        <Additional />
        <Footer /> -->
    </div>
</template>

<script>
import TopWrapper from '@/components/TopWrapper'
// import About from '@/components/About'
// import Friends from '@/components/Friends'
// import HelpShelter from '@/components/HelpShelter'
// import Additional from '@/components/Additional'
// import Footer from '@/components/Footer'
import mainNav from '@/data/main-nav.js'

export default {
    components: {
        TopWrapper,
        // About,
        // Friends,
        // HelpShelter,
        // Additional,
        // Footer
    },
    data() {
        return {
            mainNav
        }
    },
    methods: {
        actualPage() {
            this.mainNav.map(el => el.active = '')
            this.mainNav[0].active = 'active'
        }
    },
    mounted() {
        this.actualPage()
    }
}
</script>
