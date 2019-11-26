export class Item {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    show() {
        let temp = "";
        temp += "<p>ID: " + this.id + "</p>";
        temp += "<p>Name: " + this.name + "</p>";
        temp += "<p>Price: " + this.price + "</p>";
        temp += "<img src=" + this.image + " />";
        return temp;
    }
}

const Hat = new Item(1, "Philadelphia Eagles Hat", 25, "/images/Hat.jpg");
const Hoodie = new Item(2, "Philadelphia Eagles Hoodie", 35, "/images/Hoodie.jpg");
const Jersey = new Item(3, "Philadelphia Eagles Jersey", 40, "/images/Jersey.jpg");
const TShirt = new Item(4, "Philadelphia Eagles T-Shirt", 30, "/images/Tshirt.jpg");

export const itemsList = [ Hat, Hoodie, Jersey, TShirt ];

