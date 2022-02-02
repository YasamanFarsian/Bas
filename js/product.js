class products{

    constructor(){

        this.apiUrl = 'https://fakestoreapi.com/';
    }
    getSingleProduct(id){

        $.ajax({
            
            type: "Get",
            url: this.apiUrl + "products/" + id,
            success: function(data){
                console.log(data);
            //    $(data).each(function(index,product){
            //    $('.products-list').append(
            //        '<div class="col-md-3"><div class="card mb-4 box-shadow"><img class="card-img-top" alt="'+product.title+'"  src="'+product.image+'"></img> <div class="card-body"> <h2 class="card-text"><a href="/product.html?productid='+ product.id +'">' + product.title + ' </a></h2> <div class="d-flex justify-content-between align-items-center"> <div class="btn-group"><a href="/product.html?productid='+ product.id +'" class="btn btn-sm btn-dark mx-1">View Product</a> <button type="button" class="btn btn-sm btn-warning mx-1">Add To Cart</button> </div><small class="text-muted">9 mins</small> </div></div></div>'
               
            //    )
        
            //    });
          
        
        
        $('.service-image-left').html('<img class="w-100" alt="'+ data.title +'"  src="'+ data.image +'">')
        
        },
        
            
        });
    
    }    

}