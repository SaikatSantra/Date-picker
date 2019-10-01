/*-- Date picker--*/
$(document).ready( function() {
  $(function() {
    $("#date").datepicker( { 
      minDate: +1,
      maxDate: '+2M',
      beforeShowDay: jQuery.datepicker.noWeekends, // weekend not show
     dateFormat: 'dd-mm-yy' //date format
      //,
// 	 onSelect: function(dateText, inst) { 
//        alert('selected date ' + dateText + ':' + inst) 
//        console.log(('.date').val());
//      }
      
      
    });
  });
});
