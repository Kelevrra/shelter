<template>
    <section class="about">
        <img class="about__image" :src="aboutShelter.image" :alt="aboutShelter.imageAlternative">
        <div class="about-wrapper">
            <h2 class="about__title">{{ aboutShelter.title }}</h2>
            <p class="about__description">{{ aboutShelter.descriptionFirstBlock }}</p>
            <p class="about__description">{{ aboutShelter.descriptionSecondBlock }}</p>
        </div>
    </section>
</template>

<script>
import aboutShelter from '@/data/about-shelter.js'

export default {
    data() {
        return {
            aboutShelter
        }
    }
}
</script>

<style lang="scss" scoped>
.about {
    display: flex;
    justify-content: center;
    padding: 80px 80px 100px;
    margin: 0 auto;
    width: 1200px;

    &__image {
        margin-right: 60px;
    }

    .about-wrapper {
        width: 450px;
        margin-left: 60px;
    }

    &__title {
        font-family: Georgia , sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 35px;
        line-height: 1.3;
        letter-spacing: 0.06em;
        padding-right: 40px;
        margin-top: 13px;
        margin-bottom: 23px;
        color: #545454;
    }

    &__description {
        font-family: Arial, sans-serif;
        font-size: 15px;
        line-height: 1.6;
        color: #4C4C4C;
    }
}

</style>