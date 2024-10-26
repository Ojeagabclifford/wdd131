

function calculateWindChill(temp, windSpeed) {
    // Formula for calculating windchill in Fahrenheit
    if (temp <= 70 && windSpeed > 2) {
        return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
    } else {
        
        return 'N/A';
        
    }
}

law = 1+2



console.log(calculateWindChill(3,4)
)






function displayWindChill() {
    const temp = 50; 
    const windSpeed = 5; 
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById('wind-chill').textContent = windChill.toFixed(4);
}

const currentDate = new Date(); 

const current_time = currentDate.toLocaleDateString("en-US", {
    year: "numeric", 
    month: "short", 
    day: "numeric", 
    hour: "numeric", 
    minute:"numeric", 
    hour12: true
}) 
function updateFooter(){
document.getElementById("currentyear").innerHTML = "Last Modification:"+current_time;}


document.addEventListener("DOMContentLoaded", function() {
    displayWindChill();
    updateFooter();
});


