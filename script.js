document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let temperature = document.getElementById('temperature').value;
    let conversionType = document.getElementById('conversion-type').value;
    let result;

    if (conversionType === 'CtoF') {
        result = (temperature * 9/5) + 32;
        result = `${temperature}°C is ${result.toFixed(2)}°F`;
    } else {
        result = (temperature - 32) * 5/9;
        result = `${temperature}°F is ${result.toFixed(2)}°C`;
    }

    document.getElementById('result').innerText = result;
});
