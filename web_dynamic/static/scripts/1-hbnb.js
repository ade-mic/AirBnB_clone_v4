/* --global $ */
$(document).ready(function() {
    let amenities = {};

    $('input[type="checkbox"]').change(() => {
        let amenityId = $(this).data('id');
        let amenityName = $(this).data('name');
        if ($(this).is(':checked')) {
            amenities[amenityId] = amenityName;
        } else {
            delete amenities[amenityId]
        }
        let amenitiesList = Object.values(amenities).join(',');
        $('div.amenities h4').text(amenitiesList)
    });
});