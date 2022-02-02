class Categories{
constructor(){

    this.apiUrl = 'https://fakestoreapi.com/';
}

getAllCategories(){

$.ajax({
        
    type: "Get",
    url: this.apiUrl + "products/categories",
    success: function(data){
       $(data).each(function(index,category){
       $('.menu-items').append('<li class="nav-item"><a class="nav-link" href="/category.html?category='+ category +'"> ' + category+ '</a></li>'  )

       })
    },

    
});

}

getSingleCategory(slug){

    $.ajax({
        
        type: "Get",
        url: this.apiUrl + "products/category/women%27s%20clothing",
        success: function(data){
            console.log(data);
           $(data).each(function(index,product){
           $('.products-list').append(
               '<div class="col-md-3"><div class="card mb-4 box-shadow"><img class="card-img-top" alt="'+product.title+'"  src="'+product.image+'"></img> <div class="card-body"> <h2 class="card-text"><a href="/product.html?productid='+ product.id +'">' + product.title + ' </a></h2> <div class="d-flex justify-content-between align-items-center"> <div class="btn-group"><a href="/product.html?productid='+ product.id +'" class="btn btn-sm btn-dark mx-1">View Product</a> <button type="button" class="btn btn-sm btn-warning mx-1">Add To Cart</button> </div><small class="text-muted">9 mins</small> </div></div></div>'
           
           )
    
           });
        },
    
        
    });

}



}