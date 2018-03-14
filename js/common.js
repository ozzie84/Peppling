(function ($) {

  $('.table__text, .table__form, .popup_submit').hide();

  var title = $('.table__title p');
  var fade_btn = $('.fade_btn');
  var submit = $('.submit_btn');

  function clickToTitle() {
    $(this).parent().next().next().next().stop(true).fadeToggle();
    $(this).toggleClass('blocking');
    if($(this).hasClass('blocking')) {
      fade_btn.off('click', clickToBtn);
    } else {
      fade_btn.on('click', clickToBtn);
    }
  }

  function clickToBtn(e) {
    e.preventDefault();
    $(this).parent().next().stop(true).fadeToggle();
    $(this).parent().next().next().stop(true).fadeToggle();
    if($(this).hasClass('btn_answer')) {
      $(this).text('cancel').removeClass('btn_answer').addClass('cancel');
      title.off('click', clickToTitle);
    } else {
      $(this).text('answer').removeClass('cancel').addClass('btn_answer');
      title.on('click', clickToTitle);
    }
  }

  function submitClick (e) {
    e.preventDefault();
    var $that = $(this);
    $that.parent().parent().next().show();
    $that.parent().parent().prev().prev().children().text('complete').removeClass('cancel').addClass('complete').off('click');
    setTimeout(function () {
      $that.parent().parent().hide();
      $that.parent().parent().prev().hide();
      $that.parent().parent().next().hide();
    }, 1500);
  }

  title.on('click', clickToTitle);
  fade_btn.on('click', clickToBtn);
  submit.on('click', submitClick);

})(jQuery);