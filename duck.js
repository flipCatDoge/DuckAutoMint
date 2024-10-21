//先到钱包网址复制下面代码，使用okx钱包，建议使用新钱包，存放少许sol
// chrome-extension://mcohilncbfahbmgdjkbpemcciiolgcge/popup.html#/
// 复制到上方网址的控制台（F12）运行即可
let waitTimeCnt = 0;
setInterval(function() {
    let signWindows = document.querySelector("._wallet-navigator__title_1rmrj_21");
    if (signWindows) {
        console.log("有待签名交易");
        waitTimeCnt++;
        // 1s后开始点击确认交易
        if (waitTimeCnt > 3) {
            waitTimeCnt = 0;
            console.log("交易超时，放弃交易");
            let rejectButton = document.querySelector("._action-buttons_j3bvq_1>button:nth-child(1)");
            let confirmButton = document.querySelector("._action-buttons_j3bvq_1>button:nth-child(2)");
            if (confirmButton != null && rejectButton != null) {
                console.log("有待确认签名交易");
                if (confirmButton.disabled) {
                    console.log("交易异常，拒绝交易");
                    rejectButton.click();
                }
                else{
                    confirmButton.click();
                    console.log("交易成功，确认交易");
                }
            }
        }
    }
}, 250); // 5000 毫秒 = 5 秒

//接着，打开下面网址，粘贴代码运行
// https://duck.bond/
// 复制到上方网址的控制台（F12）运行即可
document.querySelector(".duck-snowflake").remove();
let duckCount = 0;

setInterval(function() {
    let mintButton = document.querySelector(".duck-btn");
    mintButton.click()
    duckCount++;
    console.log("Minted " + duckCount + " ducks!");
}, 3000); // 1000 毫秒 = 1 秒