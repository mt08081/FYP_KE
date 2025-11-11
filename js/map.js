// === Map Logic ===
function initMap() {
    var container = L.DomUtil.get('map');
    if(container != null){
        container._leaflet_id = null;
    }

    var map = L.map('map').setView([24.8607, 67.0011], 11);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);
    
    // Define Icons
    var redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
    });
    var yellowIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
        iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
    });
    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
    });
    var blueIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
    });

    // Add Markers
    L.marker([24.9341, 67.0922], {icon: redIcon}) // T-2101 (Johar Chowrangi)
        .addTo(map)
        .bindPopup('<b>ID: T-2101</b><br>Status: Critical<br>Rec: REPLACE');

    L.marker([24.9138, 67.0322], {icon: redIcon}) // T-4091 (Nazimabad)
        .addTo(map)
        .bindPopup('<b>ID: T-4091</b><br>Status: Critical<br>Rec: Maintenance');

    L.marker([24.8118, 67.0327], {icon: yellowIcon}) // T-5500 (DHA Phase 2)
        .addTo(map)
        .bindPopup('<b>ID: T-5500</b><br>Status: Warning<br>Rec: Monitor');

    L.marker([24.9200, 67.1143], {icon: blueIcon}) // F-102 (Habib University)
        .addTo(map)
        .bindPopup('<b>ID: F-102</b><br>Status: Active Fault<br>Est. Recovery: ~45 mins');

    L.marker([24.7969, 67.0384], {icon: greenIcon}) // T-6000 (Boat Basin)
        .addTo(map)
        .bindPopup('<b>ID: T-6000</b><br>Status: Healthy');
    
    L.marker([24.8080, 67.0504], {icon: blueIcon}) // F-105 (DHA Phase 5)
        .addTo(map)
        .bindPopup('<b>ID: F-105</b><br>Status: Active Fault<br>Est. Recovery: ~2.5 hours');
}
