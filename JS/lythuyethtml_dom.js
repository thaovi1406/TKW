//HTML DOM
/*Có 3 thành phần
1. element: là 1 thẻ 
2. attribute: thuộc tính trong thẻ
3. text: chữ 
*/ 
/*
**  document.getElementById(id): tìm theo tên id
    document.getElementsByTagName(name)[num]: tìm theo tên thẻ thành
phần name --> nếu có nhiều thẻ giống nhau thì điền số num bắt đầu từ 0 nó sẽ tìm vị trí của thẻ 
    document.getElementsByClassName(name)[num]: tìm theo tên class
name
    document.getElementById(id).style.property = new style
    onclick : khi click lên đối tượng
    onchange : khi giá trị thẻ thành phần của đối tượng được thay đổi
    onmouseover : khi đưa chuột vào đối tượng
    onmouseout : khi đưa chuột ra ngoài khỏi đối tượng 
    onkeydown : khi nhập dữ liệu vào textbox
    onload : khi trang web được load lên
*/
//innerHTML: dùng để thêm 1 thuộc tính, lấy bên trong thẻ
//outerHTML: lấy cả cái thẻ và bên trong của thẻ
//truy xuất selector

/*/document.write('he lo')
document.getElementById('demo')
document.getElementsByClassName('helo')*/
var demoid = document.querySelector('#demo')
console.log(demoid)