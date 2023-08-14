function createNewElement(ele, attributes){
    let newElement = document.createElement(ele);
    if(attributes){
        for(let i=0; i < attributes.length; i++){
        newElement.setAttribute(attributes[i]['attr'], attributes[i]['value']);
        }
    }
    return newElement;
  }
  
  let wrapper = createNewElement('div', [{'attr': 'class', 'value': 'col'}]);
  
  let card = createNewElement('div', [{'attr': 'class', 'value': 'card shadow-sm'}]);
  
  
  let prod_image = createNewElement('img', [{'attr': 'src', 'value': 'https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202306/02/Z8drqdOKU2JlZyl5.png?x-amz-process=image/format,webp/quality,Q_80'}, {'alt': '', 'value': ''}]);
  
  //card-body 
  let card_body = createNewElement('div', [{'attr': 'class', 'value': 'card-body'}]);
  
  //card-header 
  let card_header = createNewElement('div', [{'attr': 'class', 'value': 'card-header'}]);
  
  //b 
  let card_header_text = createNewElement('b');
  card_header_text.innerText = 'ONEPLUS 11 5G';
  card_header.append(card_header_text);

  //p RAM
  let ram_storage = createNewElement('p');
  ram_storage.innerText = '8 GB RAM + 128 GB Storage'
  
  //cta_wrapper 
  let cta_wrapper = createNewElement('div', [{'attr': 'class', 'value': 'd-grid gap-2 col-12 mx-auto'}]);
  
  // a 
  let cta_link = createNewElement('a', [{'attr': 'href', 'value': 'phonemodel.html'}]);
  
  // button 
  //<button class="btn btn-dark" style="width: 100%;" type="button">Buy</button>
  let cta_btn = createNewElement('button', [{'attr': 'class', 'value': 'btn btn-dark'}, {'attr': 'style', 'value': 'width: 100%;'}, {'attr': 'type', 'value':'button'}]);
  
  cta_link.append(cta_btn);
  cta_wrapper.append(cta_link);
  
  // d-flex
  let price_wrapper = createNewElement('div', [{'attr': 'class', 'value': 'd-flex justify-content-between align-items-center '}]);
  
  // price-group
  let price_group = createNewElement('div', [{'attr': 'class', 'value': 'btn-group'}]);
  
  //small 
  let actual_price = createNewElement('small', [{'attr': 'class', 'value': 'text-decoration-line-through text-secondary'}]);
  actual_price.innerText = '₹45,000';
  
  //small 
  let offer_price = createNewElement('small', [{'attr': 'class', 'value': 'text-black text-primary'}]);
  offer_price.innerText = '₹40,000';
  
  price_group.append(actual_price);
  price_group.append(offer_price);
  price_wrapper.append(price_group);
  
  card_body.append(card_header);
  card_body.append(price_wrapper);
  card_body.append(cta_wrapper);
  
  card.append(prod_image);
  card.append(card_body);
  
  wrapper.append(card);
  
  console.log(wrapper);