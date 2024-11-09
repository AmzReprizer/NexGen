function initMap() {
  const officeLocation = { lat: 23.821435, lng: 90.438719 };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: officeLocation,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  new google.maps.Marker({
    position: officeLocation,
    map: map,
    title: 'Office Location'
  });
}
