// $('.navbar-collapse-bg').css('height', window ? window.screen.height + 6 : 'auto')
$('.navbar-toggle').click(function () {
  $('.navbar-collapse-bg').show();
})
// document.querySelector('.navbar-toggle').onclick = function(){
//     document.querySelector('.navbar-collapse-bg').style.display = 'block';
// }
$('.close-btn-box').click(function () {
  $('.navbar-collapse-bg').hide();
})

// $('.navbar-toggle').click(function () {
//     $('#nav-collapse-1').removeClass('in')
// });


// 切换页面时往上层 iframe 发送消息
var pathname = window.location.pathname
window.top.postMessage({path: pathname}, '*')