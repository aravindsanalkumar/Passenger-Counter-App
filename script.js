let count_el = document.getElementById('count_el');
let save_el = document.getElementById('save_el');
let count  = 0;


function increment(){
    count = count + 1;
    count_el.innerText = count;
}

function save(){
    save_el.innerText += count + '-';
    count = 0;
    count_el.textContent = 0;
    //explain this update
}
