$('#callbackService button').on('click',function(e) {
  $(this).parents('form').validate({
    rules: {
      firstname: "required",
      lastname: "required",
      dataProtection: "required",
      email: {required:true, email:true},
    },
    messages: {
      firstname: "Bitte tragen Sie Ihren Vornamen ein",
      lastname: "Bitte tragen Sie Ihren Nachnamen ein",
      dataProtection: "Bitte akzeptieren Sie die Datenschutzerklärung",
      email: { required: "Bitte tragen Sie Ihre E-Mail Adresse ein", email: "Bitte tragen Sie eine gültige E-Mail Adresse ein" },
    }, 
    submitHandler: function(form) {
      $(form).on('submit', (e) => e.preventDefault());
      fetch(document.location.origin +"/classes/emailAjax.php", {
        method: "POST",
        body: JSON.stringify($(this).serializeArray()),
        headers: { "Content-Type": "application/json" }
      }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));
    }
  })
})
