function getWeather() {
  document.getElementById("grid").style.display = "inline-flex";
  var location = document.getElementById("placeName").value;
  let nameGrid = document.getElementById("name");
  nameGrid.innerHTML = location;
  var currentDate = new Date();
  var dates = [];

  for (var i = 0; i < 7; i++) {
    var nextDay = new Date();
    nextDay.setDate(currentDate.getDate() + i);
    dates.push(nextDay.toLocaleDateString());
  }
  let data = [
    {
      Condition: "Sunny",
      Temperature: "18°C",
      Humidity: "60%",
      WindSpeed: "3.6Km/h",
    },
    {
      Condition: "Mist",
      Temperature: "18°C",
      Humidity: "60%",
      WindSpeed: "3.6Km/h",
    },
    {
      Condition: "Partly cloudy",
      Temperature: "18°C",
      Humidity: "60%",
      WindSpeed: "3.6Km/h",
    },
    {
      Condition: "Sunny",
      Temperature: "18°C",
      Humidity: "60%",
      WindSpeed: "3.6Km/h",
    },
    {
      Condition: "Mist",
      Temperature: "18°C",
      Humidity: "60%",
      WindSpeed: "3.6Km/h",
    },
    {
      Condition: "Partly cloudy",
      Temperature: "18°C",
      Humidity: "60%",
      WindSpeed: "3.6Km/h",
    },
    {
      Condition: "Mist",
      Temperature: "18°C",
      Humidity: "60%",
      WindSpeed: "3.6Km/h",
    },
  ];
  let gridContainer;
  let grid = "";

  // Iterating through the data
  for (let i = 0; i < data.length; i++) {
    let mainGrid = document.getElementById("grid" + (i + 1));
    let p = document.createElement("p");
    p.innerHTML = dates[i];
    p.style.textAlign = "center";
    p.style.marginTop = "5px";
    mainGrid.prepend(p);
    let item = data[i];
    let keys = Object.keys(item);
    for (let j = 0; j < keys.length; j++) {
      grid = "";
      gridContainer = document.getElementById("grid" + (i + 1) + "" + (j + 2));
      grid += `<b>${keys[j]}</b>`;
      grid += `<div">${item[keys[j]]}</div>`;
      let url = "";
      if (j == 0 && item[keys[j]] == "Sunny") {
        url = "sunny.png";
      } else if (j == 0 && item[keys[j]] == "Mist") {
        url = "mist.png";
      } else if (j == 0 && item[keys[j]] == "Partly cloudy") {
        url = "partlyCloudy.png";
      }
      if (j == 0) {
        grid += `<br/><img src=${url} alt="${keys[j]}" width="50px" height="50px"/>`;
      }
      gridContainer.innerHTML = grid;
    }
  }
}
