let submitBtn = document.getElementById('submitButton');
let form = document.getElementById('loginForm');

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let sendObject = {}
    let data = new FormData(form)
    data.forEach((value,key)=>sendObject[key]=value)
    fetch('/api/login',{
        method:"POST",
        body:JSON.stringify(sendObject),
        headers:{
            'Content-Type':"application/json"
        }
    }).then(result=>result.json()).then(json=>{
        console.log(json)
        location.replace('./pages/page.html')
    });
})