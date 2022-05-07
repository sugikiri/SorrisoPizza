
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});

// メインビジュアル画像用の記述 https://coco-factory.jp/ugokuweb/move01/6-1-4/
//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: '../images/top/top-view-pc-01.png'},
				{ src: '../images/top/top-view-pc-02.png'},
				{ src: '../images/top/top-view-pc-03.png'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: '../images/top/top-view-sp-01.png' },
				{ src: '../images/top/top-view-sp-02.png' },
				{ src: '../images/top/top-view-sp-03.png' }
			];
		}

//Vegas全体の設定

$('.top-main-visual__image').vegas({
		// overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
		transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 5000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
		animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,//画像設定を読む
		timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
	});

// メインビジュアル画像用の記述ここまで

// メインビジュアルのテキストアニメーションここから
function slideAnime(){
	//====左に動くアニメーションここから===
		$('.leftAnime').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//左から右へ表示するクラスを付与
				//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
				$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
				$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
			}else{
				//左から右へ表示するクラスを取り除く
				$(this).removeClass("slideAnimeLeftRight");
				$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
				
			}
		});
		
	}

  $(window).on('load', function(){
		slideAnime();/* アニメーション用の関数を呼ぶ*/
	});
// メインビジュアルのテキストアニメーションここまで



// メインビジュアルのテキスト順番に読み込みここから
  $(window).on('load', function(){
		slideAnime();/* アニメーション用の関数を呼ぶ*/
	});

  const txts = $('.top-main-visual__titles');
  let txtIndex = -1;
  txts.hide()

  function showNextTxt() {
    txtIndex++;
    txts.eq(txtIndex % txts.length).fadeIn(1000).delay(3100).fadeOut(1000, showNextTxt);
  }
  showNextTxt();
// メインビジュアルのテキスト順番に読み込みここまで



//ブランドセクションの写真をスクロール表示ここから
jQuery(window).on('scroll',function(){
      let buttonSwitch = jQuery('.top-brand__image').offset().top;
      // let buttonSwitch1 = jQuery('.top-brand__image').innerHeight;
      // let buttonSwitch2 = buttonSwitch / 2 ;
      // let innerHeight = jQuery('.top-brand__image').innerHeight;
      // let buttonSwitch1 = buttonSwitch + innerHeight;
      let height = $(window).height();
      if(jQuery(window).scrollTop() > buttonSwitch - height) {
        jQuery('.top-brand__image').addClass('is-active');
        jQuery('.top-brand__name-image').addClass('slideAnimeLeftRight');
        jQuery('.slide-in_inner').addClass('slideAnimeRightLeft');

      }
});
//ブランドセクションの写真をスクロール表示ここまで

// Aboutセクション画像用の記述 https://coco-factory.jp/ugokuweb/move01/6-1-4/
//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: '../images/top/top-about-pc-01.png'},
				{ src: '../images/top/top-about-pc-02.png'},
				{ src: '../images/top/top-about-pc-03.png'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: '../images/top/top-about-sp-01.png' },
				{ src: '../images/top/top-about-sp-02.png' },
				{ src: '../images/top/top-about-sp-03.png' }
			];
		}

//Vegas全体の設定

$('.top-about__image').vegas({
		// overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
		transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 5000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
		animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,//画像設定を読む
		timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
	});

// Aboutセクション画像用の記述ここまで


// トップページのスワイパーここから
var mySwiper = new Swiper('.js-top-products', {
	loop: true,
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	slidesPerView: 1.87,
	centeredSlides: false,

	breakpoints: {
		768: {
			slidesPerView: 3.6,
		}
	},
});
// トップページのスワイパーここまで


// ハンバーガーメニューの動き
jQuery('.js-drawer').on('click',function(e){
	e.preventDefault();
  
	jQuery('.js-drawer').toggleClass('is-active');
	jQuery('.drawer-content').toggleClass('is-active');
	jQuery('.drawer-background').toggleClass('is-active');
	// jQuery('.drawer-content').toggleClass('is-active');
	
	return false;
  });

jQuery('.drawer-background').on('click',function(e){
	e.preventDefault();
  
	jQuery('.js-drawer').removeClass('is-active');
	jQuery('.drawer-content').removeClass('is-active');
	jQuery('.drawer-background').removeClass('is-active');
		
	return false;
  });

jQuery('.drawer-content__items').on('click',function(e){
	// e.preventDefault();
  
	jQuery('.js-drawer').removeClass('is-active');
	jQuery('.drawer-content').removeClass('is-active');
	jQuery('.drawer-background').removeClass('is-active');

	// return false;
  });



// ヘッダーの動きここから
var beforePos = 0;//スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
    var elemTop = $('.top-brand').offset().top;//#area-2の位置まできたら
	var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if(scroll == beforePos) {
		//IE11対策で処理を入れない
    }else if(elemTop > scroll || 0 > scroll - beforePos){
		//ヘッダーが上から出現する
		$('.header').removeClass('UpMove');	//#headerにUpMoveというクラス名を除き
		$('.header').addClass('DownMove');//#headerにDownMoveのクラス名を追加
    }else {
		//ヘッダーが上に消える
        $('.header').removeClass('DownMove');//#headerにDownMoveというクラス名を除き
		$('.header').addClass('UpMove');//#headerにUpMoveのクラス名を追加
    }
    
    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

// ヘッダーの動きここまで


//モーダルの動き
jQuery('.js-modal-close').on('click',function(){
	// e.preventDefault();
	var target = jQuery(this).data('target');
	// jQuery(target).removeClass('is-active');
	jQuery(target).fadeOut();
});

jQuery('.js-modal-open').on('click',function(e){
	e.preventDefault();
	var target = jQuery(this).data('target');
	jQuery(target).fadeIn();
});


//フォームの挙動
let $form = $('#js-form');
$form.submit(function(e) { 
	$.ajax({ 
	 url: $form.attr('action'), 
	 data: $form.serialize(), 
	 type: "POST", 
	 dataType: "xml", 
	 statusCode: { 
		0: function() { 
		  //送信に成功したときの処理
		  $form.slideUp()
		  $('#js-success').slideDown()
		}, 
		200: function() { 
		  //送信に失敗したときの処理
		  $form.slideUp()
		  $('#js-error').slideDown() 
		}
	  } 
	});
	return false; 
  }); 



// ローディングここから
//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 150,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
}
);

$(window).on('load',function(){
    $("#splash").delay(3000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェイドアウト
	$("#splash_logo").delay(10000).fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェイドアウト
        stroke.play();//SVGアニメーションの実行
});
// ローディングここまで


// 扉を開ける演出ここから
$(window).on('load',function(){
	$("#splash_logo").delay(10000).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
	
	//=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
	$("#splash").delay(300).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
		
		$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
		
	});
	
});
// 扉を開ける演出ここまで

// wow使いますよ宣言
new WOW().init();