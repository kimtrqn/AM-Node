const products = [];

module.exports = class Product {
    constructor(title) {
        this.title;

    }

    save() {
        products.push(this);
    }

    //static mean can directly call on the class itself
    static fetchAll() {
        return this.products;
    }
}