function changeBackgroundColor(doi) {
    document.body.style.backgroundColor=doi;    
    document.getElementsByTagName('h2').innerText= `Bạn đã đổi màu: ${doi}`;

}
function resetBackgroundColor() {
    document.body.style.backgroundColor='white';
}


