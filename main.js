// script.js
document.getElementById('date-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the start and end dates
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    
    // Calculate the difference in milliseconds
    const diffTime = endDate - startDate;
    
    if (diffTime < 0) {
        document.getElementById('result').textContent = 'End date must be after start date.';
        return;
    }
    
    // Calculate the difference in days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Display the result
    document.getElementById('result').textContent = `Duration: ${diffDays} days`;
});
