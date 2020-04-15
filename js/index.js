function result() {
    var num = document.getElementById("num").value;
    console.log(num);
    // 判断输入是否为空
    if (!num) {
        document.getElementById("num").focus;
        alert("请输入一个数字！");
    }
    // 判断是否为数字
    if (isNaN(num)) {
        document.getElementById("num").value;
        alert("请输入一个数字！");
        return;
    }
    var html = "";
    for (var i = 1; i <= num; i++) { //输入行
        html += "<tr>"
        for (var j = 1; j <= i; j++) { //输入列
            var sum = i * j;
            html += "<td>" + j + "*" + i + "=" + sum + "</td>";
        }
        html += "</tr>"
    }
    document.getElementById("tbody").innerHTML = html;
}
var num = 0;
var timer = null;
// 自动生成
function startRsult() {
    // 时间控制器
    timer = setInterval(function() {
        num++;
        document.getElementById("num").value = num;
        result();
    }, 600);

}
// 清楚时间器
function clearResult() {
    clearInterval(timer);
}