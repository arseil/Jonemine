$(document).ready(function() {
	$('[data-modal=order]').on('click', function() {
		$('.overlay, #order').fadeIn();
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #order, #thanks').fadeOut('slow');
	});


	function validateForms(form){
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				  },
				phone: "required",
				date: "required",
				text: "required",
				checkbox: "required"
			},
			messages: {
				name: {
					  required: "Пожалуйста, введите свое имя",
					  minlength: jQuery.validator.format("Введите {0} символа!")
				},
				phone: "Пожалуйста, введите свой номер телефона",
				date: "Пожалуйста, выберите дату",
				text: "Пожалуйста, оставьте сообщение",
				checkbox: "Это поле обязательно"
			}
		});
	}

	validateForms('#order form');

	$('input[name=phone]').mask("+375 (99) 999-99-99");

	$('form').submit(function(e) {
		e.preventDefault();

		if (!$(this).valid()) {
			return;
		}

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
			$('form').trigger('reset');
		});
		return false;
	});

	
});

$(".portfolio__item_angelina, .btn__portfolio").magnificPopup({
	items: [
		{
			src: 'img/portfolio/angelina/IMG_7859.webp'
		},
		{
			src: 'img/portfolio/angelina/IMG_7858.webp'
		},
		{
			src: 'img/portfolio/angelina/IMG_7860.webp'
		},
		{
			src: 'img/portfolio/angelina/IMG_7861.webp'
		},
		{
			src: 'img/portfolio/angelina/IMG_7862.webp'
		},
		{
			src: 'img/portfolio/angelina/IMG_7863.webp'
		},
		{
			src: 'img/portfolio/angelina/IMG_7864.webp'
		},
		{
			src: 'img/portfolio/angelina/IMG_7865.webp'
		},
		{
			src: 'img/portfolio/angelina/IMG_7866.webp'
		},
		{
			src: 'img/portfolio/angelina/IMG_7867.webp'
		}
	],
	gallery: {
	  enabled: true
	},
	type: "image"
});

$(".portfolio__item_nasty, .btn__portfolio").magnificPopup({
	items: [
		{
			src: 'img/portfolio/nasty/IMG_7678.webp'
		},
		{
			src: 'img/portfolio/nasty/IMG_7779.webp'
		},
		{
			src: 'img/portfolio/nasty/IMG_7780.webp'
		},
		{
			src: 'img/portfolio/nasty/IMG_7781.webp'
		},
		{
			src: 'img/portfolio/nasty/IMG_7785.webp'
		},
		{
			src: 'img/portfolio/nasty/IMG_7793.webp'
		},
		{
			src: 'img/portfolio/nasty/IMG_7797.webp'
		},
		{
			src: 'img/portfolio/nasty/IMG_7799.webp'
		},
		{
			src: 'img/portfolio/nasty/IMG_7803.webp'
		},
		{
			src: 'img/portfolio/nasty/IMG_7808.webp'
		}
	],
	gallery: {
	  enabled: true
	},
	type: "image"
});

$(".portfolio__item_girls, .btn__portfolio").magnificPopup({
	items: [
		{
			src: 'img/portfolio/girls/IMG_7832.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7826.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7827.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7828.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7829.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7830.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7831.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7833.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7834.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7835.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7836.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7837.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7838.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7839.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7840.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7841.webp'
		},
		{
			src: 'img/portfolio/girls/IMG_7842.webp'
		}
	],
	gallery: {
	  enabled: true
	},
	type: "image"
});

$(".portfolio__item_vika, .btn__portfolio").magnificPopup({
	items: [
		{
			src: 'img/portfolio/vika/IMG_7877.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7868.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7869.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7870.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7871.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7872.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7873.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7874.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7875.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7878.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7879.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7880.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7881.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7882.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7883.webp'
		},
		{
			src: 'img/portfolio/vika/IMG_7884.webp'
		}
	],
	gallery: {
	  enabled: true
	},
	type: "image"
});

$(".portfolio__item_kristina, .btn__portfolio").magnificPopup({
	items: [
		{
			src: 'img/portfolio/kristina/IMG_7847.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7843.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7844.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7845.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7846.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7848.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7849.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7850.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7851.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7852.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7853.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7854.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7855.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7856.webp'
		},
		{
			src: 'img/portfolio/kristina/IMG_7857.webp'
		}
	],
	gallery: {
	  enabled: true
	},
	type: "image"
});

$(".portfolio__item_cup, .btn__portfolio").magnificPopup({
	items: [
		{
			src: 'img/portfolio/cup/IMG_9156.webp'
		},
		{
			src: 'img/portfolio/cup/IMG_8781.webp'
		},
		{
			src: 'img/portfolio/cup/IMG_8874.webp'
		}
	],
	gallery: {
	  enabled: true
	},
	type: "image"
});

$(".portfolio__item_artem, .btn__portfolio").magnificPopup({
	items: [
		{
			src: 'img/portfolio/artem/IMG_4911.webp'
		},
		{
			src: 'img/portfolio/artem/IMG_4910.webp'
		},
		{
			src: 'img/portfolio/artem/IMG_4880.webp'
		}
	],
	gallery: {
	  enabled: true
	},
	type: "image"
});