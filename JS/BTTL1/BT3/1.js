let number = -5
if (number > 0)
    console.log(number + ' là số dương')
else if (number < 0)
    console.log(number + ' là số âm')
else if (number == 0)
    console.log(number + ' là số 0')

let year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
    console.log(year + ' là năm nhuận');
else
    console.log(year + ' không phải là năm nhuận');

let a = 3, b = 4, c = 5;
if (a == b && a == c && b == c)
    console.log('Tam giác đều');
else if ((a == b) || (a == c) || (b == c))
    console.log('Tam giác cân');
else 
    console.log('Tam giác thường');

