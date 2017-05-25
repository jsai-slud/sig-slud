$(function() {
  openSubMenu();
})

function openSubMenu() {
  $("body").click(function(e) {
    if (e.target.className.split(" ")[1] !== 'minibutton' && e.target.className !== 'select-menu-button' ){
      closeAll();
    }
  });

  $(".top-menu").on('mousedown','li.minibutton',function(event) {
  //$("li.minibutton").click(function(event) {
    if (event.target.className === 'select-menu-item-heading' || 
        event.target.className === 'select-menu-modal-item' )
      return;
    event.preventDefault();
    var ariaHidden = $(this).children("div").children("div").attr("aria-hidden");

    closeAll();
    buttonPressed( $(this) );

    if ( ariaHidden == "true" ){
      $(this).children("div").children("div").attr('aria-hidden', "false");
    } else {
      $(this).children("div").children("div").attr('aria-hidden', "true");
      buttonRelease();
    }

  });
}

function closeAll() {
    $("div.select-menu-modal").attr('aria-hidden','true');
    buttonRelease();
    //alert("test");
}

function buttonPressed(btn) {
  btn.addClass("btnPressed");
}
function buttonRelease() {
  if ( $("li.menu-items").hasClass("btnPressed") ){
    $("li.menu-items").removeClass("btnPressed");
  }
}
