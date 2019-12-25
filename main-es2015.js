(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.json":
/*!******************!*\
  !*** ./app.json ***!
  \******************/
/*! exports provided: themes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"themes\":[{\"topicNumber\":1,\"topicName\":\"some topicName 1\"},{\"topicNumber\":2,\"topicName\":\"some topicName 2\"},{\"topicNumber\":3,\"topicName\":\"some topicName 3\"},{\"topicNumber\":4,\"topicName\":\"some topicName 4\"},{\"topicNumber\":5,\"topicName\":\"some topicName 5\"},{\"topicNumber\":6,\"topicName\":\"some topicName 6\"},{\"topicNumber\":7,\"topicName\":\"some topicName 7\"},{\"topicNumber\":8,\"topicName\":\"some topicName 8\"},{\"topicNumber\":9,\"topicName\":\"some topicName 9\"},{\"topicNumber\":10,\"topicName\":\"some topicName 10\"},{\"topicNumber\":11,\"topicName\":\"some topicName 11\"},{\"topicNumber\":12,\"topicName\":\"some topicName 12\"},{\"topicNumber\":13,\"topicName\":\"some topicName 13\"},{\"topicNumber\":14,\"topicName\":\"some topicName 14\"},{\"topicNumber\":15,\"topicName\":\"some topicName 15\"}]}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"main-wrapper\" *ngIf=\"authSrvice.isloggedIn\">\n  <header class=\"header\">\n    <div class=\"header__inner\">\n      <app-ui-button class=\"button\"\n                     name=\"Logout\"\n                     color=\"#000000\"\n                     background=\"#ffffff\"\n                     border=\"none\"\n                     padding=\"5px 12px 7px\"\n                     (clickButton)=\"logout()\"\n      ></app-ui-button>\n    </div>\n  </header>\n  <app-student-panel *ngIf=\"authSrvice.userRole === 'student'\" [mode]=\"role\" class=\"student-panel\"></app-student-panel>\n  <app-teacher-panel *ngIf=\"authSrvice.userRole === 'teacher'\" [mode]=\"role\" [students]=\"students\" class=\"teacher-panel\"></app-teacher-panel>\n</section>\n<app-login *ngIf=\"!authSrvice.isloggedIn\"></app-login>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui-button/ui-button.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui-button/ui-button.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"ui-button\"\n        [ngStyle]=\"{\n        background: background,\n        color: color,\n        padding: padding,\n        border: border,\n        outline: outline,\n        fontSize: fontSize,\n        fontWeight: fontWeight\n        }\"\n        [disabled]=\"disabled\"\n        (click)=\"handleClick()\"\n        (mouseover)=\"handleMouseover()\" >\n    {{ name }}\n    <ng-content></ng-content>\n</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui-input/ui-input.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui-input/ui-input.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label [class]=\"labelClassBytype\">\n    <input [placeholder]=\"placeholder\"\n           [(ngModel)]=\"inputValue\"\n           (input)=\"handleInput()\"\n           (focusout)=\"handleFocusout()\"\n           (focus)=\"handleFocus()\"\n           [type]=\"type\"\n           [class]=\"classNameByType\"\n           [ngStyle]=\"{ 'border-bottom': '1px solid' + borderColor, color: color }\"\n           [disabled]=\"disabled\" />\n</label>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui-select/ui-select.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui-select/ui-select.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field class=\"ui-select\">\n    <mat-label>Theme</mat-label>\n    <mat-select (selectionChange)=\"handleSelect($event)\" name=\"food\">\n        <mat-option *ngFor=\"let topic of topics\" [value]=\"topic\">\n            {{ topic }}\n        </mat-option>\n    </mat-select>\n</mat-form-field>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-homework/create-homework.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-homework/create-homework.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"create-homework-modal-wrapper\" (click)=\"closeModalHandler()\"></div>\n<div class=\"create-homework-modal\">\n    <h1 class=\"modal-header\">New homework</h1>\n    <div class=\"modal-content\">\n        <div class=\"modal-content__select\">\n            <app-ui-select\n                    [topics]=\"topics\"\n                    [currentOptionIndex]=\"0\"\n                    label=\"Topic\"\n                    name=\"Topic\"\n                    (select)=\"handleSelect($event)\"\n                    class=\"ui-select\"\n            ></app-ui-select>\n        </div>\n        <div class=\"modal-content__input\">\n            <div class=\"modal-content__filename\">{{ fileName }}</div>\n            <app-ui-input\n                    class=\"ui-input\"\n                    [type]=\"'file'\"\n                    (input)=\"uploadFile($event)\"\n            ></app-ui-input>\n        </div>\n        <div class=\"modal-content__button\">\n            <app-ui-button\n                    name=\"Submit\"\n                    color=\"#ffffff\"\n                    background=\"#1464f6\"\n                    border=\"none\"\n                    [disabled]=\"!downloadUrl.length\"\n                    (clickButton)=\"submitHomework()\"\n                    padding=\"20px 60px\"\n            ></app-ui-button>\n        </div>\n        <div>{{ someData }}</div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"login\">\n   <div class=\"login__wrapper\">\n       <img class=\"login__logo\" src=\"./assets/projector.png\">\n       <div class=\"login__input-wrapper\">\n           <app-ui-input\n                   *ngIf=\"!isLogin\"\n                   placeholder=\"Name and Surname\"\n                   class=\"login__name\"\n                   color=\"#ffffff\"\n                   (input)=\"handleUserName($event)\"\n                   (focusout)=\"shouldValidateName = true\"\n                   (focus)=\"shouldValidateName = false\"\n           ></app-ui-input>\n           <span *ngIf=\"!validateName && shouldValidateName && !isLogin\" class=\"login__error\">Name is too short</span>\n       </div>\n       <div class=\"login__input-wrapper\">\n           <app-ui-input\n                   placeholder=\"Email\"\n                   class=\"login__email\"\n                   color=\"#ffffff\"\n                   (input)=\"handleEmail($event)\"\n                   (focusout)=\"shouldValidateEmail = true\"\n                   (focus)=\"shouldValidateEmail = false\"\n           ></app-ui-input>\n           <span *ngIf=\"!validateEmail && shouldValidateEmail\" class=\"login__error\">Wrong email</span>\n       </div>\n       <div class=\"login__input-wrapper\">\n           <app-ui-input\n                   [placeholder]=\"isLogin ? 'Password' : 'Create password'\"\n                   type=\"password\"\n                   class=\"login__password\"\n                   (input)=\"handlePassword($event)\"\n                   (focusout)=\"shouldValidatePassword = true\"\n                   (focus)=\"shouldValidatePassword = false\"\n           ></app-ui-input>\n           <span *ngIf=\"shouldValidatePassword\" class=\"login__error\">{{ passwordError() }}</span>\n       </div>\n      <div class=\"login__buttons-wrapper\">\n          <app-ui-button\n                  fontWeight=\"600\"\n                  fontSize=\"16px\"\n                  [name]=\"isLogin ? 'Sign up' : 'Back to login'\"\n                  background=\"\"\n                  class=\"login__button signup-button\"\n                  (clickButton)=\"resolveView()\"\n          ></app-ui-button>\n          <app-ui-button\n                  fontWeight=\"600\"\n                  fontSize=\"16px\"\n                  [name]=\"isLogin ? 'Login' : 'Sign up'\"\n                  [disabled]=\"!isLoginButtonActive\"\n                  (clickButton)=\"isLogin ? login() : signUp()\"\n                  class=\"login__button\"\n          ></app-ui-button>\n      </div>\n      <span class=\"login__error login__error_general\">{{ error }}</span>\n   </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sheet-row/sheet-row.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sheet-row/sheet-row.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" (click)=\"openEditModal.emit(homework.number)\">\n    <div class=\"row__item\">{{ homework.number }}</div>\n    <div class=\"row__item\">{{ homework.topic }}</div>\n    <div class=\"row__item file\">{{ homework.fileName.length > 20 ? homework.fileName.slice(0, 20) + '...' : homework.fileName }}</div>\n    <div class=\"row__item\">\n        {{ homework.status }}\n        <span class=\"checked\" *ngIf=\"homework.status === 'checked'\"></span>\n        <span class=\"unchecked\" *ngIf=\"homework.status === 'unchecked'\"></span>\n    </div>\n    <div class=\"row__item\">\n        <span [ngClass]=\"{'active-comment': isHovered}\" (mouseenter)=\"toggleComment()\" (mouseleave)=\"toggleComment()\" class=\"comment\">\n            {{ isHovered ? comment : comment.slice(0, 30) + '...' }}\n        </span>\n    </div>\n    <div class=\"row__item rate\" *ngIf=\"mode === 'student'\">{{ homework.rate !== 0 ? homework.rate : 'Not rated' }}</div>\n    <div class=\"row__item row__buttons\" *ngIf=\"mode === 'teacher'\">\n        <a [href]=\"homework.file\" download>\n            <app-ui-button class=\"button\"\n                           name=\"\"\n                           color=\"#ffffff\"\n                           background=\"#aaaaaa\"\n                           border=\"none\"\n                           padding=\"5px 12px 7px\"\n                           (click)=\"$event.stopPropagation()\"\n            ><img class=\"download-icon\" src=\"./assets/cloud-download-alt-solid.svg\" />\n            </app-ui-button>\n        </a>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sheet/sheet.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sheet/sheet.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sheet-header\">\n    <div class=\"sheet-header__cell\">#</div>\n    <div class=\"sheet-header__cell\">Topic</div>\n    <div class=\"sheet-header__cell\">Files</div>\n    <div class=\"sheet-header__cell sort\" (click)=\"sort()\">\n        Status\n        <span class=\"status-filter\"></span>\n    </div>\n    <div class=\"sheet-header__cell\">Teacher's comment</div>\n    <div class=\"sheet-header__cell\" *ngIf=\"mode === 'student'\">Rate</div>\n</div>\n<div class=\"row\">\n    <app-sheet-row\n            class=\"row\" [mode]=\"mode\" *ngFor=\"let\n            document of documents; index as i\"\n            [homework]=\"document\"\n            (openEditModal)=\"openModal($event)\"\n    ></app-sheet-row>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-edit-modal/student-edit-modal.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-edit-modal/student-edit-modal.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"edit-homework-modal-wrapper\" (click)=\"closeModalHandler()\">\n    <div class=\"edit-homework-modal\" (click)=\"$event.stopPropagation()\">\n        <h1 class=\"modal-header\">Homework #{{ editingHomework.number }}</h1>\n        <div class=\"modal-content\">\n            <div class=\"modal-content__input\">\n                <div class=\"modal-content__filename\">\n                    <span class=\"bold-font\">Files: </span>\n                    {{ isStudent\n                        ? editingHomework.fileName\n                        : editingHomework.teacherFilename\n                    }}\n                </div>\n                <app-ui-input\n                        class=\"ui-input\"\n                        [type]=\"'file'\"\n                        (input)=\"uploadFile($event)\"\n                ></app-ui-input>\n            </div>\n            <div class=\"modal-content__field\">\n                <span class=\"bold-font\">Date: </span>\n                {{ editingHomework.date }}\n            </div>\n            <div class=\"modal-content__field modal-content__field-rate\" *ngIf=\"!isStudent\">\n                <span [ngClass]=\"{ 'selected-rate': editingHomework.rate === rate }\"\n                      class=\"modal-content__field-rate_rates\"\n                      *ngFor=\"let rate of rates\"\n                      (click)=\"handleRate(rate)\">{{ rate }}\n                </span>\n            </div>\n            <div class=\"modal-content__field\">\n                <span class=\"bold-font\">Status:\n                    <span>{{ editingHomework.status }}</span>\n                </span>\n                <span class=\"status-wrapper\">\n                    <span class=\"checkbox-button\" (click)=\"updateStatus()\" *ngIf=\"!isStudent\"></span>\n                    <span class=\"status-icon\" [ngStyle]=\"{ backgroundImage: checkedIcon }\"></span>\n                </span>\n            </div>\n            <div class=\"modal-content__comment\">\n                <div class=\"modal-content__comment_title\">\n                    <span class=\"bold-font\">{{ isStudent ? 'Teacher\\'s comment' : 'Your comment' }}</span>\n                    <span *ngIf=\"!isStudent\"\n                          [ngClass]=\"isEditingComment ? 'checkbox-button' : 'edit-button'\"\n                          (click)=\"editComment()\"\n                    ></span>\n                </div>\n                <div class=\"modal-content__comment_wrapper\">\n                    <div class=\"modal-content__comment_text\">\n                        <span *ngIf=\"!isEditingComment\">{{ editingHomework.comment }}</span>\n                        <textarea\n                                class=\"comment-textarea\"\n                                *ngIf=\"isEditingComment\"\n                                [(ngModel)]=\"comment\"\n                                autofocus>\n                            {{ editingHomework.comment }}\n                        </textarea>\n                    </div>\n                    <div class=\"modal-content__comment_rate\" *ngIf=\"isStudent\">{{ editingHomework.rate }}</div>\n                </div>\n            </div>\n            <app-ui-button class=\"button\"\n                           [name]=\"isStudent ? 'Download teacher\\'s file' : 'Download student\\'s file'\"\n                           color=\"#ffffff\"\n                           background=\"#1464f6\"\n                           border=\"none\"\n                           [disabled]=\"isStudent && !editingHomework.teacherFile.length\"\n                           padding=\"15px 12px 15px\"\n                           (clickButton)=\"downloadFile()\"\n            ></app-ui-button>\n            <a *ngIf=\"isStudent\"\n               (click)=\"deleteHomework()\"\n               class=\"delete-button\">\n                Delete homework\n                <span class=\"trash-icon\"></span>\n            </a>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-panel/student-panel.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-panel/student-panel.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #createModal class=\"navigation\">\n    <p class=\"avarage-rate\">Avarage rate <span class=\"avarage-rate__number\" [ngStyle]=\"{ background: buttonColor }\">{{ averageRate }}</span></p>\n    <app-ui-button name=\"Add homework +\"\n                   color=\"#ffffff\"\n                   background=\"#1464f6\"\n                   border=\"none\"\n                   (clickButton)=\"openModal()\"\n                   padding=\"20px 60px\"></app-ui-button>\n</div>\n<app-sheet [mode]=\"mode\" (openEditModal)=\"openEditModal($event)\" ></app-sheet>\n<app-create-homework\n        *ngIf=\"isPopupVisible\"\n        (closeModal)=\"openModal()\"\n></app-create-homework>\n<app-student-edit-modal\n        *ngIf=\"isEditPopupVisible && editingHomework\"\n        (closeEditModal)=\"closeEditModal()\"\n        [editingHomework]=\"editingHomework\"\n        [mode]=\"mode\"\n></app-student-edit-modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher-panel/teacher-panel.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher-panel/teacher-panel.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navigation\">\n    <p class=\"avarage-rate\">Avarage rate <span class=\"avarage-rate__number\" [ngStyle]=\"{ background: buttonColor }\">{{ averageRate }}</span></p>\n    <div *ngFor=\"let student of studentNames, index as i\"\n         (click)=\"handleSelect(student)\"\n         class=\"student\">\n        <span class=\"student__name\">\n            {{ student }}\n            <span *ngIf=\"selectedValue === student\" class=\"student__selected\"></span>\n        </span>\n    </div>\n</div>\n<app-sheet [mode]=\"mode\" (openEditModal)=\"openEditModal($event)\"></app-sheet>\n<app-student-edit-modal\n        *ngIf=\"isEditPopupVisible && editingHomework\"\n        (closeEditModal)=\"closeEditModal()\"\n        [editingHomework]=\"editingHomework\"\n        [mode]=\"mode\"\n></app-student-edit-modal>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  margin: 0;\n  padding: 0;\n}\n\n.main-wrapper {\n  width: 100%;\n}\n\n.header {\n  width: 100%;\n  display: block;\n  padding: 15px 0;\n  background-color: #0006f5;\n}\n\n.header__inner {\n  max-width: 1170px;\n  display: flex;\n  flex-direction: row-reverse;\n  margin: auto;\n  width: 100%;\n}\n\n.student-panel {\n  max-width: 1170px;\n  display: block;\n  width: 100%;\n  margin: auto;\n}\n\n.teacher-panel {\n  display: grid;\n  margin: auto;\n  grid-template-columns: 1fr 5fr;\n}\n\n.avarage-rate {\n  font-size: 13px;\n  font-weight: 600;\n  margin: 16px 0;\n}\n\n.avarage-rate__number {\n  color: #fff;\n  padding: 5px;\n  border-radius: 50%;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5pcy9ody1ob3N0aW5nLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTVweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwNmY1O1xuXG4gICZfX2lubmVyIHtcbiAgICBtYXgtd2lkdGg6IDExNzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnN0dWRlbnQtcGFuZWwge1xuICBtYXgtd2lkdGg6IDExNzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50ZWFjaGVyLXBhbmVsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XG59XG5cbi5hdmFyYWdlLXJhdGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMTZweCAwO1xuXG4gICZfX251bWJlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbiIsImJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTVweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwNmY1O1xufVxuLmhlYWRlcl9faW5uZXIge1xuICBtYXgtd2lkdGg6IDExNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3R1ZGVudC1wYW5lbCB7XG4gIG1heC13aWR0aDogMTE3MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRlYWNoZXItcGFuZWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW46IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbn1cblxuLmF2YXJhZ2UtcmF0ZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG4uYXZhcmFnZS1yYXRlX19udW1iZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_auth_actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/auth/actions.auth */ "./src/store/auth/actions.auth.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _store_documents_actions_documents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/documents/actions.documents */ "./src/store/documents/actions.documents.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/database.service */ "./src/services/database.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");












let AppComponent = class AppComponent {
    constructor(store, authSrvice, db, firebaseAuth, router) {
        this.store = store;
        this.authSrvice = authSrvice;
        this.db = db;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.students = [];
        this.userData = {};
        this.homeworks = [];
        this.store.dispatch(new _store_auth_actions_auth__WEBPACK_IMPORTED_MODULE_4__["ResolveAuthData"]());
        this.store
            .select(_constants__WEBPACK_IMPORTED_MODULE_9__["PATHS"].AUTH)
            .pipe()
            .subscribe(data => {
            this.role = data.userData.role;
            this.userData = data.userData;
            this.id = data.userData.id;
            if (this.id.length)
                this.requestUserData(this.id);
        });
        this.firebaseAuth.authState.subscribe(user => {
            if (user)
                this.store.dispatch(new _store_auth_actions_auth__WEBPACK_IMPORTED_MODULE_4__["LoginAction"](this.currentUserData(user)));
        });
    }
    logout() {
        this.authSrvice.logout();
    }
    requestUserData(id) {
        this.homeworksCollectionRef = this.db.collection(_constants__WEBPACK_IMPORTED_MODULE_9__["PATHS"].HOMEWORKS)
            .doc(_constants__WEBPACK_IMPORTED_MODULE_9__["PATHS"].GROUP)
            .collection(this.id);
        this.homeworksCollectionRef
            .snapshotChanges()
            .pipe()
            .subscribe((data) => {
            const idDoc = data.map(item => {
                return Object.assign({}, item.payload.doc.data(), { id: item.payload.doc.id });
            });
            this.store.dispatch(new _store_documents_actions_documents__WEBPACK_IMPORTED_MODULE_7__["DocumentsSetAction"](idDoc));
        });
    }
    fetchStudents() {
        this.db.collection(_constants__WEBPACK_IMPORTED_MODULE_9__["PATHS"].USERS)
            .doc(_constants__WEBPACK_IMPORTED_MODULE_9__["PATHS"].GROUP)
            .collection(_constants__WEBPACK_IMPORTED_MODULE_9__["PATHS"].STUDENTS)
            .snapshotChanges()
            .pipe()
            .subscribe((data) => {
            this.students = data.map(item => {
                return Object.assign({}, item.payload.doc.data());
            });
        });
    }
    currentUserData(data) {
        return {
            refreshToken: data.refreshToken,
            name: data.userName,
            photo: data.photoUrl,
            email: data.email,
            role: data.email.includes('teacher') ? 'teacher' : 'student',
            id: data.uid,
        };
    }
    ngOnInit() {
        if (!this.authSrvice.isloggedIn) {
            return this.router.navigate(['/login']);
        }
        if (this.authSrvice.userRole === 'student') {
            this.router.navigate(['/student-panel']);
        }
        else {
            this.router.navigate(['/teacher-panel']);
        }
        this.fetchStudents();
    }
    ngDoCheck() {
        if (this.authSrvice.isloggedIn)
            this.fetchStudents();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_services_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _student_panel_student_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student-panel/student-panel.component */ "./src/app/student-panel/student-panel.component.ts");
/* harmony import */ var _teacher_panel_teacher_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./teacher-panel/teacher-panel.component */ "./src/app/teacher-panel/teacher-panel.component.ts");
/* harmony import */ var _components_ui_button_ui_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/ui-button/ui-button.component */ "./src/app/components/ui-button/ui-button.component.ts");
/* harmony import */ var _components_ui_select_ui_select_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/ui-select/ui-select.component */ "./src/app/components/ui-select/ui-select.component.ts");
/* harmony import */ var _components_ui_input_ui_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/ui-input/ui-input.component */ "./src/app/components/ui-input/ui-input.component.ts");
/* harmony import */ var _sheet_sheet_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sheet/sheet.component */ "./src/app/sheet/sheet.component.ts");
/* harmony import */ var _sheet_row_sheet_row_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sheet-row/sheet-row.component */ "./src/app/sheet-row/sheet-row.component.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm2015/ngx-smart-modal.js");
/* harmony import */ var _create_homework_create_homework_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./create-homework/create-homework.component */ "./src/app/create-homework/create-homework.component.ts");
/* harmony import */ var material_angular_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! material-angular-select */ "./node_modules/material-angular-select/fesm2015/material-angular-select.js");
/* harmony import */ var _student_edit_modal_student_edit_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./student-edit-modal/student-edit-modal.component */ "./src/app/student-edit-modal/student-edit-modal.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../store/app.reducer */ "./src/store/app.reducer.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");





























const appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'student-panel', component: _student_panel_student_panel_component__WEBPACK_IMPORTED_MODULE_14__["StudentPanelComponent"] },
    { path: 'teacher-panel', component: _teacher_panel_teacher_panel_component__WEBPACK_IMPORTED_MODULE_15__["TeacherPanelComponent"] },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _student_panel_student_panel_component__WEBPACK_IMPORTED_MODULE_14__["StudentPanelComponent"],
            _teacher_panel_teacher_panel_component__WEBPACK_IMPORTED_MODULE_15__["TeacherPanelComponent"],
            _components_ui_button_ui_button_component__WEBPACK_IMPORTED_MODULE_16__["UiButtonComponent"],
            _components_ui_select_ui_select_component__WEBPACK_IMPORTED_MODULE_17__["UiSelectComponent"],
            _components_ui_input_ui_input_component__WEBPACK_IMPORTED_MODULE_18__["UiInputComponent"],
            _sheet_sheet_component__WEBPACK_IMPORTED_MODULE_19__["SheetComponent"],
            _sheet_row_sheet_row_component__WEBPACK_IMPORTED_MODULE_20__["SheetRowComponent"],
            _create_homework_create_homework_component__WEBPACK_IMPORTED_MODULE_22__["CreateHomeworkComponent"],
            _student_edit_modal_student_edit_modal_component__WEBPACK_IMPORTED_MODULE_24__["StudentEditModalComponent"],
        ],
        entryComponents: [_create_homework_create_homework_component__WEBPACK_IMPORTED_MODULE_22__["CreateHomeworkComponent"]],
        imports: [
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_21__["NgxSmartModalModule"].forRoot(),
            material_angular_select__WEBPACK_IMPORTED_MODULE_23__["MaterialAngularSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_26__["AppReducer"]),
            // @ts-ignore
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_27__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"]
        ],
        providers: [
            _services_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/ui-button/ui-button.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/ui-button/ui-button.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ui-button {\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n}\n.ui-button:hover {\n  opacity: 0.8;\n}\n.ui-button:active {\n  opacity: 0.8;\n}\n.ui-button:disabled {\n  opacity: 0.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5pcy9ody1ob3N0aW5nLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvdWktYnV0dG9uL3VpLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91aS1idXR0b24vdWktYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91aS1idXR0b24vdWktYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IC44O1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIG9wYWNpdHk6IC44O1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogLjI7XG4gIH1cbn1cbiIsIi51aS1idXR0b24ge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4udWktYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLnVpLWJ1dHRvbjphY3RpdmUge1xuICBvcGFjaXR5OiAwLjg7XG59XG4udWktYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4yO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/ui-button/ui-button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ui-button/ui-button.component.ts ***!
  \*************************************************************/
/*! exports provided: UiButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiButtonComponent", function() { return UiButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UiButtonComponent = class UiButtonComponent {
    constructor() {
        this.fontSize = '14px';
        this.fontWeight = '400';
        this.disabled = false;
        this.clickButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseoverButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    handleClick() {
        this.clickButton.emit(null);
    }
    handleMouseover() {
        this.mouseoverButton.emit(null);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiButtonComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiButtonComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiButtonComponent.prototype, "background", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiButtonComponent.prototype, "border", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiButtonComponent.prototype, "padding", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiButtonComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiButtonComponent.prototype, "height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiButtonComponent.prototype, "fontSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiButtonComponent.prototype, "fontWeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiButtonComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiButtonComponent.prototype, "outline", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UiButtonComponent.prototype, "clickButton", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UiButtonComponent.prototype, "mouseoverButton", void 0);
UiButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ui-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ui-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui-button/ui-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ui-button.component.scss */ "./src/app/components/ui-button/ui-button.component.scss")).default]
    })
], UiButtonComponent);



/***/ }),

/***/ "./src/app/components/ui-input/ui-input.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/ui-input/ui-input.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ui-input {\n  border: none;\n  border-bottom: 1px solid #1464f6;\n  width: 100%;\n  display: block;\n  padding: 20px 0 10px;\n  box-sizing: border-box;\n  outline: none;\n  font-size: 16px;\n}\n\n.file-input {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5pcy9ody1ob3N0aW5nLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvdWktaW5wdXQvdWktaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdWktaW5wdXQvdWktaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91aS1pbnB1dC91aS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxNDY0ZjY7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMjBweCAwIDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZpbGUtaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuIiwiLnVpLWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE0NjRmNjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyMHB4IDAgMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZmlsZS1pbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/ui-input/ui-input.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/ui-input/ui-input.component.ts ***!
  \***********************************************************/
/*! exports provided: UiInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInputComponent", function() { return UiInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UiInputComponent = class UiInputComponent {
    constructor() {
        this.type = 'text';
        this.color = '#000000';
        this.input = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focusout = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputValue = null;
    }
    handleInput() {
        this.input.emit(this.inputValue);
    }
    handleFocus() {
        this.focus.emit(true);
    }
    handleFocusout() {
        this.focusout.emit(true);
    }
    get classNameByType() {
        if (this.type !== 'text') {
            return `${this.type}-input`;
        }
        return 'ui-input';
    }
    get labelClassBytype() {
        return `${this.type}-label`;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiInputComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiInputComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiInputComponent.prototype, "placeholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiInputComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiInputComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiInputComponent.prototype, "borderColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UiInputComponent.prototype, "input", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UiInputComponent.prototype, "focusout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UiInputComponent.prototype, "focus", void 0);
UiInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ui-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ui-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui-input/ui-input.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ui-input.component.scss */ "./src/app/components/ui-input/ui-input.component.scss")).default]
    })
], UiInputComponent);



/***/ }),

/***/ "./src/app/components/ui-select/ui-select.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/ui-select/ui-select.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ui-select::ng-deep input {\n  padding: 15px 0 12px 0;\n  font-size: 16px;\n  color: #636363;\n}\n.ui-select::ng-deep input::-webkit-input-placeholder {\n  color: #3f3f3f;\n}\n.ui-select::ng-deep input::-moz-placeholder {\n  color: #3f3f3f;\n}\n.ui-select::ng-deep input::-ms-input-placeholder {\n  color: #3f3f3f;\n}\n.ui-select::ng-deep input::placeholder {\n  color: #3f3f3f;\n}\n.ui-select::ng-deep label .mdl-icon-toggle__label {\n  margin-top: -40px;\n}\n.ui-select::ng-deep .mdl-menu__container {\n  max-height: 200px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  box-shadow: 0px 4px 11px #00000029;\n}\n.mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5pcy9ody1ob3N0aW5nLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvdWktc2VsZWN0L3VpLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91aS1zZWxlY3QvdWktc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0FDQ0o7QURGRTtFQUNFLGNBQUE7QUNDSjtBREZFO0VBQ0UsY0FBQTtBQ0NKO0FERkU7RUFDRSxjQUFBO0FDQ0o7QURHQTtFQUNFLGlCQUFBO0FDQUY7QURJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdWktc2VsZWN0L3VpLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1zZWxlY3Q6Om5nLWRlZXAgaW5wdXQge1xuICBwYWRkaW5nOiAxNXB4IDAgMTJweCAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNjM2MzYzO1xuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzNmM2YzZjtcbiAgfVxufVxuXG4udWktc2VsZWN0OjpuZy1kZWVwIGxhYmVsIC5tZGwtaWNvbi10b2dnbGVfX2xhYmVsIHtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG59XG5cblxuLnVpLXNlbGVjdDo6bmctZGVlcCAubWRsLW1lbnVfX2NvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMXB4ICMwMDAwMDAyOTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIudWktc2VsZWN0OjpuZy1kZWVwIGlucHV0IHtcbiAgcGFkZGluZzogMTVweCAwIDEycHggMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzYzNjM2Mztcbn1cbi51aS1zZWxlY3Q6Om5nLWRlZXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMzZjNmM2Y7XG59XG5cbi51aS1zZWxlY3Q6Om5nLWRlZXAgbGFiZWwgLm1kbC1pY29uLXRvZ2dsZV9fbGFiZWwge1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbn1cblxuLnVpLXNlbGVjdDo6bmctZGVlcCAubWRsLW1lbnVfX2NvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMXB4ICMwMDAwMDAyOTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/ui-select/ui-select.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ui-select/ui-select.component.ts ***!
  \*************************************************************/
/*! exports provided: UiSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSelectComponent", function() { return UiSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UiSelectComponent = class UiSelectComponent {
    constructor() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    handleSelect(data) {
        this.select.emit(data);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiSelectComponent.prototype, "topics", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiSelectComponent.prototype, "currentOptionIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiSelectComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiSelectComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiSelectComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UiSelectComponent.prototype, "select", void 0);
UiSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ui-select',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ui-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui-select/ui-select.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ui-select.component.scss */ "./src/app/components/ui-select/ui-select.component.scss")).default]
    })
], UiSelectComponent);



/***/ }),

/***/ "./src/app/create-homework/create-homework.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/create-homework/create-homework.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".create-homework-modal {\n  margin: 0 auto;\n  max-width: 600px;\n  width: 100%;\n  background-color: #ffffff;\n  box-shadow: 0px 4px 10px #00000026;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: calc(50% - 250px);\n}\n\n.create-homework-modal-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-content__select, .modal-content__button {\n  margin: 30px 0 0 0;\n}\n\n.modal-content__input {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  background: #f2f2f2;\n  border-radius: 5px;\n  padding: 0 0 0 10px;\n  cursor: pointer;\n}\n\n.modal-content__filename {\n  max-width: 400px;\n  padding: 10px 0;\n}\n\n.modal-content__input::ng-deep input {\n  min-width: 420px;\n}\n\n.ui-input {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.ui-input::ng-deep .file-label {\n  background-image: url('upload.svg');\n  background-size: 38px;\n  background-position: 98%;\n  background-repeat: no-repeat;\n  padding: 20px 30px;\n  display: block;\n  cursor: pointer;\n  width: 100%;\n}\n\n.ui-select::ng-deep .mdl-textfield {\n  padding: 20px 0 30px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5pcy9ody1ob3N0aW5nLWFwcC9zcmMvYXBwL2NyZWF0ZS1ob21ld29yay9jcmVhdGUtaG9tZXdvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NyZWF0ZS1ob21ld29yay9jcmVhdGUtaG9tZXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FER0U7RUFDRSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDREo7O0FESUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNGSjs7QURLRTtFQUNFLGdCQUFBO0FDSEo7O0FET0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDSkY7O0FET0E7RUFDRSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDSkY7O0FET0E7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1ob21ld29yay9jcmVhdGUtaG9tZXdvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLWhvbWV3b3JrLW1vZGFsIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDI2O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IGNhbGMoNTAlIC0gMjUwcHgpO1xufVxuXG4uY3JlYXRlLWhvbWV3b3JrLW1vZGFsLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICAmX19zZWxlY3QsICZfX2J1dHRvbiB7XG4gICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xuICB9XG5cbiAgJl9faW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICZfX2ZpbGVuYW1lIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxuXG4gICZfX2lucHV0OjpuZy1kZWVwIGlucHV0IHtcbiAgICBtaW4td2lkdGg6IDQyMHB4O1xuICB9XG59XG5cbi51aS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4udWktaW5wdXQ6Om5nLWRlZXAgLmZpbGUtbGFiZWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9jb21wb25lbnRzL3N2Zy91cGxvYWQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDM4cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDk4JTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVpLXNlbGVjdDo6bmctZGVlcCAubWRsLXRleHRmaWVsZCB7XG4gIHBhZGRpbmc6IDIwcHggMCAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIi5jcmVhdGUtaG9tZXdvcmstbW9kYWwge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogY2FsYyg1MCUgLSAyNTBweCk7XG59XG5cbi5jcmVhdGUtaG9tZXdvcmstbW9kYWwtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubW9kYWwtY29udGVudF9fc2VsZWN0LCAubW9kYWwtY29udGVudF9fYnV0dG9uIHtcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xufVxuLm1vZGFsLWNvbnRlbnRfX2lucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1vZGFsLWNvbnRlbnRfX2ZpbGVuYW1lIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLm1vZGFsLWNvbnRlbnRfX2lucHV0OjpuZy1kZWVwIGlucHV0IHtcbiAgbWluLXdpZHRoOiA0MjBweDtcbn1cblxuLnVpLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi51aS1pbnB1dDo6bmctZGVlcCAuZmlsZS1sYWJlbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2NvbXBvbmVudHMvc3ZnL3VwbG9hZC5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMzhweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTglO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udWktc2VsZWN0OjpuZy1kZWVwIC5tZGwtdGV4dGZpZWxkIHtcbiAgcGFkZGluZzogMjBweCAwIDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/create-homework/create-homework.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/create-homework/create-homework.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateHomeworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHomeworkComponent", function() { return CreateHomeworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-sha256 */ "./node_modules/js-sha256/src/sha256.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_documents_actions_documents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/documents/actions.documents */ "./src/store/documents/actions.documents.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");







// @ts-ignore
const { themes } = __webpack_require__(/*! ../../../app.json */ "./app.json");
let CreateHomeworkComponent = class CreateHomeworkComponent {
    constructor(afs, store, storage) {
        this.afs = afs;
        this.store = store;
        this.storage = storage;
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.profileUrl = null;
        this.topicsFullList = themes;
        this.fileName = '';
        this.downloadUrl = '';
        this.selectedTopic = '';
        this.userId = '';
        this.store
            .select('auth')
            .pipe()
            .subscribe(data => {
            this.userId = data.userData.id;
        });
        this.userDoc = afs.doc(`homeworks/group2`);
        this.itemsCollection = this.userDoc.collection(this.userId);
        this.items = this.itemsCollection.valueChanges();
    }
    get topics() {
        return this.topicsFullList.map(topic => topic.topicName);
    }
    get topicNumber() {
        const topic = this.topicsFullList.find(item => item.topicName === this.selectedTopic);
        return topic.topicNumber;
    }
    get homeworkModel() {
        return {
            file: this.downloadUrl,
            fileName: this.fileName,
            date: this.dateCreated,
            status: 'unchecked',
            comment: '',
            rate: 0,
            teacherFile: '',
            number: this.topicNumber,
            userId: this.userId,
            topic: this.selectedTopic,
        };
    }
    get dateCreated() {
        const date = new Date();
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    }
    submitHomework() {
        // Persist a document id
        const item = this.homeworkModel;
        this.itemsCollection.add(item);
        this.store.dispatch(new _store_documents_actions_documents__WEBPACK_IMPORTED_MODULE_5__["DocumentsAddAction"](this.homeworkModel));
        this.closeModalHandler();
    }
    handleSelect(data) {
        this.selectedTopic = data.value;
    }
    uploadFile(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!event.target)
                return;
            const file = event.target.files[0];
            this.fileName = file.name;
            const filePath = Object(js_sha256__WEBPACK_IMPORTED_MODULE_3__["sha256"])(file.name);
            this.storage
                .ref(`files/${filePath}`)
                .put(file)
                .then(data => {
                this.storage
                    .ref(data.metadata.fullPath)
                    .getDownloadURL().subscribe((url) => this.downloadUrl = url);
            });
        });
    }
    closeModalHandler() {
        this.closeModal.emit(true);
    }
};
CreateHomeworkComponent.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateHomeworkComponent.prototype, "someData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CreateHomeworkComponent.prototype, "closeModal", void 0);
CreateHomeworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-homework',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-homework.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-homework/create-homework.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-homework.component.scss */ "./src/app/create-homework/create-homework.component.scss")).default]
    })
], CreateHomeworkComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #0006f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login__error {\n  position: absolute;\n  right: 0;\n  color: #ffdc03;\n  font-size: 12px;\n}\n.login__error_general {\n  left: 0;\n  right: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 20px auto;\n}\n.login__input-wrapper {\n  position: relative;\n}\n.login__buttons-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 30px auto 0;\n}\n.login__logo {\n  width: 200px;\n  margin: auto;\n  display: block;\n}\n.login__wrapper {\n  min-width: 500px;\n}\n.login__email::ng-deep input, .login__password::ng-deep input, .login__name::ng-deep input {\n  background-color: transparent;\n  color: #fff !important;\n  font-size: 16px;\n  border: none;\n  border-bottom: 1px solid #1464f6;\n  width: 100%;\n  display: block;\n  padding: 20px 0 10px;\n  box-sizing: border-box;\n  outline: none;\n}\n.login__email::ng-deep input:-webkit-autofill, .login__password::ng-deep input:-webkit-autofill, .login__name::ng-deep input:-webkit-autofill {\n  -webkit-text-fill-color: #fff;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px #0006f5;\n}\n.login__email::ng-deep input::-webkit-input-placeholder, .login__password::ng-deep input::-webkit-input-placeholder, .login__name::ng-deep input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.25);\n}\n.login__email::ng-deep input::-moz-placeholder, .login__password::ng-deep input::-moz-placeholder, .login__name::ng-deep input::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.25);\n}\n.login__email::ng-deep input::-ms-input-placeholder, .login__password::ng-deep input::-ms-input-placeholder, .login__name::ng-deep input::-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.25);\n}\n.login__email::ng-deep input::placeholder, .login__password::ng-deep input::placeholder, .login__name::ng-deep input::placeholder {\n  color: rgba(255, 255, 255, 0.25);\n}\n.login__email::ng-deep input:focus, .login__password::ng-deep input:focus, .login__name::ng-deep input:focus {\n  border-color: #fff;\n}\n.login__button::ng-deep button {\n  background-color: #ffdc00;\n  border: none;\n  border-radius: 30px;\n  padding: 10px 50px;\n  display: block;\n}\n.login .signup-button::ng-deep button {\n  background-color: transparent;\n  border: 2px solid #ffdc00;\n  color: #ffdc00;\n}\n.login .signup-button {\n  margin: 0 20px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5pcy9ody1ob3N0aW5nLWFwcC9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0UsT0FBQTtFQUNBLFFBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtBQ0NOO0FER0U7RUFDRSxrQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRko7QURLRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0hKO0FETUU7RUFDRSxnQkFBQTtBQ0pKO0FET0U7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNMSjtBRE1JO0VBQ0UsNkJBQUE7RUFDQSxxRkFBQTtBQ0pOO0FETUk7RUFDRSxnQ0FBQTtBQ0pOO0FER0k7RUFDRSxnQ0FBQTtBQ0pOO0FER0k7RUFDRSxnQ0FBQTtBQ0pOO0FER0k7RUFDRSxnQ0FBQTtBQ0pOO0FETUk7RUFDRSxrQkFBQTtBQ0pOO0FEUUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ05KO0FEU0U7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ1BKO0FEVUU7RUFDRSxrQkFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA2ZjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICZfX2Vycm9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICNmZmRjMDM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgJl9nZW5lcmFsIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIH1cbiAgfVxuXG4gICZfX2lucHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gICZfX2J1dHRvbnMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gIH1cblxuICAmX19sb2dvIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgJl9fd3JhcHBlciB7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgfVxuXG4gICZfX2VtYWlsOjpuZy1kZWVwIGlucHV0LCAmX19wYXNzd29yZDo6bmctZGVlcCBpbnB1dCwgJl9fbmFtZTo6bmctZGVlcCBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTQ2NGY2O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDIwcHggMCAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZmY7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCBpbnNldCAwIDAgMCAxMDBweCAjMDAwNmY1O1xuICAgIH1cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICB9XG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG5cbiAgJl9fYnV0dG9uOjpuZy1kZWVwIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGMwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc2lnbnVwLWJ1dHRvbjo6bmctZGVlcCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmRjMDA7XG4gICAgY29sb3I6ICNmZmRjMDA7XG4gIH1cblxuICAuc2lnbnVwLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDIwcHggMCAwO1xuICB9XG5cbn1cbiIsIi5sb2dpbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDZmNTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW5fX2Vycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgY29sb3I6ICNmZmRjMDM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5sb2dpbl9fZXJyb3JfZ2VuZXJhbCB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuLmxvZ2luX19pbnB1dC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvZ2luX19idXR0b25zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbn1cbi5sb2dpbl9fbG9nbyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5sb2dpbl9fd3JhcHBlciB7XG4gIG1pbi13aWR0aDogNTAwcHg7XG59XG4ubG9naW5fX2VtYWlsOjpuZy1kZWVwIGlucHV0LCAubG9naW5fX3Bhc3N3b3JkOjpuZy1kZWVwIGlucHV0LCAubG9naW5fX25hbWU6Om5nLWRlZXAgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTQ2NGY2O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHggMCAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmxvZ2luX19lbWFpbDo6bmctZGVlcCBpbnB1dDotd2Via2l0LWF1dG9maWxsLCAubG9naW5fX3Bhc3N3b3JkOjpuZy1kZWVwIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsIC5sb2dpbl9fbmFtZTo6bmctZGVlcCBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIGluc2V0IDAgMCAwIDEwMHB4ICMwMDA2ZjU7XG59XG4ubG9naW5fX2VtYWlsOjpuZy1kZWVwIGlucHV0OjpwbGFjZWhvbGRlciwgLmxvZ2luX19wYXNzd29yZDo6bmctZGVlcCBpbnB1dDo6cGxhY2Vob2xkZXIsIC5sb2dpbl9fbmFtZTo6bmctZGVlcCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbn1cbi5sb2dpbl9fZW1haWw6Om5nLWRlZXAgaW5wdXQ6Zm9jdXMsIC5sb2dpbl9fcGFzc3dvcmQ6Om5nLWRlZXAgaW5wdXQ6Zm9jdXMsIC5sb2dpbl9fbmFtZTo6bmctZGVlcCBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cbi5sb2dpbl9fYnV0dG9uOjpuZy1kZWVwIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRjMDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5sb2dpbiAuc2lnbnVwLWJ1dHRvbjo6bmctZGVlcCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZGMwMDtcbiAgY29sb3I6ICNmZmRjMDA7XG59XG4ubG9naW4gLnNpZ251cC1idXR0b24ge1xuICBtYXJnaW46IDAgMjBweCAwIDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var passworder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passworder */ "./node_modules/passworder/lib/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_auth_actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/auth/actions.auth */ "./src/store/auth/actions.auth.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let LoginComponent = class LoginComponent {
    constructor(store, authSrvice, db, router) {
        this.store = store;
        this.authSrvice = authSrvice;
        this.db = db;
        this.router = router;
        this.email = '';
        this.password = '';
        this.isLogin = true;
        this.userName = '';
        this.shouldValidateName = false;
        this.shouldValidatePassword = false;
        this.shouldValidateEmail = false;
        this.error = '';
    }
    passwordError() {
        return passworder__WEBPACK_IMPORTED_MODULE_2__["default"].validate(this.password).warning;
    }
    get isLoginButtonActive() {
        if (this.isLogin)
            return this.validateEmail && this.validatePassword;
        return this.validateEmail && this.validatePassword && this.validateName;
    }
    get validateName() {
        return this.userName.length;
    }
    get validateEmail() {
        return /^(([^а-яА-Яыъ<>()[\]\\.,;:\s@\"]+(\.[^а-яА-Яыъ<>()[\]\\.,;:\s@\"]+)*)|(\"[a-zA-Z\-0-9]+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email);
    }
    get validatePassword() {
        return passworder__WEBPACK_IMPORTED_MODULE_2__["default"].validate(this.password).status;
    }
    login() {
        this.authSrvice.login(this.email, this.password).then((data) => {
            if (data.code) {
                this.error = data.message;
            }
            else {
                // @ts-ignore
                const { user } = data;
                const userData = {
                    refreshToken: user.refreshToken,
                    name: user.userName,
                    photo: user.photoUrl,
                    email: user.email,
                    role: this.email.includes('teacher') ? 'teacher' : 'student',
                    id: user.uid,
                };
                this.store.dispatch(new _store_auth_actions_auth__WEBPACK_IMPORTED_MODULE_4__["LoginAction"](userData));
                this.authSrvice.setAuthCookie(userData);
                if (this.authSrvice.userRole === 'student') {
                    this.router.navigate(['/student-panel']);
                }
                else {
                    this.router.navigate(['/teacher-panel']);
                }
            }
        });
    }
    resolveView() {
        this.isLogin = !this.isLogin;
    }
    signUp() {
        this.authSrvice.signUpNewUser(this.email, this.password).then((data) => {
            if (!data)
                return;
            const { user } = data;
            const userData = {
                refreshToken: user.refreshToken,
                // @ts-ignore
                name: user.userName || this.userName,
                // @ts-ignore
                photo: user.photoUrl || '',
                email: user.email,
                role: this.email.includes('teacher') ? 'teacher' : 'student',
                id: user.uid,
            };
            this.store.dispatch(new _store_auth_actions_auth__WEBPACK_IMPORTED_MODULE_4__["LoginAction"](userData));
            this.authSrvice.setAuthCookie(userData);
            const { refreshToken } = userData, dbData = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](userData, ["refreshToken"]);
            this.db.collection(_constants__WEBPACK_IMPORTED_MODULE_7__["PATHS"].USERS)
                .doc(_constants__WEBPACK_IMPORTED_MODULE_7__["PATHS"].GROUP)
                .collection(userData.role === 'student' ? _constants__WEBPACK_IMPORTED_MODULE_7__["PATHS"].STUDENTS : _constants__WEBPACK_IMPORTED_MODULE_7__["PATHS"].TEACHERS)
                .add(Object.assign({}, dbData));
        });
    }
    handleUserName(value) {
        if (typeof value === 'string')
            this.userName = value;
    }
    handleEmail(value) {
        if (typeof value === 'string')
            this.email = value;
    }
    handlePassword(value) {
        if (typeof value === 'string')
            this.password = value;
    }
    handleEnterKey(event) {
        if (event.keyCode === 13) {
            this.isLogin ? this.login() : this.signUp();
        }
    }
    ngOnInit() {
        passworder__WEBPACK_IMPORTED_MODULE_2__["default"].lengthErrorMessage = 'Password is too short';
        document.addEventListener('keypress', (event) => this.handleEnterKey(event));
    }
    ngOnDestroy() {
        document.removeEventListener('keypress', (event) => this.handleEnterKey(event), false);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/sheet-row/sheet-row.component.scss":
/*!****************************************************!*\
  !*** ./src/app/sheet-row/sheet-row.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  font-size: 13px;\n  padding: 10px 15px 10px;\n  border-bottom: 1px solid #e2e2e2;\n  min-height: 61px;\n  box-sizing: border-box;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.row:hover {\n  background-color: rgba(0, 6, 245, 0.01);\n}\n.row__item {\n  max-width: 190px;\n  align-items: center;\n  display: flex;\n  position: relative;\n}\n.row__buttons {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.rate {\n  text-align: center;\n}\n.comment {\n  word-break: break-all;\n}\n.active-comment {\n  position: absolute;\n  max-width: 300px;\n  box-sizing: border-box;\n  padding: 15px;\n  background: #fff;\n  z-index: 2;\n  box-shadow: 0px 4px 10px #00000026;\n  overflow: scroll;\n  max-height: 300px;\n  word-break: break-all;\n  top: 0;\n}\n.download-icon {\n  width: 17px;\n}\n.checked, .unchecked {\n  height: 15px;\n  width: 22px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: inline-block;\n  margin: 0 0 0 10px;\n}\n.checked {\n  background-image: url('checked.svg');\n}\n.unchecked {\n  background-image: url('unchecked.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5pcy9ody1ob3N0aW5nLWFwcC9zcmMvYXBwL3NoZWV0LXJvdy9zaGVldC1yb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWV0LXJvdy9zaGVldC1yb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDRjtBRENFO0VBQ0UsdUNBQUE7QUNDSjtBREdFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ0ZKO0FETUE7RUFDRSxrQkFBQTtBQ0hGO0FETUE7RUFDRSxxQkFBQTtBQ0hGO0FETUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxNQUFBO0FDSEY7QURNQTtFQUNFLFdBQUE7QUNIRjtBRE1BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLG9DQUFBO0FDSEY7QURNQTtFQUNFLHNDQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9zaGVldC1yb3cvc2hlZXQtcm93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xuICBtaW4taGVpZ2h0OiA2MXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDYsIDI0NSwgMC4wMSk7XG4gIH1cblxuXG4gICZfX2l0ZW0ge1xuICAgIG1heC13aWR0aDogMTkwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gICZfX2J1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLnJhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb21tZW50IHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uYWN0aXZlLWNvbW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDI7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMjY7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHRvcDogMDtcbn1cblxuLmRvd25sb2FkLWljb24ge1xuICB3aWR0aDogMTdweDtcbn1cblxuLmNoZWNrZWQsIC51bmNoZWNrZWQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAyMnB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xufVxuXG4uY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2NvbXBvbmVudHMvc3ZnL2NoZWNrZWQuc3ZnXCIpO1xufVxuXG4udW5jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vY29tcG9uZW50cy9zdmcvdW5jaGVja2VkLnN2Z1wiKTtcbn1cbiIsIi5yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTJlMjtcbiAgbWluLWhlaWdodDogNjFweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNiwgMjQ1LCAwLjAxKTtcbn1cbi5yb3dfX2l0ZW0ge1xuICBtYXgtd2lkdGg6IDE5MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucm93X19idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbW1lbnQge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5hY3RpdmUtY29tbWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogMjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAyNjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgdG9wOiAwO1xufVxuXG4uZG93bmxvYWQtaWNvbiB7XG4gIHdpZHRoOiAxN3B4O1xufVxuXG4uY2hlY2tlZCwgLnVuY2hlY2tlZCB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDIycHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDEwcHg7XG59XG5cbi5jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vY29tcG9uZW50cy9zdmcvY2hlY2tlZC5zdmdcIik7XG59XG5cbi51bmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9jb21wb25lbnRzL3N2Zy91bmNoZWNrZWQuc3ZnXCIpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sheet-row/sheet-row.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sheet-row/sheet-row.component.ts ***!
  \**************************************************/
/*! exports provided: SheetRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetRowComponent", function() { return SheetRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SheetRowComponent = class SheetRowComponent {
    constructor() {
        this.openEditModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isHovered = false;
    }
    get comment() {
        return !this.isHovered
            ? `${this.homework.comment.slice(0, 100)}...`
            : this.homework.comment;
    }
    toggleComment() {
        this.isHovered = !this.isHovered;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SheetRowComponent.prototype, "homework", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SheetRowComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SheetRowComponent.prototype, "openEditModal", void 0);
SheetRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sheet-row',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sheet-row.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sheet-row/sheet-row.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sheet-row.component.scss */ "./src/app/sheet-row/sheet-row.component.scss")).default]
    })
], SheetRowComponent);



/***/ }),

/***/ "./src/app/sheet/sheet.component.scss":
/*!********************************************!*\
  !*** ./src/app/sheet/sheet.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sheet-header {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  background-color: #e8e8e8;\n  font-weight: 600;\n  font-size: 13px;\n  padding: 10px 15px;\n  box-sizing: border-box;\n}\n\n.status-filter {\n  background-image: url('sort.svg');\n  height: 15px;\n  width: 15px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: inline-block;\n  margin: 0 0 0 5px;\n}\n\n.sort {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5pcy9ody1ob3N0aW5nLWFwcC9zcmMvYXBwL3NoZWV0L3NoZWV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVldC9zaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoZWV0L3NoZWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoZWV0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc3RhdHVzLWZpbHRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2NvbXBvbmVudHMvc3ZnL3NvcnQuc3ZnXCIpO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDAgMCA1cHg7XG59XG5cbi5zb3J0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLnNoZWV0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc3RhdHVzLWZpbHRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2NvbXBvbmVudHMvc3ZnL3NvcnQuc3ZnXCIpO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDAgMCA1cHg7XG59XG5cbi5zb3J0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sheet/sheet.component.ts":
/*!******************************************!*\
  !*** ./src/app/sheet/sheet.component.ts ***!
  \******************************************/
/*! exports provided: SheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetComponent", function() { return SheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");



let SheetComponent = class SheetComponent {
    constructor(store) {
        this.store = store;
        this.openEditModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.store
            .select('documents')
            .pipe()
            .subscribe(data => {
            this.documents = data.studentDocuments;
        });
    }
    openModal(data) {
        this.openEditModal.emit(data);
    }
    sort() {
        this.documents.sort((a, b) => {
            if (a.status < b.status)
                return -1;
            if (a.status > b.status)
                return 1;
            return 0;
        });
        console.log(this.documents);
    }
    ngOnInit() {
    }
};
SheetComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SheetComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SheetComponent.prototype, "openEditModal", void 0);
SheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sheet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sheet/sheet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sheet.component.scss */ "./src/app/sheet/sheet.component.scss")).default]
    })
], SheetComponent);



/***/ }),

/***/ "./src/app/student-edit-modal/student-edit-modal.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/student-edit-modal/student-edit-modal.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-homework-modal {\n  margin: 0 auto;\n  max-width: 600px;\n  width: 100%;\n  background-color: #ffffff;\n  box-shadow: 0px 4px 10px #00000026;\n}\n\n.edit-homework-modal-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-content__select, .modal-content__button {\n  margin: 30px 0 0 0;\n}\n\n.modal-content__field {\n  padding: 10px 10px;\n  border-bottom: 1px solid #dadada;\n  display: flex;\n  justify-content: space-between;\n}\n\n.modal-content__field-rate {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-content__field-rate_rates {\n  padding: 10px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  background: #f2f2f2;\n  justify-content: center;\n  margin: 0 20px 0 0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.modal-content__comment_wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0 0 0;\n}\n\n.modal-content__comment {\n  margin: 20px 0;\n}\n\n.modal-content__comment_title {\n  display: flex;\n  align-items: center;\n}\n\n.modal-content__comment_text {\n  padding: 0 20px;\n  background-color: rgba(0, 48, 242, 0.25);\n  min-width: 50%;\n  min-height: 100px;\n  display: block;\n  border-radius: 10px;\n  width: 100%;\n  word-break: break-all;\n  overflow: scroll;\n  max-height: 250px;\n}\n\n.modal-content__comment_text:before {\n  content: \"\";\n  height: 20px;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  display: block;\n  background: #bdcdfd;\n  top: 0;\n}\n\n.modal-content__comment_text:after {\n  content: \"\";\n  height: 20px;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  display: block;\n  background: #bdcdfd;\n  bottom: 0;\n}\n\n.modal-content__comment_rate {\n  font-size: 200px;\n  font-weight: 900;\n  color: #f2f2f2;\n}\n\n.modal-content__input {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  background: #f2f2f2;\n  border-radius: 5px;\n  padding: 0 0 0 10px;\n  cursor: pointer;\n  margin: 20px 0 0 0;\n  transition: 0.3s;\n}\n\n.modal-content__input:hover {\n  background: #e2e2e2;\n}\n\n.modal-content__filename {\n  max-width: 400px;\n  width: 100%;\n  padding: 10px 0;\n}\n\n.modal-content__input::ng-deep input {\n  min-width: 420px;\n}\n\n.ui-input {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.ui-input::ng-deep .file-label {\n  background-image: url('upload.svg');\n  background-size: 35px;\n  background-position: 96%;\n  background-repeat: no-repeat;\n  padding: 20px 30px;\n  display: block;\n  cursor: pointer;\n  width: 100%;\n}\n\n.ui-input::ng-deep .radio-input {\n  visibility: hidden;\n}\n\n.ui-input::ng-deep .radio-label {\n  background-image: url('download.svg');\n  background-repeat: no-repeat;\n  background-size: 14%;\n  background-position: right center;\n  margin: 0 10px 0 0;\n  width: 100%;\n  height: 40px;\n}\n\n.download-icon::ng-deep .file-label {\n  background-image: url('download.svg');\n  margin: 0 10px 0 0;\n}\n\n.bold-font {\n  font-weight: 700;\n}\n\n.delete-button {\n  font-size: 12px;\n  color: #0006f5;\n  display: flex;\n  align-items: center;\n  margin: 20px 0 0 0;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.delete-button:hover {\n  opacity: 0.8;\n}\n\n.trash-icon {\n  background-image: url('trash.svg');\n  height: 15px;\n  width: 15px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: inline-block;\n  margin: 0 0 0 5px;\n}\n\n.status-icon {\n  height: 15px;\n  width: 22px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: inline-block;\n  margin: 0 0 0 5px;\n}\n\n.edit-button, .checkbox-button {\n  height: 15px;\n  width: 19px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: inline-block;\n  margin: 0 0 0 5px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.edit-button:hover, .checkbox-button:hover {\n  opacity: 0.7;\n}\n\n.edit-button {\n  background-image: url('edit.svg');\n}\n\n.checkbox-button {\n  background-image: url('checkbox.svg');\n}\n\n.comment-textarea {\n  background: transparent;\n  border: none;\n  resize: none;\n  width: 100%;\n  display: block;\n  padding: 0;\n  font-size: 14px;\n  line-height: 20px;\n  max-height: 250px;\n  height: 150px;\n}\n\n.selected-rate {\n  background-color: lightseagreen;\n}\n\n.status-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5pcy9ody1ob3N0aW5nLWFwcC9zcmMvYXBwL3N0dWRlbnQtZWRpdC1tb2RhbC9zdHVkZW50LWVkaXQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0dWRlbnQtZWRpdC1tb2RhbC9zdHVkZW50LWVkaXQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FER0U7RUFDRSxrQkFBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0RKOztBRElFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURJSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZOOztBRE1FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE9FO0VBQ0UsY0FBQTtBQ0xKOztBRE9JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDTE47O0FEUUk7RUFDRSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTk47O0FEUU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtBQ05SOztBRFNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNQUjs7QURXSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDVE47O0FEYUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDWEo7O0FEYUk7RUFDRSxtQkFBQTtBQ1hOOztBRGVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2JKOztBRGdCRTtFQUNFLGdCQUFBO0FDZEo7O0FEa0JBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ2ZGOztBRGtCQTtFQUNHLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNmSDs7QURrQkE7RUFDRSxrQkFBQTtBQ2ZGOztBRGtCQTtFQUNFLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2ZGOztBRGtCQTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7QUNmRjs7QURtQkE7RUFDRSxnQkFBQTtBQ2hCRjs7QURtQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDaEJGOztBRGtCRTtFQUNFLFlBQUE7QUNoQko7O0FEb0JBO0VBQ0Usa0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDakJGOztBRG9CQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2pCRjs7QURtQkU7RUFDRSxZQUFBO0FDakJKOztBRHFCQTtFQUNFLGlDQUFBO0FDbEJGOztBRHFCQTtFQUNFLHFDQUFBO0FDbEJGOztBRHFCQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsK0JBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNsQkYiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50LWVkaXQtbW9kYWwvc3R1ZGVudC1lZGl0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtaG9tZXdvcmstbW9kYWwge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMjY7XG59XG5cbi5lZGl0LWhvbWV3b3JrLW1vZGFsLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICAmX19zZWxlY3QsICZfX2J1dHRvbiB7XG4gICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xuICB9XG5cbiAgJl9fZmllbGQge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZGFkYTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gICZfX2ZpZWxkLXJhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICZfcmF0ZXMge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgMjBweCAwIDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fY29tbWVudF93cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgfVxuXG4gICZfX2NvbW1lbnQge1xuICAgIG1hcmdpbjogMjBweCAwO1xuXG4gICAgJl90aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX3RleHQge1xuICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA0OCwgMjQyLCAwLjI1KTtcbiAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogI2JkY2RmZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiZGNkZmQ7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX3JhdGUge1xuICAgICAgZm9udC1zaXplOiAyMDBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICBjb2xvcjogI2YyZjJmMjtcbiAgICB9XG4gIH1cblxuICAmX19pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gICAgfVxuICB9XG5cbiAgJl9fZmlsZW5hbWUge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG5cbiAgJl9faW5wdXQ6Om5nLWRlZXAgaW5wdXQge1xuICAgIG1pbi13aWR0aDogNDIwcHg7XG4gIH1cbn1cblxuLnVpLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi51aS1pbnB1dDo6bmctZGVlcCAuZmlsZS1sYWJlbCB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9jb21wb25lbnRzL3N2Zy91cGxvYWQuc3ZnXCIpO1xuICAgYmFja2dyb3VuZC1zaXplOiAzNXB4O1xuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTYlO1xuICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgY3Vyc29yOiBwb2ludGVyO1xuICAgd2lkdGg6IDEwMCU7XG4gfVxuXG4udWktaW5wdXQ6Om5nLWRlZXAgLnJhZGlvLWlucHV0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4udWktaW5wdXQ6Om5nLWRlZXAgLnJhZGlvLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vY29tcG9uZW50cy9zdmcvZG93bmxvYWQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE0JTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5kb3dubG9hZC1pY29uOjpuZy1kZWVwIC5maWxlLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vY29tcG9uZW50cy9zdmcvZG93bmxvYWQuc3ZnXCIpO1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG59XG5cblxuLmJvbGQtZm9udCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwMDZmNTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IC4zcztcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuODtcbiAgfVxufVxuXG4udHJhc2gtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2NvbXBvbmVudHMvc3ZnL3RyYXNoLnN2Z1wiKTtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwIDAgNXB4O1xufVxuXG4uc3RhdHVzLWljb24ge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAyMnB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDAgMCA1cHg7XG59XG5cbi5lZGl0LWJ1dHRvbiwgLmNoZWNrYm94LWJ1dHRvbiB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE5cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAuM3M7XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogLjc7XG4gIH1cbn1cblxuLmVkaXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vY29tcG9uZW50cy9zdmcvZWRpdC5zdmdcIik7XG59XG5cbi5jaGVja2JveC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9jb21wb25lbnRzL3N2Zy9jaGVja2JveC5zdmdcIik7XG59XG5cbi5jb21tZW50LXRleHRhcmVhIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uc2VsZWN0ZWQtcmF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XG59XG5cbi5zdGF0dXMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLmVkaXQtaG9tZXdvcmstbW9kYWwge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMjY7XG59XG5cbi5lZGl0LWhvbWV3b3JrLW1vZGFsLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWNvbnRlbnRfX3NlbGVjdCwgLm1vZGFsLWNvbnRlbnRfX2J1dHRvbiB7XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcbn1cbi5tb2RhbC1jb250ZW50X19maWVsZCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYWRhZGE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tb2RhbC1jb250ZW50X19maWVsZC1yYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubW9kYWwtY29udGVudF9fZmllbGQtcmF0ZV9yYXRlcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgMjBweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1vZGFsLWNvbnRlbnRfX2NvbW1lbnRfd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xufVxuLm1vZGFsLWNvbnRlbnRfX2NvbW1lbnQge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5tb2RhbC1jb250ZW50X19jb21tZW50X3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tb2RhbC1jb250ZW50X19jb21tZW50X3RleHQge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNDgsIDI0MiwgMC4yNSk7XG4gIG1pbi13aWR0aDogNTAlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xufVxuLm1vZGFsLWNvbnRlbnRfX2NvbW1lbnRfdGV4dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2JkY2RmZDtcbiAgdG9wOiAwO1xufVxuLm1vZGFsLWNvbnRlbnRfX2NvbW1lbnRfdGV4dDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjYmRjZGZkO1xuICBib3R0b206IDA7XG59XG4ubW9kYWwtY29udGVudF9fY29tbWVudF9yYXRlIHtcbiAgZm9udC1zaXplOiAyMDBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICNmMmYyZjI7XG59XG4ubW9kYWwtY29udGVudF9faW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5tb2RhbC1jb250ZW50X19pbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XG59XG4ubW9kYWwtY29udGVudF9fZmlsZW5hbWUge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLm1vZGFsLWNvbnRlbnRfX2lucHV0OjpuZy1kZWVwIGlucHV0IHtcbiAgbWluLXdpZHRoOiA0MjBweDtcbn1cblxuLnVpLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi51aS1pbnB1dDo6bmctZGVlcCAuZmlsZS1sYWJlbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2NvbXBvbmVudHMvc3ZnL3VwbG9hZC5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMzVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTYlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udWktaW5wdXQ6Om5nLWRlZXAgLnJhZGlvLWlucHV0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4udWktaW5wdXQ6Om5nLWRlZXAgLnJhZGlvLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vY29tcG9uZW50cy9zdmcvZG93bmxvYWQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE0JTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5kb3dubG9hZC1pY29uOjpuZy1kZWVwIC5maWxlLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vY29tcG9uZW50cy9zdmcvZG93bmxvYWQuc3ZnXCIpO1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG59XG5cbi5ib2xkLWZvbnQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMDA2ZjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmRlbGV0ZS1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi50cmFzaC1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vY29tcG9uZW50cy9zdmcvdHJhc2guc3ZnXCIpO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDAgMCA1cHg7XG59XG5cbi5zdGF0dXMtaWNvbiB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDIycHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDVweDtcbn1cblxuLmVkaXQtYnV0dG9uLCAuY2hlY2tib3gtYnV0dG9uIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTlweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwIDAgNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uZWRpdC1idXR0b246aG92ZXIsIC5jaGVja2JveC1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5lZGl0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2NvbXBvbmVudHMvc3ZnL2VkaXQuc3ZnXCIpO1xufVxuXG4uY2hlY2tib3gtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vY29tcG9uZW50cy9zdmcvY2hlY2tib3guc3ZnXCIpO1xufVxuXG4uY29tbWVudC10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLnNlbGVjdGVkLXJhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xufVxuXG4uc3RhdHVzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/student-edit-modal/student-edit-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/student-edit-modal/student-edit-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentEditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEditModalComponent", function() { return StudentEditModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-sha256 */ "./node_modules/js-sha256/src/sha256.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");







let StudentEditModalComponent = class StudentEditModalComponent {
    constructor(storage, db, store) {
        this.storage = storage;
        this.db = db;
        this.store = store;
        this.closeEditModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileName = '';
        this.downloadUrl = '';
        this.id = '';
        this.comment = '';
        this.isEditingComment = false;
        this.rates = [0, 1, 2, 3, 4, 5];
    }
    get date() {
        const date = new Date();
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    }
    get checkedIcon() {
        return `url(${this.editingHomework.status}.svg)`;
    }
    get isStudent() {
        return this.mode === 'student';
    }
    get downloadLink() {
        return this.isStudent ? this.editingHomework.file : this.editingHomework.teacherFile;
    }
    downloadFile() {
        window.location.href = this.downloadLink;
    }
    updateComment() {
        this.homeworksCollectionRef.doc(this.editingHomework.id).update({ comment: this.comment });
    }
    editComment() {
        if (this.isEditingComment)
            this.updateComment();
        if (this.editingHomework.comment.length)
            this.comment = this.editingHomework.comment;
        this.isEditingComment = !this.isEditingComment;
    }
    closeModalHandler() {
        this.closeEditModal.emit(null);
    }
    updateStatus() {
        this.homeworksCollectionRef.doc(this.editingHomework.id).update({ status: 'checked' });
    }
    uploadFile(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!event.target)
                return;
            const file = event.target.files[0];
            this.fileName = file.name;
            const filePath = Object(js_sha256__WEBPACK_IMPORTED_MODULE_2__["sha256"])(file.name);
            const update = () => {
                this.homeworksCollectionRef
                    .doc(this.editingHomework.id)
                    .update({
                    file: this.downloadUrl,
                    date: this.date,
                    fileName: this.fileName,
                    status: 'unchecked'
                });
            };
            const updateTeacher = () => {
                this.homeworksCollectionRef
                    .doc(this.editingHomework.id)
                    .update({
                    teacherFile: this.downloadUrl,
                    teacherFilename: this.fileName,
                    date: this.date,
                });
            };
            this.storage
                .ref(`files/${filePath}`)
                .put(file)
                .then(data => {
                this.storage
                    .ref(data.metadata.fullPath)
                    .getDownloadURL()
                    .subscribe((url) => {
                    this.downloadUrl = url;
                    this.mode === 'student' ? update() : updateTeacher();
                });
            });
        });
    }
    handleRate(rate) {
        this.homeworksCollectionRef
            .doc(this.editingHomework.id)
            .update({
            rate,
            status: 'checked'
        });
    }
    deleteHomework() {
        this.homeworksCollectionRef.doc(this.editingHomework.id).delete();
        this.closeEditModal.emit(null);
    }
    ngOnInit() {
        this.homeworksCollectionRef = this.db.collection(_constants__WEBPACK_IMPORTED_MODULE_4__["PATHS"].HOMEWORKS)
            .doc(_constants__WEBPACK_IMPORTED_MODULE_4__["PATHS"].GROUP)
            .collection(this.editingHomework.userId);
    }
};
StudentEditModalComponent.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StudentEditModalComponent.prototype, "editingHomework", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StudentEditModalComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], StudentEditModalComponent.prototype, "closeEditModal", void 0);
StudentEditModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-edit-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-edit-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-edit-modal/student-edit-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-edit-modal.component.scss */ "./src/app/student-edit-modal/student-edit-modal.component.scss")).default]
    })
], StudentEditModalComponent);



/***/ }),

/***/ "./src/app/student-panel/student-panel.component.scss":
/*!************************************************************!*\
  !*** ./src/app/student-panel/student-panel.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation {\n  display: flex;\n  justify-content: space-between;\n}\n\n.avarage-rate {\n  font-size: 13px;\n  font-weight: 600;\n  padding: 8px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n\n.avarage-rate__number {\n  color: #fff;\n  border-radius: 50%;\n  font-size: 12px;\n  display: flex;\n  width: 20px;\n  height: 20px;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5pcy9ody1ob3N0aW5nLWFwcC9zcmMvYXBwL3N0dWRlbnQtcGFuZWwvc3R1ZGVudC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3R1ZGVudC1wYW5lbC9zdHVkZW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC1wYW5lbC9zdHVkZW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hdmFyYWdlLXJhdGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICZfX251bWJlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCAwIDAgMTBweDtcblxuICB9XG59XG4iLCIubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmF2YXJhZ2UtcmF0ZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXZhcmFnZS1yYXRlX19udW1iZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgMCAwIDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/student-panel/student-panel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/student-panel/student-panel.component.ts ***!
  \**********************************************************/
/*! exports provided: StudentPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPanelComponent", function() { return StudentPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");



let StudentPanelComponent = class StudentPanelComponent {
    constructor(store) {
        this.store = store;
        this.rateColors = {
            green: '#4ACF23',
            orange: '#FFC13D',
            gray: '#D1D1D1',
            red: '#FF2323',
        };
        this.isPopupVisible = false;
        this.isEditPopupVisible = false;
        this.editHomeworkNumber = null;
        this.documents = [];
        this.store
            .select('documents')
            .pipe()
            .subscribe(data => {
            this.documents = data.studentDocuments;
        });
    }
    get buttonColor() {
        if (this.averageRate === 5) {
            return this.rateColors.green;
        }
        if (this.averageRate >= 4 && this.averageRate < 5) {
            return this.rateColors.orange;
        }
        if (this.averageRate >= 3 && this.averageRate < 4) {
            return this.rateColors.gray;
        }
        if (this.averageRate >= 2 && this.averageRate < 3) {
            return this.rateColors.red;
        }
    }
    get averageRate() {
        const rates = this.documents
            .filter((document) => document.rate !== 0)
            .map((document) => document.rate);
        const avarage = rates.reduce((sum, current) => sum + current, 0);
        if (avarage === 0)
            return 0;
        return avarage / rates.length;
    }
    get editingHomework() {
        if (this.editHomeworkNumber) {
            return this.documents.find(document => document.number === this.editHomeworkNumber);
        }
        return null;
    }
    openModal() {
        this.isPopupVisible = !this.isPopupVisible;
    }
    openEditModal(data) {
        this.editHomeworkNumber = data;
        this.isEditPopupVisible = true;
    }
    closeEditModal() {
        this.isEditPopupVisible = false;
    }
    ngOnInit() {
        console.log(this.modal);
    }
};
StudentPanelComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('createModal', { static: true })
], StudentPanelComponent.prototype, "modal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StudentPanelComponent.prototype, "mode", void 0);
StudentPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-panel/student-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-panel.component.scss */ "./src/app/student-panel/student-panel.component.scss")).default]
    })
], StudentPanelComponent);



/***/ }),

/***/ "./src/app/teacher-panel/teacher-panel.component.scss":
/*!************************************************************!*\
  !*** ./src/app/teacher-panel/teacher-panel.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avarage-rate {\n  font-size: 13px;\n  font-weight: 600;\n  padding: 8px;\n  margin: 0;\n  background-color: #e8e8e8;\n  display: flex;\n  align-items: center;\n}\n.avarage-rate__number {\n  color: #fff;\n  border-radius: 50%;\n  font-size: 12px;\n  display: flex;\n  width: 20px;\n  height: 20px;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0 0 10px;\n}\n.navigation {\n  height: calc(100vh - 60px);\n  background: #fff;\n  border-right: 1px solid #f2f2f2;\n}\n.student {\n  padding: 20px;\n  box-sizing: border-box;\n  font-family: Montserrat, sans-serif;\n  border-bottom: 1px solid #f2f2f2;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 20px;\n  transition: 0.3s;\n  cursor: pointer;\n  max-height: 61px;\n}\n.student:hover {\n  background: #f2f2f2;\n}\n.student__name {\n  z-index: 3;\n  position: relative;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.student__selected {\n  height: 8px;\n  background-color: rgba(0, 6, 245, 0.2);\n  width: 100%;\n  display: block;\n  position: relative;\n  top: -8px;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5pcy9ody1ob3N0aW5nLWFwcC9zcmMvYXBwL3RlYWNoZXItcGFuZWwvdGVhY2hlci1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGVhY2hlci1wYW5lbC90ZWFjaGVyLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURJQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0RGO0FESUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RGO0FER0U7RUFDRSxtQkFBQTtBQ0RKO0FESUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDRko7QURLRTtFQUNFLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvdGVhY2hlci1wYW5lbC90ZWFjaGVyLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXJhZ2UtcmF0ZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJl9fbnVtYmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xuXG4gIH1cbn1cblxuLm5hdmlnYXRpb24ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyZjJmMjtcbn1cblxuLnN0dWRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0cmFuc2l0aW9uOiAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWF4LWhlaWdodDogNjFweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICB9XG5cbiAgJl9fbmFtZSB7XG4gICAgei1pbmRleDogMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB9XG5cbiAgJl9fc2VsZWN0ZWQge1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNiwgMjQ1LCAwLjIpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC04cHg7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbn1cbiIsIi5hdmFyYWdlLXJhdGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmF2YXJhZ2UtcmF0ZV9fbnVtYmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG4uc3R1ZGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWF4LWhlaWdodDogNjFweDtcbn1cbi5zdHVkZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cbi5zdHVkZW50X19uYW1lIHtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnN0dWRlbnRfX3NlbGVjdGVkIHtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNiwgMjQ1LCAwLjIpO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtOHB4O1xuICB6LWluZGV4OiAtMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/teacher-panel/teacher-panel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/teacher-panel/teacher-panel.component.ts ***!
  \**********************************************************/
/*! exports provided: TeacherPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherPanelComponent", function() { return TeacherPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _store_documents_actions_documents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/documents/actions.documents */ "./src/store/documents/actions.documents.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");






let TeacherPanelComponent = class TeacherPanelComponent {
    constructor(store, db) {
        this.store = store;
        this.db = db;
        this.rateColors = {
            green: '#4ACF23',
            orange: '#FFC13D',
            gray: '#D1D1D1',
            red: '#FF2323',
        };
        this.selectedValue = '';
        this.isEditPopupVisible = false;
        this.editHomeworkNumber = null;
        this.documents = [];
        this.store
            .select('documents')
            .pipe()
            .subscribe(data => {
            this.documents = data.studentDocuments;
        });
    }
    get studentNames() {
        return this.students.map(student => student.name);
    }
    get editingHomework() {
        if (this.editHomeworkNumber) {
            return this.documents.find(document => document.number === this.editHomeworkNumber);
        }
        return null;
    }
    get averageRate() {
        const rates = this.documents
            .filter((document) => document.rate !== 0)
            .map((document) => document.rate);
        const avarage = rates.reduce((sum, current) => sum + current, 0);
        if (avarage === 0)
            return 0;
        return avarage / rates.length;
    }
    requestUserData(value) {
        const id = this.students.find(student => student.name === value).id;
        this.homeworksCollectionRef = this.db.collection(_constants__WEBPACK_IMPORTED_MODULE_2__["PATHS"].HOMEWORKS)
            .doc(_constants__WEBPACK_IMPORTED_MODULE_2__["PATHS"].GROUP)
            .collection(id);
        this.homeworksCollectionRef
            .snapshotChanges()
            .pipe()
            .subscribe((data) => {
            const idDoc = data.map(item => {
                return Object.assign({}, item.payload.doc.data(), { id: item.payload.doc.id });
            });
            this.store.dispatch(new _store_documents_actions_documents__WEBPACK_IMPORTED_MODULE_3__["DocumentsSetAction"](idDoc));
        });
    }
    openEditModal(data) {
        this.editHomeworkNumber = data;
        this.isEditPopupVisible = true;
    }
    handleSelect(name) {
        this.selectedValue = name;
        this.requestUserData(this.selectedValue);
    }
    get buttonColor() {
        if (this.averageRate === 5) {
            return this.rateColors.green;
        }
        if (this.averageRate >= 4 && this.averageRate < 5) {
            return this.rateColors.orange;
        }
        if (this.averageRate >= 3 && this.averageRate < 4) {
            return this.rateColors.gray;
        }
        if (this.averageRate >= 2 && this.averageRate < 3) {
            return this.rateColors.red;
        }
    }
    closeEditModal() {
        this.isEditPopupVisible = false;
    }
    ngDoCheck() {
        if (this.selectedValue)
            return false;
        if (this.studentNames.length)
            this.handleSelect(this.studentNames[0]);
    }
};
TeacherPanelComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TeacherPanelComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TeacherPanelComponent.prototype, "students", void 0);
TeacherPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teacher-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./teacher-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher-panel/teacher-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./teacher-panel.component.scss */ "./src/app/teacher-panel/teacher-panel.component.scss")).default]
    })
], TeacherPanelComponent);



/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: PATHS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATHS", function() { return PATHS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PATHS;
(function (PATHS) {
    PATHS["GROUP"] = "group2";
    PATHS["HOMEWORKS"] = "homeworks";
    PATHS["USERS"] = "users";
    PATHS["AUTH"] = "auth";
    PATHS["STUDENTS"] = "students";
    PATHS["TEACHERS"] = "teachers";
})(PATHS || (PATHS = {}));
;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const PROJECT_ID = 'homework-ee976';
const API_KEY = 'AIzaSyAnuNAJE-V0VgeavyIr1i1QfBDWaQREMF0';
const AUTH_DOMAIN = `${PROJECT_ID}.firebaseapp.com`;
const DATABASE_URL = `https://${PROJECT_ID}.firebaseio.com`;
const STORAGE_BUCKET = `${PROJECT_ID}.appspot.com`;
const SENDER_ID = '52818416586';
const environment = {
    production: false,
    firebase: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        databaseURL: DATABASE_URL,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: SENDER_ID,
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_auth_actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/auth/actions.auth */ "./src/store/auth/actions.auth.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthService = class AuthService {
    constructor(firebaseAuth, router) {
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.user = firebaseAuth.authState;
    }
    get isloggedIn() {
        return js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(_store_auth_actions_auth__WEBPACK_IMPORTED_MODULE_4__["AUTH"].REFRESH);
    }
    get userRole() {
        return js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(_store_auth_actions_auth__WEBPACK_IMPORTED_MODULE_4__["AUTH"].ROLE);
    }
    login(email, password) {
        return this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(value => value)
            .catch(err => err);
    }
    signUpNewUser(email, password) {
        return this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => value)
            .catch(err => console.warn('Something went wrong:', err.message));
    }
    logout() {
        this.removeAuthCookie();
        this.firebaseAuth
            .auth
            .signOut();
        this.router.navigate(['/login']);
    }
    setAuthCookie(data) {
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(_store_auth_actions_auth__WEBPACK_IMPORTED_MODULE_4__["AUTH"].REFRESH, data.refreshToken, { expires: 1 });
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(_store_auth_actions_auth__WEBPACK_IMPORTED_MODULE_4__["AUTH"].ROLE, data.role, { expires: 1 });
    }
    removeAuthCookie() {
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove(_store_auth_actions_auth__WEBPACK_IMPORTED_MODULE_4__["AUTH"].REFRESH);
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove(_store_auth_actions_auth__WEBPACK_IMPORTED_MODULE_4__["AUTH"].ROLE);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/services/database.service.ts":
/*!******************************************!*\
  !*** ./src/services/database.service.ts ***!
  \******************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let DatabaseService = class DatabaseService {
    constructor(db) {
        this.db = db;
    }
    createHomeworkRecord(data) {
        return this.db.collection(`homeworks`).add(Object.assign({}, data));
    }
    fetchCollection(fieldName, id) {
        const ref = this.db.firestore.collection('homeworks');
        return ref.where(fieldName, '==', id)
            .get()
            .then((querySnapshot) => {
            const docsArr = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                docsArr.push(doc.data());
            });
            return docsArr;
        });
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DatabaseService);



/***/ }),

/***/ "./src/store/app.reducer.ts":
/*!**********************************!*\
  !*** ./src/store/app.reducer.ts ***!
  \**********************************/
/*! exports provided: AppReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppReducer", function() { return AppReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_reducer_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/reducer.auth */ "./src/store/auth/reducer.auth.ts");
/* harmony import */ var _documents_reducer_documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documents/reducer.documents */ "./src/store/documents/reducer.documents.ts");



;
const AppReducer = {
    auth: _auth_reducer_auth__WEBPACK_IMPORTED_MODULE_1__["authReducer"],
    documents: _documents_reducer_documents__WEBPACK_IMPORTED_MODULE_2__["documentsReducer"],
};


/***/ }),

/***/ "./src/store/auth/actions.auth.ts":
/*!****************************************!*\
  !*** ./src/store/auth/actions.auth.ts ***!
  \****************************************/
/*! exports provided: AUTH, LoginAction, LogoutAction, ResolveAuthData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH", function() { return AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAction", function() { return LoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutAction", function() { return LogoutAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveAuthData", function() { return ResolveAuthData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AUTH;
(function (AUTH) {
    AUTH["RESOLVE_AUTH_DATA"] = "RESOLVE_AUTH_DATA";
    AUTH["LOGIN"] = "LOGIN";
    AUTH["LOGOUT"] = "LOGOUT";
    AUTH["ACCESS"] = "access";
    AUTH["REFRESH"] = "refresh";
    AUTH["ROLE"] = "role";
})(AUTH || (AUTH = {}));
class LoginAction {
    // @ts-ignore
    constructor(payload) {
        this.payload = payload;
        this.type = AUTH.LOGIN;
    }
}
class LogoutAction {
    constructor() {
        this.type = AUTH.LOGOUT;
    }
}
class ResolveAuthData {
    constructor() {
        this.type = AUTH.RESOLVE_AUTH_DATA;
    }
}


/***/ }),

/***/ "./src/store/auth/reducer.auth.ts":
/*!****************************************!*\
  !*** ./src/store/auth/reducer.auth.ts ***!
  \****************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions.auth */ "./src/store/auth/actions.auth.ts");




const InitialState = {
    userData: {
        refreshToken: '',
        name: '',
        photo: '',
        email: '',
        role: 'student',
        id: ''
    }
};
function authReducer(state = InitialState, action) {
    switch (action.type) {
        case _actions_auth__WEBPACK_IMPORTED_MODULE_2__["AUTH"].LOGIN:
            return Object.assign({}, state, { userData: Object.assign({}, action.payload) });
        case _actions_auth__WEBPACK_IMPORTED_MODULE_2__["AUTH"].LOGOUT:
            return Object.assign({}, state, { token: null, refreshToken: null });
        case _actions_auth__WEBPACK_IMPORTED_MODULE_2__["AUTH"].RESOLVE_AUTH_DATA:
            return Object.assign({}, state, { userData: Object.assign({}, state.userData, { role: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(_actions_auth__WEBPACK_IMPORTED_MODULE_2__["AUTH"].ROLE), refreshToken: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(_actions_auth__WEBPACK_IMPORTED_MODULE_2__["AUTH"].REFRESH) }) });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/store/documents/actions.documents.ts":
/*!**************************************************!*\
  !*** ./src/store/documents/actions.documents.ts ***!
  \**************************************************/
/*! exports provided: DOCUMENTS, DocumentsSetAction, DocumentsAddAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENTS", function() { return DOCUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsSetAction", function() { return DocumentsSetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsAddAction", function() { return DocumentsAddAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var DOCUMENTS;
(function (DOCUMENTS) {
    DOCUMENTS["DOCUMENTS_SET"] = "DOCUMENTS_SET";
    DOCUMENTS["DOCUMENTS_DELETE"] = "DOCUMENTS_DELETE";
    DOCUMENTS["DOCUMENTS_ADD"] = "DOCUMENTS_ADD";
    DOCUMENTS["DOCUMENTS_REPLACE"] = "DOCUMENTS_REPLACE";
})(DOCUMENTS || (DOCUMENTS = {}));
class DocumentsSetAction {
    // @ts-ignore
    constructor(payload) {
        this.payload = payload;
        this.type = DOCUMENTS.DOCUMENTS_SET;
    }
}
class DocumentsAddAction {
    // @ts-ignore
    constructor(payload) {
        this.payload = payload;
        this.type = DOCUMENTS.DOCUMENTS_ADD;
    }
}


/***/ }),

/***/ "./src/store/documents/reducer.documents.ts":
/*!**************************************************!*\
  !*** ./src/store/documents/reducer.documents.ts ***!
  \**************************************************/
/*! exports provided: documentsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentsReducer", function() { return documentsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_documents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.documents */ "./src/store/documents/actions.documents.ts");


const InitialState = {
    studentDocuments: [],
};
function documentsReducer(state = InitialState, action) {
    switch (action.type) {
        case _actions_documents__WEBPACK_IMPORTED_MODULE_1__["DOCUMENTS"].DOCUMENTS_SET:
            return Object.assign({}, state, { studentDocuments: [...action.payload] });
        case _actions_documents__WEBPACK_IMPORTED_MODULE_1__["DOCUMENTS"].DOCUMENTS_ADD:
            return Object.assign({}, state, { studentDocuments: [...state.studentDocuments, action.payload] });
        default:
            return state;
    }
}
;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/denis/hw-hosting-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map