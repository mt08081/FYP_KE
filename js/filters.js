// ===================================
// === Filter Table Logic ===
// ===================================
function filterTable() {
    // Get filter values
    const regionFilter = document.getElementById('filter-region').value;
    const riskFilter = document.getElementById('filter-risk').value;
    const searchFilter = document.getElementById('filter-search').value.toLowerCase();
    
    // Get table body and rows
    const tableBody = document.getElementById('transformer-table-body');
    const rows = tableBody.getElementsByTagName('tr');

    // Loop through all table rows
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        
        // Get row data
        const region = row.getAttribute('data-region');
        const risk = row.getAttribute('data-risk');
        const text = row.textContent || row.innerText;

        // Check for matches
        const regionMatch = (regionFilter === 'all' || region === regionFilter);
        const riskMatch = (riskFilter === 'all' || risk === riskFilter);
        const searchMatch = (text.toLowerCase().indexOf(searchFilter) > -1);

        // Show or hide the row
        if (regionMatch && riskMatch && searchMatch) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}
