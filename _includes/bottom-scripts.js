// ==== Used more then once ====
  var search = document.querySelector('.search');
  var bodySelector = document.querySelector('body');
  var placeholder = document.querySelector("#placeholder");

// ==== List.js search function ====
  var listNames = ['primary-list', 'variations-list', 'generic-list', 'outdated-list'];
  var lists = listNames.map(function (name) { return new List(name, { valueNames: ['n'] }); });

  var searchTrigger = function (e) {
    var searchValue = this.value;
    lists.forEach(function (list) { list.search(searchValue); }); 

    // ▼ Fixes weird possible Firefox bug that triggers scroll up when pressing CTRL
    search.addEventListener('keydown', function(event) {
      if (event.ctrlKey) { void(0); } 
      else { document.documentElement.scrollTo({ top: 0 }); }
    });

    if (!search.value == '') { placeholder.classList.add('hide'); }
    else { placeholder.classList.remove('hide'); }
  };

// ==== Reset button function and List.js search clearing ====
  var resetButton = document.querySelector('button.reset');

  resetButton.addEventListener('click', function () {
    if (!search.value == '') {
      search.value = '';
      lists.forEach(function (list) { list.search(); } );
      document.documentElement.scrollTo({ top: 0 });
      placeholder.classList.remove('hide');
    }
  });

// ▼ Trigger search by either typing, cutting (for resetting the search) or pasting
  ['keyup', 'paste', 'cut'].forEach(function(e) { search.addEventListener(e, searchTrigger); });

// ==== Count the icons and print the results ====
  document.getElementById("total-icon-count").innerHTML = document.querySelectorAll('.n').length;
  document.getElementById("icon-amount-pri").innerHTML  = document.querySelectorAll('#primary-list .n').length;
  document.getElementById("icon-amount-var").innerHTML  = document.querySelectorAll('#variations-list .n').length;
  document.getElementById("icon-amount-gen").innerHTML  = document.querySelectorAll('#generic-list .n').length;
  document.getElementById("icon-amount-out").innerHTML  = document.querySelectorAll('#outdated-list .n').length;

// ==== Radio button functions ====
  // ▼ Enable / change icon grid
  var iconGridRadios = document.querySelectorAll('input[type=radio][name="iconGrid"]');
  iconGridRadios.forEach((radio) => { radio.addEventListener('change', () => bodySelector.dataset.iconGrid = radio.value); });

  // ▼ Change theme color
  var themeColorRadios = document.querySelectorAll('input[type=radio][name="themeColor"]');
  themeColorRadios.forEach((radio) => { radio.addEventListener('change', () => bodySelector.dataset.themeColor = radio.value); });

  // ▼ Change icon size
  var iconSizeRadios = document.querySelectorAll('input[type=radio][name="iconSize"]');
  iconSizeRadios.forEach((radio) => { radio.addEventListener('change', () => bodySelector.dataset.iconSize = radio.value); });

  // ▼ Disable focus for radio button after event (UX tweak)
  var allRadios = document.querySelectorAll('input[type=radio]');
  allRadios.forEach((radio) => { radio.addEventListener('change', () => radio.blur()); });

// ==== Keyboard hotkeys (Hotkeys.js) ====
  hotkeys('ctrl+.,1,num_1,2,num_2,3,num_3,4,num_4,q,w,e,a,s,d,z,x,c', function (event, handler){
    switch (handler.key) {
      case 'ctrl+.':
                document.querySelector(".search").focus();                        break;
      case '1': case 'num_1':
                document.querySelector("#primary").scrollIntoView();              break;
      case '2': case 'num_2':
                document.querySelector("#variations").scrollIntoView();           break;
      case '3': case 'num_3':
                document.querySelector("#generic").scrollIntoView();              break;
      case '4': case 'num_4':
                document.querySelector("#outdated").scrollIntoView();             break;
      case 'q': document.querySelector("input[value='off']").click();             break;
      case 'w': document.querySelector("input[value='icon-grid']").click();       break;
      case 'e': document.querySelector("input[value='alt-icon-grid']").click();   break;
      case 'a': document.querySelector("input[value='dark']").click();            break;
      case 's': document.querySelector("input[value='amoled']").click();          break;
      case 'd': document.querySelector("input[value='light']").click();           break;
      case 'z': document.querySelector("input[value='big']").click();             break;
      case 'x': document.querySelector("input[value='medium']").click();          break;
      case 'c': document.querySelector("input[value='small']").click();           break;
    }
  });

// ==== ESC button event ====
  // Clear search and unfocus from search field
  // Not using Hotkeys.js, so that it works even when focused on text field
  window.onkeydown = function(e) {
    if (e.keyCode == 27) {
      e.preventDefault();
      resetButton.click();
      search.blur();
    }
  };