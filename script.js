let x;

let btn = document.querySelectorAll("#btn");

btn.forEach( data => {
    data.onclick = () => { 
        console.log(data.value);
        f1(data.value);
    }
    
})

function f1(x){
    let order = document.querySelector(".order")
    let div = document.createElement('div');
    div.className = "ord";
    div.innerHTML = x;
    order.append(div);
    
}


let res = document.querySelector("#end");

let data = document.querySelector(".order");

function rmv(pn) {
    while (pn.firstChild) {
        pn.removeChild(pn.firstChild);
    }
}

res.onclick = () => rmv(data);
