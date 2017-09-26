
  $(document).ready(function () {

      // Afficher l'image dans grande DIV galérie
    var src=$(this).eq(0).attr('src');
    var titre=$(this).eq(0).attr('alt');
    // pour attribuer la valeur de src de la première image à la source de galerie
    $('#galerie img').attr('src',src);
    $('#galerie img').attr('alt',titre);
    $('.thumbnail img').css('border', '2px solid red');
    // Affacter la valeur titre
    $('.titre').html(titre);
    $('.thumbnail').eq(0).addClass(".selected");
    // Afficher les autres images
    $('.thumbnail').click(function() {
      var src=$(this).attr('src');
      var titre=$(this).attr('alt');
      // pour attribuer la valeur de src de la première image à la source de galerie
      $('#galerie img').attr('src',src);
      $('#galerie img').attr('alt',titre);
      $('.thumbnail img').css('border', '2px solid red');
      // Affacter la valeur titre
      $('.titre').html(titre);
});





// fin ready function
    });
// http://www.dailymotion.com/video/xduqfh_tutoriel-creer-une-galerie-avec-jqu_lifestyl
