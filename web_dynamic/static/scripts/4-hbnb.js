$(document).ready(function() {
    $('button').click(function() {
      var amenities = {};
      $('input[type="checkbox"]:checked').each(function() {
        let amenityId = $(this).data('id');
        let amenityName = $(this).data('name');
        amenities[amenityId] = amenityName;
      });
  
      $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(amenities),
        success: function(data) {
            data.forEach(function(place) {
                let article = $('<article></article>');
                let content = `
                <div class="title">
                <h2>${place.name}</h2>
                <div class="price_by_night">${place.price_by_night}</div>
                </div>
                <div class="information">
                  <div class="max_guest">${place.max_guest} Guest(s)</div>
                  <div class="number_rooms">${place.number_rooms} Bedroom(s)</div>
                  <div class="number_bathrooms">${place.number_bathrooms} Bathroom(s)</div>
                </div>
                <div class="description">
                  ${place.description}
                </div>
              `;
              article.append(content);
              $('section.places').append(article);
               })
        }
      });
    });
  });
  