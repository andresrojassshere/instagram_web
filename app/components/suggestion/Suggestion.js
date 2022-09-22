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
    SuggestionAttributes["suggestionfollowtoo"] = "suggestionfollowtoo";
    SuggestionAttributes["suggestionuserpic"] = "suggestionuserpic";
    SuggestionAttributes["suggestionusername2"] = "suggestionusername2";
    SuggestionAttributes["suggestionfollowtoo2"] = "suggestionfollowtoo2";
    SuggestionAttributes["suggestionuserpic2"] = "suggestionuserpic2";
    SuggestionAttributes["suggestionusername3"] = "suggestionusername3";
    SuggestionAttributes["suggestionfollowtoo3"] = "suggestionfollowtoo3";
    SuggestionAttributes["suggestionuserpic3"] = "suggestionuserpic3";
    SuggestionAttributes["suggestionusername4"] = "suggestionusername4";
    SuggestionAttributes["suggestionfollowtoo4"] = "suggestionfollowtoo4";
    SuggestionAttributes["suggestionuserpic4"] = "suggestionuserpic4";
    SuggestionAttributes["suggestionusername5"] = "suggestionusername5";
    SuggestionAttributes["suggestionfollowtoo5"] = "suggestionfollowtoo5";
    SuggestionAttributes["suggestionuserpic5"] = "suggestionuserpic5";
})(SuggestionAttributes || (SuggestionAttributes = {}));
var Suggestion = /** @class */ (function (_super) {
    __extends(Suggestion, _super);
    function Suggestion() {
        var _this = _super.call(this) || this;
        _this.suggestionusername = '';
        _this.suggestionfollowtoo = '';
        _this.suggestionuserpic = '';
        _this.suggestionusername2 = '';
        _this.suggestionfollowtoo2 = '';
        _this.suggestionuserpic2 = '';
        _this.suggestionusername3 = '';
        _this.suggestionfollowtoo3 = '';
        _this.suggestionuserpic3 = '';
        _this.suggestionusername4 = '';
        _this.suggestionfollowtoo4 = '';
        _this.suggestionuserpic4 = '';
        _this.suggestionusername5 = '';
        _this.suggestionfollowtoo5 = '';
        _this.suggestionuserpic5 = '';
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
        this.shadowRoot.innerHTML = "\n        <section>\n        <link rel=\"stylesheet\" href=\"/components/suggestion/suggestion.css\">\n        \n        <div class=\"container\"> \n            <div class=\"followersuggestions\"> \n\n            <p class=\"suggestiontittle\"> Suggestions for you </p>\n\n                <div class=\"suggestion1\">\n                    <img src=\"".concat(this.suggestionuserpic, "\" class=\"fotodeperfil\">\n                    <p> <b>").concat(this.suggestionusername, "</b> ").concat(this.suggestionfollowtoo, " </p>\n                </div>\n\n                <div class=\"suggestion2\">\n                    <img src=\"").concat(this.suggestionuserpic2, "\" class=\"fotodeperfil\">\n                    <p> <b>").concat(this.suggestionusername2, "</b> ").concat(this.suggestionfollowtoo2, " </p>\n                </div>\n\n                <div class=\"suggestion3\">\n                    <img src=\"").concat(this.suggestionuserpic3, "\" class=\"fotodeperfil\">\n                    <p> <b>").concat(this.suggestionusername3, "</b> ").concat(this.suggestionfollowtoo3, " </p>\n                </div>\n\n                <div class=\"suggestion4\">\n                    <img src=\"").concat(this.suggestionuserpic4, "\" class=\"fotodeperfil\">\n                    <p> <b>").concat(this.suggestionusername4, "</b> ").concat(this.suggestionfollowtoo4, " </p>\n                </div>\n\n                <div class=\"suggestion5\">\n                    <img src=\"").concat(this.suggestionuserpic5, "\" class=\"fotodeperfil\">\n                    <p> <b>").concat(this.suggestionusername5, "</b> ").concat(this.suggestionfollowtoo5, " </p>\n                </div>\n\n\n\n            </div>\n        </div>\n        </section>\n        ");
    };
    return Suggestion;
}(HTMLElement));
customElements.define('my-suggestion', Suggestion);
exports.default = Suggestion;
