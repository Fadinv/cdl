import {Product} from '../types/types'

export interface data {
    product: Product[]
}

export const data: data = {
    product: [
        {
            title: 'Название первое',
            isLiked: false,
            price: 3000,
            src: '/stuff/pngegg.png',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
        },
        {
            title: 'Название второе',
            isLiked: true,
            price: 2300,
            src: '/stuff/pngegg.png',
            sizes: ['xs', null, 'm', 'l', null, 'xxl'],
        },
        {
            title: 'Название третье',
            isLiked: true,
            price: 1999,
            src: '/stuff/pngegg.png',
            sizes: ['xs', 's', 'm', 'l', 'xl', null],
        },
        {
            title: 'English title',
            isLiked: false,
            price: 1900,
            src: '/stuff/pngegg.png',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
        },
        {
            title: 'Название пятое',
            isLiked: false,
            price: 5499,
            src: '/stuff/pngegg.png',
            sizes: [null, null, 'm', 'l', 'xl', 'xxl'],
        },
        {
            title: 'Короткое название',
            isLiked: false,
            price: 3999,
            src: '/stuff/pngegg.png',
            sizes: ['xs', 's', 'm', 'l', null, null],
        },
        {
            title: 'Недоделанное назва',
            isLiked: false,
            price: 2999,
            src: '/stuff/pngegg.png',
            sizes: ['xs', 's', 'm', 'l', null, null],
        },
        {
            title: 'Нет названия',
            isLiked: false,
            price: 1799,
            src: '/stuff/pngegg.png',
            sizes: ['xs', 's', 'm', 'l', null, null],
        },
        {
            title: 'undefined',
            isLiked: false,
            price: 2099,
            src: '/stuff/pngegg.png',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
        },
        {
            title: 'Орпографическое название',
            isLiked: false,
            price: 1995,
            src: '/stuff/pngegg.png',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
        },
        {
            title: 'Дорогое название',
            isLiked: false,
            price: 100000,
            src: '/stuff/pngegg.png',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
        },
        {
            title: 'Последнее',
            isLiked: false,
            price: 1900,
            src: '/stuff/pngegg.png',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
        },
    ],
}