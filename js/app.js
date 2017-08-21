let array = [$('b1'), $('b2'), $('b3'), $('b4'), $('b5'), $('b6'), $('b7'), $('b8'), $('b9') ,$('b10'), $('b11'), $('b12') ];

var counter = 0;
for (i = 0; i < array.length; i++){
  $.ajax({
    url: 'https://randomuser.me/api/?results=1',
    dataType: 'JSON',
    success: function(data) {
      let stuff = data.results[0].picture.large;
      let firstname = data.results[0].name.first;
      let name = firstname + ' ' + data.results[0].name.last;
      let uemail = data.results[0].email;
      let ucity = data.results[0].location.city;

      let userName = data.results[0].login.username;
      let cell = data.results[0].cell;
      let detailLocation = data.results[0].location.street + ', ' + data.results[0].location.city + ', ' + data.results[0].location.state + ', ' + data.results[0].location.postcode;
      let birthdate = data.results[0].dob;
      counter += 1;

      $(`.b${counter}`).append(`<img src=${stuff} height="130" width="130">`);
      $(`.ul${counter} li:nth-child(1)`).append(name);
      $(`.ul${counter} li:nth-child(2)`).append(uemail);
      $(`.ul${counter} li:nth-child(3)`).append(ucity);   

      $(`.b${counter} li:nth-child(4)`).append(userName);
      $(`.b${counter} li:nth-child(5)`).append(cell);
      $(`.b${counter} li:nth-child(6)`).append(detailLocation);
      $(`.b${counter} li:nth-child(7)`).append(birthdate);

      $(`.b${counter} li:nth-child(4)`).hide();
      $(`.b${counter} li:nth-child(5)`).hide();
      $(`.b${counter} li:nth-child(6)`).hide();
      $(`.b${counter} li:nth-child(7)`).hide();

    }
  });
}



$('td').click(function(){
  $('ul li:nth-child(3)', this).css('border-bottom', 'solid black');

  $('ul li:nth-child(4)', this).show();
  $('ul li:nth-child(5)', this).show();
  $('ul li:nth-child(6)', this).show();
  $('ul li:nth-child(7)', this).show();

  var clone = $(this).clone();  
  // console.log(clone);
  $('.modal_window').append('<p>x</p>');
  $('.modal_window').append(clone);

  clone.css('border', 'none');
  $('.modal_window').css('box-shadow', '1000px 1000px 1000px 5000px rgba(0, 0, 0, 0.5)');
  
  $('ul li:nth-child(4)', this).hide();
  $('ul li:nth-child(5)', this).hide();
  $('ul li:nth-child(6)', this).hide();
  $('ul li:nth-child(7)', this).hide();

});




