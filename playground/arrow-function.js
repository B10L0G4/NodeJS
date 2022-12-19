// const square = (x) => x * x
// console.log(square(9))

const evento = {
    name: 'Party' ,
    guestList: ['Carol', 'Rafa', 'Dante'],
    printGuestList(){
        console.log('Guest list for '+ this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending for ' + this.name)
        });
    }
}
evento.printGuestList()