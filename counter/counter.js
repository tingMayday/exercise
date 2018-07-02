$().ready(function () {

	var number = $('.keys .row .number'),
		operator = $('.keys .row .char'),
		equal = $('.keys .row .equal'),
		char = '',
		num = '',
		num2 = '';
	number.click(function(){
		var value = $(this).val();
		if (char == '') {
			num = num + value;
			$('#show').val(num);
		}else{
			num2 = num2 +value;
			$('#show').val(num + char + num2);
		}
	})

	operator.click(function(){
		if (num == '') {
			num == 0;
			switch(char){
 				case "+":
					result = parseFloat(num) + parseFloat(num2);
 					break;
 				case "-":
 					result = parseFloat(num) - parseFloat(num2);
 					break;
 				case "×":
 					result = parseFloat(num) * parseFloat(num2);
 					break;
 				case  "÷":
 					result = parseFloat(num) / parseFloat(num2);
 					break;
 			}
 			num = result;
			num2 = '';
			$('#show').val(num + char);
		}
		if (num2) {
			switch(char){
 				case "+":
					result = parseFloat(num) + parseFloat(num2);
 					break;
 				case "-":
 					result = parseFloat(num) - parseFloat(num2);
 					break;
 				case "×":
 					result = parseFloat(num) * parseFloat(num2);
 					break;
 				case  "÷":
 					result = parseFloat(num) / parseFloat(num2);
 					break;
 			}
			num = result;
			num2 = '';
			$('#show').val(num + char);
		}
		char = $(this).val();
		$('#show').val(num + char);
	})

	equal.click(function(){
		switch(char){
			case "+":
			result = parseFloat(num) + parseFloat(num2);
				break;
			case "-":
				result = parseFloat(num) - parseFloat(num2);
				break;
			case "×":
				result = parseFloat(num) * parseFloat(num2);
				break;
			case  "÷":
				result = parseFloat(num) / parseFloat(num2);
				break;
		}
		$('#show').val(result);
	})

	$('.clear').click(function(){
		num = num2 = char = '';
	 	$('#show').val(num);
	})
})  