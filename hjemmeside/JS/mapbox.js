

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVlbmZlbGR0IiwiYSI6ImNrbnBwbTBibDBicXYycW56bTRxcGhka3UifQ.OfIpfhcgQ7eY31gOod32Bw';
var map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [10.205738, 56.169239 ], // starting position [lng, lat]
zoom: 13 // starting zoom
});

// Create a new marker, set the longitude and latitude, and add it to the map
new mapboxgl.Marker()
.setLngLat([10.205738, 56.169239])
.addTo(map);



