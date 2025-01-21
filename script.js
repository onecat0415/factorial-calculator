function calculateFactorial() {
    const num = parseInt(document.getElementById('numberInput').value);
    if (isNaN(num) || num < 0) {
        document.getElementById('result').innerHTML = "请输入一个有效的正整数";
        document.getElementById('numberInput').value = '';  // 清空输入框
        return;
    }
    
    if (num === 0) {
        document.getElementById('result').innerHTML = "程序已结束";
        document.getElementById('numberInput').value = '';  // 清空输入框
        return;
    }
    
    let factorial = 1;
    let n = num;
    while (n > 1) {
        factorial = factorial * n;
        n = n - 1;
    }
    document.getElementById('result').innerHTML = `${num} 的阶乘为 ${factorial}`;
    document.getElementById('numberInput').value = '';  // 清空输入框
}