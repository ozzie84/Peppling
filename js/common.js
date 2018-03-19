(function ($) {

  $('.table__text, .table__form, .popup_submit, .table__questions, .table__answer').hide();

  var title = $('.table__title p');
  var fade_btn = $('.fade_btn');
  var submit = $('.submit_btn');
  var complete = $('.complete');

  function clickToTitle() {
    $(this).parent().next().next().next().stop(true).fadeToggle();
    $(this).toggleClass('blocking');
    // if($(this).hasClass('blocking')) {
      // fade_btn.off('click', clickToBtn);
    // } else {
      // fade_btn.on('click', clickToBtn);
    // }
  }

  function clickToBtn(e) {
    e.preventDefault();
    $(this).parent().next().stop(true).fadeToggle();
    $(this).parent().next().next().stop(true).fadeToggle();
    if($(this).hasClass('btn_answer')) {
      $(this).text('cancel').removeClass('btn_answer').addClass('cancel');
      // title.off('click', clickToTitle);
    } else {
      $(this).text('answer').removeClass('cancel').addClass('btn_answer');
      // title.on('click', clickToTitle);
    }
  }

  function submitClick(e) {
    e.preventDefault();
    var $that = $(this);
    $that.parent().parent().next().show();
    $that.parent().parent().prev().prev().children().text('complete').removeClass('cancel').addClass('complete');
    setTimeout(function () {
      $that.parent().parent().parent().hide();
      $that.parent().parent().hide();
      $that.parent().parent().prev().hide();
      $that.parent().parent().next().hide();
    }, 1500);
  }

  function clickComplete(e) {
    e.preventDefault();
    $(this).parent().next().fadeToggle();
    $(this).parent().next().next().fadeToggle();
  }

  complete.on('click', clickComplete); // Click to complete
  title.on('click', clickToTitle); // Click to title
  fade_btn.on('click', clickToBtn); // Click to button
  submit.on('click', submitClick); // Click to submit

  // KeyUp input

  var input = $('input[name="question"]');
  var textarea = $('#counterLow');
  var count = $('.counter');
  var countTextarea = $('.counterLow');

  input.on('keyup', function() {
    count.text(this.value.length + '/120');
  });

  textarea.on('keyup', function() {
    countTextarea.text(this.value.length + '/500');
  });

})(jQuery);