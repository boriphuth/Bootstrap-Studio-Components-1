jQuery.fn.swapWith = function(to) {
    return this.each(function() {
        var copy_to = $(to).clone(true);
        var copy_from = $(this).clone(true);
        $(to).replaceWith(copy_from);
        $(this).replaceWith(copy_to);
    });
};

$(function(){
  
  var $mainView = $('.quenua-image-galery .main-view'),
      $thumbnails = $('.quenua-image-galery .thumbnail');
  
  
  $thumbnails.on('click', function(e){
    
    var $self = $(this),
        $parent = $self.parents('.quenua-image-galery'),
        $view = $parent.children('.main-view')
        $currentImage = $view.children('img'),
        $selectedImage = $self.children('img');
    
    $currentImage.swapWith($selectedImage)
    
  });
  
  
});