<template>
    <header class="header">
        <a class="header__logo" href="/">
            <h1>Cozy House</h1>
            <span>Shelter for pets in Boston</span>
        </a>
        <nav class="header__nav">
            <a class="status-button" href="#" 
                :class="menuStatusButton"
                v-on:click="menu()">
            </a>
            <ul class="nav-list"
                :class="menuStatus">
                <li class="nav-item"
                    v-for="item in mainNav"
                    :key="item.id">
                    <a class="nav-link" 
                    :class="item.active" 
                    :href="item.url">
                        {{ item.title }}
                    </a>
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
            mainNav,
            menuStatus: 'hidden',
            menuStatusButton: ''
        }
    },
    methods: {
        menu() {
           if ( this.menuStatus === 'showed') {
               this.menuStatus = 'hidden'
               this.menuStatusButton = ''
            } else {
                this.menuStatus = 'showed'
                this.menuStatusButton = 'status-button--active'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1200px;
    min-height: 180px;

    &__logo {
        text-decoration: none;
            
        h1 {
            font-family: Georgia, sans-serif;
            font-size: 32px;
            line-height: 110%;
            letter-spacing: 0.06em;
            color: #F1CDB3;
            font-style: normal;
            font-weight: normal;
            margin: 0 0 7px 0;
        }
            
        span {
            font-family: Arial, sans-serif;
            font-size: 13px;
            line-height: 15px;
            letter-spacing: 0.1em;
            font-style: normal;
            font-weight: normal;
            color: #FFFFFF;
            padding-left: 3px;
        }
    }

    &__nav {
        .status-button {
            display: none;
        }

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
                    color: #CDCDCD;
                    &:before {
                        content: '';
                        position: absolute;
                        bottom: -5px;
                        width: 0;
                        height: 2px;
                        transition: .3s;
                    }
                    &:hover {
                        color: #FAFAFA;
                    }
                    &:hover:before {
                        width: 100%;
                        background: #F1CDB3;
                        transition: .3s;
                    }
                }
                .active {
                    color: #FAFAFA;
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
@media(max-width: 1200px) {
    .header {
        padding-left: 25px;
        padding-right: 25px;
    }
}
@media(max-width: 768px) {
    .header {
        min-height: 120px;

        &__nav {
            position: absolute;
            right: 0;
            width: 100%;

            .status-button {
                display: block;
                width: 30px;
                height: 2px;
                background: #ffffff;
                border: none;
                cursor: pointer;
                outline: none;
                transition: .5s;
                position: absolute;
                right: 25px;
                top: -10px;
                &:before,
                &:after {
                    position: absolute;
                    content: '';
                    width: 30px;
                    height: 2px;
                    top: -10px;
                    left: 0;
                    background: #ffffff;
                }
                &:after {
                    top: 10px;
                }
                &:before {
                    top: -10px;
                }
                &:active {
                    opacity: 0.5;
                }
                    &--active {
                    background: transparent;
                    transform: rotate(180deg);
                    &:after {
                        transform: rotate(45deg);
                        top: 0;
                        transition: .7s;
                    }
                    &:before {
                        transform: rotate(-45deg);
                        top: 0;
                        transition: .7s;
                    }
                }
            }

            .hidden,
            .showed  {
                display: block;
                position: absolute;
                width: 80%;
                left: 50%;
                transform: translate(-50%, 0);
                transition: .5s;
                background: rgb(232, 227, 227);
                box-shadow: 0px 2px 100px 50px rgba(13, 13, 13, 0.7);
                
                .nav-item {
                    .nav-link {
                        display: flex;
                        justify-content: center;
                        width: 100%;
                        line-height: 50px;
                        font-size: 20px;
                        left: 0;
                        color: #545454;
                        &:hover {
                            color: #292929;
                        }
                    }
                }
            }

            .hidden {
                top: -100vh;
            }

            .showed {
                top: 10px;
            }
        }
    }
}
</style>