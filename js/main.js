
function sixToast(num){
    let Total = 6;
    if (num == 0){
        return 0;
    } else if (num > 0 && num < Total){
        return Total - num;
    } else if (num > Total){
        return num - Total
    }
    if (num === undefined){
        return 0
    }
}

console.log(sixToast(5))

//This was apparently the solution

function sixToast(num) {
    return Math.abs(num-6)
  }
