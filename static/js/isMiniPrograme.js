
// --------模拟是小程序，执行的代码------------------------
// $('.btn-ifMiniPrograme-1').click(function(e){
//   //阻止a跳转
//   e.preventDefault()
//   //显示二维码
//   $('.QR-code').show('fold')
//   $('.QR-2').hide()
//   $('.QR-1').show()
// })
// $('.btn-ifMiniPrograme-2').click(function(e){
//   //阻止a跳转
//   e.preventDefault()
//   //显示二维码
//   $('.QR-code').show('fold')
//   $('.QR-1').hide()
//   $('.QR-2').show()
// })
// // 关闭弹窗
// $('.QR-close-btn').click(function(e){
//   $('.QR-code').hide('fold')
// })

// 判断是否是小程序
wx.miniProgram.getEnv(function(res) {
  if(res.miniprogram){
    //是小程序
    $('.btn-ifMiniPrograme-1').click(function(e){
      //阻止a跳转
      e.preventDefault()
      //显示二维码
      $('.QR-code').show('fold')
      $('.QR-2').hide()
      $('.QR-1').show()
    })
    $('.btn-ifMiniPrograme-2').click(function(e){
      //阻止a跳转
      e.preventDefault()
      //显示二维码
      $('.QR-code').show('fold')
      $('.QR-1').hide()
      $('.QR-2').show()
    })
    // 关闭弹窗
    $('.QR-close-btn').click(function(e){
      $('.QR-code').hide('fold')
    })
  }
})
