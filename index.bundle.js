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

function createZigZagNav(objectOfLists, initialPage, anchorOrButton, ariaControlsID, specialNavListItemArray) {
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
    zigZagNav.appendChild(listHeader);
    var listUL = document.createElement('ul');
    listUL.classList.add('nav-ul');
    var groupedListElements = objectOfLists[list].listElements;
    var listFragment = document.createDocumentFragment();
    groupedListElements.forEach(function (pageNameAndHref, index) {
      var pageName = pageNameAndHref[0];
      var pageHref = pageNameAndHref[1];
      var navLink = document.createElement(anchorOrButton === 'button' ? 'button' :  true ? 'a' : 0);
      navLink.classList.add('nav-link');
      if (anchorOrButton === 'a') {
        navLink.setAttribute('href', pageHref); // ! UPDATE THIS TO USE THE PAGE NAME
      }

      if (pageName === initialPage) {
        navLink.setAttribute('aria-current', 'page');
      }
      var navLI = document.createElement('li');
      navLI.classList.add('nav-li');
      specialNavListItemArray.forEach(function (specialNavLink) {
        if (pageName === specialNavLink) {
          navLI.classList.add('special-nav-li');
        }
      });
      navLink.textContent = pageName;
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

/***/ "./src/js/createModifiedLi.js":
/*!************************************!*\
  !*** ./src/js/createModifiedLi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createModifiedLiContent: () => (/* binding */ createModifiedLiContent)
/* harmony export */ });
/* harmony import */ var _components_listIcon_listIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/listIcon/listIcon */ "./src/components/listIcon/listIcon.js");

function createModifiedLiContent() {
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
  projectInputContainer.appendChild((0,_components_listIcon_listIcon__WEBPACK_IMPORTED_MODULE_0__.createListIcon)());
  projectInputContainer.appendChild(projectNameInput);
  projectButtonsContainer.appendChild(addProjectButton);
  projectButtonsContainer.appendChild(cancelAddProjectButton);
  console.log(projectButtonsContainer, projectInputContainer);
  return [projectInputContainer, projectButtonsContainer];
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

/***/ "./src/utilities/modify-li.js":
/*!************************************!*\
  !*** ./src/utilities/modify-li.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modifyListElement: () => (/* binding */ modifyListElement)
/* harmony export */ });
function modifyListElement(listElement, listItemIndex, listElementContentArray, id) {
  var modifiedListElement = listElement.querySelector("li:nth-child(".concat(listItemIndex, ")"));
  modifiedListElement.setAttribute('id', id);
  modifiedListElement.innerHTML = ''; // clear the li

  listElementContentArray.forEach(function (element) {
    modifiedListElement.appendChild(element);
  });
  return modifiedListElement;
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
  margin-inline-end: 0.313rem;
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
}`, "",{"version":3,"sources":["webpack://./src/components/zig-zag-nav/zig-zag-nav.scss"],"names":[],"mappings":"AAAA;EACE;IACE,UAAA;IACA,4BAAA;EACF;EACA;IACE,UAAA;IACA,wBAAA;EACF;AACF;AACA;EACE;IACE,wBAAA;IACA,UAAA;EACF;EACA;IACE,UAAA;IACA,4BAAA;EACF;AACF;AAEA;EAKE,aAAA;EACA,SAAA;AAJF;AAME;EACE,aAAA;AAJJ;AAOE;EACE,qCAAA;AALJ;AASE;EACE,oCAAA;AAPJ;AAUE;EACE,YArBW;EAsBX,aAAA;EACA,sBAAA;EACA,WAAA;AARJ;AAUI;EACE,cAAA;EACA,kBAAA;EACA,yBAAA;AARN;AAWI;EACE,gBAAA;AATN;AAWM;EACE,kBAAA;EACA,uCAAA;AATR;AAWQ;EACE,uBAAA;AATV;AAYQ;EACE,uBAAA;AAVV;AAaQ;EAEE,oBAAA;EACA,WAAA;EACA,iBAAA;EACA,YAAA;EACA,oBAAA;EACA,kBAAA;EACA,oBAAA;EACA,wBAAA;EACA,UAAA;AAZV;AAeQ;EACE,oBAAA;AAbV;AAgBQ;EACE,YAjEK;EAkEL,eAAA;EACA,qBAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBArEM;EAsEN,yBAAA;EACA,iCAAA;AAdV;AAgBU;EACE,qBAAA;EACA,iBAAA;EACA,2BAAA;EACA,kBAAA;AAdZ;AAiBU;EACE,WAAA;EACA,+BAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kEAAA;EACA,oBAAA;AAfZ;AAkBU;EACE,UAAA;EACA,oBAAA;AAhBZ;;AAwBA;EACE;IACE;MACE,UAAA;MACA,2BAAA;IArBF;IAuBA;MACE,UAAA;MACA,wBAAA;IArBF;EACF;EAuBA;IACE;MACE,UAAA;MACA,wBAAA;IArBF;IAuBA;MACE,UAAA;MACA,2BAAA;IArBF;EACF;EAwBA;IACE,sBAAA;IACA,eAAA;IACA,gBAAA;EAtBF;AACF","sourcesContent":["@keyframes fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fade-out {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n}\n\n.zig-zag-nav {\n  $text-color: white;\n  $link-shadow: unset;\n  $link-rotation: 0deg;\n\n  display: flex;\n  gap: 5rem;\n\n  &[data-visibility=false] {\n    display: none;\n  }\n\n  &[data-visibility=closing] {\n    animation: fade-out 380ms ease-in-out;\n  }\n  \n\n  &[data-visibility=true] {\n    animation: fade-in 380ms ease-in-out;\n  }\n\n  .nav-list-container {\n    color: $text-color;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n\n    .nav-list-header {\n      color: inherit;\n      position: relative;\n      text-transform: uppercase;\n    }\n\n    .nav-ul {\n      list-style: none;\n\n      .nav-li {\n        position: relative;\n        transition: transform 250ms ease-in-out;\n\n        &:nth-of-type(odd) {\n          transform: rotate(calc($link-rotation * -1));\n        }\n\n        &:nth-of-type(even) {\n          transform: rotate($link-rotation);\n        }\n\n        &::before,\n        &::after {\n          border-radius: 100px;\n          content: '';\n          inset: -5px -15px;\n          opacity: 0.1;\n          pointer-events: none;\n          position: absolute;\n          transform: scaleX(0);\n          transform-origin: center;\n          z-index: 0;\n        }\n\n        &:hover {\n          transform: rotate(0);\n        }\n\n        .nav-link {\n          color: $text-color;\n          cursor: pointer;\n          display: inline-block;\n          position: relative;\n          text-decoration: none;\n          text-shadow: $link-shadow;\n          text-transform: uppercase;\n          transition: all 500ms ease-in-out;\n\n          .nav-number {\n            display: inline-block;\n            font-weight: bold;\n            margin-inline-end: 0.313rem;\n            position: relative;\n          }\n\n          &::before {\n            content: '';\n            border-bottom: 2px dashed white;\n            inset: 5px 0 0 0;\n            padding-top: 1rem;\n            position: absolute;\n            transition: opacity 250ms ease-in-out, transform 380ms ease-in-out;\n            transform: scaleX(0);\n          }\n\n          &[aria-current]::before {\n            opacity: 1;\n            transform: scaleX(1);\n          }\n        }\n      }\n    }\n  }\n} \n\n@media (max-width: 35em) {\n  @keyframes fade-in {\n    from {\n      opacity: 0;\n      transform: translateX(100%);\n    }\n    to {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n  @keyframes fade-out {\n    from {\n      opacity: 1;\n      transform: translateX(0);\n    }\n    to {\n      opacity: 0;\n      transform: translateX(100%);\n    }\n  }\n\n  .zig-zag-nav {\n    flex-direction: column;\n    position: fixed;\n    inset:  0 0 0 30%;\n  }\n}\n"],"sourceRoot":""}]);
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
  gap: 2rem;
  flex-direction: column;
}
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li {
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  margin-right: 1rem;
  padding-top: 1rem;
  justify-content: end;
}
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-input-container {
  align-items: center;
  gap: 1.25rem;
  display: flex;
}
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-input-container #project-name-input {
  border: none;
  border-radius: 100vw;
  padding: 1rem;
}
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-buttons-container {
  display: flex;
  gap: 1.25rem;
  align-self: start;
}
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-buttons-container #add-project-button,
body #content .zig-zag-nav .nav-list-container .nav-ul #add-project-li #project-buttons-container #cancel-add-project-button {
  border: 2px solid hsla(0, 0%, 100%, 0.25);
  border-radius: 100vw;
  color: white;
  cursor: pointer;
  padding: 15px;
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
body #content .zig-zag-nav .nav-list-container .nav-ul .special-nav-li:first-of-type .nav-link {
  font-size: 1rem;
  text-decoration: underline;
  transition: transform 380ms ease-in-out;
}
body #content .zig-zag-nav .nav-list-container .nav-ul .special-nav-li:first-of-type .nav-link:hover {
  transform: translateX(0.25rem) scale(1) rotate(0);
}
body #content .zig-zag-nav .nav-list-container .nav-ul .special-nav-li:first-of-type .nav-link::after {
  content: "+";
  opacity: 1;
  position: absolute;
  transition: transform 380ms ease-in-out;
}
body #content .zig-zag-nav .nav-list-container .nav-ul .special-nav-li:first-of-type .nav-link:hover::after {
  transform: translate(-0.25rem) scale(2) rotate(360deg);
}
body #content .zig-zag-nav .nav-list-container .nav-ul .nav-link {
  white-space: nowrap;
}
body #content .zig-zag-nav .nav-list-container .nav-ul .nav-link::after {
  content: ">";
  opacity: 0;
  position: absolute;
  top: 0;
  left: -0.75rem;
  transition: opacity 380ms ease-in-out;
}
body #content .zig-zag-nav .nav-list-container .nav-ul .nav-link:hover::after {
  opacity: 1;
}
body #content .zig-zag-nav .nav-list-container:nth-child(2) {
  max-height: 300px;
  width: 100%;
}
body #content .zig-zag-nav .nav-list-container:nth-child(2) .nav-ul {
  border: 3px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 55px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: column;
  overflow: scroll;
  padding: 2rem;
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
  body #content .zig-zag-nav .nav-list-container:nth-child(2) .nav-ul {
    border-radius: 0;
    flex-direction: column;
    padding: 1.125rem;
    flex-wrap: nowrap;
  }
  body #content .zig-zag-nav .nav-list-container:nth-child(2) .nav-ul #add-project-li .list-icon-container {
    display: none;
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
/* harmony import */ var _utilities_modify_li_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/modify-li.js */ "./src/utilities/modify-li.js");
/* harmony import */ var _createModifiedLi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createModifiedLi.js */ "./src/js/createModifiedLi.js");






var content = document.getElementById('content');

// ! CREATE header
content.appendChild((0,_header_markup__WEBPACK_IMPORTED_MODULE_3__.createHeader)());

// ! CREATE nav
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ // PARAM: createZigZagNav                                               │
  │ // ? 1. objectOfLists                                                   │
  │ // ? 2. initialPage (used to set the aria - current attribute)          │
  │ // ? 3. navType (anchor for 'a' tags / button for 'button tags)         │
  │ // ? 4. id (sets navigations id for aria in conjunction with a nav      │
  │   // ? toggle button)                                                   │                                                               │
  │ // ? 5. specialNavLinkArr is an array of page names with that will      │
  │   // ? be used to create a special nav links via a unique css class     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
var listObjects = {
  Home: {
    listElements: [['All Tasks', '#'], ['Today', '#'], ['Next 7 Days', '#'], ['Important', '#']]
  },
  Projects: {
    listElements: [['Add Project', '#'], ['ADD_PROJECT_FORM', '#']]
  }
};
var initialPage = listObjects.Home.listElements[0][0];
var specialNavListItemArray = ['Add Project', 'ADD_PROJECT_FORM'];
content.appendChild((0,_components_zig_zag_nav_zip_zag_nav_markup__WEBPACK_IMPORTED_MODULE_2__.createZigZagNav)(listObjects, initialPage, 'button', 'nav-primary-aria', specialNavListItemArray));

// ! MODIFY zigZagNav List Element to create Add Project Button
/* 
┌─────────────────────────────────────────────────────────────────────────┐
│ // PARAM: modifyListElement                                             │
│ // ? 1.listElement                                                      │
│ // ? 2.listItemIndex                                                    │
│ // ? 3.listElementContentArray;                                         │
│ // ? 4.id for modified element                                           │
└─────────────────────────────────────────────────────────────────────────┘
*/
var projectList = document.querySelector('.nav-list-container:nth-child(2) > ul');
(0,_utilities_modify_li_js__WEBPACK_IMPORTED_MODULE_4__.modifyListElement)(projectList, 2, (0,_createModifiedLi_js__WEBPACK_IMPORTED_MODULE_5__.createModifiedLiContent)(), 'add-project-li');

// !
// !
// !

var main = document.createElement('main');
var mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
main.appendChild(mainContainer);
content.appendChild(main);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCLDRCQUE0QjtBQUM1QiwwQkFBMEI7QUFDMUIseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxrS0FBa0ssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLHlFQUF5RSxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sZUFBZSxVQUFVLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sUUFBUSxXQUFXLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLHFCQUFxQixxQkFBcUIsc0JBQXNCLHNCQUFzQixzQkFBc0IsZ0JBQWdCLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsWUFBWSxNQUFNLE9BQU8sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxRQUFRLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxRQUFRLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1B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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTTRELFdBQVcsR0FBR3hHLFFBQVEsQ0FBQ2tDLGFBQWEsQ0FBQyx1Q0FBdUMsQ0FBQztBQUNuRmtELDBFQUFpQixDQUFDb0IsV0FBVyxFQUFFLENBQUMsRUFBRXpDLDZFQUF1QixDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQzs7QUFHOUU7QUFDQTtBQUNBOztBQUVBLElBQU0wQyxJQUFJLEdBQUd6RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDM0MsSUFBTXlHLGFBQWEsR0FBRzFHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUNuRHlHLGFBQWEsQ0FBQ3hHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0FBRTdDc0csSUFBSSxDQUFDbkcsV0FBVyxDQUFDb0csYUFBYSxDQUFDO0FBQy9COUIsT0FBTyxDQUFDdEUsV0FBVyxDQUFDbUcsSUFBSSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL2xpc3RJY29uL2xpc3RJY29uLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2NvbXBvbmVudHMvbmF2LXRvZ2dsZS9uYXYtdG9nZ2xlLW1hcmt1cC5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL25hdi10b2dnbGUvbmF2LXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS90aGVtZS10b2dnbGUubWFya3VwLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2NvbXBvbmVudHMvemlnLXphZy1uYXYvemlnLXphZy1uYXYuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy96aWctemFnLW5hdi96aXAtemFnLW5hdi1tYXJrdXAuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvanMvY3JlYXRlTW9kaWZpZWRMaS5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9qcy9ldmVudE5hbWVzLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2pzL2hlYWRlci1tYXJrdXAuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvdXRpbGl0aWVzL2h0bWwtc2NyaXB0LWluamVjdGlvbi5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy91dGlsaXRpZXMvbW9kaWZ5LWxpLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL3V0aWxpdGllcy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy9saXN0SWNvbi9saXN0SWNvbi5zY3NzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2NvbXBvbmVudHMvbmF2LXRvZ2dsZS9uYXYtdG9nZ2xlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy90aGVtZS10b2dnbGUvdGhlbWUtdG9nZ2xlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy96aWctemFnLW5hdi96aWctemFnLW5hdi5zY3NzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL2xpc3RJY29uL2xpc3RJY29uLnNjc3M/YTM0NCIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL25hdi10b2dnbGUvbmF2LXRvZ2dsZS5zY3NzPzEyODMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvLi9zcmMvY29tcG9uZW50cy90aGVtZS10b2dnbGUvdGhlbWUtdG9nZ2xlLnNjc3M/MWYwMSIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jb21wb25lbnRzL3ppZy16YWctbmF2L3ppZy16YWctbmF2LnNjc3M/NDNhYSIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9jc3Mvc3R5bGVzLmNzcz85OWEzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3ByaW9yaXR5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ByaW9yaXR5L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJpb3JpdHkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcmlvcml0eS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ByaW9yaXR5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3ByaW9yaXR5L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3ByaW9yaXR5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcmlvcml0eS8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9saXN0SWNvbi5zY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlTGlzdEljb24oKSB7XG4gIGNvbnN0IGxpc3RJY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpc3RJY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaWNvbi1jb250YWluZXInKTtcbiAgbGlzdEljb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuXG4gIGNvbnN0IGxpc3RJY29uQmFycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaXN0SWNvbkJhcnMuY2xhc3NMaXN0LmFkZCgnbGlzdC1pY29uLWJhcnMnKTtcblxuICBsaXN0SWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SWNvbkJhcnMpO1xuXG4gIHJldHVybiBsaXN0SWNvbkNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTGlzdEljb24gfTtcblxuIiwiaW1wb3J0ICcuL25hdi10b2dnbGUuc2Nzcyc7XG5pbXBvcnQgeyB0b2dnbGVOYXZCdXR0b24gfSBmcm9tICcuL25hdi10b2dnbGUnO1xuXG5mdW5jdGlvbiBjcmVhdGVOYXZUb2dnbGVCdXR0b24oYXJpYUNvbnRyb2xzSUQpIHtcbiAgY29uc3QgbmF2VG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5hdlRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtdG9nZ2xlLWJ1dHRvbicpO1xuICBuYXZUb2dnbGVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ09wZW4gTmF2aWdhdGlvbiBNZW51Jyk7XG4gIG5hdlRvZ2dsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gIG5hdlRvZ2dsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnLCBhcmlhQ29udHJvbHNJRCk7XG5cbiAgY29uc3QgbmF2VG9nZ2xlQmFycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZUb2dnbGVCYXJzLmNsYXNzTGlzdC5hZGQoJ25hdi10b2dnbGUtYmFycycpO1xuXG4gIG5hdlRvZ2dsZUJ1dHRvbi5hcHBlbmRDaGlsZChuYXZUb2dnbGVCYXJzKTtcblxuICBuYXZUb2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOYXZCdXR0b24pO1xuXG4gIHJldHVybiBuYXZUb2dnbGVCdXR0b247XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU5hdlRvZ2dsZUJ1dHRvbiB9OyIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9wdWJzdWIuanMnO1xuaW1wb3J0IHsgSElERV9OQVZfRVZFTlQsIFNIT1dfTkFWX0VWRU5UIH0gZnJvbSAnLi4vLi4vanMvZXZlbnROYW1lcy5qcyc7XG5cbmZ1bmN0aW9uIHRvZ2dsZU5hdkJ1dHRvbigpIHtcbiAgbGV0IHRvZ2dsZUJ1dHRvbkFjdGl2YXRlZCA9IHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKTtcblxuICBpZiAoIXRvZ2dsZUJ1dHRvbkFjdGl2YXRlZCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdDbG9zZSBOYXZpZ2F0aW9uIE1lbnUnKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgY29uc29sZS5sb2coJ2VtaXR0aW5nIHNob3cgbmF2Jyk7XG4gICAgZXZlbnRzLmVtaXQoU0hPV19OQVZfRVZFTlQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdPcGVuIE5hdmlnYXRpb24gTWVudScpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgY29uc29sZS5sb2coJ2VtaXR0aW5nIGhpZGUgbmF2Jyk7XG4gICAgZXZlbnRzLmVtaXQoSElERV9OQVZfRVZFTlQpO1xuICB9XG59XG5cbmV4cG9ydCB7IHRvZ2dsZU5hdkJ1dHRvbiB9O1xuIiwiLy8gKiBEZXBlbmRlbmNpZXM6IGh0bWwtc2NyaXB0LWluamVjdGlvbi5qc1xuXG4vLyAqIERlc2NyaXB0aW9uOiBDcmVhdGVzIGEgdGhlbWUgdG9nZ2xlIGJ1dHRvbi5cbi8vID8gQHJldHVybiB7SFRNTEVsZW1lbnR9IHRoZW1lVG9nZ2xlQ29udGFpbmVyXG5cbi8vICogQGV4YW1wbGVcbi8vID8gY29uc3QgdGhlbWVUb2dnbGVDb250YWluZXIgPSBjcmVhdGVUaGVtZVRvZ2dsZUJ1dHRvbigpO1xuLy8gPyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoZW1lVG9nZ2xlQ29udGFpbmVyKTtcblxuaW1wb3J0IHsgYWRkU2NyaXB0VG9IZWFkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sLXNjcmlwdC1pbmplY3Rpb25cIjtcbmltcG9ydCAnLi90aGVtZS10b2dnbGUuc2Nzcyc7XG5cbmNvbnN0IGljb25TY3JpcHRTb3VyY2UgPSAnaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzI0MTc2YWI5NzMuanMnO1xuY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgY3Jvc3NvcmlnaW46ICdhbm9ueW1vdXMnLFxufVxuXG5hZGRTY3JpcHRUb0hlYWQoaWNvblNjcmlwdFNvdXJjZSwgYXR0cmlidXRlcyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lVG9nZ2xlQnV0dG9uKCkge1xuICBjb25zdCB0aGVtZVRvZ2dsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aGVtZVRvZ2dsZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RoZW1lLXRvZ2dsZS1jb250YWluZXInKTtcblxuICBjb25zdCB0aGVtZVRvZ2dsZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGhlbWVUb2dnbGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgdGhlbWVUb2dnbGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RoZW1lLXRvZ2dsZS1jaGVja2JveCcpO1xuXG4gIGNvbnN0IHRoZW1lVG9nZ2xlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0aGVtZVRvZ2dsZUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAndGhlbWUtdG9nZ2xlLWxhYmVsJyk7XG4gIHRoZW1lVG9nZ2xlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGhlbWUtdG9nZ2xlLWNoZWNrYm94Jyk7XG5cbiAgY29uc3Qgc3VuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgc3VuSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1zdW4nKTtcbiAgc3VuSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1bicpO1xuXG4gIGNvbnN0IG1vb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBtb29uSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1tb29uJyk7XG4gIG1vb25JY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9vbicpO1xuXG4gIHRoZW1lVG9nZ2xlTGFiZWwuYXBwZW5kQ2hpbGQoc3VuSWNvbik7XG4gIHRoZW1lVG9nZ2xlTGFiZWwuYXBwZW5kQ2hpbGQobW9vbkljb24pO1xuXG4gIHRoZW1lVG9nZ2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoZW1lVG9nZ2xlQ2hlY2tib3gpO1xuICB0aGVtZVRvZ2dsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGVtZVRvZ2dsZUxhYmVsKTtcblxuICByZXR1cm4gdGhlbWVUb2dnbGVDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRoZW1lVG9nZ2xlQnV0dG9uIH07IiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3B1YnN1Yi5qcyc7XG5pbXBvcnQgeyBISURFX05BVl9FVkVOVCwgU0hPV19OQVZfRVZFTlQgfSBmcm9tICcuLi8uLi9qcy9ldmVudE5hbWVzLmpzJztcblxuLy8gISBsZXQgaXNBbmltYXRpbmcgPSBmYWxzZTtcbi8vICEgbGV0IHBlbmRpbmcgPSBudWxsO1xuXG5mdW5jdGlvbiBoaWRlTmF2KCkge1xuICBjb25zdCB6aWdaYWdOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuemlnLXphZy1uYXYnKTtcbiAgXG4gIHppZ1phZ05hdi5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoaWRlTmF2KTtcbiAgXG4gIHppZ1phZ05hdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gIHppZ1phZ05hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJpbGl0eScsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhdGVIaWRlTmF2KCkge1xuICBjb25zdCB6aWdaYWdOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuemlnLXphZy1uYXYnKTtcbiAgemlnWmFnTmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmlsaXR5JywgJ2Nsb3NpbmcnKTtcbiAgemlnWmFnTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhpZGVOYXYpO1xufVxuXG5mdW5jdGlvbiBzaG93TmF2KCkge1xuICBjb25zdCB6aWdaYWdOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuemlnLXphZy1uYXYnKTtcblxuICB6aWdaYWdOYXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGlkZU5hdik7XG4gIC8vICEgVGhpcyBpcyBhIGhhY2sgdG8gcHJldmVudCB0aGUgbmF2IGZyb20gaGlkaW5nIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBuYXYgdG9nZ2xlIGJ1dHRvbiB3aGlsZSB0aGUgbmF2IGlzIGFuaW1hdGluZyBjbG9zZWRcbiAgLy8gISB1c2UgaXNBbmltYXRpbmcgdG8gcHJldmVudCB0aGUgbmF2IGZyb20gaGlkaW5nIHdoaWxlIGl0IGlzIGFuaW1hdGluZyBjbG9zZWRcbiAgLy8gISB1c2UgcGVuZGluZyB0byBwcmV2ZW50IHRoZSBuYXYgZnJvbSBoaWRpbmcgd2hpbGUgaXQgaXMgYW5pbWF0aW5nIG9wZW5cbiAgLy8gISBpc0FuaW1hdGluZyBhbmQgcGVuZGluZyBhcmUgc2V0IHRvIHRydWUgd2hlbiB0aGUgbmF2IGlzIGFuaW1hdGluZyBhbmQgc2V0IHRvIGZhbHNlIHdoZW4gdGhlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZVxuICAvLyAhIGlzQW5pbWF0aW5nIGFuZCBwZW5kaW5nIGFyZSBzZXQgdG8gZmFsc2Ugd2hlbiB0aGUgbmF2IGlzIGhpZGRlblxuICAvLyAhIGlzQW5pbWF0aW5nIGFuZCBwZW5kaW5nIGFyZSBzZXQgdG8gZmFsc2Ugd2hlbiB0aGUgbmF2IGlzIHNob3duXG5cbiAgemlnWmFnTmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gIHppZ1phZ05hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJpbGl0eScsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUxpc3RlbmVycygpIHtcbiAgZXZlbnRzLm9uKFNIT1dfTkFWX0VWRU5ULCBzaG93TmF2KTtcbiAgZXZlbnRzLm9uKEhJREVfTkFWX0VWRU5ULCBpbml0aWF0ZUhpZGVOYXYpO1xufVxuXG5leHBvcnQgeyBhY3RpdmF0ZUxpc3RlbmVycyB9OyIsImltcG9ydCAnLi96aWctemFnLW5hdi5zY3NzJztcbmltcG9ydCB7IGFjdGl2YXRlTGlzdGVuZXJzIH0gZnJvbSAnLi96aWctemFnLW5hdi5qcyc7XG5cbi8vICogaW5pdGlhbFBhZ2UgaXMgYSBzdHJpbmcgdGhhdCB3aWxsIGJlIHVzZWQgdG8gc2V0IHRoZSBhcmlhLWN1cnJlbnQgYXR0cmlidXRlICh1c2UgdGhlIGluZGV4IG9mIHRoZSBwYWdlIG5hbWUpXG4vLyAqIGFuY2hvck9yQnV0dG9uIGlzIGEgc3RyaW5nIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgbmF2IGxpbmtzIGFyZSBidXR0b25zIG9yIGFuY2hvcnMgb3B0aW9ucyBhcmUgJ2J1dHRvbicgb3IgJ2EnXG4vLyAqIGlkIGlzIGEgc3RyaW5nIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHNldCB0aGUgaWQgYXR0cmlidXRlIG9mIHRoZSBuYXYncyBuZXN0ZWQgVUwgZWxlbWVudFxuXG5mdW5jdGlvbiBjcmVhdGVaaWdaYWdOYXYoXG4gIG9iamVjdE9mTGlzdHMsXG4gIGluaXRpYWxQYWdlLFxuICBhbmNob3JPckJ1dHRvbixcbiAgYXJpYUNvbnRyb2xzSUQsXG4gIHNwZWNpYWxOYXZMaXN0SXRlbUFycmF5XG4pIHtcbiAgY29uc3QgemlnWmFnTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIHppZ1phZ05hdi5jbGFzc0xpc3QuYWRkKCd6aWctemFnLW5hdicpO1xuICB6aWdaYWdOYXYuc2V0QXR0cmlidXRlKCdpZCcsIGFyaWFDb250cm9sc0lEKTtcbiAgemlnWmFnTmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdNYWluIE5hdmlnYXRpb24nKTtcbiAgemlnWmFnTmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgemlnWmFnTmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmlsaXR5JywgZmFsc2UpO1xuXG4gIGZvciAoY29uc3QgbGlzdCBpbiBvYmplY3RPZkxpc3RzKSB7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2LWxpc3QtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBsaXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsaXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ25hdi1saXN0LWhlYWRlcicpO1xuICAgIGxpc3RIZWFkZXIudGV4dENvbnRlbnQgPSBsaXN0O1xuICAgIHppZ1phZ05hdi5hcHBlbmRDaGlsZChsaXN0SGVhZGVyKTtcblxuICAgIGNvbnN0IGxpc3RVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGlzdFVMLmNsYXNzTGlzdC5hZGQoJ25hdi11bCcpO1xuXG4gICAgY29uc3QgZ3JvdXBlZExpc3RFbGVtZW50cyA9IG9iamVjdE9mTGlzdHNbbGlzdF0ubGlzdEVsZW1lbnRzO1xuXG4gICAgY29uc3QgbGlzdEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGdyb3VwZWRMaXN0RWxlbWVudHMuZm9yRWFjaCgocGFnZU5hbWVBbmRIcmVmLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcGFnZU5hbWUgPSBwYWdlTmFtZUFuZEhyZWZbMF07XG4gICAgICBjb25zdCBwYWdlSHJlZiA9IHBhZ2VOYW1lQW5kSHJlZlsxXTtcblxuICAgICAgY29uc3QgbmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIGFuY2hvck9yQnV0dG9uID09PSAnYnV0dG9uJ1xuICAgICAgICAgID8gJ2J1dHRvbidcbiAgICAgICAgICA6ICdhJ1xuICAgICAgICAgID8gJ2EnXG4gICAgICAgICAgOiBjb25zb2xlLmxvZygnemlnWmFnTmF2IG9ubHkgYWNjZXB0cyBcImJ1dHRvblwiIG9yIFwiYVwiIGFzIGFyZ3VtZW50cycpXG4gICAgICApO1xuICAgICAgbmF2TGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpO1xuICAgICAgaWYgKGFuY2hvck9yQnV0dG9uID09PSAnYScpIHtcbiAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBwYWdlSHJlZik7IC8vICEgVVBEQVRFIFRISVMgVE8gVVNFIFRIRSBQQUdFIE5BTUVcbiAgICAgIH1cbiAgICAgIGlmIChwYWdlTmFtZSA9PT0gaW5pdGlhbFBhZ2UpIHtcbiAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICdwYWdlJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5hdkxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIG5hdkxJLmNsYXNzTGlzdC5hZGQoJ25hdi1saScpO1xuICAgICAgc3BlY2lhbE5hdkxpc3RJdGVtQXJyYXkuZm9yRWFjaCgoc3BlY2lhbE5hdkxpbmspID0+IHtcbiAgICAgICAgaWYgKHBhZ2VOYW1lID09PSBzcGVjaWFsTmF2TGluaykge1xuICAgICAgICAgIG5hdkxJLmNsYXNzTGlzdC5hZGQoJ3NwZWNpYWwtbmF2LWxpJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBuYXZMaW5rLnRleHRDb250ZW50ID0gcGFnZU5hbWU7XG5cbiAgICAgIG5hdkxJLmFwcGVuZENoaWxkKG5hdkxpbmspO1xuICAgICAgbGlzdEZyYWdtZW50LmFwcGVuZENoaWxkKG5hdkxJKTtcbiAgICB9KTtcblxuICAgIGxpc3RVTC5hcHBlbmRDaGlsZChsaXN0RnJhZ21lbnQpO1xuICAgIFxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEhlYWRlcik7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0VUwpO1xuXG4gICAgemlnWmFnTmF2LmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICB9XG5cbiAgYWN0aXZhdGVMaXN0ZW5lcnMoKTtcblxuICByZXR1cm4gemlnWmFnTmF2O1xufVxuXG5leHBvcnQgeyBjcmVhdGVaaWdaYWdOYXYgfTsiLCJpbXBvcnQgeyBjcmVhdGVMaXN0SWNvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xpc3RJY29uL2xpc3RJY29uXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGlmaWVkTGlDb250ZW50KCkge1xuICBjb25zdCBwcm9qZWN0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdElucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1pbnB1dC1jb250YWluZXInKTtcblxuICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbmFtZS1pbnB1dCcpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBQcm9qZWN0IE5hbWUnKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heC1sZW5ndGgnLCAyNCk7XG5cbiAgY29uc3QgcHJvamVjdEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdEJ1dHRvbnNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWJ1dHRvbnMtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2plY3QtYnV0dG9uJyk7XG4gIGFkZFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBhZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdBZGQgUHJvamVjdCcpO1xuICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ2FkZCc7XG5cbiAgY29uc3QgY2FuY2VsQWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxBZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsLWFkZC1wcm9qZWN0LWJ1dHRvbicpO1xuICBjYW5jZWxBZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgY2FuY2VsQWRkUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnQ2FuY2VsIEFkZCBQcm9qZWN0Jyk7XG4gIGNhbmNlbEFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnY2FuY2VsJztcblxuICBwcm9qZWN0SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdEljb24oKSk7XG4gIHByb2plY3RJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0KTtcblxuICBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgcHJvamVjdEJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQWRkUHJvamVjdEJ1dHRvbik7XG5cbiAgY29uc29sZS5sb2cocHJvamVjdEJ1dHRvbnNDb250YWluZXIsIHByb2plY3RJbnB1dENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIFtwcm9qZWN0SW5wdXRDb250YWluZXIsIHByb2plY3RCdXR0b25zQ29udGFpbmVyXTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTW9kaWZpZWRMaUNvbnRlbnQgfTtcbiIsImV4cG9ydCBjb25zdCBTSE9XX05BVl9FVkVOVCA9ICdzaG93TmF2JztcblxuZXhwb3J0IGNvbnN0IEhJREVfTkFWX0VWRU5UID0gJ2hpZGVOYXYnOyIsImltcG9ydCBwcmlvcml0eUxvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcmlvcml0eS1sb2dvLndlYnAnO1xuXG5pbXBvcnQgeyBjcmVhdGVUaGVtZVRvZ2dsZUJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGhlbWUtdG9nZ2xlL3RoZW1lLXRvZ2dsZS5tYXJrdXAnO1xuaW1wb3J0IHsgY3JlYXRlTmF2VG9nZ2xlQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9uYXYtdG9nZ2xlL25hdi10b2dnbGUtbWFya3VwJztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBjb25zdCBoZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckxlZnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxlZnQnKTtcblxuICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ28nKTtcbiAgaGVhZGVyTG9nby5zZXRBdHRyaWJ1dGUoJ3NyYycsIHByaW9yaXR5TG9nbyk7XG4gIGhlYWRlckxvZ28uc2V0QXR0cmlidXRlKCdhbHQnLCAnUHJpb3JpdHkgTG9nbycpO1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRpdGxlJyk7XG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJzxwcntpb31yaXR5Pic7XG5cbiAgaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcbiAgaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyUmlnaHQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXJpZ2h0Jyk7XG5cbiAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlVGhlbWVUb2dnbGVCdXR0b24oKSk7XG4gIGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZU5hdlRvZ2dsZUJ1dHRvbignbmF2LXByaW1hcnktYXJpYScpKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTGVmdCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJSaWdodCk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhlYWRlciB9O1xuIiwiZnVuY3Rpb24gYWRkU2NyaXB0VG9IZWFkKHNyYywgYXR0cmlidXRlcyA9IHt9KSB7XG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcblxuICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICB9XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuXG5leHBvcnQgeyBhZGRTY3JpcHRUb0hlYWQgfTsiLCJmdW5jdGlvbiBtb2RpZnlMaXN0RWxlbWVudChsaXN0RWxlbWVudCwgbGlzdEl0ZW1JbmRleCwgbGlzdEVsZW1lbnRDb250ZW50QXJyYXksIGlkKSB7XG4gIGNvbnN0IG1vZGlmaWVkTGlzdEVsZW1lbnQgPSBsaXN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKGBsaTpudGgtY2hpbGQoJHtsaXN0SXRlbUluZGV4fSlgKTtcblxuICBtb2RpZmllZExpc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIG1vZGlmaWVkTGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7IC8vIGNsZWFyIHRoZSBsaVxuXG4gIGxpc3RFbGVtZW50Q29udGVudEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBtb2RpZmllZExpc3RFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcblxuICByZXR1cm4gbW9kaWZpZWRMaXN0RWxlbWVudDtcbn1cblxuZXhwb3J0IHsgbW9kaWZ5TGlzdEVsZW1lbnQgfTsiLCIvLyAqIGV2ZW50cyAocHVibGlzaCBzdWJzY3JpYmUgLyBtZWRpYXRvcikgcGF0dGVyblxubGV0IGV2ZW50cyA9IHtcbiAgZXZlbnRzOiB7fSxcbiAgb246IGZ1bmN0aW9uIChldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgfSxcbiAgb2ZmOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVtaXQ6IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICBmbihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn07XG5cbi8vICEgd2hlbiBhbiBldmVudCBpcyBjYWxsZWQgd2l0aCBvbjpcbiAgLy8gKiBldmVudCBuYW1lXG4vLyAqICAgZnVuY3Rpb24gdG8gcnVuXG4vLyAqICAgYWRkIGZ1bmN0aW9uIHRvIGV2ZW50cyBvYmplY3Rcbi8vICogICBldmVudHMgPSB7XG4vLyAqICAgICBldmVudHM6IHtcbi8vICogICAgICAgZXZlbnROYW1lOiBbZm5dLFxuLy8gKiAgICAgfSxcbi8vICogICB9XG4vLyAqXG4vLyAqIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIHdpdGggZW1pdDpcbi8vICogICBldmVudHMgPSB7XG4vLyAqICAgICBldmVudHM6IHtcbi8vICogICAgICAgZXZlbnROYW1lOiBbZm5dLFxuLy8gKiAgICAgfSxcbi8vICogICB9XG4vLyAqICAgZXZlbnRzLmV2ZW50cy5ldmVudE5hbWUuZm9yRWFjaChmbiA9PiBmbihkYXRhKSk7XG4vLyAqXG4vLyAqIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIHdpdGggb2ZmOlxuLy8gKiAgIGV2ZW50cyA9IHtcbi8vICogICAgIGV2ZW50czoge1xuLy8gKiAgICAgICBldmVudE5hbWU6IFtmbl0sXG4vLyAqICAgICB9LFxuLy8gKiAgIH1cbi8vICogICBldmVudHMuZXZlbnRzLmV2ZW50TmFtZS5mb3JFYWNoKGZuID0+IHtcbi8vICogICAgIGlmIChmbiA9PT0gZm4pIHtcbi8vICogICAgICAgZXZlbnRzLmV2ZW50cy5ldmVudE5hbWUuc3BsaWNlKGksIDEpO1xuLy8gKiAgICAgfVxuLy8gKiAgIH0pO1xuLy8gKlxuLy8gKiAgIGZ1bmN0aW9uIHRvIHJlbW92ZVxuLy8gKiAgIHJlbW92ZSBmdW5jdGlvbiBmcm9tIGV2ZW50cyBvYmplY3Rcbi8vICogICBldmVudHMgPSB7XG4vLyAqICAgICBldmVudHM6IHtcbi8vICogICAgICAgZXZlbnROYW1lOiBbXSxcbi8vICogICAgIH0sXG4vLyAqICAgfVxuLy8gKlxuXG5leHBvcnQgeyBldmVudHMgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmxpc3QtaWNvbi1jb250YWluZXIge1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMC43NXJlbTtcbn1cbi5saXN0LWljb24tY29udGFpbmVyIC5saXN0LWljb24tYmFycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5saXN0LWljb24tY29udGFpbmVyOjpiZWZvcmUsIC5saXN0LWljb24tY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5saXN0LWljb24tY29udGFpbmVyOjpiZWZvcmUge1xuICB0b3A6IDA7XG59XG4ubGlzdC1pY29uLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBib3R0b206IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9saXN0SWNvbi9saXN0SWNvbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBTEs7QUFJUDtBQUdFO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBREo7QUFJRTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1FO0VBQ0UsTUFBQTtBQUpKO0FBT0U7RUFDRSxTQUFBO0FBTEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHNpemU6IDAuNzVyZW07XFxuXFxuLmxpc3QtaWNvbi1jb250YWluZXIge1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAkc2l6ZTtcXG5cXG4gIC5saXN0LWljb24tYmFycyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIH1cXG5cXG4gICY6OmJlZm9yZSxcXG4gICY6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIH1cXG5cXG4gICY6OmJlZm9yZSB7XFxuICAgIHRvcDogMDtcXG4gIH1cXG5cXG4gICY6OmFmdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgfVxcblxcblxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5uYXYtdG9nZ2xlLWJ1dHRvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIwcHg7XG59XG4ubmF2LXRvZ2dsZS1idXR0b24gLm5hdi10b2dnbGUtYmFycywgLm5hdi10b2dnbGUtYnV0dG9uIC5uYXYtdG9nZ2xlLWJhcnM6OmJlZm9yZSwgLm5hdi10b2dnbGUtYnV0dG9uIC5uYXYtdG9nZ2xlLWJhcnM6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xufVxuLm5hdi10b2dnbGUtYnV0dG9uLmFjdGl2ZSAubmF2LXRvZ2dsZS1iYXJzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubmF2LXRvZ2dsZS1idXR0b24uYWN0aXZlIC5uYXYtdG9nZ2xlLWJhcnM6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5uYXYtdG9nZ2xlLWJ1dHRvbi5hY3RpdmUgLm5hdi10b2dnbGUtYmFyczo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDQ1ZGVnKTtcbn1cbi5uYXYtdG9nZ2xlLWJ1dHRvbiAubmF2LXRvZ2dsZS1iYXJzIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xuICBoZWlnaHQ6IDEuNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdi10b2dnbGUtYnV0dG9uIC5uYXYtdG9nZ2xlLWJhcnM6OmJlZm9yZSwgLm5hdi10b2dnbGUtYnV0dG9uIC5uYXYtdG9nZ2xlLWJhcnM6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBoZWlnaHQ6IDEuNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXYtdG9nZ2xlLWJ1dHRvbiAubmF2LXRvZ2dsZS1iYXJzOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcuNzVweCk7XG59XG4ubmF2LXRvZ2dsZS1idXR0b24gLm5hdi10b2dnbGUtYmFyczo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy43NXB4KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL25hdi10b2dnbGUvbmF2LXRvZ2dsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBUUUsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBVmdCO0VBV2hCLHVCQUFBO0VBQ0EsV0FYZTtBQUtqQjtBQVFFO0VBQ0UsaUNBQUE7QUFOSjtBQVVJO0VBQ0UsdUJBQUE7QUFSTjtBQVVNO0VBQ0UsdUNBQUE7QUFSUjtBQVVNO0VBQ0Usc0NBQUE7QUFSUjtBQWFFO0VBQ0UsaUJBNUJpQjtFQTZCakIsb0JBOUJ5QjtFQStCekIsYUFoQ2dCO0VBaUNoQixrQkFBQTtFQUNBLFdBQUE7QUFYSjtBQWFJO0VBQ0UsdUJBbkNlO0VBb0NmLG9CQXJDdUI7RUFzQ3ZCLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQTFDYztFQTJDZCxXQUFBO0FBWE47QUFjSTtFQUNFLDhCQUFBO0FBWk47QUFlSTtFQUNFLDZCQUFBO0FBYk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdi10b2dnbGUtYnV0dG9uIHtcXG4gICRidXR0b24taGVpZ2h0OiAyMHB4O1xcbiAgJGJ1dHRvbi13aWR0aDogMjBweDtcXG4gICRidXR0b24tYmFyLXNpemU6IDEuNXB4O1xcbiAgJGJ1dHRvbi1iYXItYm9yZGVyLXJhZGl1czogMTAwdnc7XFxuICAkYnV0dG9uLWJhci1jb2xvcjogd2hpdGU7XFxuICAkYnV0dG9uLXRyYW5zaXRpb24tdGltZTogMTUwbXM7IFxcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6ICRidXR0b24taGVpZ2h0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogJGJ1dHRvbi13aWR0aDtcXG5cXG4gIC5uYXYtdG9nZ2xlLWJhcnMsIC5uYXYtdG9nZ2xlLWJhcnM6OmJlZm9yZSwgLm5hdi10b2dnbGUtYmFyczo6YWZ0ZXIge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgJGJ1dHRvbi10cmFuc2l0aW9uLXRpbWUgZWFzZS1pbi1vdXQ7XFxuICB9XFxuICBcXG4gICYuYWN0aXZlIHtcXG4gICAgLm5hdi10b2dnbGUtYmFycyB7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgXFxuICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICB9XFxuICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAubmF2LXRvZ2dsZS1iYXJzIHtcXG4gICAgYmFja2dyb3VuZDogJGJ1dHRvbi1iYXItY29sb3I7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRidXR0b24tYmFyLWJvcmRlci1yYWRpdXM7XFxuICAgIGhlaWdodDogJGJ1dHRvbi1iYXItc2l6ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgJjo6YmVmb3JlLCAmOjphZnRlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1iYXItY29sb3I7XFxuICAgICAgYm9yZGVyLXJhZGl1czogJGJ1dHRvbi1iYXItYm9yZGVyLXJhZGl1cztcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaW5zZXQ6IDA7XFxuICAgICAgaGVpZ2h0OiAkYnV0dG9uLWJhci1zaXplO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoKCRidXR0b24taGVpZ2h0IC0gJGJ1dHRvbi1iYXItc2l6ZSAqIDMpIC8gLTIgKSk7XFxuICAgIH1cXG5cXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKCgkYnV0dG9uLWhlaWdodCAtICRidXR0b24tYmFyLXNpemUgKiAzKSAvIDIgKSk7XFxuICAgIH1cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjdGhlbWUtdG9nZ2xlLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDM4MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4jdGhlbWUtdG9nZ2xlLWNoZWNrYm94IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RoZW1lLXRvZ2dsZS1sYWJlbCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTJweCBzaWx2ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwcmVtO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBtaW4taGVpZ2h0OiAyNXB4O1xuICBtaW4td2lkdGg6IDI1cHg7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRTEwKy9FZGdlICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgKi9cbn1cblxuI3N1bixcbiNtb29uIHtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDAuNjc1cmVtO1xuICBwYWRkaW5nOiAzLjVweDtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbiNzdW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTk5QTQzO1xuICBib3gtc2hhZG93OiBpbnNldCAzcHggLTNweCA4cHggYmxhY2s7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMjBweCArIDByZW0pKSByb3RhdGUoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDIwcHggKyAwcmVtKSkgcm90YXRlKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuXG4jbW9vbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkYxRDU7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0zcHggLTNweCA4cHggYmxhY2s7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgcm90YXRlKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGUoMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbiN0aGVtZS10b2dnbGUtY2hlY2tib3g6Y2hlY2tlZCB+ICN0aGVtZS10b2dnbGUtbGFiZWwgPiAjc3VuIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGUoMzYwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgcm90YXRlKDM2MGRlZyk7XG59XG5cbiN0aGVtZS10b2dnbGUtY2hlY2tib3g6Y2hlY2tlZCB+ICN0aGVtZS10b2dnbGUtbGFiZWwgPiAjbW9vbiB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoKDIwcHggKyAwcmVtKSAqIC0xKSkgcm90YXRlKDM2MGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKCgyMHB4ICsgMHJlbSkgKiAtMSkpIHJvdGF0ZSgzNjBkZWcpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdGhlbWUtdG9nZ2xlL3RoZW1lLXRvZ2dsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQXpCaUI7RUEwQmpCLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUEsRUFBQSxZQUFBO0VBQ0EscUJBQUEsRUFBQSxlQUFBO0VBQ0EseUJBQUEsRUFBQSxXQUFBO0VBQ0EsaUJBQUEsRUFBQSxhQUFBO0FBTEY7O0FBUUE7O0VBRUUsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBeEMwQjtFQXlDMUIsV0ExQ3dCO0FBcUMxQjs7QUFRQTtFQUNFLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7RUFDQSxrREFBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0VBQ0EscUNBQUE7RUFDQSxVQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7QUFMRjs7QUFRQTtFQUNFLFVBQUE7RUFDQSxpREFBQTtFQUNBLHlDQUFBO0FBTEY7O0FBUUE7RUFDRSxVQUFBO0VBQ0Esc0VBQUE7RUFDQSw4REFBQTtBQUxGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiR0aGVtZS10b2dnbGUtZ2FwOiAwcmVtO1xcbiR0aGVtZS10b2dnbGUtaWNvbi13aWR0aDogMTBweDtcXG4kdGhlbWUtdG9nZ2xlLWljb24tcGFkZGluZzogMy41cHg7XFxuJHRoZW1lLWljb24tc3BhY2UtYmV0d2VlbjogY2FsYygkdGhlbWUtdG9nZ2xlLWljb24td2lkdGggKiAyICsgJHRoZW1lLXRvZ2dsZS1nYXApO1xcblxcbiN0aGVtZS10b2dnbGUtY29udGFpbmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzgwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiN0aGVtZS10b2dnbGUtY2hlY2tib3gge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3RoZW1lLXRvZ2dsZS1sYWJlbCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEycHggc2lsdmVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDsgXFxuICBnYXA6ICR0aGVtZS10b2dnbGUtZ2FwO1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG5cXG4gIG1pbi1oZWlnaHQ6IDI1cHg7XFxuICBtaW4td2lkdGg6IDI1cHg7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkICovXFxufVxcblxcbiNzdW4sXFxuI21vb24ge1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDAuNjc1cmVtO1xcbiAgcGFkZGluZzogJHRoZW1lLXRvZ2dsZS1pY29uLXBhZGRpbmc7XFxuICB3aWR0aDogJHRoZW1lLXRvZ2dsZS1pY29uLXdpZHRoO1xcbn1cXG5cXG4jc3VuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOTlBNDM7XFxuICBib3gtc2hhZG93OiBpbnNldCAzcHggLTNweCA4cHggYmxhY2s7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHRoZW1lLWljb24tc3BhY2UtYmV0d2Vlbikgcm90YXRlKDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR0aGVtZS1pY29uLXNwYWNlLWJldHdlZW4pIHJvdGF0ZSgwKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jbW9vbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGMUQ1O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTNweCAtM3B4IDhweCBibGFjaztcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZSgwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZSgwKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jdGhlbWUtdG9nZ2xlLWNoZWNrYm94OmNoZWNrZWQgfiAjdGhlbWUtdG9nZ2xlLWxhYmVsID4gI3N1biB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG5cXG4jdGhlbWUtdG9nZ2xlLWNoZWNrYm94OmNoZWNrZWQgfiAjdGhlbWUtdG9nZ2xlLWxhYmVsID4gI21vb24ge1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoJHRoZW1lLWljb24tc3BhY2UtYmV0d2VlbiAqIC0xKSkgcm90YXRlKDM2MGRlZyk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygkdGhlbWUtaWNvbi1zcGFjZS1iZXR3ZWVuICogLTEpKSByb3RhdGUoMzYwZGVnKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxufVxuLnppZy16YWctbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cmVtO1xufVxuLnppZy16YWctbmF2W2RhdGEtdmlzaWJpbGl0eT1mYWxzZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnppZy16YWctbmF2W2RhdGEtdmlzaWJpbGl0eT1jbG9zaW5nXSB7XG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMzgwbXMgZWFzZS1pbi1vdXQ7XG59XG4uemlnLXphZy1uYXZbZGF0YS12aXNpYmlsaXR5PXRydWVdIHtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDM4MG1zIGVhc2UtaW4tb3V0O1xufVxuLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xufVxuLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi1saXN0LWhlYWRlciB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAubmF2LWxpOm50aC1vZi10eXBlKG9kZCkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cbi56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saTpudGgtb2YtdHlwZShldmVuKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAubmF2LWxpOjpiZWZvcmUsIC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saTo6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgY29udGVudDogXCJcIjtcbiAgaW5zZXQ6IC01cHggLTE1cHg7XG4gIG9wYWNpdHk6IDAuMTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgei1pbmRleDogMDtcbn1cbi56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saTpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAubmF2LWxpIC5uYXYtbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogdW5zZXQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbn1cbi56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saSAubmF2LWxpbmsgLm5hdi1udW1iZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4taW5saW5lLWVuZDogMC4zMTNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saSAubmF2LWxpbms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgd2hpdGU7XG4gIGluc2V0OiA1cHggMCAwIDA7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAzODBtcyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG59XG4uemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsIC5uYXYtbGkgLm5hdi1saW5rW2FyaWEtY3VycmVudF06OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzVlbSkge1xuICBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBmYWRlLW91dCB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgfVxuICAuemlnLXphZy1uYXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGluc2V0OiAwIDAgMCAzMCU7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ppZy16YWctbmF2L3ppZy16YWctbmF2LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFDRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFDRjtBQUNGO0FBRUE7RUFLRSxhQUFBO0VBQ0EsU0FBQTtBQUpGO0FBTUU7RUFDRSxhQUFBO0FBSko7QUFPRTtFQUNFLHFDQUFBO0FBTEo7QUFTRTtFQUNFLG9DQUFBO0FBUEo7QUFVRTtFQUNFLFlBckJXO0VBc0JYLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFSSjtBQVVJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFSTjtBQVdJO0VBQ0UsZ0JBQUE7QUFUTjtBQVdNO0VBQ0Usa0JBQUE7RUFDQSx1Q0FBQTtBQVRSO0FBV1E7RUFDRSx1QkFBQTtBQVRWO0FBWVE7RUFDRSx1QkFBQTtBQVZWO0FBYVE7RUFFRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUFaVjtBQWVRO0VBQ0Usb0JBQUE7QUFiVjtBQWdCUTtFQUNFLFlBakVLO0VBa0VMLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFyRU07RUFzRU4seUJBQUE7RUFDQSxpQ0FBQTtBQWRWO0FBZ0JVO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFkWjtBQWlCVTtFQUNFLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtFQUFBO0VBQ0Esb0JBQUE7QUFmWjtBQWtCVTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQWhCWjs7QUF3QkE7RUFDRTtJQUNFO01BQ0UsVUFBQTtNQUNBLDJCQUFBO0lBckJGO0lBdUJBO01BQ0UsVUFBQTtNQUNBLHdCQUFBO0lBckJGO0VBQ0Y7RUF1QkE7SUFDRTtNQUNFLFVBQUE7TUFDQSx3QkFBQTtJQXJCRjtJQXVCQTtNQUNFLFVBQUE7TUFDQSwyQkFBQTtJQXJCRjtFQUNGO0VBd0JBO0lBQ0Usc0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUF0QkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAa2V5ZnJhbWVzIGZhZGUtaW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgfVxcbn1cXG5cXG4uemlnLXphZy1uYXYge1xcbiAgJHRleHQtY29sb3I6IHdoaXRlO1xcbiAgJGxpbmstc2hhZG93OiB1bnNldDtcXG4gICRsaW5rLXJvdGF0aW9uOiAwZGVnO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXJlbTtcXG5cXG4gICZbZGF0YS12aXNpYmlsaXR5PWZhbHNlXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAmW2RhdGEtdmlzaWJpbGl0eT1jbG9zaW5nXSB7XFxuICAgIGFuaW1hdGlvbjogZmFkZS1vdXQgMzgwbXMgZWFzZS1pbi1vdXQ7XFxuICB9XFxuICBcXG5cXG4gICZbZGF0YS12aXNpYmlsaXR5PXRydWVdIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDM4MG1zIGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgLm5hdi1saXN0LWNvbnRhaW5lciB7XFxuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxLjVyZW07XFxuXFxuICAgIC5uYXYtbGlzdC1oZWFkZXIge1xcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtdWwge1xcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAgICAgLm5hdi1saSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgICAgICAmOm50aC1vZi10eXBlKG9kZCkge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZShjYWxjKCRsaW5rLXJvdGF0aW9uICogLTEpKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6bnRoLW9mLXR5cGUoZXZlbikge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkbGluay1yb3RhdGlvbik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOjpiZWZvcmUsXFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgaW5zZXQ6IC01cHggLTE1cHg7XFxuICAgICAgICAgIG9wYWNpdHk6IDAuMTtcXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5uYXYtbGluayB7XFxuICAgICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogJGxpbmstc2hhZG93O1xcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgICAgICAgIC5uYXYtbnVtYmVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDAuMzEzcmVtO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgd2hpdGU7XFxuICAgICAgICAgICAgaW5zZXQ6IDVweCAwIDAgMDtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDM4MG1zIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgICZbYXJpYS1jdXJyZW50XTo6YmVmb3JlIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufSBcXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzVlbSkge1xcbiAgQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB9XFxuICB9XFxuICBAa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gICAgZnJvbSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICB9XFxuICB9XFxuXFxuICAuemlnLXphZy1uYXYge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGluc2V0OiAgMCAwIDAgMzAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvc3BhY2UtYmFja2dyb3VuZC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbn1cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hYmJyLFxuYWRkcmVzcyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxuc2FtcCxcbnNtYWxsLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudmFyLFxuYixcbmksXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oMyxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5pbWcsXG5waWN0dXJlLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW1nIHtcbiAgaW1hZ2UtcmVuZGVyaW5nOiBjcmlzcC1lZGdlcztcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnBpY3R1cmUgaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLyogY2hhbmdlIGNvbG91cnMgdG8gc3VpdCB5b3VyIG5lZWRzICovXG5pbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5O1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBjaGFuZ2UgY29sb3VycyB0byBzdWl0IHlvdXIgbmVlZHMgKi9cbm1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGVsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbmRmbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbmFiYnJbdGl0bGVdLFxuZGZuW3RpdGxlXSB7XG4gIGN1cnNvcjogaGVscDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogY2hhbmdlIGJvcmRlciBjb2xvdXIgdG8gc3VpdCB5b3VyIG5lZWRzICovXG5ociB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcbiAgbWFyZ2luOiAxZW0gMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW5wdXQsXG5zZWxlY3Qge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5lbSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmFjY2Vzc2liaWxpdHkge1xuICBoZWlnaHQ6IDFweDtcbiAgbGVmdDogLTk5OTlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGF1dG87XG4gIHdpZHRoOiAxcHg7XG59XG5cbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcbn1cblxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcbiAgfVxuICAqLFxuICAqOjpiZWZvcmUsXG4gICo6OmFmdGVyIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgfVxufVxuLyogKiBVVElMSVRJRVMgKi9cbi5uby1zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgRWRnZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICBmb250LXNpemU6IGNsYW1wKDAuNzVyZW0sIDV2dywgMC44MzEzcmVtKTtcbn1cbmJvZHkgI2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogXCJTcGFjZSBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuYm9keSAjY29udGVudCBoZWFkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHotaW5kZXg6IDE7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciAuaGVhZGVyLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIC5oZWFkZXItbGVmdCAuaGVhZGVyLWxvZ28ge1xuICBhbmltYXRpb246IHNwaW4gMzNzIGxpbmVhciBpbmZpbml0ZTtcbiAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA4dncsIDU1cHgpO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM4bXMgZWFzZS1pbi1vdXQ7XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuYm9keSAjY29udGVudCBoZWFkZXIgLmhlYWRlci1sZWZ0IC5oZWFkZXItbG9nbzpob3ZlciB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gIG9wYWNpdHk6IDE7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciAuaGVhZGVyLWxlZnQgLmhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciAuaGVhZGVyLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjM3NXJlbTtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFyZW0pO1xuICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjEpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIHBhZGRpbmctaW5saW5lOiAycmVtO1xuICBwYWRkaW5nLXRvcDogY2FsYyhjbGFtcCg1MHB4LCA4dncsIDU1cHgpICsgMXJlbSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXI6aGFzKC5uYXYtbGluazpob3ZlcikgLm5hdi1saXN0LWhlYWRlcjo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMDtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi1saXN0LWhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LWxpc3QtaGVhZGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIj5cIjtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDAuNXJlbTtcbiAgbGVmdDogLTFyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDc2MG1zIGVhc2UtaW4tb3V0O1xufVxuYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsICNhZGQtcHJvamVjdC1saSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS4yNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgI2FkZC1wcm9qZWN0LWxpICNwcm9qZWN0LWlucHV0LWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS4yNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAjYWRkLXByb2plY3QtbGkgI3Byb2plY3QtaW5wdXQtY29udGFpbmVyICNwcm9qZWN0LW5hbWUtaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsICNhZGQtcHJvamVjdC1saSAjcHJvamVjdC1idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS4yNXJlbTtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgI2FkZC1wcm9qZWN0LWxpICNwcm9qZWN0LWJ1dHRvbnMtY29udGFpbmVyICNhZGQtcHJvamVjdC1idXR0b24sXG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgI2FkZC1wcm9qZWN0LWxpICNwcm9qZWN0LWJ1dHRvbnMtY29udGFpbmVyICNjYW5jZWwtYWRkLXByb2plY3QtYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgaHNsYSgwLCAwJSwgMTAwJSwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsICNhZGQtcHJvamVjdC1saSAjcHJvamVjdC1idXR0b25zLWNvbnRhaW5lciAjYWRkLXByb2plY3QtYnV0dG9uOjpiZWZvcmUsXG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgI2FkZC1wcm9qZWN0LWxpICNwcm9qZWN0LWJ1dHRvbnMtY29udGFpbmVyICNjYW5jZWwtYWRkLXByb2plY3QtYnV0dG9uOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBzaWx2ZXIsIHNpbHZlciwgdHJhbnNwYXJlbnQpO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgaW5zZXQ6IDA7XG4gIG9wYWNpdHk6IDAuMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAjYWRkLXByb2plY3QtbGkgI3Byb2plY3QtYnV0dG9ucy1jb250YWluZXIgI2FkZC1wcm9qZWN0LWJ1dHRvbjpob3Zlcjo6YmVmb3JlLFxuYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsICNhZGQtcHJvamVjdC1saSAjcHJvamVjdC1idXR0b25zLWNvbnRhaW5lciAjY2FuY2VsLWFkZC1wcm9qZWN0LWJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAuc3BlY2lhbC1uYXYtbGk6Zmlyc3Qtb2YtdHlwZSAubmF2LWxpbmsge1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzgwbXMgZWFzZS1pbi1vdXQ7XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLnNwZWNpYWwtbmF2LWxpOmZpcnN0LW9mLXR5cGUgLm5hdi1saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMjVyZW0pIHNjYWxlKDEpIHJvdGF0ZSgwKTtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAuc3BlY2lhbC1uYXYtbGk6Zmlyc3Qtb2YtdHlwZSAubmF2LWxpbms6OmFmdGVyIHtcbiAgY29udGVudDogXCIrXCI7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDM4MG1zIGVhc2UtaW4tb3V0O1xufVxuYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lciAubmF2LXVsIC5zcGVjaWFsLW5hdi1saTpmaXJzdC1vZi10eXBlIC5uYXYtbGluazpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMC4yNXJlbSkgc2NhbGUoMikgcm90YXRlKDM2MGRlZyk7XG59XG5ib2R5ICNjb250ZW50IC56aWctemFnLW5hdiAubmF2LWxpc3QtY29udGFpbmVyIC5uYXYtdWwgLm5hdi1saW5rIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAubmF2LWxpbms6OmFmdGVyIHtcbiAgY29udGVudDogXCI+XCI7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMC43NXJlbTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzODBtcyBlYXNlLWluLW91dDtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXIgLm5hdi11bCAubmF2LWxpbms6aG92ZXI6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbmJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lcjpudGgtY2hpbGQoMikgLm5hdi11bCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGhzbGEoMCwgMCUsIDEwMCUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwYWRkaW5nOiAycmVtO1xufVxuYm9keSAjY29udGVudCBtYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xufVxuYm9keSAjY29udGVudCBtYWluIC5tYWluLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDg4dnc7XG59XG5ib2R5ICNjb250ZW50IGZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBncmlkLWFyZWE6IGZvb3Rlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM1ZW0pIHtcbiAgYm9keSAjY29udGVudCAuemlnLXphZy1uYXYge1xuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogbWluKDMwdmgsIDEwcmVtKSAycmVtO1xuICAgIGluc2V0OiAwIDAgMCAzMCU7XG4gIH1cbiAgYm9keSAjY29udGVudCAuemlnLXphZy1uYXYgLm5hdi1saXN0LWNvbnRhaW5lcjpudGgtY2hpbGQoMikgLm5hdi11bCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEuMTI1cmVtO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIGJvZHkgI2NvbnRlbnQgLnppZy16YWctbmF2IC5uYXYtbGlzdC1jb250YWluZXI6bnRoLWNoaWxkKDIpIC5uYXYtdWwgI2FkZC1wcm9qZWN0LWxpIC5saXN0LWljb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlcy5jc3MubWFwICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2N5Y2xvbmUtcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFFRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTs7Ozs7Ozs7Ozs7RUFXRSxjQUFBO0FDQ0Y7O0FERUE7Ozs7OztFQU1FLG1CQUFBO0FDQ0Y7O0FERUE7OztFQUdFLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtB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O0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUQ0TmxCO0FDek5nQjs7RUFDRSxtQkFBQTtBRDRObEI7QUNyTlk7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFFQSx1Q0FBQTtBRHNOZDtBQ3JOYztFQUNFLGlEQUFBO0FEdU5oQjtBQ3BOYztFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBRHNOaEI7QUNuTmM7RUFDRSxzREFBQTtBRHFOaEI7QUNoTlU7RUFDRSxtQkFBQTtBRGtOWjtBQ2hOWTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0FEa05kO0FDL01ZO0VBQ0UsVUFBQTtBRGlOZDtBQzNNTTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBRDZNUjtBQzNNUTtFQUNFLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBRDZNVjtBQ3hNSTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUR5TU47QUN2TU07RUFFRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEd01SO0FDcE1JO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtBRHNNTjs7QUNqTUE7RUFJTTtJQUNFLG9CQUFBO0lBQ0Esc0JBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0VEaU1OO0VDOUxRO0lBQ0UsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RURnTVY7RUM3TFk7SUFDRSxhQUFBO0VEK0xkO0FBQ0Y7O0FBRUEscUNBQXFDXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpc3RJY29uLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saXN0SWNvbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYtdG9nZ2xlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYtdG9nZ2xlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RoZW1lLXRvZ2dsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGhlbWUtdG9nZ2xlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ppZy16YWctbmF2LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi96aWctemFnLW5hdi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vY3NzL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3ppZy16YWctbmF2L3ppZy16YWctbmF2LnNjc3MnO1xuXG5pbXBvcnQgeyBjcmVhdGVaaWdaYWdOYXYgfSBmcm9tICcuLi9jb21wb25lbnRzL3ppZy16YWctbmF2L3ppcC16YWctbmF2LW1hcmt1cCc7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2hlYWRlci1tYXJrdXAnO1xuaW1wb3J0IHsgbW9kaWZ5TGlzdEVsZW1lbnQgfSBmcm9tICcuLi91dGlsaXRpZXMvbW9kaWZ5LWxpLmpzJztcbmltcG9ydCB7IGNyZWF0ZU1vZGlmaWVkTGlDb250ZW50IH0gZnJvbSAnLi9jcmVhdGVNb2RpZmllZExpLmpzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbi8vICEgQ1JFQVRFIGhlYWRlclxuY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7ICBcblxuLy8gISBDUkVBVEUgbmF2XG4vKiBcbiAg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4gIOKUgiAvLyBQQVJBTTogY3JlYXRlWmlnWmFnTmF2ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIJcbiAg4pSCIC8vID8gMS4gb2JqZWN0T2ZMaXN0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUglxuICDilIIgLy8gPyAyLiBpbml0aWFsUGFnZSAodXNlZCB0byBzZXQgdGhlIGFyaWEgLSBjdXJyZW50IGF0dHJpYnV0ZSkgICAgICAgICAg4pSCXG4gIOKUgiAvLyA/IDMuIG5hdlR5cGUgKGFuY2hvciBmb3IgJ2EnIHRhZ3MgLyBidXR0b24gZm9yICdidXR0b24gdGFncykgICAgICAgICDilIJcbiAg4pSCIC8vID8gNC4gaWQgKHNldHMgbmF2aWdhdGlvbnMgaWQgZm9yIGFyaWEgaW4gY29uanVuY3Rpb24gd2l0aCBhIG5hdiAgICAgIOKUglxuICDilIIgICAvLyA/IHRvZ2dsZSBidXR0b24pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCXG4gIOKUgiAvLyA/IDUuIHNwZWNpYWxOYXZMaW5rQXJyIGlzIGFuIGFycmF5IG9mIHBhZ2UgbmFtZXMgd2l0aCB0aGF0IHdpbGwgICAgICDilIJcbiAg4pSCICAgLy8gPyBiZSB1c2VkIHRvIGNyZWF0ZSBhIHNwZWNpYWwgbmF2IGxpbmtzIHZpYSBhIHVuaXF1ZSBjc3MgY2xhc3MgICAgIOKUglxuICDilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJhcbiAqL1xuY29uc3QgbGlzdE9iamVjdHMgPSB7XG4gIEhvbWU6IHtcbiAgICBsaXN0RWxlbWVudHM6IFtcbiAgICAgIFsnQWxsIFRhc2tzJywgJyMnXSxcbiAgICAgIFsnVG9kYXknLCAnIyddLFxuICAgICAgWydOZXh0IDcgRGF5cycsICcjJ10sXG4gICAgICBbJ0ltcG9ydGFudCcsICcjJ10sXG4gICAgXSxcbiAgfSxcbiAgUHJvamVjdHM6IHtcbiAgICBsaXN0RWxlbWVudHM6IFtcbiAgICAgIFsnQWRkIFByb2plY3QnLCAnIyddLFxuICAgICAgWydBRERfUFJPSkVDVF9GT1JNJywgJyMnXSxcbiAgICBdLFxuICB9LFxufTtcbmNvbnN0IGluaXRpYWxQYWdlID0gbGlzdE9iamVjdHMuSG9tZS5saXN0RWxlbWVudHNbMF1bMF07XG5jb25zdCBzcGVjaWFsTmF2TGlzdEl0ZW1BcnJheSA9IFsnQWRkIFByb2plY3QnLCAnQUREX1BST0pFQ1RfRk9STSddO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKFxuICBjcmVhdGVaaWdaYWdOYXYobGlzdE9iamVjdHMsIGluaXRpYWxQYWdlLCAnYnV0dG9uJywgJ25hdi1wcmltYXJ5LWFyaWEnLCBzcGVjaWFsTmF2TGlzdEl0ZW1BcnJheSlcbik7XG5cbi8vICEgTU9ESUZZIHppZ1phZ05hdiBMaXN0IEVsZW1lbnQgdG8gY3JlYXRlIEFkZCBQcm9qZWN0IEJ1dHRvblxuLyogXG7ilIzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJBcbuKUgiAvLyBQQVJBTTogbW9kaWZ5TGlzdEVsZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIJcbuKUgiAvLyA/IDEubGlzdEVsZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIJcbuKUgiAvLyA/IDIubGlzdEl0ZW1JbmRleCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIJcbuKUgiAvLyA/IDMubGlzdEVsZW1lbnRDb250ZW50QXJyYXk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIJcbuKUgiAvLyA/IDQuaWQgZm9yIG1vZGlmaWVkIGVsZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCXG7ilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJhcbiovXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbGlzdC1jb250YWluZXI6bnRoLWNoaWxkKDIpID4gdWwnKTtcbm1vZGlmeUxpc3RFbGVtZW50KHByb2plY3RMaXN0LCAyLCBjcmVhdGVNb2RpZmllZExpQ29udGVudCgpLCAnYWRkLXByb2plY3QtbGknKTtcblxuXG4vLyAhXG4vLyAhXG4vLyAhXG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XG5cbm1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5jb250ZW50LmFwcGVuZENoaWxkKG1haW4pOyJdLCJuYW1lcyI6WyJjcmVhdGVMaXN0SWNvbiIsImxpc3RJY29uQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwibGlzdEljb25CYXJzIiwiYXBwZW5kQ2hpbGQiLCJ0b2dnbGVOYXZCdXR0b24iLCJjcmVhdGVOYXZUb2dnbGVCdXR0b24iLCJhcmlhQ29udHJvbHNJRCIsIm5hdlRvZ2dsZUJ1dHRvbiIsIm5hdlRvZ2dsZUJhcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRzIiwiSElERV9OQVZfRVZFTlQiLCJTSE9XX05BVl9FVkVOVCIsInRvZ2dsZUJ1dHRvbkFjdGl2YXRlZCIsImNvbnRhaW5zIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJyZW1vdmUiLCJhZGRTY3JpcHRUb0hlYWQiLCJpY29uU2NyaXB0U291cmNlIiwiYXR0cmlidXRlcyIsImNyb3Nzb3JpZ2luIiwiY3JlYXRlVGhlbWVUb2dnbGVCdXR0b24iLCJ0aGVtZVRvZ2dsZUNvbnRhaW5lciIsInRoZW1lVG9nZ2xlQ2hlY2tib3giLCJ0aGVtZVRvZ2dsZUxhYmVsIiwic3VuSWNvbiIsIm1vb25JY29uIiwiaGlkZU5hdiIsInppZ1phZ05hdiIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5pdGlhdGVIaWRlTmF2Iiwic2hvd05hdiIsImFjdGl2YXRlTGlzdGVuZXJzIiwib24iLCJjcmVhdGVaaWdaYWdOYXYiLCJvYmplY3RPZkxpc3RzIiwiaW5pdGlhbFBhZ2UiLCJhbmNob3JPckJ1dHRvbiIsInNwZWNpYWxOYXZMaXN0SXRlbUFycmF5IiwiX2xvb3AiLCJsaXN0Q29udGFpbmVyIiwibGlzdEhlYWRlciIsInRleHRDb250ZW50IiwibGlzdCIsImxpc3RVTCIsImdyb3VwZWRMaXN0RWxlbWVudHMiLCJsaXN0RWxlbWVudHMiLCJsaXN0RnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZm9yRWFjaCIsInBhZ2VOYW1lQW5kSHJlZiIsImluZGV4IiwicGFnZU5hbWUiLCJwYWdlSHJlZiIsIm5hdkxpbmsiLCJuYXZMSSIsInNwZWNpYWxOYXZMaW5rIiwiY3JlYXRlTW9kaWZpZWRMaUNvbnRlbnQiLCJwcm9qZWN0SW5wdXRDb250YWluZXIiLCJwcm9qZWN0TmFtZUlucHV0IiwicHJvamVjdEJ1dHRvbnNDb250YWluZXIiLCJhZGRQcm9qZWN0QnV0dG9uIiwiY2FuY2VsQWRkUHJvamVjdEJ1dHRvbiIsInByaW9yaXR5TG9nbyIsImNyZWF0ZUhlYWRlciIsImhlYWRlciIsImhlYWRlckxlZnQiLCJoZWFkZXJMb2dvIiwiaGVhZGVyVGl0bGUiLCJoZWFkZXJSaWdodCIsImNvbnRlbnQiLCJzcmMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzY3JpcHQiLCJhdHRyaWJ1dGUiLCJoZWFkIiwibW9kaWZ5TGlzdEVsZW1lbnQiLCJsaXN0RWxlbWVudCIsImxpc3RJdGVtSW5kZXgiLCJsaXN0RWxlbWVudENvbnRlbnRBcnJheSIsImlkIiwibW9kaWZpZWRMaXN0RWxlbWVudCIsImNvbmNhdCIsImlubmVySFRNTCIsImVsZW1lbnQiLCJldmVudE5hbWUiLCJmbiIsInB1c2giLCJvZmYiLCJpIiwic3BsaWNlIiwiZGF0YSIsImdldEVsZW1lbnRCeUlkIiwibGlzdE9iamVjdHMiLCJIb21lIiwiUHJvamVjdHMiLCJwcm9qZWN0TGlzdCIsIm1haW4iLCJtYWluQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==