<template>
    <div>
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