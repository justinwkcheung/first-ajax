$(document).ready(function () {

  $('button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'

    }).done(function(data) {
        console.log(data);
        $('section').append(data);
    });
  });


});
