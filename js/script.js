//add map

var map = L.map('map');
map.setView([40.681339, -73.96302], 12

	);



var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
	// maxZoom: 14,
	// minZoom: 9
}).addTo(map);

L.mapbox.accessToken = 'pk.eyJ1IjoiYms3NDEiLCJhIjoiZFNVcTNvdyJ9.h8G4i4ib7PicRCiejvZW6g';
// Replace 'examples.map-i87786ca' with your map id.
var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/bk741.b5k4kj4i/{z}/{x}/{y}.png').addTo(map)



// import nabe layer

// function makeNabeMarkers (feature,layer) {	
// 	layer.bindPopup(
// 		"<b>"
// 		+feature.properties.neighborho
// 		+"</b>"
// 		)};


// var nabeMarkerOptions = {
//     radius: 8,
//     fillColor: "#ff7800",
//     color: "#000",
//     weight: 1,
//     opacity: 1,
//     fillOpacity: 0.8
// };

// L.geoJson(nabecentroid, {
// 	onEachFeature: makeNabeMarkers, 
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng, nabeMarkerOptions);
//     }
// }).addTo(map);


//import mayor layer

var mayorStyle = {
    "weight": .5,
    "fillOpacity": 0,
    "color": 'black'
   };

function makeMayorMarkers (feature,layer) {
	layer.bindPopup(
		"<b> Election District: </b>"+feature.properties.ADED	
		+"<br>"
		+"<b>de Blasio: </b>"+feature.properties.deBlasio
		+"<br>"
		+"<b>Liu: </b>"+feature.properties.Liu
		+"<br>"
		+"<b>Quinn: </b>"+feature.properties.Quinn
		+"<br>"
		+"<b>Thompson: </b>"+feature.properties.Thompson
		+"<br>"
		+"<b>Weiner: </b>"+feature.properties.Weiner
		+"<br>"
		+"<b>Total Votes: </b>"+feature.properties.Total
	 
		)};



var mayorED = new L.GeoJSON.AJAX("webdata/mayored.geojson", {
	style: mayorStyle,
	onEachFeature: makeMayorMarkers
}).addTo(map);


//import marker layer

//Add labels layer
var labelStyle = {
    color: '#CCC',
    opacity: 1
};

var labelMarkerOptions = {
        opacity: 0,
        fillOpacity: 0
};

var labelLayer = L.geoJson(nabecentroid, {
        pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, labelMarkerOptions);
        },
        onEachFeature: function (feature, layer) {
                layer.bindLabel(feature.properties.neighborho, {noHide:true});
        }
});

labelLayer.eachLayer(function(l) {l.showLabel();});
map.addLayer(labelLayer);
layerControl.addOverlay(labelLayer, 'Site Labels');










