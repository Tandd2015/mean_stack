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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav> <!-- we have to inject the service into the book-new.component as a dependency-->\n<router-outlet></router-outlet> <!-- can not listen for events on components that loaded into the router-outlet -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"row\">\n    <h1>Pet Shelter</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n        <a class=\"nav-link\" routerLink=\"/pets/new\">Add a pet to the shelter</a>\n    </div>\n    <div class=\"col\">\n      <a class=\"nav-link\" routerLink=\"/\">Home</a>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>not-found works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-detail/pet-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-detail/pet-detail.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"selectedPet\">\n  <fieldset>\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <legend class=\"four\">Displaying One Pet</legend>\n        <div class=\"row nine\">\n          <p class=\"col-md-3 inline\">Details about {{ pet?.name }}</p>\n        </div>\n        <div class=\"row nine\">\n          <p class=\"col-md-3\">Pet Type: </p>\n          <p class=\"col-md-3\">{{ pet?.type }}</p> <!-- ? = safe navigation operator =  it evaluate property/object on the left if it is falsey-null/undefinded = it will not evaluate the property/object on the right -->\n        </div>\n        <div class=\"row nine\">\n          <p class=\"col-md-3\">Pet Description: </p>\n          <p class=\"col-md-3\">{{ pet?.description }}</p> <!-- ? = safe navigation operator =  it evaluate property/object on the left if it is falsey-null/undefinded = it will not evaluate the property/object on the right -->\n        </div>\n        <div *ngIf='pet.skill1' class=\"row nine\">\n          <p class=\"col-md-3\">Pet Skill1: </p>\n          <p class=\"col-md-3\">{{ pet?.skill1 }}</p> <!-- ? = safe navigation operator =  it evaluate property/object on the left if it is falsey-null/undefinded = it will not evaluate the property/object on the right -->\n        </div>\n        <div *ngIf='pet.skill2' class=\"row nine\">\n          <p class=\"col-md-3\">Pet Skill2: </p>\n          <p class=\"col-md-3\">{{ pet?.skill2 }}</p> <!-- ? = safe navigation operator =  it evaluate property/object on the left if it is falsey-null/undefinded = it will not evaluate the property/object on the right -->\n        </div>\n        <div *ngIf='pet.skill3' class=\"row nine\">\n          <p class=\"col-md-3\">Pet Skill3: </p>\n          <p class=\"col-md-3\">{{ pet?.skill3 }}</p> <!-- ? = safe navigation operator =  it evaluate property/object on the left if it is falsey-null/undefinded = it will not evaluate the property/object on the right -->\n        </div>\n        <div class=\"row nine\">\n          <p class=\"col-md-3\">Pet Likes: </p>\n          <p class=\"col-md-3\">{{ pet?.likes }}</p> <!-- ? = safe navigation operator =  it evaluate property/object on the left if it is falsey-null/undefinded = it will not evaluate the property/object on the right -->\n        </div>\n        <div class=\"row nine\">\n          <button class=\"btn btn-outline-warning\" [routerLink]=\"['edit']\">Edit </button>\n          <button class=\"btn btn-outline-success\" (click)='onDelete(pet)'>Adopt this pet!</button>\n          <button class=\"btn btn-outline-primary\"  *ngIf='!isAuthed' (click)='addLike(pet)'>Like This Pet </button>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-edit/pet-edit.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-edit/pet-edit.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf='petErrors.length' class=\"row six\">\n  <ul class=\"alert alert-danger\">\n    <li *ngFor='let error of petErrors'>{{error}}</li>\n  </ul>\n</div>\n<section class=\"newPet six\">\n  <fieldset>\n    <div class=\"row\">\n      <h3>Edit this pet</h3>\n    </div>\n    <form (submit)=\"onSubmit($event, petForm)\" #petForm=\"ngForm\" autocomplete=\"off\"> <!-- $ special variable  # template reference of the representation of the form as an object for app.component.ts - onSubmit(event: Event) -->\n      <div class=\"form-group row\">                                  <!-- onSubmit($event, bookForm) once we have a object representation of the form we pass it in the function -->\n        <label class=\"col-md-1 col-form-label incline\" for=\"\">Pet Name: </label>\n        <input\n          type=\"text\"\n          class=\"form-control col-md-5 incline\"\n          name=\"name\"\n          [ngModel]=\"pet?.name\"\n          required\n        />\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-md-2 col-form-label incline\" for=\"\">Pet Type: </label>\n        <input\n          type=\"text\"\n          class=\"form-control col-md-5 incline\"\n          name=\"type\"\n          [ngModel]=\"pet?.type\"\n          required\n        />\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-md-1 col-form-label incline\" for=\"\">Description: </label>\n        <input\n          class=\"form-control col-md-5 incline\"\n          id=\"\"\n          name=\"description\"\n          [ngModel]=\"pet?.description\"\n          required\n        />\n      </div>\n      <div class=\"row\">\n        <h1>Skills (Optional): </h1>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-md-2 col-form-label incline\" for=\"\">Skill 1: </label>\n        <input\n          type=\"text\"\n          class=\"form-control col-md-5 incline\"\n          name=\"skill1\"\n          [ngModel]=\"pet?.skill1\"\n        />\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-md-1 col-form-label incline\" for=\"\">Skill 2: </label>\n        <input\n          type=\"text\"\n          class=\"form-control col-md-5 incline\"\n          name=\"skill2\"\n          [ngModel]=\"pet?.skill2\"\n        />\n      </div>\n      <div class=\"form-group row\">\n          <label class=\"col-md-1 col-form-label incline\" for=\"\">Skill 3: </label>\n          <input\n            type=\"text\"\n            class=\"form-control col-md-5 incline\"\n            name=\"skill3\"\n            [ngModel]=\"pet?.skill3\"\n          />\n        </div>\n      <div class=\"form-group row\">\n        <div class=\"col-md-2 three\">\n          <button class=\"btn btn-outline-success\" *ngIf=\"petForm.valid\" >Submit</button>\n        </div>\n        <div class=\"col\">\n            <a class=\"btn btn-primary\" routerLink=\"/\">Cancel</a>\n        </div>\n      </div>\n    </form>\n  </fieldset>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-list/pet-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-list/pet-list.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pets\">\n  <div class=\"row\">\n    <h3>These pets are looking for a home!</h3>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-striped table-dark\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Type</th>\n            <th scope=\"col\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let pet of pets\"\n            (click)=\"onSelect(pet)\"\n            [routerLink]=\"pet._id\"\n          >\n            <th hidden scope=\"row\">{{ pet._id }}</th>\n            <td>{{ pet.name }}</td>\n            <td>{{ pet.type }}</td>\n            <td (click)=\"onEvent($event)\">\n              <button class=\"btn btn-outline-danger two\" [routerLink]=\"[pet._id]\" >Details</button> <!-- if you have multiple click events they bubble up and all run must prevent that action  -->\n              <button class=\"btn btn-outline-warning two\" [routerLink]=\"[pet._id, 'edit']\" >Edit</button> <!-- you do not want a click event on this button unless it is a nested component - you want to route somewhere else in this instance-->\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-new/pet-new.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-new/pet-new.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf='newErrors.length' class=\"row six\">\n  <ul class=\"alert alert-danger\">\n    <li *ngFor='let error of newErrors'>{{error}}</li>\n  </ul>\n</div>\n<section class=\"newPet six\">\n  <fieldset>\n    <div class=\"row\">\n      <h3>Know of a pet needing a home ?</h3>\n    </div>\n    <form (submit)=\"onSubmit($event, petForm)\" #petForm=\"ngForm\" autocomplete=\"off\"> <!-- $ special variable  # template reference of the representation of the form as an object for app.component.ts - onSubmit(event: Event) -->\n      <div class=\"form-group row\">                                  <!-- onSubmit($event, bookForm) once we have a object representation of the form we pass it in the function -->\n        <label class=\"col-md-1 col-form-label incline\" for=\"\">Pet Name: </label>\n        <input\n          type=\"text\"\n          class=\"form-control col-md-5 incline\"\n          name=\"name\"\n          [(ngModel)]=\"pet.name\"\n          required\n        />\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-md-2 col-form-label incline\" for=\"\">Pet Type: </label>\n        <input\n          type=\"text\"\n          class=\"form-control col-md-5 incline\"\n          name=\"type\"\n          [(ngModel)]=\"pet.type\"\n          required\n        />\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-md-1 col-form-label incline\" for=\"\">Description: </label>\n        <input\n          class=\"form-control col-md-5 incline\"\n          id=\"\"\n          name=\"description\"\n          [(ngModel)]=\"pet.description\"\n          required\n        />\n      </div>\n      <div class=\"row\">\n        <h1>Skills (Optional): </h1>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-md-2 col-form-label incline\" for=\"\">Skill 1: </label>\n        <input\n          type=\"text\"\n          class=\"form-control col-md-5 incline\"\n          name=\"skill1\"\n          [(ngModel)]=\"pet.skill1\"\n        />\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-md-1 col-form-label incline\" for=\"\">Skill 2: </label>\n        <input\n          type=\"text\"\n          class=\"form-control col-md-5 incline\"\n          name=\"skill2\"\n          [(ngModel)]=\"pet.skill2\"\n        />\n      </div>\n      <div class=\"form-group row\">\n          <label class=\"col-md-1 col-form-label incline\" for=\"\">Skill 3: </label>\n          <input\n            type=\"text\"\n            class=\"form-control col-md-5 incline\"\n            name=\"skill3\"\n            [(ngModel)]=\"pet.skill3\"\n          />\n        </div>\n      <div class=\"form-group row\">\n        <div class=\"col-md-2 three\">\n          <button class=\"btn btn-outline-success\" *ngIf=\"petForm.valid\" >Submit</button>\n        </div>\n        <div class=\"col\">\n          <a class=\"btn btn-primary\" routerLink=\"/\">Cancel</a>\n        </div>\n      </div>\n    </form>\n  </fieldset>\n</section>\n");

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pets */ "./src/app/pets/index.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");






const enableTracing =  false && false;
// const enableTracing = true && !environment.production; // to turn on all of thre router tracing computed logic
const routes = [
    // this way fixes the refresh page problem of your application
    {
        path: '',
        redirectTo: 'pets',
        pathMatch: 'full',
    },
    {
        path: 'pets',
        children: [
            {
                path: '',
                component: _pets__WEBPACK_IMPORTED_MODULE_4__["PetListComponent"],
            },
            {
                path: 'new',
                component: _pets__WEBPACK_IMPORTED_MODULE_4__["PetNewComponent"],
            },
            {
                path: ':id',
                component: _pets__WEBPACK_IMPORTED_MODULE_4__["PetDetailComponent"],
            },
            {
                path: ':id/edit',
                component: _pets__WEBPACK_IMPORTED_MODULE_4__["PetEditComponent"],
            },
        ]
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                enableTracing,
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'pet-shelter';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm2015/ngx-cookie.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _pets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pets */ "./src/app/pets/index.ts");




 // If you import a Module up here






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            ..._pets__WEBPACK_IMPORTED_MODULE_10__["components"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieModule"].forRoot(),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Pet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pet */ "./src/app/models/pet.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pet", function() { return _pet__WEBPACK_IMPORTED_MODULE_1__["Pet"]; });





/***/ }),

/***/ "./src/app/models/pet.ts":
/*!*******************************!*\
  !*** ./src/app/models/pet.ts ***!
  \*******************************/
/*! exports provided: Pet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pet", function() { return Pet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Pet {
}


/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/pets/index.ts":
/*!*******************************!*\
  !*** ./src/app/pets/index.ts ***!
  \*******************************/
/*! exports provided: components, NavComponent, PetListComponent, PetDetailComponent, PetNewComponent, PetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pet-list/pet-list.component */ "./src/app/pets/pet-list/pet-list.component.ts");
/* harmony import */ var _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pet-edit/pet-edit.component */ "./src/app/pets/pet-edit/pet-edit.component.ts");
/* harmony import */ var _pet_detail_pet_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pet-detail/pet-detail.component */ "./src/app/pets/pet-detail/pet-detail.component.ts");
/* harmony import */ var _pet_new_pet_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pet-new/pet-new.component */ "./src/app/pets/pet-new/pet-new.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PetListComponent", function() { return _pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_1__["PetListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PetDetailComponent", function() { return _pet_detail_pet_detail_component__WEBPACK_IMPORTED_MODULE_3__["PetDetailComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PetNewComponent", function() { return _pet_new_pet_new_component__WEBPACK_IMPORTED_MODULE_4__["PetNewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PetEditComponent", function() { return _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_2__["PetEditComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]; });


// this is the index for the barreling technique of the path routes to the client side routing in Angular
// not express application routes which you do not want to be the same so you do hit them on the
// client side routing





const components = [_pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_1__["PetListComponent"], _pet_detail_pet_detail_component__WEBPACK_IMPORTED_MODULE_3__["PetDetailComponent"], _pet_new_pet_new_component__WEBPACK_IMPORTED_MODULE_4__["PetNewComponent"], _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_2__["PetEditComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]];







/***/ }),

/***/ "./src/app/pets/pet-detail/pet-detail.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pets/pet-detail/pet-detail.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BldHMvcGV0LWRldGFpbC9wZXQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pets/pet-detail/pet-detail.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pets/pet-detail/pet-detail.component.ts ***!
  \*********************************************************/
/*! exports provided: PetDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetDetailComponent", function() { return PetDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");





let PetDetailComponent = class PetDetailComponent {
    constructor(petService, route, router) {
        this.petService = petService;
        this.route = route;
        this.router = router;
        this.isAuthed = false;
    }
    //
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(params => params.get('id')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(id => this.petService.getPet(id)))
            .subscribe(pet => {
            console.log('Pet from Api ', pet);
            this.pet = pet;
        });
    }
    onDelete(pet) {
        this.petService.removePet(pet._id)
            .subscribe(deletedPet => {
            console.log('deleted pet ', deletedPet);
            this.router.navigateByUrl('/');
        });
    }
    addLike(pet) {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(params => params.get('id')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(id => this.petService.getPet(id)))
            .subscribe(pet => {
            this.pet = pet;
            this.pet.likes += 1;
            this.petService.updatePet(this.pet);
            this.isAuthed = true;
        });
    }
};
PetDetailComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["PetService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PetDetailComponent.prototype, "pet", void 0);
PetDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pet-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pet-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-detail/pet-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pet-detail.component.css */ "./src/app/pets/pet-detail/pet-detail.component.css")).default]
    })
], PetDetailComponent);



/***/ }),

/***/ "./src/app/pets/pet-edit/pet-edit.component.css":
/*!******************************************************!*\
  !*** ./src/app/pets/pet-edit/pet-edit.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BldHMvcGV0LWVkaXQvcGV0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pets/pet-edit/pet-edit.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pets/pet-edit/pet-edit.component.ts ***!
  \*****************************************************/
/*! exports provided: PetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetEditComponent", function() { return PetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");





let PetEditComponent = class PetEditComponent {
    constructor(route, petService, router) {
        this.route = route;
        this.petService = petService;
        this.router = router;
        this.petErrors = [];
    }
    ngOnInit() {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(params => params.get('id')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(id => this.petService.getPet(id)))
            .subscribe(pet => {
            console.log('pet from api', pet);
            this.pet = pet;
        });
    }
    onSubmit(event, form) {
        console.log('editing pet', Object.assign({}, form.value, { _id: this.pet._id }));
        this.petService.updatePet(Object.assign({}, form.value, { _id: this.pet._id }))
            .subscribe({
            next: updatePet => {
                console.log(updatePet);
                this.router.navigate(['/pets', updatePet._id]);
            },
            error: error => this.handleErrors(error.error)
        });
    }
    handleErrors(errors) {
        this.petErrors = Array.isArray(errors) ? errors : [errors];
    }
};
PetEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["PetService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pet-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pet-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-edit/pet-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pet-edit.component.css */ "./src/app/pets/pet-edit/pet-edit.component.css")).default]
    })
], PetEditComponent);



/***/ }),

/***/ "./src/app/pets/pet-list/pet-list.component.css":
/*!******************************************************!*\
  !*** ./src/app/pets/pet-list/pet-list.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BldHMvcGV0LWxpc3QvcGV0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pets/pet-list/pet-list.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pets/pet-list/pet-list.component.ts ***!
  \*****************************************************/
/*! exports provided: PetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetListComponent", function() { return PetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pet.service */ "./src/app/services/pet.service.ts");



let PetListComponent = class PetListComponent {
    constructor(petService) {
        this.petService = petService;
        this.pets = [];
    }
    ngOnInit() {
        this.petService.getPets()
            .subscribe(pets => {
            this.pets = pets;
        });
    }
    onSelect(pet) {
        console.log('selecting pet', pet);
        this.selectedPet = this.selectedPet === pet ? null : pet;
    }
    onCreate(pet) {
        console.log('creating pet', pet);
        this.petService
            .createPet(pet)
            .subscribe(createdPet => (this.pets = [...this.pets, createdPet]));
    }
    onDelete(pet) {
        console.log('deleting pet', pet);
        this.petService.removePet(pet._id).subscribe(deletedPet => {
            console.log('deleted pet', deletedPet);
            this.pets = this.pets.filter(currentPet => currentPet._id !== deletedPet._id);
        });
    }
    onEvent(event) {
        console.log('event passing');
        event.stopPropagation();
    }
};
PetListComponent.ctorParameters = () => [
    { type: src_app_services_pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"] }
];
PetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pet-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pet-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-list/pet-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pet-list.component.css */ "./src/app/pets/pet-list/pet-list.component.css")).default]
    })
], PetListComponent);



/***/ }),

/***/ "./src/app/pets/pet-new/pet-new.component.css":
/*!****************************************************!*\
  !*** ./src/app/pets/pet-new/pet-new.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BldHMvcGV0LW5ldy9wZXQtbmV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pets/pet-new/pet-new.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pets/pet-new/pet-new.component.ts ***!
  \***************************************************/
/*! exports provided: PetNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetNewComponent", function() { return PetNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");





let PetNewComponent = class PetNewComponent {
    constructor(petService, router) {
        this.petService = petService;
        this.router = router;
        this.pet = new _models__WEBPACK_IMPORTED_MODULE_3__["Pet"]();
        this.newErrors = [];
    }
    ngOnInit() {
    }
    onSubmit(event, form) {
        event.preventDefault();
        this.petService.createPet(this.pet).subscribe({
            next: createdPet => {
                console.log('createdPet', createdPet);
                this.pet = new _models__WEBPACK_IMPORTED_MODULE_3__["Pet"]();
                form.reset();
                this.router.navigateByUrl('pets');
            },
            error: error => {
                console.log(error.error);
                this.handleErrors(error.error);
            },
        });
    }
    handleErrors(errors) {
        this.newErrors = Array.isArray(errors) ? errors : [errors];
    }
};
PetNewComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["PetService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PetNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pet-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pet-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-new/pet-new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pet-new.component.css */ "./src/app/pets/pet-new/pet-new.component.css")).default]
    })
], PetNewComponent);



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: PetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pet.service */ "./src/app/services/pet.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return _pet_service__WEBPACK_IMPORTED_MODULE_1__["PetService"]; });





/***/ }),

/***/ "./src/app/services/pet.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/pet.service.ts ***!
  \*****************************************/
/*! exports provided: PetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return PetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let PetService = class PetService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/pets';
    }
    getPets() {
        return this.http.get(this.baseUrl);
    }
    createPet(pet) {
        return this.http.post(this.baseUrl, pet);
    }
    getPet(petId) {
        return this.http.get(`${this.baseUrl}/${petId}`);
    }
    updatePet(pet) {
        return this.http.put(`${this.baseUrl}/${pet._id}`, pet);
    }
    removePet(petId) {
        return this.http.delete(`${this.baseUrl}/${petId}`);
    }
};
PetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PetService);



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

const environment = {
    production: false
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danielbeatty/Documents/pet-shelter/pet-shelter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map