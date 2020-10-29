<template>
    <div>
        <HeaderFixed />
        <Catalogue />
        <Footer />
    </div>
</template>

<script>
import HeaderFixed from '@/components/HeaderFixed'
import Catalogue from '@/components/Catalogue'
import Footer from '@/components/Footer'
import mainNav from '@/data/main-nav.js'

export default {
    components: {
        HeaderFixed,
        Catalogue,
        Footer
    },
    data() {
        return {
            mainNav
        }
    },
    methods: {
        actualPage() {
            this.mainNav.map(el => el.active = '')
            this.mainNav[1].active = 'active'
        }
    },
    mounted() {
        this.actualPage()
    }
}
</script>

<style lang="scss" scoped>
div {
    margin-top: 180px;
}
</style>