$(document).on("ready",init);

var zoneA;
var zoneB;
var marker = null;

function init() {
  var options = {
    zoom: 14,
    center: new google.maps.LatLng(19.540649,-96.926408),
    mapTypeId: google.maps.MapTypeId.HYBRID
  };

  map = new google.maps.Map(document.getElementById("map_canvas"), options);

  google.maps.event.addListener(map, 'click', clickMap);

  initZones();

}

function checkZone(mark) {
  
  inZoneA = google.maps.geometry.poly.containsLocation(mark.getPosition(), zoneA); 
  
  inZoneB = google.maps.geometry.poly.containsLocation(mark.getPosition(), zoneB); 
  
  if (inZoneA) {
    alert("Estas en la zona 1");
  }

  if (inZoneB) {
    alert("Estas en la zona 2");
  }

  if (!(inZoneA|inZoneB)){
    alert("No estas en ninguna zona");
  }
}

function clickMap (event) {
  if (marker == null) {
    marker = new google.maps.Marker({
      position: event.latLng,
      map: map
    });
  } else {
    marker.setPosition(event.latLng);
  }
  checkZone(marker);
}

function initZones () {

  var path1 = [[
    new google.maps.LatLng(19.53819077007814, -96.92774191733774),
    new google.maps.LatLng(19.5414135990875, -96.92438024445818),
    new google.maps.LatLng(19.54489034720793, -96.92779381248501),
    new google.maps.LatLng(19.5434939128515, -96.93101598485207),
    new google.maps.LatLng(19.53819077007814, -96.92774191733774)

  ],[
    new google.maps.LatLng(19.53952610737793, -96.92735384130297),
    new google.maps.LatLng(19.54064355924088, -96.92617840223514),
    new google.maps.LatLng(19.54309212681626, -96.92735364028547),
    new google.maps.LatLng(19.54193435199389, -96.92906063215646),
    new google.maps.LatLng(19.53952610737793, -96.92735384130297)
  ]];


  var path2 = [
    new google.maps.LatLng(19.53952610737793, -96.92735384130297),
    new google.maps.LatLng(19.54064355924088, -96.92617840223514),
    new google.maps.LatLng(19.54309212681626, -96.92735364028547),
    new google.maps.LatLng(19.54193435199389, -96.92906063215646),
    new google.maps.LatLng(19.53952610737793, -96.92735384130297)
  ];

  zoneA = new google.maps.Polygon({
    paths: path1,
    strokeWeight: 2,
    fillColor: '#55FF55',
    fillOpacity: 0.5,
    clickable : false,
    map: map
  });

  zoneB = new google.maps.Polygon({
    paths: path2,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable : false,
     map: map
  });
}