//= require jquery
//= require_tree .


$(function(){

	$('.toggle li').click(function(){
		$(this).addClass('active').siblings().removeClass();
	});

	$('#park-bike').click(function(){
		$('body').removeClass().addClass('park-bike');

	});

	$('#find-bike').click(function(){
		$('body').removeClass().addClass('find-bike');
	});

	$('.account-btn').click(function(){
		$('.account-overlay').fadeIn();
	});

	$('.close').click(function(){
		$('.account-overlay').fadeOut();
	})

});