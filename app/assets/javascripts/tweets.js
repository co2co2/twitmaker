document.addEventListener('DOMContentLoaded', function(){
  var form =document.querySelector('#new_tweet');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      $.ajax({
        url: form.getAttribute('action'),
        method: form.getAttribute('method'),
        dataType:"html",
        data:$(form).serialize()
      }).done(function(data){
        var inputField = document.querySelector('#tweet_message')
        inputField.value = "";
        var list = document.querySelector('.tweets')
        $(list).prepend(data)

      })

    })

})// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
