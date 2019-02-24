'use strict';
// Add Event Listeners here:
function listenKeyPress(){
  $(document).on('keydown','.cell:focus',function(e){
    e.preventDefault();
    console.log(e.which);
  });
}

function listenOnHover(){
  $('.grid').on('mouseover','.cell:not(.active)',function(e){
    $(e.target).focus();
  });
}

function listenOnFocus(){
  $('.grid').on('focus','.cell:not(.active)',function(e){
    $(e.target).addClass('active');
  });
}

function handleRedrawGridBtn(){
  $('.controls button').on('click',function(e){
    createAndPlaceRows(8);
  });
}

// When DOM is ready:
$(() => {
  createAndPlaceRows(8);

  // Bind your event listeners here:
  listenOnHover();
  listenOnFocus();
  handleRedrawGridBtn();

  //Testing Keyboard functionality
  listenKeyPress();
});

// ===============================
// Code below is to automate grid creation
// You can ignore this!
// ===============================
function createRow(cellCount) {
  let row = '<div class="row">';
  let str = '<button class="cell">&nbsp;</button>'; 
  // ^ changed div to button to allow focus for both mouseover & keyboard
  for (let i = 0; i < cellCount; i++) {
    row += str;
  }
  row += '</div>';
  return row;
}

function createRows(n) {
  let rows = '';
  for (let i = 0; i < n; i++) {
    rows += createRow(n);
  }
  return rows;
}

function createAndPlaceRows(n) {
  $('.cell').remove(); // Clear all current cells and listeners
  const rows = createRows(n);
  $('.grid').html(rows);
  const cells = $('.cell');
  cells.css({ height: cells.width() });
}
