// div.container を表示/非表示
function displayContainer(sign) {
  if (sign) {
  	$('div.container-back').addClass('slide', 500);
  } else {
  	$('div.container-back').removeClass('slide', 250);
  }
}
