$(document).ready(function(){
  getPhotos();
});

function getPhotos() {
  var api_key = "593685c2e217f56931c585e5369";
  var group_id = "13779792";

  $.ajax({
    url:          'https://api.meetup.com/2/photos?key='+api_key+'&sign=true&fields=event&group_id=' + group_id,
    crossDomain:  true,
    dataType:     'jsonp',
    type:         "GET",
    success:      function dataSuccess(data) {
                    parsePhotoData(data.results);
                  },
    error:        function(data) {
                    console.log("Error", data);
                  }
  });
}

function parsePhotoData(photos) {
  console.log([photos, photos.length]);
  if (photos.length == 0){
    $('#photos').html("<p><em>No photos have been uploaded yet. Check back again soon!</em></p>");

  } else {
    // showPhoto(photos[0]);
    addPhoto(photos[0]);

    for (var i=1; i < photos.length; i++) {
      // setTimeout(showPhoto, 3000*i, photos[i]);
      addPhoto(photos[i]);
    }
  }
}

function addPhoto(photo) {
  var img = $('<img>');
  img.attr('src', photo.highres_link);
  $('#photo').append(img);
}

function showPhoto(photo) {
  var div = $('#photo');

  div.fadeOut('slow', function(){
    var $this = $(this);
    var caption = photo.caption+' ';

    if (photo.photo_album.event) {
      caption += photo.photo_album.event.name;
    }

    $this.find('img').attr('src', photo.highres_link);
    $this.find('caption').text(caption);
    $this.fadeIn();
  });
}
