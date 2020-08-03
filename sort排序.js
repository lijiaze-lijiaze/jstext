{
    hotels:[
        {
            id:1,
            price:100,
            score:80
        },
        {
            id:2,
            price:70,
            score:90
        },
        {
            id:3,
            price:70,
            score:95
        }
    ]
}
//先按价格从低到高排序，价格相同按评分排序
function compare(hotel1,hotel2){
    if(hotel1.price = hotel2.price){
        return hotel1.score - hotel2.score
    }
    return hotel1.price - hotel2.price
}