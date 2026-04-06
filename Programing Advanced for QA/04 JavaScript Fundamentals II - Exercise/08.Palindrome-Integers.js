
function itIsPalindrome(arrayInput) {
   for (const num of arrayInput) {
        console.log(num == num.toString().split('').reverse().join(''))
   }
}

itIsPalindrome([123,323,421,121])

itIsPalindrome([32,2,232,1010])