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

    var show = document.querySelector('.show');
    setInterval(function() {
        var time = new Date(); // 程序计时的月从0开始取值后+1   
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var min = time.getMinutes();
        var s = time.getSeconds();
        y = y < 10 ? '0' + y : y;
        m = m < 10 ? '0' + m : m;
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        min = min < 10 ? '0' + min : min;
        s = s < 10 ? '0' + s : s;
        var t = `北京时间：` + y + `-` + m + `-` +
            d + ` ` + h + `:` +
            min + `:` + s;
        show.innerHTML = t;

    }, 1000)

});
       