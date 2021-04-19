class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }
    handleSetLocationStorage(element, id) {
        const { pushProducts, products } = localStorageUtils.putProducts(id);
        if (pushProducts) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;

        }
        headerPage.render(products.length);
    }
    render() {
        const productStore = localStorageUtils.getProducts();
        let htmlCatalog = '';

        catalog.forEach(({ id, name, img, price }) => {
            let activeClass = '';
            let activeText = '';

            if (productStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeText = this.labelRemove;
                activeClass = ' ' + this.classNameActive;
            }

            htmlCatalog += `
                <li class = "products-element">
                    <span class = "products-element__name"> ${name}</span>
                    <img class = "products-element__img" src="${img}" />
                    <span class = "products-element__price"> 🤟🏻 ${price.toLocaleString()} USD</span>
                    <button class = "products-element__btn${activeClass}" onclick="productPage.handleSetLocationStorage(this, '${id}');"> ${activeText}</button>
                </li>`;

        })

        const html = `
            <ul class = "products-container">
            ${htmlCatalog}
            </ul>`;
        root_products.innerHTML = html;
    }
}

const productPage = new Products();

productPage.render()