(function() { // IIFE Begins
  var getImageOption = document.getElementById('image');
  var getBgOption = document.getElementById('background');
  var getFontOption = document.getElementById('font');
  var getBorderOption = document.getElementById('border');
  var getMessage = document.getElementById('message');

  var getButton = document.querySelector('pure-button');

  var storageArray = [];

  // console.dir(getBgOption);

  $('#message').click(function(){
    // console.dir(getBgOption);

    storageArray.push(getImageOption.value, getBgOption.value, getFontOption.value, getBorderOption.value, getMessage.value);
    // console.log(storageArray);

    // pop entire array
    for (var i = 0; i < storageArray.length; i--) {
      storageArray.pop();
    }

    console.log(storageArray + 'this one');
    // stroage array holds all data. if storagearray[1]=.. do this.
  });
}()); // IIFE Ends
