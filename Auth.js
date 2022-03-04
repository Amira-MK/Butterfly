function login(){
    var loginButton = document.querySelector('.login-button')
    var container = document.querySelector('.container')
    loginButton.classList.add('hide')
    container.classList.remove('hide')
}

function change(){
    var forms = document.querySelectorAll('.form')
    for (let i = 0; i< forms.length; i++) {
        var form = forms[i];
        if(form.classList.contains('hide')) {form.classList.remove('hide')}
        else form.classList.add('hide')
      }
}

function createbuble(){
    const section =document.querySelector('section')
    const createlement = document.createElement('span')
    var size = Math.random() * 60;

    createlement.style.width = 20 + size +'px';
    createlement.style.height = 20 + size +'px';
    createlement.style.left = Math.random() * innerWidth + "px";
    var j=0;
    if(section.appendChild(createlement)){j++};

    setTimeout( () => { createelement.remove()})
}
var j=0;
     while(j<2){
       setInterval(createbuble,7000);
        j++;
    }
    