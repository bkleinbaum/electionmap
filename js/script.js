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
var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/bk741.vs2d42t9/{z}/{x}/{y}.png', {
 maxZoom: 14,
 minZoom: 10}).addTo(map);

L.mapbox.accessToken = 'pk.eyJ1IjoiYms3NDEiLCJhIjoiZFNVcTNvdyJ9.h8G4i4ib7PicRCiejvZW6g';
// Replace 'examples.map-i87786ca' with your map id.
var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/bk741.b5k4kj4i/{z}/{x}/{y}.png', {
 maxZoom: 14,
 minZoom: 10}).addTo(map);




//import race layer

  //white

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


var white = new L.GeoJSON.AJAX("webdata/white.geojson", {style: wStyle});

  //Asian 

function getDemoAColor(d) {
    return d > 100 ? '#91003f' :
           d > 70  ? '#ce1256' :
           d > 60  ? '#e7298a' :
           d > 50  ? '#df65b0' :
           d > 40  ? '#c994c7' :
           d > 30  ? '#d4b9da' :
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

var aLegend = L.control({position: 'bottomright'});

aLegend.onAdd = function (map) {

    
  var div = L.DomUtil.create('div', 'info legend'),
        grades = [20, 30, 40, 50, 60, 70, 80],
        labels = ["% Asian in Asian Plurality Districts"];

  for (var i = 0; i < grades.length; i++) {
        from = grades [i];
        to = grades[i+1]-1;

    labels.push(
        "$"+'<i style="background:' + getDemoAColor(from + 1) + '"></i> ' +
        from + (to ? '&ndash;' + to : '+'));
        }
        div.innerHTML = labels.join('<br>');
        return div;

      };




var asian = new L.GeoJSON.AJAX("webdata/asian.geojson", {style: AStyle});

  //black

function getDemoBColor(d) {
    return d > 80 ? '#084594' :
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



var black = new L.GeoJSON.AJAX("webdata/black.geojson", {style: BStyle});

  //hispanic

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


var hisp = new L.GeoJSON.AJAX("webdata/hisp.geojson", {style: HStyle});

//create demolayer 

var demoLayer = L.layerGroup([hisp, black, asian, white]);


//import income layer

function getIColor(d) {
    return d > 80000  ? '#41ab5d' :
           d > 60000  ? '#74c476' :
           d > 40000  ? '#a1d99b' :
           d > 20000  ? '#c7e9c0' :
           d >     1  ? '#edf8e9' :
                        '#000';  
          
}


function iStyle(feature) {
    return {
        fillColor: getIColor(feature.properties.meanincome),
        weight: 2,
        opacity: 1,
        color: getIColor(feature.properties.meanincome),
        fillOpacity: 1
    };
}

 var income = new L.GeoJSON.AJAX("webdata/income.geojson", {style: iStyle});

//import ownership layer

function getColor(d) {
    return d > 60  ?  '#800026' :
           d > 40  ? '#E31A1C' :
           d > 20  ? '#FD8D3C' :
           d > 10  ? '#FED976' :
           d >  1  ? '#FFEDA0' :
                    '#000';  
}

function getWeight (d) {
  return    d > 1   ? 1.3:
                .5 ;

}

function style(feature) {
    return {
        fillColor: '#000',
        weight: getWeight(feature.properties.housing_Re),
        opacity: 1,
        color: getColor(feature.properties.housing_Re),
        fillOpacity: 0
    };
}


var ownership = new L.GeoJSON.AJAX("webdata/ziphouse.geojson", {style: style});


 //toggle layers

$("#demo").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(demoLayer)) {
        $(this).removeClass('selected');
        map.removeLayer(demoLayer);
        map.removeLayer(mayorEDblank);
        $("#demoLegend").css({ visibility: "hidden"});
        $(this).css({'background-color':'#B1ACBD'});

    } else {
        map.addLayer(demoLayer); 
        map.addLayer(mayorEDblank);      
        map.removeLayer(income);
        map.removeLayer(ownership);
        $("#demoLegend").css("visibility", "visible");
        $("#rentalLegend").css({ visibility: "hidden"});  
        $("incomeLegend").css({ visibility: "hidden"});
        $("#demo").css({'background-color':'#C1ACBD'});
        $("#money").css({'background-color':'#B1ACBD'});
        $("#homes").css({'background-color':'#B1ACBD'});

   }
});


$("#money").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(income)) {
        $(this).removeClass('selected');
        map.removeLayer(income);
       $("#incomeLegend").css({ visibility: "hidden"});
        map.removeLayer(mayorEDblank)
        $(this).css({'background-color':'#B1ACBD'});
       

    } else {
        //add Layers
        map.addLayer(income);  
        map.addLayer(mayorEDblank);  
        $("#incomeLegend").css("visibility", "visible"); 
        //remove maps
        $(this).addClass('selected');
        map.removeLayer(demoLayer);
        map.removeLayer(ownership);

        //remove legends
        $("#rentalLegend").css("visibility", "hidden");
        $("#demoLegend").css("visibility", "hidden"); 
        
        //change colors
        $(this).css({'background-color':'#C1ACBD'});
        $("#demo").css({'background-color':'#B1ACBD'});
        $("#homes").css({'background-color':'#B1ACBD'});
   }
});

$("#homes").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(ownership)) {
        $(this).removeClass('selected');
        map.removeLayer(ownership);
        $("#rentalLegend").css("visibility", "hidden");  
        map.removeLayer(mayorEDblank)
        $(this).css({'background-color':'#B1ACBD'});
        
    } else {
        
        //add layers
        map.addLayer(ownership);  
        map.addLayer(mayorEDblank)
        $("#rentalLegend").css("visibility", "visible");
        $(this).addClass('selected');
        
        //remove layers

        map.removeLayer(demoLayer);        
        map.removeLayer(income);
        
        //remove legends
        $("#demoLegend").css("visibility", "hidden"); 
        $("#incomeLegend").css("visibility", "hidden"); 
        
        //change color
        $(this).css({'background-color':'#C1ACBD'});
        $("#demo").css({'background-color':'#B1ACBD'});
        $("#money").css({'background-color':'#B1ACBD'});
        

   }
});


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




var mayorStyleBlank = {
    "weight": 0,
    "fillOpacity": 0,
   };

function makeMayor1Markers (feature,layer) {
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


var mayorEDblank = new L.GeoJSON.AJAX("webdata/mayored.geojson", {
  style: mayorStyleBlank,
  onEachFeature: makeMayor1Markers
});





