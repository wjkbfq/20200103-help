//countdown.js用于倒计时
//将0-9的数字前面加上0，例1变为01
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// 剩余时间
function remain(time) {
    var remainTime = new Date(time) - new Date();
    var seconds = Math.floor((remainTime / 1000) % 60);
    var minutes = Math.floor((remainTime / 1000 / 60) % 60);
    var hours = Math.floor((remainTime / (1000 * 60 * 60)) % 24);
    return checkTime(hours) + ':' + checkTime(minutes) + ':' + checkTime(seconds);
}

function showTime(start, end, t) {
    // 当前日期
    var date = new Date();
    // 当前年数
    var year = date.getFullYear();
    // 当前月数
    var month = date.getMonth() + 1;
    // 当前天数
    var day = date.getDate();
    // 当前小时数
    var time = date.getHours();

    var remainTime;
    if ((date > new Date(year + '-' + end.m + '-' + end.d + ' ' + t)) || (date < new Date(year + '-' + start.m + '-' + start.d))) {
      remainTime = '--:--:--';
    } else if (time < parseInt(t.split(':')[0], 10)) {
        // 当天开奖
        remainTime = remain(year + month + day + ' ' + t + ':01');
    } else {
        // 第二天开奖
        remainTime = remain(year + month + (day + 1) + ' ' + t + ':01');
    }

    // document.getElementById('showtimes').innerHTML = remainTime;
    $('#countdown1').text(remainTime.split(':')[0])
    $('#countdown2').text(remainTime.split(':')[1])
    $('#countdown3').text(remainTime.split(':')[2])

    setTimeout(function () {
      startTime();
    }, 1000);
}

function startTime() {
  showTime({
    // 开始月份
    m: '12',
    // 开始日期
    d: '2'
  }, {
    // 结束月份
    m: '12',
    // 结束日期
    d: '20'
    // 开奖时间 格式："小时:分钟"
  }, '18:00');
}

startTime();


