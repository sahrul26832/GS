webpackJsonp([3],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneBookDetailPageModule", function() { return PhoneBookDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone_book_detail__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PhoneBookDetailPageModule = /** @class */ (function () {
    function PhoneBookDetailPageModule() {
    }
    PhoneBookDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__phone_book_detail__["a" /* PhoneBookDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__phone_book_detail__["a" /* PhoneBookDetailPage */]),
            ],
        })
    ], PhoneBookDetailPageModule);
    return PhoneBookDetailPageModule;
}());

//# sourceMappingURL=phone-book-detail.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneBookDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PhoneBookDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhoneBookDetailPage = /** @class */ (function () {
    function PhoneBookDetailPage(navCtrl, navParams, mysms) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mysms = mysms;
        this.contact = { name: '', telephone: '', imageUrl: '' };
    }
    PhoneBookDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhoneBookDetailPage');
        this.contact = this.navParams.data;
        console.log(this.contact);
    };
    PhoneBookDetailPage.prototype.call = function () {
        window.open('tel:' + this.contact.telephone);
    };
    PhoneBookDetailPage.prototype.sms = function () {
        this.mysms.send(this.contact.telephone, 'Hello world!');
    };
    PhoneBookDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phone-book-detail',template:/*ion-inline-start:"e:\FirstApp\src\pages\phone-book-detail\phone-book-detail.html"*/'<!--\n\n  Generated template for the PhoneBookDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>{{contact.name}}</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <img src="{{contact.imageUrl}}" alt="">\n\n    <button ion-button block round color="secondary" (click)="call()"> <ion-icon name="call"> &nbsp;&nbsp;</ion-icon> Call : {{contact.telephone}}</button>\n\n    <button ion-button block round color="danger"(click)="sms()"> <ion-icon name="mail"> &nbsp;&nbsp;</ion-icon> SMS : {{contact.telephone}}</button>\n\n  </ion-content>'/*ion-inline-end:"e:\FirstApp\src\pages\phone-book-detail\phone-book-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */]])
    ], PhoneBookDetailPage);
    return PhoneBookDetailPage;
}()); //end class

//# sourceMappingURL=phone-book-detail.js.map

/***/ })

});
//# sourceMappingURL=3.js.map