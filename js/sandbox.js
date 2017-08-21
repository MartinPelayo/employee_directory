let array = [$('b1'), $('b2'), $('b3'), $('b4'), $('b5'), $('b6'), $('b7'), $('b8'), $('b9') ,$('b10'), $('b11'), $('b12') ];

var studentObj = {
 

  tableData: [$('b1'), $('b2'), $('b3'), $('b4'), $('b5'), $('b6'), $('b7'), $('b8'), $('b9') ,$('b10'), $('b11'), $('b12') ],

  ajaxCall: function(){
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
        let picture = data.results[0].picture.large;
        let fistname = data.results[0].name.first;
        let lastname = data.results[0].name.last;
        let userName = data.results[0].login.username;
        let email = data.results[0].email;
        let cell = data.results[0].cell;
        let city = data.results[0].location.city;
        let detailLocation = data.results[0].location.street + ', ' + data.results[0].location.city + ', ' + data.results[0].location.state + ', ' + data.results[0].location.postcode;
        let birthdate = data.results[0].dob;
        console.log(birthdate);
      }
    });
  }

  // magicFunc: function(){

  // }

};

studentObj.ajaxCall();


// console.log(studentObj.ajaxCall().cell);






















// for (i = 0; i < array.length; i++){

//   $.ajax({
//     url: 'https://randomuser.me/api/?results=1',
//     dataType: 'JSON',
//     success: function(data) {
//       let stuff = data.results[0].picture.large;
//       let ufname = data.results[0].name.first;
//       let ulname = data.results[0].name.last;
//       let uemail = data.results[0].email;
//       let ucity = data.results[0].location.state;
//       counter += 1;

//       $(`.b${counter}`).append(`<img src=${stuff} height="150" width="150">`);
//       $(`.ul${counter} li:nth-child(1)`).append(ufname + ' ' + ulname);
//       $(`.ul${counter} li:nth-child(2)`).append(uemail);
//       $(`.ul${counter} li:nth-child(3)`).append(ucity);    

//       $(stuff).click(function(){
//         console.log('child');

//       });


//     }
//   });
// }