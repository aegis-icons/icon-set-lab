// ==== Used more then once ====
  var search = document.querySelector('.search');
  const bodySelector = document.querySelector('body');

// ==== List.js search function ====
  var listNames = ['primary-list', 'variations-list', 'generic-list', 'outdated-list'];
  var lists = listNames.map(function (name) { return new List(name, { valueNames: ['n'] }); });

  var searchTrigger = function (e) {
    var searchValue = this.value;
    lists.forEach(function (list) { list.search(searchValue); }); 
    document.documentElement.scrollTo({ top: 0 });
  };

// ==== Reset button function and List.js search clearing ====
  var resetButton = document.querySelector('button.reset');
  
  resetButton.addEventListener('click', function (test) {
    if (!search.value == '') {
      search.value = '';
      lists.forEach(function (list) { list.search(); } );
      document.documentElement.scrollTo({ top: 0 });
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

  // ==== Change icon grid ====
  var iconGridRadios = document.querySelectorAll('input[type=radio][name="iconGrid"]');
  iconGridRadios.forEach((radio) => {
    radio.addEventListener('change', () => bodySelector.dataset.iconGrid = radio.value);
  });

  // ==== Change theme color ====
  var themeColorRadios = document.querySelectorAll('input[type=radio][name="themeColor"]');
  themeColorRadios.forEach((radio) => {
    radio.addEventListener('change', () => bodySelector.dataset.themeColor = radio.value);
  });

  // ==== Change icon size ====
  var iconSizeRadios = document.querySelectorAll('input[type=radio][name="iconSize"]');
  iconSizeRadios.forEach((radio) => {
    radio.addEventListener('change', () => bodySelector.dataset.iconSize = radio.value);
    //radio.addEventListener('change', () => document.documentElement.scrollTo({ top: 0 }));
  });

  // ==== Disable focus for radio button after event (UX tweak) ====
  var allRadios = document.querySelectorAll('input[type=radio]');
  allRadios.forEach((radio) => {
    radio.addEventListener('change', () => radio.blur());
  });

  // ==== Keyboard hotkeys ====
  hotkeys('ctrl+.,1,2,3,4,q,w,e,a,s,d,z,x,c', function (event, handler){
    switch (handler.key) {
      case 'ctrl+.': document.querySelector(".search").focus();
        break
      case '1': document.querySelector("#primary").scrollIntoView();
        break;
      case '2': document.querySelector("#variations").scrollIntoView();
        break;
      case '3': document.querySelector("#generic").scrollIntoView();
        break;
      case '4': document.querySelector("#outdated").scrollIntoView();
        break;
      case 'q': document.querySelector("input[value='off']").click();
        break;
      case 'w': document.querySelector("input[value='icon-grid']").click();
        break;
      case 'e': document.querySelector("input[value='alt-icon-grid']").click();
        break;
      case 'a': document.querySelector("input[value='dark']").click();
        break;
      case 's': document.querySelector("input[value='amoled']").click();
        break;
      case 'd': document.querySelector("input[value='light']").click();
        break;
      case 'z': document.querySelector("input[value='big']").click();
        break;
      case 'x': document.querySelector("input[value='medium']").click();
        break;
      case 'c': document.querySelector("input[value='small']").click();
        break;
    }
  });