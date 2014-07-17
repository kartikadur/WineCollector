/**
 * @author zeroshiiro
 */

(function(document, window, undefined) {
	var $collection = $("#collection");
	// console.log($collection);

	$.ajax({
		type : "GET",
		url : "xml/WineSchema.xml",
		dataType : "xml",
		success : function(data) {
			$(data).find('bottle').each(function(index) {
				var listItem = "<li class='list-group-item bottle clearfix'"
						+ "data-lat='" + $(this).find("producer").find("geocode").find("latitude").text() + "'"
						+ "data-lon='" + $(this).find("producer").find("geocode").find("longitude").text() + "'"
						+ ">"
						+ "<span class='color " 
						+ $(this).find("wine").find("color").text().toLowerCase().replace(" ","-")
						+ "'></span>"
						+ $(this).find("wine").find("variety").text()
						+ " - "
						+ $(this).find("producer").find("vineyard").text()
						+ "<span class='badge' style='float:right;'>" + $(this).find("wine").find("alcoholbyvolume").text() + "%</span>"
						+ "<span class='badge' style='float:right;'>" + $(this).find("vintage").text() + "</span>"
						+ "</li>";
				$(listItem).appendTo($collection);
							  
			});
		},
		error : function(response, textStatus, errorThrown) {
			console.log(textStatus, errorThrown);
		}
	});
})(document, window);
