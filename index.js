document.querySelector(".js-search-icon").addEventListener("click",function(){
    
    document.querySelector(".js-search-input").classList.add("hide1");
})

function phone(name,type,id,price,description) {
        
        this.name= name;
        this.type=type;
        this.id= id;
        this.price=price;
        this.description=description;
        
    };
phones= [] ;

alert(document.querySelector("#mobileName").value )

document.querySelector("#mobileSubmit").addEventListener("click",function(){
    let phone1=  new phone("ubuu" , "mobile",1234,120000,"knneefn");
        alert(phone1.name);
})





