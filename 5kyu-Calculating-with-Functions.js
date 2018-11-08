//
Calculating with Functions
5kyu

by BattleRattle

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

JavaScript:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Ruby:

seven(times(five)) # must return 35
four(plus(nine)) # must return 13
eight(minus(three)) # must return 5
six(divided_by(two)) # must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...

//


var array = [];
var oper = '';
var result;

function zero() {
if (array.length == 2){array = [];}
array.push(0)
if (array.length == 2){
calc(oper);
return result;}
}

function one() {
if (array.length == 2){array = [];}
array.push(1)
if (array.length == 2){
calc(oper);
return result;}
}

function two() {
if (array.length == 2){array = [];}
array.push(2)
if (array.length == 2){
calc(oper);
return result;}
}

function three() {
if (array.length == 2){array = [];}
array.push(3)
if (array.length == 2){
calc(oper);
return result;}
}

function four() {
if (array.length == 2){array = [];}
array.push(4)
if (array.length == 2){
calc(oper);
return result;}
}

function five() {
if (array.length == 2){array = [];}
array.push(5)
if (array.length == 2){
calc(oper);
return result;}
}

function six() {
if (array.length == 2){array = [];}
array.push(6)
if (array.length == 2){
calc(oper);
return result;}
}

function seven() {
if (array.length == 2){array = [];}
array.push(7)
if (array.length == 2){
calc(oper);
return result;}
}

function eight() {
if (array.length == 2){array = []}
array.push(8)
if (array.length == 2){
calc(oper);
return result;}
}

function nine() {
if (array.length == 2){array = [];}
array.push(9)
if (array.length == 2){
calc(oper);
return result;}
}

function plus() {
oper = 'plus';
}
function minus() {
oper = 'minus';
}
function times() {
oper = 'times';
}
function dividedBy() {
oper = 'dividedBy';
}

function calc(o) {
if (o == 'plus'){
result = array[0]+array[1];
}
if (o == 'minus'){
result = array[1]-array[0];
}
if (o == 'times'){
result = array[0] * array[1];
}
if (o == 'dividedBy'){
result = Math.floor(array[1]/array[0]);
}}
