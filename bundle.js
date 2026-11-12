/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/storage.js */ \"./services/storage.js\");\n/* harmony import */ var _services_mocks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/mocks.js */ \"./services/mocks.js\");\n/* harmony import */ var _ui_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/login.js */ \"./ui/login.js\");\n/* harmony import */ var _ui_register_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/register.js */ \"./ui/register.js\");\n/* harmony import */ var _ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/chatList.js */ \"./ui/chatList.js\");\n/* harmony import */ var _ui_chat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/chat.js */ \"./ui/chat.js\");\n\n\n\n\n\n\n\nvar logoutBtn = document.querySelector('.logoutbtn');\nvar listmessages = [];\nfunction isValidInput(name, password) {\n  if (!name || !password) {\n    alert(\"Введите имя и пароль!\");\n    return false;\n  }\n  return true;\n}\nfunction toggleSearch(container, input) {\n  container.classList.toggle('active');\n  if (container.classList.contains('active')) {\n    input.focus();\n  }\n}\nfunction toggleMenu(menu) {\n  menu.classList.toggle('active');\n}\nfunction initState() {\n  listmessages = Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"getMessages\"])();\n  var authorSave = Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"getCurrentUser\"])();\n  Object(_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"renderChatList\"])(_services_mocks_js__WEBPACK_IMPORTED_MODULE_2__[\"mockChats\"]);\n  if (authorSave) {\n    _ui_login_js__WEBPACK_IMPORTED_MODULE_3__[\"loginName\"].value = authorSave;\n    var savedScreen = Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"getCurrentScreen\"])();\n    if (savedScreen === 'chat') {\n      Object(_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"showChat\"])();\n      Object(_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"renderMessages\"])(listmessages);\n    } else {\n      Object(_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"showChatList\"])();\n    }\n  } else {\n    Object(_ui_login_js__WEBPACK_IMPORTED_MODULE_3__[\"showLogin\"])();\n  }\n}\nfunction handleLoginSubmit(event) {\n  event.preventDefault();\n  var name = _ui_login_js__WEBPACK_IMPORTED_MODULE_3__[\"loginName\"].value.trim();\n  var password = _ui_login_js__WEBPACK_IMPORTED_MODULE_3__[\"loginPass\"].value.trim();\n  if (!isValidInput(name, password)) return;\n  var users = Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"getRegisteredUsers\"])();\n  if (users[name] === password) {\n    Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"saveCurrentUser\"])(name);\n    Object(_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"showChatList\"])();\n    Object(_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"renderMessages\"])(listmessages);\n    _ui_login_js__WEBPACK_IMPORTED_MODULE_3__[\"loginPass\"].value = '';\n  } else {\n    alert(\"Неверное имя или пароль!\");\n  }\n}\nfunction handleToRegisterClick() {\n  Object(_ui_register_js__WEBPACK_IMPORTED_MODULE_4__[\"showRegister\"])();\n}\nfunction handleRegisterSubmit(event) {\n  event.preventDefault();\n  var name = _ui_register_js__WEBPACK_IMPORTED_MODULE_4__[\"regName\"].value.trim();\n  var password = _ui_register_js__WEBPACK_IMPORTED_MODULE_4__[\"regPass\"].value.trim();\n  if (!isValidInput(name, password)) return;\n  var users = Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"getRegisteredUsers\"])();\n  if (users[name]) {\n    alert(\"Пользователь с таким именем уже есть! Введите другое!\");\n    return;\n  }\n  users[name] = password;\n  Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"saveRegisteredUsers\"])(users);\n  Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"saveCurrentUser\"])(name);\n  alert(\"Регистрация прошла успешно!\");\n  _ui_register_js__WEBPACK_IMPORTED_MODULE_4__[\"regName\"].value = '';\n  _ui_register_js__WEBPACK_IMPORTED_MODULE_4__[\"regPass\"].value = '';\n  Object(_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"showChatList\"])();\n}\nfunction handleBackToLoginClick() {\n  _ui_login_js__WEBPACK_IMPORTED_MODULE_3__[\"loginName\"].value = '';\n  _ui_login_js__WEBPACK_IMPORTED_MODULE_3__[\"loginPass\"].value = '';\n  Object(_ui_login_js__WEBPACK_IMPORTED_MODULE_3__[\"showLogin\"])();\n}\nfunction handleChatListClick(event) {\n  var chatItem = event.target.closest('.chat-item');\n  if (!chatItem) return;\n  Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"saveCurrentScreen\"])('chat');\n  Object(_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"showChat\"])();\n  Object(_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"renderMessages\"])(listmessages);\n}\nfunction handleBurgerClick(event) {\n  event.stopPropagation();\n  toggleMenu(_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"dropdownMenu\"]);\n}\nfunction handleListSearchClick(event) {\n  event.stopPropagation();\n  toggleSearch(_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"listSearchContainer\"], _ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"listSearchInput\"]);\n}\nfunction handleSendMessage(event) {\n  event.preventDefault();\n  var text = _ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"input\"].value.trim();\n  var name = Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"getCurrentUser\"])();\n  if (!text) return;\n  var newMessage = {\n    text: text,\n    author: name,\n    time: new Date().toISOString()\n  };\n  listmessages.push(newMessage);\n  Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"saveMessages\"])(listmessages);\n  Object(_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"addMessage\"])(newMessage);\n  _ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"input\"].value = '';\n}\nfunction handleBackToChatListClick() {\n  Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"saveCurrentScreen\"])('list');\n  Object(_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"showChatList\"])();\n}\nfunction handleChatBurgerClick(event) {\n  event.stopPropagation();\n  toggleMenu(_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"chatDropdown\"]);\n}\nfunction handleChatSearchClick(event) {\n  event.stopPropagation();\n  toggleSearch(_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"chatSearchContainer\"], _ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"chatSearchInput\"]);\n}\nfunction handleClearChatClick() {\n  Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"clearMessagesStorage\"])();\n  listmessages = [];\n  Object(_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"renderMessages\"])(listmessages);\n  _ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"chatDropdown\"].classList.remove('active');\n}\nfunction handleLogoutClick() {\n  Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"removeCurrentUser\"])();\n  Object(_services_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"removeCurrentScreen\"])();\n  _ui_login_js__WEBPACK_IMPORTED_MODULE_3__[\"loginName\"].value = '';\n  _ui_login_js__WEBPACK_IMPORTED_MODULE_3__[\"loginPass\"].value = '';\n  Object(_ui_login_js__WEBPACK_IMPORTED_MODULE_3__[\"showLogin\"])();\n}\nfunction handleListClickOutside(event) {\n  if (!_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"dropdownMenu\"].contains(event.target) && !_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"burgerBtn\"].contains(event.target)) {\n    _ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"dropdownMenu\"].classList.remove('active');\n  }\n  if (!_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"listSearchContainer\"].contains(event.target)) {\n    _ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"listSearchContainer\"].classList.remove('active');\n  }\n}\nfunction handleChatClickOutside(event) {\n  if (!_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"chatDropdown\"].contains(event.target) && !_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"chatBurgerBtn\"].contains(event.target)) {\n    _ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"chatDropdown\"].classList.remove('active');\n  }\n  if (!_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"chatSearchContainer\"].contains(event.target)) {\n    _ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"chatSearchContainer\"].classList.remove('active');\n  }\n}\n_ui_login_js__WEBPACK_IMPORTED_MODULE_3__[\"loginForm\"].addEventListener('submit', handleLoginSubmit);\n_ui_login_js__WEBPACK_IMPORTED_MODULE_3__[\"toRegistrationBtn\"].addEventListener('click', handleToRegisterClick);\n_ui_register_js__WEBPACK_IMPORTED_MODULE_4__[\"registerForm\"].addEventListener('submit', handleRegisterSubmit);\n_ui_register_js__WEBPACK_IMPORTED_MODULE_4__[\"backBtn\"].addEventListener('click', handleBackToLoginClick);\n_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"chatListContainer\"].addEventListener('click', handleChatListClick);\n_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"burgerBtn\"].addEventListener('click', handleBurgerClick);\n_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"listSearchBtn\"].addEventListener('click', handleListSearchClick);\n_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"form\"].addEventListener('submit', handleSendMessage);\n_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"backToChatListBtn\"].addEventListener('click', handleBackToChatListClick);\n_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"chatBurgerBtn\"].addEventListener('click', handleChatBurgerClick);\n_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"chatSearchBtn\"].addEventListener('click', handleChatSearchClick);\n_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"clearChatBtn\"].addEventListener('click', handleClearChatClick);\nlogoutBtn.addEventListener('click', handleLogoutClick);\n_ui_chatList_js__WEBPACK_IMPORTED_MODULE_5__[\"chatListBox\"].addEventListener('click', handleListClickOutside);\n_ui_chat_js__WEBPACK_IMPORTED_MODULE_6__[\"form\"].addEventListener('click', handleChatClickOutside);\ninitState();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./services/mocks.js":
/*!***************************!*\
  !*** ./services/mocks.js ***!
  \***************************/
/*! exports provided: mockChats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mockChats\", function() { return mockChats; });\nvar mockChats = [{\n  id: '1',\n  name: 'Гарик Харламов',\n  avatar: 'ГХ',\n  lastMessage: 'Ты бульдог?',\n  time: '16:48',\n  status: 'read'\n}, {\n  id: '2',\n  name: 'Саша Ваш',\n  avatar: 'СВ',\n  lastMessage: 'Ты наш?',\n  time: '14:10',\n  status: 'unread'\n}, {\n  id: '3',\n  name: 'Окорочокs',\n  avatar: \"\\uD83D\\uDE02\",\n  lastMessage: 'Сегодня идем на треню?',\n  time: '10:45',\n  status: 'unread',\n  unreadCount: 34\n}];\n\n//# sourceURL=webpack:///./services/mocks.js?");

/***/ }),

/***/ "./services/storage.js":
/*!*****************************!*\
  !*** ./services/storage.js ***!
  \*****************************/
/*! exports provided: getMessages, saveMessages, clearMessagesStorage, getCurrentUser, saveCurrentUser, removeCurrentUser, getRegisteredUsers, saveRegisteredUsers, saveCurrentScreen, getCurrentScreen, removeCurrentScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMessages\", function() { return getMessages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveMessages\", function() { return saveMessages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearMessagesStorage\", function() { return clearMessagesStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentUser\", function() { return getCurrentUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveCurrentUser\", function() { return saveCurrentUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeCurrentUser\", function() { return removeCurrentUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRegisteredUsers\", function() { return getRegisteredUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveRegisteredUsers\", function() { return saveRegisteredUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveCurrentScreen\", function() { return saveCurrentScreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentScreen\", function() { return getCurrentScreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeCurrentScreen\", function() { return removeCurrentScreen; });\nfunction getMessages() {\n  return JSON.parse(localStorage.getItem('chat') || '[]');\n}\nfunction saveMessages(messages) {\n  localStorage.setItem('chat', JSON.stringify(messages));\n}\nfunction clearMessagesStorage() {\n  localStorage.removeItem('chat');\n}\nfunction getCurrentUser() {\n  return localStorage.getItem('currentUser');\n}\nfunction saveCurrentUser(name) {\n  localStorage.setItem('currentUser', name);\n}\nfunction removeCurrentUser() {\n  localStorage.removeItem('currentUser');\n}\nfunction getRegisteredUsers() {\n  return JSON.parse(localStorage.getItem('users') || '{}');\n}\nfunction saveRegisteredUsers(users) {\n  localStorage.setItem('users', JSON.stringify(users));\n}\nfunction saveCurrentScreen(screenName) {\n  localStorage.setItem('currentScreen', screenName);\n}\nfunction getCurrentScreen() {\n  return localStorage.getItem('currentScreen') || 'list';\n}\nfunction removeCurrentScreen() {\n  localStorage.removeItem('currentScreen');\n}\n\n//# sourceURL=webpack:///./services/storage.js?");

/***/ }),

/***/ "./ui/chat.js":
/*!********************!*\
  !*** ./ui/chat.js ***!
  \********************/
/*! exports provided: form, input, messageContainer, backToChatListBtn, chatBurgerBtn, chatDropdown, clearChatBtn, chatSearchContainer, chatSearchBtn, chatSearchInput, showChat, getMessage, addMessage, renderMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"messageContainer\", function() { return messageContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backToChatListBtn\", function() { return backToChatListBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatBurgerBtn\", function() { return chatBurgerBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatDropdown\", function() { return chatDropdown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearChatBtn\", function() { return clearChatBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatSearchContainer\", function() { return chatSearchContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatSearchBtn\", function() { return chatSearchBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatSearchInput\", function() { return chatSearchInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showChat\", function() { return showChat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMessage\", function() { return getMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMessage\", function() { return addMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMessages\", function() { return renderMessages; });\n/* harmony import */ var _utils_formatDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/formatDate.js */ \"./utils/formatDate.js\");\n\nvar loginScreen = document.querySelector('#login-screen');\nvar chatListScreen = document.querySelector('#chat-list-screen');\nvar chatScreen = document.querySelector('#chat-screen');\nvar logoutBtn = document.querySelector('.logoutbtn');\nvar form = document.querySelector('.form');\nvar input = document.querySelector('.form-input');\nvar messageContainer = document.querySelector('.message');\nvar backToChatListBtn = document.querySelector('.back-to-list-btn');\nvar chatBurgerBtn = document.querySelector('.chat-burger-btn');\nvar chatDropdown = document.querySelector('#chat-dropdown');\nvar clearChatBtn = document.querySelector('#clear-chat-btn');\nvar chatSearchContainer = document.querySelector('#chat-search-container');\nvar chatSearchBtn = document.querySelector('#chat-search-btn');\nvar chatSearchInput = document.querySelector('#chat-search-input');\nfunction showChat() {\n  loginScreen.classList.remove('active');\n  chatListScreen.classList.remove('active');\n  chatScreen.classList.add('active');\n  logoutBtn.style.display = 'flex';\n}\nfunction getMessage(item) {\n  return \"\\n        <div class=\\\"message-item\\\">\\n            <span class=\\\"message-meta\\\">\".concat(item.author, \" | \").concat(Object(_utils_formatDate_js__WEBPACK_IMPORTED_MODULE_0__[\"formatDate\"])(item.time), \"</span>\\n            <span class=\\\"message-text\\\">\").concat(item.text, \"</span>\\n        </div>\\n    \");\n}\nfunction addMessage(message) {\n  messageContainer.insertAdjacentHTML('beforeend', getMessage(message));\n}\nfunction renderMessages(messages) {\n  messageContainer.innerHTML = messages.map(function (item) {\n    return getMessage(item);\n  }).join('');\n}\n\n//# sourceURL=webpack:///./ui/chat.js?");

/***/ }),

/***/ "./ui/chatList.js":
/*!************************!*\
  !*** ./ui/chatList.js ***!
  \************************/
/*! exports provided: chatListContainer, chatListBox, burgerBtn, dropdownMenu, listSearchContainer, listSearchBtn, listSearchInput, showChatList, renderChatList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatListContainer\", function() { return chatListContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatListBox\", function() { return chatListBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"burgerBtn\", function() { return burgerBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropdownMenu\", function() { return dropdownMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listSearchContainer\", function() { return listSearchContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listSearchBtn\", function() { return listSearchBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listSearchInput\", function() { return listSearchInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showChatList\", function() { return showChatList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderChatList\", function() { return renderChatList; });\nvar loginScreen = document.querySelector('#login-screen');\nvar chatListScreen = document.querySelector('#chat-list-screen');\nvar chatScreen = document.querySelector('#chat-screen');\nvar logoutBtn = document.querySelector('.logoutbtn');\nvar chatListContainer = document.querySelector('.chat-list-container');\nvar chatListBox = document.querySelector('.chat-list-box');\nvar burgerBtn = document.querySelector('.burger-btn');\nvar dropdownMenu = document.querySelector('#burger-dropdown');\nvar listSearchContainer = document.querySelector('#search-container');\nvar listSearchBtn = document.querySelector('#search-btn');\nvar listSearchInput = document.querySelector('.search-input');\nfunction showChatList() {\n  loginScreen.classList.remove('active');\n  chatScreen.classList.remove('active');\n  chatListScreen.classList.add('active');\n  logoutBtn.style.display = 'flex';\n}\nfunction renderChatList(chats) {\n  var getChatItem = function getChatItem(item) {\n    var statusHTML = item.status === 'unread' ? \"<span class=\\\"chat-badge\\\">\".concat(item.unreadCount || 1, \"</span>\") : \"<span class=\\\"chat-status\\\" style=\\\"color: #05b30d;\\\">\\u2713\\u2713</span>\";\n    return \"\\n            <div class=\\\"chat-item\\\" data-id=\\\"\".concat(item.id, \"\\\">\\n                <div class=\\\"chat-avatar\\\" style=\\\"background: #FFC107;\\\">\").concat(item.avatar, \"</div>\\n                <div class=\\\"chat-info\\\">\\n                    <div class=\\\"chat-top\\\">\\n                        <span class=\\\"chat-name\\\">\").concat(item.name, \"</span>\\n                        <span class=\\\"chat-time\\\">\").concat(item.time, \"</span>\\n                    </div>\\n                    <div class=\\\"chat-bottom\\\">\\n                        <span class=\\\"chat-last-message\\\">\").concat(item.lastMessage, \"</span>\\n                        \").concat(statusHTML, \"\\n                    </div>\\n                </div>\\n            </div>\\n        \");\n  };\n  chatListContainer.innerHTML = chats.map(getChatItem).join('');\n}\n\n//# sourceURL=webpack:///./ui/chatList.js?");

/***/ }),

/***/ "./ui/login.js":
/*!*********************!*\
  !*** ./ui/login.js ***!
  \*********************/
/*! exports provided: loginForm, toRegistrationBtn, loginName, loginPass, showLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginForm\", function() { return loginForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toRegistrationBtn\", function() { return toRegistrationBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginName\", function() { return loginName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginPass\", function() { return loginPass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showLogin\", function() { return showLogin; });\nvar loginScreen = document.querySelector('#login-screen');\nvar chatListScreen = document.querySelector('#chat-list-screen');\nvar chatScreen = document.querySelector('#chat-screen');\nvar authFlip = document.querySelector('#auth-flip');\nvar logoutBtn = document.querySelector('.logoutbtn');\nvar loginForm = document.querySelector('#login-form');\nvar toRegistrationBtn = document.querySelector('#to-register-btn');\nvar loginName = document.querySelector('#login-name');\nvar loginPass = document.querySelector('#login-password');\nfunction showLogin() {\n  chatListScreen.classList.remove('active');\n  chatScreen.classList.remove('active');\n  loginScreen.classList.add('active');\n  logoutBtn.style.display = 'none';\n  authFlip.classList.remove('flipped');\n}\n\n//# sourceURL=webpack:///./ui/login.js?");

/***/ }),

/***/ "./ui/register.js":
/*!************************!*\
  !*** ./ui/register.js ***!
  \************************/
/*! exports provided: registerForm, backBtn, regName, regPass, showRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerForm\", function() { return registerForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backBtn\", function() { return backBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"regName\", function() { return regName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"regPass\", function() { return regPass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showRegister\", function() { return showRegister; });\nvar loginScreen = document.querySelector('#login-screen');\nvar chatListScreen = document.querySelector('#chat-list-screen');\nvar chatScreen = document.querySelector('#chat-screen');\nvar authFlip = document.querySelector('#auth-flip');\nvar logoutBtn = document.querySelector('.logoutbtn');\nvar registerForm = document.querySelector('#register-form');\nvar backBtn = document.querySelector('#back-to-login-btn');\nvar regName = document.querySelector('#reg-name');\nvar regPass = document.querySelector('#reg-password');\nfunction showRegister() {\n  chatListScreen.classList.remove('active');\n  chatScreen.classList.remove('active');\n  loginScreen.classList.add('active');\n  logoutBtn.style.display = 'none';\n  authFlip.classList.add('flipped');\n}\n\n//# sourceURL=webpack:///./ui/register.js?");

/***/ }),

/***/ "./utils/formatDate.js":
/*!*****************************!*\
  !*** ./utils/formatDate.js ***!
  \*****************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDate\", function() { return formatDate; });\nfunction formatDate(isoString) {\n  return new Date(isoString).toLocaleString('ru-RU');\n}\n\n//# sourceURL=webpack:///./utils/formatDate.js?");

/***/ })

/******/ });