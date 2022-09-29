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