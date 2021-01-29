console.log('js');
$(document).ready(onReady);

function onReady() {
  console.log('soready.');

  const h1 = $('h1');
  console.log('h1', h1);

  const h2 = $('h2');
  //make it blue

  h2.css('background-color', 'blue');
  // same as ...
  //$('h2').css('background-color','green);
  $('h2').addClass('froggy');

  // change the text
  const h1text = $('h1').text();
  console.log('h1text is', h1text);

  const louderText = h1text.toUpperCase() + '!!!!';
  $('h1').text(louderText);
  $('#submitBtn').on('click', whenIAddAHarmonica());
}

function whenIAddAHarmonica() {
  //stff to do when we add a harmonica

  console.log('click the btn');

  //grab that data
  let brand = $('#brand').val();
  console.log('brand is', brand);

  // refender form data to the dom
  $('harmonicas').append(`
  <li>
  brand is: ${brand}
  <button class="deleteBtn">Delete Me</button>
  </li>
  `);
}
