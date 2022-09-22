"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suggestion = exports.Post = exports.Histories = exports.Header = void 0;
var Header_js_1 = require("./header/Header.js");
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return __importDefault(Header_js_1).default; } });
var Histories_js_1 = require("./histories/Histories.js");
Object.defineProperty(exports, "Histories", { enumerable: true, get: function () { return __importDefault(Histories_js_1).default; } });
var Post_js_1 = require("./post/Post.js");
Object.defineProperty(exports, "Post", { enumerable: true, get: function () { return __importDefault(Post_js_1).default; } });
var Suggestion_js_1 = require("./suggestion/Suggestion.js");
Object.defineProperty(exports, "Suggestion", { enumerable: true, get: function () { return __importDefault(Suggestion_js_1).default; } });
