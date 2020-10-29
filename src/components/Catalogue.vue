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
                        v-for="pet in pets" 
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
                <button class="panel-button noactive">{{ buttons.toFirst }}</button>
                <button class="panel-button noactive">{{ buttons.left }}</button>
                <button class="panel-button index"
                    v-for="i in pages" :key="i">{{ i }}</button>
                <button class="panel-button active">{{ buttons.right }}</button>
                <button class="panel-button active">{{ buttons.toLast }}</button>
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
            buttons: {
                left: '<',
                toFirst: '<<',
                right: '>',
                toLast: '>>'
            },
            pages: [
                1
            ]
        }
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
        position: relative;
        height: 1070px;
        z-index: 10;
    }

    &__list {
        // position: relative;
        position: absolute;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 1200px;
    }

    &__item {
        margin-top: 35px;
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
        position: absolute ;
        bottom: 60px;
        left: 50%;
        transform: translate(-50%, 0);
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
            width: 680px;
        }
    }
}
</style>