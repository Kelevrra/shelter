<template>
    <div>
        <HeaderFixed />
        <Footer />
    </div>
</template>

<script>
import HeaderFixed from '@/components/HeaderFixed'
import Footer from '@/components/Footer'

export default {
    components: {
        HeaderFixed,
        Footer
    }
}
</script>

<style lang="scss" scoped>
div {
    margin-top: 180px;
}
</style>