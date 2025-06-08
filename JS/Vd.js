//Vd 1
let chieudai = 5
let chieurong = 5
let s = chieudai * chieurong
console.log('Dien tich hcn la: ' + s)

//Vd2
const PI = 3.14
let r = 7
let chuvi = 2*PI*r
let dientich = 2 * PI *r*r
console.log('Chu vi hinh tron: '+ chuvi)
console.log('Dien tich hinh tron: '+ dientich)

//Vd3: Viết chương trình JavaScript để kiểm tra xem một số nguyên n là số chẵn hay số lẻ.
let n = 10
if (n%2 == 0) 
    console.log(n + ' la so chan')
else {
    console.log(n + ' sla so le')
}

//Vd4: Viết chương trình JavaScript để xếp loại học lực của học sinh dựa trên điểm trung bình average.
let $dtb = 7.2;

if ($dtb >= 8) {
    console.log("Học lực Giỏi");
} 
else if ($dtb >= 6.5) {
    console.log("Học lực Khá");
} 
else if ($dtb >= 5) {
    console.log("Học lực Trung bình");
} 
else {
    console.log("Học lực Yếu");
}
