const fildList = document.querySelectorAll('.contact-filds')
for (const i =0; i<fildList.length; i++){
    multFilds(fildList[i])
}
function multFilds (fs){
    const addBtn = document.createElement('button'); // create button

    fs.appendChild(addBtn);// add button to the form
    addBtn.textContent = 'Add';// add text to the button
    addBtn.type = 'button';// add type to the button
    const firstInput = fs.querySelector('input');// add name to the input
    addBtn.addEventListener('click', function(){// add event to the button
        
        const div = document.createElement('div');// create div
        const newInput = document.createElement('input');// create input
        newInput.name = firstInput.name;// add name to the input
        newInput.type = firstInput.type;// add type to the input

        
        const deleteBtn = document.createElement('button'); //
        deleteBtn.textContent = 'Delete';// add text to the button
        deleteBtn.type = 'button';// add type to the button


        div.appendChild(newInput);// add input to the div
        div.appendChild(deleteBtn);// add button to the div

        deleteBtn.addEventListener('click', function(){// add event to the button
            div.remove();// remove div
            
        });

        fs.insertBefore(div, addBtn);// add div to the form


    });


}