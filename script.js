let students = [];
let defaults = [];

const display = document.getElementById("display");
const selected = document.getElementById("selected");
const default_ = document.getElementById("default");

window.onload = function(){
    for(i = 1; i <= 40; i++){
        students[i - 1] = i;
        defaults[i - 1] = i;
    }

    display.innerText = students.join(" ");
    default_.innerText = defaults.join(" ");
}

function select(){
    if(students.length === 0){
        alert("対象生徒はもういません。リセットを行います。");
        reset(true);
    }else{
        let random = Math.floor(Math.random() * students.length);
        selected.innerText = students[random];
        students.splice(random, 1);
        display.innerText = students.join(" ");
    }
}

function reset(n = false){
    if(n === false){
        let yesno = window.confirm("リセットを行います。よろしいですか？")
        if(yesno === false)return;
    }
    students.splice(0, students.length - 1);
    for(i = 0; i < defaults.length; i++){
        students[i] = defaults[i];
    }
    display.innerText = students.join(" ");
    selected.innerText = null;
}

function edit(a){
    let n = parseInt(a);
    if(students.indexOf(n) === -1){
        //追加
        students.push(n);
        alert("対象生徒に" + n + "番を追加しました。");
    }else{
        //削除
        students.splice(students.indexOf(n), 1);
        alert("対象生徒から" + n + "番を削除しました。")
    }
    document.getElementById("edit_input").value = null;
    display.innerText = students.join(" ");
}

function default_edit(a){
    let n = parseInt(a);
    if(defaults.indexOf(n) === -1){
        //追加
        defaults.push(n);
        alert("初期設定上の対象生徒に" + n + "番を追加しました。");
    }else{
        //削除
        defaults.splice(defaults.indexOf(n), 1);
        alert("初期設定上の対象生徒から" + n + "番を削除しました。")
    }
    document.getElementById("default_edit_input").value = null;
    default_.innerText = defaults.join(" ");
}
