$(function () {
    $('.SendEmail').click(function (event) {
      var email = 'jenniferruthdesign@gmail.com';
      var subject = 'Test';
      var emailBody = 'Hi Sample,';
      var attach = 'path';
      document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
          "?attach="+attach;
    });
  });