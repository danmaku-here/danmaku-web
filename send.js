"use strict";
function init() {
    if(!docCookies.hasItem("stuid")) {
        alert("请先输入学号~");
        // TODO 
        // location.href = "/index.html";
    }
    document.getElementById("stuid").value = docCookies.getItem("stuid");
}

function submit() {
    let text = document.getElementById("text").value.trim();
    if(text == '') {
        alert("弹幕内容为空~");
        return;
    }
    let type = $('input[name=type]:checked').val();
    let color = $('input[name=color]').val();
    let fontsize = $('input[name=fontsize]:checked').val();
    text = atob(text);
    $.post(BACKEND_URL, {
        type: type,
        color: color,
        fontsize: fontsize,
        text: text
    });

}