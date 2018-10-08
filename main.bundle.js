webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-input .mat-button-focus-overlay {\r\n    background-color: rgba(0,0,0,0); \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- navigation -->\r\n<app-nav></app-nav>\r\n<!-- navigation -->\r\n\r\n<!-- Form -->\r\n<app-healthform></app-healthform>\r\n<!-- Form -->\r\n\r\n<!-- footer -->\r\n<app-footer></app-footer>\r\n<!-- /footer -->\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_useful_swiper__ = __webpack_require__("../../../../angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_navigation_desktop_nav_nav_component__ = __webpack_require__("../../../../../src/app/layout/navigation/desktop/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_health_desktop_healthform_healthform_component__ = __webpack_require__("../../../../../src/app/product/health/desktop/healthform/healthform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_health_desktop_healthform_health_section_health_section_component__ = __webpack_require__("../../../../../src/app/product/health/desktop/healthform/health-section/health-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_footer_desktop_footer_footer_component__ = __webpack_require__("../../../../../src/app/layout/footer/desktop/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layout_footer_desktop_footer_footer_nav_footer_nav_component__ = __webpack_require__("../../../../../src/app/layout/footer/desktop/footer/footer-nav/footer-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layout_footer_desktop_footer_footer_social_footer_social_component__ = __webpack_require__("../../../../../src/app/layout/footer/desktop/footer/footer-social/footer-social.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product_product_bar_product_bar_component__ = __webpack_require__("../../../../../src/app/product/product-bar/product-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__product_feature_feature_component__ = __webpack_require__("../../../../../src/app/product/feature/feature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__product_testimonial_testimonial_component__ = __webpack_require__("../../../../../src/app/product/testimonial/testimonial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__product_health_about_product_about_product_component__ = __webpack_require__("../../../../../src/app/product/health/about-product/about-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__product_product_blog_product_blog_component__ = __webpack_require__("../../../../../src/app/product/product-blog/product-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__product_health_product_content_product_content_component__ = __webpack_require__("../../../../../src/app/product/health/product-content/product-content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__layout_navigation_desktop_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_9__product_health_desktop_healthform_healthform_component__["a" /* HealthformComponent */],
                __WEBPACK_IMPORTED_MODULE_10__product_health_desktop_healthform_health_section_health_section_component__["a" /* HealthSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_11__layout_footer_desktop_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__layout_footer_desktop_footer_footer_nav_footer_nav_component__["a" /* FooterNavComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layout_footer_desktop_footer_footer_social_footer_social_component__["a" /* FooterSocialComponent */],
                __WEBPACK_IMPORTED_MODULE_14__product_product_bar_product_bar_component__["a" /* ProductBarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__product_feature_feature_component__["a" /* FeatureComponent */],
                __WEBPACK_IMPORTED_MODULE_16__product_testimonial_testimonial_component__["a" /* TestimonialComponent */],
                __WEBPACK_IMPORTED_MODULE_17__product_health_about_product_about_product_component__["a" /* AboutProductComponent */],
                __WEBPACK_IMPORTED_MODULE_18__product_product_blog_product_blog_component__["a" /* ProductBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__product_health_product_content_product_content_component__["a" /* ProductContentComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'mic-app' }),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_useful_swiper__["SwiperModule"],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/footer/desktop/footer/footer-nav/footer-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-wrapper {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n    padding-bottom: 35px;\r\n    padding-top: 15px;\r\n    background-color: #E7E7E7;\r\n}\r\n\r\n.footer-wrapper .mic-container{\r\n    padding: 0 20px;\r\n}\r\n\r\n.footer-wrapper .nav-col{\r\n    width: 23%;\r\n    margin-right: 2.5%;\r\n    margin-bottom: 1%;\r\n    float: left;\r\n    line-height: 1.7;\r\n}\r\n\r\n.footer-wrapper .nav-col:last-child{\r\n    margin-right: 0px;\r\n}\r\n\r\n.cat-cont .cat-label{\r\n    font-family: \"Open Sans\", Arial, serif;\r\n    display: block;\r\n    padding-bottom: 10px;\r\n    color: #757575;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding-top: 20px;\r\n    line-height: 1.1;\r\n    border-bottom: 1px solid #d6d6d6;   \r\n}\r\n\r\n.cat-list{\r\n    margin: 0px;\r\n    padding-left: 0px;\r\n}\r\n\r\n.cat-list li{\r\n    list-style-type: none;\r\n}\r\n\r\n.cat-list li a {\r\n    display: block;\r\n    font-size: 13px;\r\n    padding: 2px 0 5px 20px;\r\n    font-weight: normal;\r\n    border-bottom: 1px solid #d6d6d6;\r\n    color: #ff6102;\r\n    text-decoration: none;\r\n}\r\n\r\n.cat-list li a:hover{\r\n    text-decoration: underline;\r\n}\r\n\r\n.cat-list .fwd-ic{\r\n    color: #979a9b;\r\n    float: left;\r\n    font-size: 10px;\r\n    line-height: 26px;\r\n    padding-left: 2px;\r\n}\r\n\r\n.irdai-wrapper{\r\n    padding-top: 20px;\r\n}\r\n\r\n.irdai-wrapper img{\r\n    border: 2px solid #b6b6b6;\r\n    border-radius: 2px;\r\n    -moz-border-radius: 2px;\r\n    -webkit-border-radius: 2x;\r\n    padding: 3px 5px;\r\n    max-width: 100%;\r\n    margin: 0 0 10px;\r\n}\r\n\r\n.cat-cont .irdai-txt{\r\n    font-size: 85%;\r\n    color: #444;\r\n    line-height: 1.4762;\r\n}\r\n\r\n.cat-cont .irdai-txt:last-child{\r\n    padding-top: 5px;\r\n}\r\n\r\n@media screen and (max-width: 1200px){\r\n    \r\n    .footer-wrapper .nav-col{\r\n        margin-right: 2.33%;\r\n    }\r\n\r\n    .footer-wrapper .nav-col:nth-child(2), .footer-wrapper .nav-col:nth-child(3){\r\n        width: 27%;\r\n    }\r\n\r\n    .footer-wrapper .nav-col:nth-child(4){\r\n        width: 21%;\r\n    }\r\n\r\n    .footer-wrapper .nav-col:nth-child(1){\r\n        width: 18%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 992px){\r\n    .footer-wrapper .nav-col{\r\n        width: 47.5% !important;\r\n        margin-right: 2.5%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px){\r\n    .footer-wrapper .nav-col{\r\n        width: 100% !important;\r\n        margin-right: 0;\r\n    }\r\n\r\n    .cat-list li a {\r\n        padding: 6px 0 7px 20px;\r\n    }\r\n\r\n    .cat-list .fwd-ic {\r\n        line-height: 34px;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/footer/desktop/footer/footer-nav/footer-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-wrapper\">\r\n  <div class=\"mic-container\">\r\n    <!-- first col -->\r\n    <div class=\"nav-col\">\r\n      <div class=\"cat-cont\">\r\n        <label class=\"cat-label\">Company Information</label>\r\n        <ul class=\"cat-list\">\r\n          <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/about-us\">About Us</a></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"cat-cont\">\r\n        <label class=\"cat-label\">Connect with Us</label>\r\n        <ul class=\"cat-list\">\r\n          <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/contact-us\">Contact Us</a></li>\r\n          <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/Feedback\">Feedback</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- /first col -->\r\n\r\n    <!-- second col -->\r\n    <div class=\"nav-col\">  \r\n      <div class=\"cat-cont\">\r\n        <label class=\"cat-label\">Other Links</label>\r\n        <ul class=\"cat-list\">\r\n          <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/ask-an-expert\">Ask an Expert</a></li>\r\n          <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/articles\">Insurance Articles</a></li>\r\n          <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/guides\">Insurance Guides</a></li>\r\n          <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/insurance-news\">Insurance News</a></li>\r\n          <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/videos\">Insurance Videos</a></li>\r\n          <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/life-insurance/companies\">Life Insurance Companies in India</a></li>\r\n          <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/general-insurance-companies\">General Insurance Companies in India</a></li>\r\n          <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/terms-of-use\">Terms of Use</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- /second col -->\r\n\r\n    <!-- third col -->\r\n    <div class=\"nav-col\">\r\n        <div class=\"cat-cont\">\r\n          <label class=\"cat-label\">Quick Links</label>\r\n          <ul class=\"cat-list\"> \r\n            <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/analyse\">Get your Policy Analysed</a></li>\r\n            <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/claim-assistance\">Claim Assistance</a></li>\r\n            <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a href=\"/account/\" target=\"_blank\">My Account</a></li>\r\n          </ul>\r\n        </div>\r\n  \r\n        <div class=\"cat-cont\">\r\n          <label class=\"cat-label\">Quick Connect</label>\r\n          <ul class=\"cat-list\">\r\n              <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a style=\"cursor:auto;text-decoration:none;\">Phone: <font color=\"#757575\">022 61647056</font></a></li>\r\n              <li><i class=\"fa fa-forward fwd-ic\" aria-hidden=\"true\"></i><a style=\"cursor:auto;text-decoration:none;\">Email: <font color=\"#757575\">contact@myinsuranceclub.com</font></a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- /third col -->\r\n\r\n      <!-- fourth col -->\r\n      <div class=\"nav-col\">\r\n        <div class=\"cat-cont\">\r\n          <div class=\"irdai-wrapper\"><img src=\"/assets/images/irdai_mic.jpg\" alt=\"Insurance Regulatory & Development Authority (IRDAI) License Details\"></div>\r\n          <div class=\"irdai-txt\"><strong>Important</strong>: Insurance is the subject matter of solicitation</div>\r\n          <div class=\"irdai-txt\">© 2009-{{currentYear}} MyInsuranceClub.com</div>          \r\n        </div>\r\n      </div>\r\n      <!-- /fourth col -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/footer/desktop/footer/footer-nav/footer-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterNavComponent = (function () {
    function FooterNavComponent() {
        this.currentDate = new Date();
        this.currentYear = this.currentDate.getFullYear();
    }
    FooterNavComponent.prototype.ngOnInit = function () {
    };
    FooterNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer-nav',
            template: __webpack_require__("../../../../../src/app/layout/footer/desktop/footer/footer-nav/footer-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/footer/desktop/footer/footer-nav/footer-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterNavComponent);
    return FooterNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/footer/desktop/footer/footer-social/footer-social.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-social-wrapper {\r\n    background: #2ca3ef;\r\n    color: #a2a2a2;\r\n    min-height: 35px;\r\n    position: relative;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n\r\n.footer-social{\r\n    list-style-type: none;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    margin: 0;\r\n    padding: 0 20px;\r\n    float: left;\r\n    line-height: 35px;\r\n}\r\n\r\n.footer-social:last-child{\r\n    float: right;\r\n}\r\n\r\n.footer-social li{\r\n    display: inline-block;\r\n    padding-left: 5px;\r\n    padding-right: 6px;\r\n    border-right: 2px solid;\r\n    line-height: 1;\r\n}\r\n\r\n.footer-social li:last-child,.footer-social li:first-child{\r\n    border: none;\r\n}\r\n\r\n.footer-social li .stay-footer {\r\n    font-weight: bold;\r\n    color: #000;\r\n}\r\n\r\n.social-icon{\r\n    line-height: 1;\r\n}\r\n\r\n.social-icon a{\r\n    margin-right: 5px;\r\n}\r\n\r\n.social-icon a:last-child{\r\n    margin-right: 0px;\r\n}\r\n\r\n.social-icon a .ic{\r\n    color: #edebe9;\r\n    cursor: pointer;\r\n    font-size: 27px;\r\n    margin-top: 4px;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.social-icon a:hover .ic{\r\n    color: #ffffff;\r\n    transform: scale(1.1);\r\n}\r\n\r\n@media screen and (max-width:992px){\r\n    .footer-social-wrapper{\r\n        display:none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/footer/desktop/footer/footer-social/footer-social.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-social-wrapper\">\r\n  <div class=\"mic-container\">\r\n    <ul class=\"footer-social\">\r\n      <li>\r\n        <span class=\"stay-footer\">Stay Connected!</span>\r\n      </li>\r\n      <li>Latest Product Launches</li>\r\n      <li>Resolve Queries</li>\r\n      <li>Industry News</li>\r\n      <li>Contests &amp; Prizes</li>\r\n    </ul>\r\n\r\n    <ul class=\"footer-social social-icon\">\r\n      <li class=\"\"> \t\t\r\n        <a href=\"https://www.facebook.com/myinsuranceclub\" target=\"_blank\"><i class=\"fa fa-facebook-square ic\" aria-hidden=\"true\"></i></a>\r\n        <a href=\"https://twitter.com/myinsuranceclub\" target=\"_blank\"><i class=\"fa fa-twitter-square ic\" aria-hidden=\"true\"></i></a>\r\n        <a href=\"https://plus.google.com/+Myinsuranceclub\" target=\"_blank\"><i class=\"fa fa-google-plus-square ic\" aria-hidden=\"true\"></i></a>\r\n        <a href=\"https://www.youtube.com/MyInsuranceClub\" target=\"_blank\"><i class=\"fa fa-youtube-square ic\" aria-hidden=\"true\"></i></a>\r\n        <a href=\"https://www.linkedin.com/company/myinsuranceclub\" target=\"_blank\"><i class=\"fa fa-linkedin-square ic\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/footer/desktop/footer/footer-social/footer-social.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterSocialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterSocialComponent = (function () {
    function FooterSocialComponent() {
    }
    FooterSocialComponent.prototype.ngOnInit = function () {
    };
    FooterSocialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer-social',
            template: __webpack_require__("../../../../../src/app/layout/footer/desktop/footer/footer-social/footer-social.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/footer/desktop/footer/footer-social/footer-social.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterSocialComponent);
    return FooterSocialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/footer/desktop/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/footer/desktop/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- footer Navigation -->\r\n<app-footer-nav></app-footer-nav>\r\n<!-- /footer Navigation -->\r\n\r\n<!-- footer Social -->\r\n<app-footer-social></app-footer-social>\r\n<!-- /footer Social -->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/footer/desktop/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/layout/footer/desktop/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/footer/desktop/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/navigation/desktop/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\r\n    background-color: transparent;\r\n    border-bottom: 6px solid transparent;\r\n    /* box-shadow: 0px 0px 7px 0px transparent; */\r\n    width: 100%;\r\n    /* overflow: auto;  */\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    z-index: 999;\r\n    float: left;\r\n}\r\n\r\n/* Logo-container */\r\n.navbar .logo-container{\r\n    float: left;\r\n    margin: 15px 0 0 25px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n\r\n.logo-container .mic-logo{\r\n    float: left;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    text-align: center;    \r\n}\r\n\r\n.mic-logo img{\r\n    width:137px;\r\n}\r\n\r\n.logo-container .mic-right-txt{\r\n    float: left;\r\n    text-align: left;\r\n    font-size: 13px;\r\n    margin: 36px 15px 0px;\r\n    color: #343434;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    text-align: center; \r\n}\r\n/* /Logo-container */\r\n\r\n/* Nav-container */\r\n.nav-container{\r\n    float: right;\r\n    margin: 27px 20px 0 10px;\r\n}\r\n\r\n.nav-container ul{\r\n    float: right;\r\n    padding-left: 0px;\r\n    margin: 12px 0px 0px 0px;\r\n}\r\n\r\n.nav-container ul > li {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin: 0px 32px;\r\n    font-size: 15px;\r\n    line-height: 45px;\r\n}\r\n\r\n.nav-container ul > li a{\r\n    text-decoration: none;\r\n    color: #000000;\r\n    display: block;\r\n    padding: 0px;\r\n    outline: none;\r\n}\r\n\r\n.nav-container > ul li:hover a {\r\n    border-bottom: 2px solid #ff6633;\r\n}\r\n\r\n/* dropdown */\r\n\r\n.drop-down > a:after {\r\n    content: \"\\F107\";\r\n    font-size: 18px;\r\n    position: relative;\r\n    top: 2px;\r\n    color: #000000;\r\n    font-family: FontAwesome;\r\n    font-style: normal;\r\n    margin-left: 5px;\r\n}\r\n\r\n.drop-down:hover > a:after {\r\n    content: \"\\F106\";\r\n    color: #ff6633;\r\n}\r\n\r\n.mic-menu {\r\n    background: none repeat scroll 0 0 #ffffff;\r\n    left: 0;\r\n    margin-top: 0px;\r\n    position: absolute;\r\n    width: 100%;\r\n    padding: 12px 0px 38px 0px;\r\n    /* border-top: 6px solid #fcbc22; */\r\n    display: none;\r\n    z-index: 999;\r\n}\r\n\r\n.nav-container > ul li:hover .mic-menu{\r\n    display: block;\r\n}\r\n\r\n.mic-menu ul li {\r\n    display: block;\r\n    line-height: normal;\r\n    margin: 0;\r\n    padding: 6px 0;\r\n    color: #878787;\r\n    font-size: 14px;\r\n}\r\n\r\n.mic-menu-cont {\r\n    width: 1095px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    overflow: auto;\r\n}\r\n\r\n.mm-3column {\r\n    float: left;\r\n    width: auto;\r\n    margin-right: 5%;\r\n}\r\n\r\n.mm-3column:last-child {\r\n    margin: 0;\r\n}\r\n\r\n.categories-list {\r\n    float: left;\r\n    width: auto;\r\n}\r\n\r\n.categories-list ul{\r\n    float: left;\r\n}\r\n\r\n.categories-list ul li a {\r\n    color: #878787;\r\n    text-decoration: none;\r\n    border-bottom: none !important;\r\n}\r\n\r\n.categories-list ul li a:hover {\r\n    color: #ff6633 ;\r\n    border: none ;\r\n}\r\n\r\n.categories-list .hd {\r\n    color: #3c3d3d;\r\n    font-size: 14px;\r\n    padding-bottom: 3px;\r\n    margin-bottom: 5px;\r\n    text-transform: uppercase;\r\n    border-bottom: 1px solid #e6e6e6;\r\n    width: 100%;\r\n}\r\n\r\n.categories-list .categories-list-child {\r\n    margin-right: 43px !important;\r\n}\r\n\r\n\r\n\r\n/* dropdown */\r\n\r\n.bg-overlay{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    background-color: rgba(0,0,0,0.6);\r\n    z-index: 99;\r\n    margin-top: 100px;\r\n}\r\n\r\n/* Nav-container */\r\n\r\n/* responsive */\r\n@media (max-width: 1080px){\r\n    .navbar .logo-container {\r\n        text-align: left;\r\n    }\r\n\r\n    .nav-container .menu > li {\r\n        margin: 0px 14px;\r\n    }\r\n}\r\n\r\n/* responsive */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/navigation/desktop/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\" id=\"navbar\">\r\n  <!-- logo - container -->\r\n    <div class=\"logo-container\">\r\n      <div class=\"mic-logo\">\r\n        <a href=\"/\">\r\n          <img src=\"/assets/images/mic_logo.svg\" alt=\"MyInsuranceClub\">\r\n        </a>\r\n      </div>\r\n      <div class=\"mic-right-txt\">\r\n      India's 1st IRDAI Approved Insurance Web Aggregator\r\n      </div>\r\n    </div>\r\n  <!-- /logo - container -->\r\n  <!-- nav - container -->\r\n  \r\n    <div class=\"nav-container\">\r\n      <ul class=\"menu\">\r\n\r\n        <li class=\"drop-down\" (mouseenter) =\"navBgOverlay=true\"  (mouseleave) =\"navBgOverlay=false\">\r\n          <a href=\"#\">Our Products</a>\r\n          <div class=\"mic-menu\">\r\n\t\t\t\t\t\t<div class=\"mic-menu-cont\">\r\n\t\t\t\t\t\t\t<div class=\"mm-3column\">\r\n\t\t\t\t\t\t\t\t<div class=\"categories-list\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"hd\">Motor Insurance</div>\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"/car-insurance\">Car Insurance</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"/two-wheeler\">Two-Wheeler Insurance</a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"mm-3column\">\r\n\t\t\t\t\t\t\t\t<div class=\"categories-list\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"hd\">Health Insurance</div>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"categories-list-child\">\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"/health-insurance\">Health Insurance</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"/critical-illness\">Critical Illness Insurance</a></li>\r\n                    <li><a href=\"/personal-accident\">Personal Accident Insurance</a></li>\r\n                  </ul>\r\n                  <ul>\r\n                      <li><a href=\"/health-insurance/maternity-insurance\">Maternity Plans</a></li>\r\n                      <li><a href=\"/health-insurance/senior-citizen\">Senior Citizens Plans</a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"mm-3column\">\r\n\t\t\t\t\t\t\t\t<div class=\"categories-list\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"hd\">Life Insurance</div> \r\n\t\t\t\t\t\t\t\t\t<ul class=\"categories-list-child\">\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"/life-insurance/term-insurance\">Term Plans</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"/life-insurance/endowment-insurance\">Endowment Plans</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"/life-insurance/money-back-policy\">Money Back Plans</a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"/life-insurance/child-plans\">Child Plans</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"/life-insurance/pension-plan\">Pension Plans</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"/life-insurance/ulip\">ULIPs</a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"mm-3column\">\r\n\t\t\t\t\t\t\t\t<div class=\"categories-list\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"hd\">Other Insurance</div>\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"/travel-insurance\">Travel Insurance</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"/home-insurance\">Home Insurance</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"/corporate-insurance\">Corporate Insurance</a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n        </li>\r\n\r\n        <li>\r\n          <a href=\"#\">My Account</a>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n   <!-- /nav - container -->\r\n\t</div>\r\n\t<div id=\"bg_overlay\" *ngIf=\"navBgOverlay\" class=\"bg-overlay\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/navigation/desktop/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
        this.navBgOverlay = false;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/layout/navigation/desktop/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/navigation/desktop/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatExpansionModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatExpansionModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/product/feature/feature.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".feature-wrapper{\r\n    background: url(https://anil24.github.io/mic-app/assets/images/circle-spiral-background.jpg);\r\n    background-repeat: repeat-x;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    padding: 2em 1em;\r\n    border-bottom: 1px solid #ececec;\r\n    border-top: 1px solid #ececec;\r\n}\r\n\r\n.feature-wrapper .mic-container{\r\n    padding: 0 15px;\r\n}\r\n\r\n.feature-wrapper .feature-cont{\r\n    margin: 0px;\r\n    padding-left: 0px;\r\n    overflow: hidden;\r\n}\r\n\r\n.feature-wrapper .feature-cont .feature-col{\r\n    list-style-type: none;\r\n    width: 33.33%;\r\n    float: left;\r\n    padding: 2em 5px 0px 5px;\r\n    margin-bottom: 1em;\r\n    text-align: center;\r\n}\r\n\r\n.feature-col .feature-title{\r\n    display: inline-block;\r\n    color: #151515;\r\n    font-weight: 400;\r\n    line-height: 1.1em;\r\n    font-size: 3.3em;\r\n    padding: 10px 18px .6em 0;\r\n    position: relative;\r\n}\r\n\r\n.feature-col .feature-title:after {\r\n    content: \" \";  \r\n    height: 18px;\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0;\r\n    width: 18px;\r\n    border: 3px solid #ff6633;\r\n    border-radius: 50%;\r\n}\r\n\r\n.feature-col .feature-desc, .feature-col .feature-imp{\r\n    width: 100%;\r\n    font-size: 1.111em;\r\n    line-height: 1.6em;\r\n}\r\n\r\n.feature-col .feature-imp{\r\n    color: #F16F21;\r\n}\r\n\r\n@media (max-width: 992px){\r\n    .feature-wrapper{\r\n        background-repeat: repeat;\r\n    }\r\n\r\n    .feature-wrapper .feature-cont .feature-col{\r\n        float: none;\r\n        width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/feature/feature.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feature-wrapper\">\r\n  <div class=\"mic-container\">\r\n    <ul class=\"feature-cont\">\r\n      \r\n      <!-- first-col -->\r\n      <li class=\"feature-col\">\r\n        <label class=\"feature-title\">Saves Money</label>\r\n        <div class=\"feature-desc\">By comparing plans with us you can save a large amount of money every year.</div>\r\n        <div class=\"feature-imp\">Money saver</div>\r\n      </li>\r\n      <!-- /first-col -->\r\n\r\n      <!-- second-col -->\r\n      <li class=\"feature-col\">\r\n        <label class=\"feature-title\">Fast</label>\r\n        <div class=\"feature-desc\">In just a few seconds, we will display premiums from different insurance companies.</div>\r\n        <div class=\"feature-imp\">Quick comparison</div>\r\n      </li>\r\n      <!-- /second-col -->\r\n\r\n      <!-- third-col -->\r\n      <li class=\"feature-col\">\r\n        <label class=\"feature-title\">Un-biased</label>\r\n        <div class=\"feature-desc\">We display premiums from all insurance companies partnered with us. No one is left out!</div>\r\n        <div class=\"feature-imp\">Fair comparison</div>\r\n      </li>\r\n      <!-- /third-col -->\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n "

/***/ }),

/***/ "../../../../../src/app/product/feature/feature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeatureComponent = (function () {
    function FeatureComponent() {
    }
    FeatureComponent.prototype.ngOnInit = function () {
    };
    FeatureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feature',
            template: __webpack_require__("../../../../../src/app/product/feature/feature.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/feature/feature.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureComponent);
    return FeatureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/health/about-product/about-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .aboutpd-wrapper .mic-container{\r\n    padding: 0 15px;\r\n}\r\n\r\n.mat-expansion-panel-spacing {\r\n    margin: 0;\r\n}\r\n\r\n.aboutpd-wrapper .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {\r\n    background: #ffffffff;\r\n}\r\n\r\n.aboutpd-wrapper .mat-expansion-panel-header{\r\n    font-family: \"Open Sans\", Arial, serif;\r\n    position: relative; \r\n}\r\n\r\n.aboutpd-wrapper .mat-expansion-panel:not([class*=mat-elevation-z]) {\r\n    border-bottom: 1px solid #d6dde3;\r\n    box-shadow: none;   \r\n}\r\n\r\n.aboutpd-wrapper .mat-expansion-panel:last-child:not([class*=mat-elevation-z]) {\r\n    border-bottom: none;\r\n}\r\n\r\n.aboutpd-wrapper .mat-expansion-panel-header-title{\r\n    font-weight: 400;\r\n    font-size: 26px;\r\n    line-height: 29px;\r\n    color: #5a5a5a;\r\n    padding: .5em .5em .5em .7em;\r\n}\r\n\r\n\r\n.aboutpd-wrapper .aboutpd-icon{\r\n    position: absolute;\r\n    left: 0;\r\n    border: 1px solid #48afdb;\r\n    font-size: 15px;\r\n    width: 28px;\r\n    height: 28px;\r\n    border-radius: 50%;\r\n    color: #cac6c6;\r\n    line-height: 28px;\r\n    text-align: center;\r\n}\r\n\r\n.aboutpd-wrapper .aboutpd-block{\r\n    margin-bottom: 20px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.aboutpd-wrapper .aboutpd-row{\r\n    font-family: \"Open Sans\", Arial, serif;\r\n    padding: 0 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.aboutpd-row .sec-title{\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    color: #5a5a5a;\r\n    outline: none;\r\n    margin: 0 0 10px;\r\n}\r\n\r\n.aboutpd-row .sec-desc{\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    line-height: 22px;\r\n}\r\n\r\n@media (max-width: 992px){\r\n    .aboutpd-wrapper .aboutpd-row {\r\n        padding: 0 18px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/health/about-product/about-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"aboutpd-wrapper\">\r\n  <div class=\"mic-container\">\r\n    <mat-accordion>\r\n      <mat-expansion-panel (opened)=\"setaboutpdStep(0,true)\" (closed)=\"setaboutpdStep(0,false)\" hideToggle=\"true\">\r\n        <mat-expansion-panel-header [collapsedHeight]=\"'75px'\">\r\n          <mat-panel-title>\r\n            <i class=\"fa fa-plus aboutpd-icon\" aria-hidden=\"true\" *ngIf=\"!panelOpenState[0]\"></i>\r\n            <i class=\"fa fa-minus aboutpd-icon\" aria-hidden=\"true\" *ngIf=\"panelOpenState[0]\"></i>\r\n            What is Health Insurance?\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <div class=\"aboutpd-row\">\r\n          <div class=\"mic-col-12\">\r\n            <div class=\"aboutpd-block\">\r\n              <div class=\"sec-desc\">\r\n                Health Insurance, also known as Mediclaim in India, is a form of insurance which covers the expenses incurred on medical\r\n                treatment and hospitalisation. It covers the policyholder against any financial constraints arising from\r\n                medical emergencies. In case of sudden hospitalisation, illness or accident, health insurance takes care\r\n                of the expenses on medicines, oxygen, ambulance, blood, hospital room, various medical tests and almost all\r\n                other costs involved. By paying a small premium every year, you can ensure that any big medical expenses,\r\n                if incurred, will not burn a hole in your pocket. The plan can be taken for an individual or for your family\r\n                as a Family Floater Health Insurance Plan.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel (opened)=\"setaboutpdStep(1,true)\" (closed)=\"setaboutpdStep(1,false)\" hideToggle=\"true\">\r\n        <mat-expansion-panel-header [collapsedHeight]=\"'75px'\">\r\n          <mat-panel-title>\r\n            <i class=\"fa fa-plus aboutpd-icon\" aria-hidden=\"true\" *ngIf=\"!panelOpenState[1]\"></i>\r\n            <i class=\"fa fa-minus aboutpd-icon\" aria-hidden=\"true\" *ngIf=\"panelOpenState[1]\"></i>\r\n            Major Benefits in a Health Insurance Policy\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <!-- /first row -->\r\n        <div class=\"aboutpd-row\">\r\n          <!-- first col -->\r\n          <div class=\"mic-col-4\">\r\n            <div class=\"aboutpd-block\">\r\n              <h3 class=\"sec-title\">Cashless facility</h3>\r\n              <div class=\"sec-desc\">\r\n                Each health insurance company ties up with a large number of hospitals to provide cashless health insurance facility. If\r\n                you are admitted to any of the network hospitals, you would not have to pay the expenses from your pocket.\r\n                In case the hospital is not part of the network, you will have to pay the hospital and the insurance company\r\n                will reimburse the costs to you later.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /first col -->\r\n\r\n          <!-- second col -->\r\n          <div class=\"mic-col-4\">\r\n            <div class=\"aboutpd-block\">\r\n              <h3 class=\"sec-title\">Pre-hospitalisation expenses</h3>\r\n              <div class=\"sec-desc\">\r\n                In case you have incurred treatment costs for the ailment for which you later get admitted to a hospital, the insurance company\r\n                will bear those costs also. Usually the payout is for costs incurred between 30 to 60 days before hospitalisation.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /second col -->\r\n\r\n          <!-- third col -->\r\n          <div class=\"mic-col-4\">\r\n            <div class=\"aboutpd-block\">\r\n              <h3 class=\"sec-title\">Hospitalisation Expenses</h3>\r\n              <div class=\"sec-desc\">Costs incurred if a policyholder is admitted to the hospital for more than 24 hours are covered by the health\r\n                insurance plan.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /third col -->\r\n        </div>\r\n        <!-- /first row -->\r\n\r\n        <!-- second row -->\r\n        <div class=\"aboutpd-row\">\r\n          <!-- first col -->\r\n          <div class=\"mic-col-4\">\r\n            <div class=\"aboutpd-block\">\r\n              <h3 class=\"sec-title\">Post-hospitalisation expenses</h3>\r\n              <div class=\"sec-desc\">\r\n                Even after you are discharged from the hospital, you will incur costs during the recovery period. Most mediclaim policies\r\n                will cover the expenses incurred 60 to 90 days after hospitalisation.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /first col -->\r\n\r\n          <!-- second col -->\r\n          <div class=\"mic-col-4\">\r\n            <div class=\"aboutpd-block\">\r\n              <h3 class=\"sec-title\">Day Care Procedure Expenses</h3>\r\n              <div class=\"sec-desc\">\r\n                Due to advancement in technology some of the treatments no more require a 24 hours of hospitalisation. Your health insurance\r\n                policy will cover the costs incurred for these treatments also.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /second col -->\r\n\r\n          <!-- third col -->\r\n          <div class=\"mic-col-4\">\r\n            <div class=\"aboutpd-block\">\r\n              <h3 class=\"sec-title\">Ambulance Charges</h3>\r\n              <div class=\"sec-desc\">\r\n                In most cases the ambulance charges are taken up by the policy and the policy holder usually doesn't have to bear the burden\r\n                of the same.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /third col -->\r\n        </div>\r\n        <!-- /second row -->\r\n\r\n        <!-- third row -->\r\n        <div class=\"aboutpd-row\">\r\n          <!-- first col -->\r\n          <div class=\"mic-col-4\">\r\n            <div class=\"aboutpd-block\">\r\n              <h3 class=\"sec-title\">Cover for Pre-existing Diseases</h3>\r\n              <div class=\"sec-desc\">\r\n                Health insurance policies have a facility of covering pre-existing diseases after 3 or 4 years of continuously renewing the\r\n                policy, i.e. if someone has diabetes, then after completion of 3 or 4 years of continuous renewal with the\r\n                same insurer (depending on the plan offered and his age), any hospitalisation due to diabetes will also be\r\n                covered..\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /first col -->\r\n\r\n          <!-- second col -->\r\n          <div class=\"mic-col-4\">\r\n            <div class=\"aboutpd-block\">\r\n              <h3 class=\"sec-title\">Tax Benefits</h3>\r\n              <div class=\"sec-desc\">\r\n                The premiums paid for a Health Insurance Policy are exempted for Under Section 80D of the Income Tax Act. Income tax benefit\r\n                is provided to the customer for the premium amount till a maximum of Rs. 15,000 for regular and Rs. 20,000\r\n                for senior citizen respectively.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /second col -->\r\n\r\n          <!-- third col -->\r\n          <div class=\"mic-col-4\">\r\n            <div class=\"aboutpd-block\">\r\n              <h3 class=\"sec-title\">No-Claim Bonus</h3>\r\n              <div class=\"sec-desc\">\r\n                If there has been no claim in the previous year, a benefit is passed on to the policyholder, either by reducing the premium\r\n                or by increasing the sum assured by a certain percentage of the existing premium.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /third col -->\r\n        </div>\r\n        <!-- /third row -->\r\n\r\n        <!-- third row -->\r\n        <div class=\"aboutpd-row\">\r\n          <!-- first col -->\r\n          <div class=\"mic-col-4\">\r\n            <div class=\"aboutpd-block\">\r\n              <h3 class=\"sec-title\">Health Check-Up</h3>\r\n              <div class=\"sec-desc\">\r\n                Some health insurance policies have a facility of free health check-up for the well being of the individual if there is no\r\n                claim made for certain number of years.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /first col -->\r\n\r\n          <!-- second col -->\r\n          <div class=\"mic-col-4\">\r\n            <div class=\"aboutpd-block\">\r\n              <h3 class=\"sec-title\">Organ Donor Expenses</h3>\r\n              <div class=\"sec-desc\">\r\n                The medical expenses incurred in harvesting the organ for a transplant is paid by the policy.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /second col -->\r\n        </div>\r\n        <!-- /fourth row -->\r\n\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/health/about-product/about-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutProductComponent = (function () {
    function AboutProductComponent() {
        this.panelOpenState = [false, false];
    }
    AboutProductComponent.prototype.setaboutpdStep = function (index, state) {
        this.panelOpenState[index] = state;
    };
    AboutProductComponent.prototype.ngOnInit = function () {
    };
    AboutProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-product',
            template: __webpack_require__("../../../../../src/app/product/health/about-product/about-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/health/about-product/about-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutProductComponent);
    return AboutProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/health/desktop/healthform/health-section/health-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/health/desktop/healthform/health-section/health-section.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  health-section works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/product/health/desktop/healthform/health-section/health-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HealthSectionComponent = (function () {
    function HealthSectionComponent() {
    }
    HealthSectionComponent.prototype.ngOnInit = function () {
    };
    HealthSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-health-section',
            template: __webpack_require__("../../../../../src/app/product/health/desktop/healthform/health-section/health-section.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/health/desktop/healthform/health-section/health-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HealthSectionComponent);
    return HealthSectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/health/desktop/healthform/healthform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section-mic{\r\n    font-family: \"Open Sans\", Arial, serif;\r\n    background: #9AEDFF;\r\n    display: table;\r\n    height: 100vh;\r\n    padding: 0;\r\n    z-index: 99;\r\n    width: 100%;\r\n}\r\n\r\n.section-mic .mic-content {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    z-index: 99;\r\n    text-align: center;\r\n}\r\n\r\n.section-mic .mic-content .form-container {\r\n    margin: 100px 0 20px;\r\n    position: relative;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.section-mic.health{\r\n    background: #fcbc22;\r\n}\r\n\r\n.form-container .hd {\r\n    color: #ffffff;\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.form-container .hd_in {\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-container .form-box {\r\n    font-family: \"Open Sans\", Arial, serif;\r\n    width: 75%;\r\n    margin: 0 auto;\r\n    padding: 0 0 35px 0;\r\n    margin-bottom: 36px;\r\n}\r\n\r\n.form-box mat-card-header{\r\n    background: #fbfbfb;     \r\n}\r\n\r\n.form-box .form-hd {\r\n    font-family: \"Open Sans\", Arial, serif;\r\n    font-size: 20px;\r\n    color: #000000;\r\n    text-align: left;\r\n    padding: 12px 10px 12px 67px;\r\n    background: #fbfbfb url(https://anil24.github.io/mic-app/assets/images/policy_icon.png) no-repeat left 30px center;\r\n    background-size: 22px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.form-box .form-hd.mem-dtl {\r\n    background: #fbfbfb url(https://anil24.github.io/mic-app/assets/images/member_icon.png) no-repeat left 30px center;\r\n    background-size: 18px;\r\n}\r\n\r\n.form-box .form-content{\r\n    padding: 0 40px;\r\n}\r\n\r\n.form-content .form-sec{\r\n    display: inline-block;\r\n    width: 100%;\r\n    padding: 25px 0px 0px 0px;\r\n}\r\n\r\n.form-sec .from-sec-50{\r\n    width: 49%;\r\n    margin-right: 1%;\r\n    float: left;\r\n}\r\n\r\n.form-sec .from-sec-50:last-child{\r\n    margin-left: 1%;\r\n    margin-right: 0px;\r\n}\r\n\r\n.form-sec .form-sec-tt {\r\n    color: #000000;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    padding-bottom: 12px;\r\n}\r\n\r\n.form-sec .form-input-cont{\r\n    width: 100%;\r\n    display: inline-block;\r\n}\r\n\r\n.form-sec .form-input {\r\n    font-family: \"Open Sans\", Arial, serif;\r\n    width: 23.5%;\r\n    float: left;\r\n    color: #000000;\r\n    border-radius: 2px;\r\n    font-size: 13px;\r\n    text-transform: uppercase;\r\n    background: #f5f5f5;\r\n    line-height: 1.5;\r\n    padding: 11px 0;\r\n    margin-right: 2%;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\n.form-sec .form-in-2 .form-input, .form-sec .form-in-2 label .form-input{\r\n    width: 48%;\r\n    margin-right: 4%;\r\n}\r\n\r\n.form-sec .form-in-2 .form-input:last-child, .form-sec .form-in-2 label:last-child .form-input{\r\n    margin-right: 0;\r\n}\r\n\r\n.form-sec .form-in-6 .form-input{\r\n    width: 15%;\r\n}\r\n\r\n.form-input .mat-button-focus-overlay {\r\n    background-color: rgba(0,0,0,0); \r\n}\r\n\r\n.form-sec .form-input.no-rgt-mar {\r\n    margin-right: 0px;\r\n}\r\n\r\n.form-sec .form-input:hover, .form-sec .form-input.active {\r\n    background: #f3a91f;\r\n    color: #ffffff;\r\n    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.form-menu{\r\n    width: 100%;\r\n    position: absolute;\r\n    left: 0px;\r\n    list-style-type: none;\r\n    padding-left: 0px;\r\n    top: 39px;\r\n    margin-top: 0px;\r\n    background-color: #ffffff;\r\n    min-height: 20px;\r\n    max-height: 200px;\r\n    overflow: auto;\r\n    z-index: 99;\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n.form-sec .form-input:hover .form-menu li{\r\n    color: #000000;\r\n}\r\n\r\n.form-sec .mic-form-menu{\r\n    display:-ms-flexbox;\r\n    display:flex; \r\n    position:relative;\r\n}\r\n\r\n.mic-form-menu .form-menu-tt{\r\n    width:100%;\r\n    text-align: center;\r\n}\r\n\r\n.form-menu li{\r\n    padding: 11px 10px;\r\n    cursor: pointer;   \r\n}\r\n\r\n.form-menu li:hover, .form-menu li.active{\r\n    background: #f3a91f;\r\n    color: #ffffff!important;\r\n    transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);  \r\n}\r\n\r\n.form-menu li:first-child{\r\n    margin-top: 5px;\r\n}\r\n\r\n.form-menu li:last-child{\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.form-sec .form-input-cont input{\r\n    width: 100%;\r\n    color: #000000;\r\n    border: 1px solid #bfbfbf;\r\n    border-radius: 2px;\r\n    display: block;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    height: 41px;\r\n    padding: 5px 18px;\r\n}\r\n\r\n.form-sec .form-input-cont input:focus {\r\n    border-color: #66afe9;\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);\r\n}\r\n\r\n.form-container .form-terms {\r\n    font-size: 13px;\r\n    color: #989595;\r\n    width: 100%;\r\n    text-align: left;\r\n    padding: 15px 0px 30px 0px;\r\n}\r\n\r\n.form-container .form-terms input[type=\"checkbox\"] {\r\n    float: left;\r\n    margin-right: 5px;\r\n    outline: none;\r\n    margin-top: 3px;    \r\n}\r\n\r\n.form-container .form-terms a {\r\n    text-decoration: none;\r\n    color: #3186c8;\r\n}\r\n\r\n.form-container .form-submit {\r\n    width: 100%;\r\n    border-top: 1px solid #edecec;\r\n    padding: 30px 38px 0px 38px;\r\n}\r\n\r\n.form-container .form-submit button {\r\n    width: 50%;\r\n    background: #ff6633;\r\n    color: #ffffff;\r\n    text-transform: uppercase;\r\n    font-size: 16px;\r\n    line-height: 42px;\r\n}\r\n\r\n.error{\r\n    display: block;\r\n    color: #db4437;\r\n    text-align: left;\r\n    padding-top: 8px;\r\n    font-size: 11px;\r\n    animation: 0.1s errorAnim forwards;\r\n    float: left;\r\n}\r\n\r\n.form-sec .f-ic {\r\n    background: #f5f5f5 url(https://anil24.github.io/mic-app/assets/images/female_icon.png) no-repeat left 30px center;\r\n    background-size: 10px;\r\n}\r\n\r\n.form-sec .f-ic:hover, .form-sec .f-ic.active, .form-input-cont.form-gender input[type=\"radio\"]:checked + label>.f-ic {\r\n    background: #f3a91f url(https://anil24.github.io/mic-app/assets/images/female_hover.png) no-repeat left 30px center;\r\n    background-size: 10px;\r\n    color: #ffffff;\r\n}\r\n\r\n.form-sec .m-ic {\r\n    background: #f5f5f5 url(https://anil24.github.io/mic-app/assets/images/male_icon.png) no-repeat left 30px center;\r\n    background-size: 10px;\r\n}\r\n\r\n.form-sec .m-ic:hover, .form-sec .m-ic.active, .form-input-cont.form-gender input[type=\"radio\"]:checked + label>.m-ic {\r\n    background: #f3a91f url(https://anil24.github.io/mic-app/assets/images/male_hover.png) no-repeat left 30px center;\r\n    background-size: 10px;\r\n    color: #ffffff;\r\n}\r\n\r\n.form-input-cont.form-gender input[type=\"radio\"]{\r\n    display: none;\r\n}\r\n\r\n.mic-form-menu .select-label{\r\n    font-family: \"Open Sans\", Arial, serif;\r\n    position:absolute;\r\n    line-height: 14px;\r\n    padding-left: 7px;\r\n}\r\n\r\n.mic-form-menu .mat-select-value-text {\r\n    padding-left: 10px;\r\n}\r\n\r\n.form-box .mic-form-menu.other-menu{\r\n    padding: 1px;\r\n}\r\n\r\n.mic-form-menu.other-menu .select-label:hover, .mic-form-menu.other-menu .select-label.active{\r\n    background-color: #f3a91f;\r\n    color: #ffffff;\r\n    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.mic-form-menu.other-menu .select-label{\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0px;\r\n    left: 0px;\r\n    text-align: center;\r\n    padding: 12px;\r\n    cursor: pointer;\r\n    z-index: 9;\r\n    background-color: whitesmoke;\r\n    line-height: 14px;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n}\r\n\r\n.mic-form-menu.other-menu .select-label i{\r\n    float: right;\r\n    font-size: 18px;\r\n    line-height: 16px;\r\n}\r\n\r\n\r\n.form-top-mar{\r\n    margin-top: 75px;\r\n}\r\n\r\n.mic-chip .mat-chip:not(.mat-basic-chip) {\r\n    background-color: #f4a91f;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n}\r\n\r\n.mic-chip .mat-chip:not(.mat-basic-chip) .mat-chip-remove {\r\n    color: #ffffff;\r\n}\r\n\r\n.mic-chip {\r\n    float: left;\r\n    width: 100%;\r\n    margin-top: 10px;\r\n}\r\n\r\n.error-class {\r\n    border: 1px solid #ff0000 !important;\r\n    border-radius: 0;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.warning-icon{\r\n    font-size: 12px;\r\n    padding-top: 1px;\r\n    float: left;\r\n    color: red;\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n@keyframes errorAnim {\r\n    from {\r\n        opacity:0;\r\n        transform: translateY(-10px);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes Slider {\r\n    from {\r\n      top: 0px;\r\n    }\r\n    to {\r\n      top: 100px;\r\n    }\r\n  }\r\n\r\n\r\n/* for screen size 1440 and lower */\r\n@media (min-width: 1440px){\r\n    .form-container .hd{\r\n        font-size: 28px;\r\n    }\r\n\r\n    .form-container .hd_in {\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n/* for max screen size 1280   */\r\n@media (max-width: 1280px){\r\n    .form-container .form-box {\r\n        width: 85%;\r\n    }\r\n\r\n    .form-box .form-hd {\r\n        padding: 10px 10px 10px 67px;\r\n        font-size: 18px;\r\n        background-size: 20px;\r\n    }\r\n\r\n    .form-content .form-sec {\r\n        padding: 22px 0px 0px 0px;\r\n    }\r\n\r\n    .form-sec .form-sec-tt {\r\n        font-size: 15px;\r\n    }\r\n\r\n    .form-sec .form-input {\r\n        font-size: 12px;\r\n    }\r\n\r\n    .cssmenu ul, .cssmenu li, .cssmenu span, .cssmenu a {\r\n        font-size: 12px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/health/desktop/healthform/healthform.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-mic health\" id=\"healthform_cont\">\r\n  <div class=\"mic-content\" [hidden]=\"submitted\">\r\n    <form [formGroup]=\"healthForm\" (ngSubmit)=\"updateHealthForm(healthForm.value)\" novalidate>\r\n      <div class=\"form-container\" [ngClass]=\"{'form-top-mar': showMemberSec}\"> \r\n        <div class=\"hd\">Compare &amp; Buy Health Insurance Plans</div>\r\n        <div class=\"hd_in\">Choose from 96 plans from 21 companies</div>\r\n\r\n        <!-- policy details -->\r\n        <mat-card class=\"form-box\">\r\n          <mat-card-header>\r\n            <mat-card-title class=\"form-hd\">Policy Details</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content class=\"form-content\">\r\n            <div class=\"form-sec\">\r\n              <div class=\"form-sec-tt\">Amount of cover you want?</div>\r\n              <div id=\"coverborder\" class=\"form-input-cont\" [ngClass]=\"{'error-class': coverError}\">\r\n                <a mat-button class=\"form-input\" [ngClass]=\"{'active': 'cover_a' == selectedCover}\" (click)=\"coverAmount($event,'5 Lakhs','500000','cover_a')\">5 Lakhs</a>\r\n                <a mat-button class=\"form-input\" [ngClass]=\"{'active': 'cover_b' == selectedCover}\" (click)=\"coverAmount($event,'4 Lakhs','400000','cover_b')\">4 Lakhs</a>\r\n                <a mat-button class=\"form-input\" [ngClass]=\"{'active': 'cover_c' == selectedCover}\" (click)=\"coverAmount($event,'3 Lakhs','300000','cover_c')\">3 Lakhs</a>\r\n                    <mat-form-field class=\"mic-form-menu other-menu no-rgt-mar\">\r\n                      <a mat-button class=\"select-label\" [ngClass]=\"{'active': selectedCoverList}\">Others<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\r\n                      <mat-select >\r\n                        <mat-option class=\"ht-menu-option\" value=\"{{coverList.amount}}\" *ngFor=\"let coverList of cover_amount;\" [ngClass]=\"{ 'mat-selected mat-active': coverList == selectedCover}\" (click)=\"coverAmount($event,coverList.amount,coverList.literal,coverList)\">{{coverList.amount}}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  <!-- </div> -->\r\n              </div>\r\n              <mat-chip-list class=\"mic-chip\" *ngIf=\"coverChip != ''\">\r\n                <span style=\"margin-right:10px;\">You have selected</span> \r\n                <mat-chip [removable]=\"removeCoverChip\" (remove)=\"removeChip('coverage_amount','coverage_amount_literal')\">\r\n                    {{coverChip}} <mat-icon matChipRemove *ngIf=\"removeCoverChip\">cancel</mat-icon>\r\n                </mat-chip>\r\n              </mat-chip-list>\r\n             \r\n              <div class=\"error\" *ngIf=\"coverError\"><i class=\"material-icons warning-icon\">warning</i> Please select coverage amount</div>\r\n            </div>\r\n            <div class=\"form-sec\">\r\n              <div class=\"form-sec-tt\">Whom do you want to cover?</div>\r\n              <div id=\"termborder\" class=\"form-input-cont\" [ngClass]=\"{'error-class': memberError}\">\r\n                <a mat-button class=\"form-input\" [ngClass]=\"{'active': 'person_cov_a' == selectedMember}\" (click)=\"memberDetails($event,'1A','MySelf','person_cov_a')\">Myself</a>\r\n                <a mat-button class=\"form-input\" [ngClass]=\"{'active': 'person_cov_b' == selectedMember}\" (click)=\"memberDetails($event,'2A','Self + Spouse','person_cov_b')\">Self + Spouse</a>\r\n                <a mat-button class=\"form-input\" [ngClass]=\"{'active': 'person_cov_c' == selectedMember}\" (click)=\"memberDetails($event,'2A1C','Self + Spouse + 1 Child','person_cov_c')\">Self + Spouse + 1 Child</a>\r\n                <mat-form-field class=\"mic-form-menu other-menu no-rgt-mar\">\r\n                  <a mat-button class=\"select-label\" [ngClass]=\"{'active': selectedMemberlist}\">Others<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\r\n                  <mat-select >\r\n                    <mat-option class=\"ht-menu-option\" value=\"{{planList.name}}\" *ngFor=\"let planList of plan_type_name;\" [ngClass]=\"{'mat-selected mat-active': coverList == selectedMember}\" (click)=\"memberDetails($event,planList.type,planList.name,planList)\">{{planList.name}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <mat-chip-list class=\"mic-chip\" *ngIf=\"planChip != ''\">\r\n                <span style=\"margin-right:10px;\">You have selected</span> \r\n                <mat-chip [removable]=\"removePlanChip\" (remove)=\"removeChip('plan_type','plan_type_name')\">\r\n                    {{planChip}} <mat-icon matChipRemove *ngIf=\"removePlanChip\">cancel</mat-icon>\r\n                </mat-chip>\r\n              </mat-chip-list>\r\n              <div class=\"error\" *ngIf=\"memberError\"><i class=\"material-icons warning-icon\">warning</i> Please select policy term</div>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <!-- /policy details -->\r\n\r\n        <!-- member details -->\r\n        <mat-card class=\"form-box\" *ngIf=\"showMemberSec\" id=\"member_details\">\r\n          <mat-card-header>\r\n            <mat-card-title class=\"form-hd mem-dtl\">Member Details</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content class=\"form-content\" >\r\n            <!-- self -->\r\n            <div class=\"form-sec\">\r\n              <div class=\"from-sec-50\">\r\n                <div class=\"form-sec-tt\">Policyholder Age</div>\r\n\r\n                <mat-form-field class=\"mic-form-menu no-rgt-mar\" [ngClass]=\"{'error-class':healthForm.controls['cust_dob'].invalid && (submitted && healthForm.invalid)}\">\r\n                  <a mat-button class=\"select-label\" *ngIf=\"healthForm.controls['cust_dob'].value == ''\">Select Age</a>\r\n                  <mat-select formControlName=\"cust_dob\">\r\n                    <mat-option class=\"ht-menu-option\" value=\"{{i+18}}\" *ngFor=\"let adultAge of adultAges; let i=index\">{{i+18}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <div class=\"error\" *ngIf=\"healthForm.controls['cust_dob'].invalid && (submitted && healthForm.invalid)\">\r\n                    <div *ngIf=\"healthForm.controls['cust_dob'].hasError('required')\"><i class=\"material-icons warning-icon\">warning</i> {{ rqdMsg }}</div>\r\n                  </div>\r\n              </div>\r\n\r\n               \r\n\r\n              <div class=\"from-sec-50\">\r\n                <div class=\"form-sec-tt\">Policyholder Gender</div>\r\n                <div class=\"form-input-cont form-gender form-in-2\" [ngClass]=\"{'error-class':healthForm.controls['cust_gender'].invalid && (submitted && healthForm.invalid)}\">\r\n                  <input type=\"radio\" id=\"m_self\" value=\"male\" formControlName=\"cust_gender\" (change)=\"setSpouseGender()\"  required>\r\n                  <label for=\"m_self\"><a class=\"form-input m-ic\" mat-button>Male</a></label>\r\n                  <input type=\"radio\" id=\"f_self\" value=\"female\" formControlName=\"cust_gender\" (change)=\"setSpouseGender()\" required>\r\n                  <label for=\"f_self\"><a class=\"form-input f-ic\" mat-button>female</a></label>\r\n                </div>\r\n                <div class=\"error\" *ngIf=\"healthForm.controls['cust_gender'].invalid && (submitted && healthForm.invalid)\">\r\n                    <div *ngIf=\"healthForm.controls['cust_gender'].hasError('required')\"><i class=\"material-icons warning-icon\">warning</i> {{ rqdMsg }}</div>\r\n                  </div>\r\n              </div>\r\n              \r\n            </div>\r\n            <!-- /self -->\r\n            <!-- spouse -->\r\n            <div class=\"form-sec\" formArrayName=\"spouces\" *ngFor=\"let spouce of healthForm.get('spouces').controls; let i = index;\">\r\n              <div [formGroupName]=\"i\">  \r\n              <div class=\"from-sec-50\">\r\n                    <div class=\"form-sec-tt\">Spouce Age</div>\r\n                    <mat-form-field class=\"mic-form-menu no-rgt-mar\" [ngClass]=\"{'error-class':healthForm.controls.spouces.controls[i].controls.spouce_dob.invalid && (submitted && healthForm.invalid)}\">\r\n                      <a mat-button class=\"select-label\" *ngIf=\"healthForm.controls.spouces.controls[i].controls.spouce_dob.value == ''\">Select Age</a>\r\n                      <mat-select formControlName=\"spouce_dob\">\r\n                        <mat-option class=\"ht-menu-option\" value=\"{{i+18}}\" *ngFor=\"let adultAge of adultAges; let i=index\">{{i+18}}</mat-option>\r\n                      </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"error\" *ngIf=\"healthForm.controls.spouces.controls[i].controls.spouce_dob.invalid && (submitted && healthForm.invalid)\">\r\n                        <div *ngIf=\"healthForm.controls.spouces.controls[i].controls.spouce_dob.hasError('required')\"><i class=\"material-icons warning-icon\">warning</i> {{ rqdMsg }}</div>\r\n                      </div>\r\n                    \r\n                </div>\r\n\r\n                \r\n\r\n                <div class=\"from-sec-50\">\r\n                  <div class=\"form-sec-tt\">Spouce Gender</div>\r\n                  <div class=\"form-input-cont form-gender form-in-2\" [ngClass]=\"{'error-class':healthForm.controls.spouces.controls[i].controls.spouce_gender.invalid && (submitted && healthForm.invalid)}\">\r\n                    <input type=\"radio\" id=\"m_spouce{{i}}\" value=\"male\" formControlName=\"spouce_gender\" disabled=\"true\" required>\r\n                    <label for=\"m_spouce{{i}}\"><a class=\"form-input m-ic\" mat-button>Male</a></label>\r\n                    <input type=\"radio\" id=\"f_spouce{{i}}\" value=\"female\" formControlName=\"spouce_gender\" disabled=\"true\" required>\r\n                    <label for=\"f_spouce{{i}}\"><a class=\"form-input f-ic\" mat-button>female</a></label>\r\n                  </div>\r\n                 \r\n                  <div class=\"error\" *ngIf=\"healthForm.controls.spouces.controls[i].controls.spouce_gender.invalid && (submitted && healthForm.invalid)\">\r\n                      <div *ngIf=\"healthForm.controls.spouces.controls[i].controls.spouce_gender.hasError('required')\"><i class=\"material-icons warning-icon\">warning</i> {{ rqdMsg }}</div>\r\n                    </div>\r\n\r\n                </div>\r\n                </div>\r\n              </div>\r\n            <!-- spouse -->\r\n\r\n            <!-- child -->\r\n            <div class=\"form-sec\" style=\"display:flex;\" formArrayName=\"childs\" *ngFor=\"let child of healthForm.get('childs').controls; let i = index;\">\r\n              <div [formGroupName]=\"i\" style=\"width: 100%;\">  \r\n              <div class=\"from-sec-50\">\r\n                    <div class=\"form-sec-tt\">Child {{i+1}} Age</div>\r\n                    <mat-form-field class=\"mic-form-menu no-rgt-mar\" [ngClass]=\"{'error-class':healthForm.controls.childs.controls[i].controls.child_dob.invalid && (submitted && healthForm.invalid)}\">\r\n                        <a mat-button class=\"select-label\" *ngIf=\"healthForm.controls.childs.controls[i].controls.child_dob.value == ''\">Select Age</a>\r\n                      <mat-select formControlName=\"child_dob\">\r\n                        <mat-option class=\"ht-menu-option\" value=\"0\" ><1</mat-option>\r\n                        <mat-option class=\"ht-menu-option\" value=\"{{i+1}}\" *ngFor=\"let childAge of childAges; let i=index\">{{i+1}}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                    <div class=\"error\" *ngIf=\"healthForm.controls.childs.controls[i].controls.child_dob.invalid && (submitted && healthForm.invalid)\">\r\n                        <div *ngIf=\"healthForm.controls.childs.controls[i].controls.child_dob.hasError('required')\"><i class=\"material-icons warning-icon\">warning</i> {{ rqdMsg }}</div>\r\n                      </div>\r\n                </div>\r\n                \r\n\r\n                <div class=\"from-sec-50\">\r\n                  <div class=\"form-sec-tt\">Child {{i+1}} Gender</div>\r\n                  <div class=\"form-input-cont form-gender form-in-2\" [ngClass]=\"{'error-class':healthForm.controls.childs.controls[i].controls.child_gender.invalid && (submitted && healthForm.invalid)}\">\r\n                    <input type=\"radio\" id=\"m_child{{i}}\" value=\"male\" formControlName=\"child_gender\" required>\r\n                    <label for=\"m_child{{i}}\"><a class=\"form-input m-ic\" mat-button>Male</a></label>\r\n                    <input type=\"radio\" id=\"f_child{{i}}\" value=\"female\" formControlName=\"child_gender\" required>\r\n                    <label for=\"f_child{{i}}\"><a class=\"form-input f-ic\" mat-button>female</a></label>\r\n                  </div>\r\n                 \r\n                  <div class=\"error\" *ngIf=\"healthForm.controls.childs.controls[i].controls.child_gender.invalid && (submitted && healthForm.invalid)\">\r\n                      <div *ngIf=\"healthForm.controls.childs.controls[i].controls.child_gender.hasError('required')\"><i class=\"material-icons warning-icon\">warning</i> {{ rqdMsg }}</div>\r\n                    </div>\r\n\r\n                </div>\r\n                </div>\r\n              </div>\r\n              <!-- child -->\r\n\r\n            <div class=\"form-sec\">\r\n              <div class=\"form-sec-tt\">City of Residence</div>\r\n\r\n              <div id=\"cityborder\" class=\"form-input-cont form-in-6\" [ngClass]=\"{'error-class': cityError}\">\r\n                <a class=\"form-input\" mat-button [ngClass]=\"{'active': 'city_a' == selectedCity}\" (click)=\"cityDetails($event,'590','Mumbai, Maharashtra','city_a')\">Mumbai</a>\r\n                <a class=\"form-input\" mat-button [ngClass]=\"{'active': 'city_b' == selectedCity}\" (click)=\"cityDetails($event,'188','Delhi, Delhi','city_b')\">Delhi</a>\r\n                <a class=\"form-input\" mat-button [ngClass]=\"{'active': 'city_c' == selectedCity}\" (click)=\"cityDetails($event,'393','Bengaluru, Karnataka','city_c')\">Bengaluru</a>\r\n                <a class=\"form-input\" mat-button [ngClass]=\"{'active': 'city_d' == selectedCity}\" (click)=\"cityDetails($event,'600','Pune, Maharashtra','city_d')\">Pune</a>\r\n                <a class=\"form-input\" mat-button [ngClass]=\"{'active': 'city_e' == selectedCity}\" (click)=\"cityDetails($event,'590','Chennai, Tamil Nadu','city_e')\">Chennai</a>\r\n                <mat-form-field class=\"mic-form-menu other-menu no-rgt-mar\">\r\n                  <label class=\"select-label\" [ngClass]=\"{'active': selectedCitylist}\">Others<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></label>\r\n                  <mat-select >\r\n                    <mat-option class=\"ht-menu-option\" [ngClass]=\"{'mat-selected mat-active': 'city_f' == selectedCity}\" (click)=\"cityDetails($event,'188','Delhi, Delhi','city_f')\">Delhi</mat-option>\r\n                    <mat-option class=\"ht-menu-option\" [ngClass]=\"{'mat-selected mat-active': 'city_g' == selectedCity}\" (click)=\"cityDetails($event,'590','Mumbai, Maharashtra','city_g')\">Mumbai</mat-option>\r\n                    <mat-option class=\"ht-menu-option\" [ngClass]=\"{'mat-selected mat-active': 'city_h' == selectedCity}\" (click)=\"cityDetails($event,'393','Bengaluru, Karnataka','city_h')\">Bengaluru</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"error\" *ngIf=\"cityError\"><i class=\"material-icons warning-icon\">warning</i> Please select your city</div>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <!-- /member details -->\r\n\r\n        <!-- policyholder details -->\r\n        <mat-card class=\"form-box\" *ngIf=\"showpolicyholderSec\" id=\"policyholder_details\">\r\n            <mat-card-header>\r\n              <mat-card-title class=\"form-hd mem-dtl\">Member Details</mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content class=\"form-content\">\r\n              <div class=\"form-sec\">\r\n                <div class=\"from-sec-50\">\r\n                    <div class=\"form-sec-tt\">Full Name</div>\r\n                    <div class=\"form-input-cont form-in-2\">\r\n                      <input type=\"text\" class=\"\" formControlName=\"cust_name\" required [ngClass]=\"{'error-class': healthForm.controls['cust_name'].invalid && (healthForm.controls['cust_name'].touched || (submitted && healthForm.invalid))}\">\r\n                      <div class=\"error\" *ngIf=\"healthForm.controls['cust_name'].invalid && (healthForm.controls['cust_name'].touched || (submitted && healthForm.invalid))\">\r\n                          <div *ngIf=\"healthForm.controls['cust_name'].hasError('required')\"><i class=\"material-icons warning-icon\">warning</i> {{ rqdMsg }}</div>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n          \r\n                <div class=\"from-sec-50\">\r\n                  <div class=\"form-sec-tt\">Mobile</div>\r\n                  <div class=\"form-input-cont form-in-2\">\r\n                      <input type=\"tel\" class=\"\" maxlength=\"10\" formControlName=\"cust_mobile\" required [ngClass]=\"{'error-class': healthForm.controls['cust_mobile'].invalid && (healthForm.controls['cust_mobile'].touched || (submitted && healthForm.invalid))}\">\r\n                      <div class=\"error\" *ngIf=\"healthForm.controls['cust_mobile'].invalid && (healthForm.controls['cust_mobile'].touched || (submitted && healthForm.invalid))\">\r\n                          <div *ngIf=\"healthForm.controls['cust_mobile'].hasError('required')\"><i class=\"material-icons warning-icon\">warning</i> {{ rqdMsg }}</div>\r\n                          <div *ngIf=\"healthForm.controls['cust_mobile'].hasError('pattern')\"><i class=\"material-icons warning-icon\">warning</i> Please enter valid mobile</div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n                \r\n              </div>\r\n              <div class=\"form-sec\">\r\n                <div class=\"form-sec-tt\">Email</div>\r\n                <div class=\"form-input-cont\">\r\n                    <input type=\"text\" class=\"\" formControlName=\"cust_email\" required [ngClass]=\"{'error-class':healthForm.controls['cust_email'].invalid && ( healthForm.controls['cust_email'].touched || (submitted && healthForm.invalid))}\">\r\n                    <div class=\"error\" *ngIf=\"healthForm.controls['cust_email'].invalid && ( healthForm.controls['cust_email'].touched || (submitted && healthForm.invalid))\">\r\n                      <div *ngIf=\"healthForm.controls['cust_email'].hasError('required')\"><i class=\"material-icons warning-icon\">warning</i> {{ rqdMsg }}</div>\r\n                      <div *ngIf=\"healthForm.controls['cust_email'].hasError('pattern')\"><i class=\"material-icons warning-icon\">warning</i> Please enter valid email</div>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-terms\">\r\n                <input type=\"checkbox\" id=\"check_term\" name=\"agree\" checked=\"\" class=\"field checkbox\" value=\"agree\">By sharing the above information I authorize MyInsuranceClub &amp; its partners to Call/SMS &amp; agree to the <a href=\"https://www.myinsuranceclub.com/terms-of-use\" class=\"link\" target=\"_blank\">Terms of Use.</a>\r\n                <div id=\"agree-error\" class=\"error_msg\" style=\"display:none;\"></div>\r\n              </div>\r\n\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" mat-raised-button>Show plans</button>                                                         \r\n              </div>  \r\n            </mat-card-content>\r\n          </mat-card>\r\n\r\n         \r\n        <!-- /member details -->\r\n\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n\r\n<!-- product bar -->\r\n<app-product-bar></app-product-bar>\r\n<!-- /product bar -->\r\n\r\n<!-- feature -->\r\n<app-feature></app-feature>\r\n<!-- /feature -->\r\n\r\n<!-- product-content -->\r\n<app-product-content></app-product-content>\r\n<!-- product-content -->\r\n\r\n<!-- testimonial -->\r\n<app-testimonial></app-testimonial>\r\n<!-- /testimonial -->\r\n\r\n<!-- about product -->\r\n<app-about-product></app-about-product>\r\n<!-- /about product-->\r\n\r\n<!-- prodcut blog -->\r\n<app-product-blog></app-product-blog>\r\n<!-- prodcut blog -->\r\n\r\n\r\n  "

/***/ }),

/***/ "../../../../../src/app/product/health/desktop/healthform/healthform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HealthformComponent = (function () {
    /* /City Details */
    function HealthformComponent(fb) {
        this.fb = fb;
        this.coverage_amount = '';
        this.rqdMsg = 'This field is required';
        this.submitted = false;
        this.selectedCover = '';
        this.selectedCoverList = false;
        this.coverError = false;
        this.memberError = false;
        this.cityError = false;
        this.selectedMember = '';
        this.selectedCity = '';
        this.selectedMemberlist = false;
        this.selectedCitylist = false;
        this.healthCover = false;
        this.whomCover = false;
        this.cityList = false;
        this.showMemberSec = false;
        this.showpolicyholderSec = false;
        this.removeCoverChip = true;
        this.removePlanChip = true;
        this.coverChip = '';
        this.planChip = '';
        this.adultAges = Array(83);
        this.childAges = Array(25);
        this.cover_amount = [
            { amount: '1 Lakh', literal: '100000' },
            { amount: '2 Lakhs', literal: '200000' },
            { amount: '6 Lakhs', literal: '600000' },
            { amount: '7 Lakhs', literal: '700000' },
            { amount: '7.5 Lakhs', literal: '750000' },
            { amount: '10 Lakhs', literal: '1000000' },
            { amount: '15 Lakhs', literal: '1500000' },
            { amount: '20 Lakhs', literal: '2000000' },
            { amount: '25 Lakhs', literal: '2500000' },
            { amount: '30 Lakhs', literal: '3000000' },
            { amount: '50 Lakhs', literal: '5000000' },
            { amount: '60 Lakhs', literal: '6000000' },
            { amount: '1 Crore', literal: '10000000' },
            { amount: '1.5 Crores', literal: '15000000' }
        ];
        this.plan_type_name = [
            { type: "2A2C", name: "Self + Spouse + 2 Children" },
            { type: "2A3C", name: "Self + Spouse + 3 Children" },
            { type: "2A4C", name: "Self + Spouse + 4 Children" },
            { type: "1A1C", name: "Self + 1 Child" },
            { type: "1A2C", name: "Self + 2 Children" },
            { type: "1A3C", name: "Self + 3 Children" },
            { type: "1A4C", name: "Self + 4 Children" }
        ];
        this.member_details = {
            "1A": { "child": "0", "adult": "1", "spouce": "n", "total": "1" },
            "2A": { "child": "0", "adult": "2", "spouce": "y", "total": "2" },
            "2A1C": { "child": "1", "adult": "2", "spouce": "y", "total": "3" },
            "2A2C": { "child": "2", "spouce": "y", "total": "4" },
            "2A3C": { "child": "3", "spouce": "y", "total": "5" },
            "2A4C": { "child": "4", "spouce": "y", "total": "6" },
            "1A1C": { "child": "1", "spouce": "n", "total": "2" },
            "1A2C": { "child": "2", "spouce": "n", "total": "3" },
            "1A3C": { "child": "3", "spouce": "n", "total": "4" },
            "1A4C": { "child": "4", "spouce": "n", "total": "5" }
        };
        this.healthForm = fb.group({
            'cust_name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            'cust_mobile': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(/^[789]\d{9}$/)]),
            'cust_email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)])),
            'cust_gender': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            'cust_dob': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            'spouces': this.fb.array([]),
            'childs': this.fb.array([]),
            'coverage_amount': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            'coverage_amount_literal': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            'plan_type': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            'plan_type_name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            "cust_state": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            "cust_city": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            "cust_city_name": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            "product_name": 'Health Insurance',
            "product_type": 'Mediclaim',
            "search_source": '',
            "cust_guid": '',
            "agree": 'agree',
        });
        //this.healthForm.patchValue({cust_dob: ' '});
    }
    /* Cover Amount */
    HealthformComponent.prototype.coverAmount = function (event, amount, literal, item) {
        //set selected item to new variable
        this.selectedCover = item;
        //check wether item selected from list or button
        if (typeof this.selectedCover == 'object') {
            this.selectedCoverList = true;
        }
        else {
            this.selectedCoverList = false;
        }
        //add data in form data
        this.healthForm.patchValue({ coverage_amount: amount });
        this.healthForm.patchValue({ coverage_amount_literal: literal });
        this.coverError = false;
        if (this.cover_amount.findIndex(function (x) { return x.literal == literal; }) !== -1) {
            this.coverChip = this.healthForm.value['coverage_amount'];
        }
        else {
            this.coverChip = '';
        }
        console.log(this.healthForm.value);
    };
    /* /Cover Amount */
    /* Member Details */
    HealthformComponent.prototype.removeChip = function (type, name) {
        this.healthForm.value[type] = '';
        this.healthForm.value[name] = '';
        if (type == "coverage_amount") {
            this.coverChip = '';
            this.selectedCoverList = false;
        }
        else {
            this.planChip = '';
            this.selectedMemberlist = false;
        }
        console.log(this.healthForm.value);
    };
    /* Member Details */
    /* Member Details */
    HealthformComponent.prototype.memberDetails = function (event, type, name, item) {
        //console.log(event, type, name, item);
        var _this = this;
        //set selected item to new variable
        this.selectedMember = item;
        //check wether item selected from list or button
        if (typeof this.selectedMember == 'object') {
            this.selectedMemberlist = true;
        }
        else {
            this.selectedMemberlist = false;
        }
        //add data in form data
        this.healthForm.patchValue({ plan_type: type });
        this.healthForm.patchValue({ plan_type_name: name });
        if (this.plan_type_name.findIndex(function (x) { return x.type == type; }) !== -1) {
            this.planChip = this.healthForm.value['plan_type_name'];
        }
        else {
            this.planChip = '';
        }
        if (this.healthForm.value["plan_type"] != '') {
            this.showMemberSec = true;
            document.getElementById('healthform_cont').setAttribute("style", "position: relative; height: auto");
            document.getElementById('navbar').setAttribute("style", "position:relative;background-color: #fcbc23;");
            //$('html, body').animate({scrollTop:$(".abc").offset().top -20},100);
            setTimeout(function () { return _this.smoothScroll(document.getElementById('member_details')); }, 100);
        }
        this.memberError = false;
        this.updateMember();
        console.log(this.healthForm.value);
    };
    /* /Member Details */
    HealthformComponent.prototype.createItem = function (cntlr_name) {
        console.log(cntlr_name);
        var name = cntlr_name;
        if (cntlr_name == 'child_gender') {
            return this.fb.group({
                'child_gender': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
                'child_dob': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required])
            });
        }
        if (cntlr_name == 'spouce_gender') {
            return this.fb.group({
                'spouce_gender': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
                'spouce_dob': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required])
            });
        }
    };
    /* update member */
    HealthformComponent.prototype.updateMember = function () {
        this.is_spouse = this.member_details[this.healthForm.value["plan_type"]].spouce;
        this.childCount = parseInt(this.member_details[this.healthForm.value["plan_type"]].child, 10);
        var spouceItem = this.healthForm.get('spouces');
        console.log("spouceItem.length", spouceItem.length);
        if (this.is_spouse == 'y' && spouceItem.length == 0) {
            this.addMember('spouce_gender', 'spouces', 1);
        }
        else if (this.is_spouse == 'n') {
            this.removeMember('spouce_gender', 'spouces', 1);
        }
        var childItem = this.healthForm.get('childs');
        if (childItem.length != 0) {
            var childItemCount = childItem.length - this.childCount;
            console.log("childItemCount", childItemCount);
            if (childItemCount > 0) {
                console.log("removeMember");
                this.removeMember('child_gender', 'childs', childItemCount);
            }
            else {
                console.log("addMember");
                this.addMember('child_gender', 'childs', -childItemCount);
            }
        }
        else {
            this.addMember('child_gender', 'childs', this.childCount);
        }
    };
    /* /update member */
    /* Remove Member */
    HealthformComponent.prototype.removeMember = function (cntlr_name, name, count) {
        this.items = this.healthForm.get(name);
        console.log("hello", count);
        var itemLength = this.items.length;
        // var itemLength = -count;
        console.log("itemLength", itemLength);
        for (var i = 0; i < count; i++) {
            console.log("itemLength-i-1", itemLength - i - 1);
            this.items.removeAt(itemLength - i - 1);
        }
    };
    /* /Remove Member */
    /* Add Member */
    HealthformComponent.prototype.addMember = function (cntlr_name, name, count) {
        this.items = this.healthForm.get(name);
        console.log("hello", this.items.length);
        if (count > 0) {
            this.items = this.healthForm.get(name);
            for (var i = 0; i < count; i++) {
                //console.log("hello5");
                this.items.push(this.createItem(cntlr_name));
            }
            this.setSpouseGender();
        }
    };
    /* /Add Member */
    /* Set Spouse Gender */
    HealthformComponent.prototype.setSpouseGender = function () {
        console.log("data");
        if (this.healthForm.value["spouces"] != '') {
            var controlSpouces = this.healthForm.get('spouces');
            if (this.healthForm.value["cust_gender"] == 'male') {
                controlSpouces.controls[0].get('spouce_gender').setValue('female');
            }
            if (this.healthForm.value["cust_gender"] == 'female') {
                controlSpouces.controls[0].get('spouce_gender').setValue('male');
            }
        }
        console.log("data", this.healthForm);
    };
    /* City Details */
    HealthformComponent.prototype.cityDetails = function (event, id, name, item) {
        var _this = this;
        console.log(event, id, name, item);
        //set selected item to new variable
        this.selectedCity = item;
        //check wether item selected from list or button
        //this.selectedCitylist = true;
        //add data in form data
        this.healthForm.patchValue({ cust_city: id });
        this.healthForm.patchValue({ cust_state: name.split(",")[1] });
        this.healthForm.patchValue({ cust_city_name: name });
        if (this.healthForm.value["cust_city_name"] != '') {
            this.showpolicyholderSec = true;
            setTimeout(function () { return _this.smoothScroll(document.getElementById('policyholder_details')); }, 100);
        }
        console.log(this.healthForm.value);
    };
    HealthformComponent.prototype.updateHealthForm = function (data) {
        if (this.healthForm.valid) {
            this.submitted = false;
            this.coverError = false;
            this.memberError = false;
            this.cityError = false;
            console.log(this.healthForm.value, data);
            //console.log("post1",post);
        }
        else {
            console.log(data, data['childs'].length);
            this.submitted = true;
            if (data['coverage_amount'] == '') {
                this.coverError = true;
            }
            else {
                this.coverError = false;
            }
            if (data['plan_type'] == '') {
                this.memberError = true;
            }
            else {
                this.memberError = false;
            }
            if (data['cust_state'] == '') {
                this.cityError = true;
            }
            else {
                this.cityError = false;
            }
        }
    };
    HealthformComponent.prototype.ngOnInit = function () {
    };
    HealthformComponent.prototype.smoothScroll = function (target) {
        console.log("hello", target);
        var scrollContainer = target;
        do {
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer)
                return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
        var targetY = 0;
        do {
            if (target == scrollContainer)
                break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
        // start scrolling
        this.scroll(scrollContainer, scrollContainer.scrollTop, targetY - 36, 0);
    };
    HealthformComponent.prototype.scroll = function (c, a, b, i) {
        var _this = this;
        console.log("sdf", c, a, b, i);
        i++;
        if (i > 30)
            return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () { return _this.scroll(c, a, b, i); }, 20);
    };
    HealthformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-healthform',
            template: __webpack_require__("../../../../../src/app/product/health/desktop/healthform/healthform.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/health/desktop/healthform/healthform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], HealthformComponent);
    return HealthformComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/health/product-content/product-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pdcontent-wrapper{\r\n    overflow: hidden;\r\n    margin-top: 70px;\r\n}\r\n\r\n.pdcontent-wrapper .pdcontent-img{\r\n    display: block;\r\n    max-width: 100%;\r\n}\r\n\r\n.pdcontent .title{\r\n    font-size: 30px;\r\n    color: #5a5a5a;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n    font-weight: 400;\r\n}\r\n    \r\n.pdcontent .desc{\r\n    font-size: 14px;\r\n    color: #5a5a5a;\r\n    line-height: 22px;\r\n}\r\n\r\n.pdcontent .desc span{\r\n    color: #ff6102;\r\n}\r\n\r\n.pdcontent .desc ul{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    list-style-type: none;\r\n    padding-left: 28px;\r\n    position: relative;\r\n}\r\n\r\n.pdcontent .desc ul li{\r\n    padding-top: 10px;\r\n}\r\n\r\n.pdcontent .desc ul li::before{\r\n    content: \"\\F198\";\r\n    position: absolute;\r\n    left: 0px;\r\n    color: #2bbd1c;;\r\n    font-family: FontAwesome;\r\n    font-style: normal;\r\n    font-size: 18px; \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/health/product-content/product-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pdcontent-wrapper\">\r\n  <div class=\"mic-container\">\r\n    <div class=\"mic-col-5\">\r\n      <img src=\"/assets/images/health/health_insurance.jpg\" alt=\"\" class=\"pdcontent-img\">\r\n    </div>\r\n    <div class=\"mic-col-7\">\r\n      <div class=\"pdcontent\">\r\n        <h2 class=\"title\">Why Compare Health Insurance with us?</h2>\r\n        <div class=\"desc\">\r\n          Health expenses are increasing considerably each day and so are the health risks. With a wide array of health insurance policies, the task of choosing the best health insurance policy for your needs can be quite tough and confusing. At MyInsuranceClub we provide you with comparative health insurance quotes to select the best health insurance policy in a quick and simplified manner. You can also compare features of different health insurance policies to check the <span>best health insurance policy</span> for your requirements. .\r\n          <ul>\r\n            <li>With our <span>instant online calculator</span>, you can compare health insurance premiums easily</li>\r\n            <li>With the plan features, you do get the <span>Health Insurance Comparison</span></li>\r\n            <li>Yes, we are <span>Completely Un-biased</span> in our comparison</li>\r\n            <li>MyInsuranceClub does this for you at no cost - <span>It's Free!</span></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/health/product-content/product-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductContentComponent = (function () {
    function ProductContentComponent() {
    }
    ProductContentComponent.prototype.ngOnInit = function () {
    };
    ProductContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-content',
            template: __webpack_require__("../../../../../src/app/product/health/product-content/product-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/health/product-content/product-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductContentComponent);
    return ProductContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product-bar/product-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pdbar-wrapper{\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.pdbar-cont .pdbar{\r\n    display: table;\r\n    margin: 0;\r\n    padding: 0;\r\n    table-layout: fixed;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n.pdbar-cont .pdbar li{\r\n    list-style-type: none;\r\n    border-right: 1px solid #e9e9e9;\r\n    display: table-cell;\r\n    background: #f7f7f7;\r\n}\r\n\r\n.pdbar-cont .pdbar li:hover{\r\n    background: #ffffff;\r\n}\r\n\r\n.pdbar-cont .pdbar li a{\r\n    text-decoration: none;\r\n    border-bottom: 3px solid transparent;\r\n    color: #3a3a3a;\r\n    position: relative;\r\n    transition: all 0.2s ease-in 0s;\r\n    outline: none;\r\n    padding: 10px 0;\r\n    display: block;\r\n    border: 0;\r\n}\r\n\r\n.mic-health-icon, .mic-car-icon, .mic-two-wheeler-icon, .mic-term-icon, .mic-endowment-icon, .mic-money-icon, .mic-child-icon, .mic-pension-icon, .mic-travel-icon {\r\n    background-image: url(https://anil24.github.io/mic-app/assets/images/services_icon.png);\r\n    background-repeat: no-repeat;\r\n    height: 42px;\r\n    margin: 0 auto;\r\n    width: 65px;\r\n}\r\n\r\n.mic-health-icon {\r\n    background-position: 11px 3px;\r\n}\r\n.mic-car-icon {\r\n    background-position: 11px -48px;\r\n}\r\n.mic-two-wheeler-icon {\r\n    background-position: 7px -100px;\r\n}\r\n.mic-term-icon {\r\n    background-position: 10px -157px;\r\n}\r\n.mic-endowment-icon {\r\n    background-position: -3px -218px;\r\n}\r\n.mic-money-icon {\r\n    background-position: 7px -272px;\r\n}\r\n.mic-child-icon {\r\n    background-position: -2px -332px;\r\n}\r\n.mic-pension-icon {\r\n    background-position: 2px -388px;\r\n}\r\n.mic-travel-icon {\r\n    background-position: 0px -449px;\r\n}\r\n\r\n.pdbar-cont .pdbar li:hover .mic-health-icon{\r\n\tbackground-position: -73px 3px;\r\n}\r\n.pdbar-cont .pdbar li:hover .mic-car-icon{\r\n\tbackground-position: -72px -48px;\r\n}\r\n.pdbar-cont .pdbar li:hover .mic-two-wheeler-icon{\r\n\tbackground-position: -73px -100px;\r\n}\r\n.pdbar-cont .pdbar li:hover .mic-term-icon{\r\n\tbackground-position: -78px -157px;\r\n}\r\n.pdbar-cont .pdbar li:hover .mic-endowment-icon{\r\n\tbackground-position: -78px -219px;\r\n}\r\n.pdbar-cont .pdbar li:hover .mic-money-icon{\r\n\tbackground-position: -79px -272px;\r\n}\r\n.pdbar-cont .pdbar li:hover .mic-child-icon{\r\n\tbackground-position: -77px -333px;\r\n}\r\n.pdbar-cont .pdbar li:hover .mic-pension-icon{\r\n\tbackground-position: -80px -388px;\r\n}\r\n.pdbar-cont .pdbar li:hover .mic-travel-icon{\r\n\tbackground-position: -75px -449px;\r\n}\r\n\r\n.pdbar .product-label{\r\n    font-size:13px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-bar/product-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pdbar-wrapper\">\r\n  <div class=\"pdbar-cont\">\r\n    <ul class=\"pdbar\">\r\n      <li>\r\n        <a href=\"/health-insurance\">\r\n          <div class=\"product-icon mic-health-icon\"></div>\r\n          <label class=\"product-label\">Health Insurance</label>\r\n        </a>\r\n      </li>\r\n      <li> \r\n        <a href=\"/car-insurance\"> \r\n          <div class=\"product-icon mic-car-icon\"> </div> \r\n          <label class=\"product-label\">Car Insurance</label> \r\n        </a> \r\n      </li>\r\n      <li> \r\n        <a href=\"/two-wheeler\"> \r\n          <div class=\"product-icon mic-two-wheeler-icon\"> </div>\r\n          <label class=\"product-label\">Two Wheeler Insurance</label>  \r\n        </a> \r\n      </li>\r\n      <li> \r\n        <a href=\"/life-insurance/term-insurance\"> \r\n          <div class=\"product-icon mic-term-icon\"> </div>\r\n          <label class=\"product-label\">Term Insurance</label>  \r\n        </a> \r\n      </li>\r\n      <li> \r\n        <a href=\"/life-insurance/endowment-insurance\"> \r\n          <div class=\"product-icon mic-endowment-icon\"> </div>\r\n          <label class=\"product-label\">Endowment Plans</label>  \r\n        </a> \r\n      </li>\r\n      <li> \r\n        <a href=\"/life-insurance/money-back-policy\"> \r\n          <div class=\"product-icon mic-money-icon\"> </div>\r\n          <label class=\"product-label\">Money Back Plans</label>  \r\n        </a> \r\n      </li>\r\n      <li> \r\n        <a href=\"/life-insurance/child-plans\"> \r\n          <div class=\"product-icon mic-child-icon\"> </div>\r\n          <label class=\"product-label\">Child Plans</label>  \r\n        </a> \r\n      </li>\r\n      <li> \r\n        <a href=\"/life-insurance/pension-plan\"> \r\n          <div class=\"product-icon mic-pension-icon\"> </div>\r\n          <label class=\"product-label\">Pension Plans</label>  \r\n        </a> \r\n      </li>\r\n      <li> \r\n        <a href=\"/travel-insurance\"> \r\n          <div class=\"product-icon mic-travel-icon\"> </div>\r\n          <label class=\"product-label\">Travel Insurance</label>  \r\n        </a> \r\n      </li>\r\n\r\n    </ul>\r\n  </div>  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/product-bar/product-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductBarComponent = (function () {
    function ProductBarComponent() {
    }
    ProductBarComponent.prototype.ngOnInit = function () {
    };
    ProductBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-bar',
            template: __webpack_require__("../../../../../src/app/product/product-bar/product-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product-bar/product-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductBarComponent);
    return ProductBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product-blog/product-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pdblog-wrapper{\r\n    overflow: auto;\r\n    margin-bottom: 100px;\r\n}\r\n\r\n.pdblog-wrapper .mic-col-4{\r\n    margin-top: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n.pdblog-wrapper .pdblog-title{\r\n    font-size: 30px;\r\n    color: #595a5a;\r\n    font-weight: 400;\r\n    border-top: 8px solid #2bbd1c;\r\n    padding: 10px 0;\r\n    margin: 0;\r\n}\r\n\r\n.pdblog-wrapper .pdblog-subtitle{\r\n    display: block;\r\n    width: 100%;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.pdblog-wrapper .pdblog-block{\r\n    float: left;\r\n    min-height: 236px;\r\n    margin-bottom: 10px;\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 70%;\r\n}\r\n\r\n.pdblog-block .pdblog-img img{\r\n    display: block;\r\n    float: left;\r\n    border: 1px solid #cacaca;\r\n    max-width: 100%;\r\n    margin: 16px 12px 10px 1px;\r\n    padding: 1px;\r\n    width: 100%;\r\n}\r\n\r\n.pdblog-block .pdblog-desc{\r\n    bottom: 0px;\r\n    color: #000000;\r\n    padding: 5px 0px 0 0;\r\n    float: left;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.pdblog-wrapper .pdblog-more-btn{\r\n    margin-top: 40px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.pdblog-wrapper .pdblog-more-btn a{\r\n    text-align: left;\r\n    color: #2ca3ef;\r\n    font-size: 17px;\r\n    padding-left: 0;\r\n    text-decoration: none;\r\n}\r\n\r\n@media (max-width: 992px){\r\n    .pdblog-wrapper .mic-container{\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n    }\r\n\r\n    .pdblog-wrapper .pdblog-block{\r\n        min-height: 250px;\r\n        max-width: 50%;\r\n    }\r\n\r\n    .pdblog-wrapper a:nth-child(even) .pdblog-block{\r\n        padding-left: 10px\r\n    }\r\n\r\n    .pdblog-wrapper a:nth-child(odd) .pdblog-block {\r\n        padding-right: 10px\r\n    }\r\n        \r\n}\r\n\r\n@media (min-width: 992px) and (max-width: 1200px){\r\n    .pdblog-wrapper .pdblog-block{\r\n        min-height: 256px;\r\n        max-width: 100%;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n    .pdblog-wrapper .mic-container{\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n    }\r\n\r\n    .pdblog-wrapper .pdblog-block{\r\n        max-width: 100%;\r\n        padding-left: 0px !important;\r\n        padding-right: 0px !important; \r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-blog/product-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pdblog-wrapper\">\r\n  <div class=\"mic-container\">\r\n    \r\n    <!-- first col -->\r\n    <div class=\"mic-col-4\">\r\n      <h1 class=\"pdblog-title\">Articles on Health Insurance</h1>\r\n      <label class=\"pdblog-subtitle\">Health Insurance</label>\r\n      <a href=\"#\">\r\n        <div class=\"pdblog-block\">\r\n          <div class=\"pdblog-img\">\r\n            <img src=\"https://d3h6xrw705p37u.cloudfront.net/articles/thumbnail_320x180/what-are-the-best-insurance-plans-against-terrorist-attacks--1459137227.jpg\" alt=\"What are the best insurance plans against terrorist attacks?\" title=\"What are the best insurance plans against terrorist attacks?\">\r\n          </div>\r\n          <div class=\"pdblog-desc\">\r\n            What are the best insurance plans against terrorist attacks?      \r\n          </div>\r\n        </div>\r\n      </a>\r\n\r\n      <a href=\"#\">\r\n        <div class=\"pdblog-block\">\r\n          <div class=\"pdblog-img\">\r\n            <img src=\"https://d3h6xrw705p37u.cloudfront.net/articles/thumbnail_320x180/what-are-the-best-insurance-plans-against-terrorist-attacks--1459137227.jpg\" alt=\"What are the best insurance plans against terrorist attacks?\" title=\"What are the best insurance plans against terrorist attacks?\">\r\n          </div>\r\n          <div class=\"pdblog-desc\">\r\n            What are the best insurance plans against terrorist attacks?      \r\n          </div>\r\n        </div>\r\n      </a>\r\n\r\n      <a href=\"#\">\r\n        <div class=\"pdblog-block\">\r\n          <div class=\"pdblog-img\">\r\n            <img src=\"https://d3h6xrw705p37u.cloudfront.net/articles/thumbnail_320x180/what-are-the-best-insurance-plans-against-terrorist-attacks--1459137227.jpg\" alt=\"What are the best insurance plans against terrorist attacks?\" title=\"What are the best insurance plans against terrorist attacks?\">\r\n          </div>\r\n          <div class=\"pdblog-desc\">\r\n            What are the best insurance plans against terrorist attacks?      \r\n          </div>\r\n        </div>\r\n      </a>\r\n\r\n      <div class=\"pdblog-more-btn\">\r\n        <a href=\"#\">More Articles</a>\r\n      </div>\r\n    </div>\r\n    <!-- /first col -->\r\n\r\n    <!-- second col -->\r\n    <div class=\"mic-col-4\">\r\n      <h1 class=\"pdblog-title\">Guides on Health Insurance</h1>\r\n      <label class=\"pdblog-subtitle\">Health Insurance</label>\r\n      \r\n      <a href=\"#\">\r\n        <div class=\"pdblog-block\">\r\n          <div class=\"pdblog-img\">\r\n            <img src=\"https://d3h6xrw705p37u.cloudfront.net/guides/thumbnail_320x180/early-stage-cancers-covered-in-lic-cancer-cover-plan-1513682743.jpg\" alt=\"Early Stage Cancers covered in LIC Cancer Cover Plan\" title=\"Early Stage Cancers covered in LIC Cancer Cover Plan\">\r\n          </div>\r\n          <div class=\"pdblog-desc\">\r\n            Early Stage Cancers covered in LIC Cancer Cover Plan      \r\n          </div>\r\n        </div>\r\n      </a>\r\n\r\n      <a href=\"#\">\r\n        <div class=\"pdblog-block\">\r\n          <div class=\"pdblog-img\">\r\n            <img src=\"https://d3h6xrw705p37u.cloudfront.net/guides/thumbnail_320x180/early-stage-cancers-covered-in-lic-cancer-cover-plan-1513682743.jpg\" alt=\"Early Stage Cancers covered in LIC Cancer Cover Plan\" title=\"Early Stage Cancers covered in LIC Cancer Cover Plan\">\r\n          </div>\r\n          <div class=\"pdblog-desc\">\r\n            Early Stage Cancers covered in LIC Cancer Cover Plan      \r\n          </div>\r\n        </div>\r\n      </a>\r\n\r\n      <a href=\"#\">\r\n        <div class=\"pdblog-block\">\r\n          <div class=\"pdblog-img\">\r\n            <img src=\"https://d3h6xrw705p37u.cloudfront.net/guides/thumbnail_320x180/early-stage-cancers-covered-in-lic-cancer-cover-plan-1513682743.jpg\" alt=\"Early Stage Cancers covered in LIC Cancer Cover Plan\" title=\"Early Stage Cancers covered in LIC Cancer Cover Plan\">\r\n          </div>\r\n          <div class=\"pdblog-desc\">\r\n            Early Stage Cancers covered in LIC Cancer Cover Plan      \r\n          </div>\r\n        </div>\r\n      </a>\r\n      \r\n      <div class=\"pdblog-more-btn\">\r\n        <a href=\"#\">More Guides</a>\r\n      </div>\r\n    </div>\r\n    <!-- /second col -->\r\n\r\n    <!-- third col -->\r\n    <div class=\"mic-col-4\">\r\n      <h1 class=\"pdblog-title\">Guides on Health Insurance</h1>\r\n      <label class=\"pdblog-subtitle\">Health Insurance</label>\r\n\r\n      <a href=\"#\">\r\n        <div class=\"pdblog-block\">\r\n          <div class=\"pdblog-img\">\r\n              <img src=\"https://i.ytimg.com/vi/wYDndYD61vU/mqdefault.jpg\" class=\"img_t\" title=\"Is united India &amp; PNB enough for a good health insurance portfolio?\" alt=\"Is united India &amp; PNB enough for a good health insurance portfolio?\" style=\"max-width:100%;\" border=\"0\">\r\n          </div>\r\n          <div class=\"pdblog-desc\">\r\n            Early Stage Cancers covered in LIC Cancer Cover Plan      \r\n          </div>\r\n        </div>\r\n      </a>\r\n\r\n      <a href=\"#\">\r\n        <div class=\"pdblog-block\">\r\n          <div class=\"pdblog-img\">\r\n              <img src=\"https://i.ytimg.com/vi/wYDndYD61vU/mqdefault.jpg\" class=\"img_t\" title=\"Is united India &amp; PNB enough for a good health insurance portfolio?\" alt=\"Is united India &amp; PNB enough for a good health insurance portfolio?\" style=\"max-width:100%;\" border=\"0\">\r\n          </div>\r\n          <div class=\"pdblog-desc\">\r\n            Early Stage Cancers covered in LIC Cancer Cover Plan      \r\n          </div>\r\n        </div>\r\n      </a>\r\n\r\n      <a href=\"#\">\r\n        <div class=\"pdblog-block\">\r\n          <div class=\"pdblog-img\">\r\n              <img src=\"https://i.ytimg.com/vi/wYDndYD61vU/mqdefault.jpg\" class=\"img_t\" title=\"Is united India &amp; PNB enough for a good health insurance portfolio?\" alt=\"Is united India &amp; PNB enough for a good health insurance portfolio?\" style=\"max-width:100%;\" border=\"0\">\r\n          </div>\r\n          <div class=\"pdblog-desc\">\r\n            Early Stage Cancers covered in LIC Cancer Cover Plan      \r\n          </div>\r\n        </div>\r\n      </a>\r\n\r\n      <div class=\"pdblog-more-btn\">\r\n        <a href=\"#\">More Videos</a>\r\n      </div>\r\n    </div>\r\n    <!-- /third col -->\r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/product/product-blog/product-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductBlogComponent = (function () {
    function ProductBlogComponent() {
    }
    ProductBlogComponent.prototype.ngOnInit = function () {
    };
    ProductBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-blog',
            template: __webpack_require__("../../../../../src/app/product/product-blog/product-blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product-blog/product-blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductBlogComponent);
    return ProductBlogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/testimonial/testimonial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pdtestimonial-container{\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.pdtestimonial-container .pdtestimonial-wrapper h2:after {\r\n    background: url(https://anil24.github.io/mic-app/assets/images/right_t.jpg) no-repeat scroll 4px 5px/41px auto rgba(0,0,0,0);\r\n    content: \" \";\r\n    padding-right: 48px;\r\n    margin-left: 15px;\r\n}\r\n\r\n.pdtestimonial-container .pdtestimonial-wrapper h2:before {\r\n    background: url(https://anil24.github.io/mic-app/assets/images/left_t.jpg) no-repeat scroll 4px 5px/41px auto rgba(0,0,0,0);\r\n    content: \" \";\r\n    padding-right: 48px;\r\n    position: relative;\r\n    top: -12px;\r\n    margin-right: 15px;\r\n}\r\n\r\n.pdtestimonial-wrapper .pdtestimonial-slide h2{\r\n    color: #ff6102;\r\n    font-size: 30px;\r\n    font-weight: 400;\r\n    line-height: 45px;\r\n    margin: 30px 0;\r\n}\r\n\r\n.pdtestimonial-wrapper .pdauthor{\r\n    text-align: right;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    margin: -10px 0 0\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/testimonial/testimonial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pdtestimonial-container\">\r\n  <div class=\"mic-container\">\r\n    <div class=\"mic-col-12\">\r\n      <swiper [config]=\"testimonialSwiper\">\r\n        <div class=\"swiper-wrapper pdtestimonial-wrapper\">\r\n          <div class=\"swiper-slide pdtestimonial-slide\" *ngFor=\"let author of authors\">\r\n            <h2>{{author.quote}}</h2>\r\n            <div class=\"pdauthor\">{{author.name}}</div>\r\n          </div>\r\n        </div>\r\n      </swiper>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/product/testimonial/testimonial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialComponent = (function () {
    function TestimonialComponent() {
        this.author_list = {
            "health": [
                { "quote": "The information on health insurance is pretty exhaustive. More easily understood than even the insurance company's website.", "name": "- Prakash Sinha, Ujjain" },
                { "quote": "I was looking for mediclaim policies which cover maternity expenses also. I found what I found on your site easily. Good stuff.", "name": "- Akruti Pal, Allahabad" },
                { "quote": "Thanks for all the help provided by you in selecting the right health insurance plan. Your staff was also very helpful.", "name": "- T K Gopalakrishnan, Pondicherry" },
                { "quote": "This is pretty cool. Good information provided in a simple way. Easy to understand and buy online. Will share with friends.", "name": "- Kanika Srivastava, Jabalpur" },
            ],
        };
        this.authors = this.author_list['health'];
        this.testimonialSwiper = {
            simulateTouch: false,
            spaceBetween: 30,
            autoplay: 5000,
            loop: true,
        };
    }
    TestimonialComponent.prototype.ngOnInit = function () {
    };
    TestimonialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testimonial',
            template: __webpack_require__("../../../../../src/app/product/testimonial/testimonial.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/testimonial/testimonial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialComponent);
    return TestimonialComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map