module.exports={
	number:{
		toString:function(number,format){
			if(!number)
				return '';
			if(!format)
				format = 'paisa';
			var p =0;
			switch(format){
				case 'rupee':
					p=0;
					break;
				case 'paisa':
					p=2;
					break;
				case 'short':
					p=1;
					break;
				case 'long':
					p=1;
					break;
			};
			// console.log('-----****-----')
			// console.log(format);
			// console.log(p);
			// console.log('-----****-----')
			var str = '';

			if(format=='rupee'||format=='paisa'){
				var fraction = number.toFixed(p).split('.')[1];
				if(number<10000){
					// console.log('test');
					str = number.toFixed(p);
				}else if(number < 100000){
					// console.log('test2');
					var i = number.toFixed(0);
					str = i.substr(0,i.length-3)+','+i.substr(i.length-3)
					if(format!=='rupee')
						str+='.'+fraction;
				}else if(number < 10000000){
					// console.log('test3');
					var i = number.toFixed(0);
					str = i.substr(0,i.length-5)+','+i.substr(i.length-5,2)+','+i.substr(i.length-3)
					if(format!=='rupee')
						str+='.'+fraction;
				}else{
					var i = number.toFixed(0);
					str = i.substr(0,i.length-7)+','+i.substr(i.length-7,2)+','+i.substr(i.length-5,2)+','+i.substr(i.length-3)
					if(format!=='rupee')
						str+='.'+fraction;
				}
			}else{
				
				if(number<1000){
					// console.log('--------');
					// console.log(number);
					str = number.toFixed(p).split('.')[0];
					if(number.toFixed(p).split('.')[1]!='0')
						str=+'.'+number.toFixed(p).split('.')[1]
					// console.log(str);
				}else if(number < 100000){
					number=number/1000;
					str = number.toFixed(p).split('.')[0];
					
					if(number.toFixed(p).split('.')[1]!='0')
						str=str+'.'+number.toFixed(p).split('.')[1]
					if(format=='short')
						str+='k';
					else
						str+=' Thousand';
				}else if(number < 10000000){
					number=number/100000;
					str = number.toFixed(p).split('.')[0];
					if(number.toFixed(p).split('.')[1]!='0')
						str=str+'.'+number.toFixed(p).split('.')[1]
					
					if(format=='short')
						str+='l';
					else
						str+=' Lakh';
				}else{
					number=number/10000000;
					str = number.toFixed(p).split('.')[0];
					if(number.toFixed(p).split('.')[1]!='0')
						str=str+'.'+number.toFixed(p).split('.')[1]
					
					if(format=='short')
						str+='cr';
					else
						str+=' Crore';
				}
			}
			return str
		},
		extractFromString:function(str){
			return 100;
		}
	}
}