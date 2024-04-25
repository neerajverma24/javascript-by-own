/*
// Blog - 71 (Leet Code Question) ==============================================================

// Question :  We have given an (m x n) integer matrix, if an element is 0, set its entire row and colomn to 0's...


function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const zeroRows = new Set();
    const zeroCols = new Set();

    // using nested for loop
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            };
        };
    };

    zeroRows.forEach(row => {
        for (let j = 0; j < n; j++) {
            matrix[row][j] = 0;
        };
    });

    zeroCols.forEach(col => {
        for (let i = 0; i < m; i++) {
            matrix[i][col] = 0;  // make sure the position of [i] , if we displace it
        };
    });
};


const matrix = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
];

setZeroes(matrix);

console.log(matrix)

// Output :
[1, 0, 3]
[0, 0, 0]
[7, 0, 9]

*/


/*
// Blog - 72 (Leet Code Question)=================================================================

// Question : Given integer array 'nums', return 'true' if there exists a triple of indices (i,j,k) such that i < j < k and num[i] < num[j] < num[k]. If no such indices exists return 'false'.

function iTriplet(nums) {
    let fMin = Number.MAX_SAFE_INTEGER;
    let secMin = Number.MAX_SAFE_INTEGER;

    for (let num of nums) {
        if (num <= fMin) {
            fMin = num;
        } else if (num <= secMin) {
            secMin = num;
        } else {
            return true;
        }
    }
    return false;
}

let num1 = [1, 2, 3, 4, 5];
console.log(iTriplet(num1));  // output : true

let num2 = [5, 4, 3, 2, 1]
console.log(iTriplet(num2));  // output : false

let num3 = [2, 1, 0, 4, 5, 6];
console.log(iTriplet(num3));  // output : true

let num4 = [5,4,3,1]
console.log(iTriplet(num4));  // output : false

*/

/*

// Blog - 73 (Leet Code Question)  =====================================================================================

// Question : Group Anagrams in JavaSript (Anagram is : eat ,tea  i.e made with similar words)

// Input : ["eat", "tea", "tan","ate","nat", "bat" , "tab"];

// Output : [ ["bat", "tab"], ["nat", "tan"], ["eat", "tea","ate"] ]

const groupAnagrams = (strs) => {
    const anagramMap = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, [])
        }
        anagramMap.get(sortedStr).push(str)
    }
    return Array.from(anagramMap.values());
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat", "tab"];

console.log(groupAnagrams(input));

*/