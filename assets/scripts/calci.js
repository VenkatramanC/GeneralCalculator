(function() {


  var calculator = {
   init: function() {
    $('#calculator .input').click(function(){

      if(this.dataset.keyType == "digit" ){
        calculator.handleInput(this.dataset.digit);
      } else if(this.dataset.keyType == "operator"){
       calculator.handleOperator(this.dataset.operator);
      } else if(this.dataset.keyType == "delete"){
        calculator.handleDelete();	 
      } else if(this.dataset.keyType == "equals"){
      calculator.evalualteResult();
      }
    });

    $('#calculator .delete').dblclick(function() {
      calculator.clearResult();
      calculator.clearPreview();
    });


    ['0','1','2','3','4','5','6','7','8','9'].forEach(function(digit){
     $(document).bind('keyup' , 'digit' ,function(){
      calculator.handleInput(digit);
    });
   });

    ['/','*','+','-'].forEach(function(digit){
     $(document).bind('keyup' , 'digit',function(){
      calculator.handleOperator(digit);
    });
   });

    $(document).bind ('keyup', '.' ,function() {      	
      lastNumber = calculator.getLastNumber();
      if (lastNumber.indexOf('.') == -1)	{
        if(lastNumber.length == 0){
          calculator.handleInput(0);
        }
        calculator.handleInput('.');
      } 
    });

    $(document).bind ('keyup', 'backspace' ,function() {
      calculator.handleDelete();	 
    });

    $(document).bind ('keyup', 'shift+=' ,function() {
      calculator.handleOperator('+');	 
    });

    ['=','return'].forEach(function(key){
      $(document).bind ('keyup', 'key' ,function() {
        calculator.evalualteResult();	 
      });
    });
  },

  handleInput: function(input) {
    $('#preview').html($("#preview").html() + input);
  },
  handleOperator: function(operator){
   // if ($('#preview').html().length == 0){
      if (operator == '-') {
        if(calculator.checkLastCharIsOperator()) {
            return;
        }
        else {
          calculator.handleInput('-');  
        }
       //calculator.handleInput('-');
      }
     else {
       if (calculator.checkLastCharIsOperator()) {
        calculator.handleDelete();
      }
       calculator.handleInput(operator);
    }
  },

  handleDelete: function() {
    $('#preview').html($("#preview").html().slice(0 , -1));
    if ($('#preview').html().length == 0) {
      calculator.clearResult(); 
    }
  },

evalualteResult: function(){
 if (calculator.checkLastCharIsOperator()){
  calculator.handleDelete();
}
$('#result').html(eval($('#preview').html()));
},

clearResult: function(){
 $('#result').html('');
},
clearPreview: function(){
 $('#preview').html('');
},

getLastNumber: function(){
 var str = $('#preview').html();
 var regexp = /[+\-*\/]([0-9.])*$/
 var matches = str.match(regexp);
 if (matches == null) {
  return str;
} else {
  return matches[0].slice(1);
}
},
getLastChar: function(){
 str = $('#preview').html();
 if (str.length == 0) {
  return str;
} else {
 return str[str.length - 1];
}
}, 	
checkLastCharIsOperator: function(){
  lastChar = calculator.getLastChar();
  return (['+','-','*','/'].indexOf(lastChar) != -1)
},	
checkOperatorIsMinus: function(){
return calculator.getLastChar() == "-"
}
};
$(document).ready(function(){
 calculator.init();
});


})();