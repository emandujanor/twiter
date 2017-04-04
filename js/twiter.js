
function agregarTwit(){
  var comentario = document.getElementById("comentario").value;
  var nuevoTwit = document.createElement("article");
  nuevoTwit.innerHTML= comentario;
  document.getElementById("twitsSalida").appendChild(comentario);
  document.getElementById("nuevoTwit").value="";
}
