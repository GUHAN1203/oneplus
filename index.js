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


let oneplus_11= phone("ONEPLUS 11 5G","8 GB RAM" + "128 GB Storage",1,"40,000","5g")
let oneplus_11r = phone("ONEPLUS 11R 5G","8 GB RAM" + "128 GB Storage",1,"40,000","5g")
let oneplus_9 = phone("ONEPLUS 9 5G","8 GB RAM" + "128 GB Storage",1,"40,000","5g")
let oneplus_9r = phone("ONEPLUS 9R 5G","8 GB RAM" + "128 GB Storage",1,"40,000","5g")


for (i in phones) {
    for (j in phones[i]) {
        console.log(phones[i][j])
        
    }
    
}