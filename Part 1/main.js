/* 
    I/ Order of operation (Operator precedence): Độ ưu tiên của toán tử
        1. ( ... )
        2. * /
        3. We can use brackets to control which part of caculation gets

    II/ Weird behavior of math in Javascript
        In programming:
            2, 3, 4 = integers
            2.8, 2.9 = floating point numbers(floats)

            *   Computer have problem working with floats.
                    Ex: 
                        0.1 + 0.2 = 0.300000000004 (werid number)
                        20.95 + 7.99 = 28.9399999998999

            *   How do we avoid this problem?
                Best practice when calculating money = calculate in cents instead of dollars.
                    Ex: 
                        (2095 + 799) / 100 = 28.94 (converted to dollars)

        - Calcualating with floats are sometimes inaccurate.
        - When working with money 
            1. Do the calculation in cents
            2. Conver to dollars

    III/ How to round the number
        Ex:
            - Math.round() = NaN (Not a number)

    

*/

console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9 (nhân 3 2 lần = 9)
// Expected output: 36

console.log(3 ** 3); // 27 (3 * 3 *3)

let a;
let b;

console.log((a = b = 5));
// Expected output: 5

/*

*/