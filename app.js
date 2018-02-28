$().ready( function () {

  //validate the form input fields
  const $form = $('form');
  $form.validate({
    rules: {
      fullname: 'required',
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      },
      confirm_password: {
        required: true,
        equalTo: '#password'
      }
    },
    messages: {
      fullname: 'Please enter your full name',
      email: 'Please enter your email address',
      password: {
        required: 'Please enter a password'
      },
      confirm_password: {
        required: 'Please enter your password',
        equalTo: 'Please enter the same password as above'
      }
    }
  });

  //logging the role options checked
  const checkedBoxes = [];
  const $boxes = $('.checkbox');
  for(let i =  0; $boxes[i]; i++){
    if($boxes[i].checked){
      checkedBoxes.push($boxes[i].val());
      console.log(checkedBoxes);
    }
  }

  function ConvertFormToJSON(form){
    var array = $(form).serializeArray();
    var json = {};

    $.each(array, function() {
      json[this.name] = this.value || '';
    });

    return json;
  }


  $form.submit(function(e) {
    console.log(ConvertFormToJSON($form));

    e.preventDefault();
  });
});
