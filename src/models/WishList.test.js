import { WhishListItem, WhishList } from './WishList'

it("can create a instance of a model", () => {
    const item = WhishListItem.create({
        name: "The Hobbit",
        price: 8.03,
        image: "https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg"
    })

    expect(item.name).toBe("The Hobbit")
    expect(item.price).toBe(8.03)
    expect(item.image).toBe("https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg")
})

it("can create a WhishList", () => {
    const list = WhishList.create({
        items: [
            {
                name: "The Hobbit",
                price: 8.03,
                image: "https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg"
            }
        ]
    })

    expect(list.items.length).toBe(1)
    expect(list.items[0].price).toBe(8.03)
})