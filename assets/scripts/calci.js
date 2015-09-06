var calculator = {
	init: function() {
     $('#calculator .input').click(function(){
  	   if(this.dataset.keyType == "digit" ){
         calculator.handleInput(this.dataset.digit);
    }
       else if(this.dataset.keyType == "operator"){
  	     calculator.handleInput(this.dataset.operator);
  	}
       else if(this.dataset.keyType == "delete"){
         calculator.handleDelete();	 
    }
       else if(this.dataset.keyType == "equals"){
          calculator.evalualteResult();
    }
   });
      $('#calculator.delete').dbclick(function() {
  	   $('#preview').html('');
  	   $('#result').html('')
  });


     ['0','1','2','3','4','5','6','7','8','9'].forEach(function(digit){
     $(document).bind('keyup' , 'digit',function(){
       calculator.handleInput(digit);
     });
    }); 
    $(document).bind ('keyup', 'backspace' ,function() {
      calculator.handleDelete();	 
    });
    
	},
    handleInput: function(input) {
     $('#preview').html($("#preview").html() + input);
    },  
    handleDelete: function() {
	 $('#preview').html($("#preview").html().slice(0 , -1));
    },
    evalualteResult: function(){
      $('#result').html(eval($('#preview').html()));
    }
}
  $(document).ready(function(){
   calculator.init();
  });