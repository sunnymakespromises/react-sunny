import React, { forwardRef, createContext, useContext, useRef, useState, useEffect, useLayoutEffect } from 'react';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,900;1,300;1,400;1,600;1,900&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,900;1,300;1,400;1,600;1,900&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap\");\n.Container-module_direction-column__wK23- {\n  display: flex;\n  flex-direction: column;\n  cursor: default;\n  pointer-events: initial;\n}\n\n.Container-module_direction-row__-9-Yj {\n  display: flex;\n  flex-direction: row;\n  cursor: default;\n  pointer-events: initial;\n}\n\n.Container-module_alignment-center-center__JVOsV {\n  justify-content: center;\n  align-items: center;\n}\n\n.Container-module_alignment-center-start__kkCXF {\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.Container-module_alignment-center-end__rigoW {\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.Container-module_alignment-center-around__Yaoxq {\n  justify-content: center;\n  align-items: space-around;\n}\n\n.Container-module_alignment-center-between__Kb868 {\n  justify-content: center;\n  align-items: space-between;\n}\n\n.Container-module_alignment-center-baseline__ytCb4 {\n  justify-content: center;\n  align-items: first baseline;\n}\n\n.Container-module_alignment-center-stretch__yGb7z {\n  justify-content: center;\n  align-items: stretch;\n}\n\n.Container-module_alignment-start-center__oBjMi {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.Container-module_alignment-start-start__guBJd {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Container-module_alignment-start-end__qi8CX {\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n\n.Container-module_alignment-start-around__B-yI6 {\n  justify-content: flex-start;\n  align-items: space-around;\n}\n\n.Container-module_alignment-start-between__-xpbI {\n  justify-content: flex-start;\n  align-items: space-between;\n}\n\n.Container-module_alignment-start-baseline__OS1D- {\n  justify-content: flex-start;\n  align-items: first baseline;\n}\n\n.Container-module_alignment-start-stretch__JMroy {\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n.Container-module_alignment-end-center__Ji8EX {\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.Container-module_alignment-end-start__sKIrD {\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n\n.Container-module_alignment-end-end__ZOBXj {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.Container-module_alignment-end-around__F6zDW {\n  justify-content: flex-end;\n  align-items: space-around;\n}\n\n.Container-module_alignment-end-between__8qZad {\n  justify-content: flex-end;\n  align-items: space-between;\n}\n\n.Container-module_alignment-end-baseline__CFzx5 {\n  justify-content: flex-end;\n  align-items: first baseline;\n}\n\n.Container-module_alignment-end-stretch__2ohi3 {\n  justify-content: flex-end;\n  align-items: stretch;\n}\n\n.Container-module_alignment-around-center__Q3FJl {\n  justify-content: space-around;\n  align-items: center;\n}\n\n.Container-module_alignment-around-start__U9MCm {\n  justify-content: space-around;\n  align-items: flex-start;\n}\n\n.Container-module_alignment-around-end__GG82K {\n  justify-content: space-around;\n  align-items: flex-end;\n}\n\n.Container-module_alignment-around-around__Ynr8Y {\n  justify-content: space-around;\n  align-items: space-around;\n}\n\n.Container-module_alignment-around-between__68Nre {\n  justify-content: space-around;\n  align-items: space-between;\n}\n\n.Container-module_alignment-around-baseline__0RPEd {\n  justify-content: space-around;\n  align-items: first baseline;\n}\n\n.Container-module_alignment-around-stretch__q4hAA {\n  justify-content: space-around;\n  align-items: stretch;\n}\n\n.Container-module_alignment-between-center__RDeHJ {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.Container-module_alignment-between-start__wZZvy {\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.Container-module_alignment-between-end__K3MwW {\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.Container-module_alignment-between-around__SmYm- {\n  justify-content: space-between;\n  align-items: space-around;\n}\n\n.Container-module_alignment-between-between__D-nyM {\n  justify-content: space-between;\n  align-items: space-between;\n}\n\n.Container-module_alignment-between-baseline__hA7du {\n  justify-content: space-between;\n  align-items: first baseline;\n}\n\n.Container-module_alignment-between-stretch__N9ywZ {\n  justify-content: space-between;\n  align-items: stretch;\n}\n\n.Container-module_alignment-baseline-center__QZgDe {\n  justify-content: first baseline;\n  align-items: center;\n}\n\n.Container-module_alignment-baseline-start__oEIXL {\n  justify-content: first baseline;\n  align-items: flex-start;\n}\n\n.Container-module_alignment-baseline-end__ydozd {\n  justify-content: first baseline;\n  align-items: flex-end;\n}\n\n.Container-module_alignment-baseline-around__To70V {\n  justify-content: first baseline;\n  align-items: space-around;\n}\n\n.Container-module_alignment-baseline-between__HjWX1 {\n  justify-content: first baseline;\n  align-items: space-between;\n}\n\n.Container-module_alignment-baseline-baseline__RLY3- {\n  justify-content: first baseline;\n  align-items: first baseline;\n}\n\n.Container-module_alignment-baseline-stretch__nmX41 {\n  justify-content: first baseline;\n  align-items: stretch;\n}\n\n.Container-module_alignment-stretch-center__NKxOa {\n  justify-content: stretch;\n  align-items: center;\n}\n\n.Container-module_alignment-stretch-start__0R3Td {\n  justify-content: stretch;\n  align-items: flex-start;\n}\n\n.Container-module_alignment-stretch-end__QyimL {\n  justify-content: stretch;\n  align-items: flex-end;\n}\n\n.Container-module_alignment-stretch-around__EDBb- {\n  justify-content: stretch;\n  align-items: space-around;\n}\n\n.Container-module_alignment-stretch-between__VUQdT {\n  justify-content: stretch;\n  align-items: space-between;\n}\n\n.Container-module_alignment-stretch-baseline__4WytG {\n  justify-content: stretch;\n  align-items: first baseline;\n}\n\n.Container-module_alignment-stretch-stretch__zIcBp {\n  justify-content: stretch;\n  align-items: stretch;\n}\n\n.Container-module_position-relative__b92nb {\n  position: relative;\n}\n\n.Container-module_position-absolute__dUe7j {\n  position: absolute;\n}\n\n.Container-module_position-fixed__a6jqJ {\n  position: fixed;\n}\n\n.Container-module_position-sticky__oLUgQ {\n  top: 0;\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n.Container-module_fill-width__0WX3w {\n  width: 100%;\n}\n\n.Container-module_fill-height__BkRz- {\n  height: 100%;\n}\n\n.Container-module_fill-parent__p-B4G {\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n}\n\n.Container-module_fill-screen__f-OnH {\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n}\n\n.Container-module_fill-auto__cI5SF {\n  width: auto;\n  height: auto;\n}\n\n.Container-module_fill-none__frXUz {\n  width: initial;\n  height: initial;\n}\n\n.Container-module_padding-all-none__j35VJ {\n  padding: 0;\n}\n\n.Container-module_padding-all-small__pjngf {\n  padding: 0.5rem;\n}\n\n.Container-module_padding-all-medium__iv7YF {\n  padding: 1rem;\n}\n\n.Container-module_padding-all-large__IPVp1 {\n  padding: 1.5rem;\n}\n\n.Container-module_padding-top-none__z3Ird {\n  padding-top: 0;\n}\n\n.Container-module_padding-top-small__0vKWC {\n  padding-top: 0.5rem;\n}\n\n.Container-module_padding-top-medium__eiosQ {\n  padding-top: 1rem;\n}\n\n.Container-module_padding-top-large__XyuA3 {\n  padding-top: 1.5rem;\n}\n\n.Container-module_padding-left-none__WMk9Z {\n  padding-left: 0;\n}\n\n.Container-module_padding-left-small__rw1Iz {\n  padding-left: 0.5rem;\n}\n\n.Container-module_padding-left-medium__5Ay-u {\n  padding-left: 1rem;\n}\n\n.Container-module_padding-left-large__zSzGO {\n  padding-left: 1.5rem;\n}\n\n.Container-module_padding-bottom-none__yvOlu {\n  padding-bottom: 0;\n}\n\n.Container-module_padding-bottom-small__UXfxM {\n  padding-bottom: 0.5rem;\n}\n\n.Container-module_padding-bottom-medium__t-Tne {\n  padding-bottom: 1rem;\n}\n\n.Container-module_padding-bottom-large__Xhrlw {\n  padding-bottom: 1.5rem;\n}\n\n.Container-module_padding-right-none__63-TA {\n  padding-right: 0;\n}\n\n.Container-module_padding-right-small__MwzxX {\n  padding-right: 0.5rem;\n}\n\n.Container-module_padding-right-medium__vQfsy {\n  padding-right: 1rem;\n}\n\n.Container-module_padding-right-large__P-j-u {\n  padding-right: 1.5rem;\n}\n\n.Container-module_margin-all-none__ERim6 {\n  margin: 0;\n}\n\n.Container-module_margin-all-small__EwqtO {\n  margin: 0.4rem;\n}\n\n.Container-module_margin-all-medium__yximz {\n  margin: 0.8rem;\n}\n\n.Container-module_margin-all-large__wlilZ {\n  margin: 1rem;\n}\n\n.Container-module_margin-top-none__3jdp7 {\n  margin-top: 0;\n}\n\n.Container-module_margin-top-small__wVwjb {\n  margin-top: 0.4rem;\n}\n\n.Container-module_margin-top-medium__hjC4A {\n  margin-top: 0.8rem;\n}\n\n.Container-module_margin-top-large__vARms {\n  margin-top: 1rem;\n}\n\n.Container-module_margin-left-none__H1vks {\n  margin-left: 0;\n}\n\n.Container-module_margin-left-small__n2s-y {\n  margin-left: 0.4rem;\n}\n\n.Container-module_margin-left-medium__moKUT {\n  margin-left: 0.8rem;\n}\n\n.Container-module_margin-left-large__ta6Cy {\n  margin-left: 1rem;\n}\n\n.Container-module_margin-bottom-none__9cPwE {\n  margin-bottom: 0;\n}\n\n.Container-module_margin-bottom-small__6Iba- {\n  margin-bottom: 0.4rem;\n}\n\n.Container-module_margin-bottom-medium__a68Ex {\n  margin-bottom: 0.8rem;\n}\n\n.Container-module_margin-bottom-large__BIL8T {\n  margin-bottom: 1rem;\n}\n\n.Container-module_margin-right-none__8pZ8- {\n  margin-right: 0;\n}\n\n.Container-module_margin-right-small__-Bor7 {\n  margin-right: 0.4rem;\n}\n\n.Container-module_margin-right-medium__Md8l9 {\n  margin-right: 0.8rem;\n}\n\n.Container-module_margin-right-large__KvI5p {\n  margin-right: 1rem;\n}\n\n.Container-module_color-base-1__L12lR {\n  background-color: white;\n}\n\n.Container-module_color-base-2__6s-W0 {\n  background-color: #f2f2f7;\n}\n\n.Container-module_color-base-3__PN21m {\n  background-color: #d1d1d6;\n}\n\n.Container-module_color-accent-1__Lzi4u {\n  background-color: #007aff;\n}\n\n.Container-module_color-accent-2__0uoWx {\n  background-color: #55bef0;\n}\n\n.Container-module_color-accent-3__y26s1 {\n  background-color: #59adc4;\n}\n\n.Container-module_color-neutral-1__-jwzM {\n  background-color: black;\n}\n\n.Container-module_color-neutral-2__5-S3s {\n  background-color: #1c1c1e;\n}\n\n.Container-module_color-neutral-3__uBwTf {\n  background-color: #48484a;\n}\n\n.Container-module_can-click__arBVG {\n  cursor: pointer;\n  pointer-events: auto;\n}";
var styles$1 = {"direction-column":"Container-module_direction-column__wK23-","direction-row":"Container-module_direction-row__-9-Yj","alignment-center-center":"Container-module_alignment-center-center__JVOsV","alignment-center-start":"Container-module_alignment-center-start__kkCXF","alignment-center-end":"Container-module_alignment-center-end__rigoW","alignment-center-around":"Container-module_alignment-center-around__Yaoxq","alignment-center-between":"Container-module_alignment-center-between__Kb868","alignment-center-baseline":"Container-module_alignment-center-baseline__ytCb4","alignment-center-stretch":"Container-module_alignment-center-stretch__yGb7z","alignment-start-center":"Container-module_alignment-start-center__oBjMi","alignment-start-start":"Container-module_alignment-start-start__guBJd","alignment-start-end":"Container-module_alignment-start-end__qi8CX","alignment-start-around":"Container-module_alignment-start-around__B-yI6","alignment-start-between":"Container-module_alignment-start-between__-xpbI","alignment-start-baseline":"Container-module_alignment-start-baseline__OS1D-","alignment-start-stretch":"Container-module_alignment-start-stretch__JMroy","alignment-end-center":"Container-module_alignment-end-center__Ji8EX","alignment-end-start":"Container-module_alignment-end-start__sKIrD","alignment-end-end":"Container-module_alignment-end-end__ZOBXj","alignment-end-around":"Container-module_alignment-end-around__F6zDW","alignment-end-between":"Container-module_alignment-end-between__8qZad","alignment-end-baseline":"Container-module_alignment-end-baseline__CFzx5","alignment-end-stretch":"Container-module_alignment-end-stretch__2ohi3","alignment-around-center":"Container-module_alignment-around-center__Q3FJl","alignment-around-start":"Container-module_alignment-around-start__U9MCm","alignment-around-end":"Container-module_alignment-around-end__GG82K","alignment-around-around":"Container-module_alignment-around-around__Ynr8Y","alignment-around-between":"Container-module_alignment-around-between__68Nre","alignment-around-baseline":"Container-module_alignment-around-baseline__0RPEd","alignment-around-stretch":"Container-module_alignment-around-stretch__q4hAA","alignment-between-center":"Container-module_alignment-between-center__RDeHJ","alignment-between-start":"Container-module_alignment-between-start__wZZvy","alignment-between-end":"Container-module_alignment-between-end__K3MwW","alignment-between-around":"Container-module_alignment-between-around__SmYm-","alignment-between-between":"Container-module_alignment-between-between__D-nyM","alignment-between-baseline":"Container-module_alignment-between-baseline__hA7du","alignment-between-stretch":"Container-module_alignment-between-stretch__N9ywZ","alignment-baseline-center":"Container-module_alignment-baseline-center__QZgDe","alignment-baseline-start":"Container-module_alignment-baseline-start__oEIXL","alignment-baseline-end":"Container-module_alignment-baseline-end__ydozd","alignment-baseline-around":"Container-module_alignment-baseline-around__To70V","alignment-baseline-between":"Container-module_alignment-baseline-between__HjWX1","alignment-baseline-baseline":"Container-module_alignment-baseline-baseline__RLY3-","alignment-baseline-stretch":"Container-module_alignment-baseline-stretch__nmX41","alignment-stretch-center":"Container-module_alignment-stretch-center__NKxOa","alignment-stretch-start":"Container-module_alignment-stretch-start__0R3Td","alignment-stretch-end":"Container-module_alignment-stretch-end__QyimL","alignment-stretch-around":"Container-module_alignment-stretch-around__EDBb-","alignment-stretch-between":"Container-module_alignment-stretch-between__VUQdT","alignment-stretch-baseline":"Container-module_alignment-stretch-baseline__4WytG","alignment-stretch-stretch":"Container-module_alignment-stretch-stretch__zIcBp","position-relative":"Container-module_position-relative__b92nb","position-absolute":"Container-module_position-absolute__dUe7j","position-fixed":"Container-module_position-fixed__a6jqJ","position-sticky":"Container-module_position-sticky__oLUgQ","fill-width":"Container-module_fill-width__0WX3w","fill-height":"Container-module_fill-height__BkRz-","fill-parent":"Container-module_fill-parent__p-B4G","fill-screen":"Container-module_fill-screen__f-OnH","fill-auto":"Container-module_fill-auto__cI5SF","fill-none":"Container-module_fill-none__frXUz","padding-all-none":"Container-module_padding-all-none__j35VJ","padding-all-small":"Container-module_padding-all-small__pjngf","padding-all-medium":"Container-module_padding-all-medium__iv7YF","padding-all-large":"Container-module_padding-all-large__IPVp1","padding-top-none":"Container-module_padding-top-none__z3Ird","padding-top-small":"Container-module_padding-top-small__0vKWC","padding-top-medium":"Container-module_padding-top-medium__eiosQ","padding-top-large":"Container-module_padding-top-large__XyuA3","padding-left-none":"Container-module_padding-left-none__WMk9Z","padding-left-small":"Container-module_padding-left-small__rw1Iz","padding-left-medium":"Container-module_padding-left-medium__5Ay-u","padding-left-large":"Container-module_padding-left-large__zSzGO","padding-bottom-none":"Container-module_padding-bottom-none__yvOlu","padding-bottom-small":"Container-module_padding-bottom-small__UXfxM","padding-bottom-medium":"Container-module_padding-bottom-medium__t-Tne","padding-bottom-large":"Container-module_padding-bottom-large__Xhrlw","padding-right-none":"Container-module_padding-right-none__63-TA","padding-right-small":"Container-module_padding-right-small__MwzxX","padding-right-medium":"Container-module_padding-right-medium__vQfsy","padding-right-large":"Container-module_padding-right-large__P-j-u","margin-all-none":"Container-module_margin-all-none__ERim6","margin-all-small":"Container-module_margin-all-small__EwqtO","margin-all-medium":"Container-module_margin-all-medium__yximz","margin-all-large":"Container-module_margin-all-large__wlilZ","margin-top-none":"Container-module_margin-top-none__3jdp7","margin-top-small":"Container-module_margin-top-small__wVwjb","margin-top-medium":"Container-module_margin-top-medium__hjC4A","margin-top-large":"Container-module_margin-top-large__vARms","margin-left-none":"Container-module_margin-left-none__H1vks","margin-left-small":"Container-module_margin-left-small__n2s-y","margin-left-medium":"Container-module_margin-left-medium__moKUT","margin-left-large":"Container-module_margin-left-large__ta6Cy","margin-bottom-none":"Container-module_margin-bottom-none__9cPwE","margin-bottom-small":"Container-module_margin-bottom-small__6Iba-","margin-bottom-medium":"Container-module_margin-bottom-medium__a68Ex","margin-bottom-large":"Container-module_margin-bottom-large__BIL8T","margin-right-none":"Container-module_margin-right-none__8pZ8-","margin-right-small":"Container-module_margin-right-small__-Bor7","margin-right-medium":"Container-module_margin-right-medium__Md8l9","margin-right-large":"Container-module_margin-right-large__KvI5p","color-base-1":"Container-module_color-base-1__L12lR","color-base-2":"Container-module_color-base-2__6s-W0","color-base-3":"Container-module_color-base-3__PN21m","color-accent-1":"Container-module_color-accent-1__Lzi4u","color-accent-2":"Container-module_color-accent-2__0uoWx","color-accent-3":"Container-module_color-accent-3__y26s1","color-neutral-1":"Container-module_color-neutral-1__-jwzM","color-neutral-2":"Container-module_color-neutral-2__5-S3s","color-neutral-3":"Container-module_color-neutral-3__uBwTf","can-click":"Container-module_can-click__arBVG"};
styleInject(css_248z$1);

var _excluded$2 = ["id", "classes", "style", "direction", "alignment", "position", "fill", "padding", "margin", "color", "canClick", "children"];

var getClassesFromString$1 = function getClassesFromString(property, string) {
  var classes = '';
  var array = string.split(' ');

  for (var i = 0; i < array.length; i += 2) {
    var x = array[i];
    var y = array[i + 1];
    classes += styles$1[property + '-' + x + '-' + y];

    if (i != array.length - 1) {
      classes += ' ';
    }
  }

  return classes;
};

var Container = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? '' : _ref$id,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? '' : _ref$classes,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'column' : _ref$direction,
      _ref$alignment = _ref.alignment,
      alignment = _ref$alignment === void 0 ? 'center center' : _ref$alignment,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'relative' : _ref$position,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'auto' : _ref$fill,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 'all none' : _ref$padding,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? 'all none' : _ref$margin,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$canClick = _ref.canClick,
      canClick = _ref$canClick === void 0 ? false : _ref$canClick,
      children = _ref.children,
      extras = _objectWithoutProperties(_ref, _excluded$2);

  var getClasses = function getClasses() {
    var alignmentClasses = getClassesFromString$1('alignment', alignment);
    var paddingClasses = getClassesFromString$1('padding', padding);
    var marginClasses = getClassesFromString$1('margin', margin);
    return styles$1['direction-' + direction] + ' ' + alignmentClasses + ' ' + styles$1['position-' + position] + ' ' + styles$1['fill-' + fill] + ' ' + paddingClasses + ' ' + marginClasses + (color !== '' ? ' ' + styles$1['color-' + color] : '') + (canClick ? ' ' + styles$1['can-click'] : '');
  };

  var getColor = function getColor() {
    if (color.includes('#')) {
      return {
        backgroundColor: color
      };
    } else {
      return {};
    }
  };

  return /*#__PURE__*/React.createElement("div", _extends({
    id: id != '' ? id : null,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2(_objectSpread2({}, style), getColor()),
    ref: ref
  }, extras), children);
});

var DropdownContext = /*#__PURE__*/createContext();
function DropdownProvider(props) {
  var value = props.value,
      children = props.children;
  return /*#__PURE__*/React.createElement(DropdownContext.Provider, {
    value: value
  }, children);
}
function useDropdownContext() {
  return useContext(DropdownContext);
}

var _excluded$1 = ["children", "container"],
    _excluded2 = ["children", "container"],
    _excluded3 = ["children", "container"],
    _excluded4 = ["children", "value", "container", "initial", "active"],
    _excluded5 = ["children", "container"],
    _excluded6 = ["behavior", "trigger", "onToggle", "onSelect", "children", "container"];
var Wrapper = /*#__PURE__*/forwardRef(function (_ref, wrapperRef) {
  var children = _ref.children,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? false : _ref$container,
      extras = _objectWithoutProperties(_ref, _excluded$1);

  var _useDropdownContext = useDropdownContext(),
      expanding = _useDropdownContext.expanding;

  var _expanding = _slicedToArray(expanding, 5),
      trigger = _expanding[4];

  if (trigger == 'header') {
    if (Object.keys(extras).length != 0 || container) {
      return /*#__PURE__*/React.createElement(Activator, null, /*#__PURE__*/React.createElement(Container, _extends({}, extras, {
        canClick: true,
        ref: wrapperRef
      }), children));
    } else {
      return /*#__PURE__*/React.createElement(Activator, null, /*#__PURE__*/React.cloneElement(children, {
        canClick: true,
        ref: wrapperRef
      }));
    }
  } else {
    if (Object.keys(extras).length != 0 || container) {
      return /*#__PURE__*/React.createElement(Container, _extends({}, extras, {
        ref: wrapperRef
      }), children);
    } else {
      return /*#__PURE__*/React.cloneElement(children, {
        ref: wrapperRef
      });
    }
  }
});
function Header(_ref2) {
  var children = _ref2.children,
      _ref2$container = _ref2.container,
      container = _ref2$container === void 0 ? false : _ref2$container,
      extras = _objectWithoutProperties(_ref2, _excluded2);

  if (Object.keys(extras).length != 0 || container) {
    return /*#__PURE__*/React.createElement(Container, extras, children);
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }
}
function List(_ref3) {
  var children = _ref3.children,
      _ref3$container = _ref3.container,
      container = _ref3$container === void 0 ? false : _ref3$container,
      extras = _objectWithoutProperties(_ref3, _excluded3);

  if (Object.keys(extras).length != 0 || container) {
    return /*#__PURE__*/React.createElement(Container, extras, children);
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }
}
function Option(_ref4) {
  var children = _ref4.children,
      value = _ref4.value,
      _ref4$container = _ref4.container,
      container = _ref4$container === void 0 ? false : _ref4$container,
      _ref4$initial = _ref4.initial,
      initial = _ref4$initial === void 0 ? false : _ref4$initial,
      _ref4$active = _ref4.active,
      active = _ref4$active === void 0 ? true : _ref4$active,
      extras = _objectWithoutProperties(_ref4, _excluded4);

  var _useDropdownContext2 = useDropdownContext(),
      selecting = _useDropdownContext2.selecting;

  var _selecting = _slicedToArray(selecting, 3),
      select = _selecting[1],
      initialize = _selecting[2];

  useEffect(function () {
    if (initial) {
      initialize(value);
    }
  }, []);

  if (Object.keys(extras).length != 0 || container) {
    if (active) {
      return /*#__PURE__*/React.createElement(Container, _extends({}, extras, {
        canClick: true,
        onClick: function onClick() {
          return select(value);
        }
      }), children);
    } else {
      return /*#__PURE__*/React.createElement(Container, _extends({}, extras, {
        canClick: true
      }), children);
    }
  } else {
    if (active) {
      return /*#__PURE__*/React.cloneElement(children, {
        canClick: true,
        onClick: function onClick() {
          return select(value);
        }
      });
    } else {
      return /*#__PURE__*/React.cloneElement(children, {
        canClick: true
      });
    }
  }
}
function Button(_ref5) {
  var children = _ref5.children,
      _ref5$container = _ref5.container,
      container = _ref5$container === void 0 ? false : _ref5$container,
      extras = _objectWithoutProperties(_ref5, _excluded5);

  var _useDropdownContext3 = useDropdownContext(),
      expanding = _useDropdownContext3.expanding;

  var _expanding2 = _slicedToArray(expanding, 5);
      _expanding2[0];
      _expanding2[1];
      _expanding2[2];
      _expanding2[3];
      var trigger = _expanding2[4];

  if (trigger == 'header') {
    if (Object.keys(extras).length != 0 || container) {
      return /*#__PURE__*/React.createElement(Container, extras, children);
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, children);
    }
  } else {
    if (Object.keys(extras).length != 0 || container) {
      return /*#__PURE__*/React.createElement(Activator, null, /*#__PURE__*/React.createElement(Container, extras, children));
    } else {
      return /*#__PURE__*/React.createElement(Activator, null, children);
    }
  }
}

function Activator(_ref6) {
  var children = _ref6.children;

  var _useDropdownContext4 = useDropdownContext(),
      expanding = _useDropdownContext4.expanding;

  var _expanding3 = _slicedToArray(expanding, 4),
      toggle = _expanding3[0],
      open = _expanding3[1],
      close = _expanding3[2],
      behavior = _expanding3[3];

  var event = behavior == 'hover' ? {
    onMouseEnter: open,
    onMouseLeave: close
  } : {
    onClick: toggle
  };
  return /*#__PURE__*/React.cloneElement(children, _objectSpread2({
    canClick: true
  }, event));
}

function Dropdown(_ref7) {
  var behavior = _ref7.behavior,
      trigger = _ref7.trigger,
      onToggle = _ref7.onToggle,
      onSelect = _ref7.onSelect,
      children = _ref7.children;
      _ref7.container;
      var extras = _objectWithoutProperties(_ref7, _excluded6);

  var wrapperRef = useRef();

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      selection = _useState2[0],
      setSelection = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isExpanded = _useState4[0],
      setIsExpanded = _useState4[1];

  useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        close();
      }
    };

    window.addEventListener('click', handleClickOutside, true);
    return function () {
      window.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  var toggle = function toggle(value) {
    if (typeof value != 'boolean') {
      if (isExpanded) {
        close();
      } else {
        open();
      }
    } else {
      if (value) {
        open();
      } else {
        close();
      }
    }
  };

  var open = function open() {
    setIsExpanded(true);
    onToggle(true);
  };

  var close = function close() {
    setIsExpanded(false);
    onToggle(false);
  };

  var select = function select(value) {
    setSelection(value);
    onSelect(value);
  };

  var initialize = function initialize(value) {
    if (selection == null) {
      select(value);
    }
  };

  var expanding = {
    expanding: [toggle, open, close, behavior, trigger]
  };
  var selecting = {
    selecting: [selection, select, initialize]
  };
  return /*#__PURE__*/React.createElement(DropdownProvider, {
    value: _objectSpread2(_objectSpread2({}, expanding), selecting)
  }, /*#__PURE__*/React.createElement(Wrapper, _extends({
    ref: wrapperRef,
    container: true
  }, extras), children));
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var reactResponsive = {exports: {}};

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory(React);
	})(commonjsGlobal, (__WEBPACK_EXTERNAL_MODULE_react__) => {
	return /******/ (() => { // webpackBootstrap
	/******/ 	var __webpack_modules__ = ({

	/***/ "./node_modules/css-mediaquery/index.js":
	/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/
	/***/ ((__unused_webpack_module, exports) => {
	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/



	exports.match = matchQuery;
	exports.parse = parseQuery;

	// -----------------------------------------------------------------------------

	var RE_MEDIA_QUERY     = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
	    RE_MQ_EXPRESSION   = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
	    RE_MQ_FEATURE      = /^(?:(min|max)-)?(.+)/,
	    RE_LENGTH_UNIT     = /(em|rem|px|cm|mm|in|pt|pc)?$/,
	    RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;

	function matchQuery(mediaQuery, values) {
	    return parseQuery(mediaQuery).some(function (query) {
	        var inverse = query.inverse;

	        // Either the parsed or specified `type` is "all", or the types must be
	        // equal for a match.
	        var typeMatch = query.type === 'all' || values.type === query.type;

	        // Quit early when `type` doesn't match, but take "not" into account.
	        if ((typeMatch && inverse) || !(typeMatch || inverse)) {
	            return false;
	        }

	        var expressionsMatch = query.expressions.every(function (expression) {
	            var feature  = expression.feature,
	                modifier = expression.modifier,
	                expValue = expression.value,
	                value    = values[feature];

	            // Missing or falsy values don't match.
	            if (!value) { return false; }

	            switch (feature) {
	                case 'orientation':
	                case 'scan':
	                    return value.toLowerCase() === expValue.toLowerCase();

	                case 'width':
	                case 'height':
	                case 'device-width':
	                case 'device-height':
	                    expValue = toPx(expValue);
	                    value    = toPx(value);
	                    break;

	                case 'resolution':
	                    expValue = toDpi(expValue);
	                    value    = toDpi(value);
	                    break;

	                case 'aspect-ratio':
	                case 'device-aspect-ratio':
	                case /* Deprecated */ 'device-pixel-ratio':
	                    expValue = toDecimal(expValue);
	                    value    = toDecimal(value);
	                    break;

	                case 'grid':
	                case 'color':
	                case 'color-index':
	                case 'monochrome':
	                    expValue = parseInt(expValue, 10) || 1;
	                    value    = parseInt(value, 10) || 0;
	                    break;
	            }

	            switch (modifier) {
	                case 'min': return value >= expValue;
	                case 'max': return value <= expValue;
	                default   : return value === expValue;
	            }
	        });

	        return (expressionsMatch && !inverse) || (!expressionsMatch && inverse);
	    });
	}

	function parseQuery(mediaQuery) {
	    return mediaQuery.split(',').map(function (query) {
	        query = query.trim();

	        var captures    = query.match(RE_MEDIA_QUERY),
	            modifier    = captures[1],
	            type        = captures[2],
	            expressions = captures[3] || '',
	            parsed      = {};

	        parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
	        parsed.type    = type ? type.toLowerCase() : 'all';

	        // Split expressions into a list.
	        expressions = expressions.match(/\([^\)]+\)/g) || [];

	        parsed.expressions = expressions.map(function (expression) {
	            var captures = expression.match(RE_MQ_EXPRESSION),
	                feature  = captures[1].toLowerCase().match(RE_MQ_FEATURE);

	            return {
	                modifier: feature[1],
	                feature : feature[2],
	                value   : captures[2]
	            };
	        });

	        return parsed;
	    });
	}

	// -- Utilities ----------------------------------------------------------------

	function toDecimal(ratio) {
	    var decimal = Number(ratio),
	        numbers;

	    if (!decimal) {
	        numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
	        decimal = numbers[1] / numbers[2];
	    }

	    return decimal;
	}

	function toDpi(resolution) {
	    var value = parseFloat(resolution),
	        units = String(resolution).match(RE_RESOLUTION_UNIT)[1];

	    switch (units) {
	        case 'dpcm': return value / 2.54;
	        case 'dppx': return value * 96;
	        default    : return value;
	    }
	}

	function toPx(length) {
	    var value = parseFloat(length),
	        units = String(length).match(RE_LENGTH_UNIT)[1];

	    switch (units) {
	        case 'em' : return value * 16;
	        case 'rem': return value * 16;
	        case 'cm' : return value * 96 / 2.54;
	        case 'mm' : return value * 96 / 2.54 / 10;
	        case 'in' : return value * 96;
	        case 'pt' : return value * 72;
	        case 'pc' : return value * 72 / 12;
	        default   : return value;
	    }
	}


	/***/ }),

	/***/ "./node_modules/hyphenate-style-name/index.js":
	/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/
	/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
	__webpack_require__.r(__webpack_exports__);
	/* harmony export */ __webpack_require__.d(__webpack_exports__, {
	/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
	/* harmony export */ });
	/* eslint-disable no-var, prefer-template */
	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache = {};

	function toHyphenLower(match) {
	  return '-' + match.toLowerCase()
	}

	function hyphenateStyleName(name) {
	  if (cache.hasOwnProperty(name)) {
	    return cache[name]
	  }

	  var hName = name.replace(uppercasePattern, toHyphenLower);
	  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
	}

	/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hyphenateStyleName);


	/***/ }),

	/***/ "./node_modules/matchmediaquery/index.js":
	/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/
	/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


	var staticMatch = (__webpack_require__(/*! css-mediaquery */ "./node_modules/css-mediaquery/index.js").match);
	var dynamicMatch = typeof window !== 'undefined' ? window.matchMedia : null;

	// our fake MediaQueryList
	function Mql(query, values, forceStatic){
	  var self = this;
	  if(dynamicMatch && !forceStatic){
	    var mql = dynamicMatch.call(window, query);
	    this.matches = mql.matches;
	    this.media = mql.media;
	    // TODO: is there a time it makes sense to remove this listener?
	    mql.addListener(update);
	  } else {
	    this.matches = staticMatch(query, values);
	    this.media = query;
	  }

	  this.addListener = addListener;
	  this.removeListener = removeListener;
	  this.dispose = dispose;

	  function addListener(listener){
	    if(mql){
	      mql.addListener(listener);
	    }
	  }

	  function removeListener(listener){
	    if(mql){
	      mql.removeListener(listener);
	    }
	  }

	  // update ourselves!
	  function update(evt){
	    self.matches = evt.matches;
	    self.media = evt.media;
	  }

	  function dispose(){
	    if(mql){
	      mql.removeListener(update);
	    }
	  }
	}

	function matchMedia(query, values, forceStatic){
	  return new Mql(query, values, forceStatic);
	}

	module.exports = matchMedia;


	/***/ }),

	/***/ "./node_modules/object-assign/index.js":
	/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/
	/***/ ((module) => {
	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/


	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


	/***/ }),

	/***/ "./node_modules/prop-types/checkPropTypes.js":
	/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/
	/***/ ((module, __unused_webpack_exports, __webpack_require__) => {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */



	var printWarning = function() {};

	{
	  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
	  var loggedTypeFailures = {};
	  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  {
	    loggedTypeFailures = {};
	  }
	};

	module.exports = checkPropTypes;


	/***/ }),

	/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
	/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/
	/***/ ((module, __unused_webpack_exports, __webpack_require__) => {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */



	var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
	var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

	var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
	var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
	var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

	var printWarning = function() {};

	{
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if ( typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


	/***/ }),

	/***/ "./node_modules/prop-types/index.js":
	/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/
	/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
	}


	/***/ }),

	/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
	/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/
	/***/ ((module) => {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */



	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


	/***/ }),

	/***/ "./node_modules/prop-types/lib/has.js":
	/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/
	/***/ ((module) => {

	module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


	/***/ }),

	/***/ "./node_modules/react-is/cjs/react-is.development.js":
	/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/
	/***/ ((__unused_webpack_module, exports) => {
	/** @license React v16.13.1
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */





	{
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}


	/***/ }),

	/***/ "./node_modules/react-is/index.js":
	/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/
	/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


	{
	  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
	}


	/***/ }),

	/***/ "./node_modules/shallow-equal/dist/index.esm.js":
	/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/
	/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
	__webpack_require__.r(__webpack_exports__);
	/* harmony export */ __webpack_require__.d(__webpack_exports__, {
	/* harmony export */   "shallowEqualArrays": () => (/* binding */ shallowEqualArrays),
	/* harmony export */   "shallowEqualObjects": () => (/* binding */ shallowEqualObjects)
	/* harmony export */ });
	function shallowEqualObjects(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (!objA || !objB) {
	    return false;
	  }

	  var aKeys = Object.keys(objA);
	  var bKeys = Object.keys(objB);
	  var len = aKeys.length;

	  if (bKeys.length !== len) {
	    return false;
	  }

	  for (var i = 0; i < len; i++) {
	    var key = aKeys[i];

	    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
	      return false;
	    }
	  }

	  return true;
	}

	function shallowEqualArrays(arrA, arrB) {
	  if (arrA === arrB) {
	    return true;
	  }

	  if (!arrA || !arrB) {
	    return false;
	  }

	  var len = arrA.length;

	  if (arrB.length !== len) {
	    return false;
	  }

	  for (var i = 0; i < len; i++) {
	    if (arrA[i] !== arrB[i]) {
	      return false;
	    }
	  }

	  return true;
	}




	/***/ }),

	/***/ "./src/Component.ts":
	/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

	var __rest = (this && this.__rest) || function (s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	};
	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", ({ value: true }));
	var useMediaQuery_1 = __importDefault(__webpack_require__(/*! ./useMediaQuery */ "./src/useMediaQuery.ts"));
	// ReactNode and ReactElement typings are a little funky for functional components, so the ReactElement cast is needed on the return
	var MediaQuery = function (_a) {
	    var children = _a.children, device = _a.device, onChange = _a.onChange, settings = __rest(_a, ["children", "device", "onChange"]);
	    var matches = (0, useMediaQuery_1.default)(settings, device, onChange);
	    if (typeof children === 'function') {
	        return children(matches);
	    }
	    return matches ? children : null;
	};
	exports["default"] = MediaQuery;


	/***/ }),

	/***/ "./src/Context.ts":
	/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/
	/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

	Object.defineProperty(exports, "__esModule", ({ value: true }));
	var react_1 = __webpack_require__(/*! react */ "react");
	var Context = (0, react_1.createContext)(undefined);
	exports["default"] = Context;


	/***/ }),

	/***/ "./src/index.ts":
	/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", ({ value: true }));
	exports.Context = exports.toQuery = exports.useMediaQuery = exports["default"] = void 0;
	var useMediaQuery_1 = __importDefault(__webpack_require__(/*! ./useMediaQuery */ "./src/useMediaQuery.ts"));
	exports.useMediaQuery = useMediaQuery_1.default;
	var Component_1 = __importDefault(__webpack_require__(/*! ./Component */ "./src/Component.ts"));
	exports["default"] = Component_1.default;
	var toQuery_1 = __importDefault(__webpack_require__(/*! ./toQuery */ "./src/toQuery.ts"));
	exports.toQuery = toQuery_1.default;
	var Context_1 = __importDefault(__webpack_require__(/*! ./Context */ "./src/Context.ts"));
	exports.Context = Context_1.default;


	/***/ }),

	/***/ "./src/mediaQuery.ts":
	/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
	var __rest = (this && this.__rest) || function (s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	};
	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", ({ value: true }));
	var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
	var stringOrNumber = prop_types_1.default.oneOfType([
	    prop_types_1.default.string,
	    prop_types_1.default.number
	]);
	// media types
	var types = {
	    all: prop_types_1.default.bool,
	    grid: prop_types_1.default.bool,
	    aural: prop_types_1.default.bool,
	    braille: prop_types_1.default.bool,
	    handheld: prop_types_1.default.bool,
	    print: prop_types_1.default.bool,
	    projection: prop_types_1.default.bool,
	    screen: prop_types_1.default.bool,
	    tty: prop_types_1.default.bool,
	    tv: prop_types_1.default.bool,
	    embossed: prop_types_1.default.bool
	};
	// properties that match media queries
	var matchers = {
	    orientation: prop_types_1.default.oneOf([
	        'portrait',
	        'landscape'
	    ]),
	    scan: prop_types_1.default.oneOf([
	        'progressive',
	        'interlace'
	    ]),
	    aspectRatio: prop_types_1.default.string,
	    deviceAspectRatio: prop_types_1.default.string,
	    height: stringOrNumber,
	    deviceHeight: stringOrNumber,
	    width: stringOrNumber,
	    deviceWidth: stringOrNumber,
	    color: prop_types_1.default.bool,
	    colorIndex: prop_types_1.default.bool,
	    monochrome: prop_types_1.default.bool,
	    resolution: stringOrNumber,
	    type: Object.keys(types)
	};
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	matchers.type; var featureMatchers = __rest(matchers
	// media features
	, ["type"]);
	// media features
	var features = __assign({ minAspectRatio: prop_types_1.default.string, maxAspectRatio: prop_types_1.default.string, minDeviceAspectRatio: prop_types_1.default.string, maxDeviceAspectRatio: prop_types_1.default.string, minHeight: stringOrNumber, maxHeight: stringOrNumber, minDeviceHeight: stringOrNumber, maxDeviceHeight: stringOrNumber, minWidth: stringOrNumber, maxWidth: stringOrNumber, minDeviceWidth: stringOrNumber, maxDeviceWidth: stringOrNumber, minColor: prop_types_1.default.number, maxColor: prop_types_1.default.number, minColorIndex: prop_types_1.default.number, maxColorIndex: prop_types_1.default.number, minMonochrome: prop_types_1.default.number, maxMonochrome: prop_types_1.default.number, minResolution: stringOrNumber, maxResolution: stringOrNumber }, featureMatchers);
	var all = __assign(__assign({}, types), features);
	exports["default"] = {
	    all: all,
	    types: types,
	    matchers: matchers,
	    features: features
	};


	/***/ }),

	/***/ "./src/toQuery.ts":
	/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", ({ value: true }));
	var hyphenate_style_name_1 = __importDefault(__webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js"));
	var mediaQuery_1 = __importDefault(__webpack_require__(/*! ./mediaQuery */ "./src/mediaQuery.ts"));
	var negate = function (cond) { return "not ".concat(cond); };
	var keyVal = function (k, v) {
	    var realKey = (0, hyphenate_style_name_1.default)(k);
	    // px shorthand
	    if (typeof v === 'number') {
	        v = "".concat(v, "px");
	    }
	    if (v === true) {
	        return realKey;
	    }
	    if (v === false) {
	        return negate(realKey);
	    }
	    return "(".concat(realKey, ": ").concat(v, ")");
	};
	var join = function (conds) { return conds.join(' and '); };
	var toQuery = function (obj) {
	    var rules = [];
	    Object.keys(mediaQuery_1.default.all).forEach(function (k) {
	        var v = obj[k];
	        if (v != null) {
	            rules.push(keyVal(k, v));
	        }
	    });
	    return join(rules);
	};
	exports["default"] = toQuery;


	/***/ }),

	/***/ "./src/useMediaQuery.ts":
	/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", ({ value: true }));
	var react_1 = __webpack_require__(/*! react */ "react");
	var matchmediaquery_1 = __importDefault(__webpack_require__(/*! matchmediaquery */ "./node_modules/matchmediaquery/index.js"));
	var hyphenate_style_name_1 = __importDefault(__webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js"));
	var shallow_equal_1 = __webpack_require__(/*! shallow-equal */ "./node_modules/shallow-equal/dist/index.esm.js");
	var toQuery_1 = __importDefault(__webpack_require__(/*! ./toQuery */ "./src/toQuery.ts"));
	var Context_1 = __importDefault(__webpack_require__(/*! ./Context */ "./src/Context.ts"));
	var makeQuery = function (settings) { return settings.query || (0, toQuery_1.default)(settings); };
	var hyphenateKeys = function (obj) {
	    if (!obj)
	        return undefined;
	    var keys = Object.keys(obj);
	    return keys.reduce(function (result, key) {
	        result[(0, hyphenate_style_name_1.default)(key)] = obj[key];
	        return result;
	    }, {});
	};
	var useIsUpdate = function () {
	    var ref = (0, react_1.useRef)(false);
	    (0, react_1.useEffect)(function () {
	        ref.current = true;
	    }, []);
	    return ref.current;
	};
	var useDevice = function (deviceFromProps) {
	    var deviceFromContext = (0, react_1.useContext)(Context_1.default);
	    var getDevice = function () {
	        return hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
	    };
	    var _a = (0, react_1.useState)(getDevice), device = _a[0], setDevice = _a[1];
	    (0, react_1.useEffect)(function () {
	        var newDevice = getDevice();
	        if (!(0, shallow_equal_1.shallowEqualObjects)(device, newDevice)) {
	            setDevice(newDevice);
	        }
	    }, [deviceFromProps, deviceFromContext]);
	    return device;
	};
	var useQuery = function (settings) {
	    var getQuery = function () { return makeQuery(settings); };
	    var _a = (0, react_1.useState)(getQuery), query = _a[0], setQuery = _a[1];
	    (0, react_1.useEffect)(function () {
	        var newQuery = getQuery();
	        if (query !== newQuery) {
	            setQuery(newQuery);
	        }
	    }, [settings]);
	    return query;
	};
	var useMatchMedia = function (query, device) {
	    var getMatchMedia = function () { return (0, matchmediaquery_1.default)(query, device || {}, !!device); };
	    var _a = (0, react_1.useState)(getMatchMedia), mq = _a[0], setMq = _a[1];
	    var isUpdate = useIsUpdate();
	    (0, react_1.useEffect)(function () {
	        if (isUpdate) {
	            // skip on mounting, it has already been set
	            var newMq_1 = getMatchMedia();
	            setMq(newMq_1);
	            return function () {
	                if (newMq_1) {
	                    newMq_1.dispose();
	                }
	            };
	        }
	    }, [query, device]);
	    return mq;
	};
	var useMatches = function (mediaQuery) {
	    var _a = (0, react_1.useState)(mediaQuery.matches), matches = _a[0], setMatches = _a[1];
	    (0, react_1.useEffect)(function () {
	        var updateMatches = function (ev) {
	            setMatches(ev.matches);
	        };
	        mediaQuery.addListener(updateMatches);
	        setMatches(mediaQuery.matches);
	        return function () {
	            mediaQuery.removeListener(updateMatches);
	        };
	    }, [mediaQuery]);
	    return matches;
	};
	var useMediaQuery = function (settings, device, onChange) {
	    var deviceSettings = useDevice(device);
	    var query = useQuery(settings);
	    if (!query)
	        throw new Error('Invalid or missing MediaQuery!');
	    var mq = useMatchMedia(query, deviceSettings);
	    var matches = useMatches(mq);
	    var isUpdate = useIsUpdate();
	    (0, react_1.useEffect)(function () {
	        if (isUpdate && onChange) {
	            onChange(matches);
	        }
	    }, [matches]);
	    (0, react_1.useEffect)(function () { return function () {
	        if (mq) {
	            mq.dispose();
	        }
	    }; }, []);
	    return matches;
	};
	exports["default"] = useMediaQuery;


	/***/ }),

	/***/ "react":
	/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/
	/***/ ((module) => {
	module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

	/***/ })

	/******/ 	});
	/************************************************************************/
	/******/ 	// The module cache
	/******/ 	var __webpack_module_cache__ = {};
	/******/ 	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/ 		// Check if module is in cache
	/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
	/******/ 		if (cachedModule !== undefined) {
	/******/ 			return cachedModule.exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = __webpack_module_cache__[moduleId] = {
	/******/ 			// no module.id needed
	/******/ 			// no module.loaded needed
	/******/ 			exports: {}
	/******/ 		};
	/******/ 	
	/******/ 		// Execute the module function
	/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/ 	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/ 	
	/************************************************************************/
	/******/ 	/* webpack/runtime/define property getters */
	/******/ 	(() => {
	/******/ 		// define getter functions for harmony exports
	/******/ 		__webpack_require__.d = (exports, definition) => {
	/******/ 			for(var key in definition) {
	/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
	/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
	/******/ 				}
	/******/ 			}
	/******/ 		};
	/******/ 	})();
	/******/ 	
	/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
	/******/ 	(() => {
	/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
	/******/ 	})();
	/******/ 	
	/******/ 	/* webpack/runtime/make namespace object */
	/******/ 	(() => {
	/******/ 		// define __esModule on exports
	/******/ 		__webpack_require__.r = (exports) => {
	/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 			}
	/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 		};
	/******/ 	})();
	/******/ 	
	/************************************************************************/
	/******/ 	
	/******/ 	// startup
	/******/ 	// Load entry module and return exports
	/******/ 	// This entry module is referenced by other modules so it can't be inlined
	/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
	/******/ 	
	/******/ 	return __webpack_exports__;
	/******/ })()
	;
	});
	
} (reactResponsive));

function Responsive(_ref) {
  var _ref$portrait = _ref.portrait,
      portrait = _ref$portrait === void 0 ? false : _ref$portrait,
      _ref$landscape = _ref.landscape,
      landscape = _ref$landscape === void 0 ? false : _ref$landscape,
      children = _ref.children;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isClient = _useState2[0],
      setIsClient = _useState2[1];

  var isPortrait = reactResponsive.exports.useMediaQuery({
    orientation: 'portrait'
  });
  var isLandscape = reactResponsive.exports.useMediaQuery({
    orientation: 'landscape'
  });
  useLayoutEffect(function () {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  if (isClient) {
    if (portrait && isPortrait) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, children);
    } else if (landscape && isLandscape) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, children);
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null);
    }
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }
}

function getAspect() {
  var _window = window,
      width = _window.innerWidth,
      height = _window.innerHeight;
  return width / height;
}

function aspectRatio() {
  var _useState3 = useState(getAspect()),
      _useState4 = _slicedToArray(_useState3, 2),
      aspect = _useState4[0],
      setAspect = _useState4[1];

  useEffect(function () {
    function handleResize() {
      setAspect(getAspect());
    }

    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return aspect;
}
function isLandscape() {
  var _useState5 = useState(getAspect()),
      _useState6 = _slicedToArray(_useState5, 2),
      aspect = _useState6[0],
      setAspect = _useState6[1];

  useEffect(function () {
    function handleResize() {
      setAspect(getAspect());
    }

    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return aspect > 1;
}
function isPortrait() {
  var _useState7 = useState(getAspect()),
      _useState8 = _slicedToArray(_useState7, 2),
      aspect = _useState8[0],
      setAspect = _useState8[1];

  useEffect(function () {
    function handleResize() {
      setAspect(getAspect());
    }

    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return aspect < 1;
}

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,900;1,300;1,400;1,600;1,900&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,900;1,300;1,400;1,600;1,900&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap\");\n.Text-module_italic__KUgPz {\n  font-style: italic;\n}\n\n.Text-module_weight-normal__BgaJq {\n  font-weight: normal;\n}\n\n.Text-module_weight-bold__L7Oqm {\n  font-weight: bold;\n}\n\n.Text-module_weight-light__Irwgb {\n  font-weight: lighter;\n}\n\n.Text-module_color-base-1__2jREh {\n  color: #FFFFFF;\n}\n\n.Text-module_color-base-2__vOm2u {\n  color: #F2F2F7;\n}\n\n.Text-module_color-base-3__PUFZ- {\n  color: #D1D1D6;\n}\n\n.Text-module_color-accent-1__TTGe5 {\n  color: #007AFF;\n}\n\n.Text-module_color-accent-2__2IkPS {\n  color: #55BEF0;\n}\n\n.Text-module_color-accent-3__qxhSk {\n  color: #59ADC4;\n}\n\n.Text-module_color-neutral-1__MqW00 {\n  color: #000000;\n}\n\n.Text-module_color-neutral-2__Uc-VK {\n  color: #1C1C1E;\n}\n\n.Text-module_color-neutral-3__suLIE {\n  color: #48484A;\n}\n\n.Text-module_alignment-left__Rur-S {\n  text-align: left;\n}\n\n.Text-module_alignment-right__51MYm {\n  text-align: right;\n}\n\n.Text-module_alignment-center__iBCjQ {\n  text-align: center;\n}\n\n.Text-module_alignment-justify__ql8Y3 {\n  text-align: justify;\n}\n\n.Text-module_padding-all-none__OWpWN {\n  padding: 0;\n}\n\n.Text-module_padding-all-small__nH42o {\n  padding: 0.5rem;\n}\n\n.Text-module_padding-all-medium__CXxMA {\n  padding: 1rem;\n}\n\n.Text-module_padding-all-large__T3Sw6 {\n  padding: 1.5rem;\n}\n\n.Text-module_padding-top-none__VG01g {\n  padding-top: 0;\n}\n\n.Text-module_padding-top-small__nbL5O {\n  padding-top: 0.5rem;\n}\n\n.Text-module_padding-top-medium__0QvlI {\n  padding-top: 1rem;\n}\n\n.Text-module_padding-top-large__V-QYz {\n  padding-top: 1.5rem;\n}\n\n.Text-module_padding-left-none__US9pL {\n  padding-left: 0;\n}\n\n.Text-module_padding-left-small__ffmve {\n  padding-left: 0.5rem;\n}\n\n.Text-module_padding-left-medium__om3kk {\n  padding-left: 1rem;\n}\n\n.Text-module_padding-left-large__B1HE7 {\n  padding-left: 1.5rem;\n}\n\n.Text-module_padding-bottom-none__4jEQQ {\n  padding-bottom: 0;\n}\n\n.Text-module_padding-bottom-small__TDKaN {\n  padding-bottom: 0.5rem;\n}\n\n.Text-module_padding-bottom-medium__TMhcQ {\n  padding-bottom: 1rem;\n}\n\n.Text-module_padding-bottom-large__lfbKs {\n  padding-bottom: 1.5rem;\n}\n\n.Text-module_padding-right-none__2-jdm {\n  padding-right: 0;\n}\n\n.Text-module_padding-right-small__FodmX {\n  padding-right: 0.5rem;\n}\n\n.Text-module_padding-right-medium__dudm- {\n  padding-right: 1rem;\n}\n\n.Text-module_padding-right-large__d4Aow {\n  padding-right: 1.5rem;\n}\n\n.Text-module_margin-all-none__EX3CP {\n  margin: 0;\n}\n\n.Text-module_margin-all-small__IWtm7 {\n  margin: 0.4rem;\n}\n\n.Text-module_margin-all-medium__1Sntb {\n  margin: 0.8rem;\n}\n\n.Text-module_margin-all-large__zM2hi {\n  margin: 1rem;\n}\n\n.Text-module_margin-top-none__yolTy {\n  margin-top: 0;\n}\n\n.Text-module_margin-top-small__MmDZ9 {\n  margin-top: 0.4rem;\n}\n\n.Text-module_margin-top-medium__c6i2s {\n  margin-top: 0.8rem;\n}\n\n.Text-module_margin-top-large__2rwPx {\n  margin-top: 1rem;\n}\n\n.Text-module_margin-left-none__a83Jm {\n  margin-left: 0;\n}\n\n.Text-module_margin-left-small__E-hqQ {\n  margin-left: 0.4rem;\n}\n\n.Text-module_margin-left-medium__keNVm {\n  margin-left: 0.8rem;\n}\n\n.Text-module_margin-left-large__lhTZ2 {\n  margin-left: 1rem;\n}\n\n.Text-module_margin-bottom-none__ABl7B {\n  margin-bottom: 0;\n}\n\n.Text-module_margin-bottom-small__JELwf {\n  margin-bottom: 0.4rem;\n}\n\n.Text-module_margin-bottom-medium__J3Jml {\n  margin-bottom: 0.8rem;\n}\n\n.Text-module_margin-bottom-large__vf3q- {\n  margin-bottom: 1rem;\n}\n\n.Text-module_margin-right-none__JUNt8 {\n  margin-right: 0;\n}\n\n.Text-module_margin-right-small__oqfEN {\n  margin-right: 0.4rem;\n}\n\n.Text-module_margin-right-medium__V-JTj {\n  margin-right: 0.8rem;\n}\n\n.Text-module_margin-right-large__ijg4i {\n  margin-right: 1rem;\n}";
var styles = {"italic":"Text-module_italic__KUgPz","weight-normal":"Text-module_weight-normal__BgaJq","weight-bold":"Text-module_weight-bold__L7Oqm","weight-light":"Text-module_weight-light__Irwgb","color-base-1":"Text-module_color-base-1__2jREh","color-base-2":"Text-module_color-base-2__vOm2u","color-base-3":"Text-module_color-base-3__PUFZ-","color-accent-1":"Text-module_color-accent-1__TTGe5","color-accent-2":"Text-module_color-accent-2__2IkPS","color-accent-3":"Text-module_color-accent-3__qxhSk","color-neutral-1":"Text-module_color-neutral-1__MqW00","color-neutral-2":"Text-module_color-neutral-2__Uc-VK","color-neutral-3":"Text-module_color-neutral-3__suLIE","alignment-left":"Text-module_alignment-left__Rur-S","alignment-right":"Text-module_alignment-right__51MYm","alignment-center":"Text-module_alignment-center__iBCjQ","alignment-justify":"Text-module_alignment-justify__ql8Y3","padding-all-none":"Text-module_padding-all-none__OWpWN","padding-all-small":"Text-module_padding-all-small__nH42o","padding-all-medium":"Text-module_padding-all-medium__CXxMA","padding-all-large":"Text-module_padding-all-large__T3Sw6","padding-top-none":"Text-module_padding-top-none__VG01g","padding-top-small":"Text-module_padding-top-small__nbL5O","padding-top-medium":"Text-module_padding-top-medium__0QvlI","padding-top-large":"Text-module_padding-top-large__V-QYz","padding-left-none":"Text-module_padding-left-none__US9pL","padding-left-small":"Text-module_padding-left-small__ffmve","padding-left-medium":"Text-module_padding-left-medium__om3kk","padding-left-large":"Text-module_padding-left-large__B1HE7","padding-bottom-none":"Text-module_padding-bottom-none__4jEQQ","padding-bottom-small":"Text-module_padding-bottom-small__TDKaN","padding-bottom-medium":"Text-module_padding-bottom-medium__TMhcQ","padding-bottom-large":"Text-module_padding-bottom-large__lfbKs","padding-right-none":"Text-module_padding-right-none__2-jdm","padding-right-small":"Text-module_padding-right-small__FodmX","padding-right-medium":"Text-module_padding-right-medium__dudm-","padding-right-large":"Text-module_padding-right-large__d4Aow","margin-all-none":"Text-module_margin-all-none__EX3CP","margin-all-small":"Text-module_margin-all-small__IWtm7","margin-all-medium":"Text-module_margin-all-medium__1Sntb","margin-all-large":"Text-module_margin-all-large__zM2hi","margin-top-none":"Text-module_margin-top-none__yolTy","margin-top-small":"Text-module_margin-top-small__MmDZ9","margin-top-medium":"Text-module_margin-top-medium__c6i2s","margin-top-large":"Text-module_margin-top-large__2rwPx","margin-left-none":"Text-module_margin-left-none__a83Jm","margin-left-small":"Text-module_margin-left-small__E-hqQ","margin-left-medium":"Text-module_margin-left-medium__keNVm","margin-left-large":"Text-module_margin-left-large__lhTZ2","margin-bottom-none":"Text-module_margin-bottom-none__ABl7B","margin-bottom-small":"Text-module_margin-bottom-small__JELwf","margin-bottom-medium":"Text-module_margin-bottom-medium__J3Jml","margin-bottom-large":"Text-module_margin-bottom-large__vf3q-","margin-right-none":"Text-module_margin-right-none__JUNt8","margin-right-small":"Text-module_margin-right-small__oqfEN","margin-right-medium":"Text-module_margin-right-medium__V-JTj","margin-right-large":"Text-module_margin-right-large__ijg4i"};
styleInject(css_248z);

var _excluded = ["id", "classes", "style", "alignment", "color", "size", "margin", "padding", "weight", "italic", "href", "children"];

var getClassesFromString = function getClassesFromString(property, string) {
  var classes = '';
  var array = string.split(' ');

  for (var i = 0; i < array.length; i += 2) {
    var x = array[i];
    var y = array[i + 1];
    classes += styles[property + '-' + x + '-' + y];

    if (i != array.length - 1) {
      classes += ' ';
    }
  }

  return classes;
};

function Text(_ref) {
  var id = _ref.id,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? '' : _ref$classes,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$alignment = _ref.alignment,
      alignment = _ref$alignment === void 0 ? 'center' : _ref$alignment,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'h1' : _ref$size,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? 'all none' : _ref$margin,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 'all none' : _ref$padding,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'auto' : _ref$weight,
      _ref$italic = _ref.italic,
      italic = _ref$italic === void 0 ? false : _ref$italic,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '' : _ref$href,
      children = _ref.children,
      extras = _objectWithoutProperties(_ref, _excluded);

  var getClasses = function getClasses() {
    var paddingClasses = getClassesFromString('padding', padding);
    var marginClasses = getClassesFromString('margin', margin);
    return (italic ? styles['italic'] + ' ' : '') + styles['alignment-' + alignment] + ' ' + paddingClasses + ' ' + marginClasses + ' ' + styles['weight-' + weight] + ' ' + (color !== '' ? ' ' + styles['color-' + color] : '');
  };

  var getChildren = function getChildren() {
    if (href != '') {
      return /*#__PURE__*/React.createElement("a", {
        href: href
      }, children);
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, children);
    }
  };

  return size == 'h1' ? /*#__PURE__*/React.createElement("h1", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2({}, style)
  }, extras), getChildren()) : size == 'h2' ? /*#__PURE__*/React.createElement("h2", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2({}, style)
  }, extras), getChildren()) : size == 'h3' ? /*#__PURE__*/React.createElement("h3", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2({}, style)
  }, extras), getChildren()) : size == 'h4' ? /*#__PURE__*/React.createElement("h4", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2({}, style)
  }, extras), getChildren()) : size == 'h5' ? /*#__PURE__*/React.createElement("h5", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2({}, style)
  }, extras), getChildren()) : size == 'h6' ? /*#__PURE__*/React.createElement("h6", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2({}, style)
  }, extras), getChildren()) : size == 'p' ? /*#__PURE__*/React.createElement("p", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2({}, style)
  }, extras), getChildren()) : /*#__PURE__*/React.createElement("div", null);
}

export { Button, Container, Dropdown, Header, List, Option, Responsive, Text, aspectRatio, isLandscape, isPortrait };
//# sourceMappingURL=index.js.map
