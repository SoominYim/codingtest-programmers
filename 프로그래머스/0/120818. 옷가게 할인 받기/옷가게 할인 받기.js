function solution(price) {
    ;
   if (price >= 500000){
        price = parseInt(price-(price*0.2));
    }else if (price >= 300000 && price < 500000){
        price = parseInt(price-(price*0.1));
    }else if (price >= 100000 && price < 300000){
        price = parseInt(price-(price*0.05));
    }
    return price;
}