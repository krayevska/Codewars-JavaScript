/*
Find The Parity Outlier
6kyu

by obnounce

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers){
 return ((integers[0] % 2 === 0 && integers[1] % 2 === 0) || (integers[1] % 2 === 0 && integers[2] % 2 === 0) || (integers[0] % 2 === 0 && integers[2] % 2 === 0)) ? integers.filter(item => item % 2 !== 0)[0] : integers.filter(item => item % 2 === 0)[0];
}
