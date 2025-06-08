/*
1.Tạo biến: var 
- alert() -> hiển thị nhiều thông báo cùng lúc
- comment 1 dòng : //
- comment nhiều dòng: /* */
/*
2. 1 số hàm
- console.log() -> in ra màn hình console
- console.warn() -> cảnh báo
- prompt() -> nhập dữ liệu
- confirm() -> xác nhận
- set timeout (function() {
}, khoảng tgian) -> chạy code theo 1 khoảng tgian nào đó, chạy 1 lần
- set interval -> tương tự timeout, cái này sẽ chạy liên tục 
*/
/*
3. Toán tử
- toán tử số học: + - * /
+ **: lũy thừa
+ %: lấy dư
+ ++: tăng 1 giá trị số
+ --: giảm 1 giá trị số
--> nếu nó làm tiền tố là đứng trước biến
Việc 1: tăng/ giảm giá trị biến
Việc 2: trả về biến đó sau khi được cộng/ trừ
--> nếu là hậu tố đứng sau biến
Việc 1: 'biến copy = biến được gán với ++ hoặc --
Việc 2: +/- cho biến 
Việc 3: trả về biến copy
VD: var a = 6
var out = a++
console.log(out) -> ra kq là 6
console.log(a) -> ra kq của a là 7
- toán tử gán: gán biến bằng 1 giá trị nào đó
- toán tử so sánh
*/

/*Toán tử gán
Toán tử         Ví dụ           Tương đương
=               x = y            x = y
+=              x += y           x = x + y
-=              x -= y           x = x - y
*=              x *= y           x = x * y
/=              x /= y           x = x / y
%=              x %= y           x = x % y
**=             x **= y          x = x ** y
*/

/*Toán tử chuỗi
+: là nối chuỗi
*/

/*Toán tử so sánh -> trả về kiểu dữ liệu boolean
== : bằng
!=: khác
> : lớn hơn
< : nhỏ hơn
>= : lớn hơn hoặc bằng
<= : nhỏ hơn hoặc bằng
*/
var a = 1
var b = 2
if (a==b)
{
    console.log('Dieu kien dung')
}
else
{
    console.log('Dieu kien sai')
}
/*Boolean
- Boolean là 1 trong 2 giá trị: true hoặc false
*/
/*
0
false
undefined
null
NaN
'' - ""
-> convert sang boolean sẽ trả về false
*/
var a = 1
var b = 2
var issue = a > b
console.log(issue)
/*Toán tử logic
&& - and -> cả 2 vế phải đúng thì điều kiện mới đúng hoặc ngược lại
|| - or -> chỉ cần 2 vế đúng thì đk đúng 
! - not
*/

/*Kiểu dữ liệu
1. Dữ liệu nguyên thủy - Primitive Data
- Number 
- String
- Boolean
- Null
- Undefined
- Symbol (tính chất mới)
2. Dữ liệu phức tạp - Complex Data
- Array
- Object
- Function
*/
//number type
var a = 1
var b = 2
var c = 1.5
//string type
var name = 'Thao Vi' 

//boolean
var isLogin = true
console.log(typeof isLogin)
//undefined
var age
console.log(age)

//null
var address = null

//symbol
//var id = symbol('id') //unique - duy nhất

//function
var myf = function()
{
    alert('He loi')
}
myf()

//object type -> lưu trữ nhiều dạng dữ liệu
var user = {
    name: 'Thao Vi',
    age: 20,
    address: 'Hanoi',
}
console.log('myobject:', user)

var myarray = ['Java', 'php','ruby']
console.log(myarray)

/*Toán tử so sánh p2
=== -> so sánh cả giá trị và kiểu dữ liệu (còn == thì chỉ quan tâm giá trị của nó)
!== -> tương tự
*/

/*Câu lệnh điều kiện và phép so sánh

*/
var a = 1
var b = 2
var c = a<b && a>0 //-> trả về kết quả false nhưng chỉ trả cái vế sau cùng nếu những biến đó ko phải là những giá trị false (0, null,...)

/*Chuỗi
1. Tạo chuỗi
    - Các cách tạo chuỗi
    + tạo biến gán 1 chuỗi var a = 'vi' -> cách ni nhanh nhất
    + gán biến = new string ()
    - Nên dùng cách 1, ko dài dòng
    - Kiểm tra data type typeof 
2. 1 số case sử dụng backslash (\)
    - 2 dấu \\ in ra sẽ là 1 dấu \
3. Xem độ dài chuỗi: length
*/
var fullname = '\'vi\' ne'
console.log(fullname.length)
console.log(`toi la: ${fullname} ${fullname}`) //cách ni là nối chuỗi ko cần phải + các chuỗi lại

//Làm việc với chuỗi - 1 chuỗi đếm sẽ bắt đầu từ trái sang phải và bắt đầu từ 0
var mystring = 'Hoc JS tại JS JS F8!'
//1. length -> độ dài của chuỗi
console.log(mystring.length)
//2. indexOf() -> tìm kiếm vị trí của 1 kí tự (trả về vị trí đầu tiên mà nó tìm được nếu có nhiều kí tự giống nhau)
console.log(mystring.indexOf('JS', 6)) //in ra vị trí của JS bắt đầu chuỗi từ vị trí số 6
//3. lastIndexOf() -> tìm kiếm vị trí của 1 kí tự từ cuối
console.log(mystring.lastIndexOf('JS'))
// KO TÌM ĐƯỢC VỊ TRÍ SẼ TRẢ VỀ -1
//4. charAt() -> lấy 1 kí tự, truyền 1 số nào đó để nó lấy kí tự từ vị trí nào
//5. substring() -> lấy 1 phần của chuỗi
//6. slice(): Cắt chuỗi với bắt đầu từ vị trí nào và kết thúc ở vị trí nào thường sẽ cắt từ trái sang, nếu muốn cắt từ phải sang thì vị trí đếm là số âm
console.log(mystring.slice(4,6))
console.log(mystring.slice(-3,-1))
//6. split() -> tách chuỗi thành mảng, phải tìm ra điểm chung để tách. 
var a = 'java, php, html'
console.log(a.split(', '))//ở ví dụ ni thì điểm chung là đc ngăn cách bởi mấy dấu phẩy
//ví dụ có 1 chuỗi là abc thì khi tách bỏ 1 chuỗi rỗng vô split('') là nó sẽ tự tách từng chữ 
//7. join() -> ghép mảng thành chuỗi
//8. replace() -> thay thế chuỗi
console.log(mystring.replace('JS','JAVA'))
//nếu có nhiều chuỗi giống thì nó chỉ thay thế 1 chuỗi đầu tiên, để thay thế hết dùng lệnh sau: là dùng biểu thức chính quy
console.log(mystring.replace(/JS/g, 'JAVA')) 
//9. toUpperCase, toLowerCase: viết hoa, viết thường
console.log(mystring.toUpperCase())
//10. trim -> cắt mấy cái kí tự khoảng trắng thừa 

/*Kiểu số (number)
1. Tạo giá trị number
    - Các cách tạo
    + C1: gán thẳng number vào biến
    + C2: dùng new number() -> ko nên dùng, nó là 1 đối tượng 
    - Dùng cách nào
    - Kiểm tra data type
2. Làm việc với number
    - to string: đổi sang kiểu string
    - to fixed: làm tròn số thập phân, nếu muốn làm tròn bao nhiêu số thập phân đằng sau thì thêm số vô
*/
var age = 18
var PI = 3.14
var a = new Number(9) 
console.log(age.toString())
console.log(PI.toFixed())

/*Kiểu mảng - Array
1. Tạo mảng
- C1: tạo 1 biến gồm [nhiều phần tử] 
- C2: dùng new Array() -> ko nên dùng
- Dùng cách nào
- Kiểm tra data type
*/
var languages = [
    'java',
    'php',  
    'html',
    'css',
    null,
    undefined,
]
console.log(languages)
console.log(Array.isArray(languages))
/*2. Truy xuất mảng
- index: vị trí của phần tử trong mảng
- length: độ dài của mảng
*/
console.log(languages[1])
/*3. Thêm phần tử vào mảng
- push(): thêm phần tử vào cuối mảng
- unshift(): thêm phần tử vào đầu mảng
- insert(): thêm phần tử vào giữa mảng
- slice(): cắt
- concat(): nối mảng
- toString(): chuyển sang kiểu chuỗi
- join(): nối chuỗi
*/
var languages = [
    'java',
    'php',  
    'html',
    'css'
]
/*console.log(languages.join(', '))
console.log(languages.unshift('python', 'c#'))
console.log(languages.unshift('helo'))*/
console.log(languages.splice(1,2))
/*4. Xóa phần tử khỏi mảng
- pop(): xóa phần tử cuối mảng, trả về phần tử đã xóa
- shift(): xóa phần tử đầu mảng, trả về phần tử đã xóa
- splice(): xóa phần tử khỏi mảng nếu biết được index và nhập thêm số lượng muốn xóa
- delete: xóa phần tử khỏi mảng
*/
//console.log(languages.pop())
/*5. Sửa phần tử trong mảng
- indexof(): tìm vị trí của phần tử trong mảng
- lastIndexOf(): tìm vị trí của phần tử cuối cùng trong mảng
- indexOf(): tìm vị trí của phần tử đầu tiên trong mảng
- includes(): kiểm tra có phần tử trong mảng hay không
*/

/*Hàm
1. Hàm?
    - 1 khối mã
    - làm 1 việc cụ thể
2. Loại hàm
    - built-in
    - tự định nghĩa
3. Tính chất
    - ko thực thi khi định nghĩa
    - thực thi khi gọi
    - có thể nhận tham số
    - có thể trả về 1 giá trị
    - có thể trả về 1 mảng
    - có thể trả về 1 đối tượng
    - có thể trả về 1 hàm
    - có thể trả về 1 giá trị null
    - có thể trả về 1 giá trị undefined
*/
function myFunction() {
    alert('hê hê')  
}
myFunction()

/*
1. Tham số
    - định nghĩa: giá trị truyền vào khi gọi ở function
    - kiểu dữ liệu : bất kỳ loại dữ liệu nào
    - tính private : 
    - 1 tham số
    - nhiều tham số
2. Truyền tham số
    - 1 tham số
    - nhiều tham số
3. arguments
    - đối tượng arguments - giống mảng
    - giới thiệu vòng for of
*/
function myFunction(a) {
    console.log(a) //có tính private chỉ hoạt động trong function
}
myFunction(10) //truyền tham số

function writeLog() {
    var s = ''
    for (var param of arguments) {
        s += `${param} - `
    }
    console.log(s)
}
writeLog('helo', 'toi', 'la', 'gai', 'dep')

//return trong hàm, trả về bất cứ kiểu dữ liệu nào cũng đc
function cong(a, b) {
    return a*b
}
var kq = cong(2, 8)
console.log(kq)

/*1 số lưu ý
- khi function trùng tên - 2 function trùng nhau thì function cuối sẽ đè lên function trước và nó sẽ in ra function cuối
- khai báo biến trong hàm - khi định nghĩa trong hàm thì nó chỉ hoạt động trong hàm
- định nghĩa hàm trong hàm - tương tự biến
*/

/*Các loại hàm
- declaration function
-> function a(){}
- expression function: gán biến là function
-> var a = function(){}
- arrow function
-> var a = () => {}
    
*/

//object 
//object là 1 collection của các key - value
//function gọi là phương thức - method
//những cái khác là thuộc tính - property
var emailKey = 'email' 
var myInfo = {
    name: 'Nguyễn Văn A',
    age: 20,
    address: 'Hà Nội',
    [emailKey]: 'nguyenvana@gmail.com', //đưa biến vào object
    getName: function() {
        return this.nam; //this ở đây là myInfo, nên dùng this để sau này đổi tên object k phải sửa nhiều
    }
}
/*delete myInfo.age //xóa key
myInfo.hoc = 'HTTT' //thêm key mới
myInfo['my-email'] = 'ngvi'//thêm key mới dạng khác khi có kí tự đặc biệt
console.log(myInfo.name) //lấy key */ 
console.log(myInfo.getName())

//object constructor - kiểu như tạo bảng thiết kế cho đối tượng - hàm khởi tạo
function User(firstName, lastName, ava) {
    this.firstName = firstName //this này là mô tả những thuộc tính và pthuc sẽ có trong đối tượng khi khởi tạo từ cái object
    this.lastName = lastName
    this.ava = ava
    this.getName = function() {
        return this.firstName + ' ' + this.lastName //this trong function là dùng để gọi đối tượng
    }
}

var author = new User('Son', 'Dang', 'avatar') //mỗi hàm khởi tạo sẽ có những thuộc tính giống và khác 
var user = new User('Vi', 'Thao', 'avatar')
author.title = 'Chia sẻ dạo' //khởi tạo ở pthuc nào thì thuộc tính sẽ ở hàm đó
user.comment = 'hay quá'
console.log(author)
console.log(user)
console.log(author.getName())

//câu lệnh rẽ nhánh if else
//if else if -> luôn rơi vào nhánh đúng đầu tiên, sẽ ktra từng nhánh ko đúng mới ktra nhánh tiếp theo, còn đúng thì sẽ trả về luôn nhánh đúng

//câu lệnh switch
var date = 8;
switch (date) {
    case 2: 
        console.log('Hôm nay là thứ 2');
    break; //ko dùng ni thì sẽ in ra hết các lệnh ở dưới
    case 3: //tựa dấu ===
        console.log('Hôm nay là thứ 3');
    break;
    default: //nếu ko thuộc mấy cái trên thì mặc định in ra lệnh ở dưới
        console.log('ĐÉO BIẾT')
}

/*Vòng lặp
1. for - lặp với điều kiện đúng
2. for/in - lặp qua key của đối tượng
3. for/of - lặp qua value của đối tượng, ko lấy ra value của object đc
4. while - lặp với điều kiện đúng
3. do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/
for (var i = 1; i <= 1000; i++) {
    console.log(i)
}
//lấy phần tử của mảng
let Array = ['apple', 'banana', 'orange', 'mango']
let arrayLenght = Array.length;
for (var i = 0; i < arrayLenght; i++) {
    console.log(Array[i]);
}

var a = {
    name: 'son',
    age: 20,
    address: 'VN'
}
for (var key in a) {
    console.log(a[key]) //lấy ra cái value của mấy cái key 
}

var b = [
    'java',
    'php',
    'c#',
    'javascript'
]
for (var key in b) {
    console.log(key)
}

for (var value in b) {
    console.log(value)
}