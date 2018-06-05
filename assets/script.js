(function() { // IIFE Begins

  var getBody = document.getElementsByTagName('body');

  // Grabbing options chosen by the user (form values)
  var getImageOption = document.getElementById('image');
  var getBgOption = document.getElementById('background');
  var getFontOption = document.getElementById('font');
  var getBorderOption = document.getElementById('border');
  var getMessageOption = document.getElementById('message');

  // Grabbing the form button
  var getButton = document.querySelector('pure-button');

  // Grabbing sections of the card that is already dispalyed on the page
  var getCard = document.querySelector('.card');
  var getImage = document.querySelector('img');
  var getBorder = document.querySelector('.noneBorder');
  var getMessage =  document.querySelector('.sketch');

  var storageArray = [];

  $('#border').click(function(){

    // Pushing all the values from the form into an array
    storageArray.push(getImageOption.value, getBgOption.value, getFontOption.value, getBorderOption.value, getMessageOption.value);

    console.dir(getCard);

    // Creating the card using he users options. This is done by grabbing the
    // storage array length.

    getImage.src = 'assets/' + storageArray[0] + '.jpg';
    getCard.classList.add(storageArray[1] + 'Background');
    getMessage.className = storageArray[2];
    getBorder.classList.add(storageArray[3] + 'Border');
    getMessage.textContent = storageArray[4];

    // pop entire array
    // for (var i = 0; i < storageArray.length; i--) {
    //   storageArray.pop();
    // }

  }); // Click function ends
}()); // IIFE Ends
