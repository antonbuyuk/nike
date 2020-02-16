export const linksPages = {
    reviews: '/reviews',
    hotelTour: '/hotel-tour',
    combinedTour: '/combined-tour',
    searchTour: '/search-tour',
    notFound: '/not-found',
    mainPage: '/',
    visas: '/visas',
    contacts: '/contacts',
    articles: '/articles',
    countries: '/countries',
    profile: '/account/profile',
    tours: '/account/tours',
    collections: '/account/collections',
    favorites: '/account/favorites',
    corporate: '/corporate',
    agentstvam: '/agentstvam',
    gift: '/gift',
    type: '/tip-tura',
    exclusive: '/exclusive',
    booking: '/booking',
    email: '/emails/registration/',
    corporativeClients: '/corporate'
};

export const pagesTitle = {
    profile: 'Мой профиль',
    tours: 'Мои туры',
    collections: 'Подборки',
    favorites: 'Избранные туры'
};

export const textCofirm = {
    passport: 'Паспортные данные изменены, вы уверенны что хотите продолжить?',
    deletePassport: 'Вы уверены, что хотите удалить паспортные данные?'
};

export const errorInputValidation = {
    empty_email_phone: 'Заполните e-mail или телефон',
    empty_phone: 'Заполните телефон',
    empty_password: 'Заполните пароль',
    empty_email: 'Заполните e-mail',
    empty_sms_code: 'Заполните СМС код',
    password_not_equal: 'Пароли не совпадают',
    login_error: 'Введены неверные данные',
    empty_review: 'Заполните текст',
    empty_rating: 'Установите рейтинг',
    length_password: 'Пароль должен содержать не менее 6 символов',
    fill_value: 'Поле должно быть заполненно',
    value_length_six: 'Поле должно содержать минимум 6 символов',
    empty_price: 'Заполните сумму',
    empty_name_from: 'Заполните имя',
    empty_name_to: 'Заполните имя получателя'
};

export const textSuccess = {
    phone_true: 'Телефон успешно изменен',
    email_true: 'Email спешно изменен',
    booking_answer: 'Вы уверены, что хотите отменить бронирование?',
    text_true: 'Изменения успешно сохранены',
    text_false: 'Изменения успешно отменены',
    password_true: 'Пароль успешно изменен',
    new_passport: 'Спутник успешно добавлен',
    booking_false: 'Бронирование отменено'
};

export const config = {

};

export const OAUTH2 = {
    google: {
        client_id: '956748748298-kr2t08kdbjq3ke18m3vkl6k843mra1cg.apps.googleusercontent.com'
    }
};

export const roomFacts = {
    wifi: 'Wi-fi',
    beachFirst: '1-ая пляжная линия',
    beachSecond: '2-ая пляжная линия',
    beachThird: '3-я пляжная линия',
    restaurant: 'Ресторан',
    wind: 'Кондиционер',
    bar: 'Мини-бар'
};

export const ages = [
    { id: 0, name: 'до года' },
    { id: 1, name: '1 год' },
    { id: 2, name: '2 года' },
    { id: 3, name: '3 года' },
    { id: 4, name: '4 года' },
    { id: 5, name: '5 лет' },
    { id: 6, name: '6 лет' },
    { id: 7, name: '7 лет' },
    { id: 8, name: '8 лет' },
    { id: 9, name: '9 лет' },
    { id: 10, name: '10 лет' },
    { id: 11, name: '11 лет' },
    { id: 12, name: '12 лет' },
    { id: 13, name: '13 лет' },
    { id: 14, name: '14 лет' },
    { id: 15, name: '15 лет' },
    { id: 16, name: '16 лет' }
];

export const personal = {
    last_name: null,
    name: null,
    second_name: null,
    email: null,
    phone: {
        number: null,
        confirmed: true
    },
    address: null,
    notes: null,
    photo: {
        content_type: null,
        original_name: null,
        url: null,
        alt: null,
        title: null,
        description: null
    }
};

export const newPassport = {
    add_name: '',
    authority: '',
    date_of_expiry: '',
    date_of_issue: '',
    identification_no: '',
    name: '',
    passport_no: '',
    surname: '',
    confirmed: false,
    scan: null
};

export const mapStyles = [
    {
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#f5f5f5'
            }
        ]
    },
    {
        'elementType': 'labels.icon',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#616161'
            }
        ]
    },
    {
        'elementType': 'labels.text.stroke',
        'stylers': [
            {
                'color': '#f5f5f5'
            }
        ]
    },
    {
        'featureType': 'administrative.land_parcel',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#bdbdbd'
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#eeeeee'
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#757575'
            }
        ]
    },
    {
        'featureType': 'poi.park',
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#e5e5e5'
            }
        ]
    },
    {
        'featureType': 'poi.park',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#9e9e9e'
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#ffffff'
            }
        ]
    },
    {
        'featureType': 'road.arterial',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#757575'
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#dadada'
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#616161'
            }
        ]
    },
    {
        'featureType': 'road.local',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#9e9e9e'
            }
        ]
    },
    {
        'featureType': 'transit.line',
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#e5e5e5'
            }
        ]
    },
    {
        'featureType': 'transit.station',
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#eeeeee'
            }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#cad2d3'
            }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#9e9e9e'
            }
        ]
    }
];
export const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
