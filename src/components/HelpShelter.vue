<template>
    <section class="help">
        <h2 class="help__title">{{ helpShelter.title }}</h2>
        <ul class="help__list">
            <li class="help__item"
            v-for="item in helpShelter.helpList" 
            :key="item.id">
                <img :src="item.icon" :alt="item.description">
                <span>{{ item.description }}</span>
            </li>
        </ul>
        <div :class="button.status"
            v-on:click="showAll()">{{ button.text }}</div>
    </section>
</template>

<script>
import helpShelter from '@/data/help-shelter.js'

export default {
    data() {
        return {
            helpShelter,
            helpList: helpShelter.helpList,
            button: {
                status: 'noactive',
                text: 'Show all...'
            }
        }
    },
    methods: {
        whatcQuerry() {
            if (document.documentElement.clientWidth > 525) {
                this.button.status = 'noactive'
            } if (document.documentElement.clientWidth < 525) {
                this.button.status = 'active'
                this.helpShelter.helpList = this.helpShelter.helpList.slice(0, 2)
            } if (document.documentElement.clientWidth < 370) {
                this.helpShelter.helpList = this.helpShelter.helpList.slice(0, 1)
            }
        },
        showAll() {
            this.helpShelter.helpList = this.helpList
            this.button.status = 'noactive'
        }
    },
    mounted() {
        this.whatcQuerry()
    }
}
</script>

<style lang="scss" scoped>
.help {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;

    .noactive {
        display: none;
    }

    .active {
        display: block;
        font-family: Georgia, sans-serif;
        font-size: 18px;
        color: #545454;
    }

    &__title {
        font-family: Georgia, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 35px;
        line-height: 1.3;
        color: #545454;
    }

    &__list {
        width: 1200px;
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 60px;
    }

    &__item {
        width: 210px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            margin-top: 30px;
            font-family: Georgia, sans-serif;
            font-size: 20px;
            line-height: 1.2;
            color: #545454;
        }

        img {
            transition: 1s;
            &:hover {
                transform: rotateY(360deg);
            }
        }
    }
}
@media(max-width: 1200px) {
    .help {
        &__list {
            width: 100%;
        }
    }
}
@media(max-width: 768px) {
    .help {
        &__title  {
            font-size: 30px;
            text-align: center;
        }

        &__item {
            width: 150px;
            height: 120px;

            span {
                font-size: 15px;
                margin-top: 15px;
            }
        }
    }
}
@media(max-width: 525px) {
    .help {

    }
}

</style>