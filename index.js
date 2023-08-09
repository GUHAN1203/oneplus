
function phone(name,type,id,price,description) {
        
        this.name= name;
        this.type=type;
        this.id= id;
        this.price=price;
        this.description=description;
        
    };
let nord = new phone(11111,1111,1,1,) ;
let oneplus = new phone(22,2,22,2,2);

phones =[nord,oneplus];



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