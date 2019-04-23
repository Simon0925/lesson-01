var n = [ 254, 115, 78, 25, 91, 45, 37 ];

for (var more=0 ; more<n.length  ; more++ ){
    if (n[more]>50){
    console.log(n[more])
    var p = document.querySelector('.footer').appendChild(document.createElement('p'))
    p.innerText = n[more]
    }
}
