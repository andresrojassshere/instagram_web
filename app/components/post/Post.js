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
var PostAttributes;
(function (PostAttributes) {
    PostAttributes["username"] = "username";
    PostAttributes["userpic"] = "userpic";
    PostAttributes["userpostpic"] = "userpostpic";
    PostAttributes["location"] = "location";
    PostAttributes["likes"] = "likes";
    PostAttributes["postcaption"] = "postcaption";
    PostAttributes["commentuser"] = "commentuser";
    PostAttributes["comment"] = "comment";
    PostAttributes["posttime"] = "posttime";
})(PostAttributes || (PostAttributes = {}));
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post() {
        var _this = _super.call(this) || this;
        _this.username = '';
        _this.userpic = '';
        _this.userpostpic = '';
        _this.location = '';
        _this.likes = '';
        _this.postcaption = '';
        _this.commentuser = '';
        _this.comment = '';
        _this.posttime = '';
        _this.attachShadow({ mode: 'open' });
        return _this;
    }
    Object.defineProperty(Post, "observedAttributes", {
        get: function () {
            return Object.keys(PostAttributes);
        },
        enumerable: false,
        configurable: true
    });
    Post.prototype.attributeChangedCallback = function (prop, _, newValue) {
        this[prop] = newValue;
    };
    Post.prototype.connectedCallback = function () {
        this.render();
    };
    Post.prototype.render = function () {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = "\n        <link rel=\"stylesheet\" href=\"/components/post/post.css\"\n       \n        <section>\n    \n                <div class=\"post\">\n                    <div class=\"postheader\">\n                        <div class=\"userpost\">\n                            <div class=\"profilepic\"><img src=\"".concat(this.userpic, "\"></div>\n                            <p class=\"username\"><b>").concat(this.username, "</b></p>\n                        </div>\n                    </div>\n                    <img src=\"").concat(this.userpostpic, "\" class=\"imagepost\">\n                    <div class=\"postelements\">\n                        <div class=\"interactionicons\">\n                            <img src=\"images/post/likeicon.png\" class=\"icon\">\n                            <img src=\"images/post/commentsicon.png\" class=\"icon\">\n                            <img src=\"images/post/sendicon.png\" class=\"icon\">\n                            <img src=\"images/post/saveicon.png\" class=\"icon\">\n                        </div>\n                        <p class=\"likes\">").concat(this.likes, " likes</p>\n                        <p class=\"description\"> <b> ").concat(this.username, " </b>  ").concat(this.postcaption, "</p>\n                        <p class=\"comments\"> <b> ").concat(this.commentuser, " </b>  ").concat(this.comment, "</p>\n                        <p class=\"posttime\">").concat(this.posttime, " minutes ago </p>\n                    </div>\n                </div>\n    </section>\n        ");
    };
    return Post;
}(HTMLElement));
customElements.define('my-post', Post);
exports.default = Post;
