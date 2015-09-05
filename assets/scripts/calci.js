$(document).ready(function(){
  $('#keys .key').click(function(){
  	var input = 
  	if(this.dataset.keytype == "digit" ){
    input = this.dataset.digit

  	}(this.dataset.keytype == "opeartor"){
  		input = this.dataset.operator;
  	}

    $('#preview').html($("#preview").html() + input);
  });

  $('#operators .operator').click(function(){
    $('#preview').html($("#preview").html() + this.dataset.digit);
  });
  
  $("#delete").click(function() {
    $('#preview').html($("#preview").html().slice(0 , -1));
  
 
  });
});