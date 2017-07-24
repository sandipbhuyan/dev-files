'use strict';

console.log('\'Allo \'Allo!');
$(document).ready(function () {
  //Navbar collapse
  var $navbar = $('nav');
  var $hamburger = $('#hamburger-icon');
  var $detailsItem = $('.information-bar-item');
  var $contactInfo = $('.information-bar-item.primary-number');
  if (screen.width <= 768) {
    $navbar.addClass('navbar-collapse');
    $navbar.hide();
    $detailsItem.hide();
    $contactInfo.show();
  }
  $hamburger.click(collapseNavbar);

  function collapseNavbar() {
    if ($navbar.attr('class') == 'navbar-collapse') {
      $navbar.removeClass('navbar-collapse');
      $navbar.show(500);
    } else {
      $navbar.addClass('navbar-collapse');
      $navbar.hide(500);
    }
  }

  //sec-home
  var $header = $('#sec-home');
  var $headerImage = $('#adi_bg').attr('src');
  console.log($headerImage);
  $header.attr({ 'style': 'background-image: url(' + $headerImage + ')' });

  //carousel
  $('#Photo_galnew').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    }]
  });
  $('#nearby_place').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 980,
      settings: {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 770,
      settings: {
        dots: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 500,
      settings: {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  $('#update_new').slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  var fbPage = $('.fbPageContainer > div').attr('href');
  if (fbPage != '') {
    $('.fbPageContainer').append('<iframe src="https://www.facebook.com/plugins/\page.php?width=350&height=70&small_header=false&adapt_container_width\=false&hide_cover=false&show_facepile=false&href=\https%3A%2F%2Fwww.facebook.com%2F' + fbPage + '" width="350" height="130"\style="border:none;overflow:hidden" scrolling="no" frameborder="0"\allowTransparency="true"></iframe>');
  }

  $('#dpd1').datepicker();
  $('#dpd2').datepicker();

  // enquiry form animation
  var $inputText = $('#input_text');
  var $textArea = $('#textarea1');
  $inputText.focus(inpurAreaFocus);
  $inputText.blur(inputAreaBlur);

  $textArea.focus(inpurAreaFocus);
  $textArea.blur(inputAreaBlur);

  function inpurAreaFocus() {
    var $self = $(this);
    $self.siblings('label').addClass('active');
  }

  function inputAreaBlur() {
    var $self = $(this);
    $self.siblings('label').removeClass('active');
  }

  //validation

  function mobile_validate(class_name) {

    $('.' + class_name + ' input').next().html('');
    var phone_msg = 'Invalid Mobile Number.';

    var regExMob = new RegExp('/[0-9]/');
    var blank_msg = 'Invalid Input Value';
    if ($.trim($('.' + class_name + ' input').val()).length == 0) {
      $('.' + class_name + ' input').next().html(blank_msg);
      return false;
    }
    if ($.trim($('.' + class_name + ' input').val()).length != 10 && !$('.' + class_name + ' input').val().match(regExMob)) {
      $('.' + class_name + ' input').next().html(phone_msg);
      return false;
    }
    return true;
  }

  function email_validate(class_name) {

    $('.' + class_name + ' input').next().html('');
    var email_msg = 'Invalid Email Address.';
    var pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var regExEmail = new RegExp(pattern);
    var blank_msg = 'Invalid Input Value';
    if ($.trim($('.' + class_name + ' input').val()).length == 0) {
      $('.' + class_name + ' input').next().html(blank_msg);
      return false;
    }
    if (!$('.' + class_name + ' input').val().match(regExEmail)) {
      $('.' + class_name + ' input').next().html(email_msg);
      return false;
    }
    return true;
  }
  function email_validate1(class_name) {
    $('.' + class_name + ' input').last().next().html('');
    var email_msg = 'Invalid Email Address.';
    var pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var regExEmail = new RegExp(pattern);
    var blank_msg = 'Invalid Input Value';
    if ($.trim($('.' + class_name + ' input').val()).length == 0) {
      $('.' + class_name + ' input').last().next().html(blank_msg);
      return false;
    }
    if (!$('.' + class_name + ' input').last().val().match(regExEmail)) {
      $('.' + class_name + ' input').last().next().html(email_msg);
      return false;
    }
    return true;
  }
  function text_validate(class_name) {
    $('.' + class_name + ' textarea').next().html('');
    var text_msg = 'Query should minimum 10 and maximum 250.';

    if ($.trim($('.' + class_name + ' textarea').val()).length < 10 || $.trim($('.' + class_name + ' textarea').val()).length > 250) {
      $('.' + class_name + ' textarea').next().html(text_msg);
      return false;
    }
    return true;
  }

  //footer enquiry

  // $('.button-send').click(function(event) {
  //
  //   var text_status = mob_status = email_status = enq_msg = true;
  //
  //   if($.isNumeric($('.footer_enquiry input').val()))
  //   {
  //     mob_status = mobile_validate('footer_enquiry');
  //   }
  //   else
  //   {
  //     email_status = email_validate('footer_enquiry');
  //   }
  //   text_status = text_validate('footer_enquiry');
  //   //enq_msg = enquiry_type('footer_enquiry');
  //   if(text_status == false || mob_status == false || email_status == false ){
  //     return false;
  //   }
  //   var eCnt = $('.enquiry-cnt').val();
  //   var eMsg = $('.enquiry-text').val();
  //   var eType = $('.enquiry-type').html();
  //   var eId  = $('.enquiry-id').html();
  //   $('.enquiry-cnt').val('');
  //   $('.enquiry-text').val('');
  //   KEQ(eCnt,eMsg,eType,eId);
  //
  // });

  $('.site-loading').hide();
});
//# sourceMappingURL=main.js.map
