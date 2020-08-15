/*
alert("Hello World!");

var inputElement = document.getElementsByTagName("input")[0];

inputElement.onclick = function(){
    var formElement = document.forms[0];
    alert(formElement);
}*/

$(function() {
    $('input[name="datetimes"]').daterangepicker({
      timePicker: true,
      startDate: moment().startOf('hour'),
      endDate: moment().startOf('hour').add(32, 'hour'),
      locale: {
        format: 'M/DD hh:mm A'
      }
    });
  });