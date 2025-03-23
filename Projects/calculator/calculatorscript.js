const display = document.querySelector('.value');
const buttons = document.querySelectorAll('button');


buttons.forEach( (item) => {
    item.onclick = () => {
        if (item.dataset.buttons ===  ('AC') ) {
            display.value = '0';
        }else if(item.dataset.button === 'DEL'){
            let string=display.value;
            display.value= string.substring(0, string.length -1);
        }else if(item.dataset.button === '=') {
            if (display.value !== '') {
                display.value = eval(display.value);
            }
        }else{
            display.value += item.dataset.button;
        }

    }
})


