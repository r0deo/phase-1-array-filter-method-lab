// findMatching function
function findMatching(drivers, query) {
    return drivers.filter(driver =>
      driver.toLowerCase() === query.toLowerCase()
    );
  }
  
  // fuzzyMatch function
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(letters.toLowerCase())
    );
  }
  
  // matchName function
  function matchName(driverObjects, name) {
    return driverObjects.filter(driver =>
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Example usage
  const driversArray = ["John", "Jane", "James", "Alice"];
  const driverObjectsArray = [
    { name: "John", hometown: "New York" },
    { name: "Jane", hometown: "Los Angeles" },
    { name: "James", hometown: "Chicago" },
    { name: "Alice", hometown: "San Francisco" }
  ];
  
  console.log(findMatching(driversArray, "Jane")); // Output: ["Jane"]
  console.log(fuzzyMatch(driversArray, "ja")); // Output: ["Jane", "James"]
  console.log(matchName(driverObjectsArray, "Jane")); // Output: [{ name: "Jane", hometown: "Los Angeles" }]
  