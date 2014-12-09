//add map

var map = L.map('map');
map.setView([40.681339, -73.96302], 10

	);



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


function getDemoColor(d) {
    return  d == "White" ? '#e41a1c' :
           d == "Asian"  ? '#984ea3' :
           d == "Black"  ? '#377eb8' :
           d == "Hisp"  ? '#4daf4a' :
                        '#ff7f00';  
          
}


function demoStyle(feature) {
    return {
        fillColor: '#000',
        weight: 2,
        opacity: 1,
        color: getDemoColor(feature.properties.races_Race),
        fillOpacity: 0
    };
}


var demoLayer = new L.GeoJSON.AJAX("webdata/races98.geojson", {style: demoStyle});



//import income layer

function getIColor(d) {
    return d > 80000  ? '#0868ac' :
           d > 60000  ? '#43a2ca' :
           d > 40000  ? '#7bccc4' :
           d > 20000  ? '#bae4bc' :
           d >     1  ? '#f0f9e8' :
                        '#000';  
          
}



function iStyle(feature) {
    return {
        fillColor: getIColor(feature.properties.meanincome),
        weight: 2,
        opacity: 1,
        color: getIColor(feature.properties.meanincome),
        fillOpacity: 0
    };
}

 var income = new L.GeoJSON.AJAX("webdata/income98.geojson", {style: iStyle});

//import ownership layer

function getColor(d) {
    return d > 60  ?  '#7a0177' :
           d > 40  ? '#c51b8a' :
           d > 20  ? '#f768a1' :
           d > 10  ? '#fbb4b9' :
           d >  1  ? '#feebe2' :
                    '#000';  
}


function getWeight (d) {
  return    d > 1   ? 2:
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






var ownership = new L.GeoJSON.AJAX("webdata/rent98.geojson", {style: style});


 //toggle layers

$("#demo").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(demoLayer)) {
        $(this).removeClass('selected');
        map.removeLayer(demoLayer);
        map.removeLayer(mayorEDblank);
        $("#demoLegend").css("visibility", "visible");
        $(this).css({'background-color':'#B1ACBD'});

    } else {

      //add layers
      $(this).addClass('selected');
        map.addLayer(demoLayer); 
        map.addLayer(mayorEDblank); 
      //remove layers
        map.removeLayer(income);
        map.removeLayer(ownership);
      //remove legend 
        $("#demoLegend").css("visibility", "visible");
        $("#rentalLegend").css("visibility", "hidden");  
        $("#incomeLegend").css("visibility", "hidden");
      //change colors
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
       $("#incomeLegend").css("visibility", "hidden");
        map.removeLayer(mayorEDblank)
        $(this).css({'background-color':'#B1ACBD'});
       

    } else {
        //add Layers
        $(this).addClass('selected');
        map.addLayer(income);  
        map.addLayer(mayorEDblank);
        
        
        //remove map
        map.removeLayer(demoLayer);
        map.removeLayer(ownership);

        //remove legends
        $("#incomeLegend").css("visibility", "visible"); 
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
        $(this).addClass('selected');
        map.addLayer(ownership);  
        map.addLayer(mayorEDblank);
        $("#rentalLegend").css("visibility", "visible");
        
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





