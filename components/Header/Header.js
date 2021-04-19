class Header {
    handlerOpenShopingPage() {
        shopingPage.render();
    }

    render(count) {
        const html = `
        <div class="header-container">
            <div class="header-counter" onclick="headerPage.handlerOpenShopingPage();">
                🎸 ${count}
            </div>
        
        </div>
        `;
        root_header.innerHTML = html;
    }
}


const headerPage = new Header();
const productStore = localStorageUtils.getProducts();
headerPage.render(productStore.length);