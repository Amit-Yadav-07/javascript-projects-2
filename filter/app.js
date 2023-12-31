let filteredProducts = [...products];


let productContainer = document.querySelector('.product-container');


let displayProduct = () => {

    // condition
    if (filteredProducts < 1) {
        productContainer.innerHTML = `<h5>Sorry , no Products matched your Search</h5>`
        return
    }


    productContainer.innerHTML = filteredProducts.map(({ id, image, title, price }) => {

        return `<figure class="product" data-id="${id}">
                <img class="product-img img" src="${image}" alt="" />
                <footer>
                    <h5 class="product-name">${title}</h5>
                    <strong class="product-price">$${price}</strong>
                </footer>
            </figure>`

    }).join('')



}

displayProduct();


let form = document.querySelector('.form-control');

let searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', function () {
    let inputValue = searchInput.value

    filteredProducts = products.filter(function (product) {

        return product.title.toLowerCase().includes(inputValue)
    });

    displayProduct();

})


// buttons 

let companies = document.querySelector('.companies');

function DisplayButtons() {

    let buttons = ["all", ...new Set(products.map((product) => product.company))];
    console.log(buttons);

    companies.innerHTML = buttons.map((company) => {
        return `<button type="button" class="company-btn" data-id='${company}'>${company}</button>`
    }).join('')
}


DisplayButtons();


companies.addEventListener('click', (e) => {


    let element = e.target;

    if (element.classList.contains('company-btn')) {
        if (element.dataset.id === 'all') {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter((product) => {

                return product.company === element.dataset.id;
            })
        }

        searchInput.value = '';
        displayProduct();
    }

})