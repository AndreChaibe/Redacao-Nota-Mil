document.addEventListener("DOMContentLoaded", () => {

  const map = L.map("map").setView([-1.890345, -55.116184], 17) 

  const googleHybrid = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}", {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
    attribution: "&copy; Google Maps",
  })

  googleHybrid.addTo(map)

  const marker = L.marker([-1.890345, -55.116184], {
    icon: L.divIcon({
      className: "custom-div-icon",
      html: `<div class="marker-icon-container"><i class="fa-solid fa-graduation-cap"></i></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    }),
  }).addTo(map)

  marker
    .bindPopup(`
    <div class="custom-popup">
      <strong>Redação Nota Mil</strong>
      Travessa Senador Fulgencio Simões, sn<br>
      Bairro Santa Terezinha, 68210-000<br>
      <a href="https://wa.me/559491059875" target="_blank">
        <i class="fa-brands fa-whatsapp"></i> Contato
      </a>
    </div>
  `)
    .openPopup()

  L.circle([-1.890345, -55.116184], {
    color: "#1462aa",
    fillColor: "#facc15",
    fillOpacity: 0.2,
    radius: 10,
  }).addTo(map)

  L.control
    .scale({
      imperial: false,
      position: "bottomright",
    })
    .addTo(map)

  window.addEventListener("resize", () => {
    map.invalidateSize()
  })
})
