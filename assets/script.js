(function() { // IIFE Begins

  var getBody = document.getElementsByTagName('body');

  // Grabbing options chosen by the user (form values)
  var getImageOption = document.getElementById('image');
  var getBgOption = document.getElementById('background');
  var getFontOption = document.getElementById('font');
  var getBorderOption = document.getElementById('border');
  var getMessageOption = document.getElementById('message');

  var getButton = document.querySelector('pure-button');

  // Grabbing sections of the card that is already dispalyed on the page
  var getCard = document.querySelector('.card');
  var getImage = document.getElementsByTagName('img');
  var getBorder = document.querySelector('.noneBorder');
  var getMessage =  document.querySelector('.sketch');

  var storageArray = [];

  $('#border').click(function(){

    storageArray.push(getImageOption.value, getBgOption.value, getFontOption.value, getBorderOption.value, getMessageOption.value);

    // console.log(storageArray);

    // Creating the card using he users options. This is done by grabbing the
    // storage array length
    getCard.classList.add(storageArray[1] + 'Background');
    getMessage.className = storageArray[2];
    getBorder.classList.add(storageArray[3] + 'Border');
    getMessage.textContent = storageArray[4];

    //
    // pop entire array
    // for (var i = 0; i < storageArray.length; i--) {
    //   storageArray.pop();
    // }

  });
}()); // IIFE Ends
