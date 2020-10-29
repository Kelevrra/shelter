<template>
    <header class="header">
        <a class="header__logo" href="/">
            <h1>Cozy House</h1>
            <span>Shelter for pets in Boston</span>
        </a>
        <nav class="header__nav">
            <ul class="nav-list">
                <li class="nav-item"
                    v-for="item in mainNav"
                    :key="item.id">
                    <a class="nav-link" :class="item.active" :href="item.url">{{ item.title }}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import mainNav from '@/data/main-nav.js'

export default {
    data() {
        return {
            mainNav
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 180px;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    background: white;

    &__logo {
        text-decoration: none;
            
        h1 {
            font-family: Georgia, sans-serif;
            font-size: 32px;
            line-height: 1.1;
            letter-spacing: 0.06em;
            color: #545454;
            font-style: normal;
            font-weight: normal;
            margin: 0 0 7px 0;
        }
            
        span {
            font-family: Arial, sans-serif;
            font-size: 13px;
            line-height: 15px;
            letter-spacing: 0.1em;
            padding-left: 3px;
            color: #292929;
        }
    }

    &__nav {
        .nav-list {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 442px;
            font-family: Arial, sans-serif;
            font-size: 15px;
            line-height: 1.6;

            .nav-item {
                .nav-link {
                    position: relative;
                    text-decoration: none;
                    color: #545454;
                    &:before {
                        content: '';
                        position: absolute;
                        bottom: -5px;
                        width: 0;
                        height: 2px;
                        transition: .3s;
                    }
                    &:hover {
                        color: #292929;
                    }
                    &:hover:before {
                        width: 100%;
                        background: #F1CDB3;
                        transition: .3s;
                    }
                }
                .active {
                    color: #292929;
                    &:before {
                        bottom: -5px;
                        width: 100%;
                        background: #F1CDB3;
                    }
                }
            }
        }
    }
}
</style>