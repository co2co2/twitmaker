document.addEventListener('DOMContentLoaded', function(){
  var form =document.querySelector('#new_tweet');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      $.ajax({
        url: form.getAttribute('action'),
        method: form.getAttribute('method'),
        dataType: "json",
        data: $(form).serialize()
      }).done(function(data){
        var list = document.querySelector('.tweets')
            li = document.createElement('li')
            var li = `<li class="tweet">
 				      <p>${data.message}</p>
 				    <time>${data.created_at.strftime('%b %e, %l:%M %p')}</time>
			     </li>`;
        $(list).prepend(li)
        var inputField = document.querySelector('#tweet_message')
        inputField.value = "";


      })


    })

})// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
