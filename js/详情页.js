//var Num=$('#modal-sku-price2').text();
//var n= parseInt($('.total-val').text());
$(function(){
	$('.item_price_exposure').click(function(){
		alert(123)
	});
	$('.img-box').click(function(){
		$(this).toggleClass('select')
	})
//	$('.styles-box>div').click(function(){
//		$(this).toggleClass('select').siblings().removeClass('select')
//		
//	})
	$('.img1').click(function(){
		if($(".img1").hasClass("select")){

			return;

		}else{
//			$('.total-val').text(1);
			$('.skuimg-wrapper>img').attr('src','img/08a22bc74e6165c9a81d8c299d50fc87.jpg')
			$('#modal-sku-price2').text('56988')
			$('#sku-price').text('56988')
			$('.img1').addClass('select').siblings().removeClass('select')
		}
		
		
		
	})
	$('.img2').click(function(){
//		$('.skuimg-wrapper>img').attr('src','img/39e2c25e5881bfdbb4fbcafc87fdfdc9.jpg')
//		$('#modal-sku-price2').text('22988')
//		$('#sku-price').text('22988')
//		$('.img2').addClass('select').siblings().removeClass('select')
		if($(".img2").hasClass("select")){

			return;

		}else{
			$('.total-val').text(1);
			$('.skuimg-wrapper>img').attr('src','img/39e2c25e5881bfdbb4fbcafc87fdfdc9.jpg')
			$('#modal-sku-price2').text('22988')
			$('#sku-price').text('22988')
			$('.img2').addClass('select').siblings().removeClass('select')
		}
		
	})
	$('.img3').click(function(){
//		$('.skuimg-wrapper>img').attr('src','img/84f5071984724fd8b4137e01b388a091.jpg')
//		$('#modal-sku-price2').text('8988')
//		$('#sku-price').text('8988')
//		$('.img3').addClass('select').siblings().removeClass('select')
		if($(".img3").hasClass("select")){

			return;

		}else{
			$('.total-val').text(1);
			$('.skuimg-wrapper>img').attr('src','img/84f5071984724fd8b4137e01b388a091.jpg')
			$('#modal-sku-price2').text('8988')
			$('#sku-price').text('8988')
			$('.img3').addClass('select').siblings().removeClass('select')
		}
	})
	$('.img4').click(function(){
//		$('.skuimg-wrapper>img').attr('src','img/b0b1fd5d1c7c2c8be7dec8dd60289807.jpg')
//		$('#modal-sku-price2').text('46988')
//		$('#sku-price').text('46988')
//		$('.img4').addClass('select').siblings().removeClass('select')
		
		if($(".img4").hasClass("select")){

			return;

		}else{
			$('.total-val').text(1);
			$('.skuimg-wrapper>img').attr('src','img/b0b1fd5d1c7c2c8be7dec8dd60289807.jpg')
			$('#modal-sku-price2').text('46988')
			$('#sku-price').text('46988')
			$('.img4').addClass('select').siblings().removeClass('select')
		}
	})
	$('.img5').click(function(){
//		$('.skuimg-wrapper>img').attr('src','img/eba8551532e4539ca5d6b3c600adc724.jpg')
//		$('#modal-sku-price2').text('19988')
//		$('#sku-price').text('19988')
//		$('.img5').addClass('select').siblings().removeClass('select')
		if($(".img5").hasClass("select")){

			return;

		}else{
			$('.total-val').text(1);
			$('.skuimg-wrapper>img').attr('src','img/eba8551532e4539ca5d6b3c600adc724.jpg')
			$('#modal-sku-price2').text('19988')
			$('#sku-price').text('19988')
			$('.img5').addClass('select').siblings().removeClass('select')
		}
	})
	
	
	$('.title-items>li').click(function(){
		
		$(this).toggleClass('select').siblings().removeClass('select');
//		alert($(this).index())
		$('.title-content>div').eq($(this).index()).addClass('select').siblings().removeClass('select')
	})
	
//	
	ra();
});


function ra(){
	var Num=$('#modal-sku-price2').text();
	var n= parseInt($('.total-val').text());
	$('.reduce-btn').click(function(){
		
		Num=parseInt($('#modal-sku-price2').text());
		
		if(n==1) return;
		$('.total-val').text(n-1)
		n= parseInt($('.total-val').text());
		$('#modal-sku-price2').text(Num-Num/(n+1))
		
		
	})
	$('.add-btn').click(function(){
		n= parseInt($('.total-val').text());
		Num=parseInt($('#modal-sku-price2').text());
		$('.total-val').text(n+1)
		n=parseInt($('.total-val').text());
		$('#modal-sku-price2').text(Num+Num/(n-1))

	})
}
