$(function(){
    $('#sendmail').on('click', function(){
    var body = '';
    body += '◆あなたのお名前:\r\n' + $('[name="yourname"]').val() + '\r\n\r\n';
    body += '◆電話番号:\r\n' + $('[name="tel"]').val() + '\r\n\r\n';
    body += '◆Eメールアドレス:\r\n' + $('[name="email"]').val() + '\r\n\r\n';body += '◆ご相談内容:\r\n' + $('[name="consult"]').val() + '\r\n\r\n';

   // $('input[name="yourname"]').val()
   // $('input[name="tel"]').val()
    
    if($('input[name="yourname"]').val() !== "" && $('input[name="tel"]').val() !== "" && $('#tel_error_msg:not(d-none)').length === 0 ) {

    

    $.mailto.call({
        to : 'DuiLawYeh＠gmail.com',
        subject : "お問い合わせ",
        body : body
    });

  } else {
    return false;

  }

  });

  $('a[href^="#contact"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  $('input[name="tel"]').on('blur', function(){
    if($('input[name="tel"]').val().match(/^[0-9]{1,11}$/g) ) {
      $('#tel_error_msg').addClass('d-none')
  } else {
     $('#tel_error_msg').removeClass('d-none')
  }
})
});