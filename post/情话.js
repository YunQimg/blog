<script src="https://blog-static.cnblogs.com/files/amnotgcs/mouse-click.js"></script>
<script>
(function () {
    var a_idx = 0;
    window.onclick = function (event) {
        var a = new Array(
            "❤秋日阳光溢满阳台❤",
            "❤你的眼睛真好看❤",
            "❤小可爱，你过来我抱抱你❤",
            "❤好久没看到你了❤",
            "❤我现在能见你吗❤",
        );
        var heart = document.createElement("b"); //创建b元素
        heart.onselectstart = new Function('event.returnValue=false'); //防止拖动
        document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
        a_idx = (a_idx + 1) % a.length;
        heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

        var f = 14, // 字体大小
            x = event.clientX - f / 2, // 横坐标
            y = event.clientY - f, // 纵坐标
            c = randomColor(), // 随机颜色
            a = 1.0, // 透明度
            s = 0.9; // 放大缩小

        var timer = setInterval(function () { //添加定时器
            if (a <= 0) {
                document.body.removeChild(heart);
                clearInterval(timer);
            } else {
                heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                    c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                    s + ");";

                y--;
                a -= 0.016;
                s += 0.002;
            }
        }, 24)
    }
    // 随机颜色
    function randomColor() {
        return "rgb(" + (~~(Math.random() * 200 + 55)) + "," + (~~(Math.random() * 200 + 55)) + "," + (~~(Math
            .random() * 200 + 55)) + ")";
    }
}());
</script>