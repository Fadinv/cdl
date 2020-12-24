export type xs = 'xs' | null
export type s = 's' | null
export type m = 'm' | null
export type l = 'l' | null
export type xl = 'xl' | null
export type xxl = 'xxl' | null

export type sizeArrayType = [xs, s, m, l, xl, xxl]

export type sizeStateType = xs | s | m | l | xl | xxl

export type Product = {
    title: string
    isLiked: boolean
    price: number
    src: string
    sizes: sizeArrayType
}
