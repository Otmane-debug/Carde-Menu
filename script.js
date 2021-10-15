let x;
let y ;

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

let data = document.querySelector(".order").childNodes;

console.log(data);

function f2(y) { 
    y.remove();
}

res.onclick = () => { 
    data.forEach( dt => {
        f2(dt);    
    }
)}

