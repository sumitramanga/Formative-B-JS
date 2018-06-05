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

  $('#message').click(function(){

    // Pushing all the values from the form into an array
    storageArray.push(getImageOption.value, getBgOption.value, getFontOption.value, getBorderOption.value, getMessageOption.value);

    console.log(storageArray);

    // Creating the card using he users options. This is done by grabbing the
    // storage array length.

    getImage.src = 'assets/' + storageArray[0] + '.jpg';
    getCard.classList.add(storageArray[1] + 'Background');
    getMessage.className = storageArray[2];
    getMessage.textContent = storageArray[4];


    // This was a previous option used when changing the values in the HTML to
    // according the border option name (<option value="smalleBorder">Thin</option>)
    // getBorder.classList.add(storageArray[3] + 'Border');


    // Old method
    // for (var i = storageArray.length; i > 0; i--) {
    //   storageArray.pop();
    // }


    // Adds or removes border. Remove method is used to to remove previous classes
    // the user have submitted to the DOM
    if (getBorderOption.value === 'none') {
        getBorder.classList.remove('smallBorder', 'bigBorder', 'filledBorder');
        getBorder.classList.add('noneBorder');

    } else if (getBorderOption.value === 'thin') {
      getBorder.classList.remove('noneBorder', 'bigBorder', 'filledBorder');
      getBorder.classList.add('smallBorder');

    } else if(getBorderOption.value === 'thick') {
      getBorder.classList.remove('smallBorder', 'noneBorder', 'filledBorder');
      getBorder.classList.add('bigBorder');

    } else {
      getBorder.classList.remove('smallBorder', 'bigBorder', 'noneBorder');
      getBorder.classList.add('filledBorder');
    }

    storageArray.length = 0;
    console.log(storageArray);
  }); // Click function ends
}()); // IIFE Ends
