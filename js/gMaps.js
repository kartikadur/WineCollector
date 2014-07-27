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
			zoom : 15
		};

		map = new google.maps.Map(document.getElementById("map-container"), mapOptions);

		infoWindow = new google.maps.InfoWindow();

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