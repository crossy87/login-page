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

//convert form inputs into an object
  function formObject(form){
    var array = $(form).serializeArray();
    var object = {};

    $.each(array, function() {
      object[this.name] = this.value || '';
    });

    return object;
  }

//submit and console log the data object
  $form.submit(function(e) {
    console.log(formObject($form));
    e.preventDefault();
  });
  
});
