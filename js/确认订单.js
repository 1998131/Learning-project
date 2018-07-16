$(function(){
	$(window).scroll(function(){
		var top=$(this).scrollTop()
//		console.log()
		if(top<=230){
//			console.log(123)			
			$('#goTop').css({display:'none'})
			$('.lineb').removeClass('line')
		}else{
			
			$('#goTop').css({display:'block'})
			$('.lineb').addClass('line')
		}
	})
})
