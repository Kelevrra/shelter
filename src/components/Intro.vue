<template>
    <section class="intro">
        <div class="intro-wrapper">
            <h2 class="intro__title">{{ intro.title }}</h2>
            <p class="intro__description">{{ intro.description }}</p>
            <a class="intro__toggle" href="#">{{ intro.toggle }}</a>
        </div>
        <picture class="intro__picture">
            <source media="(min-width: 1280px)" :srcset="intro.imageDesktop">
            <source media="(min-width: 768px)" :srcset="intro.imageTablet">
            <img class="intro__image" :src="intro.imageMobile" alt="Cutie puppy">
        </picture>
    </section>
</template>

<script>
import intro from '@/data/intro.js'

export default {
    data() {
        return {
            intro
        }
    }
}
</script>

<style lang="scss" scoped>
.intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    width: 1280px;
    margin: 0 auto;
    min-height: 750px;

    &-wrapper {
        width: 465px;
        margin-bottom: 100px;
    }

    &__title {
        font-family: Georgia, sans-serif;
        padding-right: 100px;
        font-style: normal;
        font-weight: normal;
        font-size: 44px;
        line-height: 1.3;
        color: #FFFFFF;
        margin: 0;
    }

    &__description {
        font-family: Arial, sans-serif;
        font-size: 15px;
        line-height: 1.6;
        color: #CDCDCD;
        margin-top: 42px;
    }

    &__toggle {
        display: block;
        text-decoration: none;
        text-align: center;
        font-family: Georgia, sans-serif;
        font-size: 17px;
        line-height: 52px;
        margin-top: 40px;
        width: 207px;
        color: #292929;
        background: #F1CDB3;
        border-radius: 100px;
        &:hover {
            background: #FDDCC4;
        }
    }

    &__picture {
        margin-top: auto;
    }
    &__image {
        vertical-align:bottom;
    }
}
@media(max-width: 1280px) {
    .intro {
        width: 1000px;
        padding-left: 25px;
        padding-right: 25px;
    }
}
@media(max-width: 1050px) {
    .intro {
        width: 100%;
        max-width: 768px;
        height: 300px;
        justify-content: center;
        min-height: 450px;
        padding: 0;

        &-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 0;
        }

        &__title {
            padding: 0;
        }

        &__picture {
            display: none;
        }
    }
}
@media(max-width: 768px) {
    .intro {
        &__title {
            font-size: 30px;
        }

        &__description {
            width: 95%;
        }
    }
}
</style>