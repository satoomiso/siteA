$(function(){
    $('#sendmail').on('click', function(){
    var body = '';
    body += '◆あなたのお名前:\r\n' + $('[name="yourname"]').val() + '\r\n\r\n';
    body += '◆電話番号:\r\n' + $('[name="tel"]').val() + '\r\n\r\n';
    body += '◆Eメールアドレス:\r\n' + $('[name="email"]').val() + '\r\n\r\n';body += '◆ご相談内容:\r\n' + $('[name="consult"]').val() + '\r\n\r\n';
    $.mailto.call({
        to : 'DuiLawYeh＠gmail.com',
        subject : "お問い合わせ",
        body : body
    });
  });
});