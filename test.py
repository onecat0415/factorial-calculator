def calculate_factorial(num):
    factorial = 1
    while num>1:
        factorial=factorial*num     
        num=num-1
    print("阶乘为",factorial)
while True:
    num_1=int(input("请输入一个数字（输入 0 结束）："))
    if num_1==0:
        print("程序已结束")
        break
    else:
        calculate_factorial(num_1)
