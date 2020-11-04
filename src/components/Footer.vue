<template>
    <footer class="footer">
        <div class="footer__contacts">
            <h3>{{ footerData.contacts.title }}</h3>
            <ul>
                <li v-for="item in footerData.contacts.list" :key="item.id">
                   <a :href="item.url">
                        <img :src="item.image" :alt="item.imageAlternative">
                        {{ item.text }}
                   </a>
                </li>
            </ul>
        </div>
        <div class="footer__address">
            <h3>{{ footerData.address.title }}</h3>
            <ul>
                <li v-for="item in footerData.address.list" :key="item.id">
                   <a :href="item.url">
                        <img :src="item.image" :alt="item.imageAlternative">
                        {{ item.text }}
                   </a>
                </li>
            </ul>
        </div>
        <picture>
            <source media="(min-width: 768px)" :srcset="footerData.image.desktop">
            <img class="footer__image" :src="footerData.image.mobile" :alt="footerData.image.alternative">
        </picture>
    </footer>
</template>

<script>
import footerData from '@/data/footer.js'

export default {
    data() {
        return {
            footerData
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: radial-gradient(110.67% 538.64% at 5.73% 50%, #513D2F 0%, #1A1A1C 100%), #211F20;
    background: url('../assets/images/footer-background.png') no-repeat;
    background-size: cover;
    ul {
        list-style: none;
        li {
            margin-bottom: 20px;
            a {
                text-decoration: none;
                display: flex;
                align-items: center;
                font-family: Georgia, sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 1.2;
                letter-spacing: 0.06em;
                color: #F1CDB3;
                img {
                    margin-right: 20px;
                }
            }
        }
    }
    h3 {
        font-family: Georgia, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 35px;
        line-height: 130%;
        letter-spacing: 0.06em;
        color: #FFFFFF;
    }

    &__contacts,
    &__address  {
        width: 310px;
    }

    &__address {
        img {
            transition: 1s;
            &:hover {
                transform: rotateY(360deg);
            }
        }
    }

    &__image {
        vertical-align: bottom;
    }
}

@media(max-width: 768px) {
    .footer {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}
</style>