// 图片跟随鼠标移动
window.addEventListener('DOMContentLoaded', () => {
    let pic = document.querySelector('img');
    document.addEventListener('mousemove', e => {
        let x = e.pageX;
        let y = e.pageY;
        // console.log(x, y);
        pic.style.left = x + 15 + 'px';
        pic.style.top = y + 15 + 'px';
    });
});