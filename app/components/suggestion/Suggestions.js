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
var SuggestionAttributes;
(function (SuggestionAttributes) {
    SuggestionAttributes["suggestionusername"] = "suggestionusername";
    SuggestionAttributes["suggestionuserpic"] = "suggestionuserpic";
})(SuggestionAttributes || (SuggestionAttributes = {}));
var Suggestion = /** @class */ (function (_super) {
    __extends(Suggestion, _super);
    function Suggestion() {
        var _this = _super.call(this) || this;
        _this.suggestionusername = '';
        _this.suggestionuserpic = '';
        _this.attachShadow({ mode: 'open' });
        return _this;
    }
    Object.defineProperty(Suggestion, "observedAttributes", {
        get: function () {
            return Object.keys(SuggestionAttributes);
        },
        enumerable: false,
        configurable: true
    });
    Suggestion.prototype.attributeChangedCallback = function (prop, _, newValue) {
        this[prop] = newValue;
    };
    Suggestion.prototype.connectedCallback = function () {
        this.render();
    };
    Suggestion.prototype.render = function () {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = "\n        <section>\n        </section>\n        ";
    };
    return Suggestion;
}(HTMLElement));
customElements.define('my-suggestion', Suggestion);
exports.default = Suggestion;
