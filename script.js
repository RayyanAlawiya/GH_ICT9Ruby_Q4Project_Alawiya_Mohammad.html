// Event listener for the millimeters input field
document.getElementById("millimetersInput").addEventListener("input", function() {
  // Retrieve the input value in millimeters
  var millimeters = parseFloat(this.value);

  // Convert millimeters to centimeters
  var centimeters = millimeters / 10;
  document.getElementById("centimetersOutput").value = centimeters;

  // Convert millimeters to meters
  var meters = millimeters / 1000;
  document.getElementById("metersOutput").value = meters;

  // Convert millimeters to kilometers
  var kilometers = millimeters / 1000000;
  document.getElementById("kilometersOutput").value = kilometers;
});
