// === Show/Hide Logic ===
const mainDashboard = document.getElementById('main-dashboard');
const detailView = document.getElementById('detail-view');
let mapInitialized = false;

function showDetail() {
    mainDashboard.style.display = 'none';
    detailView.style.display = 'block';
}

function showDashboard() {
    mainDashboard.style.display = 'block';
    detailView.style.display = 'none';
    
    if (!mapInitialized) {
        initMap();
        mapInitialized = true;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    initMap();
    mapInitialized = true;
    
    // Call filterTable on load to ensure table is correctly displayed
    filterTable();
});
