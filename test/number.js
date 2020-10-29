var assert = require('assert');
var expect = require('expect.js');

var india = require('../index.js');


console.log(typeof india.formatNumber);
console.log(typeof india.asdfasdf);

// console.log(india.formatNumber(10000.5,'indian','decimal1'));
// console.log(india.formatNumber(10500.5,'indian_thousand','decimal3'));
describe('india.number',function(){
	describe('basic health check',function(){
		it("when number is undefined, return ''",function(){
			var a={}
			expect(india.number.toString(a.b,"long")).to.be('');
		});
	})
	describe('.toString(number,"paisa")',function(){
		describe('handling decimals',function(){
			it('rouding up -  10000.436 -> 10,000.44',function(){
				expect(india.number.toString(10000.436)).to.be('10,000.44');
			});
			it('rouding down -  10000.433 -> 10,000.43',function(){
				expect(india.number.toString(10000.433)).to.be('10,000.43');
			});
		});
		describe('handling digits',function(){
			it('1 becomes 1.00',function(){
				expect(india.number.toString(1)).to.be('1.00');
			});
			it('10 becomes 10.00',function(){
				expect(india.number.toString(10)).to.be('10.00');
			});
			it('100 becomes 100.00',function(){
				expect(india.number.toString(100)).to.be('100.00');
			});
			it('5000 becomes 5000.00',function(){
				expect(india.number.toString(5000)).to.be('5000.00');
			});
			it('10000 becomes 10,000.00',function(){
				expect(india.number.toString(10000)).to.be('10,000.00');
			});
			it('100000 becomes 1,00,000.00',function(){
				expect(india.number.toString(100000)).to.be('1,00,000.00');
			});
			it('1000000 becomes 10,00,000.00',function(){
				expect(india.number.toString(1000000)).to.be('10,00,000.00');
			});
			it('10000000 becomes 1,00,00,000.00',function(){
				expect(india.number.toString(10000000)).to.be('1,00,00,000.00');
			});
			it('100000000 becomes 10,00,00,000.00',function(){
				expect(india.number.toString(100000000)).to.be('10,00,00,000.00');
			});
			it('1000000000 becomes 100,00,00,000.00',function(){
				expect(india.number.toString(1000000000)).to.be('100,00,00,000.00');
			});
		});
	})
	describe('.toString(number,"rupee")',function(){
		describe('handling decimals',function(){
			it('rouding up -  10000.436 -> 10,000.44',function(){
				expect(india.number.toString(10000.436,"rupee")).to.be('10,000');
			});
			it('rouding down -  10000.433 -> 10,000.43',function(){
				expect(india.number.toString(10000.433,"rupee")).to.be('10,000');
			});
		});
		describe('handling digits',function(){
			it('1 becomes 1.00',function(){
				expect(india.number.toString(1,"rupee")).to.be('1');
			});
			it('10 becomes 10.00',function(){
				expect(india.number.toString(10,"rupee")).to.be('10');
			});
			it('100 becomes 100.00',function(){
				expect(india.number.toString(100,"rupee")).to.be('100');
			});
			it('5000 becomes 5000.00',function(){
				expect(india.number.toString(5000,"rupee")).to.be('5000');
			});
			it('10000 becomes 10,000.00',function(){
				expect(india.number.toString(10000,"rupee")).to.be('10,000');
			});
			it('100000 becomes 1,00,000.00',function(){
				expect(india.number.toString(100000,"rupee")).to.be('1,00,000');
			});
			it('1000000 becomes 10,00,000.00',function(){
				expect(india.number.toString(1000000,"rupee")).to.be('10,00,000');
			});
			it('10000000 becomes 1,00,00,000.00',function(){
				expect(india.number.toString(10000000,"rupee")).to.be('1,00,00,000');
			});
			it('100000000 becomes 10,00,00,000.00',function(){
				expect(india.number.toString(100000000,"rupee")).to.be('10,00,00,000');
			});
			it('1000000000 becomes 100,00,00,000.00',function(){
				expect(india.number.toString(1000000000,"rupee")).to.be('100,00,00,000');
			});
		});
	});
	describe('.toString(number,"short")',function(){
		describe('handling decimals',function(){
			it('rouding up -  15110 -> 15.1k',function(){
				expect(india.number.toString(15110,"short")).to.be('15.1k');
			});
			it('rouding down -  15660 -> 15.7k',function(){
				expect(india.number.toString(15660,"short")).to.be('15.7k');
			});
		});
		describe('handling digits',function(){
			it('1 becomes 1',function(){
				expect(india.number.toString(1,"short")).to.be('1');
			});
			it('10 becomes 10',function(){
				expect(india.number.toString(10,"short")).to.be('10');
			});
			it('100 becomes 100',function(){
				expect(india.number.toString(100,"short")).to.be('100');
			});
			it('5000 becomes 5k',function(){
				expect(india.number.toString(5000,"short")).to.be('5k');
			});
			it('10000 becomes 10k',function(){
				expect(india.number.toString(10000,"short")).to.be('10k');
			});
			it('100000 becomes 1l',function(){
				expect(india.number.toString(100000,"short")).to.be('1l');
			});
			it('1000000 becomes 10l',function(){
				expect(india.number.toString(1000000,"short")).to.be('10l');
			});
			it('10000000 becomes 1cr',function(){
				expect(india.number.toString(10000000,"short")).to.be('1cr');
			});
			it('100000000 becomes 10cr',function(){
				expect(india.number.toString(100000000,"short")).to.be('10cr');
			});
			it('1000000000 becomes 100cr',function(){
				expect(india.number.toString(1000000000,"short")).to.be('100cr');
			});
		});
	});
	describe('.toString(number,"long")',function(){
		describe('handling decimals',function(){
			it('rouding up -  15110 -> 15.1 Thousand',function(){
				expect(india.number.toString(15110,"long")).to.be('15.1 Thousand');
			});
			it('rouding down -  15660 -> 15.7 Thousand',function(){
				expect(india.number.toString(15660,"long")).to.be('15.7 Thousand');
			});
		});
		describe('handling digits',function(){
			it('1 becomes 1',function(){
				expect(india.number.toString(1,"long")).to.be('1');
			});
			it('10 becomes 10',function(){
				expect(india.number.toString(10,"long")).to.be('10');
			});
			it('100 becomes 100',function(){
				expect(india.number.toString(100,"long")).to.be('100');
			});
			it('5000 becomes 5 Thousand',function(){
				expect(india.number.toString(5000,"long")).to.be('5 Thousand');
			});
			it('10000 becomes 10 Thousand',function(){
				expect(india.number.toString(10000,"long")).to.be('10 Thousand');
			});
			it('100000 becomes 1 Lakh',function(){
				expect(india.number.toString(100000,"long")).to.be('1 Lakh');
			});
			it('1000000 becomes 10 Lakh',function(){
				expect(india.number.toString(1000000,"long")).to.be('10 Lakh');
			});
			it('10000000 becomes 1 Crore',function(){
				expect(india.number.toString(10000000,"long")).to.be('1 Crore');
			});
			it('100000000 becomes 10 Crore',function(){
				expect(india.number.toString(100000000,"long")).to.be('10 Crore');
			});
			it('1000000000 becomes 100 Crore',function(){
				expect(india.number.toString(1000000000,"long")).to.be('100 Crore');
			});
		});
	});
})


