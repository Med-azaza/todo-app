const add=document.getElementById('add');
const clear=document.getElementById('cl');
const holder=document.querySelector('.content');
const input=document.getElementById('text');
let storage=window.localStorage;
let i=0;
let y=0;
do {
    if (storage.getItem(i)!=null){
    let ch=storage.getItem(i);
    let textnode=document.createTextNode(storage.getItem(i));
    let node=document.createElement("P");
    let node2=document.createElement('SPAN');
    node2.appendChild(document.createTextNode('task_alt'));
    node2.className="material-icons done";
    node2.addEventListener('click',(e)=> {
        if (node2.parentElement.style.backgroundColor=='rgb(44, 248, 44)'){
        node2.parentElement.style.backgroundColor='transparent';
        } else {
            node2.parentElement.style.backgroundColor='rgb(44, 248, 44)';
        }
    });
    node.appendChild(textnode);
    node.appendChild(node2);
    node.className='item';
    node2=document.createElement('SPAN');
    node2.appendChild(document.createTextNode('edit'));
    node2.className="material-icons edit";
    node.appendChild(node2);
    node2=document.createElement('SPAN');
    node2.appendChild(document.createTextNode('delete'));
    node2.className="material-icons del";
    node2.addEventListener('click',(e)=> {
        console.log(storage.getItem(i));
        for (let i=0;i<storage.length;i++){
                if (storage.getItem(i)==ch){
                window.localStorage.removeItem(i);
                }
        }
        node2.parentNode.parentNode.removeChild(node2.parentNode);
    })
    node.appendChild(node2);
    holder.appendChild(node);
    i++;
    y++;
} else {
    i++;
}
} while (y<storage.length);
add.addEventListener('click',action =(e) => {
    if (document.getElementById('text').value!=''){
    let items=document.querySelectorAll('.item');
    let ch=document.getElementById('text').value;
    document.getElementById('text').value='';
    window.localStorage.setItem(items.length.toString(),ch);
    let textnode=document.createTextNode(ch);
    let node=document.createElement("P");
    let node2=document.createElement('SPAN');
    node2.appendChild(document.createTextNode('task_alt'));
    node2.className="material-icons done";
    node2.addEventListener('click',(e)=> {
        if (node2.parentElement.style.backgroundColor=='rgb(44, 248, 44)'){
        node2.parentElement.style.backgroundColor='transparent';
        } else {
            node2.parentElement.style.backgroundColor='rgb(44, 248, 44)';
        }
    });
    node.appendChild(textnode);
    node.appendChild(node2);
    node.className='item';
    node2=document.createElement('SPAN');
    node2.appendChild(document.createTextNode('edit'));
    node2.className="material-icons edit";
    node.appendChild(node2);
    node2=document.createElement('SPAN');
    node2.appendChild(document.createTextNode('delete'));
    node2.className="material-icons del";
    node2.addEventListener('click',(e)=> {
        for (let i=0;i<storage.length;i++){
            if (storage.getItem(i)==ch) {
                window.localStorage.removeItem(i);
            }
        }
        node2.parentNode.parentNode.removeChild(node2.parentNode);
    })
    node.appendChild(node2);
    holder.appendChild(node);
    }
});
clear.addEventListener('click',(e)=> {
    storage.clear();
    let items=document.querySelectorAll('.item');
    for (let i of items){
        i.parentNode.removeChild(i);
    }
})
input.addEventListener('keyup',(e) => {
    if (e.keyCode===13) {
        e.preventDefault();
        add.click();
    }
});
