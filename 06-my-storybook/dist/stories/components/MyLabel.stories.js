"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
//1st: 👇Import YourComponent
var MyLabel_1 = require("../../components/MyLabel");
//2nd: 👇 Esta exportación por defecto determina el titulo que se mostrará y el componente que se renderizará
exports.default = {
    /* The title prop is optional. */
    title: "UI/Etiquetas/MyLabel",
    component: MyLabel_1.MyLabel,
    argTypes: {
        label: { control: { type: "text" } },
        size: {
            control: { type: "select", options: ["normal", "h1", "h2", "h3"] },
        },
        color: {
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary"],
            },
        },
        allCaps: { control: { type: "boolean" } },
        fontColor: { control: "color" },
        backgroundColor: { control: "color" },
    },
};
//👇 Creo una Template del componente
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args), void 0)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: "normal",
    allCaps: false,
    color: "primary",
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: "ALL CAPS",
    size: "normal",
    allCaps: true,
    color: "primary",
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: "Secondary",
    size: "normal",
    color: "secondary",
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: "Tertiary",
    size: "normal",
    color: "tertiary",
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    label: "Custom Font Color",
    size: "h1",
    fontColor: "#5517ac",
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    label: "Custom Font Color",
    size: "h1",
    fontColor: "#5517ac",
    backgroundColor: "#000",
};
