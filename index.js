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



for (let i=0;i<phones.length;i++){

    console.log(phones[i]);

    for (let j=0; j<phones[i].length; j++){
        console.log(phones[i][j]);
    }
    
}

for (i in phones) {
    for (j in phones[i]) {
        console.log(phones[i][j])
        
    }
    
}