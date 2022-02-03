class Products {

    constructor() {

        this.apiUrl = 'https://fakestoreapi.com/';
    }
    getSingleProduct(id) {

        $.ajax({

            type: "Get",
            url: this.apiUrl + "products/" + id,
            success: function (data) {
                console.log(data);
                $('.service-image').html('<img class="card-img-top" width="400" height="400" alt="' + data.title + '"  src="' + data.image + '">');
                $('.product-title').html(data.title);
                $('.product-desc').html(data.description);
                $('.main-price').html(data.price);

            },


        });

    }

}