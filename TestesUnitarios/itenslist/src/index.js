module.exports = class Checkout{
    constructor(){
        this.price = new Object()
        this.total = 0 
    }
    addItemPrice(item, price ){   
        this.prices[item] = (price)
    } 
    addItem(item){        
        this.total += this.prices(item)
    }
    calculateTotal(){

        return this.total
    }
}

// preços de itens individuais 
// adicionar itens 
// valor total para todos os itens adicionados 
// adicionar descontos para um valor N de itens 