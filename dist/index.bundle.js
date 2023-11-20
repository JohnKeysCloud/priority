/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


function createNavToggleButton() {
  var navToggleButton = document.createElement('button');
  navToggleButton.classList.add('nav-toggle-button');
  navToggleButton.setAttribute('aria-label', 'Open Navigation Menu');
  navToggleButton.setAttribute('aria-expanded', false);
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


function hideNav() {
  var zigZagNav = document.querySelector('.zig-zag-nav');
  zigZagNav.classList.remove('closing');
  zigZagNav.removeEventListener('animationend', hideNav);
  zigZagNav.classList.remove('open');
}
function initiateHideNav() {
  var zigZagNav = document.querySelector('.zig-zag-nav');
  zigZagNav.classList.add('closing');
  zigZagNav.addEventListener('animationend', hideNav);
}
function showNav() {
  var zigZagNav = document.querySelector('.zig-zag-nav');
  zigZagNav.classList.add('open');
  zigZagNav.setAttribute('aria-hidden', false);
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



// * pageNames is an array of strings that will be used to create the nav links
// * initialPage is a string that will be used to set the aria-current attribute (use the index of the page name)
// * navType is a string that will be used to determine if the nav links are buttons or anchors options are 'button' or 'a'

function createZigZagNav(pageNames, initialPage, navType) {
  var zigZagNav = document.createElement('nav');
  zigZagNav.classList.add('zig-zag-nav');
  zigZagNav.setAttribute('aria-label', 'Main Navigation');
  var navUL = document.createElement('ul');
  navUL.classList.add('nav-ul');
  var listFragment = document.createDocumentFragment();
  pageNames.forEach(function (page, index) {
    var navLI = document.createElement('li');
    navLI.classList.add('nav-li');
    var linkNumberSpan = document.createElement('span');
    linkNumberSpan.classList.add('nav-number');
    linkNumberSpan.setAttribute('aria-hidden', true);
    linkNumberSpan.textContent = "0".concat(index);
    var navLink = document.createElement(navType === 'button' ? 'button' : 'a');
    navLink.classList.add('nav-link');
    if (navType === 'a') {
      navLink.setAttribute('href', '#'); // ! UPDATE THIS TO USE THE PAGE NAME
    }

    if (page === initialPage) {
      navLink.setAttribute('aria-current', 'page');
    }
    navLink.appendChild(linkNumberSpan);
    navLink.appendChild(document.createTextNode(page));
    navLI.appendChild(navLink);
    listFragment.appendChild(navLI);
  });
  navUL.appendChild(listFragment);
  zigZagNav.appendChild(navUL);
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
  height: 2.5px;
  position: relative;
  width: 100%;
}
.nav-toggle-button .nav-toggle-bars::before, .nav-toggle-button .nav-toggle-bars::after {
  background-color: white;
  border-radius: 100vw;
  content: "";
  position: absolute;
  inset: 0;
  height: 2.5px;
  width: 100%;
}
.nav-toggle-button .nav-toggle-bars::before {
  transform: translateY(-6.25px);
}
.nav-toggle-button .nav-toggle-bars::after {
  transform: translateY(6.25px);
}`, "",{"version":3,"sources":["webpack://./src/components/nav-toggle/nav-toggle.scss"],"names":[],"mappings":"AAAA;EAQE,mBAAA;EACA,eAAA;EACA,aAAA;EACA,YAVgB;EAWhB,uBAAA;EACA,WAXe;AAKjB;AAQE;EACE,iCAAA;AANJ;AAUI;EACE,uBAAA;AARN;AAUM;EACE,uCAAA;AARR;AAUM;EACE,sCAAA;AARR;AAaE;EACE,iBA5BiB;EA6BjB,oBA9ByB;EA+BzB,aAhCgB;EAiChB,kBAAA;EACA,WAAA;AAXJ;AAaI;EACE,uBAnCe;EAoCf,oBArCuB;EAsCvB,WAAA;EACA,kBAAA;EACA,QAAA;EACA,aA1Cc;EA2Cd,WAAA;AAXN;AAcI;EACE,8BAAA;AAZN;AAeI;EACE,6BAAA;AAbN","sourcesContent":[".nav-toggle-button {\n  $button-height: 20px;\n  $button-width: 20px;\n  $button-bar-size: 2.5px;\n  $button-bar-border-radius: 100vw;\n  $button-bar-color: white;\n  $button-transition-time: 150ms; \n\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  height: $button-height;\n  justify-content: center;\n  width: $button-width;\n\n  .nav-toggle-bars, .nav-toggle-bars::before, .nav-toggle-bars::after {\n    transition: all $button-transition-time ease-in-out;\n  }\n  \n  &.active {\n    .nav-toggle-bars {\n      background: transparent;\n      \n      &::before {\n        transform: translateY(0) rotate(-45deg);\n      }\n      &::after {\n        transform: translateY(0) rotate(45deg);\n      }\n    }\n  }\n\n  .nav-toggle-bars {\n    background: $button-bar-color;\n    border-radius: $button-bar-border-radius;\n    height: $button-bar-size;\n    position: relative;\n    width: 100%;\n\n    &::before, &::after {\n      background-color: $button-bar-color;\n      border-radius: $button-bar-border-radius;\n      content: '';\n      position: absolute;\n      inset: 0;\n      height: $button-bar-size;\n      width: 100%;\n    }\n\n    &::before {\n      transform: translateY(calc(($button-height - $button-bar-size * 3) / -2 ));\n    }\n\n    &::after {\n      transform: translateY(calc(($button-height - $button-bar-size * 3) / 2 ));\n    }\n  }\n}"],"sourceRoot":""}]);
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
  opacity: 0.7;
  padding: 0;
  position: relative;
  transition: opacity 380ms ease-in-out;
}
#theme-toggle-container:hover {
  opacity: 1;
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
  font-size: 0.75rem;
  padding: 5px;
  width: 10px;
}

#sun {
  background-color: #E99A43;
  box-shadow: inset 3px -3px 8px black;
  opacity: 0;
  -webkit-transform: translateX(calc(20px + 0rem)) rotate(0);
  transform: translateX(calc(20px + 0rem)) rotate(0);
  -webkit-transition: all 0.38s ease-in-out;
  transition: all 0.38s ease-in-out;
}

#moon {
  background-color: #F6F1D5;
  box-shadow: inset -3px -3px 8px black;
  opacity: 1;
  -webkit-transform: translateX(0px) rotate(0);
  transform: translateX(0px) rotate(0);
  -webkit-transition: all 0.38s ease-in-out;
  transition: all 0.38s ease-in-out;
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
}`, "",{"version":3,"sources":["webpack://./src/components/theme-toggle/theme-toggle.scss"],"names":[],"mappings":"AAKA;EACE,oBAAA;EACA,6BAAA;EACA,gBAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;EACA,qCAAA;AAJF;AAME;EACE,UAAA;AAJJ;;AAQA;EACE,aAAA;AALF;;AAQA;EACE,mBAAA;EACA,iBAAA;EACA,sBAAA;EACA,iCAAA;EACA,eAAA;EACA,aAAA;EACA,SA9BiB;EA+BjB,gBAAA;EAEA,gBAAA;EACA,eAAA;EACA,sBAAA,EAAA,YAAA;EACA,qBAAA,EAAA,eAAA;EACA,yBAAA,EAAA,WAAA;EACA,iBAAA,EAAA,aAAA;AANF;;AASA;;EAEE,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,YA7C0B;EA8C1B,WA/CwB;AAyC1B;;AASA;EACE,yBAAA;EACA,oCAAA;EACA,UAAA;EACA,0DAAA;EACA,kDAAA;EACA,yCAAA;EACA,iCAAA;AANF;;AASA;EACE,yBAAA;EACA,qCAAA;EACA,UAAA;EACA,4CAAA;EACA,oCAAA;EACA,yCAAA;EACA,iCAAA;AANF;;AASA;EACE,UAAA;EACA,iDAAA;EACA,yCAAA;AANF;;AASA;EACE,UAAA;EACA,sEAAA;EACA,8DAAA;AANF","sourcesContent":["$theme-toggle-gap: 0rem;\n$theme-toggle-icon-width: 10px;\n$theme-toggle-icon-padding: 5px;\n$theme-icon-space-between: calc($theme-toggle-icon-width * 2 + $theme-toggle-gap);\n\n#theme-toggle-container {\n  border-radius: 100vw;\n  background-color: transparent;\n  box-shadow: none;\n  opacity: 0.7;\n  padding: 0;\n  position: relative;\n  transition: opacity 380ms ease-in-out;\n\n  &:hover {\n    opacity: 1;\n  }\n}\n\n#theme-toggle-checkbox {\n  display: none;\n}\n\n#theme-toggle-label {\n  align-items: center;\n  background: black;\n  border-radius: inherit;\n  box-shadow: inset 0 0 12px silver;\n  cursor: pointer;\n  display: flex; \n  gap: $theme-toggle-gap;\n  padding: 5px 8px;\n\n  min-height: 25px;\n  min-width: 25px;\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  -webkit-user-select: none; /* Safari */\n  user-select: none; /* Standard */\n}\n\n#sun,\n#moon {\n  aspect-ratio: 1/1;\n  border-radius: 50%;\n  color: black;\n  font-size: 0.75rem;\n  padding: $theme-toggle-icon-padding;\n  width: $theme-toggle-icon-width;\n}\n\n#sun {\n  background-color: #E99A43;\n  box-shadow: inset 3px -3px 8px black;\n  opacity: 0;\n  -webkit-transform: translateX($theme-icon-space-between) rotate(0);\n  transform: translateX($theme-icon-space-between) rotate(0);\n  -webkit-transition: all 0.38s ease-in-out;\n  transition: all 0.38s ease-in-out;\n}\n\n#moon {\n  background-color: #F6F1D5;\n  box-shadow: inset -3px -3px 8px black;\n  opacity: 1;\n  -webkit-transform: translateX(0px) rotate(0);\n  transform: translateX(0px) rotate(0);\n  -webkit-transition: all 0.38s ease-in-out;\n  transition: all 0.38s ease-in-out;\n}\n\n#theme-toggle-checkbox:checked ~ #theme-toggle-label > #sun {\n  opacity: 1;\n  -webkit-transform: translateX(0px) rotate(360deg);\n  transform: translateX(0px) rotate(360deg);\n}\n\n#theme-toggle-checkbox:checked ~ #theme-toggle-label > #moon {\n  opacity: 0;\n  -webkit-transform: translateX(calc($theme-icon-space-between * -1)) rotate(360deg);\n  transform: translateX(calc($theme-icon-space-between * -1)) rotate(360deg);\n}"],"sourceRoot":""}]);
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
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.zig-zag-nav {
  display: none;
  position: absolute;
}
.zig-zag-nav.open {
  animation: fade-in 1s ease-in-out;
  display: flex;
}
.zig-zag-nav.open.closing {
  animation: fade-out 150ms ease-in-out;
}
.zig-zag-nav .nav-ul {
  gap: 1.5rem;
  list-style: none;
}
.zig-zag-nav .nav-ul .nav-li {
  position: relative;
  transition: transform 250ms ease-in-out;
}
.zig-zag-nav .nav-ul .nav-li:nth-of-type(odd) {
  transform: rotate(0deg);
}
.zig-zag-nav .nav-ul .nav-li:nth-of-type(even) {
  transform: rotate(0deg);
}
.zig-zag-nav .nav-ul .nav-li::before, .zig-zag-nav .nav-ul .nav-li::after {
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
.zig-zag-nav .nav-ul .nav-li::before {
  border-right: 2px solid white;
}
.zig-zag-nav .nav-ul .nav-li::after {
  border-left: 2px solid white;
}
.zig-zag-nav .nav-ul .nav-li:hover {
  transform: rotate(0);
}
.zig-zag-nav .nav-ul .nav-li:hover::before, .zig-zag-nav .nav-ul .nav-li:hover::after {
  transform: scaleX(1);
  transition: transform 250ms ease-in-out;
}
.zig-zag-nav .nav-ul .nav-link {
  background: linear-gradient(skyblue, white, white);
  background: -webkit-linear-gradient(skyblue, white, white);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  display: inline-block;
  position: relative;
  text-decoration: none;
  text-shadow: unset;
  text-transform: uppercase;
  transition: all 500ms ease-in-out;
}
.zig-zag-nav .nav-ul .nav-link .nav-number {
  margin-right: 0.5rem;
}
.zig-zag-nav .nav-ul .nav-link::before {
  content: "";
  border-bottom: 2px dashed white;
  inset: 5px 0 0 0;
  padding-top: 1rem;
  position: absolute;
  transition: opacity 250ms ease-in-out, transform 380ms ease-in-out;
  transform: scaleX(0);
}
.zig-zag-nav .nav-ul .nav-link[aria-current]::before {
  opacity: 1;
  transform: scaleX(1);
}

@media (min-width: 1024px) {
  .nav-Container .zig-zag-nav {
    display: flex;
    position: relative;
    right: 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/zig-zag-nav/zig-zag-nav.scss"],"names":[],"mappings":"AAAA;EACE;IACE,UAAA;EACF;EACA;IACE,UAAA;EACF;AACF;AACA;EACE;IACE,UAAA;EACF;EACA;IACE,UAAA;EACF;AACF;AAEA;EAKE,aAAA;EACA,kBAAA;AAJF;AAME;EACE,iCAAA;EACA,aAAA;AAJJ;AAMI;EACE,qCAAA;AAJN;AAQE;EACE,WAAA;EACA,gBAAA;AANJ;AAQI;EACE,kBAAA;EACA,uCAAA;AANN;AAQM;EACE,uBAAA;AANR;AASM;EACE,uBAAA;AAPR;AAUM;EAEE,oBAAA;EACA,WAAA;EACA,iBAAA;EACA,YAAA;EACA,oBAAA;EACA,kBAAA;EACA,oBAAA;EACA,wBAAA;EACA,UAAA;AATR;AAYM;EACE,6BAAA;AAVR;AAaM;EACE,4BAAA;AAXR;AAcM;EACE,oBAAA;AAZR;AAcQ;EAEE,oBAAA;EACA,uCAAA;AAbV;AAkBI;EACE,kDAAA;EACA,0DAAA;EACA,qBAAA;EACA,6BAAA;EACA,oCAAA;EACA,eAAA;EACA,qBAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBAzEU;EA0EV,yBAAA;EACA,iCAAA;AAhBN;AAkBM;EACE,oBAAA;AAhBR;AAmBM;EACE,WAAA;EACA,+BAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kEAAA;EACA,oBAAA;AAjBR;AAoBM;EACE,UAAA;EACA,oBAAA;AAlBR;;AAwBA;EAEI;IACE,aAAA;IACA,kBAAA;IACA,QAAA;EAtBJ;AACF","sourcesContent":["@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.zig-zag-nav {\n  $link-color: white;\n  $link-shadow: unset;\n  $link-rotation: 0deg;\n\n  display: none;\n  position: absolute;\n\n  &.open {\n    animation: fade-in 1s ease-in-out;\n    display: flex;\n\n    &.closing {\n      animation: fade-out 150ms ease-in-out;\n    }\n  }\n\n  .nav-ul {\n    gap: 1.5rem;\n    list-style: none;\n\n    .nav-li {\n      position: relative;\n      transition: transform 250ms ease-in-out;\n\n      &:nth-of-type(odd) {\n        transform: rotate(calc($link-rotation * -1));\n      }\n\n      &:nth-of-type(even) {\n        transform: rotate($link-rotation);\n      }\n\n      &::before,\n      &::after {\n        border-radius: 100px;\n        content: '';\n        inset: -5px -15px;\n        opacity: 0.1;\n        pointer-events: none;\n        position: absolute;\n        transform: scaleX(0);\n        transform-origin: center;\n        z-index: 0;\n      }\n\n      &::before {\n        border-right: 2px solid $link-color;\n      }\n\n      &::after {\n        border-left: 2px solid $link-color;\n      }\n\n      &:hover {\n        transform: rotate(0);\n\n        &::before,\n        &::after {\n          transform: scaleX(1);\n          transition: transform 250ms ease-in-out;\n        }\n      }\n    }\n\n    .nav-link {\n      background: linear-gradient(skyblue, white, white);\n      background: -webkit-linear-gradient(skyblue, white, white);\n      background-clip: text;\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n      cursor: pointer;\n      display: inline-block;\n      position: relative;\n      text-decoration: none;\n      text-shadow: $link-shadow;\n      text-transform: uppercase;\n      transition: all 500ms ease-in-out;\n\n      .nav-number {\n        margin-right: 0.5rem;\n      }\n\n      &::before {\n        content: '';\n        border-bottom: 2px dashed $link-color;\n        inset: 5px 0 0 0;\n        padding-top: 1rem;\n        position: absolute;\n        transition: opacity 250ms ease-in-out, transform 380ms ease-in-out;\n        transform: scaleX(0);\n      }\n\n      &[aria-current]::before {\n        opacity: 1;\n        transform: scaleX(1);\n      }\n    }\n  }\n} \n\n@media (min-width: 1024px) {\n  .nav-Container {\n    .zig-zag-nav {\n      display: flex;\n      position: relative;\n      right: 0;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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

body #content {
  display: grid;
  font-family: "Space Mono", "Courier New", Courier, monospace;
  grid-template-areas: "header header header header" "aside aside aside aside" "main main main main" "footer footer footer footer";
}
body #content header {
  align-items: center;
  background-color: black;
  display: flex;
  grid-area: header;
  padding-inline: 1rem;
  justify-content: space-between;
}
body #content header .header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
body #content header .header-left .header-logo {
  animation: spin 33s linear infinite;
  height: 55px;
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
  font-size: 2rem;
}
body #content header .header-right {
  align-items: center;
  display: flex;
  gap: 3rem;
}
body #content aside {
  grid-area: aside;
  background-color: rgba(1, 0, 0, 0.864);
  min-height: 500px;
}
body #content aside .zig-zag-nav .nav-ul {
  display: flex;
  flex-direction: column;
}
body #content main {
  background-color: blue;
  grid-area: main;
  min-height: 100vh;
}
body #content footer {
  background-color: green;
  grid-area: footer;
}

/*# sourceMappingURL=styles.css.map */
`, "",{"version":3,"sources":["webpack://./src/sass/cyclone-reset.scss","webpack://./src/css/styles.css","webpack://./src/sass/main.scss"],"names":[],"mappings":"AAAA;;;EAGE,sBAAA;ACCF;;ADEA;EACE,aAAA;ACCF;;ADEA;EACE,mBAAA;ACCF;;ADEA;EACE,uBAAA;ACCF;;ADEA;EACE,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,6BAAA;ACCF;;ADEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAqEE,uBAAA;EACA,SAAA;EACA,eAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;EACA,wBAAA;ACCF;;ADEA;;;;;;;;;;;EAWE,cAAA;ACCF;;ADEA;;;;;;EAME,mBAAA;ACCF;;ADEA;;;EAGE,cAAA;EACA,eAAA;ACCF;;ADEA;EACE,4BAAA;ACCF;;ADEA;EACE,6BAAA;EACA,YAAA;EACA,oBAAA;EACA,UAAA;ACCF;;ADEA;EACE,mBAAA;ACCF;;ADEA,sCAAA;AACA;EACE,sBAAA;EACA,WAAA;EACA,qBAAA;ACCF;;ADEA,sCAAA;AACA;EACE,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;ACCF;;ADEA;EACE,6BAAA;ACCF;;ADEA;EACE,kBAAA;EACA,iBAAA;ACCF;;ADEA;;EAEE,YAAA;ACCF;;ADEA;EACE,yBAAA;EACA,iBAAA;ACCF;;ADEA,4CAAA;AACA;EACE,cAAA;EACA,WAAA;EACA,SAAA;EACA,6BAAA;EACA,aAAA;EACA,UAAA;ACCF;;ADEA;;EAEE,sBAAA;ACCF;;ADEA;EACE,kBAAA;ACCF;;ADEA;EACE,WAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;ACCF;;ADEA;;;;EAIE,iDAAA;ACCF;;ADEA,gGAAA;AACA;EACE;IACE,qBAAA;ECCF;EDEA;;;IAGE,qCAAA;IACA,uCAAA;IACA,gCAAA;IACA,sCAAA;ECAF;AACF;ADGA,gBAAA;AAEA;EACE,2BAAA,EAAA,eAAA;EACA,yBAAA,EAAA,WAAA;EACA,wBAAA,EAAA,mBAAA;EACA,sBAAA,EAAA,4BAAA;EACA,qBAAA,EAAA,2BAAA;EACA,iBAAA,EAAA;2DAAA;ACDF;;AC7OE;EACE,aAAA;EACA,4DAAA;EACA,gIACE;AD+ON;AC1OI;EACE,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,iBAAA;EACA,oBAAA;EACA,8BAAA;AD4ON;AC1OM;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AD4OR;AC1OQ;EAUE,mCAAA;EAEA,YAAA;EACA,YAAA;EACA,kCAAA;ADkOV;AC/OU;EACE;IACE,uBAAA;EDiPZ;EC/OU;IACE,yBAAA;EDiPZ;AACF;ACxOU;EACE,4BAAA;EACA,UAAA;AD0OZ;ACtOQ;EACE,YAAA;EACA,eAAA;ADwOV;ACpOM;EACE,mBAAA;EACA,aAAA;EACA,SAAA;ADsOR;AClOI;EACE,gBAAA;EACA,sCAAA;EACA,iBAAA;ADoON;ACjOQ;EACE,aAAA;EACA,sBAAA;ADmOV;AC7NI;EACE,sBAAA;EACA,eAAA;EACA,iBAAA;AD+NN;AC5NI;EACE,uBAAA;EACA,iBAAA;AD8NN;;AAEA,qCAAqC","sourceRoot":""}]);
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
/* harmony import */ var _assets_images_priority_logo_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/priority-logo.webp */ "./src/assets/images/priority-logo.webp");
/* harmony import */ var _components_theme_toggle_theme_toggle_markup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/theme-toggle/theme-toggle.markup */ "./src/components/theme-toggle/theme-toggle.markup.js");
/* harmony import */ var _components_nav_toggle_nav_toggle_markup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav-toggle/nav-toggle-markup */ "./src/components/nav-toggle/nav-toggle-markup.js");
/* harmony import */ var _components_zig_zag_nav_zip_zag_nav_markup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/zig-zag-nav/zip-zag-nav-markup */ "./src/components/zig-zag-nav/zip-zag-nav-markup.js");






var content = document.getElementById('content');
var pages = ['All Tasks', 'Today', 'Next 7 Days', 'Important', 'project', 'New Project'];

// ! CREATE HEADER
var header = document.createElement('header');
var headerLeft = document.createElement('div');
headerLeft.classList.add('header-left');
var headerLogo = document.createElement('img');
headerLogo.classList.add('header-logo');
headerLogo.setAttribute('src', _assets_images_priority_logo_webp__WEBPACK_IMPORTED_MODULE_2__);
headerLogo.setAttribute('alt', 'Priority Logo');
var headerTitle = document.createElement('h1');
headerTitle.classList.add('header-title');
headerTitle.textContent = '<pr{io}rity>';
headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);
var headerRight = document.createElement('div');
headerRight.classList.add('header-right');
headerRight.appendChild((0,_components_theme_toggle_theme_toggle_markup__WEBPACK_IMPORTED_MODULE_3__.createThemeToggleButton)());
headerRight.appendChild((0,_components_nav_toggle_nav_toggle_markup__WEBPACK_IMPORTED_MODULE_4__.createNavToggleButton)());
header.appendChild(headerLeft);
header.appendChild(headerRight);
content.appendChild(header);
var aside = document.createElement('aside');
// ! CREATE NAV
aside.appendChild((0,_components_zig_zag_nav_zip_zag_nav_markup__WEBPACK_IMPORTED_MODULE_5__.createZigZagNav)(pages, pages[0], 'button'));
content.appendChild(aside);

// const pageSections = [createHeader,createAside,createMain, createFooter];

// function createHeader() {
//   const header = document.createElement('header');  
//   const headerTitle = document.createElement('h1');
//   headerTitle.classList.add('header-title');
//   headerTitle.textContent = 'toDo';
//   header.appendChild(headerTitle);

//   return header
// }

// function createAside() {
//   const aside = document.createElement('aside');
//   aside.textContent = 'aside';

//   return aside;
// }

// function createMain() {
//   const main = document.createElement('main');
//   main.textContent = 'main';

//   return main;
// }

// function createFooter() {
//   const footer = document.createElement('footer');
//   footer.textContent = 'footer';

//   return footer
// }

// function renderPage(pageSections) {
//   const content = document.getElementById('content');

//   while (content.firstChild) {
//     content.removeChild(content.firstChild);
//   }

//   pageSections.forEach(section => {
//     content.appendChild(section());
//   });
// }

// renderPage(pageSections);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7QUFDb0I7QUFFL0MsU0FBU0MscUJBQXFCQSxDQUFBLEVBQUc7RUFDL0IsSUFBTUMsZUFBZSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDeERGLGVBQWUsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7RUFDbERKLGVBQWUsQ0FBQ0ssWUFBWSxDQUFDLFlBQVksRUFBRSxzQkFBc0IsQ0FBQztFQUNsRUwsZUFBZSxDQUFDSyxZQUFZLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztFQUVwRCxJQUFNQyxhQUFhLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNuREksYUFBYSxDQUFDSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUU5Q0osZUFBZSxDQUFDTyxXQUFXLENBQUNELGFBQWEsQ0FBQztFQUUxQ04sZUFBZSxDQUFDUSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVWLHdEQUFlLENBQUM7RUFFMUQsT0FBT0UsZUFBZTtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQm1EO0FBQ3FCO0FBRXhFLFNBQVNGLGVBQWVBLENBQUEsRUFBRztFQUN6QixJQUFJYyxxQkFBcUIsR0FBRyxJQUFJLENBQUNULFNBQVMsQ0FBQ1UsUUFBUSxDQUFDLFFBQVEsQ0FBQztFQUU3RCxJQUFJLENBQUNELHFCQUFxQixFQUFFO0lBQzFCLElBQUksQ0FBQ1QsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBRTVCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLFlBQVksRUFBRSx1QkFBdUIsQ0FBQztJQUN4RCxJQUFJLENBQUNBLFlBQVksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDO0lBRXhDUyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUNoQ04sd0RBQU0sQ0FBQ08sSUFBSSxDQUFDTCw2REFBYyxDQUFDO0VBQzdCLENBQUMsTUFBTTtJQUNMLElBQUksQ0FBQ1IsU0FBUyxDQUFDYyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBRS9CLElBQUksQ0FBQ1osWUFBWSxDQUFDLFlBQVksRUFBRSxzQkFBc0IsQ0FBQztJQUN2RCxJQUFJLENBQUNBLFlBQVksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDO0lBRXpDUyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUNoQ04sd0RBQU0sQ0FBQ08sSUFBSSxDQUFDTiw2REFBYyxDQUFDO0VBQzdCO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUV3RTtBQUMzQztBQUU3QixJQUFNUyxnQkFBZ0IsR0FBRywyQ0FBMkM7QUFDcEUsSUFBTUMsVUFBVSxHQUFHO0VBQ2pCQyxXQUFXLEVBQUU7QUFDZixDQUFDO0FBRURILGlGQUFlLENBQUNDLGdCQUFnQixFQUFFQyxVQUFVLENBQUM7QUFFN0MsU0FBU0UsdUJBQXVCQSxDQUFBLEVBQUc7RUFDakMsSUFBTUMsb0JBQW9CLEdBQUd0QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDMURxQixvQkFBb0IsQ0FBQ2xCLFlBQVksQ0FBQyxJQUFJLEVBQUUsd0JBQXdCLENBQUM7RUFFakUsSUFBTW1CLG1CQUFtQixHQUFHdkIsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQzNEc0IsbUJBQW1CLENBQUNuQixZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQztFQUNwRG1CLG1CQUFtQixDQUFDbkIsWUFBWSxDQUFDLElBQUksRUFBRSx1QkFBdUIsQ0FBQztFQUUvRCxJQUFNb0IsZ0JBQWdCLEdBQUd4QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDeER1QixnQkFBZ0IsQ0FBQ3BCLFlBQVksQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUM7RUFDekRvQixnQkFBZ0IsQ0FBQ3BCLFlBQVksQ0FBQyxLQUFLLEVBQUUsdUJBQXVCLENBQUM7RUFFN0QsSUFBTXFCLE9BQU8sR0FBR3pCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMzQ3dCLE9BQU8sQ0FBQ3ZCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUM7RUFDM0NzQixPQUFPLENBQUNyQixZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztFQUVqQyxJQUFNc0IsUUFBUSxHQUFHMUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzVDeUIsUUFBUSxDQUFDeEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQztFQUM3Q3VCLFFBQVEsQ0FBQ3RCLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO0VBRW5Db0IsZ0JBQWdCLENBQUNsQixXQUFXLENBQUNtQixPQUFPLENBQUM7RUFDckNELGdCQUFnQixDQUFDbEIsV0FBVyxDQUFDb0IsUUFBUSxDQUFDO0VBRXRDSixvQkFBb0IsQ0FBQ2hCLFdBQVcsQ0FBQ2lCLG1CQUFtQixDQUFDO0VBQ3JERCxvQkFBb0IsQ0FBQ2hCLFdBQVcsQ0FBQ2tCLGdCQUFnQixDQUFDO0VBRWxELE9BQU9GLG9CQUFvQjtBQUM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q21EO0FBQ3FCO0FBRXhFLFNBQVNLLE9BQU9BLENBQUEsRUFBRztFQUNqQixJQUFNQyxTQUFTLEdBQUc1QixRQUFRLENBQUM2QixhQUFhLENBQUMsY0FBYyxDQUFDO0VBQ3hERCxTQUFTLENBQUMxQixTQUFTLENBQUNjLE1BQU0sQ0FBQyxTQUFTLENBQUM7RUFDckNZLFNBQVMsQ0FBQ0UsbUJBQW1CLENBQUMsY0FBYyxFQUFFSCxPQUFPLENBQUM7RUFFdERDLFNBQVMsQ0FBQzFCLFNBQVMsQ0FBQ2MsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNwQztBQUVBLFNBQVNlLGVBQWVBLENBQUEsRUFBRztFQUN6QixJQUFNSCxTQUFTLEdBQUc1QixRQUFRLENBQUM2QixhQUFhLENBQUMsY0FBYyxDQUFDO0VBQ3hERCxTQUFTLENBQUMxQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDbEN5QixTQUFTLENBQUNyQixnQkFBZ0IsQ0FBQyxjQUFjLEVBQUVvQixPQUFPLENBQUM7QUFDckQ7QUFFQSxTQUFTSyxPQUFPQSxDQUFBLEVBQUc7RUFDakIsSUFBTUosU0FBUyxHQUFHNUIsUUFBUSxDQUFDNkIsYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUN4REQsU0FBUyxDQUFDMUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQy9CeUIsU0FBUyxDQUFDeEIsWUFBWSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7QUFDOUM7QUFFQSxTQUFTNkIsaUJBQWlCQSxDQUFBLEVBQUc7RUFDM0J6Qix3REFBTSxDQUFDMEIsRUFBRSxDQUFDeEIsNkRBQWMsRUFBRXNCLE9BQU8sQ0FBQztFQUNsQ3hCLHdEQUFNLENBQUMwQixFQUFFLENBQUN6Qiw2REFBYyxFQUFFc0IsZUFBZSxDQUFDO0FBQzVDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCNEI7QUFDeUI7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQSxTQUFTSSxlQUFlQSxDQUFDQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFO0VBQ3hELElBQU1WLFNBQVMsR0FBRzVCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQzJCLFNBQVMsQ0FBQzFCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUN0Q3lCLFNBQVMsQ0FBQ3hCLFlBQVksQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7RUFFdkQsSUFBTW1DLEtBQUssR0FBR3ZDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztFQUMxQ3NDLEtBQUssQ0FBQ3JDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUU3QixJQUFNcUMsWUFBWSxHQUFHeEMsUUFBUSxDQUFDeUMsc0JBQXNCLENBQUMsQ0FBQztFQUN0REwsU0FBUyxDQUFDTSxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUs7SUFDakMsSUFBTUMsS0FBSyxHQUFHN0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzFDNEMsS0FBSyxDQUFDM0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBRTdCLElBQU0yQyxjQUFjLEdBQUc5QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDckQ2QyxjQUFjLENBQUM1QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDMUMyQyxjQUFjLENBQUMxQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQztJQUNoRDBDLGNBQWMsQ0FBQ0MsV0FBVyxPQUFBQyxNQUFBLENBQU9KLEtBQUssQ0FBRTtJQUV4QyxJQUFNSyxPQUFPLEdBQUdqRCxRQUFRLENBQUNDLGFBQWEsQ0FBQ3FDLE9BQU8sS0FBSyxRQUFRLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUM3RVcsT0FBTyxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBRWpDLElBQUltQyxPQUFPLEtBQUssR0FBRyxFQUFFO01BQ25CVyxPQUFPLENBQUM3QyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckM7O0lBRUEsSUFBSXVDLElBQUksS0FBS04sV0FBVyxFQUFFO01BQ3hCWSxPQUFPLENBQUM3QyxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQztJQUM5QztJQUVBNkMsT0FBTyxDQUFDM0MsV0FBVyxDQUFDd0MsY0FBYyxDQUFDO0lBQ25DRyxPQUFPLENBQUMzQyxXQUFXLENBQUNOLFFBQVEsQ0FBQ2tELGNBQWMsQ0FBQ1AsSUFBSSxDQUFDLENBQUM7SUFDbERFLEtBQUssQ0FBQ3ZDLFdBQVcsQ0FBQzJDLE9BQU8sQ0FBQztJQUMxQlQsWUFBWSxDQUFDbEMsV0FBVyxDQUFDdUMsS0FBSyxDQUFDO0VBQ2pDLENBQUMsQ0FBQztFQUVGTixLQUFLLENBQUNqQyxXQUFXLENBQUNrQyxZQUFZLENBQUM7RUFFL0JaLFNBQVMsQ0FBQ3RCLFdBQVcsQ0FBQ2lDLEtBQUssQ0FBQztFQUU1Qk4sa0VBQWlCLENBQUMsQ0FBQztFQUVuQixPQUFPTCxTQUFTO0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7O0FDakRPLElBQU1sQixjQUFjLEdBQUcsU0FBUztBQUVoQyxJQUFNRCxjQUFjLEdBQUcsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUNGdkMsU0FBU1EsZUFBZUEsQ0FBQ2tDLEdBQUcsRUFBbUI7RUFBQSxJQUFqQmhDLFVBQVUsR0FBQWlDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztFQUMzQyxJQUFJRyxNQUFNLEdBQUd2RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDN0NzRCxNQUFNLENBQUNuRCxZQUFZLENBQUMsS0FBSyxFQUFFK0MsR0FBRyxDQUFDO0VBQy9CSSxNQUFNLENBQUNuRCxZQUFZLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDO0VBRTlDLEtBQUssSUFBSW9ELFNBQVMsSUFBSXJDLFVBQVUsRUFBRTtJQUNoQ29DLE1BQU0sQ0FBQ25ELFlBQVksQ0FBQ29ELFNBQVMsRUFBRXJDLFVBQVUsQ0FBQ3FDLFNBQVMsQ0FBQyxDQUFDO0VBQ3ZEO0VBRUF4RCxRQUFRLENBQUN5RCxJQUFJLENBQUNuRCxXQUFXLENBQUNpRCxNQUFNLENBQUM7QUFDbkM7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0EsSUFBSS9DLE1BQU0sR0FBRztFQUNYQSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YwQixFQUFFLEVBQUUsU0FBQUEsR0FBVXdCLFNBQVMsRUFBRUMsRUFBRSxFQUFFO0lBQzNCLElBQUksQ0FBQ25ELE1BQU0sQ0FBQ2tELFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQ2xELE1BQU0sQ0FBQ2tELFNBQVMsQ0FBQyxJQUFJLEVBQUU7SUFDckQsSUFBSSxDQUFDbEQsTUFBTSxDQUFDa0QsU0FBUyxDQUFDLENBQUNFLElBQUksQ0FBQ0QsRUFBRSxDQUFDO0VBQ2pDLENBQUM7RUFDREUsR0FBRyxFQUFFLFNBQUFBLElBQVVILFNBQVMsRUFBRUMsRUFBRSxFQUFFO0lBQzVCLElBQUksSUFBSSxDQUFDbkQsTUFBTSxDQUFDa0QsU0FBUyxDQUFDLEVBQUU7TUFDMUIsS0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDdEQsTUFBTSxDQUFDa0QsU0FBUyxDQUFDLENBQUNMLE1BQU0sRUFBRVMsQ0FBQyxFQUFFLEVBQUU7UUFDdEQsSUFBSSxJQUFJLENBQUN0RCxNQUFNLENBQUNrRCxTQUFTLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLEtBQUtILEVBQUUsRUFBRTtVQUNwQyxJQUFJLENBQUNuRCxNQUFNLENBQUNrRCxTQUFTLENBQUMsQ0FBQ0ssTUFBTSxDQUFDRCxDQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQ25DO1FBQ0Y7TUFDRjtJQUNGO0VBQ0YsQ0FBQztFQUNEL0MsSUFBSSxFQUFFLFNBQUFBLEtBQVUyQyxTQUFTLEVBQUVNLElBQUksRUFBRTtJQUMvQixJQUFJLElBQUksQ0FBQ3hELE1BQU0sQ0FBQ2tELFNBQVMsQ0FBQyxFQUFFO01BQzFCLElBQUksQ0FBQ2xELE1BQU0sQ0FBQ2tELFNBQVMsQ0FBQyxDQUFDaEIsT0FBTyxDQUFDLFVBQVVpQixFQUFFLEVBQUU7UUFDM0NBLEVBQUUsQ0FBQ0ssSUFBSSxDQUFDO01BQ1YsQ0FBQyxDQUFDO0lBQ0o7RUFDRjtBQUNGLENBQUM7O0FBRUQ7QUFDRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNEdBQTRHLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxVQUFVLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxhQUFhLGVBQWUsY0FBYyxhQUFhLFVBQVUsS0FBSyxLQUFLLFlBQVksY0FBYyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsNkNBQTZDLHlCQUF5Qix3QkFBd0IsNEJBQTRCLHFDQUFxQyw2QkFBNkIsb0NBQW9DLDBCQUEwQixvQkFBb0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIseUJBQXlCLDJFQUEyRSwwREFBMEQsS0FBSyxrQkFBa0Isd0JBQXdCLGdDQUFnQywyQkFBMkIsa0RBQWtELFNBQVMsa0JBQWtCLGlEQUFpRCxTQUFTLE9BQU8sS0FBSyx3QkFBd0Isb0NBQW9DLCtDQUErQywrQkFBK0IseUJBQXlCLGtCQUFrQiw2QkFBNkIsNENBQTRDLGlEQUFpRCxvQkFBb0IsMkJBQTJCLGlCQUFpQixpQ0FBaUMsb0JBQW9CLE9BQU8sbUJBQW1CLG1GQUFtRixPQUFPLGtCQUFrQixrRkFBa0YsT0FBTyxLQUFLLEdBQUcsbUJBQW1CO0FBQ3oyRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaER2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0hBQWdILFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFlBQVksY0FBYyxRQUFRLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLGlEQUFpRCxpQ0FBaUMsa0NBQWtDLG9GQUFvRiw2QkFBNkIseUJBQXlCLGtDQUFrQyxxQkFBcUIsaUJBQWlCLGVBQWUsdUJBQXVCLDBDQUEwQyxlQUFlLGlCQUFpQixLQUFLLEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLHlCQUF5Qix3QkFBd0Isc0JBQXNCLDJCQUEyQixzQ0FBc0Msb0JBQW9CLG1CQUFtQiwyQkFBMkIscUJBQXFCLHVCQUF1QixvQkFBb0IsNEJBQTRCLHdDQUF3QywrQ0FBK0MsbUNBQW1DLGlCQUFpQixrQkFBa0Isc0JBQXNCLHVCQUF1QixpQkFBaUIsdUJBQXVCLHdDQUF3QyxvQ0FBb0MsR0FBRyxVQUFVLDhCQUE4Qix5Q0FBeUMsZUFBZSx1RUFBdUUsK0RBQStELDhDQUE4QyxzQ0FBc0MsR0FBRyxXQUFXLDhCQUE4QiwwQ0FBMEMsZUFBZSxpREFBaUQseUNBQXlDLDhDQUE4QyxzQ0FBc0MsR0FBRyxpRUFBaUUsZUFBZSxzREFBc0QsOENBQThDLEdBQUcsa0VBQWtFLGVBQWUsdUZBQXVGLCtFQUErRSxHQUFHLG1CQUFtQjtBQUMxM0Y7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGdkM7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhHQUE4RyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLDZDQUE2QyxVQUFVLGlCQUFpQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssR0FBRyx1QkFBdUIsVUFBVSxpQkFBaUIsS0FBSyxRQUFRLGlCQUFpQixLQUFLLEdBQUcsa0JBQWtCLHVCQUF1Qix3QkFBd0IseUJBQXlCLG9CQUFvQix1QkFBdUIsY0FBYyx3Q0FBd0Msb0JBQW9CLG1CQUFtQiw4Q0FBOEMsT0FBTyxLQUFLLGVBQWUsa0JBQWtCLHVCQUF1QixpQkFBaUIsMkJBQTJCLGdEQUFnRCw4QkFBOEIsdURBQXVELFNBQVMsK0JBQStCLDRDQUE0QyxTQUFTLHNDQUFzQywrQkFBK0Isc0JBQXNCLDRCQUE0Qix1QkFBdUIsK0JBQStCLDZCQUE2QiwrQkFBK0IsbUNBQW1DLHFCQUFxQixTQUFTLHFCQUFxQiw4Q0FBOEMsU0FBUyxvQkFBb0IsNkNBQTZDLFNBQVMsbUJBQW1CLCtCQUErQiwwQ0FBMEMsaUNBQWlDLG9EQUFvRCxXQUFXLFNBQVMsT0FBTyxtQkFBbUIsMkRBQTJELG1FQUFtRSw4QkFBOEIsc0NBQXNDLDZDQUE2Qyx3QkFBd0IsOEJBQThCLDJCQUEyQiw4QkFBOEIsa0NBQWtDLGtDQUFrQywwQ0FBMEMsdUJBQXVCLCtCQUErQixTQUFTLHFCQUFxQixzQkFBc0IsZ0RBQWdELDJCQUEyQiw0QkFBNEIsNkJBQTZCLDZFQUE2RSwrQkFBK0IsU0FBUyxtQ0FBbUMscUJBQXFCLCtCQUErQixTQUFTLE9BQU8sS0FBSyxJQUFJLGdDQUFnQyxvQkFBb0Isb0JBQW9CLHNCQUFzQiwyQkFBMkIsaUJBQWlCLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUNoOEc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsMEJBQTBCO0FBQzFCLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLGtLQUFrSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0seUVBQXlFLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxlQUFlLFVBQVUsTUFBTSxVQUFVLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxRQUFRLFdBQVcsTUFBTSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUsscUJBQXFCLHFCQUFxQixzQkFBc0Isc0JBQXNCLHNCQUFzQixnQkFBZ0IsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLDZCQUE2QjtBQUMvM0Q7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxVDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUE2SjtBQUM3SjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGlJQUFPOzs7O0FBSXVHO0FBQy9ILE9BQU8saUVBQWUsaUlBQU8sSUFBSSxpSUFBTyxVQUFVLGlJQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBK0o7QUFDL0o7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtSUFBTzs7OztBQUl5RztBQUNqSSxPQUFPLGlFQUFlLG1JQUFPLElBQUksbUlBQU8sVUFBVSxtSUFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQThKO0FBQzlKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsa0lBQU87Ozs7QUFJd0c7QUFDaEksT0FBTyxpRUFBZSxrSUFBTyxJQUFJLGtJQUFPLFVBQVUsa0lBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1RztBQUN2RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSWlEO0FBQ3pFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUN5QjtBQUNXO0FBRTBCO0FBQ047QUFDSjtBQUUvRSxJQUFNRSxPQUFPLEdBQUdsRSxRQUFRLENBQUNtRSxjQUFjLENBQUMsU0FBUyxDQUFDO0FBQ2xELElBQU1DLEtBQUssR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDOztBQUUxRjtBQUNBLElBQU1DLE1BQU0sR0FBR3JFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUUvQyxJQUFNcUUsVUFBVSxHQUFHdEUsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQ2hEcUUsVUFBVSxDQUFDcEUsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBRXZDLElBQU1vRSxVQUFVLEdBQUd2RSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDaERzRSxVQUFVLENBQUNyRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7QUFDdkNvRSxVQUFVLENBQUNuRSxZQUFZLENBQUMsS0FBSyxFQUFFNkQsOERBQVksQ0FBQztBQUM1Q00sVUFBVSxDQUFDbkUsWUFBWSxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUM7QUFFL0MsSUFBTW9FLFdBQVcsR0FBR3hFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztBQUNoRHVFLFdBQVcsQ0FBQ3RFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztBQUN6Q3FFLFdBQVcsQ0FBQ3pCLFdBQVcsR0FBRyxjQUFjO0FBRXhDdUIsVUFBVSxDQUFDaEUsV0FBVyxDQUFDaUUsVUFBVSxDQUFDO0FBQ2xDRCxVQUFVLENBQUNoRSxXQUFXLENBQUNrRSxXQUFXLENBQUM7QUFFbkMsSUFBTUMsV0FBVyxHQUFHekUsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQ2pEd0UsV0FBVyxDQUFDdkUsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0FBRXpDc0UsV0FBVyxDQUFDbkUsV0FBVyxDQUFDZSxxR0FBdUIsQ0FBQyxDQUFDLENBQUM7QUFDbERvRCxXQUFXLENBQUNuRSxXQUFXLENBQUNSLCtGQUFxQixDQUFDLENBQUMsQ0FBQztBQUVoRHVFLE1BQU0sQ0FBQy9ELFdBQVcsQ0FBQ2dFLFVBQVUsQ0FBQztBQUM5QkQsTUFBTSxDQUFDL0QsV0FBVyxDQUFDbUUsV0FBVyxDQUFDO0FBRS9CUCxPQUFPLENBQUM1RCxXQUFXLENBQUMrRCxNQUFNLENBQUM7QUFJM0IsSUFBTUssS0FBSyxHQUFHMUUsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzdDO0FBQ0F5RSxLQUFLLENBQUNwRSxXQUFXLENBQUM2QiwyRkFBZSxDQUFDaUMsS0FBSyxFQUFFQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFN0RGLE9BQU8sQ0FBQzVELFdBQVcsQ0FBQ29FLEtBQUssQ0FBQzs7QUFJMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL25hdi10b2dnbGUvbmF2LXRvZ2dsZS1tYXJrdXAuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy9uYXYtdG9nZ2xlL25hdi10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy90aGVtZS10b2dnbGUvdGhlbWUtdG9nZ2xlLm1hcmt1cC5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL3ppZy16YWctbmF2L3ppZy16YWctbmF2LmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2NvbXBvbmVudHMvemlnLXphZy1uYXYvemlwLXphZy1uYXYtbWFya3VwLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2pzL2V2ZW50TmFtZXMuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvdXRpbGl0aWVzL2h0bWwtc2NyaXB0LWluamVjdGlvbi5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy91dGlsaXRpZXMvcHVic3ViLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2NvbXBvbmVudHMvbmF2LXRvZ2dsZS9uYXYtdG9nZ2xlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy90aGVtZS10b2dnbGUvdGhlbWUtdG9nZ2xlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy96aWctemFnLW5hdi96aWctemFnLW5hdi5zY3NzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2NvbXBvbmVudHMvbmF2LXRvZ2dsZS9uYXYtdG9nZ2xlLnNjc3M/MTI4MyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS90aGVtZS10b2dnbGUuc2Nzcz8xZjAxIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2NvbXBvbmVudHMvemlnLXphZy1uYXYvemlnLXphZy1uYXYuc2Nzcz80M2FhIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmlvcml0eS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcmlvcml0eS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcmlvcml0eS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ByaW9yaXR5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL25hdi10b2dnbGUuc2Nzcyc7XG5pbXBvcnQgeyB0b2dnbGVOYXZCdXR0b24gfSBmcm9tICcuL25hdi10b2dnbGUnO1xuXG5mdW5jdGlvbiBjcmVhdGVOYXZUb2dnbGVCdXR0b24oKSB7XG4gIGNvbnN0IG5hdlRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuYXZUb2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LXRvZ2dsZS1idXR0b24nKTtcbiAgbmF2VG9nZ2xlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdPcGVuIE5hdmlnYXRpb24gTWVudScpO1xuICBuYXZUb2dnbGVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gIGNvbnN0IG5hdlRvZ2dsZUJhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2VG9nZ2xlQmFycy5jbGFzc0xpc3QuYWRkKCduYXYtdG9nZ2xlLWJhcnMnKTtcblxuICBuYXZUb2dnbGVCdXR0b24uYXBwZW5kQ2hpbGQobmF2VG9nZ2xlQmFycyk7XG5cbiAgbmF2VG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTmF2QnV0dG9uKTtcblxuICByZXR1cm4gbmF2VG9nZ2xlQnV0dG9uO1xufVxuXG5leHBvcnQgeyBjcmVhdGVOYXZUb2dnbGVCdXR0b24gfTsiLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvcHVic3ViLmpzJztcbmltcG9ydCB7IEhJREVfTkFWX0VWRU5ULCBTSE9XX05BVl9FVkVOVCB9IGZyb20gJy4uLy4uL2pzL2V2ZW50TmFtZXMuanMnO1xuXG5mdW5jdGlvbiB0b2dnbGVOYXZCdXR0b24oKSB7XG4gIGxldCB0b2dnbGVCdXR0b25BY3RpdmF0ZWQgPSB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XG5cbiAgaWYgKCF0b2dnbGVCdXR0b25BY3RpdmF0ZWQpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnQ2xvc2UgTmF2aWdhdGlvbiBNZW51Jyk7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcblxuICAgIGNvbnNvbGUubG9nKCdlbWl0dGluZyBzaG93IG5hdicpO1xuICAgIGV2ZW50cy5lbWl0KFNIT1dfTkFWX0VWRU5UKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnT3BlbiBOYXZpZ2F0aW9uIE1lbnUnKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblxuICAgIGNvbnNvbGUubG9nKCdlbWl0dGluZyBoaWRlIG5hdicpO1xuICAgIGV2ZW50cy5lbWl0KEhJREVfTkFWX0VWRU5UKTtcbiAgfVxufVxuXG5leHBvcnQgeyB0b2dnbGVOYXZCdXR0b24gfTtcbiIsIi8vICogRGVwZW5kZW5jaWVzOiBodG1sLXNjcmlwdC1pbmplY3Rpb24uanNcblxuLy8gKiBEZXNjcmlwdGlvbjogQ3JlYXRlcyBhIHRoZW1lIHRvZ2dsZSBidXR0b24uXG4vLyA/IEByZXR1cm4ge0hUTUxFbGVtZW50fSB0aGVtZVRvZ2dsZUNvbnRhaW5lclxuXG4vLyAqIEBleGFtcGxlXG4vLyA/IGNvbnN0IHRoZW1lVG9nZ2xlQ29udGFpbmVyID0gY3JlYXRlVGhlbWVUb2dnbGVCdXR0b24oKTtcbi8vID8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGVtZVRvZ2dsZUNvbnRhaW5lcik7XG5cbmltcG9ydCB7IGFkZFNjcmlwdFRvSGVhZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvaHRtbC1zY3JpcHQtaW5qZWN0aW9uXCI7XG5pbXBvcnQgJy4vdGhlbWUtdG9nZ2xlLnNjc3MnO1xuXG5jb25zdCBpY29uU2NyaXB0U291cmNlID0gJ2h0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS8yNDE3NmFiOTczLmpzJztcbmNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIGNyb3Nzb3JpZ2luOiAnYW5vbnltb3VzJyxcbn1cblxuYWRkU2NyaXB0VG9IZWFkKGljb25TY3JpcHRTb3VyY2UsIGF0dHJpYnV0ZXMpO1xuXG5mdW5jdGlvbiBjcmVhdGVUaGVtZVRvZ2dsZUJ1dHRvbigpIHtcbiAgY29uc3QgdGhlbWVUb2dnbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGhlbWVUb2dnbGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0aGVtZS10b2dnbGUtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdGhlbWVUb2dnbGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRoZW1lVG9nZ2xlQ2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gIHRoZW1lVG9nZ2xlQ2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsICd0aGVtZS10b2dnbGUtY2hlY2tib3gnKTtcblxuICBjb25zdCB0aGVtZVRvZ2dsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGhlbWVUb2dnbGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RoZW1lLXRvZ2dsZS1sYWJlbCcpO1xuICB0aGVtZVRvZ2dsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RoZW1lLXRvZ2dsZS1jaGVja2JveCcpO1xuXG4gIGNvbnN0IHN1bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHN1bkljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtc3VuJyk7XG4gIHN1bkljb24uc2V0QXR0cmlidXRlKCdpZCcsICdzdW4nKTtcblxuICBjb25zdCBtb29uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbW9vbkljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtbW9vbicpO1xuICBtb29uSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vb24nKTtcblxuICB0aGVtZVRvZ2dsZUxhYmVsLmFwcGVuZENoaWxkKHN1bkljb24pO1xuICB0aGVtZVRvZ2dsZUxhYmVsLmFwcGVuZENoaWxkKG1vb25JY29uKTtcblxuICB0aGVtZVRvZ2dsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGVtZVRvZ2dsZUNoZWNrYm94KTtcbiAgdGhlbWVUb2dnbGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhlbWVUb2dnbGVMYWJlbCk7XG5cbiAgcmV0dXJuIHRoZW1lVG9nZ2xlQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUaGVtZVRvZ2dsZUJ1dHRvbiB9OyIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9wdWJzdWIuanMnO1xuaW1wb3J0IHsgSElERV9OQVZfRVZFTlQsIFNIT1dfTkFWX0VWRU5UIH0gZnJvbSAnLi4vLi4vanMvZXZlbnROYW1lcy5qcyc7XG5cbmZ1bmN0aW9uIGhpZGVOYXYoKSB7XG4gIGNvbnN0IHppZ1phZ05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy56aWctemFnLW5hdicpO1xuICB6aWdaYWdOYXYuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2luZycpO1xuICB6aWdaYWdOYXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGlkZU5hdik7XG4gIFxuICB6aWdaYWdOYXYuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xufVxuXG5mdW5jdGlvbiBpbml0aWF0ZUhpZGVOYXYoKSB7XG4gIGNvbnN0IHppZ1phZ05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy56aWctemFnLW5hdicpO1xuICB6aWdaYWdOYXYuY2xhc3NMaXN0LmFkZCgnY2xvc2luZycpO1xuICB6aWdaYWdOYXYuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGlkZU5hdik7XG59XG5cbmZ1bmN0aW9uIHNob3dOYXYoKSB7XG4gIGNvbnN0IHppZ1phZ05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy56aWctemFnLW5hdicpO1xuICB6aWdaYWdOYXYuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICB6aWdaYWdOYXYuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVMaXN0ZW5lcnMoKSB7XG4gIGV2ZW50cy5vbihTSE9XX05BVl9FVkVOVCwgc2hvd05hdik7XG4gIGV2ZW50cy5vbihISURFX05BVl9FVkVOVCwgaW5pdGlhdGVIaWRlTmF2KTtcbn1cblxuZXhwb3J0IHsgYWN0aXZhdGVMaXN0ZW5lcnMgfTsiLCJpbXBvcnQgJy4vemlnLXphZy1uYXYuc2Nzcyc7XG5pbXBvcnQgeyBhY3RpdmF0ZUxpc3RlbmVycyB9IGZyb20gJy4vemlnLXphZy1uYXYuanMnO1xuXG4vLyAqIHBhZ2VOYW1lcyBpcyBhbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSB0aGUgbmF2IGxpbmtzXG4vLyAqIGluaXRpYWxQYWdlIGlzIGEgc3RyaW5nIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHNldCB0aGUgYXJpYS1jdXJyZW50IGF0dHJpYnV0ZSAodXNlIHRoZSBpbmRleCBvZiB0aGUgcGFnZSBuYW1lKVxuLy8gKiBuYXZUeXBlIGlzIGEgc3RyaW5nIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgbmF2IGxpbmtzIGFyZSBidXR0b25zIG9yIGFuY2hvcnMgb3B0aW9ucyBhcmUgJ2J1dHRvbicgb3IgJ2EnXG5cbmZ1bmN0aW9uIGNyZWF0ZVppZ1phZ05hdihwYWdlTmFtZXMsIGluaXRpYWxQYWdlLCBuYXZUeXBlKSB7XG4gIGNvbnN0IHppZ1phZ05hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICB6aWdaYWdOYXYuY2xhc3NMaXN0LmFkZCgnemlnLXphZy1uYXYnKTtcbiAgemlnWmFnTmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdNYWluIE5hdmlnYXRpb24nKTtcblxuICBjb25zdCBuYXZVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdlVMLmNsYXNzTGlzdC5hZGQoJ25hdi11bCcpO1xuXG4gIGNvbnN0IGxpc3RGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgcGFnZU5hbWVzLmZvckVhY2goKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbmF2TEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG5hdkxJLmNsYXNzTGlzdC5hZGQoJ25hdi1saScpO1xuXG4gICAgY29uc3QgbGlua051bWJlclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGlua051bWJlclNwYW4uY2xhc3NMaXN0LmFkZCgnbmF2LW51bWJlcicpO1xuICAgIGxpbmtOdW1iZXJTcGFuLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICBsaW5rTnVtYmVyU3Bhbi50ZXh0Q29udGVudCA9IGAwJHtpbmRleH1gO1xuXG4gICAgY29uc3QgbmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmF2VHlwZSA9PT0gJ2J1dHRvbicgPyAnYnV0dG9uJyA6ICdhJyk7XG4gICAgbmF2TGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpO1xuXG4gICAgaWYgKG5hdlR5cGUgPT09ICdhJykge1xuICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpOyAvLyAhIFVQREFURSBUSElTIFRPIFVTRSBUSEUgUEFHRSBOQU1FXG4gICAgfVxuXG4gICAgaWYgKHBhZ2UgPT09IGluaXRpYWxQYWdlKSB7XG4gICAgICBuYXZMaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3BhZ2UnKTtcbiAgICB9XG4gICAgXG4gICAgbmF2TGluay5hcHBlbmRDaGlsZChsaW5rTnVtYmVyU3Bhbik7XG4gICAgbmF2TGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYWdlKSk7XG4gICAgbmF2TEkuYXBwZW5kQ2hpbGQobmF2TGluayk7XG4gICAgbGlzdEZyYWdtZW50LmFwcGVuZENoaWxkKG5hdkxJKTtcbiAgfSk7XG5cbiAgbmF2VUwuYXBwZW5kQ2hpbGQobGlzdEZyYWdtZW50KTtcblxuICB6aWdaYWdOYXYuYXBwZW5kQ2hpbGQobmF2VUwpO1xuXG4gIGFjdGl2YXRlTGlzdGVuZXJzKCk7XG5cbiAgcmV0dXJuIHppZ1phZ05hdjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlWmlnWmFnTmF2IH07IiwiZXhwb3J0IGNvbnN0IFNIT1dfTkFWX0VWRU5UID0gJ3Nob3dOYXYnO1xuXG5leHBvcnQgY29uc3QgSElERV9OQVZfRVZFTlQgPSAnaGlkZU5hdic7IiwiZnVuY3Rpb24gYWRkU2NyaXB0VG9IZWFkKHNyYywgYXR0cmlidXRlcyA9IHt9KSB7XG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcblxuICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICB9XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuXG5leHBvcnQgeyBhZGRTY3JpcHRUb0hlYWQgfTsiLCIvLyAqIGV2ZW50cyAocHVibGlzaCBzdWJzY3JpYmUgLyBtZWRpYXRvcikgcGF0dGVyblxubGV0IGV2ZW50cyA9IHtcbiAgZXZlbnRzOiB7fSxcbiAgb246IGZ1bmN0aW9uIChldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgfSxcbiAgb2ZmOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVtaXQ6IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICBmbihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn07XG5cbi8vICEgd2hlbiBhbiBldmVudCBpcyBjYWxsZWQgd2l0aCBvbjpcbiAgLy8gKiBldmVudCBuYW1lXG4vLyAqICAgZnVuY3Rpb24gdG8gcnVuXG4vLyAqICAgYWRkIGZ1bmN0aW9uIHRvIGV2ZW50cyBvYmplY3Rcbi8vICogICBldmVudHMgPSB7XG4vLyAqICAgICBldmVudHM6IHtcbi8vICogICAgICAgZXZlbnROYW1lOiBbZm5dLFxuLy8gKiAgICAgfSxcbi8vICogICB9XG4vLyAqXG4vLyAqIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIHdpdGggZW1pdDpcbi8vICogICBldmVudHMgPSB7XG4vLyAqICAgICBldmVudHM6IHtcbi8vICogICAgICAgZXZlbnROYW1lOiBbZm5dLFxuLy8gKiAgICAgfSxcbi8vICogICB9XG4vLyAqICAgZXZlbnRzLmV2ZW50cy5ldmVudE5hbWUuZm9yRWFjaChmbiA9PiBmbihkYXRhKSk7XG4vLyAqXG4vLyAqIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIHdpdGggb2ZmOlxuLy8gKiAgIGV2ZW50cyA9IHtcbi8vICogICAgIGV2ZW50czoge1xuLy8gKiAgICAgICBldmVudE5hbWU6IFtmbl0sXG4vLyAqICAgICB9LFxuLy8gKiAgIH1cbi8vICogICBldmVudHMuZXZlbnRzLmV2ZW50TmFtZS5mb3JFYWNoKGZuID0+IHtcbi8vICogICAgIGlmIChmbiA9PT0gZm4pIHtcbi8vICogICAgICAgZXZlbnRzLmV2ZW50cy5ldmVudE5hbWUuc3BsaWNlKGksIDEpO1xuLy8gKiAgICAgfVxuLy8gKiAgIH0pO1xuLy8gKlxuLy8gKiAgIGZ1bmN0aW9uIHRvIHJlbW92ZVxuLy8gKiAgIHJlbW92ZSBmdW5jdGlvbiBmcm9tIGV2ZW50cyBvYmplY3Rcbi8vICogICBldmVudHMgPSB7XG4vLyAqICAgICBldmVudHM6IHtcbi8vICogICAgICAgZXZlbnROYW1lOiBbXSxcbi8vICogICAgIH0sXG4vLyAqICAgfVxuLy8gKlxuXG5leHBvcnQgeyBldmVudHMgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm5hdi10b2dnbGUtYnV0dG9uIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMjBweDtcbn1cbi5uYXYtdG9nZ2xlLWJ1dHRvbiAubmF2LXRvZ2dsZS1iYXJzLCAubmF2LXRvZ2dsZS1idXR0b24gLm5hdi10b2dnbGUtYmFyczo6YmVmb3JlLCAubmF2LXRvZ2dsZS1idXR0b24gLm5hdi10b2dnbGUtYmFyczo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2LXRvZ2dsZS1idXR0b24uYWN0aXZlIC5uYXYtdG9nZ2xlLWJhcnMge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5uYXYtdG9nZ2xlLWJ1dHRvbi5hY3RpdmUgLm5hdi10b2dnbGUtYmFyczo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNDVkZWcpO1xufVxuLm5hdi10b2dnbGUtYnV0dG9uLmFjdGl2ZSAubmF2LXRvZ2dsZS1iYXJzOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoNDVkZWcpO1xufVxuLm5hdi10b2dnbGUtYnV0dG9uIC5uYXYtdG9nZ2xlLWJhcnMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XG4gIGhlaWdodDogMi41cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2LXRvZ2dsZS1idXR0b24gLm5hdi10b2dnbGUtYmFyczo6YmVmb3JlLCAubmF2LXRvZ2dsZS1idXR0b24gLm5hdi10b2dnbGUtYmFyczo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGhlaWdodDogMi41cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdi10b2dnbGUtYnV0dG9uIC5uYXYtdG9nZ2xlLWJhcnM6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNi4yNXB4KTtcbn1cbi5uYXYtdG9nZ2xlLWJ1dHRvbiAubmF2LXRvZ2dsZS1iYXJzOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2LjI1cHgpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbmF2LXRvZ2dsZS9uYXYtdG9nZ2xlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFRRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFWZ0I7RUFXaEIsdUJBQUE7RUFDQSxXQVhlO0FBS2pCO0FBUUU7RUFDRSxpQ0FBQTtBQU5KO0FBVUk7RUFDRSx1QkFBQTtBQVJOO0FBVU07RUFDRSx1Q0FBQTtBQVJSO0FBVU07RUFDRSxzQ0FBQTtBQVJSO0FBYUU7RUFDRSxpQkE1QmlCO0VBNkJqQixvQkE5QnlCO0VBK0J6QixhQWhDZ0I7RUFpQ2hCLGtCQUFBO0VBQ0EsV0FBQTtBQVhKO0FBYUk7RUFDRSx1QkFuQ2U7RUFvQ2Ysb0JBckN1QjtFQXNDdkIsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBMUNjO0VBMkNkLFdBQUE7QUFYTjtBQWNJO0VBQ0UsOEJBQUE7QUFaTjtBQWVJO0VBQ0UsNkJBQUE7QUFiTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmF2LXRvZ2dsZS1idXR0b24ge1xcbiAgJGJ1dHRvbi1oZWlnaHQ6IDIwcHg7XFxuICAkYnV0dG9uLXdpZHRoOiAyMHB4O1xcbiAgJGJ1dHRvbi1iYXItc2l6ZTogMi41cHg7XFxuICAkYnV0dG9uLWJhci1ib3JkZXItcmFkaXVzOiAxMDB2dztcXG4gICRidXR0b24tYmFyLWNvbG9yOiB3aGl0ZTtcXG4gICRidXR0b24tdHJhbnNpdGlvbi10aW1lOiAxNTBtczsgXFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogJGJ1dHRvbi1oZWlnaHQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAkYnV0dG9uLXdpZHRoO1xcblxcbiAgLm5hdi10b2dnbGUtYmFycywgLm5hdi10b2dnbGUtYmFyczo6YmVmb3JlLCAubmF2LXRvZ2dsZS1iYXJzOjphZnRlciB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAkYnV0dG9uLXRyYW5zaXRpb24tdGltZSBlYXNlLWluLW91dDtcXG4gIH1cXG4gIFxcbiAgJi5hY3RpdmUge1xcbiAgICAubmF2LXRvZ2dsZS1iYXJzIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBcXG4gICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgIH1cXG4gICAgICAmOjphZnRlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5uYXYtdG9nZ2xlLWJhcnMge1xcbiAgICBiYWNrZ3JvdW5kOiAkYnV0dG9uLWJhci1jb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJ1dHRvbi1iYXItYm9yZGVyLXJhZGl1cztcXG4gICAgaGVpZ2h0OiAkYnV0dG9uLWJhci1zaXplO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWJhci1jb2xvcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAkYnV0dG9uLWJhci1ib3JkZXItcmFkaXVzO1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBpbnNldDogMDtcXG4gICAgICBoZWlnaHQ6ICRidXR0b24tYmFyLXNpemU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygoJGJ1dHRvbi1oZWlnaHQgLSAkYnV0dG9uLWJhci1zaXplICogMykgLyAtMiApKTtcXG4gICAgfVxcblxcbiAgICAmOjphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoKCRidXR0b24taGVpZ2h0IC0gJGJ1dHRvbi1iYXItc2l6ZSAqIDMpIC8gMiApKTtcXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCN0aGVtZS10b2dnbGUtY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBvcGFjaXR5OiAwLjc7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzODBtcyBlYXNlLWluLW91dDtcbn1cbiN0aGVtZS10b2dnbGUtY29udGFpbmVyOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuI3RoZW1lLXRvZ2dsZS1jaGVja2JveCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiN0aGVtZS10b2dnbGUtbGFiZWwge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEycHggc2lsdmVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMHJlbTtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgbWluLWhlaWdodDogMjVweDtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUxMCsvRWRnZSAqL1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkICovXG59XG5cbiNzdW4sXG4jbW9vbiB7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4jc3VuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5OUE0MztcbiAgYm94LXNoYWRvdzogaW5zZXQgM3B4IC0zcHggOHB4IGJsYWNrO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDIwcHggKyAwcmVtKSkgcm90YXRlKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygyMHB4ICsgMHJlbSkpIHJvdGF0ZSgwKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zOHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM4cyBlYXNlLWluLW91dDtcbn1cblxuI21vb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGMUQ1O1xuICBib3gtc2hhZG93OiBpbnNldCAtM3B4IC0zcHggOHB4IGJsYWNrO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZSgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgcm90YXRlKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM4cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzhzIGVhc2UtaW4tb3V0O1xufVxuXG4jdGhlbWUtdG9nZ2xlLWNoZWNrYm94OmNoZWNrZWQgfiAjdGhlbWUtdG9nZ2xlLWxhYmVsID4gI3N1biB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgcm90YXRlKDM2MGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZSgzNjBkZWcpO1xufVxuXG4jdGhlbWUtdG9nZ2xlLWNoZWNrYm94OmNoZWNrZWQgfiAjdGhlbWUtdG9nZ2xlLWxhYmVsID4gI21vb24ge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKCgyMHB4ICsgMHJlbSkgKiAtMSkpIHJvdGF0ZSgzNjBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygoMjBweCArIDByZW0pICogLTEpKSByb3RhdGUoMzYwZGVnKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS90aGVtZS10b2dnbGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQUpGO0FBTUU7RUFDRSxVQUFBO0FBSko7O0FBUUE7RUFDRSxhQUFBO0FBTEY7O0FBUUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0E5QmlCO0VBK0JqQixnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBLEVBQUEsWUFBQTtFQUNBLHFCQUFBLEVBQUEsZUFBQTtFQUNBLHlCQUFBLEVBQUEsV0FBQTtFQUNBLGlCQUFBLEVBQUEsYUFBQTtBQU5GOztBQVNBOztFQUVFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQTdDMEI7RUE4QzFCLFdBL0N3QjtBQXlDMUI7O0FBU0E7RUFDRSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLDBEQUFBO0VBQ0Esa0RBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0FBTkY7O0FBU0E7RUFDRSx5QkFBQTtFQUNBLHFDQUFBO0VBQ0EsVUFBQTtFQUNBLDRDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0FBTkY7O0FBU0E7RUFDRSxVQUFBO0VBQ0EsaURBQUE7RUFDQSx5Q0FBQTtBQU5GOztBQVNBO0VBQ0UsVUFBQTtFQUNBLHNFQUFBO0VBQ0EsOERBQUE7QUFORlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGhlbWUtdG9nZ2xlLWdhcDogMHJlbTtcXG4kdGhlbWUtdG9nZ2xlLWljb24td2lkdGg6IDEwcHg7XFxuJHRoZW1lLXRvZ2dsZS1pY29uLXBhZGRpbmc6IDVweDtcXG4kdGhlbWUtaWNvbi1zcGFjZS1iZXR3ZWVuOiBjYWxjKCR0aGVtZS10b2dnbGUtaWNvbi13aWR0aCAqIDIgKyAkdGhlbWUtdG9nZ2xlLWdhcCk7XFxuXFxuI3RoZW1lLXRvZ2dsZS1jb250YWluZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzODBtcyBlYXNlLWluLW91dDtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4jdGhlbWUtdG9nZ2xlLWNoZWNrYm94IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0aGVtZS10b2dnbGUtbGFiZWwge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMnB4IHNpbHZlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7IFxcbiAgZ2FwOiAkdGhlbWUtdG9nZ2xlLWdhcDtcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxuXFxuICBtaW4taGVpZ2h0OiAyNXB4O1xcbiAgbWluLXdpZHRoOiAyNXB4O1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRTEwKy9FZGdlICovXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCAqL1xcbn1cXG5cXG4jc3VuLFxcbiNtb29uIHtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgcGFkZGluZzogJHRoZW1lLXRvZ2dsZS1pY29uLXBhZGRpbmc7XFxuICB3aWR0aDogJHRoZW1lLXRvZ2dsZS1pY29uLXdpZHRoO1xcbn1cXG5cXG4jc3VuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOTlBNDM7XFxuICBib3gtc2hhZG93OiBpbnNldCAzcHggLTNweCA4cHggYmxhY2s7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHRoZW1lLWljb24tc3BhY2UtYmV0d2Vlbikgcm90YXRlKDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0aGVtZS1pY29uLXNwYWNlLWJldHdlZW4pIHJvdGF0ZSgwKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzhzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzhzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jbW9vbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGMUQ1O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTNweCAtM3B4IDhweCBibGFjaztcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZSgwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZSgwKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzhzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzhzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jdGhlbWUtdG9nZ2xlLWNoZWNrYm94OmNoZWNrZWQgfiAjdGhlbWUtdG9nZ2xlLWxhYmVsID4gI3N1biB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG5cXG4jdGhlbWUtdG9nZ2xlLWNoZWNrYm94OmNoZWNrZWQgfiAjdGhlbWUtdG9nZ2xlLWxhYmVsID4gI21vb24ge1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoJHRoZW1lLWljb24tc3BhY2UtYmV0d2VlbiAqIC0xKSkgcm90YXRlKDM2MGRlZyk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygkdGhlbWUtaWNvbi1zcGFjZS1iZXR3ZWVuICogLTEpKSByb3RhdGUoMzYwZGVnKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLnppZy16YWctbmF2IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnppZy16YWctbmF2Lm9wZW4ge1xuICBhbmltYXRpb246IGZhZGUtaW4gMXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uemlnLXphZy1uYXYub3Blbi5jbG9zaW5nIHtcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCAxNTBtcyBlYXNlLWluLW91dDtcbn1cbi56aWctemFnLW5hdiAubmF2LXVsIHtcbiAgZ2FwOiAxLjVyZW07XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uemlnLXphZy1uYXYgLm5hdi11bCAubmF2LWxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG4uemlnLXphZy1uYXYgLm5hdi11bCAubmF2LWxpOm50aC1vZi10eXBlKG9kZCkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cbi56aWctemFnLW5hdiAubmF2LXVsIC5uYXYtbGk6bnRoLW9mLXR5cGUoZXZlbikge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cbi56aWctemFnLW5hdiAubmF2LXVsIC5uYXYtbGk6OmJlZm9yZSwgLnppZy16YWctbmF2IC5uYXYtdWwgLm5hdi1saTo6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgY29udGVudDogXCJcIjtcbiAgaW5zZXQ6IC01cHggLTE1cHg7XG4gIG9wYWNpdHk6IDAuMTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgei1pbmRleDogMDtcbn1cbi56aWctemFnLW5hdiAubmF2LXVsIC5uYXYtbGk6OmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xufVxuLnppZy16YWctbmF2IC5uYXYtdWwgLm5hdi1saTo6YWZ0ZXIge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xufVxuLnppZy16YWctbmF2IC5uYXYtdWwgLm5hdi1saTpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuLnppZy16YWctbmF2IC5uYXYtdWwgLm5hdi1saTpob3Zlcjo6YmVmb3JlLCAuemlnLXphZy1uYXYgLm5hdi11bCAubmF2LWxpOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG4uemlnLXphZy1uYXYgLm5hdi11bCAubmF2LWxpbmsge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoc2t5Ymx1ZSwgd2hpdGUsIHdoaXRlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoc2t5Ymx1ZSwgd2hpdGUsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiB1bnNldDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnppZy16YWctbmF2IC5uYXYtdWwgLm5hdi1saW5rIC5uYXYtbnVtYmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uemlnLXphZy1uYXYgLm5hdi11bCAubmF2LWxpbms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgd2hpdGU7XG4gIGluc2V0OiA1cHggMCAwIDA7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAzODBtcyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG59XG4uemlnLXphZy1uYXYgLm5hdi11bCAubmF2LWxpbmtbYXJpYS1jdXJyZW50XTo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLm5hdi1Db250YWluZXIgLnppZy16YWctbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvemlnLXphZy1uYXYvemlnLXphZy1uYXYuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsVUFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0VBQ0Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7RUFDRjtBQUNGO0FBRUE7RUFLRSxhQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU1FO0VBQ0UsaUNBQUE7RUFDQSxhQUFBO0FBSko7QUFNSTtFQUNFLHFDQUFBO0FBSk47QUFRRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQU5KO0FBUUk7RUFDRSxrQkFBQTtFQUNBLHVDQUFBO0FBTk47QUFRTTtFQUNFLHVCQUFBO0FBTlI7QUFTTTtFQUNFLHVCQUFBO0FBUFI7QUFVTTtFQUVFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQVRSO0FBWU07RUFDRSw2QkFBQTtBQVZSO0FBYU07RUFDRSw0QkFBQTtBQVhSO0FBY007RUFDRSxvQkFBQTtBQVpSO0FBY1E7RUFFRSxvQkFBQTtFQUNBLHVDQUFBO0FBYlY7QUFrQkk7RUFDRSxrREFBQTtFQUNBLDBEQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQXpFVTtFQTBFVix5QkFBQTtFQUNBLGlDQUFBO0FBaEJOO0FBa0JNO0VBQ0Usb0JBQUE7QUFoQlI7QUFtQk07RUFDRSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrRUFBQTtFQUNBLG9CQUFBO0FBakJSO0FBb0JNO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0FBbEJSOztBQXdCQTtFQUVJO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtFQXRCSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLnppZy16YWctbmF2IHtcXG4gICRsaW5rLWNvbG9yOiB3aGl0ZTtcXG4gICRsaW5rLXNoYWRvdzogdW5zZXQ7XFxuICAkbGluay1yb3RhdGlvbjogMGRlZztcXG5cXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAmLm9wZW4ge1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMXMgZWFzZS1pbi1vdXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICYuY2xvc2luZyB7XFxuICAgICAgYW5pbWF0aW9uOiBmYWRlLW91dCAxNTBtcyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm5hdi11bCB7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICAubmF2LWxpIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICAgICY6bnRoLW9mLXR5cGUob2RkKSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZShjYWxjKCRsaW5rLXJvdGF0aW9uICogLTEpKTtcXG4gICAgICB9XFxuXFxuICAgICAgJjpudGgtb2YtdHlwZShldmVuKSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkbGluay1yb3RhdGlvbik7XFxuICAgICAgfVxcblxcbiAgICAgICY6OmJlZm9yZSxcXG4gICAgICAmOjphZnRlciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgaW5zZXQ6IC01cHggLTE1cHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjE7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICB9XFxuXFxuICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRsaW5rLWNvbG9yO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOjphZnRlciB7XFxuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRsaW5rLWNvbG9yO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcblxcbiAgICAgICAgJjo6YmVmb3JlLFxcbiAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubmF2LWxpbmsge1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChza3libHVlLCB3aGl0ZSwgd2hpdGUpO1xcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHNreWJsdWUsIHdoaXRlLCB3aGl0ZSk7XFxuICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgdGV4dC1zaGFkb3c6ICRsaW5rLXNoYWRvdztcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgICAubmF2LW51bWJlciB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAkbGluay1jb2xvcjtcXG4gICAgICAgIGluc2V0OiA1cHggMCAwIDA7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAzODBtcyBlYXNlLWluLW91dDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICAgIH1cXG5cXG4gICAgICAmW2FyaWEtY3VycmVudF06OmJlZm9yZSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufSBcXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAubmF2LUNvbnRhaW5lciB7XFxuICAgIC56aWctemFnLW5hdiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbn1cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hYmJyLFxuYWRkcmVzcyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxuc2FtcCxcbnNtYWxsLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudmFyLFxuYixcbmksXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oMyxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5pbWcsXG5waWN0dXJlLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW1nIHtcbiAgaW1hZ2UtcmVuZGVyaW5nOiBjcmlzcC1lZGdlcztcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnBpY3R1cmUgaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLyogY2hhbmdlIGNvbG91cnMgdG8gc3VpdCB5b3VyIG5lZWRzICovXG5pbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5O1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBjaGFuZ2UgY29sb3VycyB0byBzdWl0IHlvdXIgbmVlZHMgKi9cbm1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGVsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbmRmbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbmFiYnJbdGl0bGVdLFxuZGZuW3RpdGxlXSB7XG4gIGN1cnNvcjogaGVscDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogY2hhbmdlIGJvcmRlciBjb2xvdXIgdG8gc3VpdCB5b3VyIG5lZWRzICovXG5ociB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcbiAgbWFyZ2luOiAxZW0gMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW5wdXQsXG5zZWxlY3Qge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5lbSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmFjY2Vzc2liaWxpdHkge1xuICBoZWlnaHQ6IDFweDtcbiAgbGVmdDogLTk5OTlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGF1dG87XG4gIHdpZHRoOiAxcHg7XG59XG5cbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcbn1cblxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcbiAgfVxuICAqLFxuICAqOjpiZWZvcmUsXG4gICo6OmFmdGVyIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgfVxufVxuLyogKiBVVElMSVRJRVMgKi9cbi5uby1zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgRWRnZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cbn1cblxuYm9keSAjY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXCIgXCJhc2lkZSBhc2lkZSBhc2lkZSBhc2lkZVwiIFwibWFpbiBtYWluIG1haW4gbWFpblwiIFwiZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyXCI7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIC5oZWFkZXItbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuYm9keSAjY29udGVudCBoZWFkZXIgLmhlYWRlci1sZWZ0IC5oZWFkZXItbG9nbyB7XG4gIGFuaW1hdGlvbjogc3BpbiAzM3MgbGluZWFyIGluZmluaXRlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzhtcyBlYXNlLWluLW91dDtcbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciAuaGVhZGVyLWxlZnQgLmhlYWRlci1sb2dvOmhvdmVyIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgb3BhY2l0eTogMTtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIC5oZWFkZXItbGVmdCAuaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciAuaGVhZGVyLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzcmVtO1xufVxuYm9keSAjY29udGVudCBhc2lkZSB7XG4gIGdyaWQtYXJlYTogYXNpZGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMCwgMCwgMC44NjQpO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgLnppZy16YWctbmF2IC5uYXYtdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYm9keSAjY29udGVudCBtYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbmJvZHkgI2NvbnRlbnQgZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGdyaWQtYXJlYTogZm9vdGVyO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuY3NzLm1hcCAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jeWNsb25lLXJlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvbWFp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XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi10b2dnbGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi10b2dnbGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGhlbWUtdG9nZ2xlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aGVtZS10b2dnbGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vemlnLXphZy1uYXYuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ppZy16YWctbmF2LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL2Nzcy9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi4vY29tcG9uZW50cy96aWctemFnLW5hdi96aWctemFnLW5hdi5zY3NzJztcbmltcG9ydCBwcmlvcml0eUxvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcmlvcml0eS1sb2dvLndlYnAnO1xuXG5pbXBvcnQgeyBjcmVhdGVUaGVtZVRvZ2dsZUJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGhlbWUtdG9nZ2xlL3RoZW1lLXRvZ2dsZS5tYXJrdXAnO1xuaW1wb3J0IHsgY3JlYXRlTmF2VG9nZ2xlQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9uYXYtdG9nZ2xlL25hdi10b2dnbGUtbWFya3VwJztcbmltcG9ydCB7IGNyZWF0ZVppZ1phZ05hdiB9IGZyb20gJy4uL2NvbXBvbmVudHMvemlnLXphZy1uYXYvemlwLXphZy1uYXYtbWFya3VwJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBwYWdlcyA9IFsnQWxsIFRhc2tzJywgJ1RvZGF5JywgJ05leHQgNyBEYXlzJywgJ0ltcG9ydGFudCcsICdwcm9qZWN0JywgJ05ldyBQcm9qZWN0J107XG5cbi8vICEgQ1JFQVRFIEhFQURFUlxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbmNvbnN0IGhlYWRlckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhlYWRlckxlZnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxlZnQnKTtcblxuY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuaGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nbycpO1xuaGVhZGVyTG9nby5zZXRBdHRyaWJ1dGUoJ3NyYycsIHByaW9yaXR5TG9nbyk7XG5oZWFkZXJMb2dvLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1ByaW9yaXR5IExvZ28nKTtcblxuY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRpdGxlJyk7XG5oZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICc8cHJ7aW99cml0eT4nO1xuXG5oZWFkZXJMZWZ0LmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cbmNvbnN0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkZXJSaWdodC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItcmlnaHQnKTtcblxuaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlVGhlbWVUb2dnbGVCdXR0b24oKSk7XG5oZWFkZXJSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVOYXZUb2dnbGVCdXR0b24oKSk7XG5cbmhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMZWZ0KTtcbmhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJSaWdodCk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuXG5cbmNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbi8vICEgQ1JFQVRFIE5BVlxuYXNpZGUuYXBwZW5kQ2hpbGQoY3JlYXRlWmlnWmFnTmF2KHBhZ2VzLCBwYWdlc1swXSwgJ2J1dHRvbicpKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChhc2lkZSk7XG5cblxuXG4vLyBjb25zdCBwYWdlU2VjdGlvbnMgPSBbY3JlYXRlSGVhZGVyLGNyZWF0ZUFzaWRlLGNyZWF0ZU1haW4sIGNyZWF0ZUZvb3Rlcl07XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbi8vICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7ICBcbi8vICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuLy8gICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdGl0bGUnKTtcbi8vICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAndG9Ebyc7XG4vLyAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cbi8vICAgcmV0dXJuIGhlYWRlclxuLy8gfVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVBc2lkZSgpIHtcbi8vICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuLy8gICBhc2lkZS50ZXh0Q29udGVudCA9ICdhc2lkZSc7XG4gIFxuLy8gICByZXR1cm4gYXNpZGU7XG4vLyB9XG5cblxuLy8gZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbi8vICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbi8vICAgbWFpbi50ZXh0Q29udGVudCA9ICdtYWluJztcblxuLy8gICByZXR1cm4gbWFpbjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuLy8gICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbi8vICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ2Zvb3Rlcic7XG5cbi8vICAgcmV0dXJuIGZvb3RlclxuLy8gfVxuXG4vLyBmdW5jdGlvbiByZW5kZXJQYWdlKHBhZ2VTZWN0aW9ucykge1xuLy8gICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuLy8gICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4vLyAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuLy8gICB9XG5cbi8vICAgcGFnZVNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKCkpO1xuLy8gICB9KTtcbi8vIH1cblxuLy8gcmVuZGVyUGFnZShwYWdlU2VjdGlvbnMpOyJdLCJuYW1lcyI6WyJ0b2dnbGVOYXZCdXR0b24iLCJjcmVhdGVOYXZUb2dnbGVCdXR0b24iLCJuYXZUb2dnbGVCdXR0b24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJuYXZUb2dnbGVCYXJzIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRzIiwiSElERV9OQVZfRVZFTlQiLCJTSE9XX05BVl9FVkVOVCIsInRvZ2dsZUJ1dHRvbkFjdGl2YXRlZCIsImNvbnRhaW5zIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJyZW1vdmUiLCJhZGRTY3JpcHRUb0hlYWQiLCJpY29uU2NyaXB0U291cmNlIiwiYXR0cmlidXRlcyIsImNyb3Nzb3JpZ2luIiwiY3JlYXRlVGhlbWVUb2dnbGVCdXR0b24iLCJ0aGVtZVRvZ2dsZUNvbnRhaW5lciIsInRoZW1lVG9nZ2xlQ2hlY2tib3giLCJ0aGVtZVRvZ2dsZUxhYmVsIiwic3VuSWNvbiIsIm1vb25JY29uIiwiaGlkZU5hdiIsInppZ1phZ05hdiIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5pdGlhdGVIaWRlTmF2Iiwic2hvd05hdiIsImFjdGl2YXRlTGlzdGVuZXJzIiwib24iLCJjcmVhdGVaaWdaYWdOYXYiLCJwYWdlTmFtZXMiLCJpbml0aWFsUGFnZSIsIm5hdlR5cGUiLCJuYXZVTCIsImxpc3RGcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJmb3JFYWNoIiwicGFnZSIsImluZGV4IiwibmF2TEkiLCJsaW5rTnVtYmVyU3BhbiIsInRleHRDb250ZW50IiwiY29uY2F0IiwibmF2TGluayIsImNyZWF0ZVRleHROb2RlIiwic3JjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2NyaXB0IiwiYXR0cmlidXRlIiwiaGVhZCIsImV2ZW50TmFtZSIsImZuIiwicHVzaCIsIm9mZiIsImkiLCJzcGxpY2UiLCJkYXRhIiwicHJpb3JpdHlMb2dvIiwiY29udGVudCIsImdldEVsZW1lbnRCeUlkIiwicGFnZXMiLCJoZWFkZXIiLCJoZWFkZXJMZWZ0IiwiaGVhZGVyTG9nbyIsImhlYWRlclRpdGxlIiwiaGVhZGVyUmlnaHQiLCJhc2lkZSJdLCJzb3VyY2VSb290IjoiIn0=