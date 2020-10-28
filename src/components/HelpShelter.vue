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
    </section>
</template>

<script>
import helpShelter from '@/data/help-shelter.js'

export default {
    data() {
        return {
            helpShelter
        }
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

    &__title {
        font-family: Georgia;
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
    }
}

</style>