function main() {

	mapboxgl.accessToken = 'pk.eyJ1IjoiYXJtaW5hdm4iLCJhIjoiSTFteE9EOCJ9.iDzgmNaITa0-q-H_jw1lJw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/arminavn/cjh58j7wp0sm22ro8hzu7roxz', // stylesheet location
    center: [-71.08, 42.348], // starting position [lng, lat]
    zoom: 12 // starting zoom
});
}

main();
