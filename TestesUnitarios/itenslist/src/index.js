module.exports = class Checkout{
    constructor(){
        this.prices = new Object()
        this.total = new Object()
        this.discount = new Object()
    }
    addItemPrice(item, price ){   
        this.prices[item] = price
    } 
    addItem(item){        
        if (this.items[item]== undefined){
            this.items[item] = 1
        }else {
            this.items[item]++
        }
    }
    calculateTotal(){
        var total = 0 
        for (var item in this.items){
            total += this.calculateItemTotal(item)
    }
};
    calculateItemTotal(item){
        var total = 0 
        var discount = this.discount[item]
        if (discount != undefined){
            total += (this.prices[item] * this.items[item], discount)
        }
        else {
            total += (this.prices[item] * this.items[item])
        }   
        return total  
    };
    calculateDiscount(item, itemCnt, discount){
        var total = 0
        var nbrOfDiscounts = itemCnt / discount.cnt
        total += nbrOfDiscounts * discount.price
        var remaider = itemCnt % discount.cnt
        total += remaider * this.price[item]
        return total
    };

    addDiscount(item, itemCnt, discountPrice){
        this.discount[item] = {
            cnt: itemCnt, price: discountPrice
        };
    }
}   


// preços de itens individuais 
// adicionar itens 
// valor total para todos os itens adicionados 
// adicionar descontos para um valor N de itens 