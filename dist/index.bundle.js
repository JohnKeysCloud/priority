/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/listIcon/listIcon.js":
/*!*********************************************!*\
  !*** ./src/components/listIcon/listIcon.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createListIcon: () => (/* binding */ createListIcon)
/* harmony export */ });
/* harmony import */ var _listIcon_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listIcon.scss */ "./src/components/listIcon/listIcon.scss");

function createListIcon() {
  var listIconContainer = document.createElement('div');
  listIconContainer.classList.add('list-icon-container');
  listIconContainer.setAttribute('aria-hidden', true);
  var listIconBars = document.createElement('div');
  listIconBars.classList.add('list-icon-bars');
  listIconContainer.appendChild(listIconBars);
  return listIconContainer;
}


/***/ }),

/***/ "./src/components/nav-toggle/nav-toggle-markup.js":
/*!********************************************************!*\
  !*** ./src/components/nav-toggle/nav-toggle-markup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNavToggleButton: () => (/* binding */ createNavToggleButton)
/* harmony export */ });
/* harmony import */ var _nav_toggle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-toggle.scss */ "./src/components/nav-toggle/nav-toggle.scss");
/* harmony import */ var _nav_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-toggle */ "./src/components/nav-toggle/nav-toggle.js");


function createNavToggleButton(ariaControlsID) {
  var navToggleButton = document.createElement('button');
  navToggleButton.classList.add('nav-toggle-button');
  navToggleButton.setAttribute('aria-label', 'Open Navigation Menu');
  navToggleButton.setAttribute('aria-expanded', false);
  navToggleButton.setAttribute('aria-controls', ariaControlsID);
  var navToggleBars = document.createElement('div');
  navToggleBars.classList.add('nav-toggle-bars');
  navToggleButton.appendChild(navToggleBars);
  navToggleButton.addEventListener('click', _nav_toggle__WEBPACK_IMPORTED_MODULE_1__.toggleNavButton);
  return navToggleButton;
}


/***/ }),

/***/ "./src/components/nav-toggle/nav-toggle.js":
/*!*************************************************!*\
  !*** ./src/components/nav-toggle/nav-toggle.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleNavButton: () => (/* binding */ toggleNavButton)
/* harmony export */ });
/* harmony import */ var _utilities_pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/pubsub.js */ "./src/utilities/pubsub.js");
/* harmony import */ var _js_eventNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/eventNames.js */ "./src/js/eventNames.js");


function toggleNavButton() {
  var toggleButtonActivated = this.classList.contains('active');
  if (!toggleButtonActivated) {
    this.classList.add('active');
    this.setAttribute('aria-label', 'Close Navigation Menu');
    this.setAttribute('aria-expanded', true);
    console.log('emitting show nav');
    _utilities_pubsub_js__WEBPACK_IMPORTED_MODULE_0__.events.emit(_js_eventNames_js__WEBPACK_IMPORTED_MODULE_1__.SHOW_NAV_EVENT);
  } else {
    this.classList.remove('active');
    this.setAttribute('aria-label', 'Open Navigation Menu');
    this.setAttribute('aria-expanded', false);
    console.log('emitting hide nav');
    _utilities_pubsub_js__WEBPACK_IMPORTED_MODULE_0__.events.emit(_js_eventNames_js__WEBPACK_IMPORTED_MODULE_1__.HIDE_NAV_EVENT);
  }
}


/***/ }),

/***/ "./src/components/theme-toggle/theme-toggle.markup.js":
/*!************************************************************!*\
  !*** ./src/components/theme-toggle/theme-toggle.markup.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createThemeToggleButton: () => (/* binding */ createThemeToggleButton)
/* harmony export */ });
/* harmony import */ var _utilities_html_script_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/html-script-injection */ "./src/utilities/html-script-injection.js");
/* harmony import */ var _theme_toggle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-toggle.scss */ "./src/components/theme-toggle/theme-toggle.scss");
// * Dependencies: html-script-injection.js

// * Description: Creates a theme toggle button.
// ? @return {HTMLElement} themeToggleContainer

// * @example
// ? const themeToggleContainer = createThemeToggleButton();
// ? document.body.appendChild(themeToggleContainer);



var iconScriptSource = 'https://kit.fontawesome.com/24176ab973.js';
var attributes = {
  crossorigin: 'anonymous'
};
(0,_utilities_html_script_injection__WEBPACK_IMPORTED_MODULE_0__.addScriptToHead)(iconScriptSource, attributes);
function createThemeToggleButton() {
  var themeToggleContainer = document.createElement('div');
  themeToggleContainer.setAttribute('id', 'theme-toggle-container');
  var themeToggleCheckbox = document.createElement('input');
  themeToggleCheckbox.setAttribute('type', 'checkbox');
  themeToggleCheckbox.setAttribute('id', 'theme-toggle-checkbox');
  var themeToggleLabel = document.createElement('label');
  themeToggleLabel.setAttribute('id', 'theme-toggle-label');
  themeToggleLabel.setAttribute('for', 'theme-toggle-checkbox');
  var sunIcon = document.createElement('i');
  sunIcon.classList.add('fa-solid', 'fa-sun');
  sunIcon.setAttribute('id', 'sun');
  var moonIcon = document.createElement('i');
  moonIcon.classList.add('fa-solid', 'fa-moon');
  moonIcon.setAttribute('id', 'moon');
  themeToggleLabel.appendChild(sunIcon);
  themeToggleLabel.appendChild(moonIcon);
  themeToggleContainer.appendChild(themeToggleCheckbox);
  themeToggleContainer.appendChild(themeToggleLabel);
  return themeToggleContainer;
}


/***/ }),

/***/ "./src/components/zig-zag-nav/zig-zag-nav.js":
/*!***************************************************!*\
  !*** ./src/components/zig-zag-nav/zig-zag-nav.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateListeners: () => (/* binding */ activateListeners)
/* harmony export */ });
/* harmony import */ var _utilities_pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/pubsub.js */ "./src/utilities/pubsub.js");
/* harmony import */ var _js_eventNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/eventNames.js */ "./src/js/eventNames.js");



// ! let isAnimating = false;
// ! let pending = null;

function hideNav() {
  var zigZagNav = document.querySelector('.zig-zag-nav');
  zigZagNav.removeEventListener('animationend', hideNav);
  zigZagNav.setAttribute('aria-hidden', true);
  zigZagNav.setAttribute('data-visibility', false);
}
function initiateHideNav() {
  var zigZagNav = document.querySelector('.zig-zag-nav');
  zigZagNav.setAttribute('data-visibility', 'closing');
  zigZagNav.addEventListener('animationend', hideNav);
}
function showNav() {
  var zigZagNav = document.querySelector('.zig-zag-nav');
  zigZagNav.removeEventListener('animationend', hideNav);
  // ! This is a hack to prevent the nav from hiding when the user clicks the nav toggle button while the nav is animating closed
  // ! use isAnimating to prevent the nav from hiding while it is animating closed
  // ! use pending to prevent the nav from hiding while it is animating open
  // ! isAnimating and pending are set to true when the nav is animating and set to false when the animation is complete
  // ! isAnimating and pending are set to false when the nav is hidden
  // ! isAnimating and pending are set to false when the nav is shown

  zigZagNav.setAttribute('aria-hidden', false);
  zigZagNav.setAttribute('data-visibility', true);
}
function activateListeners() {
  _utilities_pubsub_js__WEBPACK_IMPORTED_MODULE_0__.events.on(_js_eventNames_js__WEBPACK_IMPORTED_MODULE_1__.SHOW_NAV_EVENT, showNav);
  _utilities_pubsub_js__WEBPACK_IMPORTED_MODULE_0__.events.on(_js_eventNames_js__WEBPACK_IMPORTED_MODULE_1__.HIDE_NAV_EVENT, initiateHideNav);
}


/***/ }),

/***/ "./src/components/zig-zag-nav/zip-zag-nav-markup.js":
/*!**********************************************************!*\
  !*** ./src/components/zig-zag-nav/zip-zag-nav-markup.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createZigZagNav: () => (/* binding */ createZigZagNav)
/* harmony export */ });
/* harmony import */ var _zig_zag_nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zig-zag-nav.scss */ "./src/components/zig-zag-nav/zig-zag-nav.scss");
/* harmony import */ var _zig_zag_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zig-zag-nav.js */ "./src/components/zig-zag-nav/zig-zag-nav.js");



// * initialPage is a string that will be used to set the aria-current attribute (use the index of the page name)
// * anchorOrButton is a string that will be used to determine if the nav links are buttons or anchors options are 'button' or 'a'
// * id is a string that will be used to set the id attribute of the nav's nested UL element

function createZigZagNav(objectOfLists, initialPage, anchorOrButton, ariaControlsID, specialNavLink) {
  var zigZagNav = document.createElement('nav');
  zigZagNav.classList.add('zig-zag-nav');
  zigZagNav.setAttribute('id', ariaControlsID);
  zigZagNav.setAttribute('aria-label', 'Main Navigation');
  zigZagNav.setAttribute('aria-hidden', true);
  zigZagNav.setAttribute('data-visibility', false);
  var _loop = function _loop() {
    var listContainer = document.createElement('div');
    listContainer.classList.add('nav-list-container');
    var listHeader = document.createElement('h2');
    listHeader.classList.add('nav-list-header');
    listHeader.textContent = list;
    var listUL = document.createElement('ul');
    listUL.classList.add('nav-ul');
    var groupedListElements = objectOfLists[list].listElements;
    var listFragment = document.createDocumentFragment();
    groupedListElements.forEach(function (pageNameAndHref, index) {
      var pageName = pageNameAndHref[0];
      var pageHref = pageNameAndHref[1];
      var navLI = document.createElement('li');
      navLI.classList.add('nav-li');
      var linkNumberSpan = document.createElement('span');
      linkNumberSpan.classList.add('nav-number');
      linkNumberSpan.setAttribute('aria-hidden', true);
      linkNumberSpan.textContent = "0".concat(index);
      var navLink = document.createElement(anchorOrButton === 'button' ? 'button' :  true ? 'a' : 0);
      navLink.classList.add('nav-link');
      if (anchorOrButton === 'a') {
        navLink.setAttribute('href', pageHref); // ! UPDATE THIS TO USE THE PAGE NAME
      }

      if (pageName === initialPage) {
        navLink.setAttribute('aria-current', 'page');
      }
      if (pageName === specialNavLink) {
        navLink.classList.add('special-nav-link');
      }
      zigZagNav.appendChild(listHeader);
      if (!navLink.classList.contains('special-nav-link')) {
        navLink.appendChild(linkNumberSpan);
      }
      navLink.appendChild(document.createTextNode(pageName));
      navLI.appendChild(navLink);
      listFragment.appendChild(navLI);
    });
    listUL.appendChild(listFragment);
    listContainer.appendChild(listHeader);
    listContainer.appendChild(listUL);
    zigZagNav.appendChild(listContainer);
  };
  for (var list in objectOfLists) {
    _loop();
  }
  (0,_zig_zag_nav_js__WEBPACK_IMPORTED_MODULE_1__.activateListeners)();
  return zigZagNav;
}


/***/ }),

/***/ "./src/js/eventNames.js":
/*!******************************!*\
  !*** ./src/js/eventNames.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HIDE_NAV_EVENT: () => (/* binding */ HIDE_NAV_EVENT),
/* harmony export */   SHOW_NAV_EVENT: () => (/* binding */ SHOW_NAV_EVENT)
/* harmony export */ });
var SHOW_NAV_EVENT = 'showNav';
var HIDE_NAV_EVENT = 'hideNav';

/***/ }),

/***/ "./src/js/header-markup.js":
/*!*********************************!*\
  !*** ./src/js/header-markup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _assets_images_priority_logo_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/priority-logo.webp */ "./src/assets/images/priority-logo.webp");
/* harmony import */ var _components_theme_toggle_theme_toggle_markup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/theme-toggle/theme-toggle.markup */ "./src/components/theme-toggle/theme-toggle.markup.js");
/* harmony import */ var _components_nav_toggle_nav_toggle_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav-toggle/nav-toggle-markup */ "./src/components/nav-toggle/nav-toggle-markup.js");



function createHeader() {
  var header = document.createElement('header');
  var headerLeft = document.createElement('div');
  headerLeft.classList.add('header-left');
  var headerLogo = document.createElement('img');
  headerLogo.classList.add('header-logo');
  headerLogo.setAttribute('src', _assets_images_priority_logo_webp__WEBPACK_IMPORTED_MODULE_0__);
  headerLogo.setAttribute('alt', 'Priority Logo');
  var headerTitle = document.createElement('h1');
  headerTitle.classList.add('header-title');
  headerTitle.textContent = '<pr{io}rity>';
  headerLeft.appendChild(headerLogo);
  headerLeft.appendChild(headerTitle);
  var headerRight = document.createElement('div');
  headerRight.classList.add('header-right');
  headerRight.appendChild((0,_components_theme_toggle_theme_toggle_markup__WEBPACK_IMPORTED_MODULE_1__.createThemeToggleButton)());
  headerRight.appendChild((0,_components_nav_toggle_nav_toggle_markup__WEBPACK_IMPORTED_MODULE_2__.createNavToggleButton)('nav-primary-aria'));
  header.appendChild(headerLeft);
  header.appendChild(headerRight);
  content.appendChild(header);
  return header;
}


/***/ }),

/***/ "./src/utilities/html-script-injection.js":
/*!************************************************!*\
  !*** ./src/utilities/html-script-injection.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addScriptToHead: () => (/* binding */ addScriptToHead)
/* harmony export */ });
function addScriptToHead(src) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var script = document.createElement('script');
  script.setAttribute('src', src);
  script.setAttribute('type', 'text/javascript');
  for (var attribute in attributes) {
    script.setAttribute(attribute, attributes[attribute]);
  }
  document.head.appendChild(script);
}


/***/ }),

/***/ "./src/utilities/pubsub.js":
/*!*********************************!*\
  !*** ./src/utilities/pubsub.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   events: () => (/* binding */ events)
/* harmony export */ });
// * events (publish subscribe / mediator) pattern
var events = {
  events: {},
  on: function on(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off: function off(eventName, fn) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  },
  emit: function emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (fn) {
        fn(data);
      });
    }
  }
};

// ! when an event is called with on:
// * event name
// *   function to run
// *   add function to events object
// *   events = {
// *     events: {
// *       eventName: [fn],
// *     },
// *   }
// *
// * when an event is called with emit:
// *   events = {
// *     events: {
// *       eventName: [fn],
// *     },
// *   }
// *   events.events.eventName.forEach(fn => fn(data));
// *
// * when an event is called with off:
// *   events = {
// *     events: {
// *       eventName: [fn],
// *     },
// *   }
// *   events.events.eventName.forEach(fn => {
// *     if (fn === fn) {
// *       events.events.eventName.splice(i, 1);
// *     }
// *   });
// *
// *   function to remove
// *   remove function from events object
// *   events = {
// *     events: {
// *       eventName: [],
// *     },
// *   }
// *



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/listIcon/listIcon.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/listIcon/listIcon.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.list-icon-container {
  aspect-ratio: 1/1;
  position: relative;
  width: 0.75rem;
}
.list-icon-container .list-icon-bars {
  background-color: white;
  height: 2px;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
.list-icon-container::before, .list-icon-container::after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: white;
  position: absolute;
}
.list-icon-container::before {
  top: 0;
}
.list-icon-container::after {
  bottom: 0;
}`, "",{"version":3,"sources":["webpack://./src/components/listIcon/listIcon.scss"],"names":[],"mappings":"AAEA;EACE,iBAAA;EACA,kBAAA;EACA,cALK;AAIP;AAGE;EACE,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,2BAAA;AADJ;AAIE;EAEE,WAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EACA,kBAAA;AAHJ;AAME;EACE,MAAA;AAJJ;AAOE;EACE,SAAA;AALJ","sourcesContent":["$size: 0.75rem;\n\n.list-icon-container {\n  aspect-ratio: 1 / 1;\n  position: relative;\n  width: $size;\n\n  .list-icon-bars {\n    background-color: white;\n    height: 2px;\n    position: absolute;\n    width: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  &::before,\n  &::after {\n    content: '';\n    width: 100%;\n    height: 2px;\n    background-color: white;\n    position: absolute;\n  }\n\n  &::before {\n    top: 0;\n  }\n\n  &::after {\n    bottom: 0;\n  }\n\n\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/nav-toggle/nav-toggle.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/nav-toggle/nav-toggle.scss ***!
  \********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.nav-toggle-button {
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 20px;
  justify-content: center;
  width: 20px;
}
.nav-toggle-button .nav-toggle-bars, .nav-toggle-button .nav-toggle-bars::before, .nav-toggle-button .nav-toggle-bars::after {
  transition: all 150ms ease-in-out;
}
.nav-toggle-button.active .nav-toggle-bars {
  background: transparent;
}
.nav-toggle-button.active .nav-toggle-bars::before {
  transform: translateY(0) rotate(-45deg);
}
.nav-toggle-button.active .nav-toggle-bars::after {
  transform: translateY(0) rotate(45deg);
}
.nav-toggle-button .nav-toggle-bars {
  background: white;
  border-radius: 100vw;
  height: 1.5px;
  position: relative;
  width: 100%;
}
.nav-toggle-button .nav-toggle-bars::before, .nav-toggle-button .nav-toggle-bars::after {
  background-color: white;
  border-radius: 100vw;
  content: "";
  position: absolute;
  inset: 0;
  height: 1.5px;
  width: 100%;
}
.nav-toggle-button .nav-toggle-bars::before {
  transform: translateY(-7.75px);
}
.nav-toggle-button .nav-toggle-bars::after {
  transform: translateY(7.75px);
}`, "",{"version":3,"sources":["webpack://./src/components/nav-toggle/nav-toggle.scss"],"names":[],"mappings":"AAAA;EAQE,mBAAA;EACA,eAAA;EACA,aAAA;EACA,YAVgB;EAWhB,uBAAA;EACA,WAXe;AAKjB;AAQE;EACE,iCAAA;AANJ;AAUI;EACE,uBAAA;AARN;AAUM;EACE,uCAAA;AARR;AAUM;EACE,sCAAA;AARR;AAaE;EACE,iBA5BiB;EA6BjB,oBA9ByB;EA+BzB,aAhCgB;EAiChB,kBAAA;EACA,WAAA;AAXJ;AAaI;EACE,uBAnCe;EAoCf,oBArCuB;EAsCvB,WAAA;EACA,kBAAA;EACA,QAAA;EACA,aA1Cc;EA2Cd,WAAA;AAXN;AAcI;EACE,8BAAA;AAZN;AAeI;EACE,6BAAA;AAbN","sourcesContent":[".nav-toggle-button {\n  $button-height: 20px;\n  $button-width: 20px;\n  $button-bar-size: 1.5px;\n  $button-bar-border-radius: 100vw;\n  $button-bar-color: white;\n  $button-transition-time: 150ms; \n\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  height: $button-height;\n  justify-content: center;\n  width: $button-width;\n\n  .nav-toggle-bars, .nav-toggle-bars::before, .nav-toggle-bars::after {\n    transition: all $button-transition-time ease-in-out;\n  }\n  \n  &.active {\n    .nav-toggle-bars {\n      background: transparent;\n      \n      &::before {\n        transform: translateY(0) rotate(-45deg);\n      }\n      &::after {\n        transform: translateY(0) rotate(45deg);\n      }\n    }\n  }\n\n  .nav-toggle-bars {\n    background: $button-bar-color;\n    border-radius: $button-bar-border-radius;\n    height: $button-bar-size;\n    position: relative;\n    width: 100%;\n\n    &::before, &::after {\n      background-color: $button-bar-color;\n      border-radius: $button-bar-border-radius;\n      content: '';\n      position: absolute;\n      inset: 0;\n      height: $button-bar-size;\n      width: 100%;\n    }\n\n    &::before {\n      transform: translateY(calc(($button-height - $button-bar-size * 3) / -2 ));\n    }\n\n    &::after {\n      transform: translateY(calc(($button-height - $button-bar-size * 3) / 2 ));\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/theme-toggle/theme-toggle.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/theme-toggle/theme-toggle.scss ***!
  \************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#theme-toggle-container {
  border-radius: 100vw;
  background-color: transparent;
  box-shadow: none;
  padding: 0;
  position: relative;
  transition: opacity 380ms ease-in-out;
}

#theme-toggle-checkbox {
  display: none;
}

#theme-toggle-label {
  align-items: center;
  background: black;
  border-radius: inherit;
  box-shadow: inset 0 0 12px silver;
  cursor: pointer;
  display: flex;
  gap: 0rem;
  padding: 5px 8px;
  min-height: 25px;
  min-width: 25px;
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  -webkit-user-select: none; /* Safari */
  user-select: none; /* Standard */
}

#sun,
#moon {
  aspect-ratio: 1/1;
  border-radius: 50%;
  color: black;
  font-size: 0.675rem;
  padding: 3.5px;
  width: 10px;
}

#sun {
  background-color: #E99A43;
  box-shadow: inset 3px -3px 8px black;
  opacity: 0;
  -webkit-transform: translateX(calc(20px + 0rem)) rotate(0);
  transform: translateX(calc(20px + 0rem)) rotate(0);
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}

#moon {
  background-color: #F6F1D5;
  box-shadow: inset -3px -3px 8px black;
  opacity: 1;
  -webkit-transform: translateX(0px) rotate(0);
  transform: translateX(0px) rotate(0);
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}

#theme-toggle-checkbox:checked ~ #theme-toggle-label > #sun {
  opacity: 1;
  -webkit-transform: translateX(0px) rotate(360deg);
  transform: translateX(0px) rotate(360deg);
}

#theme-toggle-checkbox:checked ~ #theme-toggle-label > #moon {
  opacity: 0;
  -webkit-transform: translateX(calc((20px + 0rem) * -1)) rotate(360deg);
  transform: translateX(calc((20px + 0rem) * -1)) rotate(360deg);
}`, "",{"version":3,"sources":["webpack://./src/components/theme-toggle/theme-toggle.scss"],"names":[],"mappings":"AAKA;EACE,oBAAA;EACA,6BAAA;EACA,gBAAA;EACA,UAAA;EACA,kBAAA;EACA,qCAAA;AAJF;;AAOA;EACE,aAAA;AAJF;;AAOA;EACE,mBAAA;EACA,iBAAA;EACA,sBAAA;EACA,iCAAA;EACA,eAAA;EACA,aAAA;EACA,SAzBiB;EA0BjB,gBAAA;EAEA,gBAAA;EACA,eAAA;EACA,sBAAA,EAAA,YAAA;EACA,qBAAA,EAAA,eAAA;EACA,yBAAA,EAAA,WAAA;EACA,iBAAA,EAAA,aAAA;AALF;;AAQA;;EAEE,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;EACA,cAxC0B;EAyC1B,WA1CwB;AAqC1B;;AAQA;EACE,yBAAA;EACA,oCAAA;EACA,UAAA;EACA,0DAAA;EACA,kDAAA;EACA,yCAAA;EACA,iCAAA;AALF;;AAQA;EACE,yBAAA;EACA,qCAAA;EACA,UAAA;EACA,4CAAA;EACA,oCAAA;EACA,yCAAA;EACA,iCAAA;AALF;;AAQA;EACE,UAAA;EACA,iDAAA;EACA,yCAAA;AALF;;AAQA;EACE,UAAA;EACA,sEAAA;EACA,8DAAA;AALF","sourcesContent":["$theme-toggle-gap: 0rem;\n$theme-toggle-icon-width: 10px;\n$theme-toggle-icon-padding: 3.5px;\n$theme-icon-space-between: calc($theme-toggle-icon-width * 2 + $theme-toggle-gap);\n\n#theme-toggle-container {\n  border-radius: 100vw;\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0;\n  position: relative;\n  transition: opacity 380ms ease-in-out;\n}\n\n#theme-toggle-checkbox {\n  display: none;\n}\n\n#theme-toggle-label {\n  align-items: center;\n  background: black;\n  border-radius: inherit;\n  box-shadow: inset 0 0 12px silver;\n  cursor: pointer;\n  display: flex; \n  gap: $theme-toggle-gap;\n  padding: 5px 8px;\n\n  min-height: 25px;\n  min-width: 25px;\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  -webkit-user-select: none; /* Safari */\n  user-select: none; /* Standard */\n}\n\n#sun,\n#moon {\n  aspect-ratio: 1/1;\n  border-radius: 50%;\n  color: black;\n  font-size: 0.675rem;\n  padding: $theme-toggle-icon-padding;\n  width: $theme-toggle-icon-width;\n}\n\n#sun {\n  background-color: #E99A43;\n  box-shadow: inset 3px -3px 8px black;\n  opacity: 0;\n  -webkit-transform: translateX($theme-icon-space-between) rotate(0);\n  transform: translateX($theme-icon-space-between) rotate(0);\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n\n#moon {\n  background-color: #F6F1D5;\n  box-shadow: inset -3px -3px 8px black;\n  opacity: 1;\n  -webkit-transform: translateX(0px) rotate(0);\n  transform: translateX(0px) rotate(0);\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n\n#theme-toggle-checkbox:checked ~ #theme-toggle-label > #sun {\n  opacity: 1;\n  -webkit-transform: translateX(0px) rotate(360deg);\n  transform: translateX(0px) rotate(360deg);\n}\n\n#theme-toggle-checkbox:checked ~ #theme-toggle-label > #moon {\n  opacity: 0;\n  -webkit-transform: translateX(calc($theme-icon-space-between * -1)) rotate(360deg);\n  transform: translateX(calc($theme-icon-space-between * -1)) rotate(360deg);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/zig-zag-nav/zig-zag-nav.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/zig-zag-nav/zig-zag-nav.scss ***!
  \**********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
}
.zig-zag-nav {
  display: flex;
  gap: 5rem;
}
.zig-zag-nav[data-visibility=false] {
  display: none;
}
.zig-zag-nav[data-visibility=closing] {
  animation: fade-out 380ms ease-in-out;
}
.zig-zag-nav[data-visibility=true] {
  animation: fade-in 380ms ease-in-out;
}
.zig-zag-nav .nav-list-container {
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.zig-zag-nav .nav-list-container .nav-list-header {
  color: inherit;
  position: relative;
  text-transform: uppercase;
}
.zig-zag-nav .nav-list-container .nav-ul {
  list-style: none;
}
.zig-zag-nav .nav-list-container .nav-ul .nav-li {
  position: relative;
  transition: transform 250ms ease-in-out;
}
.zig-zag-nav .nav-list-container .nav-ul .nav-li:nth-of-type(odd) {
  transform: rotate(0deg);
}
.zig-zag-nav .nav-list-container .nav-ul .nav-li:nth-of-type(even) {
  transform: rotate(0deg);
}
.zig-zag-nav .nav-list-container .nav-ul .nav-li::before, .zig-zag-nav .nav-list-container .nav-ul .nav-li::after {
  border-radius: 100px;
  content: "";
  inset: -5px -15px;
  opacity: 0.1;
  pointer-events: none;
  position: absolute;
  transform: scaleX(0);
  transform-origin: center;
  z-index: 0;
}
.zig-zag-nav .nav-list-container .nav-ul .nav-li:hover {
  transform: rotate(0);
}
.zig-zag-nav .nav-list-container .nav-ul .nav-li .nav-link {
  color: white;
  cursor: pointer;
  display: inline-block;
  position: relative;
  text-decoration: none;
  text-shadow: unset;
  text-transform: uppercase;
  transition: all 500ms ease-in-out;
}
.zig-zag-nav .nav-list-container .nav-ul .nav-li .nav-link .nav-number {
  display: inline-block;
  font-weight: bold;
  margin-inline-end: 0.75rem;
  position: relative;
}
.zig-zag-nav .nav-list-container .nav-ul .nav-li .nav-link::before {
  content: "";
  border-bottom: 2px dashed white;
  inset: 5px 0 0 0;
  padding-top: 1rem;
  position: absolute;
  transition: opacity 250ms ease-in-out, transform 380ms ease-in-out;
  transform: scaleX(0);
}
.zig-zag-nav .nav-list-container .nav-ul .nav-li .nav-link[aria-current]::before {
  opacity: 1;
  transform: scaleX(1);
}

@media (max-width: 35em) {
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fade-out {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100%);
    }
  }
  .zig-zag-nav {
    flex-direction: column;
    position: fixed;
    inset: 0 0 0 30%;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/zig-zag-nav/zig-zag-nav.scss"],"names":[],"mappings":"AAAA;EACE;IACE,UAAA;IACA,4BAAA;EACF;EACA;IACE,UAAA;IACA,wBAAA;EACF;AACF;AACA;EACE;IACE,wBAAA;IACA,UAAA;EACF;EACA;IACE,UAAA;IACA,4BAAA;EACF;AACF;AAEA;EAKE,aAAA;EACA,SAAA;AAJF;AAME;EACE,aAAA;AAJJ;AAOE;EACE,qCAAA;AALJ;AASE;EACE,oCAAA;AAPJ;AAUE;EACE,YArBW;EAsBX,aAAA;EACA,sBAAA;EACA,WAAA;AARJ;AAUI;EACE,cAAA;EACA,kBAAA;EACA,yBAAA;AARN;AAWI;EACE,gBAAA;AATN;AAWM;EACE,kBAAA;EACA,uCAAA;AATR;AAWQ;EACE,uBAAA;AATV;AAYQ;EACE,uBAAA;AAVV;AAaQ;EAEE,oBAAA;EACA,WAAA;EACA,iBAAA;EACA,YAAA;EACA,oBAAA;EACA,kBAAA;EACA,oBAAA;EACA,wBAAA;EACA,UAAA;AAZV;AAeQ;EACE,oBAAA;AAbV;AAgBQ;EACE,YAjEK;EAkEL,eAAA;EACA,qBAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBArEM;EAsEN,yBAAA;EACA,iCAAA;AAdV;AAgBU;EACE,qBAAA;EACA,iBAAA;EACA,0BAAA;EACA,kBAAA;AAdZ;AAiBU;EACE,WAAA;EACA,+BAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kEAAA;EACA,oBAAA;AAfZ;AAkBU;EACE,UAAA;EACA,oBAAA;AAhBZ;;AAwBA;EACE;IACE;MACE,UAAA;MACA,2BAAA;IArBF;IAuBA;MACE,UAAA;MACA,wBAAA;IArBF;EACF;EAuBA;IACE;MACE,UAAA;MACA,wBAAA;IArBF;IAuBA;MACE,UAAA;MACA,2BAAA;IArBF;EACF;EAwBA;IACE,sBAAA;IACA,eAAA;IACA,gBAAA;EAtBF;AACF","sourcesContent":["@keyframes fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fade-out {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n}\n\n.zig-zag-nav {\n  $text-color: white;\n  $link-shadow: unset;\n  $link-rotation: 0deg;\n\n  display: flex;\n  gap: 5rem;\n\n  &[data-visibility=false] {\n    display: none;\n  }\n\n  &[data-visibility=closing] {\n    animation: fade-out 380ms ease-in-out;\n  }\n  \n\n  &[data-visibility=true] {\n    animation: fade-in 380ms ease-in-out;\n  }\n\n  .nav-list-container {\n    color: $text-color;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n\n    .nav-list-header {\n      color: inherit;\n      position: relative;\n      text-transform: uppercase;\n    }\n\n    .nav-ul {\n      list-style: none;\n\n      .nav-li {\n        position: relative;\n        transition: transform 250ms ease-in-out;\n\n        &:nth-of-type(odd) {\n          transform: rotate(calc($link-rotation * -1));\n        }\n\n        &:nth-of-type(even) {\n          transform: rotate($link-rotation);\n        }\n\n        &::before,\n        &::after {\n          border-radius: 100px;\n          content: '';\n          inset: -5px -15px;\n          opacity: 0.1;\n          pointer-events: none;\n          position: absolute;\n          transform: scaleX(0);\n          transform-origin: center;\n          z-index: 0;\n        }\n\n        &:hover {\n          transform: rotate(0);\n        }\n\n        .nav-link {\n          color: $text-color;\n          cursor: pointer;\n          display: inline-block;\n          position: relative;\n          text-decoration: none;\n          text-shadow: $link-shadow;\n          text-transform: uppercase;\n          transition: all 500ms ease-in-out;\n\n          .nav-number {\n            display: inline-block;\n            font-weight: bold;\n            margin-inline-end: 0.75rem;\n            position: relative;\n          }\n\n          &::before {\n            content: '';\n            border-bottom: 2px dashed white;\n            inset: 5px 0 0 0;\n            padding-top: 1rem;\n            position: absolute;\n            transition: opacity 250ms ease-in-out, transform 380ms ease-in-out;\n            transform: scaleX(0);\n          }\n\n          &[aria-current]::before {\n            opacity: 1;\n            transform: scaleX(1);\n          }\n        }\n      }\n    }\n  }\n} \n\n@media (max-width: 35em) {\n  @keyframes fade-in {\n    from {\n      opacity: 0;\n      transform: translateX(100%);\n    }\n    to {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n  @keyframes fade-out {\n    from {\n      opacity: 1;\n      transform: translateX(0);\n    }\n    to {\n      opacity: 0;\n      transform: translateX(100%);\n    }\n  }\n\n  .zig-zag-nav {\n    flex-direction: column;\n    position: fixed;\n    inset:  0 0 0 30%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/space-background.webp */ "./src/assets/images/space-background.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  font: inherit;
}

html {
  box-sizing: inherit;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  line-height: 1.5;
  min-height: 100vh;
  position: relative;
  text-rendering: optimizeSpeed;
}

html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  background: transparent;
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

h1,
h2,
h3,
h3,
h5,
h6 {
  font-weight: normal;
}

img,
picture,
svg {
  display: block;
  max-width: 100%;
}

img {
  image-rendering: crisp-edges;
}

button {
  background-color: transparent;
  border: none;
  font-family: inherit;
  padding: 0;
}

picture img {
  object-fit: contain;
}

/* change colours to suit your needs */
ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}

/* change colours to suit your needs */
mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

del {
  text-decoration: line-through;
}

dfn {
  font-style: italic;
  margin-right: 3px;
}

abbr[title],
dfn[title] {
  cursor: help;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* change border colour to suit your needs */
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}

input,
select {
  vertical-align: middle;
}

em {
  font-style: italic;
}

.accessibility {
  height: 1px;
  left: -9999px;
  overflow: hidden;
  position: absolute;
  top: auto;
  width: 1px;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
/* * UTILITIES */
.no-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
             supported by Chrome, Edge, Opera and Firefox */
}

body {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/cover no-repeat;
  font-size: clamp(0.75rem, 5vw, 0.8313rem);
}
body #content {
  display: flex;
  flex-direction: column;
  font-family: "Space Mono", "Courier New", Courier, monospace;
}
body #content header {
  align-items: center;
  display: flex;
  grid-area: header;
  padding-top: 1rem;
  padding-inline: 1rem;
  justify-content: space-between;
  z-index: 1;
}
body #content header .header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
body #content header .header-left .header-logo {
  animation: spin 33s linear infinite;
  height: clamp(50px, 8vw, 55px);
  opacity: 0.5;
  transition: all 0.38ms ease-in-out;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
body #content header .header-left .header-logo:hover {
  animation-play-state: paused;
  opacity: 1;
}
body #content header .header-left .header-title {
  color: white;
  font-size: 1.5rem;
}
body #content header .header-right {
  align-items: center;
  display: flex;
  gap: 1.375rem;
}
body #content .zig-zag-nav {
  backdrop-filter: blur(1rem);
  background: hsla(0, 0%, 100%, 0.1);
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  padding-bottom: 2rem;
  padding-inline: 2rem;
  padding-top: calc(clamp(50px, 8vw, 55px) + 1rem);
  position: fixed;
  width: 100%;
  top: 0;
}
body #content .zig-zag-nav .nav-list-container:has(.nav-link:hover) .nav-list-header::before {
  opacity: 0;
}
body #content .zig-zag-nav .nav-list-container .nav-list-header {
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
}
body #content .zig-zag-nav .nav-list-container .nav-list-header::before {
  content: ">";
  margin-inline-end: 0.5rem;
  left: -1rem;
  position: absolute;
  top: 0;
  transition: opacity 760ms ease-in-out;
}
body #content .zig-zag-nav .nav-list-container .nav-ul {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li {
  align-items: start;
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
}
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-input-container {
  align-items: center;
  gap: 0.5rem;
  display: flex;
}
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-input-container #project-name-input {
  border: none;
  border-radius: 100vw;
  padding: 0.25rem 1rem;
}
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-buttons-container {
  display: flex;
  gap: 0.5rem;
}
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-buttons-container #add-project-button,
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-buttons-container #cancel-add-project-button {
  border-radius: 100vw;
  color: white;
  cursor: pointer;
  padding: 2px 8px;
  position: relative;
}
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-buttons-container #add-project-button::before,
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-buttons-container #cancel-add-project-button::before {
  background: linear-gradient(to bottom, silver, silver, transparent);
  border-radius: inherit;
  content: "";
  display: inline-block;
  height: 100%;
  inset: 0;
  opacity: 0.3;
  position: absolute;
  transform: scale(0);
  transform-origin: bottom center;
  transition: transform 100ms ease-in-out;
  width: 100%;
  z-index: -1;
}
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-buttons-container #add-project-button:hover::before,
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-buttons-container #cancel-add-project-button:hover::before {
  transform: scale(1);
}
body #content .zig-zag-nav .nav-list-container .nav-ul .nav-link {
  white-space: nowrap;
}
body #content .zig-zag-nav .nav-list-container .nav-ul .nav-link::after {
  content: ">";
  opacity: 0;
  position: absolute;
  top: 0;
  left: -1rem;
  transition: opacity 380ms ease-in-out;
}
body #content .zig-zag-nav .nav-list-container .nav-ul .nav-link:hover::after {
  opacity: 1;
}
body #content .zig-zag-nav .nav-list-container .nav-ul .nav-link.special-nav-link {
  transition: transform 380ms ease-in-out;
}
body #content .zig-zag-nav .nav-list-container .nav-ul .nav-link.special-nav-link:hover {
  transform: translateX(0.25rem) scale(1.125);
}
body #content .zig-zag-nav .nav-list-container .nav-ul .nav-link.special-nav-link::after {
  content: "+";
  opacity: 1;
  transition: transform 380ms ease-in-out;
}
body #content .zig-zag-nav .nav-list-container .nav-ul .nav-link.special-nav-link:hover::after {
  transform: translate(-0.25rem) scale(3) rotate(360deg);
}
body #content main {
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding-inline: 1rem;
}
body #content main .main-container {
  border-radius: 50px;
  height: 100%;
  width: 88vw;
}
body #content footer {
  background-color: green;
  grid-area: footer;
}

@media (max-width: 35em) {
  body #content .zig-zag-nav {
    border-radius: unset;
    flex-direction: column;
    padding: min(30vh, 10rem) 2rem;
    inset: 0 0 0 30%;
  }
  body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li {
    flex-direction: column;
  }
}

/*# sourceMappingURL=styles.css.map */
`, "",{"version":3,"sources":["webpack://./src/sass/cyclone-reset.scss","webpack://./src/css/styles.css","webpack://./src/sass/main.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/listIcon/listIcon.scss":
/*!***********************************************!*\
  !*** ./src/components/listIcon/listIcon.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_listIcon_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./listIcon.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/listIcon/listIcon.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_listIcon_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_listIcon_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_listIcon_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_listIcon_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/nav-toggle/nav-toggle.scss":
/*!***************************************************!*\
  !*** ./src/components/nav-toggle/nav-toggle.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_nav_toggle_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./nav-toggle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/nav-toggle/nav-toggle.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_nav_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_nav_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_nav_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_nav_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/theme-toggle/theme-toggle.scss":
/*!*******************************************************!*\
  !*** ./src/components/theme-toggle/theme-toggle.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_theme_toggle_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./theme-toggle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/theme-toggle/theme-toggle.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_theme_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_theme_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_theme_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_theme_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/zig-zag-nav/zig-zag-nav.scss":
/*!*****************************************************!*\
  !*** ./src/components/zig-zag-nav/zig-zag-nav.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_zig_zag_nav_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./zig-zag-nav.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/zig-zag-nav/zig-zag-nav.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_zig_zag_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_zig_zag_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_zig_zag_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_zig_zag_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/priority-logo.webp":
/*!**********************************************!*\
  !*** ./src/assets/images/priority-logo.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0f19e6f57687481453e.webp";

/***/ }),

/***/ "./src/assets/images/space-background.webp":
/*!*************************************************!*\
  !*** ./src/assets/images/space-background.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e4d2dc13ad649dff692.webp";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _components_zig_zag_nav_zig_zag_nav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/zig-zag-nav/zig-zag-nav.scss */ "./src/components/zig-zag-nav/zig-zag-nav.scss");
/* harmony import */ var _components_zig_zag_nav_zip_zag_nav_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/zig-zag-nav/zip-zag-nav-markup */ "./src/components/zig-zag-nav/zip-zag-nav-markup.js");
/* harmony import */ var _header_markup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-markup */ "./src/js/header-markup.js");
/* harmony import */ var _components_listIcon_listIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/listIcon/listIcon.js */ "./src/components/listIcon/listIcon.js");





var content = document.getElementById('content');

// ! CREATE HEADER
content.appendChild((0,_header_markup__WEBPACK_IMPORTED_MODULE_3__.createHeader)());

// ! CREATE NAV
// ? createZigZagNav accepts 4 arguments:
// * objectOfLists is an object that contains the list objects that will be used to create the nav lists
// * initialPage is a string that will be used to set the aria - current attribute (use the index of the page name object)
// * navType is a string that will be used to determine if the nav links are buttons or anchors options are 'button' or 'a'
// * id is a string that will be used to set the id attribute of the nav's nested element
// * specialNavLink is a string that matches a page name in the objectOfLists that will be used to create a special nav link
// * with custom behavior (adjustable in zigZagNav.js)

var listObjects = {
  Home: {
    listElements: [['All Tasks', '#'], ['Today', '#'], ['Next 7 Days', '#'], ['Important', '#']]
  },
  Projects: {
    listElements: [['Add Project', '#'], ['add-project-form', '#']]
  }
};
var initialPage = listObjects.Home.listElements[0][0];
content.appendChild((0,_components_zig_zag_nav_zip_zag_nav_markup__WEBPACK_IMPORTED_MODULE_2__.createZigZagNav)(listObjects, initialPage, 'button', 'nav-primary-aria', 'Add Project'));

// ! test
// ! test
// ! test
var addProjectTestLi = document.querySelector('#nav-primary-aria > div:nth-child(2) > ul > li:nth-child(2)');
addProjectTestLi.setAttribute('id', 'add-project-li');
addProjectTestLi.innerHTML = ''; // clear the li

var projectInputContainer = document.createElement('div');
projectInputContainer.setAttribute('id', 'project-input-container');
var projectNameInput = document.createElement('input');
projectNameInput.setAttribute('id', 'project-name-input');
projectNameInput.setAttribute('type', 'text');
projectNameInput.setAttribute('placeholder', 'Enter Project Name');
projectNameInput.setAttribute('max-length', 24);
var projectButtonsContainer = document.createElement('div');
projectButtonsContainer.setAttribute('id', 'project-buttons-container');
var addProjectButton = document.createElement('button');
addProjectButton.setAttribute('id', 'add-project-button');
addProjectButton.setAttribute('type', 'button');
addProjectButton.setAttribute('aria-label', 'Add Project');
addProjectButton.textContent = 'add';
var cancelAddProjectButton = document.createElement('button');
cancelAddProjectButton.setAttribute('id', 'cancel-add-project-button');
cancelAddProjectButton.setAttribute('type', 'button');
cancelAddProjectButton.setAttribute('aria-label', 'Cancel Add Project');
cancelAddProjectButton.textContent = 'cancel';
projectInputContainer.appendChild((0,_components_listIcon_listIcon_js__WEBPACK_IMPORTED_MODULE_4__.createListIcon)());
projectInputContainer.appendChild(projectNameInput);
projectButtonsContainer.appendChild(addProjectButton);
projectButtonsContainer.appendChild(cancelAddProjectButton);
addProjectTestLi.appendChild(projectInputContainer);
addProjectTestLi.appendChild(projectButtonsContainer);
// ! test
// ! test
// ! test

var main = document.createElement('main');
var mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
main.appendChild(mainContainer);
content.appendChild(main);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhHQUE4RyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLEtBQUssTUFBTSxXQUFXLFdB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxrS0FBa0ssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLHlFQUF5RSxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sZUFBZSxVQUFVLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sUUFBUSxXQUFXLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLHFCQUFxQixxQkFBcUIsc0JBQXNCLHNCQUFzQixzQkFBc0IsZ0JBQWdCLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxX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RCxzQkFBc0IsR0FBR2xHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUMvRGlHLHNCQUFzQixDQUFDOUYsWUFBWSxDQUFDLElBQUksRUFBRSwyQkFBMkIsQ0FBQztBQUN0RThGLHNCQUFzQixDQUFDOUYsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7QUFDckQ4RixzQkFBc0IsQ0FBQzlGLFlBQVksQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLENBQUM7QUFDdkU4RixzQkFBc0IsQ0FBQ2xELFdBQVcsR0FBRyxRQUFRO0FBRTdDOEMscUJBQXFCLENBQUN4RixXQUFXLENBQUNSLGdGQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ25EZ0cscUJBQXFCLENBQUN4RixXQUFXLENBQUN5RixnQkFBZ0IsQ0FBQztBQUVuREMsdUJBQXVCLENBQUMxRixXQUFXLENBQUMyRixnQkFBZ0IsQ0FBQztBQUNyREQsdUJBQXVCLENBQUMxRixXQUFXLENBQUM0RixzQkFBc0IsQ0FBQztBQUUzRE4sZ0JBQWdCLENBQUN0RixXQUFXLENBQUN3RixxQkFBcUIsQ0FBQztBQUNuREYsZ0JBQWdCLENBQUN0RixXQUFXLENBQUMwRix1QkFBdUIsQ0FBQztBQUNyRDtBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsSUFBSSxHQUFHbkcsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBQzNDLElBQU1tRyxhQUFhLEdBQUdwRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDbkRtRyxhQUFhLENBQUNsRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztBQUU3Q2dHLElBQUksQ0FBQzdGLFdBQVcsQ0FBQzhGLGFBQWEsQ0FBQztBQUMvQjNCLE9BQU8sQ0FBQ25FLFdBQVcsQ0FBQzZGLElBQUksQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy9saXN0SWNvbi9saXN0SWNvbi5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL25hdi10b2dnbGUvbmF2LXRvZ2dsZS1tYXJrdXAuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy9uYXYtdG9nZ2xlL25hdi10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy90aGVtZS10b2dnbGUvdGhlbWUtdG9nZ2xlLm1hcmt1cC5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL3ppZy16YWctbmF2L3ppZy16YWctbmF2LmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2NvbXBvbmVudHMvemlnLXphZy1uYXYvemlwLXphZy1uYXYtbWFya3VwLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2pzL2V2ZW50TmFtZXMuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvanMvaGVhZGVyLW1hcmt1cC5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy91dGlsaXRpZXMvaHRtbC1zY3JpcHQtaW5qZWN0aW9uLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL3V0aWxpdGllcy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy9saXN0SWNvbi9saXN0SWNvbi5zY3NzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2NvbXBvbmVudHMvbmF2LXRvZ2dsZS9uYXYtdG9nZ2xlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy90aGVtZS10b2dnbGUvdGhlbWUtdG9nZ2xlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy96aWctemFnLW5hdi96aWctemFnLW5hdi5zY3NzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL2xpc3RJY29uL2xpc3RJY29uLnNjc3M/YTM0NCIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL25hdi10b2dnbGUvbmF2LXRvZ2dsZS5zY3NzPzEyODMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy90aGVtZS10b2dnbGUvdGhlbWUtdG9nZ2xlLnNjc3M/MWYwMSIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL3ppZy16YWctbmF2L3ppZy16YWctbmF2LnNjc3M/NDNhYSIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jc3Mvc3R5bGVzLmNzcz85OWEzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ByaW9yaXR5L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcmlvcml0eS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ByaW9yaXR5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3ByaW9yaXR5L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3ByaW9yaXR5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9saXN0SWNvbi5zY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlTGlzdEljb24oKSB7XG4gIGNvbnN0IGxpc3RJY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpc3RJY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaWNvbi1jb250YWluZXInKTtcbiAgbGlzdEljb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuXG4gIGNvbnN0IGxpc3RJY29uQmFycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaXN0SWNvbkJhcnMuY2xhc3NMaXN0LmFkZCgnbGlzdC1pY29uLWJhcnMnKTtcblxuICBsaXN0SWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SWNvbkJhcnMpO1xuXG4gIHJldHVybiBsaXN0SWNvbkNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTGlzdEljb24gfTtcblxuIiwiaW1wb3J0ICcuL25hdi10b2dnbGUuc2Nzcyc7XG5pbXBvcnQgeyB0b2dnbGVOYXZCdXR0b24gfSBmcm9tICcuL25hdi10b2dnbGUnO1xuXG5mdW5jdGlvbiBjcmVhdGVOYXZUb2dnbGVCdXR0b24oYXJpYUNvbnRyb2xzSUQpIHtcbiAgY29uc3QgbmF2VG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5hdlRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtdG9nZ2xlLWJ1dHRvbicpO1xuICBuYXZUb2dnbGVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ09wZW4gTmF2aWdhdGlvbiBNZW51Jyk7XG4gIG5hdlRvZ2dsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gIG5hdlRvZ2dsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnLCBhcmlhQ29udHJvbHNJRCk7XG5cbiAgY29uc3QgbmF2VG9nZ2xlQmFycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZUb2dnbGVCYXJzLmNsYXNzTGlzdC5hZGQoJ25hdi10b2dnbGUtYmFycycpO1xuXG4gIG5hdlRvZ2dsZUJ1dHRvbi5hcHBlbmRDaGlsZChuYXZUb2dnbGVCYXJzKTtcblxuICBuYXZUb2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOYXZCdXR0b24pO1xuXG4gIHJldHVybiBuYXZUb2dnbGVCdXR0b247XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU5hdlRvZ2dsZUJ1dHRvbiB9OyIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9wdWJzdWIuanMnO1xuaW1wb3J0IHsgSElERV9OQVZfRVZFTlQsIFNIT1dfTkFWX0VWRU5UIH0gZnJvbSAnLi4vLi4vanMvZXZlbnROYW1lcy5qcyc7XG5cbmZ1bmN0aW9uIHRvZ2dsZU5hdkJ1dHRvbigpIHtcbiAgbGV0IHRvZ2dsZUJ1dHRvbkFjdGl2YXRlZCA9IHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKTtcblxuICBpZiAoIXRvZ2dsZUJ1dHRvbkFjdGl2YXRlZCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdDbG9zZSBOYXZpZ2F0aW9uIE1lbnUnKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgY29uc29sZS5sb2coJ2VtaXR0aW5nIHNob3cgbmF2Jyk7XG4gICAgZXZlbnRzLmVtaXQoU0hPV19OQVZfRVZFTlQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdPcGVuIE5hdmlnYXRpb24gTWVudScpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgY29uc29sZS5sb2coJ2VtaXR0aW5nIGhpZGUgbmF2Jyk7XG4gICAgZXZlbnRzLmVtaXQoSElERV9OQVZfRVZFTlQpO1xuICB9XG59XG5cbmV4cG9ydCB7IHRvZ2dsZU5hdkJ1dHRvbiB9O1xuIiwiLy8gKiBEZXBlbmRlbmNpZXM6IGh0bWwtc2NyaXB0LWluamVjdGlvbi5qc1xuXG4vLyAqIERlc2NyaXB0aW9uOiBDcmVhdGVzIGEgdGhlbWUgdG9nZ2xlIGJ1dHRvbi5cbi8vID8gQHJldHVybiB7SFRNTEVsZW1lbnR9IHRoZW1lVG9nZ2xlQ29udGFpbmVyXG5cbi8vICogQGV4YW1wbGVcbi8vID8gY29uc3QgdGhlbWVUb2dnbGVDb250YWluZXIgPSBjcmVhdGVUaGVtZVRvZ2dsZUJ1dHRvbigpO1xuLy8gPyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoZW1lVG9nZ2xlQ29udGFpbmVyKTtcblxuaW1wb3J0IHsgYWRkU2NyaXB0VG9IZWFkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sLXNjcmlwdC1pbmplY3Rpb25cIjtcbmltcG9ydCAnLi90aGVtZS10b2dnbGUuc2Nzcyc7XG5cbmNvbnN0IGljb25TY3JpcHRTb3VyY2UgPSAnaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzI0MTc2YWI5NzMuanMnO1xuY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgY3Jvc3NvcmlnaW46ICdhbm9ueW1vdXMnLFxufVxuXG5hZGRTY3JpcHRUb0hlYWQoaWNvblNjcmlwdFNvdXJjZSwgYXR0cmlidXRlcyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lVG9nZ2xlQnV0dG9uKCkge1xuICBjb25zdCB0aGVtZVRvZ2dsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aGVtZVRvZ2dsZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RoZW1lLXRvZ2dsZS1jb250YWluZXInKTtcblxuICBjb25zdCB0aGVtZVRvZ2dsZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGhlbWVUb2dnbGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgdGhlbWVUb2dnbGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RoZW1lLXRvZ2dsZS1jaGVja2JveCcpO1xuXG4gIGNvbnN0IHRoZW1lVG9nZ2xlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0aGVtZVRvZ2dsZUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAndGhlbWUtdG9nZ2xlLWxhYmVsJyk7XG4gIHRoZW1lVG9nZ2xlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGhlbWUtdG9nZ2xlLWNoZWNrYm94Jyk7XG5cbiAgY29uc3Qgc3VuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgc3VuSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1zdW4nKTtcbiAgc3VuSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1bicpO1xuXG4gIGNvbnN0IG1vb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBtb29uSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1tb29uJyk7XG4gIG1vb25JY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9vbicpO1xuXG4gIHRoZW1lVG9nZ2xlTGFiZWwuYXBwZW5kQ2hpbGQoc3VuSWNvbik7XG4gIHRoZW1lVG9nZ2xlTGFiZWwuYXBwZW5kQ2hpbGQobW9vbkljb24pO1xuXG4gIHRoZW1lVG9nZ2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoZW1lVG9nZ2xlQ2hlY2tib3gpO1xuICB0aGVtZVRvZ2dsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGVtZVRvZ2dsZUxhYmVsKTtcblxuICByZXR1cm4gdGhlbWVUb2dnbGVDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRoZW1lVG9nZ2xlQnV0dG9uIH07IiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3B1YnN1Yi5qcyc7XG5pbXBvcnQgeyBISURFX05BVl9FVkVOVCwgU0hPV19OQVZfRVZFTlQgfSBmcm9tICcuLi8uLi9qcy9ldmVudE5hbWVzLmpzJztcblxuLy8gISBsZXQgaXNBbmltYXRpbmcgPSBmYWxzZTtcbi8vICEgbGV0IHBlbmRpbmcgPSBudWxsO1xuXG5mdW5jdGlvbiBoaWRlTmF2KCkge1xuICBjb25zdCB6aWdaYWdOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuemlnLXphZy1uYXYnKTtcbiAgXG4gIHppZ1phZ05hdi5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoaWRlTmF2KTtcbiAgXG4gIHppZ1phZ05hdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gIHppZ1phZ05hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJpbGl0eScsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhdGVIaWRlTmF2KCkge1xuICBjb25zdCB6aWdaYWdOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuemlnLXphZy1uYXYnKTtcbiAgemlnWmFnTmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmlsaXR5JywgJ2Nsb3NpbmcnKTtcbiAgemlnWmFnTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhpZGVOYXYpO1xufVxuXG5mdW5jdGlvbiBzaG93TmF2KCkge1xuICBjb25zdCB6aWdaYWdOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuemlnLXphZy1uYXYnKTtcblxuICB6aWdaYWdOYXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGlkZU5hdik7XG4gIC8vICEgVGhpcyBpcyBhIGhhY2sgdG8gcHJldmVudCB0aGUgbmF2IGZyb20gaGlkaW5nIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBuYXYgdG9nZ2xlIGJ1dHRvbiB3aGlsZSB0aGUgbmF2IGlzIGFuaW1hdGluZyBjbG9zZWRcbiAgLy8gISB1c2UgaXNBbmltYXRpbmcgdG8gcHJldmVudCB0aGUgbmF2IGZyb20gaGlkaW5nIHdoaWxlIGl0IGlzIGFuaW1hdGluZyBjbG9zZWRcbiAgLy8gISB1c2UgcGVuZGluZyB0byBwcmV2ZW50IHRoZSBuYXYgZnJvbSBoaWRpbmcgd2hpbGUgaXQgaXMgYW5pbWF0aW5nIG9wZW5cbiAgLy8gISBpc0FuaW1hdGluZyBhbmQgcGVuZGluZyBhcmUgc2V0IHRvIHRydWUgd2hlbiB0aGUgbmF2IGlzIGFuaW1hdGluZyBhbmQgc2V0IHRvIGZhbHNlIHdoZW4gdGhlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZVxuICAvLyAhIGlzQW5pbWF0aW5nIGFuZCBwZW5kaW5nIGFyZSBzZXQgdG8gZmFsc2Ugd2hlbiB0aGUgbmF2IGlzIGhpZGRlblxuICAvLyAhIGlzQW5pbWF0aW5nIGFuZCBwZW5kaW5nIGFyZSBzZXQgdG8gZmFsc2Ugd2hlbiB0aGUgbmF2IGlzIHNob3duXG5cbiAgemlnWmFnTmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gIHppZ1phZ05hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJpbGl0eScsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUxpc3RlbmVycygpIHtcbiAgZXZlbnRzLm9uKFNIT1dfTkFWX0VWRU5ULCBzaG93TmF2KTtcbiAgZXZlbnRzLm9uKEhJREVfTkFWX0VWRU5ULCBpbml0aWF0ZUhpZGVOYXYpO1xufVxuXG5leHBvcnQgeyBhY3RpdmF0ZUxpc3RlbmVycyB9OyIsImltcG9ydCAnLi96aWctemFnLW5hdi5zY3NzJztcbmltcG9ydCB7IGFjdGl2YXRlTGlzdGVuZXJzIH0gZnJvbSAnLi96aWctemFnLW5hdi5qcyc7XG5cbi8vICogaW5pdGlhbFBhZ2UgaXMgYSBzdHJpbmcgdGhhdCB3aWxsIGJlIHVzZWQgdG8gc2V0IHRoZSBhcmlhLWN1cnJlbnQgYXR0cmlidXRlICh1c2UgdGhlIGluZGV4IG9mIHRoZSBwYWdlIG5hbWUpXG4vLyAqIGFuY2hvck9yQnV0dG9uIGlzIGEgc3RyaW5nIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgbmF2IGxpbmtzIGFyZSBidXR0b25zIG9yIGFuY2hvcnMgb3B0aW9ucyBhcmUgJ2J1dHRvbicgb3IgJ2EnXG4vLyAqIGlkIGlzIGEgc3RyaW5nIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHNldCB0aGUgaWQgYXR0cmlidXRlIG9mIHRoZSBuYXYncyBuZXN0ZWQgVUwgZWxlbWVudFxuXG5mdW5jdGlvbiBjcmVhdGVaaWdaYWdOYXYoXG4gIG9iamVjdE9mTGlzdHMsXG4gIGluaXRpYWxQYWdlLFxuICBhbmNob3JPckJ1dHRvbixcbiAgYXJpYUNvbnRyb2xzSUQsXG4gIHNwZWNpYWxOYXZMaW5rXG4pIHtcbiAgY29uc3QgemlnWmFnTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIHppZ1phZ05hdi5jbGFzc0xpc3QuYWRkKCd6aWctemFnLW5hdicpO1xuICB6aWdaYWdOYXYuc2V0QXR0cmlidXRlKCdpZCcsIGFyaWFDb250cm9sc0lEKTtcbiAgemlnWmFnTmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdNYWluIE5hdmlnYXRpb24nKTtcbiAgemlnWmFnTmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgemlnWmFnTmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmlsaXR5JywgZmFsc2UpO1xuXG4gIGZvciAoY29uc3QgbGlzdCBpbiBvYmplY3RPZkxpc3RzKSB7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2LWxpc3QtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBsaXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsaXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ25hdi1saXN0LWhlYWRlcicpO1xuICAgIGxpc3RIZWFkZXIudGV4dENvbnRlbnQgPSBsaXN0O1xuXG4gICAgY29uc3QgbGlzdFVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsaXN0VUwuY2xhc3NMaXN0LmFkZCgnbmF2LXVsJyk7XG5cbiAgICBjb25zdCBncm91cGVkTGlzdEVsZW1lbnRzID0gb2JqZWN0T2ZMaXN0c1tsaXN0XS5saXN0RWxlbWVudHM7XG5cbiAgICBjb25zdCBsaXN0RnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZ3JvdXBlZExpc3RFbGVtZW50cy5mb3JFYWNoKChwYWdlTmFtZUFuZEhyZWYsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwYWdlTmFtZSA9IHBhZ2VOYW1lQW5kSHJlZlswXTtcbiAgICAgIGNvbnN0IHBhZ2VIcmVmID0gcGFnZU5hbWVBbmRIcmVmWzFdO1xuXG4gICAgICBjb25zdCBuYXZMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBuYXZMSS5jbGFzc0xpc3QuYWRkKCduYXYtbGknKTtcblxuICAgICAgY29uc3QgbGlua051bWJlclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBsaW5rTnVtYmVyU3Bhbi5jbGFzc0xpc3QuYWRkKCduYXYtbnVtYmVyJyk7XG4gICAgICBsaW5rTnVtYmVyU3Bhbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICBsaW5rTnVtYmVyU3Bhbi50ZXh0Q29udGVudCA9IGAwJHtpbmRleH1gO1xuXG4gICAgICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgYW5jaG9yT3JCdXR0b24gPT09ICdidXR0b24nXG4gICAgICAgICAgPyAnYnV0dG9uJ1xuICAgICAgICAgIDogJ2EnXG4gICAgICAgICAgPyAnYSdcbiAgICAgICAgICA6IGFsZXJ0KCdBY2NlcHRzIG9ubHkgXCJidXR0b25cIiBvciBcImFcIiBhcyBhcmd1bWVudHMnKVxuICAgICAgKTtcbiAgICAgIG5hdkxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmsnKTtcblxuICAgICAgaWYgKGFuY2hvck9yQnV0dG9uID09PSAnYScpIHtcbiAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBwYWdlSHJlZik7IC8vICEgVVBEQVRFIFRISVMgVE8gVVNFIFRIRSBQQUdFIE5BTUVcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2VOYW1lID09PSBpbml0aWFsUGFnZSkge1xuICAgICAgICBuYXZMaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3BhZ2UnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2VOYW1lID09PSBzcGVjaWFsTmF2TGluaykge1xuICAgICAgICBuYXZMaW5rLmNsYXNzTGlzdC5hZGQoJ3NwZWNpYWwtbmF2LWxpbmsnKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgemlnWmFnTmF2LmFwcGVuZENoaWxkKGxpc3RIZWFkZXIpO1xuXG4gICAgICBpZiAoIW5hdkxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcGVjaWFsLW5hdi1saW5rJykpIHtcbiAgICAgICAgbmF2TGluay5hcHBlbmRDaGlsZChsaW5rTnVtYmVyU3Bhbik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIG5hdkxpbmsuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFnZU5hbWUpKTtcbiAgICAgIG5hdkxJLmFwcGVuZENoaWxkKG5hdkxpbmspO1xuICAgICAgbGlzdEZyYWdtZW50LmFwcGVuZENoaWxkKG5hdkxJKTtcbiAgICB9KTtcblxuICAgIGxpc3RVTC5hcHBlbmRDaGlsZChsaXN0RnJhZ21lbnQpO1xuICAgIFxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEhlYWRlcik7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0VUwpO1xuXG5cbiAgICB6aWdaYWdOYXYuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gIH1cblxuICBhY3RpdmF0ZUxpc3RlbmVycygpO1xuXG4gIHJldHVybiB6aWdaYWdOYXY7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVppZ1phZ05hdiB9OyIsImV4cG9ydCBjb25zdCBTSE9XX05BVl9FVkVOVCA9ICdzaG93TmF2JztcblxuZXhwb3J0IGNvbnN0IEhJREVfTkFWX0VWRU5UID0gJ2hpZGVOYXYnOyIsImltcG9ydCBwcmlvcml0eUxvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcmlvcml0eS1sb2dvLndlYnAnO1xuXG5pbXBvcnQgeyBjcmVhdGVUaGVtZVRvZ2dsZUJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGhlbWUtdG9nZ2xlL3RoZW1lLXRvZ2dsZS5tYXJrdXAnO1xuaW1wb3J0IHsgY3JlYXRlTmF2VG9nZ2xlQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9uYXYtdG9nZ2xlL25hdi10b2dnbGUtbWFya3VwJztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBjb25zdCBoZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckxlZnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxlZnQnKTtcblxuICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ28nKTtcbiAgaGVhZGVyTG9nby5zZXRBdHRyaWJ1dGUoJ3NyYycsIHByaW9yaXR5TG9nbyk7XG4gIGhlYWRlckxvZ28uc2V0QXR0cmlidXRlKCdhbHQnLCAnUHJpb3JpdHkgTG9nbycpO1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRpdGxlJyk7XG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJzxwcntpb31yaXR5Pic7XG5cbiAgaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcbiAgaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyUmlnaHQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXJpZ2h0Jyk7XG5cbiAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlVGhlbWVUb2dnbGVCdXR0b24oKSk7XG4gIGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZU5hdlRvZ2dsZUJ1dHRvbignbmF2LXByaW1hcnktYXJpYScpKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTGVmdCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJSaWdodCk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhlYWRlciB9O1xuIiwiZnVuY3Rpb24gYWRkU2NyaXB0VG9IZWFkKHNyYywgYXR0cmlidXRlcyA9IHt9KSB7XG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcblxuICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICB9XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuXG5leHBvcnQgeyBhZGRTY3JpcHRUb0hlYWQgfTsiLCIvLyAqIGV2ZW50cyAocHVibGlzaCBzdWJzY3JpYmUgLyBtZWRpYXRvcikgcGF0dGVyblxubGV0IGV2ZW50cyA9IHtcbiAgZXZlbnRzOiB7fSxcbiAgb246IGZ1bmN0aW9uIChldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgfSxcbiAgb2ZmOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVtaXQ6IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICBmbihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn07XG5cbi8vICEgd2hlbiBhbiBldmVudCBpcyBjYWxsZWQgd2l0aCBvbjpcbiAgLy8gKiBldmVudCBuYW1lXG4vLyAqICAgZnVuY3Rpb24gdG8gcnVuXG4vLyAqICAgYWRkIGZ1bmN0aW9uIHRvIGV2ZW50cyBvYmplY3Rcbi8vICogICBldmVudHMgPSB7XG4vLyAqICAgICBldmVudHM6IHtcbi8vICogICAgICAgZXZlbnROYW1lOiBbZm5dLFxuLy8gKiAgICAgfSxcbi8vICogICB9XG4vLyAqXG4vLyAqIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIHdpdGggZW1pdDpcbi8vICogICBldmVudHMgPSB7XG4vLyAqICAgICBldmVudHM6IHtcbi8vICogICAgICAgZXZlbnROYW1lOiBbZm5dLFxuLy8gKiAgICAgfSxcbi8vICogICB9XG4vLyAqICAgZXZlbnRzLmV2ZW50cy5ldmVudE5hbWUuZm9yRWFjaChmbiA9PiBmbihkYXRhKSk7XG4vLyAqXG4vLyAqIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIHdpdGggb2ZmOlxuLy8gKiAgIGV2ZW50cyA9IHtcbi8vICogICAgIGV2ZW50czoge1xuLy8gKiAgICAgICBldmVudE5hbWU6IFtmbl0sXG4vLyAqICAgICB9LFxuLy8gKiAgIH1cbi8vICogICBldmVudHMuZXZlbnRzLmV2ZW50TmFtZS5mb3JFYWNoKGZuID0+IHtcbi8vICogICAgIGlmIChmbiA9PT0gZm4pIHtcbi8vICogICAgICAgZXZlbnRzLmV2ZW50cy5ldmVudE5hbWUuc3BsaWNlKGksIDEpO1xuLy8gKiAgICAgfVxuLy8gKiAgIH0pO1xuLy8gKlxuLy8gKiAgIGZ1bmN0aW9uIHRvIHJlbW92ZVxuLy8gKiAgIHJlbW92ZSBmdW5jdGlvbiBmcm9tIGV2ZW50cyBvYmplY3Rcbi8vICogICBldmVudHMgPSB7XG4vLyAqICAgICBldmVudHM6IHtcbi8vICogICAgICAgZXZlbnROYW1lOiBbXSxcbi8vICogICAgIH0sXG4vLyAqICAgfVxuLy8gKlxuXG5leHBvcnQgeyBldmVudHMgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmxpc3QtaWNvbi1jb250YWluZXIge1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMC43NXJlbTtcbn1cbi5saXN0LWljb24tY29udGFpbmVyIC5saXN0LWljb24tYmFycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5saXN0LWljb24tY29udGFpbmVyOjpiZWZvcmUsIC5saXN0LWljb24tY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5saXN0LWljb24tY29udGFpbmVyOjpiZWZvcmUge1xuICB0b3A6IDA7XG59XG4ubGlzdC1pY29uLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBib3R0b206IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9saXN0SWNvbi9saXN0SWNvbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBTEs7QUFJUDtBQUdFO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBREo7QUFJRTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1FO0VBQ0UsTUFBQTtBQUpKO0FBT0U7RUFDRSxTQUFBO0FBTEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHNpemU6IDAuNzVyZW07XFxuXFxuLmxpc3QtaWNvbi1jb250YWluZXIge1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAkc2l6ZTtcXG5cXG4gIC5saXN0LWljb24tYmFycyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIH1cXG5cXG4gICY6OmJlZm9yZSxcXG4gICY6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIH1cXG5cXG4gICY6OmJlZm9yZSB7XFxuICAgIHRvcDogMDtcXG4gIH1cXG5cXG4gICY6OmFmdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgfVxcblxcblxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5uYXYtdG9nZ2xlLWJ1dHRvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIwcHg7XG59XG4ubmF2LXRvZ2dsZS1idXR0b24gLm5hdi10b2dnbGUtYmFycywgLm5hdi10b2dnbGUtYnV0dG9uIC5uYXYtdG9nZ2xlLWJhcnM6OmJlZm9yZSwgLm5hdi10b2dnbGUtYnV0dG9uIC5uYXYtdG9nZ2xlLWJhcnM6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xufVxuLm5hdi10b2dnbGUtYnV0dG9uLmFjdGl2ZSAubmF2LXRvZ2dsZS1iYXJzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubmF2LXRvZ2dsZS1idXR0b24uYWN0aXZlIC5uYXYtdG9nZ2xlLWJhcnM6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5uYXYtdG9nZ2xlLWJ1dHRvbi5hY3RpdmUgLm5hdi10b2dnbGUtYmFyczo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDQ1ZGVnKTtcbn1cbi5uYXYtdG9nZ2xlLWJ1dHRvbiAubmF2LXRvZ2dsZS1iYXJzIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xuICBoZWlnaHQ6IDEuNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdi10b2dnbGUtYnV0dG9uIC5uYXYtdG9nZ2xlLWJhcnM6OmJlZm9yZSwgLm5hdi10b2dnbGUtYnV0dG9uIC5uYXYtdG9nZ2xlLWJhcnM6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBoZWlnaHQ6IDEuNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXYtdG9nZ2xlLWJ1dHRvbiAubmF2LXRvZ2dsZS1iYXJzOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcuNzVweCk7XG59XG4ubmF2LXRvZ2dsZS1idXR0b24gLm5hdi10b2dnbGUtYmFyczo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy43NXB4KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL25hdi10b2dnbGUvbmF2LXRvZ2dsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBUUUsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBVmdCO0VBV2hCLHVCQUFBO0VBQ0EsV0FYZTtBQUtqQjtBQVFFO0VBQ0UsaUNBQUE7QUFOSjtBQVVJO0VBQ0UsdUJBQUE7QUFSTjtBQVVNO0VBQ0UsdUNBQUE7QUFSUjtBQVVNO0VBQ0Usc0NBQUE7QUFSUjtBQWFFO0VBQ0UsaUJBNUJpQjtFQTZCakIsb0JBOUJ5QjtFQStCekIsYUFoQ2dCO0VBaUNoQixrQkFBQTtFQUNBLFdBQUE7QUFYSjtBQWFJO0VBQ0UsdUJBbkNlO0VBb0NmLG9CQXJDdUI7RUFzQ3ZCLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQTFDYztFQTJDZCxXQUFBO0FBWE47QUFjSTtFQUNFLDhCQUFBO0FBWk47QUFlSTtFQUNFLDZCQUFBO0FBYk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdi10b2dnbGUtYnV0dG9uIHtcXG4gICRidXR0b24taGVpZ2h0OiAyMHB4O1xcbiAgJGJ1dHRvbi13aWR0aDogMjBweDtcXG4gICRidXR0b24tYmFyLXNpemU6IDEuNXB4O1xcbiAgJGJ1dHRvbi1iYXItYm9yZGVyLXJhZGl1czogMTAwdnc7XFxuICAkYnV0dG9uLWJhci1jb2xvcjogd2hpdGU7XFxuICAkYnV0dG9uLXRyYW5zaXRpb24tdGltZTogMTUwbXM7IFxcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6ICRidXR0b24taGVpZ2h0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogJGJ1dHRvbi13aWR0aDtcXG5cXG4gIC5uYXYtdG9nZ2xlLWJhcnMsIC5uYXYtdG9nZ2xlLWJhcnM6OmJlZm9yZSwgLm5hdi10b2dnbGUtYmFyczo6YWZ0ZXIge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgJGJ1dHRvbi10cmFuc2l0aW9uLXRpbWUgZWFzZS1pbi1vdXQ7XFxuICB9XFxuICBcXG4gICYuYWN0aXZlIHtcXG4gICAgLm5hdi10b2dnbGUtYmFycyB7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgXFxuICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICB9XFxuICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAubmF2LXRvZ2dsZS1iYXJzIHtcXG4gICAgYmFja2dyb3VuZDogJGJ1dHRvbi1iYXItY29sb3I7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRidXR0b24tYmFyLWJvcmRlci1yYWRpdXM7XFxuICAgIGhlaWdodDogJGJ1dHRvbi1iYXItc2l6ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgJjo6YmVmb3JlLCAmOjphZnRlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1iYXItY29sb3I7XFxuICAgICAgYm9yZGVyLXJhZGl1czogJGJ1dHRvbi1iYXItYm9yZGVyLXJhZGl1cztcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaW5zZXQ6IDA7XFxuICAgICAgaGVpZ2h0OiAkYnV0dG9uLWJhci1zaXplO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoKCRidXR0b24taGVpZ2h0IC0gJGJ1dHRvbi1iYXItc2l6ZSAqIDMpIC8gLTIgKSk7XFxuICAgIH1cXG5cXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKCgkYnV0dG9uLWhlaWdodCAtICRidXR0b24tYmFyLXNpemUgKiAzKSAvIDIgKSk7XFxuICAgIH1cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjdGhlbWUtdG9nZ2xlLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDM4MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4jdGhlbWUtdG9nZ2xlLWNoZWNrYm94IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RoZW1lLXRvZ2dsZS1sYWJlbCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTJweCBzaWx2ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwcmVtO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBtaW4taGVpZ2h0OiAyNXB4O1xuICBtaW4td2lkdGg6IDI1cHg7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRTEwKy9FZGdlICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgKi9cbn1cblxuI3N1bixcbiNtb29uIHtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDAuNjc1cmVtO1xuICBwYWRkaW5nOiAzLjVweDtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbiNzdW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTk5QTQzO1xuICBib3gtc2hhZG93OiBpbnNldCAzcHggLTNweCA4cHggYmxhY2s7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMjBweCArIDByZW0pKSByb3RhdGUoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDIwcHggKyAwcmVtKSkgcm90YXRlKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuXG4jbW9vbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkYxRDU7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0zcHggLTNweCA4cHggYmxhY2s7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgcm90YXRlKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGUoMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbiN0aGVtZS10b2dnbGUtY2hlY2tib3g6Y2hlY2tlZCB+ICN0aGVtZS10b2dnbGUtbGFiZWwgPiAjc3VuIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGUoMzYwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgcm90YXRlKDM2MGRlZyk7XG59XG5cbiN0aGVtZS10b2dnbGUtY2hlY2tib3g6Y2hlY2tlZCB+ICN0aGVtZS10b2dnbGUtbGFiZWwgPiAjbW9vbiB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoKDIwcHggKyAwcmVtKSAqIC0xKSkgcm90YXRlKDM2MGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKCgyMHB4ICsgMHJlbSkgKiAtMSkpIHJvdGF0ZSgzNjBkZWcpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdGhlbWUtdG9nZ2xlL3RoZW1lLXRvZ2dsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQXpCaUI7RUEwQmpCLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUEsRUFBQSxZQUFBO0VBQ0EscUJBQUEsRUFBQSxlQUFBO0VBQ0EseUJBQUEsRUFBQSxXQUFBO0VBQ0EsaUJBQUEsRUFBQSxhQUFBO0FBTEY7O0FBUUE7O0VBRUUsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBeEMwQjtFQXlDMUIsV0ExQ3dCO0FBcUMxQjs7QUFRQTtFQUNFLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7RUFDQSxrREFBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0VBQ0EscUNBQUE7RUFDQSxVQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7QUFMRjs7QUFRQTtFQUNFLFVBQUE7RUFDQSxpREFBQTtFQUNBLHlDQUFBO0FBTEY7O0FBUUE7RUFDRSxVQUFBO0VBQ0Esc0VBQUE7RUFDQSw4REFBQTtBQUxGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiR0aGVtZS10b2dnbGUtZ2FwOiAwcmVtO1xcbiR0aGVtZS10b2dnbGUtaWNvbi13aWR0aDogMTBweDtcXG4kdGhlbWUtdG9nZ2xlLWljb24tcGFkZGluZzogMy41cHg7XFxuJHRoZW1lLWljb24tc3BhY2UtYmV0d2VlbjogY2FsYygkdGhlbWUtdG9nZ2xlLWljb24td2lkdGggKiAyICsgJHRoZW1lLXRvZ2dsZS1nYXApO1xcblxcbiN0aGVtZS10b2dnbGUtY29udGFpbmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzgwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiN0aGVtZS10b2dnbGUtY2hlY2tib3gge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3RoZW1lLXRvZ2dsZS1sYWJlbCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEycHggc2lsdmVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDsgXFxuICBnYXA6ICR0aGVtZS10b2dnbGUtZ2FwO1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG5cXG4gIG1pbi1oZWlnaHQ6IDI1cHg7XFxuICBtaW4td2lkdGg6IDI1cHg7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkICovXFxufVxcblxcbiNzdW4sXFxuI21vb24ge1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDAuNjc1cmVtO1xcbiAgcGFkZGluZzogJHRoZW1lLXRvZ2dsZS1pY29uLXBhZGRpbmc7XFxuICB3aWR0aDogJHRoZW1lLXRvZ2dsZS1pY29uLXdpZHRoO1xcbn1cXG5cXG4jc3VuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOTlBNDM7XFxuICBib3gtc2hhZG93OiBpbnNldCAzcHggLTNweCA4cHggYmxhY2s7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHRoZW1lLWljb24tc3BhY2UtYmV0d2Vlbikgcm90YXRlKDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0aGVtZS1pY29uLXNwYWNlLWJldHdlZW4pIHJvdGF0ZSgwKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jbW9vbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGMUQ1O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTNweCAtM3B4IDhweCBibGFjaztcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZSgwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZSgwKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jdGhlbWUtdG9nZ2xlLWNoZWNrYm94OmNoZWNrZWQgfiAjdGhlbWUtdG9nZ2xlLWxhYmVsID4gI3N1biB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG5cXG4jdGhlbWUtdG9nZ2xlLWNoZWNrYm94OmNoZWNrZWQgfiAjdGhlbWUtdG9nZ2xlLWxhYmVsID4gI21vb24ge1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoJHRoZW1lLWljb24tc3BhY2UtYmV0d2VlbiAqIC0xKSkgcm90YXRlKDM2MGRlZyk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygkdGhlbWUtaWNvbi1zcGFjZS1iZXR3ZWVuICogLTEpKSByb3RhdGUoMzYwZGVnKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxufVxuLnppZy16YWctbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cmVtO1xufVxuLnppZy16YWctbmF2W2RhdGEtdmlzaWJpbGl0eT1mYWxzZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnppZy16YWctbmF2W2RhdGEtdmlzaWJpbGl0eT1jbG9zaW5nXSB7XG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMzgwbXMgZWFzZS1pbi1vdXQ7XG59XG4uemlnLXphZy1uYXZbZGF0YS12aXNpYmlsaXR5PXRydWVdIHtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDM4MG1zIGVhc2UtaW4tb3V0O1xufVxuLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xufVxuLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi1saXN0LWhlYWRlciB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAubmF2LWxpOm50aC1vZi10eXBlKG9kZCkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cbi56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saTpudGgtb2YtdHlwZShldmVuKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAubmF2LWxpOjpiZWZvcmUsIC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saTo6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgY29udGVudDogXCJcIjtcbiAgaW5zZXQ6IC01cHggLTE1cHg7XG4gIG9wYWNpdHk6IDAuMTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgei1pbmRleDogMDtcbn1cbi56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saTpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAubmF2LWxpIC5uYXYtbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogdW5zZXQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbn1cbi56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saSAubmF2LWxpbmsgLm5hdi1udW1iZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4taW5saW5lLWVuZDogMC43NXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAubmF2LWxpIC5uYXYtbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCB3aGl0ZTtcbiAgaW5zZXQ6IDVweCAwIDAgMDtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDM4MG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbn1cbi56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saSAubmF2LWxpbmtbYXJpYS1jdXJyZW50XTo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNWVtKSB7XG4gIEBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICB9XG4gIC56aWctemFnLW5hdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaW5zZXQ6IDAgMCAwIDMwJTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvemlnLXphZy1uYXYvemlnLXphZy1uYXYuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQUNGO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUtFLGFBQUE7RUFDQSxTQUFBO0FBSkY7QUFNRTtFQUNFLGFBQUE7QUFKSjtBQU9FO0VBQ0UscUNBQUE7QUFMSjtBQVNFO0VBQ0Usb0NBQUE7QUFQSjtBQVVFO0VBQ0UsWUFyQlc7RUFzQlgsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQVJKO0FBVUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVJOO0FBV0k7RUFDRSxnQkFBQTtBQVROO0FBV007RUFDRSxrQkFBQTtFQUNBLHVDQUFBO0FBVFI7QUFXUTtFQUNFLHVCQUFBO0FBVFY7QUFZUTtFQUNFLHVCQUFBO0FBVlY7QUFhUTtFQUVFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQVpWO0FBZVE7RUFDRSxvQkFBQTtBQWJWO0FBZ0JRO0VBQ0UsWUFqRUs7RUFrRUwsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQXJFTTtFQXNFTix5QkFBQTtFQUNBLGlDQUFBO0FBZFY7QUFnQlU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQWRaO0FBaUJVO0VBQ0UsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0VBQUE7RUFDQSxvQkFBQTtBQWZaO0FBa0JVO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0FBaEJaOztBQXdCQTtFQUNFO0lBQ0U7TUFDRSxVQUFBO01BQ0EsMkJBQUE7SUFyQkY7SUF1QkE7TUFDRSxVQUFBO01BQ0Esd0JBQUE7SUFyQkY7RUFDRjtFQXVCQTtJQUNFO01BQ0UsVUFBQTtNQUNBLHdCQUFBO0lBckJGO0lBdUJBO01BQ0UsVUFBQTtNQUNBLDJCQUFBO0lBckJGO0VBQ0Y7RUF3QkE7SUFDRSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQXRCRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxuICB9XFxufVxcblxcbi56aWctemFnLW5hdiB7XFxuICAkdGV4dC1jb2xvcjogd2hpdGU7XFxuICAkbGluay1zaGFkb3c6IHVuc2V0O1xcbiAgJGxpbmstcm90YXRpb246IDBkZWc7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cmVtO1xcblxcbiAgJltkYXRhLXZpc2liaWxpdHk9ZmFsc2VdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICZbZGF0YS12aXNpYmlsaXR5PWNsb3NpbmddIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dCAzODBtcyBlYXNlLWluLW91dDtcXG4gIH1cXG4gIFxcblxcbiAgJltkYXRhLXZpc2liaWxpdHk9dHJ1ZV0ge1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMzgwbXMgZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICAubmF2LWxpc3QtY29udGFpbmVyIHtcXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEuNXJlbTtcXG5cXG4gICAgLm5hdi1saXN0LWhlYWRlciB7XFxuICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIH1cXG5cXG4gICAgLm5hdi11bCB7XFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gICAgICAubmF2LWxpIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgICAgICY6bnRoLW9mLXR5cGUob2RkKSB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKGNhbGMoJGxpbmstcm90YXRpb24gKiAtMSkpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpudGgtb2YtdHlwZShldmVuKSB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKCRsaW5rLXJvdGF0aW9uKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6OmJlZm9yZSxcXG4gICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICBpbnNldDogLTVweCAtMTVweDtcXG4gICAgICAgICAgb3BhY2l0eTogMC4xO1xcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm5hdi1saW5rIHtcXG4gICAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgIHRleHQtc2hhZG93OiAkbGluay1zaGFkb3c7XFxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgICAgICAgLm5hdi1udW1iZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMC43NXJlbTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHdoaXRlO1xcbiAgICAgICAgICAgIGluc2V0OiA1cHggMCAwIDA7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAzODBtcyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAmW2FyaWEtY3VycmVudF06OmJlZm9yZSB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn0gXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM1ZW0pIHtcXG4gIEBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAgIGZyb20ge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgfVxcbiAgfVxcbiAgQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAgIGZyb20ge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnppZy16YWctbmF2IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBpbnNldDogIDAgMCAwIDMwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3NwYWNlLWJhY2tncm91bmQud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5odG1sOmZvY3VzLXdpdGhpbiB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XG59XG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3Bhbixcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYWJicixcbmFkZHJlc3MsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnNhbXAsXG5zbWFsbCxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnZhcixcbmIsXG5pLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsXG5oMixcbmgzLFxuaDMsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaW1nLFxucGljdHVyZSxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmltZyB7XG4gIGltYWdlLXJlbmRlcmluZzogY3Jpc3AtZWRnZXM7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBwYWRkaW5nOiAwO1xufVxuXG5waWN0dXJlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi8qIGNoYW5nZSBjb2xvdXJzIHRvIHN1aXQgeW91ciBuZWVkcyAqL1xuaW5zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogY2hhbmdlIGNvbG91cnMgdG8gc3VpdCB5b3VyIG5lZWRzICovXG5tYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRlbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG5kZm4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG5hYmJyW3RpdGxlXSxcbmRmblt0aXRsZV0ge1xuICBjdXJzb3I6IGhlbHA7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi8qIGNoYW5nZSBib3JkZXIgY29sb3VyIHRvIHN1aXQgeW91ciBuZWVkcyAqL1xuaHIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjY2M7XG4gIG1hcmdpbjogMWVtIDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlucHV0LFxuc2VsZWN0IHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuZW0ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5hY2Nlc3NpYmlsaXR5IHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGxlZnQ6IC05OTk5cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBhdXRvO1xuICB3aWR0aDogMXB4O1xufVxuXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XG59XG5cbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XG4gIH1cbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qICogVVRJTElUSUVTICovXG4ubm8tc2VsZWN0IHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbiAgZm9udC1zaXplOiBjbGFtcCgwLjc1cmVtLCA1dncsIDAuODMxM3JlbSk7XG59XG5ib2R5ICNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWlubGluZTogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB6LWluZGV4OiAxO1xufVxuYm9keSAjY29udGVudCBoZWFkZXIgLmhlYWRlci1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciAuaGVhZGVyLWxlZnQgLmhlYWRlci1sb2dvIHtcbiAgYW5pbWF0aW9uOiBzcGluIDMzcyBsaW5lYXIgaW5maW5pdGU7XG4gIGhlaWdodDogY2xhbXAoNTBweCwgOHZ3LCA1NXB4KTtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zOG1zIGVhc2UtaW4tb3V0O1xufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIC5oZWFkZXItbGVmdCAuaGVhZGVyLWxvZ286aG92ZXIge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICBvcGFjaXR5OiAxO1xufVxuYm9keSAjY29udGVudCBoZWFkZXIgLmhlYWRlci1sZWZ0IC5oZWFkZXItdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuYm9keSAjY29udGVudCBoZWFkZXIgLmhlYWRlci1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS4zNzVyZW07XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTtcbiAgYmFja2dyb3VuZDogaHNsYSgwLCAwJSwgMTAwJSwgMC4xKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3JlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBwYWRkaW5nLWlubGluZTogMnJlbTtcbiAgcGFkZGluZy10b3A6IGNhbGMoY2xhbXAoNTBweCwgOHZ3LCA1NXB4KSArIDFyZW0pO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyOmhhcygubmF2LWxpbms6aG92ZXIpIC5uYXYtbGlzdC1oZWFkZXI6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtbGlzdC1oZWFkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi1saXN0LWhlYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCI+XCI7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwLjVyZW07XG4gIGxlZnQ6IC0xcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA3NjBtcyBlYXNlLWluLW91dDtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAjYWRkLXByb2plY3QtbGkge1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsICNhZGQtcHJvamVjdC1saSAjcHJvamVjdC1pbnB1dC1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAjYWRkLXByb2plY3QtbGkgI3Byb2plY3QtaW5wdXQtY29udGFpbmVyICNwcm9qZWN0LW5hbWUtaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgI2FkZC1wcm9qZWN0LWxpICNwcm9qZWN0LWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgI2FkZC1wcm9qZWN0LWxpICNwcm9qZWN0LWJ1dHRvbnMtY29udGFpbmVyICNhZGQtcHJvamVjdC1idXR0b24sXG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgI2FkZC1wcm9qZWN0LWxpICNwcm9qZWN0LWJ1dHRvbnMtY29udGFpbmVyICNjYW5jZWwtYWRkLXByb2plY3QtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgI2FkZC1wcm9qZWN0LWxpICNwcm9qZWN0LWJ1dHRvbnMtY29udGFpbmVyICNhZGQtcHJvamVjdC1idXR0b246OmJlZm9yZSxcbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAjYWRkLXByb2plY3QtbGkgI3Byb2plY3QtYnV0dG9ucy1jb250YWluZXIgI2NhbmNlbC1hZGQtcHJvamVjdC1idXR0b246OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHNpbHZlciwgc2lsdmVyLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBpbnNldDogMDtcbiAgb3BhY2l0eTogMC4zO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsICNhZGQtcHJvamVjdC1saSAjcHJvamVjdC1idXR0b25zLWNvbnRhaW5lciAjYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyOjpiZWZvcmUsXG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgI2FkZC1wcm9qZWN0LWxpICNwcm9qZWN0LWJ1dHRvbnMtY29udGFpbmVyICNjYW5jZWwtYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsIC5uYXYtbGluayB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saW5rOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiPlwiO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogLTFyZW07XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzgwbXMgZWFzZS1pbi1vdXQ7XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saW5rOmhvdmVyOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saW5rLnNwZWNpYWwtbmF2LWxpbmsge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzgwbXMgZWFzZS1pbi1vdXQ7XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saW5rLnNwZWNpYWwtbmF2LWxpbms6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4yNXJlbSkgc2NhbGUoMS4xMjUpO1xufVxuYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsIC5uYXYtbGluay5zcGVjaWFsLW5hdi1saW5rOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiK1wiO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzgwbXMgZWFzZS1pbi1vdXQ7XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saW5rLnNwZWNpYWwtbmF2LWxpbms6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAuMjVyZW0pIHNjYWxlKDMpIHJvdGF0ZSgzNjBkZWcpO1xufVxuYm9keSAjY29udGVudCBtYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xufVxuYm9keSAjY29udGVudCBtYWluIC5tYWluLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDg4dnc7XG59XG5ib2R5ICNjb250ZW50IGZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBncmlkLWFyZWE6IGZvb3Rlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM1ZW0pIHtcbiAgYm9keSAjY29udGVudCAuemlnLXphZy1uYXYge1xuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogbWluKDMwdmgsIDEwcmVtKSAycmVtO1xuICAgIGluc2V0OiAwIDAgMCAzMCU7XG4gIH1cbiAgYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsICNhZGQtcHJvamVjdC1saSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuY3NzLm1hcCAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jeWNsb25lLXJlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBO0FEMk5kO0FDek5jO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUQyTmhCO0FDdk5ZO0VBQ0UsYUFBQTtFQUNBLFdBckJJO0FEOE9sQjtBQ3ZOYzs7RUFHRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRHdOaEI7QUN0TmdCOztFQUNFLG1FQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEeU5sQjtBQ3ROZ0I7O0VBQ0UsbUJBQUE7QUR5TmxCO0FDak5VO0VBQ0UsbUJBQUE7QURtTlo7QUNqTlk7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBRG1OZDtBQ2hOWTtFQUNFLFVBQUE7QURrTmQ7QUMvTVk7RUFDRSx1Q0FBQTtBRGlOZDtBQzlNWTtFQUNFLDJDQUFBO0FEZ05kO0FDN01ZO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtBRCtNZDtBQzVNWTtFQUNFLHNEQUFBO0FEOE1kO0FDdk1JO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBRHdNTjtBQ3RNTTtFQUVFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUR1TVI7QUNuTUk7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FEcU1OOztBQ2hNQTtFQUlNO0lBQ0Usb0JBQUE7SUFDQSxzQkFBQTtJQUNBLDhCQUFBO0lBQ0EsZ0JBQUE7RURnTU47RUMxTFU7SUFDRSxzQkFBQTtFRDRMWjtBQUNGOztBQUVBLHFDQUFxQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saXN0SWNvbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlzdEljb24uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LXRvZ2dsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LXRvZ2dsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aGVtZS10b2dnbGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RoZW1lLXRvZ2dsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi96aWctemFnLW5hdi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vemlnLXphZy1uYXYuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL2Nzcy9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi4vY29tcG9uZW50cy96aWctemFnLW5hdi96aWctemFnLW5hdi5zY3NzJztcblxuaW1wb3J0IHsgY3JlYXRlWmlnWmFnTmF2IH0gZnJvbSAnLi4vY29tcG9uZW50cy96aWctemFnLW5hdi96aXAtemFnLW5hdi1tYXJrdXAnO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXItbWFya3VwJztcbmltcG9ydCB7IGNyZWF0ZUxpc3RJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9saXN0SWNvbi9saXN0SWNvbi5qcyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4vLyAhIENSRUFURSBIRUFERVJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpOyAgXG5cbi8vICEgQ1JFQVRFIE5BVlxuLy8gPyBjcmVhdGVaaWdaYWdOYXYgYWNjZXB0cyA0IGFyZ3VtZW50czpcbi8vICogb2JqZWN0T2ZMaXN0cyBpcyBhbiBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgbGlzdCBvYmplY3RzIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSB0aGUgbmF2IGxpc3RzXG4vLyAqIGluaXRpYWxQYWdlIGlzIGEgc3RyaW5nIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHNldCB0aGUgYXJpYSAtIGN1cnJlbnQgYXR0cmlidXRlICh1c2UgdGhlIGluZGV4IG9mIHRoZSBwYWdlIG5hbWUgb2JqZWN0KVxuLy8gKiBuYXZUeXBlIGlzIGEgc3RyaW5nIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgbmF2IGxpbmtzIGFyZSBidXR0b25zIG9yIGFuY2hvcnMgb3B0aW9ucyBhcmUgJ2J1dHRvbicgb3IgJ2EnXG4vLyAqIGlkIGlzIGEgc3RyaW5nIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHNldCB0aGUgaWQgYXR0cmlidXRlIG9mIHRoZSBuYXYncyBuZXN0ZWQgZWxlbWVudFxuLy8gKiBzcGVjaWFsTmF2TGluayBpcyBhIHN0cmluZyB0aGF0IG1hdGNoZXMgYSBwYWdlIG5hbWUgaW4gdGhlIG9iamVjdE9mTGlzdHMgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIGEgc3BlY2lhbCBuYXYgbGlua1xuICAvLyAqIHdpdGggY3VzdG9tIGJlaGF2aW9yIChhZGp1c3RhYmxlIGluIHppZ1phZ05hdi5qcylcbiAgXG5jb25zdCBsaXN0T2JqZWN0cyA9IHtcbiAgSG9tZToge1xuICAgIGxpc3RFbGVtZW50czogW1xuICAgICAgWydBbGwgVGFza3MnLCAnIyddLFxuICAgICAgWydUb2RheScsICcjJ10sXG4gICAgICBbJ05leHQgNyBEYXlzJywgJyMnXSxcbiAgICAgIFsnSW1wb3J0YW50JywgJyMnXSxcbiAgICBdLFxuICB9LFxuICBQcm9qZWN0czoge1xuICAgIGxpc3RFbGVtZW50czogW1xuICAgICAgWydBZGQgUHJvamVjdCcsICcjJ10sXG4gICAgICBbJ2FkZC1wcm9qZWN0LWZvcm0nLCAnIyddLFxuICAgIF0sXG4gIH0sXG59O1xuY29uc3QgaW5pdGlhbFBhZ2UgPSBsaXN0T2JqZWN0cy5Ib21lLmxpc3RFbGVtZW50c1swXVswXTtcblxuY29udGVudC5hcHBlbmRDaGlsZChcbiAgY3JlYXRlWmlnWmFnTmF2KGxpc3RPYmplY3RzLCBpbml0aWFsUGFnZSwgJ2J1dHRvbicsICduYXYtcHJpbWFyeS1hcmlhJywgJ0FkZCBQcm9qZWN0Jylcbik7XG5cblxuLy8gISB0ZXN0XG4vLyAhIHRlc3Rcbi8vICEgdGVzdFxuY29uc3QgYWRkUHJvamVjdFRlc3RMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcjbmF2LXByaW1hcnktYXJpYSA+IGRpdjpudGgtY2hpbGQoMikgPiB1bCA+IGxpOm50aC1jaGlsZCgyKSdcbik7XG5hZGRQcm9qZWN0VGVzdExpLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2plY3QtbGknKTtcbmFkZFByb2plY3RUZXN0TGkuaW5uZXJIVE1MID0gJyc7IC8vIGNsZWFyIHRoZSBsaVxuXG5jb25zdCBwcm9qZWN0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2plY3RJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtaW5wdXQtY29udGFpbmVyJyk7XG5cbmNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbmFtZS1pbnB1dCcpO1xucHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xucHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIFByb2plY3QgTmFtZScpO1xucHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heC1sZW5ndGgnLCAyNCk7XG5cbmNvbnN0IHByb2plY3RCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtYnV0dG9ucy1jb250YWluZXInKTtcblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYWRkUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qZWN0LWJ1dHRvbicpO1xuYWRkUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5hZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdBZGQgUHJvamVjdCcpO1xuYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdhZGQnO1xuXG5jb25zdCBjYW5jZWxBZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jYW5jZWxBZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsLWFkZC1wcm9qZWN0LWJ1dHRvbicpO1xuY2FuY2VsQWRkUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5jYW5jZWxBZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdDYW5jZWwgQWRkIFByb2plY3QnKTtcbmNhbmNlbEFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnY2FuY2VsJztcblxucHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RJY29uKCkpO1xucHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuXG5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbnByb2plY3RCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEFkZFByb2plY3RCdXR0b24pO1xuXG5hZGRQcm9qZWN0VGVzdExpLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dENvbnRhaW5lcik7XG5hZGRQcm9qZWN0VGVzdExpLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zQ29udGFpbmVyKTtcbi8vICEgdGVzdFxuLy8gISB0ZXN0XG4vLyAhIHRlc3RcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcblxubWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7Il0sIm5hbWVzIjpbImNyZWF0ZUxpc3RJY29uIiwibGlzdEljb25Db250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJsaXN0SWNvbkJhcnMiLCJhcHBlbmRDaGlsZCIsInRvZ2dsZU5hdkJ1dHRvbiIsImNyZWF0ZU5hdlRvZ2dsZUJ1dHRvbiIsImFyaWFDb250cm9sc0lEIiwibmF2VG9nZ2xlQnV0dG9uIiwibmF2VG9nZ2xlQmFycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudHMiLCJISURFX05BVl9FVkVOVCIsIlNIT1dfTkFWX0VWRU5UIiwidG9nZ2xlQnV0dG9uQWN0aXZhdGVkIiwiY29udGFpbnMiLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsInJlbW92ZSIsImFkZFNjcmlwdFRvSGVhZCIsImljb25TY3JpcHRTb3VyY2UiLCJhdHRyaWJ1dGVzIiwiY3Jvc3NvcmlnaW4iLCJjcmVhdGVUaGVtZVRvZ2dsZUJ1dHRvbiIsInRoZW1lVG9nZ2xlQ29udGFpbmVyIiwidGhlbWVUb2dnbGVDaGVja2JveCIsInRoZW1lVG9nZ2xlTGFiZWwiLCJzdW5JY29uIiwibW9vbkljb24iLCJoaWRlTmF2IiwiemlnWmFnTmF2IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbml0aWF0ZUhpZGVOYXYiLCJzaG93TmF2IiwiYWN0aXZhdGVMaXN0ZW5lcnMiLCJvbiIsImNyZWF0ZVppZ1phZ05hdiIsIm9iamVjdE9mTGlzdHMiLCJpbml0aWFsUGFnZSIsImFuY2hvck9yQnV0dG9uIiwic3BlY2lhbE5hdkxpbmsiLCJfbG9vcCIsImxpc3RDb250YWluZXIiLCJsaXN0SGVhZGVyIiwidGV4dENvbnRlbnQiLCJsaXN0IiwibGlzdFVMIiwiZ3JvdXBlZExpc3RFbGVtZW50cyIsImxpc3RFbGVtZW50cyIsImxpc3RGcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJmb3JFYWNoIiwicGFnZU5hbWVBbmRIcmVmIiwiaW5kZXgiLCJwYWdlTmFtZSIsInBhZ2VIcmVmIiwibmF2TEkiLCJsaW5rTnVtYmVyU3BhbiIsImNvbmNhdCIsIm5hdkxpbmsiLCJhbGVydCIsImNyZWF0ZVRleHROb2RlIiwicHJpb3JpdHlMb2dvIiwiY3JlYXRlSGVhZGVyIiwiaGVhZGVyIiwiaGVhZGVyTGVmdCIsImhlYWRlckxvZ28iLCJoZWFkZXJUaXRsZSIsImhlYWRlclJpZ2h0IiwiY29udGVudCIsInNyYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInNjcmlwdCIsImF0dHJpYnV0ZSIsImhlYWQiLCJldmVudE5hbWUiLCJmbiIsInB1c2giLCJvZmYiLCJpIiwic3BsaWNlIiwiZGF0YSIsImdldEVsZW1lbnRCeUlkIiwibGlzdE9iamVjdHMiLCJIb21lIiwiUHJvamVjdHMiLCJhZGRQcm9qZWN0VGVzdExpIiwiaW5uZXJIVE1MIiwicHJvamVjdElucHV0Q29udGFpbmVyIiwicHJvamVjdE5hbWVJbnB1dCIsInByb2plY3RCdXR0b25zQ29udGFpbmVyIiwiYWRkUHJvamVjdEJ1dHRvbiIsImNhbmNlbEFkZFByb2plY3RCdXR0b24iLCJtYWluIiwibWFpbkNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=