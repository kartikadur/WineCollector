/**
 * @author zeroshiiro
 */

// variables declaration
(function(window, document, undefined) {
	var i;
	var geocoder;
	var map;
	var infoWindow;
	var mapMarker = [];
	var mapMarkerElems = [];
	var bounds;
	var mapCircle = [];

	function initialize() {
		var mapOptions = {
			center : new google.maps.LatLng(-34.397, 150.644),
			zoom : 8
		};

		map = new google.maps.Map(document.getElementById("map-container"), mapOptions);

		infoWindow = new google.maps.InfoWindow({
			content : '',
			maxWidth : 260
		});

		geocoder = new google.maps.Geocoder();
		bounds = new google.maps.LatLngBounds();
	}

	function bindHtmlEvent(map, infoWindow, marker, e) {
		$(e).bind("mouseover", function() {
			infoWindow.setContent($(e).html());
			infoWindow.open(map, marker);
		});

		$(e).bind("mouseout", function() {
			infoWindow.close(map, marker);
		});
	}

	function bindInfoWindow(map, infoWindow, marker, html) {
		google.maps.event.addListener(marker, 'mouseover', function() {
			infoWindow.setContent(html);
			infoWindow.open(map, marker);
		});
		google.maps.event.addListener(marker, 'mouseout', function() {
			infoWindow.close(map, marker);
		});
	}

	function bindMarker(mapMarker) {
		var marker = new google.maps.Marker({
			map : map,
			position : mapMarker.address,
			clickable : true
		});
		bindInfoWindow(map, infoWindow, marker, $(mapMarker.elem).html());
		bindHtmlEvent(map, infoWindow, marker, mapMarker.elem);
		bounds.extend(marker.position);
		map.fitBounds(bounds);
	}


	$(document).ready(function() {
		initialize();
		$("#collection>li.bottle").each(function() {
			var lat = $(this).attr("data-lat");
			var lon = $(this).attr("data-lon");
			mapMarker.push({
				address : new google.maps.LatLng(lat, lon),
				elem : this
			});
		});

		$.each(mapMarker, function(index, value) {
			bindMarker(value);
		});
	});
})(window, document);

/** Old code from reconmarketing.com/gsc **/

// variables declaration
// var i;
// var geocoder;
// var map;
// var infoWindow;
// var mapMarker = [];
// var mapMarkerElems = [];
// var bounds;
// var mapCircle = [];
//
// function initialize() {
// var mapOptions = {
// scrollwheel : false,
// maxZoom : 12,
// mapTypeId : google.maps.MapTypeId.ROADMAP
// };
//
// map = new google.maps.Map(document.getElementById("map-container"), mapOptions);
//
// infoWindow = new google.maps.InfoWindow({
// content : '',
// maxWidth : 260
// });
//
// geocoder = new google.maps.Geocoder();
// bounds = new google.maps.LatLngBounds();
// }
//
// //returns a marker after geocoding address
// function bindMarker(mapMarker) {
// var marker = new google.maps.Marker({
// map : map,
// position : mapMarker.address,
// clickable : true
// });
// bindInfoWindow(map, infoWindow, marker, $(mapMarker.elem).html());
// bindHtmlEvent(map, infoWindow, marker, mapMarker.elem);
// bounds.extend(marker.position);
// map.fitBounds(bounds);
// }
//
// function bindHtmlEvent(map, infoWindow, marker, e) {
// $(e).bind("mouseover", function() {
// infoWindow.setContent($(e).html());
// infoWindow.open(map, marker);
// });
//
// $(e).bind("mouseout", function() {
// infoWindow.close(map, marker);
// });
// }
//
// function bindInfoWindow(map, infoWindow, marker, html) {
// google.maps.event.addListener(marker, 'mouseover', function() {
// infoWindow.setContent(html);
// infoWindow.open(map, marker);
// });
// google.maps.event.addListener(marker, 'mouseout', function() {
// infoWindow.close(map, marker);
// });
// }
//
// function bindCircleRadius(map, circle) {
// google.maps.event.addListener(map, 'zoom_changed', function() {
// google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
// //best combination zoom level 10 radius 500
// zoom = map.getZoom();
// zoomScale = 10 - zoom;
// if (zoomScale > 0) {
// //Zoom In
// radius = 500 * 2 * Math.abs(zoomScale);
// } else if (zoomScale < 0) {
// //Zoom Out
// radius = 500 * 0.5 * Math.abs(zoomScale);
// } else {
// radius = 500;
// }
// circle.setMap(null);
// circle.setRadius(radius);
// circle.setMap(map);
// });
// });
// }
//
// function bindCircle(mapCircle) {
// var circleOptions = {
// strokeColor : "#9d3d37",
// strokeOpacity : 0.9,
// strokeWeight : 2,
// fillColor : "#ff857b",
// fillOpacity : 0.9,
// map : map,
// center : mapCircle.center,
// radius : 500
// };
//
// circle = new google.maps.Circle(circleOptions);
// bindCircleRadius(map, circle);
// }
//
//
// $(document).ready(function() {
// initialize();
// $("#project-content>div>ul>li").each(function() {
// if ($(this).attr('data-address') !== '') {
// var address = $(this).attr('data-address').split(",");
// mapMarker.push({
// address : new google.maps.LatLng(address[0], address[1]),
// elem : this
// });
// }
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.388359, -121.971827)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.779886, -122.406882)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.796496, -122.278239)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.546435, -122.269978)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.531230, -122.334463)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.543397, -122.230533)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.801987, -122.271152)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.7608, -122.4372)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.763127, -122.458593)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.67113, -121.777164)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.623447, -122.411283)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.021183, -121.562762)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.793138, -122.400421)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.753876, -122.418675)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.38024, -122.073472)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.130478, -121.654489)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.2900, -121.9931)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.3930, -121.9235)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.5663, -122.3245)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.3859, -121.9278)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.4115, -122.0936)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.3541, -121.9552)
// });
//
// mapCircle.push({
// center : new google.maps.LatLng(37.3397, -121.8430)
// });
//
// $.each(mapMarker, function(index, value) {
// bindMarker(value);
// });
//
// $.each(mapCircle, function(index, value) {
// bindCircle(value);
// });
// });
