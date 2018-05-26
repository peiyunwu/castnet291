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

  $.fancybox.open('<div class="message"><p>你/妳也太節儉了！不過有跟上流行喔~</p></div>');

});

$("#2flo").on('click', function() {

  $.fancybox.open('<div class="message"><p>這是個不錯的選擇，不過可以有點新意喔~</p></div>');

});

$("#3flo").on('click', function() {

  $.fancybox.open('<div class="message"><p>看來你/妳是個浪漫的人！也許你/妳準備告白或求婚？</p></div>');

});

// banner
