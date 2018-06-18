$(document).ready(function($) {

	$('.input_phone input').mask('+7 (000) 000-00-00');

	$('.search__btn-open').click(function(event) {
		var search = $(this).parents('.search'),
				searchInput = search.find('.search__input');
		search.toggleClass('search_toggle');
		searchInput.focus();
	});
	
	$('.search__input').focusout(function (event) {
		var search = $(this).parents('.search');
		search.removeClass('search_toggle');
	})

	$('.afisha__list').slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		infinite: false,
		dots: true,
		prevArrow: '<button type="button" class="slick-arrows slick-prev"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.5C0 0.671573 0.723232 0 1.61538 0H12.3846C13.2768 0 14 0.671573 14 1.5C14 2.32843 13.2768 3 12.3846 3H1.61538C0.723232 3 0 2.32843 0 1.5Z" transform="translate(14 9) rotate(180)" fill="#3E3E4E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.510859 0.347704C1.1132 -0.182639 2.0084 -0.0966539 2.51035 0.539758L8 7.5L2.51035 14.4602C2.0084 15.0967 1.1132 15.1826 0.510859 14.6523C-0.0914789 14.122 -0.172861 13.1761 0.329088 12.5397L4.30398 7.5L0.329088 2.4603C-0.172861 1.82389 -0.0914789 0.878047 0.510859 0.347704Z" transform="translate(8)" fill="#3E3E4E"/></svg></button>',
		nextArrow: '<button type="button" class="slick-arrows slick-next"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.5C0 0.671573 0.723232 0 1.61538 0H12.3846C13.2768 0 14 0.671573 14 1.5C14 2.32843 13.2768 3 12.3846 3H1.61538C0.723232 3 0 2.32843 0 1.5Z" transform="translate(14 9) rotate(180)" fill="#3E3E4E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.510859 0.347704C1.1132 -0.182639 2.0084 -0.0966539 2.51035 0.539758L8 7.5L2.51035 14.4602C2.0084 15.0967 1.1132 15.1826 0.510859 14.6523C-0.0914789 14.122 -0.172861 13.1761 0.329088 12.5397L4.30398 7.5L0.329088 2.4603C-0.172861 1.82389 -0.0914789 0.878047 0.510859 0.347704Z" transform="translate(8)" fill="#3E3E4E"/></svg></button>'
	})

	var panel = $('.panel');
	$(window).on('load scroll', function(event) {
		var windowScroll = $(window).scrollTop();
		if (windowScroll > 265) {
			panel.addClass('panel_show');
		} else {
			panel.removeClass('panel_show');
		}
	});

	$('.disabled a').click(function(event) {
		event.preventDefault();
	});

	var comments = $('.comments'),
			commentsArrea = $('.comments__head span'),
			commentsValue = $('.comments__item').length,
			commentsForm = $('.comments__form-area'),
			commentsSubmit = $('.comments__form-btn_submit');


	commentsArrea.html(commentsValue);


	commentsForm.change(function(event) {
		if ($(this).val().length > 15) {
			commentsSubmit.removeAttr('disabled');
			commentsSubmit.removeClass('disabled')
		} else {
			commentsSubmit.attr('disabled', 'disabled');
			commentsSubmit.addClass('disabled');
		}
	});


	$('.comments__item-link span').click(function(event) {
		var commentsItem = $(this).parents('.comments__item'),
				commentsName = commentsItem.find('.comments__item-name').text();

		commentsForm.val(commentsName + ", ");
		
		$('html, body').animate({scrollTop: commentsForm.offset().top - 110 + "px"});

		commentsForm.focus();
	});

	$('.btn-comments').click(function(event) {
		comments.slideToggle(500);
		$(this).hide();
		$('.btn-comments-send').show();
		$('html, body').animate({scrollTop: commentsForm.offset().top - 130 + "px"});
		commentsForm.focus();
	});

	$('.btn-comments-send').click(function(event) {
		$('html, body').animate({scrollTop: commentsForm.offset().top - 130 + "px"});
		commentsForm.focus();
	});


	var upBtn = $('.up-btn');

	upBtn.click(function(event) {
		$('html, body').animate({scrollTop:0}, 500)
	});

	$(window).on('load scroll', function() {

		var windowHeight = $(window).height();

		console.log($(window).scrollTop())

		if (windowHeight <= $(window).scrollTop()) {
			upBtn.addClass('up-btn_show');
		} else {
			upBtn.removeClass('up-btn_show');
		}
	});
});
