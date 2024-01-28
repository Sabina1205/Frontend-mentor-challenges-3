async function trackIP() {
  let input = document.querySelector("input");
  let ipAddress = input.value;
  try {
    const apiKey = "at_pLsGUF4Ca8MDMrFWsEs0GIRxi7X1A";
    const response = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`
    );
    const data = await response.json();

    // Display information
    document.getElementById("ip").innerText = data.ip;
    document.getElementById(
      "location"
    ).innerText = `${data.location.city}, ${data.location.region}, ${data.location.country}`;
    document.getElementById("timezone").innerText = data.location.timezone;
    document.getElementById("isp").innerText = data.isp;

    // Update map
    const mapElement = document.getElementById("map");
    const map = L.map(mapElement).setView(
      [data.location.lat, data.location.lng],
      13
    );
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );
    const locationIcon = L.icon({
      iconUrl: "images/icon-location.svg",
      iconSize: [30, 35],
      iconAnchor: [15, 15],
    });
    L.marker([data.location.lat, data.location.lng], {
      icon: locationIcon,
    }).addTo(map);
  } catch (error) {
    console.error("Error fetching IP information:", error);
  }
}

window.onload = function () {
  const defaultIpAddress = "8.8.8.8";
  trackIP(defaultIpAddress);
};

let btn = document.querySelector(".svg-contain");

btn.addEventListener("click", trackIP);
