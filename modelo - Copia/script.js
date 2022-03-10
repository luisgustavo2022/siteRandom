function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()


msg.innerHTML = "agora são  " + hora +" horas."

if(hora>= 0 && hora<= 12){
    img.src='manha.jpg'
}else if(hora>=13 && hora<=18){
    img.src = 'tarde.jpg'
}else{
    img.src = "./oite.jpg"
}


}