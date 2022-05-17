// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/scripts.php?ext=dhdg
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    // Your code here...

    //获取到相应的ul和旗下li
    var ulE = document.getElementsByClassName("el-menu el-menu--inline");
    var liE = ulE[1].getElementsByTagName("li");
    //每个小时循环检测时间是否是8点30以后
    window.setInterval(function(){
        var i;
        //循环点击每一个li并休眠3s
        for(i = 0 ; i < 5 ; i++){
            liE[i].click();
            sleep(3000);
        }
    },1000*20);



})();

//休眠函数
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }





// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/scripts.php?ext=dhdg
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    // Your code here...

    var ulE = document.querySelectorAll("a");
    var liE = ulE[1].querySelectorAll("li");
    window.setInterval(function(){
            ulE[7].click();

    },1000*2);



})();





//自动点击函数
function autoClick() {


}




//休眠函数
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

