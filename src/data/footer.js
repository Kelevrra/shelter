const footerData = {
    contacts: {
        title: 'For questions and suggestions',
        list: [
            {
                id: 1,
                type: 'email',
                text: 'email@shelter.com',
                image: require('../assets/icons/mail.svg'),
                imageAlternative: 'Mail icon',
                url: '#'
            },
            {
                id: 2,
                type: 'phone',
                text: '+13 674 567 75 54',
                image: require('../assets/icons/phone.svg'),
                imageAlternative: 'Phone icon',
                url: '#'
            }
        ]
    },
    address: {
        title: 'We are waiting for your visit',
        list: [
            {
                id: 1,
                type: 'address',
                text: '1 Central Street, Boston (entrance from the store)',
                image: require('../assets/icons/pin.svg'),
                imageAlternative: 'Pin icon',
                url: '#'
            },
            {
                id: 2,
                type: 'address',
                text: '18 South Park, London',
                image: require('../assets/icons/pin.svg'),
                imageAlternative: 'Pin icon',
                url: '#'
            }
        ]
    },
    image: {
        mobile: require('../assets/images/footer-puppy-mobile.png'),
        desktop: require('../assets/images/footer-puppy.png'),
        alternative: 'Puppy'
    }
}

export default footerData 