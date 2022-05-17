
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

//休眠函数
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

(function () {
    // Your code here...
    setTimeout(() => {
        //获取到相应的ul和旗下li
        var ulE = document.getElementsByClassName("el-menu el-menu--inline");
        var liE = ulE[1].getElementsByTagName("li");
        //每个小时循环执行自动点击函数
        window.setInterval(function () {
            var d = new Date();
            var hour = d.getHours();
            var minute = d.getMinutes();
            //判断当前时间是否是5:00-5:10之间
            if ((hour == 8 && minute ==30) || (hour == 17 && minute ==50)) {
                // //循环遍历每一个li
                liE[0].click();
                sleep(3000).then(() => {
                    liE[1].click()
                  });
                sleep(6000).then(() => {
                    liE[2].click()
                  });
                sleep(9000).then(() => {
                    liE[3].click()
                  });
                sleep(12000).then(() => {
                    liE[4].click()
                  });
            }
        }, 1000 * 30 );
    }, 5000);
})();