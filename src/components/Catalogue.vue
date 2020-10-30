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
                        <a href="#">
                            <img :src="pet.img" :alt="pet.name + ' ' + pet.type">
                            <p>{{ pet.name }}</p>
                            <button>Learn more</button>
                        </a>
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
// mobile

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
// mobile
            }
        },
        cataloguePageFirst() {
            this.pages.index = 1
        },
        cataloguePageLast() {
            this.pages.index = this.pages.amount
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
    }
    .panel-list {
        margin: 30px auto;
        width: 320px;
        display: flex;
        justify-content: space-between;

        .panel-button {
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