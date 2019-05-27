/**
* 
* Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
* 
* Example
* 
* For inputArray = [3, 6, -2, -5, 7, 3], the output should be
* adjacentElementsProduct(inputArray) = 21.
* 
* 7 and 3 produce the largest product.
* 
* Input/Output
* 
* [execution time limit] 4 seconds (js)
* 
* [input] array.integer inputArray
* 
* An array of integers containing at least two elements.
* 
* Guaranteed constraints:
* 2 ≤ inputArray.length ≤ 10,
* -1000 ≤ inputArray[i] ≤ 1000.
* 
* [output] integer
* 
* The largest product of adjacent elements.
*/

const adjacentElementsProduct = (inputArray) => {
    let largestProduct = Number.MIN_SAFE_INTEGER;
    inputArray.map((item, idx) => {
        if (idx  < inputArray.length - 1) {
            const curr = item * inputArray[idx + 1];
            if (curr > largestProduct) {
                largestProduct = curr;
            } 
        }
    })
    return largestProduct;
}
