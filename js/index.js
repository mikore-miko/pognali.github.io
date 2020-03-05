var mobileMenu = document.querySelector('.mobile-menu');
var menuBurger = document.querySelector('.top-bar__toggle-btn');
var topBar = document.querySelector('.top-bar');
var logo = document.querySelector('.logo__img');

// form.html controls
var activeClassAddFormInCountrySelector = 'country-selector_show-add-form';

var countrySelectorWithAddForm = document.querySelector('.country-selector__with-add-form');
var buttonInCountrySelectorWithAddForm = document.querySelector('.country-selector__with-add-form .country-selector__select-btn');
var countriesInAddFormOfCountrySelector = document.querySelectorAll('.country-selector__add-form-country');
var lettersInAddFormOfCountrySelector = document.querySelectorAll('.country-selector__add-form-letter');

// catalog.html controls
var countryPickerBarToggleBtn = document.querySelector('.country-picker-bar__toggle-btn');
var countryPickerBtn = document.querySelector('.country-picker__close-btn-wrapper');
var countryPickerControl = document.querySelector('.companions-country-filter__country-picker-control');

var activeClassOfMobileMenu = 'mobile-menu_open'
var activeClassOfTopBar = 'top-bar_open'
var activeClassOfCountryPickerControl = 'companions-country-filter__country-picker-control_active'
var fixedClassOfTopBar = 'top-bar_position-fixed'
var menuBurgerTypeClose = 'top-bar__toggle-btn_type_close'
var logoPaths = {
  open : 'img/logo-mobile-blue@1x.png',
  close: 'img/logo-mobile-white@1x.png'
}

function isScrollOnTop() {
  return window.scrollY == 0;
}

function revertAddFormInCountrySelector(evt) {
  evt.preventDefault();
  console.log('11')
  // CLOSE
  if (countrySelectorWithAddForm.classList.contains(activeClassAddFormInCountrySelector)) {
    countrySelectorWithAddForm.classList.remove(activeClassAddFormInCountrySelector)
    return
  }

  // OPEN
  countrySelectorWithAddForm.classList.add(activeClassAddFormInCountrySelector)
}
function revertCatalogBar(evt) {
  evt.preventDefault();

  //country-picker__name-words
  // CLOSE
  if (countryPickerControl.classList.contains(activeClassOfCountryPickerControl)) {
    countryPickerControl.classList.remove(activeClassOfCountryPickerControl)
    return
  }

  // OPEN
  countryPickerControl.classList.add(activeClassOfCountryPickerControl)
}

function revertMobileMenu() {
  var isMenuBurgerTypeClose = menuBurger.classList.contains(menuBurgerTypeClose);
  var isMobileMenuOpen = mobileMenu.classList.contains(activeClassOfMobileMenu);
  var isTopBarOpen = topBar.classList.contains(activeClassOfTopBar);

  if (
    isMenuBurgerTypeClose &&
    isMobileMenuOpen &&
    isTopBarOpen
  ) {
    // CLOSE
    mobileMenu.classList.remove(activeClassOfMobileMenu);
    menuBurger.classList.remove(menuBurgerTypeClose);
    topBar.classList.remove(activeClassOfTopBar);
    logo.src = logoPaths.close;

    if(isScrollOnTop()) {
      topBar.classList.remove(fixedClassOfTopBar);
    }

    return
  }

  // OPEN
  mobileMenu.classList.add(activeClassOfMobileMenu);
  menuBurger.classList.add(menuBurgerTypeClose);
  topBar.classList.add(activeClassOfTopBar);
  logo.src = logoPaths.open;
  topBar.classList.add(fixedClassOfTopBar);
/*
  if(isScrollOnTop()) {

  }
  */
}

menuBurger.classList.remove('top-bar__toggle-btn_hidden');
revertMobileMenu()

// --EVENTS--
menuBurger.addEventListener('click', function (evt) {
  evt.preventDefault();

  revertMobileMenu();
})

document.addEventListener('scroll', function(evt) {
  var isFixedTopBar = topBar.classList.contains(fixedClassOfTopBar)
  var isOpenTopBar = topBar.classList.contains(activeClassOfTopBar)

  if (!isScrollOnTop() && !isFixedTopBar) {
    topBar.classList.add(fixedClassOfTopBar)
    return;
  }

  if (isScrollOnTop() && isFixedTopBar && !isOpenTopBar) {
    topBar.classList.remove(fixedClassOfTopBar)
    return;
  }
})

if (countryPickerBarToggleBtn) {
  countryPickerBarToggleBtn.addEventListener('click', revertCatalogBar);
  countryPickerBtn.addEventListener('click', revertCatalogBar);
}

if (buttonInCountrySelectorWithAddForm) {
  buttonInCountrySelectorWithAddForm.addEventListener('click', revertAddFormInCountrySelector);

  for (var j = 0; j <= countriesInAddFormOfCountrySelector.length; j++) {
    countriesInAddFormOfCountrySelector[j].addEventListener('click', revertAddFormInCountrySelector);
  }

  for (var k = 0; j <= lettersInAddFormOfCountrySelector.length; j++) {
    lettersInAddFormOfCountrySelector[k].addEventListener('click', function(evt) { evt.preventDefault(); });
  }
}
