const apiUrl = "https://o5e3ja2hzh.execute-api.us-east-1.amazonaws.com/visits";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    document.getElementById("visitor-count").textContent = data.visits;
  })
  .catch(error => {
    console.error("Visitor counter error:", error);
    document.getElementById("visitor-count").textContent = "Unavailable";
  });