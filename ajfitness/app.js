let cur = document.querySelector("#cursor");
let curin = document.querySelector("#cursor-out");
let mainin = document.querySelector("#main")

document.addEventListener('DOMContentLoaded', () => {
  const row = document.querySelector('#page7 .row');
  const items = row.innerHTML;

  // Clone content and append to the row
  row.innerHTML += items;
});

mainin.addEventListener("mousemove",function(dets){
   cur.style.top = dets.y-5 + "px";
   cur.style.left = dets.x-5 + "px";
   curin.style.top = dets.y -25 + "px";
   curin.style.left = dets.x- 25 + "px";

})


//********************************maps***************** */
mapboxgl.accessToken = 'pk.eyJ1IjoicHByYXNhZCIsImEiOiJjbHZ0eHh0aDUwaHBqMmltam11a2R0bnA2In0.VLGHXl9M36iKAZUNVx7AXg';

      function initializeMaps(){
        var mapConfigs = [
          { container: 'map1', center: [73.711827, 20.005474], zoom: 8 },
          { container: 'map2', center: [73.711827, 20.005474], zoom: 8 },
          { container: 'map3', center: [73.711827, 20.005474], zoom: 8 },
          { container: 'map4', center: [73.711827, 20.005474], zoom: 8 }
        ];

        mapConfigs.forEach(config => {
          var map = new mapboxgl.Map({
            container: config.container,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: config.center,
            zoom: config.zoom
          });

          // Create a custom marker element with professional animations
          var markerElement = document.createElement('div');
          markerElement.className = 'custom-marker';
          var markerText = document.createElement('span');
          markerText.textContent = 'A J Fitness';
          markerElement.appendChild(markerText);

          // Add the marker to the map
          new mapboxgl.Marker(markerElement)
            .setLngLat(config.center)
            .addTo(map);
        });
      }