import { types } from 'mobx-state-tree'

export const WhishListItem = types.model({
    name: types.string,
    price: types.number,
    image: ""
})

export const WhishList = types.model({
    items: types.optional(types.array(WhishListItem), [])
})