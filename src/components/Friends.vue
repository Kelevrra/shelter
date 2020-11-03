<template>
    <section class="friends">
        <h2 class="friends__title">
            <span>Our friends who</span>
            <span>are looking for a house</span>
        </h2>
        <div class="carousel-wrapper">
            <div class="friends__carousel" id="carousel">
                <ul class="friends__list">
                    <li class="friends__item" 
                        v-for="pet in pets" 
                        :key="pet.id"
                        :style="{ 'margin-left': '-' + (currentSlideIndex) + 'px' }">
                        <a class="item-link"
                            v-on:click="()=>pet.active = 'active'">
                            <img :src="pet.img" 
                            :alt="pet.name + ' ' + pet.type">
                            <p>{{ pet.name }}</p>
                            <button type="button">Learn more</button>
                        </a>
                        <div :class="pet.active">
                            <div id="overlay"></div>
                            <div class="wrapper">
                                <button id="close-popup"
                                    value="close"
                                    v-on:click="clearAll()"></button>
                                <img :src="pet.img" 
                                    :alt="pet.name + ' ' + pet.type">
                                <div>
                                    <h2 class="title">{{ pet.name }}</h2>
                                    <p class="type">{{ pet.type }} - {{ pet.breed }}</p>
                                
                                <ul>
                                    <li>Age: {{ pet.age }}</li>
                                    <li>Inoculations: <span                                     
                                        v-for="i in pet.inoculations"
                                        :key="i">{{ i }} </span>
                                    </li>
                                    <li>Diseases: <span                                     
                                        v-for="i in pet.diseases"
                                        :key="i">{{ i }} </span>
                                    </li>
                                    <li>Parasites: <span
                                        v-for="i in pet.parasites"
                                        :key="i">{{ i }} </span>
                                    </li>
                                </ul>
                                </div>
                                <p class="description">{{ pet.description }}</p>
                            </div>
                        </div>
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
        <a class="friends__toggle-link" href="/our-pets">Get to know the rest</a>
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
            buttonNextStatus: 'button-active',
            carouselWidthWatch: (pets.length * 360)-1080,
        }
    },
    methods: {
        prevSlide() {
            this.whatcQuerry()
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
            this.whatcQuerry()          
            if (this.currentSlideIndex < this.carouselWidthWatch) {
                this.currentSlideIndex += 360
                this.buttonNextStatus = 'button-active'
                this.buttonPrevStatus = 'button-active'
            } if (this.currentSlideIndex === this.carouselWidthWatch) {
                this.buttonNextStatus = 'button-noactive'
                this.buttonPrevStatus = 'button-active'
            }
        },
        whatcQuerry() {
            if (document.documentElement.clientWidth < 1220) {
                this.carouselWidthWatch = (pets.length * 360)-720
            } if (document.documentElement.clientWidth < 850) {
                 this.carouselWidthWatch = (pets.length * 360)-360
            } if (document.documentElement.clientWidth > 1220) {
                this.carouselWidthWatch = (pets.length * 360)-1080
            }
        },
        clearAll() {
            for(let i = 0; i < this.pets.length; i += 1) {
                this.pets[i].active = 'noactive'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.noactive {
    display: none;
}
.active {
    #overlay {
        position: fixed;
        background: black;
        z-index: 1000;
        width: 10000vh;
        left: -500%;
        top: -500%;
        height: 10000vh;
        opacity: .5;
    }
    .wrapper {
        position: fixed;
        transform: translate(-50%, 0);
        z-index: 10000;
        top: 20%;
        left: 50%;
        width: 750px;
        min-height: 400px;
        background: white;
        padding: 35px;
        display: flex;
        flex-wrap: wrap;

        #close-popup {
            position: absolute;
            width: 40px;
            height: 40px;
            right: 10px;
            top: 10px;
            font-family: Georgia, sans-serif;
            &:before,
            &:after {
                content: '';
                position: absolute;
                background: #FDDCC4;
                width: 50%;
                height: 2px;
            }
            &:before {
                transform: rotate(45deg);
                left: 9px;
            }
            &:after {
                transform: rotate(-45deg);
                left: 9px;
            }
            &:hover:before,
            &:hover:after {
                background: white;
            }
        }

        div {
            width: 60%;
            margin-left: auto;
            margin-right: auto;

            h2 {
                font-size: 35px;
            }

            ul {
                margin-left: 1rem;
            }
        }
    }
}

.friends {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F6F6F6;
    padding-bottom: 80px;

    &__title {
        font-family: Georgia, sans-serif;
        font-size: 35px;
        line-height: 1.3;
        color: #545454;
        font-style: normal;
        font-weight: normal;
        text-align: center;
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

        .item-link {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            min-height: 435px;
            border-radius: 9px;
            text-decoration: none;
            color: #545454;
            cursor: pointer;
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

    &__toggle-link {
        font-family: Georgia, sans-serif;
        display: block;
        text-align: center;
        text-decoration: none;
        font-size: 17px;
        line-height: 48px;
        color: #292929;
        width: 260px;
        background: #F1CDB3;
        border-radius: 100px;
        &:hover {
            background: #FDDCC4;
        }
        &:active {
            opacity: 0.8;
        }
    }
}
@media(max-width: 1220px) {
    .friends {
        &__carousel {
            width: 720px;
        }
    }
}
@media(max-width: 850px) {
    .friends {
        &__carousel {
            width: 360px;
        }
    }
}
@media(max-width: 500px) {
    .friends {
        &__scroll-button {
            top: 98%;
            &--left {
                left: 20%;
            }
            &--right {
                right: 20%;
            }
        }

        &__toggle-link {
            margin-top: 40px;
        }
    }
}
@media(max-width: 360px) {
    .friends {
        overflow: hidden;
    }
}
</style>