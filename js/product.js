class Products{

    constructor(){

        this.apiUrl = 'https://fakestoreapi.com/';
    }
    getSingleProduct(id){

        $.ajax({
            
            type: "Get",
            url: this.apiUrl + "products/" + id,
            success: function(data){
                console.log(data)     
  
            },
        });
    
    }    

}