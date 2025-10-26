// Bitwise Operators
// Performs logical operations on bit level

let number1 = 10
let number2 = 2

// Bitwise AND
console.log(number1 & number2)
// 1 0 1 0 - Binary of 10
// 0 0 1 0 - Binary of 2
// AND (0&0=0, 1&1=1, 1&0=0, 0&1=0)
// 0 0 1 0 - By AND operation, we got 2
// So, it returns 2

// Bitwise OR
console.log(number1 | number2)
// 1 0 1 0 - Binary of 10
// 0 0 1 0 - Binary of 2
// OR (0|0=0, 1|1=1, 1|0=1, 0|1=1)
// 1 0 1 0 - By OR operation, we got 10
// So, it returns 10

// Bitwise NOT
console.log(~number1)
// ~x = -(x + 1)
// In this case, ~10 = -(10 + 1) = -11
// So, it returns -11

// Bitwise XOR (Exclusive OR)
console.log(number1 ^ number2)
// 1 0 1 0 - Binary of 10
// 0 0 1 0 - Binary of 2
// XOR (0^0=0, 1^1=0, 1^0=1, 0^1=1)
// 1 0 0 0 - By XOR operation, we got 8
// So, it returns 8

// Bitwise left shift operator
console.log(178 << 3)
// Logic: 178 x 2^3 = 1424
console.log(-178 << 3)
// Same logic, but the answer will include the -ve sign, -1424

// Bitwise right shift operator
console.log(178 >> 3)
// Logic: 178 / 2^3 = 22 (If there is any decimal part, discard it)
console.log(-178 >> 3)
// Same logic, but decimal part isn't discarded, it's round-downed
// In this case, we get 22.25, and it's round-downed to 23, with -ve sign, -23

// Bitwise unsigned right shift operator
console.log(178 >>> 3)
// Logic: It's the same as 178 >> 3, so it'll return 22
console.log(-178 >>> 3)
// Logic: ( 178 + (2^32) ) / 2^3 = 536870889 (If there is any decimal part, discard it)
// The -ve sign is also discarded because it's the unsigned operator