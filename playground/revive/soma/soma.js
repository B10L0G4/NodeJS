    const btn = document.querySelector('#calc')

    btn.addEventListener('click', function(e) {
         e.preventDefault(); // previne o comportamento padrão do botão que é enviar o formulári-


        const f1 = document.querySelector('#f1');
        const valueF1 = f1.valueAsNumber; // valueAsNumber converte o valor em número , podemos usar value porém ele retorna uma string e precisara ser convertido com parseInt no resultado - exemplo - parseInt(valueF1)
        const s2 = document.querySelector('#s2');
        const valueS2 = s2.valueAsNumber;
        const result = document.querySelector('#result');

        const res = valueF1 + valueS2; 
        result.textContent = res;

        console.log(res);
        console.log(valueF1);
        console.log(valueS2);

    }); 


    // const f1 = document.getElementById('f1');
    // const s2 = document.getElementById('s2');
    // const result = document.getElementById('result');
    
    // function calc() {
    //     const res = f1.valueAsNumber + s2.valueAsNumber;
    //     result.textContent = res;
        
    // };

