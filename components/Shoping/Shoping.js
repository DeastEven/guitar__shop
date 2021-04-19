class Shoping {
    handleClear() {
        root_shoping.innerHTML = '';
    }
    render() {
        const productStore = localStorageUtils.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        catalog.forEach(({ id, name, price }) => {
            if (productStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr>
                    <td class = "shoping-element__name">🪕 ${name}</td>
                    <td class = "shoping-element__price">🤟🏻 ${price.toLocaleString()} USD</td>
                </tr>
                `;
                sumCatalog += price;
            }
        });
        const html = `
        <div class = "shoping-container">
        <div class="shoping__close" onclick="shopingPage.handleClear()"></div>
            <table>
            ${htmlCatalog}
            <tr>
                <td class = "shoping-element__name">🧲 Сумма:</td>
                <td class = "shoping-element__price">🤟🏻 ${sumCatalog.toLocaleString()} USD</td>
            </tr>
            </table>
        </div>
        
        `;

        root_shoping.innerHTML = html;
    }
}

const shopingPage = new Shoping();