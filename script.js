mapboxgl.accessToken = 'pk.eyJ1IjoidW5rbm93bnl5IiwiYSI6ImNra3QzNjV0NzFjeDkydXMxa2IyOGtrN2QifQ.Pwl8zBbivetf2tKMH-vllQ';

function getLocation(){

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
	  // do something
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
