"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HistoriesAttributes;
(function (HistoriesAttributes) {
    HistoriesAttributes["username"] = "username";
    HistoriesAttributes["userpic"] = "userpic";
    HistoriesAttributes["username2"] = "username2";
    HistoriesAttributes["userpic2"] = "userpic2";
    HistoriesAttributes["username3"] = "username3";
    HistoriesAttributes["userpic3"] = "userpic3";
    HistoriesAttributes["username4"] = "username4";
    HistoriesAttributes["userpic4"] = "userpic4";
    HistoriesAttributes["username5"] = "username5";
    HistoriesAttributes["userpic5"] = "userpic5";
    HistoriesAttributes["username6"] = "username6";
    HistoriesAttributes["userpic6"] = "userpic6";
    HistoriesAttributes["username7"] = "username7";
    HistoriesAttributes["userpic7"] = "userpic7";
    HistoriesAttributes["username8"] = "username8";
    HistoriesAttributes["userpic8"] = "userpic8";
})(HistoriesAttributes || (HistoriesAttributes = {}));
var Histories = /** @class */ (function (_super) {
    __extends(Histories, _super);
    function Histories() {
        var _this = _super.call(this) || this;
        _this.username = '';
        _this.userpic = '';
        _this.username2 = '';
        _this.userpic2 = '';
        _this.username3 = '';
        _this.userpic3 = '';
        _this.username4 = '';
        _this.userpic4 = '';
        _this.username5 = '';
        _this.userpic5 = '';
        _this.username6 = '';
        _this.userpic6 = '';
        _this.username7 = '';
        _this.userpic7 = '';
        _this.username8 = '';
        _this.userpic8 = '';
        _this.attachShadow({ mode: 'open' });
        return _this;
    }
    Object.defineProperty(Histories, "observedAttributes", {
        get: function () {
            return Object.keys(HistoriesAttributes);
        },
        enumerable: false,
        configurable: true
    });
    Histories.prototype.attributeChangedCallback = function (prop, _, newValue) {
        this[prop] = newValue;
    };
    Histories.prototype.connectedCallback = function () {
        this.render();
    };
    Histories.prototype.render = function () {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = "\n        <link rel=\"stylesheet\" href=\"/components/histories/histories.css\"\n\n        <section>\n        <section class=\"main\">\n            <div class=\"historiesbar\">\n                <div class=\"histories\">\n                    <div class=\"profilepic\"><img src=\"".concat(this.userpic, "\"></div>\n                    <p class=\"username\">").concat(this.username, "</p>\n                </div>\n                <div class=\"histories\">\n                    <div class=\"profilepic\"><img src=\"").concat(this.userpic2, "\"></div>\n                    <p class=\"username\">").concat(this.username2, "</p>\n                </div>\n                <div class=\"histories\">\n                    <div class=\"profilepic\"><img src=\"").concat(this.userpic3, "\"></div>\n                    <p class=\"username\">").concat(this.username3, "</p>\n                </div>\n                <div class=\"histories\">\n                    <div class=\"profilepic\"><img src=\"").concat(this.userpic4, "\"></div>\n                    <p class=\"username\">").concat(this.username4, "</p>\n                </div>\n                <div class=\"histories\">\n                    <div class=\"profilepic\"><img src=\"").concat(this.userpic5, "\"></div>\n                    <p class=\"username\">").concat(this.username5, "</p>\n                </div>\n                <div class=\"histories\">\n                    <div class=\"profilepic\"><img src=\"").concat(this.userpic6, "\"></div>\n                    <p class=\"username\">").concat(this.username6, "</p>\n                </div>\n                <div class=\"histories\">\n                    <div class=\"profilepic\"><img src=\"").concat(this.userpic7, "\"></div>\n                    <p class=\"username\">").concat(this.username7, "</p>\n                </div>\n                <div class=\"histories\">\n                    <div class=\"profilepic\"><img src=\"").concat(this.userpic8, "\"></div>\n                    <p class=\"username\">").concat(this.username8, "</p>\n                </div>\n</section>\n        </section>\n        ");
    };
    return Histories;
}(HTMLElement));
customElements.define('my-histories', Histories);
exports.default = Histories;
