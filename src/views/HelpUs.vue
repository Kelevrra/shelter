<template>
    <div class="help-us">
        <HeaderFixed />
        <h2>
            Sorry, this page not exist
            <span>:)</span>
        </h2>
        <picture>
            <source media="(min-width: 1280px)" srcset="../assets/images/funny-dog.jpg">
            <source media="(min-width: 768px)" srcset="../assets/images/funny-dog-tablet.jpg">
            <img src="../assets/images/funny-dog-mobile.jpg" alt="">
        </picture>
    </div>
</template>

<script>
import HeaderFixed from '@/components/HeaderFixed'
import mainNav from '@/data/main-nav.js'

export default {
    components: {
        HeaderFixed
    },
    data() {
        return {
            mainNav
        }
    },
    methods: {
        actualPage() {
            this.mainNav.map(el => el.active = '')
            this.mainNav[2].active = 'active'
        }
    },
    mounted() {
        this.actualPage()
    }
}
</script>

<style lang="scss" scoped>
.help-us {
    text-align: center;
    padding-top: 200px;
    h2 {
        font-size: 45px;
        margin: 0;
        span {
            display: block;
            font-size: 95px;
            width: 100px;
            transform: rotate(90deg);
            margin: 0 auto;
        }
    }

    img {
        vertical-align: bottom;
    }
}
</style>