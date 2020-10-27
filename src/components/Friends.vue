<template>
    <section class="friends">
        <h2 class="friends__title">
            <span>Our friends who</span>
            <span>are looking for a house</span>
        </h2>
        <div class="carousel-wrapper">
            <div class="friends__carousel">
                <ul class="friends__list">
                    <li class="friends__item" 
                        v-for="pet in pets" 
                        :key="pet.id"
                        :style="{ 'margin-left': '-' + (currentSlideIndex) + 'px' }">
                        <a href="#">
                            <img :src="pet.img" 
                            :alt="pet.name + ' ' + pet.type">
                            <p>{{ pet.name }}</p>
                            <button>Learn more</button>
                        </a>
                    </li>
                </ul>
            </div>
            <button class="friends__scroll-button friends__scroll-button--left" type="button" 
            :class="buttonPrevStatus"
            @click="prevSlide">&larr;</button>
            <button class="friends__scroll-button friends__scroll-button--right" type="button"
            :class="buttonNextStatus"
            @click="nextSlide">&rarr;</button>
        </div>
    </section>
</template>

<script>
import pets from '@/data/pets.js'

export default {
    data() {
        return {
            pets,
            currentSlideIndex: 0,
            buttonPrevStatus: 'button-noactive',
            buttonNextStatus: 'button-active'
        }
    },
    methods: {
        prevSlide() {
            if (this.currentSlideIndex > 0) {
                this.currentSlideIndex -= 360 
                this.buttonPrevStatus = 'button-active'
                this.buttonNextStatus = 'button-active'
            } if (this.currentSlideIndex === 0) {
                this.buttonPrevStatus = 'button-noactive'
                this.buttonNextStatus = 'button-active'
            }
        },
        nextSlide() {
            if (this.currentSlideIndex < (this.pets.length * 360)-1080) {
                this.currentSlideIndex += 360
                this.buttonNextStatus = 'button-active'
                this.buttonPrevStatus = 'button-active'
            } if (this.currentSlideIndex === (this.pets.length * 360)-1080) {
                this.buttonNextStatus = 'button-noactive'
                this.buttonPrevStatus = 'button-active'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.friends {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F6F6F6;

    &__title {
        font-family: Georgia, sans-serif;
        font-size: 35px;
        line-height: 1.3;
        color: #545454;
        span {
            display: block;
        }
    }

    .carousel-wrapper {
        position: relative;
    }

    &__carousel {
        width: 1085px;
        overflow: hidden;
    }

    &__list {
        position: relative;
        list-style: none;
        display: flex;
        min-height: 535px;
    }

    &__item {
        margin: 45px;
        background: #fafafa;
        border-radius: 9px;
        position: absolute;
        width: 270px;
        height: fit-content;
        transition: .3s;
        &:nth-child(1) {
            left: 45px;
        }
        &:nth-child(2) {
            left: 405px;
        }
        &:nth-child(3) {
            left: 765px;
        }
        &:nth-child(4) {
            left: 1125px;
        }
        &:nth-child(5) {
            left: 1485px;
        }
        &:nth-child(6) {
            left: 1845px;
        }
        &:nth-child(7) {
            left: 2205px;
        }
        &:nth-child(8) {
            left: 2565px;
        }

        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            min-height: 435px;
            border-radius: 9px;
            text-decoration: none;
            color: #545454;
            &:hover {
                box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);
            }
        }

        p {
            font-family: Georgia, sans-serif;
            font-size: 20px;
            line-height: 1.2;
            margin-top: 31px;
        }

        button {
            font-family: Georgia, sans-serif;
            font-size: 17px;
            color: #292929;
            border: 2px solid #F1CDB3;
            border-radius: 100px;
            width: 187px;
            line-height: 48px;
            background: #FAFAFA;
            &:hover {
                background: #FDDCC4;
            }
            &:active {
                opacity: 0.8;
            }
        }
    }

    &__scroll-button {
        width: 52px;
        height: 52px;
        border: 2px solid #F1CDB3;
        border-radius: 50%;
        background: transparent;
        font-size: 14px;
        cursor: pointer;
        position: absolute;
        z-index: 100;
        &--left {
            top: 50%;
            transform: translate(0, -50%);
            left: -60px;
        }
        &--right {
            top: 50%;
            transform: translate(0, -50%);
            right: -60px;
        }
        &:hover {
            background: #FDDCC4;
        }
        &:active {
            opacity: 0.8;
        }
    }

    .button-noactive {
        color: #CDCDCD;
        border-color: #CDCDCD;
        &:hover {
            background: transparent;
        }
    }
}

</style>