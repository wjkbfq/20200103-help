$('#load-gift').click(function () {
  $('.active-container').toggleClass('showAll');
  if($('#load-gift span:first').attr('data-uo')=='1'){
    $('#load-gift span:first').attr('data-uo','0');
    $('#load-gift span:first').html('查看所有奖品 &nbsp');
    $('#load-gift span:last').attr('class','down-logo');
  }else{
    $('#load-gift span:first').attr('data-uo','1');
    $('#load-gift span:first').html('收起 &nbsp');
    $('#load-gift span:last').attr('class','up-logo');
  }
})

if(innerWidth<768) {
  $('.weChat-block').click(function () {
    $('.weChat-share-modal').show();
  })
  $('.weChat-share-modal').click(function () {
    $(this).hide();
  })
}