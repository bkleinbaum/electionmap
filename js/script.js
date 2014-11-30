//add map

var map = L.map('map');
map.setView([40.681339, -73.96302], 10

	);



// var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
// 	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
// 	// maxZoom: 14,
// 	// minZoom: 9
// }).addTo(map);

L.mapbox.accessToken = 'pk.eyJ1IjoiYms3NDEiLCJhIjoiZFNVcTNvdyJ9.h8G4i4ib7PicRCiejvZW6g';
// Replace 'examples.map-i87786ca' with your map id.
var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/bk741.v6byy14i/{z}/{x}/{y}.png', {
 maxZoom: 14,
 minZoom: 10}).addTo(map)

L.mapbox.accessToken = 'pk.eyJ1IjoiYms3NDEiLCJhIjoiZFNVcTNvdyJ9.h8G4i4ib7PicRCiejvZW6g';
// Replace 'examples.map-i87786ca' with your map id.
var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/bk741.b5k4kj4i/{z}/{x}/{y}.png', {
 maxZoom: 14,
 minZoom: 10}).addTo(map)




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



//import ownership layer

// function getColor(d) {
//     return d > 100 ? '#800026' :
//            d > 70  ? '#BD0026' :
//            d > 60  ? '#E31A1C' :
//            d > 50  ? '#FC4E2A' :
//            d > 40  ? '#FD8D3C' :
//            d > 30  ? '#FEB24C' :
//            d > 20  ? '#FED976' :
//            d > 10  ? '#FFEDA0' :
//            			 '#000'; 	
// }

// function getWeight (d) {
// 	return d > 1 ? 2 :
// 				   .5 ;

// }

// function style(feature) {
//     return {
//         fillColor: '#000',
//         weight: getWeight(feature.properties.housing_Re),
//         opacity: 1,
//         color: getColor(feature.properties.housing_Re),
//         fillOpacity: 0
//     };
// }


// var ownership = new L.GeoJSON.AJAX("webdata/ziphouse.geojson", {style: style}).addTo(map);


//import race layer

function getDemoWColor(d) {
    return d > 100 ? '#005824' :
           d > 70  ? '#238b45' :
           d > 60  ? '#41ae76' :
           d > 50  ? '#66c2a4' :
           d > 40  ? '#99d8c9' :
           d > 30  ? '#ccece6' :
           d > 20  ? '#edf8fb' :
           			 '#000'; 	
}


function wStyle(feature) {
    return {
        fillColor: '#000',
        weight: 2,
        opacity: 1,
        color: getDemoWColor(feature.properties.white_White),
        fillOpacity: 0
    };
}

var white = new L.GeoJSON.AJAX("webdata/white.geojson", {style: wStyle}).addTo(map);

//

function getDemoAColor(d) {
    return d > 100 ? '#91003f' :
           d > 70  ? '#ce1256' :
           d > 60  ? '#e7298a' :
           d > 50  ? '#df65b0' :
           d > 40  ? '#c994c7' :
           d > 30  ? '##d4b9da' :
           d > 20  ? '#f1eef6' :
           			 '#000'; 	
}


function AStyle(feature) {
    return {
        fillColor: '#000',
        weight: 2,
        opacity: 1,
        color: getDemoAColor(feature.properties.asian_Asian),
        fillOpacity: 0
    };
}


var asian = new L.GeoJSON.AJAX("webdata/asian.geojson", {style: AStyle}).addTo(map);

//

function getDemoBColor(d) {
    return d > 100 ? '#084594' :
           d > 70  ? '#2171b5' :
           d > 60  ? '#4292c6' :
           d > 50  ? '#6baed6' :
           d > 40  ? '#9ecae1' :
           d > 30  ? '#c6dbef' :
           d > 20  ? '#eff3ff' :
           			 '#000'; 	
}

function BStyle(feature) {
    return {
        fillColor: '#000',
        weight: 2,
        opacity: 1,
        color: getDemoBColor(feature.properties.black_Black),
        fillOpacity: 0
    };
}


var black = new L.GeoJSON.AJAX("webdata/black.geojson", {style: BStyle}).addTo(map);

//

function getDemoHColor(d) {
    return d > 100 ? '#99000d' :
           d > 70  ? '#cb181d' :
           d > 60  ? '#ef3b2c' :
           d > 50  ? '#fb6a4a' :
           d > 40  ? '#fc9272' :
           d > 30  ? '#fcbba1' :
           d > 20  ? '#fee5d9' :
           			 '#000'; 	
}

function HStyle(feature) {
    return {
        fillColor: '#000',
        weight: 2,
        opacity: 1,
        color: getDemoHColor(feature.properties.Hisp_Hisp),
        fillOpacity: 0
    };
}


var hisp = new L.GeoJSON.AJAX("webdata/hisp.geojson", {style: HStyle}).addTo(map);



//import mayor layer

var mayorStyle = {
    "weight": .5,
    "fillOpacity": 0,
    "color": '#D4D4D4'
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

// L.geoJson(nabecentroid, {
//     pointToLayer: function (feature, latLng) {
//         return L.label({ noHide: true }, this)
//         	.setContent(feature.properties.neighborho)
//         	.setLatLng(latLng);
//     }
// }).addTo(map);









