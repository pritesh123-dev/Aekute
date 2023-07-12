$('form.contact-form').submit(function (event) {
	event.preventDefault();
	$.ajax({
		url: 'https://erp.Aekute.com/contact/form/save',
		type: 'POST',
		dataType: 'json',
		enctype: 'multipart/form-data',
		processData: false,
		contentType: false,
		data: new FormData(this),
		success: function (result) {
			if (result.response == 1) {
				window.location.href = 'thank-you.html';
			} else {
				alert(result.response);
			}
		},
		error: function (error) {
			alert(error.responseText);
			console.log(error);
		},
	});
});

$('input[type=file]').change(function (e) {
	$('.custom-file-label').text(e.target.files[0].name);
});
