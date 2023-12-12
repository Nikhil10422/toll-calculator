

  function calculateToll() {
    // Get values from the form
    const vehicleType = document.getElementById("vehicleType").value;
    const distance = parseFloat(document.getElementById("distance").value);

    // Define toll rates based on vehicle type
    const tollRates = {
      car: 0.05,
      truck: 0.1,
      motorcycle: 0.02,
    };

    // Calculate toll fee
    const tollFee = tollRates[vehicleType] * distance;

    // Display the result
    document.getElementById("result").innerHTML = `
      <h3>Toll Calculation Result:</h3>
      <p>Vehicle Type: ${vehicleType}</p>
      <p>Distance: ${distance} miles</p>
      <p>Toll Fee: ₹${(tollFee *75.5).toFixed (2)}</p>
    `;
  }
