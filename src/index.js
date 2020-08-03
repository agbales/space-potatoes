const apiKey = config.API_KEY || process.env.API_KEY;

function renderPage(date) {
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("app").innerHTML = "";
      addDataToDom(data, date);
    })
    .catch((error) => console.log(error));

  function addDataToDom(dataObject, day) {
    const asteroids = dataObject.near_earth_objects;
    const arrayData = asteroids[day];

    arrayData.forEach((entry) => {
      const approachData = entry.close_approach_data[0];
      const averageDiameter =
        entry.estimated_diameter.meters.estimated_diameter_min +
        entry.estimated_diameter.meters.estimated_diameter_max / 2;

      const element = `<div>
        <h3>${entry.name}</h3>
        <p>Miss distance: ${approachData.miss_distance.lunar} earth-moon hwys away</p>
        <p>Diameter (maybe?): ${averageDiameter} meters</p>
        <p>Dangerous?: ${entry.is_potentially_hazardous_asteroid}</p>
      </div>`;
      document.getElementById("app").innerHTML += element;
    });
  }
}

function updateData() {
  const date = document.getElementById("date-input").value;
  renderPage(date);
}

document.getElementById("date-update").addEventListener("click", updateData);
