 (function($) {
 
    $.fn.visible = function(partial) {
      let $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
  
      return compareBottom <= viewBottom && compareTop >= viewTop;
    };
  })(jQuery);
    
  /* Animates selected elements into the page when scrolling to them */
  
  let didScroll = false;
  let windowOffset = $(window).scrollTop();
  let $animatedEl = $('.animateIn');
  let $fadeAni = $('.fadeAni');
  
  let userDidScroll = () => {
    didScroll = true;
    windowOffset = $(window).scrollTop();
  }
  
  let elementSniper = () => {
    $animatedEl.each((i, element) => {
      let $t = $(element);
      if($t.visible(true)) {
        $t.addClass('slide-in');
      }
    })
  }
  
  let elementSniperFade = () => {
    $fadeAni.each((i, element) => {
      let $t = $(element);
      if($t.visible(true)) {
        $t.addClass("fadeInNow");
      }
    })
  }
  
  // these two functions will execute again during page scroll
  elementSniper();
  elementSniperFade();
  
  let scrollTicker = () => {
    if(didScroll) {
      elementSniper();
      elementSniperFade();
      didScroll = false;
    }
    requestAnimationFrame(scrollTicker)
  }
  
  requestAnimationFrame(scrollTicker)
  $(window).on('scroll', userDidScroll);
  
  
  
  //add styling to mobile navigation
  
  $("#mobile-nav-btn").on("click", function () {
    if ($('.navbar-collapse').hasClass('in')) {
      $('.navbar-default').removeClass('on-collapse');
    } else {
      $('.navbar-default').slideDown("slow", function () {
        $(this).addClass('on-collapse');
      });
    }
  });
  
  
  let modal = $('#myModal');
  let img = $(".myImg");
  let modalImg = $("#img01");
  let captionText = $("#caption");
  
  img.on('click', function(){
      modal.css('display', 'block');
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  });
  
 
 