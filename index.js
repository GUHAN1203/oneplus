
function phone(name,type,id,price,description) {
        
        this.name= name;
        this.type=type;
        this.id= id;
        this.price=price;
        this.description=description;
        
    };



let oneplus_11= new phone("ONEPLUS 11 5G","8 GB RAM 128 GB Storage",1,"40,000","5g")
let oneplus_11r = new phone("ONEPLUS 11R 5G","8 GB RAM 128 GB Storage",1,"40,000","5g")
let oneplus_9 = new phone("ONEPLUS 9 5G","8 GB RAM 128 GB Storage",1,"40,000","5g")
let oneplus_9r = new phone("ONEPLUS 9R 5G","8 GB RAM 128 GB Storage",1,"40,000","5g")

let phones=[oneplus_11,oneplus_11r,oneplus_9,oneplus_9r]

for (i in phones) {
    for (j in phones[i]){
        console.log( phones[i][j]);
    }
        
    }
    


