// Take all numbers in this array that are lower that 7 and multiply them by 10 and place them in a new array

const newArr = [2, 5, 7, 9, 5, 6, 4, 2, 3]

function cp03(arr) {
  const filteredArr = arr.filter((num) => num < 7)
  const mappedArr = filteredArr.map((num) => num * 10)
  console.log(mappedArr)
}

cp03(newArr)
