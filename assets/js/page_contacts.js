var ContactPage = function () {

    return {

    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,
				lat: 41.902820,
				lng: -88.035777
			  });

			  var marker = map.addMarker({
				lat: 41.902820,
				lng: -88.035777,
	            title: 'Chicago Pain and Wellness Institute'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : 41.902820,
		        lng : -88.035777
		      });
		    });
		}

    };
}();
