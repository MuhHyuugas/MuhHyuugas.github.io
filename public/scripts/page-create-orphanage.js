//create map
const map = L.map("mapid").setView([-27.221755, -49.6550612], 15);

//create and add title layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});
let marker;
//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;
  //remove previous markers
  marker && map.removeLayer(marker);
  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//add photo field
function addPhotoField() {
  //pegar o container de fotos
  const container = document.querySelector("#images");
  //pegar o container para duplicar
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da última imagem adicionada
  const fieldContainerClone = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  // verificar se o campo está  vazio
  const input = fieldContainerClone.children[0];
  if (input.value == "") return;
  //limpar o campo
  input.value = "";
  //adicionar o clone ao container de imagens
  container.appendChild(fieldContainerClone);
}

//excluir campo
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}
//troca do sim e não
function changeButton(event) {
  //retirar a classe active dos dois
  document
   .querySelectorAll(".button-select button")
   .forEach(function(button) {button.classList.remove('active')});

  //pegar o botão clicado
  const button = event.currentTarget;
  button.classList.add("active");
  

  //atualizar o input hidden
  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value
}
