function changeBackgroundColor($doi) {
    document.getElementsByClassName('thongbao').innerHTML='Bạn đã chọn màu ' + $doi;
    document.getElementsByTagName('button')[0].style.backgroundColor.body=$doi;
    document.body.style.backgroundColor='green';
    document.body.style.backgroundColor='blue';
    document.body.style.backgroundColor='yellow';
    document.body.style.backgroundColor='purple';
}