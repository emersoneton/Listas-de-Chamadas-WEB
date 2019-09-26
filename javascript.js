$(document).ready(function(){
    $(":button").click(function(){
        $("p").toggle();

    if (this.value=="V"){
      this.value = "F";
      $(this).css("background-color","red");
    }else if (this.value=="F"){
      this.value = "V";
      $(this).css("background-color","blue");
    }

  });
});


$(function() {
    $( "#calendario1" ).datepicker();
});

$(function() {
    $( "#calendario2" ).datepicker();
});
$(function() {
    $( "#calendario3" ).datepicker();
});
