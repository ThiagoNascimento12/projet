function ToggleMode(){
 const html = document.documentElement
 html.classList.toggle("light") 
 /*if (html.classList.contains('light')){
    html.classList.remove('light')
  } else{
    html.classList.add('light')
 } /*maneira antiga e completa , tem uma simplificação : html.classList.toggle("light") */ 

const img= document.querySelector("#profile img")
  //pegar a tag imagem
  if (html.classList.contains("light")) {
    //substituir a imagem
   img.setAttribute("src", "./assets/capa-white.jpg") 
   
    //se tiver light mode, adicionar a imagem light
 }else {
    img.setAttribute("src", "./assets/capa-dark1.jpg")
   
    //se tiver em light mode , manter a imagem normal
  }
 }