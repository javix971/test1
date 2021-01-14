let vector1=[]
function botongenerar(){
let numero = document.getElementById("cantidad").value
let texto=" "
let i 
for(i=0;parseInt(i)<parseInt(numero);i++){
vector1[i]=Math.trunc(Math.random()*50)
texto=texto+vector1[i]+" "


}alert(texto)

}