let fs = require("fs");
let { g, s, mc, mg, l } = require("./setting.json");
let data = require("./result/serial.json");
var strings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let list = "";
data = {
    "serial": []
}
for (a = 1; a <= mg; a++) {
    for (c = 1; c <= mc; c++) {
        for (n = 1; n <= s; n++) {
            let code = ""
            for (var i = 0; i <= l - 1; i++) {
                code += strings.charAt(Math.floor(Math.random() * strings.length));
            }
            data.serial.push({ number: `${n < 10 ? `${a}${c}0${n}` : `${a}${c}${n}`}`, code: code })
            console.log(`${a}학년 ${c}반 ${n}번 : ${code}`)
            list += `<div class="row">
                <div class="number">${n < 10 ? `${a}${c}0${n}` : `${a}${c}${n}`}</div>
                <div class="serial">${code}</div>
             </div>
            `
        }
        fs.writeFileSync(`./result/${a}학년${c}반 시리얼.html`, `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    *{
        font-family: 나눔스퀘어;
    }
    
    body{
        margin:0;
        padding: 0;
    }
    
    .title{
        font-weight: bolder;
        font-size: 40px;
        text-align: center;
        margin-top:30px;
        margin-bottom: 5px;
    }
    
    .subtitle{
        font-size: 20px;
        margin-bottom: 20px;
        text-align: center;
        font-weight: bolder;
    }
    
    .head{
        display: flex;
        text-align: center;
        justify-content: center;
    }
    
    .row{
        display: flex;
        text-align: center;
        justify-content: center;
        font-size: 20px;
    }
    
    .head .number{
        font-weight: bold;
        margin-bottom: 5px;
    }
    
    .head .serial{
        font-weight: bold;
        margin-bottom: 5px;
    }
    
    .number{
        width: 150px;
        border-right: 1px solid #000;
        border-bottom: 1px solid #000;
    }
    
    .serial{
        width: 150px;
        border-bottom: 1px solid #000;
    }
    </style>
</head>

<body>
    <div class="title">${g}학년 ${c}반</div>
    <div class="subtitle">중앙인들 시리얼 코드</div>

    <div class="table">
        <div class="head">
            <div class="number">학번</div>
            <div class="serial">시리얼 코드</div>
        </div>
        ${list}
    </div>
</body>

</html>`)
        list = "";
    }
}
fs.writeFileSync("./result/serial.json", JSON.stringify(data))