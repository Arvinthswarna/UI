console.log("welcome to js")

function welcome(){
    alert("Button Clicked")
}

function changeBackground(){
    var x =document.getElementById('bg');
    x.style.backgroundColor = 'orange';
}

function hov(){
    var e = document.getElementById("hover");
    e.style.display= 'none';
}

function out(){
    var e = document.getElementById("out");
    e.style.display= 'none';
}

function focused(){
    var ip = document.getElementById('name');
    if(confirm('Got It?')){
        ip.blur();
    }
}