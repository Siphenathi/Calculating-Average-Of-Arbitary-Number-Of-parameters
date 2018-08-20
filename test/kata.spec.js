describe("Calculator",function(){
	describe("Average", function () {

		describe("Given no argument",function(){
			it("Should return zero", function() {
				// arrange
				let calculator = new Calculator();

				// act
				let actual = calculator.Average();

				// assert
				const expected = 0;
				expect(actual).toBe(expected);
				});
		})

		describe("Given 1 argument",function(){
			it("Should return average of 1 number", function() {
				// arrange
				let calculator = new Calculator();
        
				// act
				let actual = calculator.Average(6);

				// assert
				const expected = 6;
				expect(actual).toBe(expected);
				});
		})

		describe("Given 2 argument",function(){
			it("Should return average of two numbers", function() {
				// arrange
				let calculator = new Calculator();
        
				// act
				let actual = calculator.Average(6,2);

				// assert
				const expected = 4;
				expect(actual).toBe(expected);
				});
		})

		describe("Given 4 argument",function(){
			it("Should return average of four numbers", function() {
				// arrange
				let calculator = new Calculator();
        
				// act
				let actual = calculator.Average(6,2,5,8);

				// assert
				const expected = 5.25;
				expect(actual).toBe(expected);
				});
		})


	});
})

