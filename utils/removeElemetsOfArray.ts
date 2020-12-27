import styles from '../Components/MenuTogglePanel/MenuTogglePanel.module.sass'

export const removeElementsOfArray = (arr, user, i, reverse = false, first = true): void => {

    if (reverse && first) {
        i = 0
    }

    if (arr[i] === undefined) return

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i)

            arr[i].classList.toggle(styles.liElementsClosed)
            if (reverse) {
                i++
            } else {
                i--
            }

            removeElementsOfArray(arr, user, i, reverse, false)
        }, 100)
    })
        .then(i => {
            if (i === 0 && !reverse || i === arr.length - 1 && reverse) {
                let timeout = reverse ? 0 : 200
                setTimeout(() => {
                    user.classList.toggle(styles.UserContainerIsOpen)
                }, timeout)
            }
        })
}