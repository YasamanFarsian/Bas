$(function () {
    loadScript('js/categories.js', categoriesSetup);
    loadScript('js/product.js', productsSetup);
})

var categoriesSetup = function () {
    let categories = new Categories();
    categories.getAllCategories();
    categories.getSingleCategory('women%27s%20clothing');
}

var productsSetup = function () {
    let products = new Products();

    var productid = location.search.split('productid=')[1];
    console.log(productid);
    products.getSingleProduct(productid);
}

function loadScript(url, callback) {
    var head = document.head;
    var script = document.createElement("script");
    script.type = "text/javascript"
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}