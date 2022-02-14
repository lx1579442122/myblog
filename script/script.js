/*
    Logic：
        主要采用原生 JavaScript，
        只有在发送 Ajax 请求是才使用 JQuery
    
    ===
    1、登录注册页面的切换逻辑

    2、Ajax发送及接受响应逻辑
    ===
*/


// 封装选择器, 采用ES6箭头函数写法
const getSelector = ele => {
        return typeof ele === "string" ? document.querySelector(ele) : "";
    }
    // 登录注册载入
const containerShow = () => {
    var show = getSelector(".container")
    show.className += " container-show"
}
window.onload = containerShow;
// 登录注册页切换
((window, document) => {
    // 登录 -> 注册
    let toSignBtn = getSelector(".toSign"),
        toLoginBtn = getSelector(".toLogin")

    loginBox = getSelector(".login-box"),
        signBox = getSelector(".sign-box");

    toSignBtn.onclick = () => {
        loginBox.className += ' animate_login';
        signBox.className += ' animate_sign';
    }
    toLoginBtn.onclick = () => {
        loginBox.classList.remove("animate_login");
        signBox.classList.remove("animate_sign");
    }

})(window, document);

window.addEventListener('DOMContentLoaded', function() {
    //注册的小眼睛按钮，查看密码
    var flag = 0;
    var cos = document.querySelector('#psw');
    let btn = document.querySelector('.cos').querySelector('img');
    btn.addEventListener('click',
        function() {
            if (flag == 0) {
                cos.type = 'text';
                this.src = 'img/open.png';
                flag = 1;
            } else {
                cos.type = 'password';
                this.src = 'img/close.png';
                flag = 0;
            }
        });
    var bos = document.querySelector('#pswt');
    let btn2 = document.querySelector('.bos').querySelector('img');
    btn2.addEventListener('click',
        let = () => {
            if (flag == 0) {
                bos.type = 'text';
                this.src = 'img/open.png';
                flag = 1;
            } else {
                bos.type = 'password';
                this.src = 'img/close.png';
                flag = 0;
            }
        });



    //文本框placeholder获取焦点隐藏，失去焦点显示
    var inputs = document.getElementsByTagName('input');
    addEventListener('click', (e) => {
        for (var i = 0; i < inputs.length; i++) {
            e.target.placeholder = '';
        }

    });
    // for (var i = 0; i < inputs.length; i++) {
    //     inputs[i].onfocus = (e) => {
    //         e.target.placeholder = '';
    //     }
    // }



    for (var i = 0; i < inputs.length; i++) {
        inputs[i].onblur = (e) => {
            e.target.placeholder = '请输入6位以上';
        }
    }

    // 表单校验提醒error，有问题

    // function check() {
    //     let name = document.myform.txtUser;
    //     if (name.value.length == 0) {
    //         console.log('嘿嘿');
    //     } else {
    //         if (name.value.inCludes('@')) {
    //             name.innerHTML = '请输入邮箱';
    //         }
    //     }
    // }
    // check();

});






// Ajax 请求发送