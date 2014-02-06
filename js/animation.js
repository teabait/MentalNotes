var clicks = 0;

$('.topcard').click(function (){
    if(clicks === 0) {
      var divs = "<div class='flip'><div class='card'><div class='face front'></div></div></div>";
      $('.wrapper').append(divs);
    };
    displayCardInfo();
    clicks++;
    // $(this).find('.card').addClass('flipped').mouseleave(function(){
    //     $(this).removeClass('flipped');
    // });
    // return false;
});

var displayCardInfo = function () {
    var card = deck.draw();
    var insert = "<h1>" + card.title + "</h1>";
      insert += "<p class='description'>"+ card.description + "</p>";
      insert += "<p class='example'>"+ card.example + "</p>";
    var image = "<img class='back' src='"+ card.image +"'></img>";
    $('.face').html(insert);
    $('.topcard').html(image);
}
