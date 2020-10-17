//create map
const options = {
    dragging: false,
    touchZoom: false,
    dubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//const spanLng = document.querySelector('span[data-lng]') caso seu modo dê errado substitua lat e lng por spanlat.dataset.lat e spanlng.dataset.lng
//const spanLat = document.querySelector('span[data-lat]')
const span = document.querySelector('.map-container span')
const lat = span.dataset.lat
const lng = span.dataset.lng
const map = L.map('mapid', options).setView([lat,lng], 15);


//create and add title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor:[170, 2] 
})

//create and add ,marker

L.marker([lat,lng], {icon}).addTo(map)

// Image gallery

function selectImage(event) {
    const button = event.currentTarget
    //remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {button.classList.remove("active")
                                    console.log(button.classList)})   
    //selecionar a classe clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    //atualizar o image container
    imageContainer.scr = image.src
    console.log(image.src)
    //adicionar a classe active no alvo
    button.classList.add("active")
    console.log(imageContainer.scr)
}
