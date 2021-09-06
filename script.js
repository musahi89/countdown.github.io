let show_day=document.getElementById("show_day");
let show_hour=document.getElementById("show_hour");
let show_minute=document.getElementById("show_minute");
let show_second=document.getElementById("show_second");
 
//宅建試験の日程を定義する
 
function tax_exam_day() {
     
    let exam_day= new Date();
 
    exam_day.setMonth(9);　//0~11で1月～12月を定義
    exam_day.setDate(17);
    exam_day.setHours(13);
    exam_day.setMinutes(0);
    exam_day.setSeconds(0);
 
    return exam_day;
 
}
 
//現在時刻から宅建試験までの残り時間を計算
 
function rest_time() {
     
    let exam_time = tax_exam_day();
 
    let now = new Date();
    let restall=exam_time.getTime()-now.getTime();
    let rest_second=Math.floor(restall/1000)%60;
    let rest_minute=Math.floor(restall/1000/60)%60;
    let rest_hour=Math.floor(restall/1000/60/60)%24;
    let rest_day=Math.floor(restall/1000/60/60/24);
 
    show_day.textContent=String(rest_day).padStart(2,"0");
    show_hour.textContent=String(rest_hour).padStart(2,"0");
    show_minute.textContent=String(rest_minute).padStart(2,"0");
    show_second.textContent=String(rest_second).padStart(2,"0");
     
    re_calculation();　//re_calculationファンクションを実行する
 
}
 
//1秒経過後にもう一度rest_timeファンクションを実行する。
 
function re_calculation() {
 
    setTimeout(rest_time,1000); 
 
}
 
rest_time();　//rest_timeファンクションを実行する。
