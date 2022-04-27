function addNumber(data, target) {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] + data[j] === target) {
        return [i, j];
      }
    }
  }
}
/**
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
console.log({ addNumber: addNumber([3, 3, 8, 1], 9) });

function addTwoNumber(data1, data2) {
  let convertArray = (data) =>
    Number(data.reverse().toString().replaceAll(",", ""));
  let addNumbers = convertArray(data1) + convertArray(data2);
  return [...addNumbers.toString()]
    .reduce((a, b) => [...a, Number(b)], [])
    .reverse();
}

/**
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807. */
console.log({ addTwoNumber: addTwoNumber([2, 4, 3], [5, 6, 4]) });

function findMedianSortedArrays(data1, data2) {
  let mergedData = [...data1, ...data2].sort();
  let mergedArrayLength = mergedData.length;
  if (mergedArrayLength % 2 === 0) {
    return (
      (mergedData[mergedArrayLength / 2 - 1] +
        mergedData[mergedArrayLength / 2]) /
      2
    );
  }
  return mergedData[~~(mergedArrayLength / 2)];
}
/**
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */
console.log({ findMedianSortedArrays: findMedianSortedArrays([1, 3], [2]) });

function palindromeNumber(num) {
  let stringConvertedNum = num.toString();
  return stringConvertedNum.split("").reverse().join("") === stringConvertedNum;
}

console.log({ palindromeNumber: palindromeNumber(1312) });

/**
 * Input: x = 2.00000, n = -2
 * Output: 0.25000
 * Explanation: 2-2 = 1/22 = 1/4 = 0.25
 * @param {*} number
 * @param {*} range
 * @returns
 */
function power(number, range) {
  return number ** range;
}

console.log({ pow: power(2.0, 10) });

function longestPolindromicString(inputString) {
  let characterLengthAndPositions = (inputString) =>
    [...inputString].reduce((output, cur, index) => {
      if (!output[cur]) {
        output[cur] = {
          size: 1,
          positions: [index],
        };
      } else {
        output[cur].size++;
        output[cur].positions.push(index);
      }
      return output;
    }, {});

  let filterGreaterThanSizeData = (data) =>
    Object.keys(data).reduce((output, current) => {
      if (data[current].size > 1) {
        output[current] = data[current];
      }
      return output;
    }, {});

  let sliceByIndex = (i, j) => inputString.slice(i, j + 1);
  let getPalindromeStringsWithCount = (data) =>
    Object.values(data).reduce((output, current) => {
      let updatePalindromeObj = (i, j) => {
        let forwardSlice = sliceByIndex(i, j);
        let reverseSlice = forwardSlice.split("").reverse().join("");
        if (!output[forwardSlice]) {
          output[forwardSlice] = {
            size: 1,
          };
        }
        if (forwardSlice === reverseSlice) {
          output[forwardSlice].size++;
        }
      };

      if (current.positions.length === 2) {
        updatePalindromeObj(current.positions[0], current.positions[1]);
      } else {
        for (let i = 0; i < current.positions.length - 1; i++) {
          for (let j = i + 1; j < current.positions.length; j++) {
            updatePalindromeObj(current.positions[i], current.positions[j]);
          }
        }
      }
      return output;
    }, {});

  let allCharSizePositionsData = characterLengthAndPositions(inputString);
  let allMultiCharactersData = filterGreaterThanSizeData(
    allCharSizePositionsData
  );
  return getPalindromeStringsWithCount(allMultiCharactersData);
}
console.log({ longestPolindromicString: longestPolindromicString("babadbab") });

function searchInsertionPosition(data, target) {
  let getIndex = () => data.indexOf(target);
  let result = getIndex();
  if (result === -1) {
    data.push(target);
    return searchInsertionPosition(data, target);
  }
  return result;
}

console.log({
  searchInsertionPosition: searchInsertionPosition([1, 3, 4, 2, 4], 31),
});

let sum = (a) => (b) => b ? sum(a + b) : a;

console.log({ sum: sum(1)(2)(3)(4)() });

/**
 * longest-substring-without-repeating-character
 * Zigzag Conversion
 * Reverse Integer(Assume the environment does not allow you to store 64-bit integers (signed or unsigned).)
 * Regular Expression Matching
 */

/**
 * start polyfil here
 * expample for polyfil i.e create or duplicate prototype like function
 */
let nameData = {
  firstName: "Rakesh",
  lastName: "shetty",
};

let printName = function (hometown, city, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      hometown +
      " " +
      city +
      " " +
      country
  );
};

let printMyName = printName.bind(nameData, "Mandya", "Karnataka");
printMyName("India");

Function.prototype.mybind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName1 = printName.mybind(nameData, "Mandya");
printMyName1("Karnataka", "India");
/**
 * Ends polifill here
 */

/**
 * creating own debounicng start here
 */
let count = 0;
let getData = () => console.log(`Fetching call while typing/keyUp ${count++}`);

let debouncer = function (callback, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(context, args), 300);
  };
};

let betterFunction = debouncer(getData, 300);

/**
 * debouce end here with above final function betterFunction providing in onKeyUp
 */

/**
Throttling:
Baby: Mom give me a piece of chocolate cake
Mom: No you can get one, only after 1 hour
(baby wont get a piece of cake no matter how many times she asked, but only after each hour)

Debouncing:
Baby: Mom give me a piece of chocolate cake, . . .Mom give me a piece of chocolate cake ... mom give me ...
Mom: No, You will get a piece of cake only after 1 hour from LAST time you asked for one. 😃
 */
/**
 * Tortolling start
 * own simple tortolling
 */
let expensive = () => console.log("Expensive");

// window.addEventListener('resize', betterExperiance)

const throtole = (callback, delay) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      callback.apply(context, args);
      flag = false;
      setTimeout(() => (flag = true), delay);
    }
  };
};

const betterExperiance = throtole(expensive, 100);
/**
 * throtle ends here
 *
 */


function convertNestedObjIntoSingleObj() {
  let nestedObj = {
    name: "rakesh",
    address: {
      local: {
        city: "mandya",
        state: "karnataka",
      },
      office: {
        city: "kochi",
        state: "kerala",
      },
    },
  };
  let finalObj = {};
  let magic = (obj, parent) => {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        magic(obj[key], parent + "_" + key);
      } else {
        finalObj[parent + "_" + key] = obj[key];
      }
    }
  };
  magic(nestedObj, "user");
  return finalObj;
}

console.log({
  convertNestedObjIntoSingleObj: convertNestedObjIntoSingleObj(),
});
