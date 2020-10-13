if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
    
                var mymap = L.map('map', {
                    center: [latitude, longitude],
                    zoom: 14
                });
    
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                    maxZoom: 25,
                    attribution: 'Datos del mapa de &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imágenes © <a href="https://www.mapbox.com/">Mapbox</a>', 
                    id: 'mapbox/streets-v11'
                }).addTo(mymap);
    
                L.Routing.control({
                    waypoints: [
                        L.latLng(latitude, longitude),
                        L.latLng(21.159576, -100.934144)
                    ],
                    autoRoute: true,   
                    language: 'es'
                }).addTo(mymap);

                const coords1 = [21.159576, -100.934144];
                const newMarker1 = L.marker(coords1);
                newMarker1.bindPopup('Tienda tecnocom!');
                mymap.addLayer(newMarker1);

                mymap.locate({enableHighAccuracy: true});
                mymap.on('locationfound', (e) => {
                      const lat = e.latlng.lat;
                      const lng = e.latlng.lng;
                      const coords = [lat, lng];
                      const newMarker = L.marker(coords);
                      newMarker.bindPopup('Esta es tu hubicacion !');
                      mymap.addLayer(newMarker);
                     });
            

            });
        }
        else{
            var mymap = L.map('mapa', {
                center: [21.157784, -100.933932],
                zoom: 14
            });
    
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 25,
                attribution: 'Datos del mapa de &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imágenes © <a href="https://www.mapbox.com/">Mapbox</a>', 
                id: 'mapbox/streets-v11'
            }).addTo(mymap);
        }
    


          
    


          