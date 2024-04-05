var numArr = [];

function Submit() {
    // lấy gtri user nhập
    var num = document.querySelector('#number').value * 1;
    numArr.push(+num);

    console.log(numArr);
    document.querySelector('#result').innerHTML = `<p>Number numArr: ${numArr}</p>`;
    document.querySelector('#number').value = '';
}

// 1.Tổng các số dương trong mảng.
function sumPosInt() {
    var sum = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            sum += numArr[i];
        }
    }
    console.log('sum: ', sum);
    document.querySelector('#result1').innerHTML = `<p>Tổng các số dương trong mảng: ${sum}</p>`
}

// 2.Đếm có bao nhiêu số dương trong mảng.
function countPosInt() {
    var count = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            count++;
        }
    }
    console.log('count: ', count);
    document.querySelector('#result2').innerHTML = `<p>Số lượng các số dương trong mảng: ${count}</p>`
}

// 3.Tìm số nhỏ nhất trong mảng.
function findMin() {
    var min = numArr[0];
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] < min) {
            min = numArr[i]
        }
    }
    console.log('min: ', min);
    document.querySelector('#result3').innerHTML = `<p>Số nhỏ nhất trong mảng: ${min}</p>`
}

// 4.Tìm số dương nhỏ nhất trong mảng.
function findMinPos() {
    var minPositive = Infinity;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0 && numArr[i] < minPositive) {
            minPositive = numArr[i];
        }
    }
    console.log('minPositive: ', minPositive);
    document.querySelector('#result4').innerHTML = `<p>Số dương nhỏ nhất trong mảng: ${minPositive}</p>`
}

// 5.Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function findLastEven() {
    var lastEven = -1;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 === 0) {
            lastEven = numArr[i];
        }
    }

    console.log('lastEven: ', lastEven);
    document.querySelector('#result5').innerHTML = `<p>Số chẵn cuối cùng trong mảng: ${lastEven}</p>`
}

// 6.Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function swapIndex() {
    var pos1 = document.querySelector('#pos1').value * 1;
    var pos2 = document.querySelector('#pos2').value * 1;

    if (pos1 < 0 || pos1 >= numArr.length || pos2 < 0 || pos2 >= numArr.length) {
        document.querySelector('#result6').innerHTML = `<p>Vị trí không hợp lệ.</p>`
        return;
    }

    var temp = numArr[pos1];
    numArr[pos1] = numArr[pos2];
    numArr[pos2] = temp;

    document.querySelector('#result6').innerHTML = `<p>Mảng sau khi đổi: ${numArr}</p>`;
}

// 7.Sắp xếp mảng theo thứ tự tăng dần.
function sorting() {
    numArr.sort((a, b) => a - b);
    document.querySelector('#result7').innerHTML = `<p>Mảng sau khi sắp xếp: ${numArr}</p>`;
}

// 8.Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function firstPrime() {
    for (var i = 0; i < numArr.length; i++) {
        if (isPrime(numArr[i])) {
            document.querySelector('#result8').innerHTML = `<p>Số nguyên tố đầu tiên: ${numArr[i]}</p>`;
            return;
        }
    }
    document.querySelector('#result8').innerHTML = `<p>Số nguyên tố đầu tiên: -1</p>`;
}

// 9.Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
function countInt() {
    var count = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (Number.isInteger(numArr[i])) {
            count++;
        }
    }
    document.querySelector('#result9').innerHTML = `<p>Số lượng số nguyên: ${count}</p>`;
}

// 10.So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function compare() {
    var countPositive = 0;
    var countNegative = 0;

    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            countPositive++;
        } else if (numArr[i] < 0) {
            countNegative++;
        }
    }

    var comparisonResult;
    if (countPositive > countNegative) {
        comparisonResult = "Số dương > Số âm";
    } else if (countPositive < countNegative) {
        comparisonResult = "Số âm > số dương.";
    } else {
        comparisonResult = "Số dương = số âm.";
    }

    document.querySelector('#result10').innerHTML = `<p>${comparisonResult}</p>`;
}
