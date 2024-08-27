$(function() {
  setModal();
})

function setModal() {
  //背景がクリックされた時にモーダルウィンドウを閉じる
  $("div#modal div.container-back").click(function(e) {
    if (e.target.className === 'container-back slide')
      displayModal(false);
  });

  //リンクがクリックされた時にAjaxでコンテンツを読み込む
  $("a.modal").click(function(event) {
    //event.preventDefault();
    //$.ajaxSetup({
    //  beforeSend: function(xhr){
    //    xhr.overrideMimeType("text/html; charset=iso-2022-jp");
    //  }
    //});
    $("div#modal div.container p.article").load($(this).attr("href"), data="html", onComplete);
    return false;
  });

  //コンテンツの読み込み完了時にモーダルウィンドウを開く
  function onComplete() {
    displayModal(true);
    $("div#modal div.container a.close").click(function() {
      displayModal(false);
      return false;
    });
  }
}

//モーダルウィンドウを開く
function displayModal(sign) {
  if (sign) {
    // div#modal を表示
    $("div#modal").addClass('show');
    
    // div.container をスライドイン
    displayContainer(sign);
    $('div.container-back').animate({scrollTop: 0}, 1);

    // div.background をフェードイン
    $("div.background").fadeIn(500);
    // 背景のスクロール禁止
    $('body').addClass('noscroll');
  } else {
    // div.container をスライドアウト
    displayContainer(sign);

    // div.background をフェードアウト
    $("div.background").fadeOut(250, function() {
      // div#modal 全体を非表示
      $("div#modal").removeClass('show');
      // 背景のスクロール許可
      $('body').removeClass('noscroll');
    });
  }
}

// div.container を表示/非表示(引数 sign は ie9-transition.js との互換)
function displayContainer(sign) {
  if (sign) {
    $("div.container-back").addClass("slide");
  } else {
    $("div.container-back").removeClass("slide");
  }
}
