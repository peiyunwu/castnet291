// smooth

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// pop up

$("#1flo").on('click', function() {

  $.fancybox.open('<div class="message"><p>你/妳也太節儉了！不過有跟上流行喔~</p><img src="https://api.fnkr.net/testimg/600x400/00CED1/FFF/?text=img+placeholder"></div>');

});
