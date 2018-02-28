$().ready( function () {

  const $form = $('form');
  // const $name = $('#fullname').val();
  // const $email = $('#email').val();
  // const $password = $('#password').val();
  // const $passwordConfirm = $('#confirm-password').val();

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
  // const checkedBoxes = [];
  // const $boxes = $('.checkbox');
  // for(let i =  0; $boxes[i]; i++){
  //   if($boxes[i].checked){
  //     checkedBoxes.push($boxes[i].val());
  //     console.log(checkedBoxes);
  //   }
  // }


});












// window.addEventListener('DOMContentLoaded', () => {
//
//   const form = document.querySelector('form');
//   const name = document.getElementById('fullname');
//   const email = document.getElementById('email');
//   const password = document.getElementById('original-password');
//   const passwordConfirmation = document.getElementById('confirm-password');
//
//
//   const checkedValue = [];
//   const inputElements = document.getElementsByClassName('checkbox');
//
//   form.addEventListener('change', () => {
//     for(let i=0; inputElements[i]; ++i){
//       if(inputElements[i].checked){
//         checkedValue.push(inputElements[i].value);
//       }
//
//     }
//     console.log('Name:', name.value, 'Email:', email.value, 'Role:', checkedValue, 'password:', password.value, passwordConfirmation.value);
//   });
//
//
// });
