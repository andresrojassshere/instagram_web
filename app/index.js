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
console.log("funcionando ando");
require("./components/index.js");
var AppContainer = /** @class */ (function (_super) {
    __extends(AppContainer, _super);
    function AppContainer() {
        var _this = _super.call(this) || this;
        _this.attachShadow({ mode: "open" });
        return _this;
    }
    AppContainer.prototype.connectedCallback = function () {
        this.render();
    };
    AppContainer.prototype.render = function () {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = "\n\n        <my-header username=\"andresrojassshere\"> </my-header>\n\n        <my-histories userpic=\"./images/histories/historie1.png\"\n        username=\"marto_kane\"\n        \n        userpic2=\"./images/histories/historie2.png\"\n        username2=\"isabella_02\"\n        \n        userpic3=\"./images/histories/historie3.png\"\n        username3=\"isa_salazar0910\"\n        \n        userpic4=\"./images/histories/historie4.png\"\n        username4=\"danaaa_gc\"\n        \n        userpic5=\"./images/histories/historie5.png\"\n        username5=\"pipe_lenisf\"\n        \n        userpic6=\"./images/histories/historie6.png\"\n        username6=\"marianaao_o\"\n        \n        userpic7=\"./images/histories/historie7.png\"\n        username7=\"sohpie_nxz\"\n        \n        userpic8=\"./images/histories/historie8.png\"\n        username8=\"zia_karent\"> </my-histories>\n        \n        \n        <my-post username=\"andresrojassshere\"\n        location=\"neiva-huila\"\n        userpic=\"./images/post/profilepic.png\"\n        userpostpic=\"./images/post/post.png\"\n        likes=707\n        postcaption=\"cool pic of silva\"\n        commentuser=\"isabella_02\"\n        comment=\"thankx for the pic\"\n        posttime=\"3\"> </my-post>\n\n        <my-post username=\"marto_kane\"\n        location=\"neiva-huila\"\n        userpic=\"./images/post/profilepic2.png\"\n        userpostpic=\"./images/post/post2.png\"\n        likes=504\n        postcaption=\"lol\"\n        \n        commentuser=\"andresrojassshere\"\n        comment=\"i hate u :(\"\n        posttime=\"54\"> </my-post>\n\n        <my-post username=\"andresrojassshere\"\n        location=\"neiva-huila\"\n        userpic=\"./images/post/profilepic.png\"\n        userpostpic=\"./images/post/post3.png\"\n        likes=231\n        postcaption=\"lol x2\"\n        commentuser=\"marto_kane\"\n        comment=\"xd\"\n        posttime=\"59\"> </my-post>\n\n        <my-suggestion  suggestionusername = \"estebanperez_07\" \n        suggestionfollowtoo=\"sophie_nyu and 12 others\"\n        suggestionuserpic=\"./images/suggestions/profile1.png\"\n\n        suggestionusername2 = \"juanrojas_uwu\" \n        suggestionfollowtoo2 =\"mariana_ocampo and 25 others\"\n        suggestionuserpic2=\"./images/suggestions/profile2.png\"\n\n        suggestionusername3 = \"juan_davidmar\" \n        suggestionfollowtoo3 =\"mariana_ocampo and 46 others\"\n        suggestionuserpic3=\"./images/suggestions/profile3.png\"\n\n        suggestionusername4 = \"mer_mercado\" \n        suggestionfollowtoo4 =\"sophie_nyu and 3 others\"\n        suggestionuserpic4=\"./images/suggestions/profile4.png\"\n\n        suggestionusername5 = \"upa_cholupa_neiva\" \n        suggestionfollowtoo5 =\"isabellasilva_02\"\n        suggestionuserpic5=\"./images/suggestions/profile5.png\"> </my-suggestion>\n        \n        ";
    };
    return AppContainer;
}(HTMLElement));
customElements.define("app-container", AppContainer);
