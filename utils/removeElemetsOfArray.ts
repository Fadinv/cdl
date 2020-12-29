import styles from '../Components/MenuTogglePanel/MenuTogglePanel.module.sass'
import {array} from 'prop-types'

export const removeElementsOfArray = (arr, user, cb, i: number, reverse = false, first = true): void => {
    if (reverse && first) {
        i = 0
    }
    if (arr[i] === undefined) return
    let timeout = 200
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i)

            arr[i].classList.toggle(styles.liElementsClosed)
            if (reverse) {
                i++
            } else {
                i--
            }

            removeElementsOfArray(arr, user, cb, i, reverse, false)
        }, timeout / array.length)
    })
        .then(i => {
            if (i === 0 && !reverse) {
                setTimeout(() => {
                    user.style.opacity = 1
                    user.classList.add(styles.UserContainerIsOpen)
                    cb()
                }, 100)

            }

            if (i === arr.length - 1 && reverse) {
                setTimeout(() => {
                    user.style.opacity = 0
                    user.classList.remove(styles.UserContainerIsOpen)
                    cb()
                }, 100)
            }
        })
}

export const setOpacityProductStuck = (timeout) => {
    const productStuck = document.getElementById('productStuck')
    productStuck.style.minHeight = String(productStuck.getBoundingClientRect().height) + 'px'
    productStuck!.style.opacity = '0'
    setTimeout(() => {
        productStuck.style.minHeight = 'auto'
    }, timeout+100)
}

export const scrollPage = () => {
    scroll({behavior: 'smooth', top: 0})
}

export const getDataTypeProp = (pr) => {
    switch (pr) {
        case 'Майки':
            return 'shirt'
        case 'Поло':
            return 'polo'
        case 'Толстовки':
            return 'hoody'
        default:
            return 'shirt'
    }
}

export const sortFunction = (productsArray, numberVariantSortState, reversSortState) => {
    let variant: string
    if (numberVariantSortState === 1) {
        variant = 'id'
    } else if (numberVariantSortState === 2) {
        variant = 'price'
    }

    let reverse: number = 1
    if (reversSortState) {
        reverse = -reverse
    }
    productsArray.sort((a, b) => {
        if (a[variant] > b[variant]) return reverse
        if (a[variant] < b[variant]) return -reverse
        if (a[variant] === b[variant]) return 0
    })
}