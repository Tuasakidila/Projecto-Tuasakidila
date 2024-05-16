
//Clicando do botão menu
function MostrarMenu(){
    let div = document.querySelector('.mobile_menu')
    let btn_bar = document.getElementById('btn1')
    if (div.classList.contains('open')) {
        div.classList.remove('open')
        btn_bar.innerHTML = '<s><i class="fa-solid fa-bars"></i></s>'
    } else {
        div.classList.add('open')
        btn_bar.innerHTML = '<s><i class="fa-solid fa-x"></i></s>'
    }   
}

//Em caso a tela esteja cheia e o menu lateral estiver aberto 
if ((Number(document.body.style.maxWidth)) > 700) {   
    let div = document.querySelector('.mobile_menu')
    if (div.classList.contains('open')) {
        div.classList.remove('open')
    }
}