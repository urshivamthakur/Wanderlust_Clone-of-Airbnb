mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 10, // starting zoom
});

// Custom Marker(location icon) for element......
const el = document.createElement("div");
el.innerHTML = '<i class="fa-solid fa-house" id="Marker"></i>';

const marker = new mapboxgl.Marker({ element: el })
  .setLngLat(listing.geometry.coordinates) //Listing.geomatry.coordinate
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact loacation will be provided after booking</p>`
    )
  )
  .addTo(map);
