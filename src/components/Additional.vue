<template>
    <section class="additional">
        <img class="additional__image" :src="additional.image" :alt="additional.imageAlternative">
        <div class="additional-wrapper">
            <h2 class="additional__title">{{ additional.title }}</h2>
            <span class="additional__sub-title">{{ additional.subTitle }}</span>
            <a class="additional__link" :href="additional.linkAddress">
                <img :src="additional.linkImage" alt="">
                {{ additional.link }}
            </a>
            <p class="additional__description">{{ additional.description }}</p>
        </div>
    </section>
</template>

<script>
import additional from '@/data/additional.js'

export default {
    data() {
        return {
            additional
        }
    }
}
</script>

<style lang="scss" scoped>
.additional {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F6F6F6;
    padding: 80px 0 100px;
    &__image {

    }

    &-wrapper {
        width: 380px;
        margin-left: 15px;
    }

    &__title {
        font-family: Georgia, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 35px;
        line-height: 1.3;
        margin: 0;
        padding-right: 110px;
        color: #545454;
        margin-bottom: 10px;
    }

    &__sub-title {
        font-family: Georgia, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 1.2;
        color: #545454;
    }

    &__link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 349px;
        height: 43px;
        background: #F1CDB3;
        border-radius: 9px;
        font-family: Georgia;
        font-size: 20px;
        text-decoration: none;
        line-height: 1.2;
        color: #545454;
        padding-left: 15px;
        padding-right: 15px;
        letter-spacing: 0.06em;
        margin-top: 20px;
        &:hover {
            background: #FDDCC4;
        }
        &:active {
            opacity: .8;
        }
        img {
            margin-right: 15px;
        }
    }

    &__description {
        font-family: Arial, sans-serif;
        font-style: italic;
        font-size: 12px;
        line-height: 1.5;
        color: #B2B2B2;
        margin-top: 20px;
    }
}

</style>