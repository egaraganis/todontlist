 $(document).ready(function(){

  $('form').on('submit', function(){
      var item = $('form input');
      var todo = {item: item.val()};
      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          console.log('hey');
          location.reload();
        }
      });
      return false;
  });

  $('li').on('click', function(){
      var item = $(this).text().trim(/ /g, "-");
      var todo = {item: item};
      $.ajax({
        type: 'DELETE',
        url: '/todo/',
        data: todo,
        error: function(data){
          //do something with the data via front-end framework
          console.log('heyyyy');
          location.reload();
        }
      });
  });

});
