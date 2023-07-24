

$(function () {


  var menu = $('#navbar').offset().top;
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();

    if (menu < scroll) {
      $('#navbar').addClass('menu_fix');
    } else {
      $('#navbar').removeClass('menu_fix');
    }
  });

  // ======= open investor account accordion
  $(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.link');
      // Evento
      links.on('click', {
        el: this.el,
        multiple: this.multiple
      }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el;
      $this = $(this),
        $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      };
    }

    var accordion = new Accordion($('#accordion'), false);
  });



  // dark theme
  $(document).ready(function () {
    if (localStorage.getItem("colorSwapState") == "swap") {
      $('body').addClass('dark_body');
    }

    $('.d_box').click(function () {
      if (localStorage.getItem("colorSwapState") == "swap") {
        localStorage.removeItem("colorSwapState");
      } else {
        localStorage.setItem("colorSwapState", "swap");
      }

      $('body').toggleClass('dark_body');
    });


    $('.nav_off').on('click', function () {
      $('.side_menu_main').toggleClass('side_show');
    });


  })

  // back to top
  // bt_top
  $('.bt_top').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 1000);
  });

  $(window).scroll(function () {
    var abc = $(this).scrollTop();

    if (abc > 100) {
      $('.bt_top').fadeIn();
    } else {
      $('.bt_top').fadeOut();
    }
  });

  // Banner slider
  $('.slider_all_item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1000,
    arrows: false,
  });

  //  Member
  $('.mem_row').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    prevArrow: '<i class="fa fa-caret-left prev_arr"></i>',
    nextArrow: '<i class="fa fa-caret-left next_arr"></i>',
    responsive: [

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  // ============= single faq accordion
  $(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.link');
      // Evento
      links.on('click', {
        el: this.el,
        multiple: this.multiple
      }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el;
      $this = $(this),
        $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      };
    }

    var accordion = new Accordion($('#accordion3'), false);
  });


  // ======= mobile accordion
  $(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.link_menu');
      // Evento
      links.on('click', {
        el: this.el,
        multiple: this.multiple
      }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el;
      $this = $(this),
        $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
        $el.find('.submenu_off_menu').not($next).slideUp().parent().removeClass('open');
      };
    }

    var accordion = new Accordion($('#accordion2'), false);
  });





  // login & registration part start========================
  $('.on_log').on('click', function () {
    $('#login_reg').css('display', 'block');
  });

  $('.of_log').on('click', function () {
    $('#login_reg').css('display', 'none');
  });

  $('.registered_form').on('click', function () {
    $('.regs_form').css('display', 'block');

    $('.of_reg').on('click', function () {
      $('.regs_form').css('display', 'none');
    });
  });

  // offcanvas part start===========
  $('.x_bar_off').on('click', function () {
    $('#off_canvas_menu_all_text').css('left', '-100%')
  });

  $('.off-can').on('click', function () {
    $('#off_canvas_menu_all_text').css('left', '0')
  });

  $('.mobile_log_reg_on').on('click', function () {
    $('#login_reg').css('display', 'block')
  });

  $('.regs_form_show').on('click', function () {
    $('#login_reg').css('display', 'block')
  });


  $('.just').click(function () {
    $('.usefull_link').toggleClass('hide_just');
  });
  // offcanvas part start===========


  // preloader
  $(document).ready(function () {
    $(".pre_body").fadeOut(250);
  })

  // counter up
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
    offset: 70,
    beginAt: 100,
    formatter: function (n) {
      return n.replace(/,/g, '.');
    }
  });


});

// wow js
wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0, // default
  mobile: true, // default
  live: true // default
})
wow.init();

var input = document.querySelector("#phone");
window.intlTelInput(input, {
  separateDialCode: true
});

var input = document.querySelector("#mobile");
window.intlTelInput(input, {
  separateDialCode: true
});



// login & registration part end========================



const progress = document.querySelector('.progress');

progress.addEventListener('input', function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, red 0%, green ${value}%, #fff ${value}%, white 100%)`
})