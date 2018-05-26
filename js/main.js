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

// choose

$("#1flo").on('click', function() {

  $.fancybox.open('<div class="message"><p>你/妳也太節儉了！不過有跟上流行喔~</p></div>');

});

$("#2flo").on('click', function() {

  $.fancybox.open('<div class="message"><p>這是個不錯的選擇，不過可以有點新意喔~</p></div>');

});

$("#3flo").on('click', function() {

  $.fancybox.open('<div class="message"><p>看來你/妳是個浪漫的人！也許你/妳準備告白或求婚？</p></div>');

});

$("#no").on('click', function() {

  $.fancybox.open('<div class="message"><p>想很久還是不知道要選哪個嗎？也許看完圖表，你/妳就能找到答案~</p></div>');

});

// many flo

$("#lily").on('click', function() {

  $.fancybox.open('<div class="message"><h3>百合花</h3><p>花語：喜歡你的那種純真</p></div>');

});

$("#sun").on('click', function() {

  $.fancybox.open('<div class="message"><h3>向日葵</h3><p>花語：我深深愛慕著你</p></div>');

});

$("#orchid").on('click', function() {

  $.fancybox.open('<div class="message"><h3>小蒼蘭</h3><p>花語：純潔、幸福、清新舒暢</p></div>');

});

$("#rose").on('click', function() {

  $.fancybox.open('<div class="message"><h3>玫瑰</h3><p>紅/粉玫瑰是情人節的首選花卉。<br>花語：紅玫瑰代表熱戀，真心真意；粉紅玫瑰代表初戀、特別的關懷</p></div>');

});

// other

$("#ever").on('click', function() {

  $.fancybox.open('<div class="message"><h3>不凋花</h3><p>在花朵最新鮮、美麗時採集下來，經過乾燥脫水後，以保鮮液取代水分，讓花朵維持彈性及柔軟的觸感。特殊加工後，可保存半年至三年以上，且不需澆水。由於沒有香味與花粉，也不用擔心是否會過敏。</p></div>');

});

$("#dry").on('click', function() {

  $.fancybox.open('<div class="message"><h3>乾燥花</h3><p>分為工業大量生產、自然風乾製成及天然素材拼接等。其中的水分會完全被抽除，尺寸及顏色也會改變，可經由加工製成多種顏色和造型，而部分花材仍能散發出天然香味。</p></div>');

});

$("#soap").on('click', function() {

  $.fancybox.open('<div class="message"><h3>香皂花</h3><p>經常製作成各種花朵造型，同時具備觀賞性與實用性，是送禮的好選擇。</p></div>');

});

$("#cactus").on('click', function() {

  $.fancybox.open('<div class="message"><h3>多肉植物</h3><p>其中也有花語代表愛情的品種，例：帕米爾玫瑰、山地玫瑰。</p></div>');

});

$("#bear").on('click', function() {

  $.fancybox.open('<div class="message"><h3>玩偶花束</h3><p>將普通花束中的花替代為玩偶，例：小熊。由於不易損壞、保存時間長，成為新型的送禮方式。</p></div>');

});

$("#gift").on('click', function() {

  $.fancybox.open('<div class="message"><h3>花禮</h3><p>以花搭配各式產品，例：香水、保養品。</p></div>');

});

$("#berry").on('click', function() {

  $.fancybox.open('<div class="message"><h3>草莓花束</h3><p>近年韓國流行起來的風潮，由於具季節性、可食用與特殊的水果香深受喜愛。</p></div>');

});

$("#money").on('click', function() {

  $.fancybox.open('<div class="message"><h3>鈔票花束</h3><p>別具一格的創意，將紙鈔折成花朵造型送人。</p></div>');

});