$(document).ready(function(){
  getMeetups();
});

function getMeetups() {
  var api_key = "593685c2e217f56931c585e5369";
  var group_id = "13779792";

  $.ajax({
    url:          'https://api.meetup.com/2/events?key='+api_key+'&sign=true&group_id=' + group_id,
    crossDomain:  true,
    dataType:     'jsonp',
    type:         "GET",
    success:      function dataSuccess(data) {
                    parseMeetupData(data.results);
                  },
    error:        function(data) {
                    console.log("Error", data);
                  }
  });
}

function parseMeetupData(classes) {
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  if (classes.length == 0){
    $('.events').html("<p><em>No meetups scheduled. Check back again soon!</em></p>");

  } else {
    var html = '<div class = "month odd">';
    var max = classes.length > 10 ? 10 : classes.length;
    var month = -1;

    for (var i=0; i < max; i++) {
      var meetup_date =  new Date(classes[i].time);
      var event_month = meetup_date.getMonth();

      if (event_month != month){
        if (i > 0){
          var odd = "";
          if (i % 2 != 0) {odd = "odd";}
          html  += '</div><div class="month ' + odd + '">';
        }
        html += '<h3 class="month__name">'+months[event_month]+'</h3>';
        month = event_month;
      }

      html += '<div class="event" id = "event--'+i+'">'
              + '<a class="event__rsvp" target="_blank" href="' + classes[i].event_url + '">RSVP</a>'
              + '<div class = "event__info">'
                + '<a class="event__name" target="_blank" href="' + classes[i].event_url + '">'
                  + classes[i].name + '</a>'
                + '<div class="event__date"><span>' + meetup_date.toLocaleDateString() + '</span> @ ' + classes[i].venue.name + '</div>'
              + '</div>'
            + '</div>';
    }

    html += '</div>';
    $('.events').html(html);
  }
}
