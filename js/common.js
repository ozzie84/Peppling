(function ($) {

  $('.table__text, .table__form, .popup_submit').hide();

  const title = $('.table__title p');
  const fade_btn = $('.fade_btn');
  const submit = $('.submit_btn');

  title.on('click', function () {
    $(this).parent().next().next().next().stop(true).fadeToggle();
  });

  fade_btn.on('click', function (e) {
    e.preventDefault();
    $(this).parent().next().stop(true).fadeToggle();
    $(this).parent().next().next().stop(true).fadeToggle();
    if($(this).hasClass('btn_answer')) {
      $(this).text('cancel').removeClass('btn_answer').addClass('cancel');
    } else {
      $(this).text('answer').removeClass('cancel').addClass('btn_answer');
    }
  });
  
  submit.on('click', function (e) {
    e.preventDefault();
    const $that = $(this);
    $that.parent().parent().next().show();
    $that.parent().parent().prev().prev().children().text('complete').removeClass('cancel').addClass('complete').off('click');
    setTimeout(function () {
      $that.parent().parent().hide();
      $that.parent().parent().prev().hide();
      $that.parent().parent().next().hide();
    }, 1500);
  });

})(jQuery);