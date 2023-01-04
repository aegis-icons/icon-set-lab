// ==== Used more then once ====
  var search = document.querySelector('.search');
  const bodySelector = document.querySelector('body');

// ==== List.js search function ====
  var listNames = ['primary', 'variations', 'generic', 'outdated'];
  var lists = listNames.map(function (name) { return new List(name, { valueNames: ['n'] }); });

  var searchTrigger = function (e) {
    var searchValue = this.value;
    lists.forEach(function (list) { list.search(searchValue); }); 
    document.documentElement.scrollTo({ top: 0 });
  };

// ==== Reset button function and List.js search clearing ====
  var resetButton = document.querySelector('button.reset');
  
  resetButton.addEventListener('click', function () {
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
  document.getElementById("icon-amount-pri").innerHTML  = document.querySelectorAll('#primary .n').length;
  document.getElementById("icon-amount-var").innerHTML  = document.querySelectorAll('#variations .n').length;
  document.getElementById("icon-amount-gen").innerHTML  = document.querySelectorAll('#generic .n').length;
  document.getElementById("icon-amount-out").innerHTML  = document.querySelectorAll('#outdated .n').length;

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
    radio.addEventListener('change', () => document.documentElement.scrollTo({ top: 0 }));
  });