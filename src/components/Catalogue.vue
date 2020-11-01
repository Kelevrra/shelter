<template>
    <section class="catalogue">
        <h2 class="catalogue__title">
            <span>Our friends who</span>
            <span>are looking for a house</span>
        </h2>
        <div class="catalogue-wrapper">
            <div class="catalogue__carousel">
                <ul class="catalogue__list">
                    <li class="catalogue__item"
                        v-for="pet in petsList" 
                        :key="pet.id">
                        <a v-on:click="()=>pet.active = 'active'">
                            <img :src="pet.img" :alt="pet.name + ' ' + pet.type">
                            <p>{{ pet.name }}</p>
                            <button>Learn more</button>
                        </a>
                        <div :class="pet.active">
                            <button id="close-popup"
                                value="close"
                                v-on:click="()=>{
                                    pet.active = 'noactive'
                                }"></button>
                            <img :src="pet.img" 
                                :alt="pet.name + ' ' + pet.type">
                            <div>
                                <h2 class="title">{{ pet.name }}</h2>
                                <p class="type">{{ pet.type }} - {{ pet.breed }}</p>
                            
                            <ul>
                                <li>Age: {{ pet.age }}</li>
                                <li
                                v-for="i in pet.diseases"
                                :key="i">Inoculations: {{ i }}</li>
                                <li
                                v-for="i in pet.diseases"
                                :key="i">Diseases: {{ i }}</li>
                                <li 
                                v-for="i in pet.parasites"
                                :key="i">Parasites: {{ i }}</li>
                            </ul>
                            </div>
                            <p class="description">{{ pet.description }}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="panel-list">
                <button class="panel-button"
                    :class="buttons.prevStatus"
                    v-on:click="cataloguePageFirst()">{{ buttons.toFirst }}</button>
                <button class="panel-button"
                    :class="buttons.prevStatus"
                    v-on:click="cataloguePagePrev()">{{ buttons.left }}</button>
                <button class="panel-button index">{{ pages.index }}</button>
                <button class="panel-button"
                    :class="buttons.nextStatus"
                    v-on:click="cataloguePageNext()">{{ buttons.right }}</button>
                <button class="panel-button"
                    :class="buttons.nextStatus"
                    v-on:click="cataloguePageLast()">{{ buttons.toLast }}</button>
            </div>
        </div>
    </section>
</template>

<script>
import pets from '@/data/pets.js'

export default {
    data() {
        return {
            pets,
            petsList: pets,
            buttons: {
                left: '<',
                toFirst: '<<',
                right: '>',
                toLast: '>>',
                prevStatus: 'noactive',
                nextStatus: 'active'
            },
            pages: {
                index: 1,
                amount: 0,
                displayItemsFrom: 0,
                displayItemsTo: 8
            }
        }
    },
    methods: {
        cataloguePageNext() {
            if(this.pages.index > 0 && this.pages.index < this.pages.amount) {
                this.pages.index = this.pages.index + 1
// desktop
                if (document.documentElement.clientWidth > 1270) {
                    this.pages.displayItemsFrom = this.pages.displayItemsFrom + 8
                    this.pages.displayItemsTo = this.pages.displayItemsTo + 8
                }
// tablet
                if (document.documentElement.clientWidth < 1270) {
                    this.pages.displayItemsFrom = this.pages.displayItemsFrom + 4
                    this.pages.displayItemsTo = this.pages.displayItemsTo + 4
                }
            }
        },
        cataloguePagePrev() {
            if(this.pages.index > 1 && this.pages.index <= this.pages.amount) {
                this.pages.index = this.pages.index - 1
// desktop
                if (document.documentElement.clientWidth > 1270) {
                    this.pages.displayItemsFrom = this.pages.displayItemsFrom - 8
                    this.pages.displayItemsTo = this.pages.displayItemsTo - 8
                }
// tablet
                if (document.documentElement.clientWidth < 1270) {
                    this.pages.displayItemsFrom = this.pages.displayItemsFrom - 4
                    this.pages.displayItemsTo = this.pages.displayItemsTo - 4
                }
            }
        },
        cataloguePageFirst() {
            this.pages.index = 1
            if (document.documentElement.clientWidth < 1270) {
                this.pages.displayItemsFrom = 0
                this.pages.displayItemsTo = 4
            }
        },
        cataloguePageLast() {
            this.pages.index = this.pages.amount
            if (document.documentElement.clientWidth < 1270) {
                this.pages.displayItemsFrom = this.pages.amount * 4 - 4
                this.pages.displayItemsTo = this.pages.amount * 4
            }
        },
        buttonStatus() {
            setInterval(() => {
                if(this.pages.amount === 1) {
                    this.buttons.prevStatus = 'noactive'
                    this.buttons.nextStatus = 'noactive'
                } 
                if(this.pages.amount > 1) this.buttons.nextStatus = 'active'
                if (this.pages.index > 1) this.buttons.prevStatus = 'active'
                if (this.pages.index === this.pages.amount) this.buttons.nextStatus = 'noactive'
                if (this.pages.index === 1) this.buttons.prevStatus = 'noactive'
            }, 500)
        },
        whatcQuerry() {
            if (document.documentElement.clientWidth < 1270) {
                this.pages.displayItemsTo = 4
            }
            if (document.documentElement.clientWidth < 768) {
                // this.pages.displayItemsTo = 2
            }
            setInterval(() => {
                if (document.documentElement.clientWidth < 1270) {
                    this.pages.amount = Math.ceil(this.pets.length / 4)
                    //tablet
                    this.petsList = this.pets.slice(this.pages.displayItemsFrom, this.pages.displayItemsTo)
                } if (document.documentElement.clientWidth < 768) {
                    // this.pages.amount = Math.ceil(this.pets.length / 2)
                    //mobile
                    // this.petsList = this.pets.slice(this.pages.displayItemsFrom, this.pages.displayItemsTo)
                } if (document.documentElement.clientWidth > 1270) {
                    this.pages.amount = Math.ceil(this.pets.length / 8)
                    this.pages.displayItemsTo = 8
                    this.petsList = this.pets.slice(this.pages.displayItemsFrom, this.pages.displayItemsTo)
                }
            }, 1000)
        }
    },
    mounted() {
        this.whatcQuerry(),
        this.buttonStatus()
    }
}
</script>

<style lang="scss" scoped>
.catalogue {
    &__title {
        font-family: Georgia, sans-serif;
        font-size: 35px;
        line-height: 1.3;
        color: #545454;
        font-style: normal;
        font-weight: normal;
        text-align: center;
        margin-bottom: 0;
        span {
            display: block;
        }
    }

    &-wrapper {
        width: 1200px;
        padding: 20px 35px 35px;
        margin: 0 auto;
        overflow: hidden;
    }

    &__list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-between;
        // width: 1200px;
    }

    &__item {
        margin: 15px;
        background: #fafafa;
        border-radius: 9px;
        width: 270px;
        height: fit-content;
        transition: .3s;

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
        .noactive {
    display: none;
}
.active {
    position: fixed;
    transform: translate(-50%, 0);
    z-index: 100;
    top: 20%;
    left: 50%;
    width: 750px;
    min-height: 400px;
    background: white;
    padding: 35px;
    box-shadow: 0px 2px 4035px 4000px rgba(13, 13, 13, 0.5);
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
    .panel-list {
        margin: 30px auto;
        width: 320px;
        display: flex;
        justify-content: space-between;

        .panel-button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 52px;
            height: 52px;
            border-radius: 100px;
            color: #292929;
            background: transparent;
            font-family: Georgia, sans-serif;
            font-size: 20px;
            cursor: pointer;
        }
        .noactive {
            border: 2px solid #CDCDCD;
            color: #CDCDCD;
        }
        .active {
            border: 2px solid #F1CDB3;
        }
        .index {
            background: #F1CDB3;
            border: none;
        }
    }
}
@media(max-width: 1270px) {
    .catalogue {
        &-wrapper {
            width: 600px;
        }
    }
}
@media(max-width: 768px) {
    .catalogue {
        &-wrapper {
            width: 300px;
        }
    }
}
</style>