$(document).ready(function () {

  $('#step12 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text'

    }).done(function(data) {
        console.log('Successfully pulled some data');
        $('#step3456').append(data);
    }).fail(function() {
        console.log('Something has gone terribly wrong');
        $('#step3456').append('Sorry, bad link, will try harder next time!!')
    }).always(function(){
        console.log("Hey the request finished!");
    });
  });

  $('#step7 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET'
    }).done(function(data){
      $('#step7').append(data);
    });

  });


});
