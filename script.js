let button = document.getElementById("toggle")

button.addEventListener("click", function () {
    document.body.style.backgroundColor = "darkblue"
})











mapboxgl.accessToken = "pk.eyJ1IjoidGphY2tlIiwiYSI6ImNsZ2x3emp4MTAwN2czaW8zZDN1enkxbmEifQ.vhDonD-wrHXexXrnTHBYpQ";
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [18.062792, 59.4401813], // starting position [lng, lat]
    zoom: 15 // starting zoom
});

