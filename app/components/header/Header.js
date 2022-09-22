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
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super.call(this) || this;
        _this.attachShadow({ mode: 'open' });
        return _this;
    }
    Header.prototype.connectedCallback = function () {
        this.render();
    };
    Header.prototype.render = function () {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = "\n        <link rel=\"stylesheet\" href=\"/components/header/header.css\"\n        \n        <section>\n\n        <div class=\"navigationbar\">\n        <div class=\"header\">\n        <img src=\"images/header/instagramlogo.png\" class=\"logo\">\n        <input type=\"text\" class=\"searchbox\" placeholder=\"search\">\n            <div class=\"headericons\">\n            <img src=\"images/header/homeicon.png\" class=\"icons\">\n            <img src=\"images/header/messageicon.png\" class=\"icons\">\n            <img src=\"images/header/addicon.png\" class=\"icons\">\n            <img src=\"images/header/exploreicon.png\" class=\"icons\">\n            <img src=\"images/header/likeicon.png\" class=\"icons\">\n            <img src=\"images/header/profilepic.png\" class=\"userprofile\">\n            </div>\n            </div>\n        </div>\n        </div>\n        \n        \n        </section>\n        ";
    };
    return Header;
}(HTMLElement));
customElements.define('my-header', Header);
exports.default = Header;
