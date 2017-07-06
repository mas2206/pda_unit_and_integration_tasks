var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('can add', function(){
    calculator.previousTotal = 4
    calculator.add(3)
    assert.equal(7, calculator.runningTotal)
  })

  it('can subtract', function(){
    calculator.previousTotal = 8
    calculator.subtract(5)
    assert.equal(3, calculator.runningTotal)
  })

  it('can multiply', function(){
    calculator.previousTotal = 5
    calculator.multiply(4)
    assert.equal(20, calculator.runningTotal)
  })

  it('can divide', function(){
    calculator.previousTotal = 8
    calculator.divide(4)
    assert.equal(2, calculator.runningTotal)
  })

  it('can divide when the result will be a decimal', function(){
    calculator.previousTotal = 10
    calculator.divide(4)
    assert.equal(2.5, calculator.runningTotal)
  })

  it('can add using numberClick and operatorClick', function(){
    calculator.numberClick(9)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(14, calculator.runningTotal)
  })

  it('can subtract using numberClick and operatorClick', function(){
    calculator.numberClick(9)
    calculator.operatorClick('-')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(4, calculator.runningTotal)
  })

  it('can multiply using numberClick and operatorClick', function(){
    calculator.numberClick(9)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(45, calculator.runningTotal)
  })

  it('can divide using numberClick and operatorClick', function(){
    calculator.numberClick(9)
    calculator.operatorClick('/')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(3, calculator.runningTotal)
  })

  it('can divide using numberClick and operatorClick when the result will be a decimal', function(){
    calculator.numberClick(9)
    calculator.operatorClick('/')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(1.8, calculator.runningTotal)
  })

  it('can use numberClick to input 2 or more digit numbers', function(){
    calculator.numberClick(5)
    calculator.numberClick(0)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.numberClick(2)
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(272, calculator.runningTotal)
  })

  it('can clear the result back to zero using clearClick', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal)
  })

});