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

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        calculateFactorial();
    }
}

function showModule(moduleName) {
    // 隐藏所有模块
    document.getElementById('factorialModule').style.display = 'none';
    document.getElementById('birthdayModule').style.display = 'none';
    
    // 显示选中的模块
    document.getElementById(moduleName + 'Module').style.display = 'block';
    
    // 清空结果
    document.getElementById('result').innerHTML = '';
    document.getElementById('daysResult').innerHTML = '';
    
    // 清空输入
    document.getElementById('numberInput').value = '';
    document.getElementById('birthdayInput').value = '';
}

function calculateDays() {
    const birthdayInput = document.getElementById('birthdayInput').value;
    if (!birthdayInput) {
        document.getElementById('daysResult').innerHTML = "请选择出生日期";
        return;
    }

    const birthday = new Date(birthdayInput);
    const today = new Date();
    
    if (birthday > today) {
        document.getElementById('daysResult').innerHTML = "出生日期不能晚于今天";
        return;
    }

    const diffTime = Math.abs(today - birthday);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('daysResult').innerHTML = `从你出生到今天已经 ${diffDays} 天了`;
}

// 设置日期选择器的最大值为今天
document.getElementById('birthdayInput').max = new Date().toISOString().split('T')[0];

// 初始化显示阶乘计算器
window.onload = function() {
    showModule('factorial');
}