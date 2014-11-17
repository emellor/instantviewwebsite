var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat:  51.5226037,
				lng: -0.0855063

                  
			  });
			  
			  var marker = map.addMarker({
			      lat: 51.5226037,
			      lng: -0.0855063,
	              title: 'Instantview Ltd, UK.'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat: 51.525831,
		        lng: -0.089141
		      });
		    });
		}        

    };
}();