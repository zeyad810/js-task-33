// input
let input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Add task'
document.body.appendChild(input);
// input
// add  btn
let btn = document.createElement('button')
btn.innerText = "Add Task"
document.body.appendChild(btn);
// add btn
//ul
let ul =document.createElement('ul');
document.body.appendChild(ul);
// ul
btn.onclick =function() {
    let li = document.createElement('li');
    li.innerText=input.value +" "
    let remove = document.createElement('button');
    remove.innerText= "  X"
    remove.onclick =function(){
        li.remove()
    }
    li.appendChild(remove) 
    li.onclick=function () {
        
        li.classList.toggle('done')
    }

    ul.appendChild(li)
    input.value=" "
}
// style 
document.body.style.backgroundColor='#000016'
btn.style=`
color:#fff;
background-color:blue;
margin:10px;
padding:10px;
border-radius:5px;
border:none;  
`;
input.style=`padding:10px;
border-radius:5px;
border:none
`
ul.style=`
list-style-type:"🔍";
color:#fff;
`