var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  })

}
/*  */
$(document).ready(function () {
 /* 
 * esta funcion hace que cierre el menu  en tamano movil 
 */
  $('.BotonCerrarMenu').click(function (e) { 
    $('#navbarSupportedContent').toggleClass('show');
    
    
  });
});