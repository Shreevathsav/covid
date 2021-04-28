// function required(){
//   console.log("hi");
//   var username_feild = document.getElementById("floatingInput").value;
//   var password_feild = document.getElementById("floatingPassword").value;
//   if(username_feilds == "" || password_feild == ""){
//     alert('Enter Username and Password');
//     return false;
//   }
//
//   }
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
