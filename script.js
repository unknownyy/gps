mapboxgl.accessToken = 'pk.eyJ1IjoidW5rbm93bnl5IiwiYSI6ImNra3QzNjV0NzFjeDkydXMxa2IyOGtrN2QifQ.Pwl8zBbivetf2tKMH-vllQ';

function getLocation(){

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
	  // do something
    var map = new mapboxgl.Map({
            style: 'mapbox://styles/mapbox/light-v10',
            center: [longitude, latitude],
            zoom: 15.5,
            pitch: 45,
            bearing: -17.6,
            container: 'map',
            antialias: true
});

var marker = new mapboxgl.Marker({
            color: "#FF0000",
            draggable: true
}).setLngLat([longitude, latitude])
.addTo(map);
    }

    function error(e) {
        console.log(e.message)
    }

    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert('Geolocation is not supported by your browser');
    }
}
