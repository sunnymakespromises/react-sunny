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

var css_248z$1 = ".wK23-E {\n  display: flex;\n  flex-direction: column;\n  cursor: default;\n  pointer-events: initial;\n}\n\n._-9-Yj5 {\n  display: flex;\n  flex-direction: row;\n  cursor: default;\n  pointer-events: initial;\n}\n\n.JVOsVu {\n  justify-content: center;\n  align-items: center;\n}\n\n.kkCXFx {\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.rigoW1 {\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.Yaoxq- {\n  justify-content: center;\n  align-items: space-around;\n}\n\n.Kb8687 {\n  justify-content: center;\n  align-items: space-between;\n}\n\n.ytCb4n {\n  justify-content: center;\n  align-items: first baseline;\n}\n\n.yGb7zY {\n  justify-content: center;\n  align-items: stretch;\n}\n\n.oBjMip {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.guBJdP {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.qi8CXu {\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n\n.B-yI6c {\n  justify-content: flex-start;\n  align-items: space-around;\n}\n\n.-xpbIv {\n  justify-content: flex-start;\n  align-items: space-between;\n}\n\n.OS1D-l {\n  justify-content: flex-start;\n  align-items: first baseline;\n}\n\n.JMroyX {\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n.Ji8EX1 {\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.sKIrDk {\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n\n.ZOBXjo {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.F6zDWW {\n  justify-content: flex-end;\n  align-items: space-around;\n}\n\n._8qZado {\n  justify-content: flex-end;\n  align-items: space-between;\n}\n\n.CFzx5p {\n  justify-content: flex-end;\n  align-items: first baseline;\n}\n\n._2ohi32 {\n  justify-content: flex-end;\n  align-items: stretch;\n}\n\n.Q3FJls {\n  justify-content: space-around;\n  align-items: center;\n}\n\n.U9MCmJ {\n  justify-content: space-around;\n  align-items: flex-start;\n}\n\n.GG82Kd {\n  justify-content: space-around;\n  align-items: flex-end;\n}\n\n.Ynr8YU {\n  justify-content: space-around;\n  align-items: space-around;\n}\n\n._68NreT {\n  justify-content: space-around;\n  align-items: space-between;\n}\n\n._0RPEd- {\n  justify-content: space-around;\n  align-items: first baseline;\n}\n\n.q4hAAt {\n  justify-content: space-around;\n  align-items: stretch;\n}\n\n.RDeHJ- {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.wZZvye {\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.K3MwWx {\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.SmYm-D {\n  justify-content: space-between;\n  align-items: space-around;\n}\n\n.D-nyMy {\n  justify-content: space-between;\n  align-items: space-between;\n}\n\n.hA7dup {\n  justify-content: space-between;\n  align-items: first baseline;\n}\n\n.N9ywZE {\n  justify-content: space-between;\n  align-items: stretch;\n}\n\n.QZgDeR {\n  justify-content: first baseline;\n  align-items: center;\n}\n\n.oEIXLT {\n  justify-content: first baseline;\n  align-items: flex-start;\n}\n\n.ydozdO {\n  justify-content: first baseline;\n  align-items: flex-end;\n}\n\n.To70Vr {\n  justify-content: first baseline;\n  align-items: space-around;\n}\n\n.HjWX1- {\n  justify-content: first baseline;\n  align-items: space-between;\n}\n\n.RLY3-R {\n  justify-content: first baseline;\n  align-items: first baseline;\n}\n\n.nmX41U {\n  justify-content: first baseline;\n  align-items: stretch;\n}\n\n.NKxOaN {\n  justify-content: stretch;\n  align-items: center;\n}\n\n._0R3Tdt {\n  justify-content: stretch;\n  align-items: flex-start;\n}\n\n.QyimLf {\n  justify-content: stretch;\n  align-items: flex-end;\n}\n\n.EDBb-Z {\n  justify-content: stretch;\n  align-items: space-around;\n}\n\n.VUQdTB {\n  justify-content: stretch;\n  align-items: space-between;\n}\n\n._4WytG- {\n  justify-content: stretch;\n  align-items: first baseline;\n}\n\n.zIcBpV {\n  justify-content: stretch;\n  align-items: stretch;\n}\n\n.b92nbg {\n  position: relative;\n}\n\n.dUe7jL {\n  position: absolute;\n}\n\n.a6jqJu {\n  position: fixed;\n}\n\n.oLUgQu {\n  top: 0;\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n._0WX3w6 {\n  width: 100%;\n}\n\n.BkRz-N {\n  height: 100%;\n}\n\n.p-B4GE {\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n}\n\n.f-OnHJ {\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n}\n\n.cI5SF9 {\n  width: auto;\n  height: auto;\n}\n\n.frXUzP {\n  width: initial;\n  height: initial;\n}\n\n.j35VJM {\n  padding: 0;\n}\n\n._6N3CyI {\n  padding: 0.25rem;\n}\n\n.pjngfO {\n  padding: 0.5rem;\n}\n\n.iv7YFV {\n  padding: 1rem;\n}\n\n.IPVp1z {\n  padding: 1.5rem;\n}\n\n.iZOasQ {\n  padding: 2rem;\n}\n\n.z3Ird8 {\n  padding-top: 0;\n}\n\n.RoOPSq {\n  padding-top: 0.25rem;\n}\n\n._0vKWCu {\n  padding-top: 0.5rem;\n}\n\n.eiosQ9 {\n  padding-top: 1rem;\n}\n\n.XyuA3U {\n  padding-top: 1.5rem;\n}\n\n.alHTHR {\n  padding-top: 2rem;\n}\n\n.WMk9ZJ {\n  padding-left: 0;\n}\n\n.xmdg1z {\n  padding-left: 0.25rem;\n}\n\n.rw1IzZ {\n  padding-left: 0.5rem;\n}\n\n._5Ay-uS {\n  padding-left: 1rem;\n}\n\n.zSzGOb {\n  padding-left: 1.5rem;\n}\n\n.NOD7cA {\n  padding-left: 2rem;\n}\n\n.yvOluM {\n  padding-bottom: 0;\n}\n\n.iHWbWJ {\n  padding-bottom: 0.25rem;\n}\n\n.UXfxM5 {\n  padding-bottom: 0.5rem;\n}\n\n.t-TneE {\n  padding-bottom: 1rem;\n}\n\n.Xhrlwr {\n  padding-bottom: 1.5rem;\n}\n\n.JTvyXv {\n  padding-bottom: 2rem;\n}\n\n._63-TA- {\n  padding-right: 0;\n}\n\n.IP4Yfp {\n  padding-right: 0.25rem;\n}\n\n.MwzxXj {\n  padding-right: 0.5rem;\n}\n\n.vQfsyW {\n  padding-right: 1rem;\n}\n\n.P-j-ux {\n  padding-right: 1.5rem;\n}\n\n.n-TNnz {\n  padding-right: 2rem;\n}\n\n.ERim67 {\n  margin: 0;\n}\n\n.KERUhi {\n  margin: 0.25rem;\n}\n\n.EwqtOC {\n  margin: 0.5rem;\n}\n\n.yximzo {\n  margin: 1rem;\n}\n\n.wlilZ3 {\n  margin: 1.5rem;\n}\n\n.GWnWvC {\n  margin: 2rem;\n}\n\n._3jdp75 {\n  margin-top: 0;\n}\n\n.VW22Kv {\n  margin-top: 0.25rem;\n}\n\n.wVwjb3 {\n  margin-top: 0.5rem;\n}\n\n.hjC4AQ {\n  margin-top: 1rem;\n}\n\n.vARmsw {\n  margin-top: 1.5rem;\n}\n\n._5lAROs {\n  margin-top: 2rem;\n}\n\n.H1vksJ {\n  margin-left: 0;\n}\n\n.Ay4VhN {\n  margin-left: 0.25rem;\n}\n\n.n2s-yc {\n  margin-left: 0.5rem;\n}\n\n.moKUTa {\n  margin-left: 1rem;\n}\n\n.ta6Cyw {\n  margin-left: 1.5rem;\n}\n\n.fDWZVq {\n  margin-left: 2rem;\n}\n\n._9cPwE7 {\n  margin-bottom: 0;\n}\n\n.WLeS0A {\n  margin-bottom: 0.25rem;\n}\n\n._6Iba-- {\n  margin-bottom: 0.5rem;\n}\n\n.a68ExA {\n  margin-bottom: 1rem;\n}\n\n.BIL8Th {\n  margin-bottom: 1.5rem;\n}\n\n.EzjFfS {\n  margin-bottom: 2rem;\n}\n\n._8pZ8-T {\n  margin-right: 0;\n}\n\n.HEYmiL {\n  margin-right: 0.25rem;\n}\n\n.-Bor7t {\n  margin-right: 0.5rem;\n}\n\n.Md8l9X {\n  margin-right: 1rem;\n}\n\n.KvI5pm {\n  margin-right: 1.5rem;\n}\n\n.afaSsp {\n  margin-right: 2rem;\n}\n\n@media (prefers-color-scheme: dark) {\n  .L12lRQ {\n    background-color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .L12lRQ {\n    background-color: white;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._6s-W0A {\n    background-color: #1c1c1e;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._6s-W0A {\n    background-color: #f2f2f7;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .PN21mR {\n    background-color: #48484a;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .PN21mR {\n    background-color: #d1d1d6;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .Lzi4uJ {\n    background-color: #007aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .Lzi4uJ {\n    background-color: #007aff;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._0uoWxM {\n    background-color: #55bef0;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._0uoWxM {\n    background-color: #55bef0;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .y26s1W {\n    background-color: #59adc4;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .y26s1W {\n    background-color: #59adc4;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .-jwzMP {\n    background-color: white;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .-jwzMP {\n    background-color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._5-S3sa {\n    background-color: #f2f2f7;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._5-S3sa {\n    background-color: #1c1c1e;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .uBwTfw {\n    background-color: #d1d1d6;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .uBwTfw {\n    background-color: #48484a;\n  }\n}\n\n.arBVGH {\n  cursor: pointer;\n  pointer-events: auto;\n}";
var style$1 = {"direction-column":"wK23-E","direction-row":"_-9-Yj5","alignment-center-center":"JVOsVu","alignment-center-start":"kkCXFx","alignment-center-end":"rigoW1","alignment-center-around":"Yaoxq-","alignment-center-between":"Kb8687","alignment-center-baseline":"ytCb4n","alignment-center-stretch":"yGb7zY","alignment-start-center":"oBjMip","alignment-start-start":"guBJdP","alignment-start-end":"qi8CXu","alignment-start-around":"B-yI6c","alignment-start-between":"-xpbIv","alignment-start-baseline":"OS1D-l","alignment-start-stretch":"JMroyX","alignment-end-center":"Ji8EX1","alignment-end-start":"sKIrDk","alignment-end-end":"ZOBXjo","alignment-end-around":"F6zDWW","alignment-end-between":"_8qZado","alignment-end-baseline":"CFzx5p","alignment-end-stretch":"_2ohi32","alignment-around-center":"Q3FJls","alignment-around-start":"U9MCmJ","alignment-around-end":"GG82Kd","alignment-around-around":"Ynr8YU","alignment-around-between":"_68NreT","alignment-around-baseline":"_0RPEd-","alignment-around-stretch":"q4hAAt","alignment-between-center":"RDeHJ-","alignment-between-start":"wZZvye","alignment-between-end":"K3MwWx","alignment-between-around":"SmYm-D","alignment-between-between":"D-nyMy","alignment-between-baseline":"hA7dup","alignment-between-stretch":"N9ywZE","alignment-baseline-center":"QZgDeR","alignment-baseline-start":"oEIXLT","alignment-baseline-end":"ydozdO","alignment-baseline-around":"To70Vr","alignment-baseline-between":"HjWX1-","alignment-baseline-baseline":"RLY3-R","alignment-baseline-stretch":"nmX41U","alignment-stretch-center":"NKxOaN","alignment-stretch-start":"_0R3Tdt","alignment-stretch-end":"QyimLf","alignment-stretch-around":"EDBb-Z","alignment-stretch-between":"VUQdTB","alignment-stretch-baseline":"_4WytG-","alignment-stretch-stretch":"zIcBpV","position-relative":"b92nbg","position-absolute":"dUe7jL","position-fixed":"a6jqJu","position-sticky":"oLUgQu","fill-width":"_0WX3w6","fill-height":"BkRz-N","fill-parent":"p-B4GE","fill-screen":"f-OnHJ","fill-auto":"cI5SF9","fill-none":"frXUzP","padding-all-none":"j35VJM","padding-all-x-small":"_6N3CyI","padding-all-small":"pjngfO","padding-all-medium":"iv7YFV","padding-all-large":"IPVp1z","padding-all-x-large":"iZOasQ","padding-top-none":"z3Ird8","padding-top-x-small":"RoOPSq","padding-top-small":"_0vKWCu","padding-top-medium":"eiosQ9","padding-top-large":"XyuA3U","padding-top-x-large":"alHTHR","padding-left-none":"WMk9ZJ","padding-left-x-small":"xmdg1z","padding-left-small":"rw1IzZ","padding-left-medium":"_5Ay-uS","padding-left-large":"zSzGOb","padding-left-x-large":"NOD7cA","padding-bottom-none":"yvOluM","padding-bottom-x-small":"iHWbWJ","padding-bottom-small":"UXfxM5","padding-bottom-medium":"t-TneE","padding-bottom-large":"Xhrlwr","padding-bottom-x-large":"JTvyXv","padding-right-none":"_63-TA-","padding-right-x-small":"IP4Yfp","padding-right-small":"MwzxXj","padding-right-medium":"vQfsyW","padding-right-large":"P-j-ux","padding-right-x-large":"n-TNnz","margin-all-none":"ERim67","margin-all-x-small":"KERUhi","margin-all-small":"EwqtOC","margin-all-medium":"yximzo","margin-all-large":"wlilZ3","margin-all-x-large":"GWnWvC","margin-top-none":"_3jdp75","margin-top-x-small":"VW22Kv","margin-top-small":"wVwjb3","margin-top-medium":"hjC4AQ","margin-top-large":"vARmsw","margin-top-x-large":"_5lAROs","margin-left-none":"H1vksJ","margin-left-x-small":"Ay4VhN","margin-left-small":"n2s-yc","margin-left-medium":"moKUTa","margin-left-large":"ta6Cyw","margin-left-x-large":"fDWZVq","margin-bottom-none":"_9cPwE7","margin-bottom-x-small":"WLeS0A","margin-bottom-small":"_6Iba--","margin-bottom-medium":"a68ExA","margin-bottom-large":"BIL8Th","margin-bottom-x-large":"EzjFfS","margin-right-none":"_8pZ8-T","margin-right-x-small":"HEYmiL","margin-right-small":"-Bor7t","margin-right-medium":"Md8l9X","margin-right-large":"KvI5pm","margin-right-x-large":"afaSsp","color-base-1":"L12lRQ","color-base-2":"_6s-W0A","color-base-3":"PN21mR","color-accent-1":"Lzi4uJ","color-accent-2":"_0uoWxM","color-accent-3":"y26s1W","color-neutral-1":"-jwzMP","color-neutral-2":"_5-S3sa","color-neutral-3":"uBwTfw","can-click":"arBVGH"};
styleInject(css_248z$1);

var _excluded$2 = ["id", "classes", "styles", "width", "height", "direction", "alignment", "position", "fill", "padding", "margin", "color", "canClick", "children"];

var getClassesFromString$1 = function getClassesFromString(property, string) {
  var classes = '';
  var array = string.split(' ');

  for (var i = 0; i < array.length; i += 2) {
    var x = array[i];
    var y = array[i + 1];
    var calculatedStyle = style$1[property + '-' + x + '-' + y];

    if (calculatedStyle != undefined) {
      classes += calculatedStyle;
    }

    if (i != array.length - 1) {
      classes += ' ';
    }
  }

  return classes;
};

var getStylesFromString$1 = function getStylesFromString(property, string) {
  var accepted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var styles = {};
  var array = string.split(' ');

  for (var i = 0; i < array.length; i += 2) {
    var x = array[i];
    var y = array[i + 1];

    if (!accepted.includes(y)) {
      var propertyName = property + x.charAt(0).toUpperCase() + x.slice(1);
      styles[propertyName] = y;
    }
  }

  return styles;
};

var Container = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? '' : _ref$id,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? '' : _ref$classes,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
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
    return style$1['direction-' + direction] + ' ' + alignmentClasses + ' ' + style$1['position-' + position] + ' ' + style$1['fill-' + fill] + ' ' + paddingClasses + ' ' + marginClasses + (color !== '' && !color.includes('#') ? ' ' + style$1['color-' + color] : '') + (canClick ? ' ' + style$1['can-click'] : '');
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

  var getPadding = function getPadding() {
    return getStylesFromString$1('padding', padding, ['small', 'medium', 'large', 'none']);
  };

  var getMargin = function getMargin() {
    return getStylesFromString$1('margin', margin, ['small', 'medium', 'large', 'none']);
  };

  var getWidth = function getWidth() {
    if (width !== null) {
      return {
        width: width
      };
    } else {
      return {};
    }
  };

  var getHeight = function getHeight() {
    if (height !== null) {
      return {
        height: height
      };
    } else {
      return {};
    }
  };

  return /*#__PURE__*/React.createElement("div", _extends({
    id: id != '' ? id : null,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, styles), getColor()), getPadding()), getMargin()), getWidth()), getHeight()),
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
    _excluded6 = ["behavior", "trigger", "onToggle", "onSelect", "closeOnSelect", "closeOnOutsideClick", "children", "container"];
var Wrapper = /*#__PURE__*/forwardRef(function (_ref, wrapperRef) {
  var children = _ref.children,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? false : _ref$container,
      extras = _objectWithoutProperties(_ref, _excluded$1);

  var _useDropdownContext = useDropdownContext(),
      expanding = _useDropdownContext.expanding;

  var _expanding = _slicedToArray(expanding, 4),
      behavior = _expanding[3];

  if (behavior == 'hover') {
    if (Object.keys(extras).length != 0 || container) {
      return /*#__PURE__*/React.createElement(Activator, null, /*#__PURE__*/React.createElement(Container, _extends({}, extras, {
        ref: wrapperRef
      }), children));
    } else {
      return /*#__PURE__*/React.createElement(Activator, null, /*#__PURE__*/React.cloneElement(children, {
        ref: wrapperRef
      }));
    }
  }

  if (Object.keys(extras).length != 0 || container) {
    return /*#__PURE__*/React.createElement(Container, _extends({}, extras, {
      ref: wrapperRef
    }), children);
  } else {
    return /*#__PURE__*/React.cloneElement(children, {
      ref: wrapperRef
    });
  }
});
function Header(_ref2) {
  var children = _ref2.children,
      _ref2$container = _ref2.container,
      container = _ref2$container === void 0 ? false : _ref2$container,
      extras = _objectWithoutProperties(_ref2, _excluded2);

  var _useDropdownContext2 = useDropdownContext(),
      expanding = _useDropdownContext2.expanding;

  var _expanding2 = _slicedToArray(expanding, 5),
      behavior = _expanding2[3],
      trigger = _expanding2[4];

  if (trigger == 'header' && behavior != 'hover') {
    if (Object.keys(extras).length != 0 || container) {
      return /*#__PURE__*/React.createElement(Activator, null, /*#__PURE__*/React.createElement(Container, extras, children));
    } else {
      return /*#__PURE__*/React.createElement(Activator, null, children);
    }
  } else {
    if (Object.keys(extras).length != 0 || container) {
      return /*#__PURE__*/React.createElement(Container, extras, children);
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, children);
    }
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

  var _useDropdownContext3 = useDropdownContext(),
      selecting = _useDropdownContext3.selecting;

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

  var _useDropdownContext4 = useDropdownContext(),
      expanding = _useDropdownContext4.expanding;

  var _expanding3 = _slicedToArray(expanding, 5),
      behavior = _expanding3[3],
      trigger = _expanding3[4];

  if (trigger == 'header' && behavior != 'hover') {
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

  var _useDropdownContext5 = useDropdownContext(),
      expanding = _useDropdownContext5.expanding;

  var _expanding4 = _slicedToArray(expanding, 4),
      toggle = _expanding4[0],
      open = _expanding4[1],
      close = _expanding4[2],
      behavior = _expanding4[3];

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
      _ref7$closeOnSelect = _ref7.closeOnSelect,
      closeOnSelect = _ref7$closeOnSelect === void 0 ? true : _ref7$closeOnSelect,
      _ref7$closeOnOutsideC = _ref7.closeOnOutsideClick,
      closeOnOutsideClick = _ref7$closeOnOutsideC === void 0 ? true : _ref7$closeOnOutsideC,
      children = _ref7.children,
      _ref7$container = _ref7.container,
      container = _ref7$container === void 0 ? false : _ref7$container,
      extras = _objectWithoutProperties(_ref7, _excluded6);

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
    if (closeOnOutsideClick) {
      var handleClickOutside = function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          close();
        }
      };

      window.addEventListener('click', handleClickOutside, true);
      return function () {
        window.removeEventListener('click', handleClickOutside, true);
      };
    }
  }, [closeOnOutsideClick]);

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

    if (closeOnSelect) {
      close();
    }
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
    container: container
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

var css_248z = ".KUgPzN {\n  font-style: italic;\n}\n\n.sEO-mW {\n  text-decoration: underline;\n}\n\n.BgaJqP {\n  font-weight: normal;\n}\n\n.L7OqmH {\n  font-weight: bold;\n}\n\n.Irwgbn {\n  font-weight: lighter;\n}\n\n@media (prefers-color-scheme: dark) {\n  ._2jREhU {\n    color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._2jREhU {\n    color: white;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .vOm2uW {\n    color: #1c1c1e;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .vOm2uW {\n    color: #f2f2f7;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .PUFZ-s {\n    color: #48484a;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .PUFZ-s {\n    color: #d1d1d6;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .TTGe5f {\n    color: #007aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .TTGe5f {\n    color: #007aff;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._2IkPSj {\n    color: #55bef0;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._2IkPSj {\n    color: #55bef0;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .qxhSkq {\n    color: #59adc4;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .qxhSkq {\n    color: #59adc4;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .MqW00G {\n    color: white;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .MqW00G {\n    color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .Uc-VKN {\n    color: #f2f2f7;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .Uc-VKN {\n    color: #1c1c1e;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .suLIE8 {\n    color: #d1d1d6;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .suLIE8 {\n    color: #48484a;\n  }\n}\n\n.Rur-Sy {\n  text-align: left;\n}\n\n._51MYmx {\n  text-align: right;\n}\n\n.iBCjQO {\n  text-align: center;\n}\n\n.ql8Y3I {\n  text-align: justify;\n}\n\n.OWpWNF {\n  padding: 0;\n}\n\n.NhI0Yq {\n  padding: 0.25rem;\n}\n\n.nH42ow {\n  padding: 0.5rem;\n}\n\n.CXxMAT {\n  padding: 1rem;\n}\n\n.T3Sw64 {\n  padding: 1.5rem;\n}\n\n.A-Up3- {\n  padding: 2rem;\n}\n\n.VG01gx {\n  padding-top: 0;\n}\n\n.-nNmt5 {\n  padding-top: 0.25rem;\n}\n\n.nbL5Ov {\n  padding-top: 0.5rem;\n}\n\n._0QvlIC {\n  padding-top: 1rem;\n}\n\n.V-QYzV {\n  padding-top: 1.5rem;\n}\n\n.QpmwZ9 {\n  padding-top: 2rem;\n}\n\n.US9pLF {\n  padding-left: 0;\n}\n\n.KmjaaQ {\n  padding-left: 0.25rem;\n}\n\n.ffmveg {\n  padding-left: 0.5rem;\n}\n\n.om3kk5 {\n  padding-left: 1rem;\n}\n\n.B1HE7T {\n  padding-left: 1.5rem;\n}\n\n.wJSa7p {\n  padding-left: 2rem;\n}\n\n._4jEQQi {\n  padding-bottom: 0;\n}\n\n.jqy-OI {\n  padding-bottom: 0.25rem;\n}\n\n.TDKaNH {\n  padding-bottom: 0.5rem;\n}\n\n.TMhcQG {\n  padding-bottom: 1rem;\n}\n\n.lfbKs7 {\n  padding-bottom: 1.5rem;\n}\n\n.sQAJMy {\n  padding-bottom: 2rem;\n}\n\n._2-jdmD {\n  padding-right: 0;\n}\n\n._6wagfb {\n  padding-right: 0.25rem;\n}\n\n.FodmX4 {\n  padding-right: 0.5rem;\n}\n\n.dudm-x {\n  padding-right: 1rem;\n}\n\n.d4Aow2 {\n  padding-right: 1.5rem;\n}\n\n._6TViBz {\n  padding-right: 2rem;\n}\n\n.EX3CPz {\n  margin: 0;\n}\n\n.WxTR5j {\n  margin: 0.25rem;\n}\n\n.IWtm79 {\n  margin: 0.5rem;\n}\n\n._1Sntb0 {\n  margin: 1rem;\n}\n\n.zM2hiw {\n  margin: 1.5rem;\n}\n\n._2x2cqe {\n  margin: 2rem;\n}\n\n.yolTyY {\n  margin-top: 0;\n}\n\n.OK2LE2 {\n  margin-top: 0.25rem;\n}\n\n.MmDZ9y {\n  margin-top: 0.5rem;\n}\n\n.c6i2s1 {\n  margin-top: 1rem;\n}\n\n._2rwPx4 {\n  margin-top: 1.5rem;\n}\n\n.W6YRad {\n  margin-top: 2rem;\n}\n\n.a83JmX {\n  margin-left: 0;\n}\n\n.QCGgfz {\n  margin-left: 0.25rem;\n}\n\n.E-hqQ8 {\n  margin-left: 0.5rem;\n}\n\n.keNVmG {\n  margin-left: 1rem;\n}\n\n.lhTZ2m {\n  margin-left: 1.5rem;\n}\n\n.tt0MIG {\n  margin-left: 2rem;\n}\n\n.ABl7B4 {\n  margin-bottom: 0;\n}\n\n.-S88Kp {\n  margin-bottom: 0.25rem;\n}\n\n.JELwf8 {\n  margin-bottom: 0.5rem;\n}\n\n.J3Jmle {\n  margin-bottom: 1rem;\n}\n\n.vf3q-r {\n  margin-bottom: 1.5rem;\n}\n\n.wbLVQG {\n  margin-bottom: 2rem;\n}\n\n.JUNt8N {\n  margin-right: 0;\n}\n\n.xqgdQx {\n  margin-right: 0.25rem;\n}\n\n.oqfENQ {\n  margin-right: 0.5rem;\n}\n\n.V-JTjI {\n  margin-right: 1rem;\n}\n\n.ijg4ie {\n  margin-right: 1.5rem;\n}\n\n._3oM90j {\n  margin-right: 2rem;\n}\n\n.trIPjl {\n  cursor: pointer;\n  pointer-events: auto;\n}";
var style = {"italic":"KUgPzN","underline":"sEO-mW","weight-normal":"BgaJqP","weight-bold":"L7OqmH","weight-light":"Irwgbn","color-base-1":"_2jREhU","color-base-2":"vOm2uW","color-base-3":"PUFZ-s","color-accent-1":"TTGe5f","color-accent-2":"_2IkPSj","color-accent-3":"qxhSkq","color-neutral-1":"MqW00G","color-neutral-2":"Uc-VKN","color-neutral-3":"suLIE8","alignment-left":"Rur-Sy","alignment-right":"_51MYmx","alignment-center":"iBCjQO","alignment-justify":"ql8Y3I","padding-all-none":"OWpWNF","padding-all-x-small":"NhI0Yq","padding-all-small":"nH42ow","padding-all-medium":"CXxMAT","padding-all-large":"T3Sw64","padding-all-x-large":"A-Up3-","padding-top-none":"VG01gx","padding-top-x-small":"-nNmt5","padding-top-small":"nbL5Ov","padding-top-medium":"_0QvlIC","padding-top-large":"V-QYzV","padding-top-x-large":"QpmwZ9","padding-left-none":"US9pLF","padding-left-x-small":"KmjaaQ","padding-left-small":"ffmveg","padding-left-medium":"om3kk5","padding-left-large":"B1HE7T","padding-left-x-large":"wJSa7p","padding-bottom-none":"_4jEQQi","padding-bottom-x-small":"jqy-OI","padding-bottom-small":"TDKaNH","padding-bottom-medium":"TMhcQG","padding-bottom-large":"lfbKs7","padding-bottom-x-large":"sQAJMy","padding-right-none":"_2-jdmD","padding-right-x-small":"_6wagfb","padding-right-small":"FodmX4","padding-right-medium":"dudm-x","padding-right-large":"d4Aow2","padding-right-x-large":"_6TViBz","margin-all-none":"EX3CPz","margin-all-x-small":"WxTR5j","margin-all-small":"IWtm79","margin-all-medium":"_1Sntb0","margin-all-large":"zM2hiw","margin-all-x-large":"_2x2cqe","margin-top-none":"yolTyY","margin-top-x-small":"OK2LE2","margin-top-small":"MmDZ9y","margin-top-medium":"c6i2s1","margin-top-large":"_2rwPx4","margin-top-x-large":"W6YRad","margin-left-none":"a83JmX","margin-left-x-small":"QCGgfz","margin-left-small":"E-hqQ8","margin-left-medium":"keNVmG","margin-left-large":"lhTZ2m","margin-left-x-large":"tt0MIG","margin-bottom-none":"ABl7B4","margin-bottom-x-small":"-S88Kp","margin-bottom-small":"JELwf8","margin-bottom-medium":"J3Jmle","margin-bottom-large":"vf3q-r","margin-bottom-x-large":"wbLVQG","margin-right-none":"JUNt8N","margin-right-x-small":"xqgdQx","margin-right-small":"oqfENQ","margin-right-medium":"V-JTjI","margin-right-large":"ijg4ie","margin-right-x-large":"_3oM90j","can-click":"trIPjl"};
styleInject(css_248z);

var _excluded = ["id", "classes", "styles", "alignment", "color", "size", "margin", "padding", "weight", "italic", "underline", "href", "canClick", "children"];

var getClassesFromString = function getClassesFromString(property, string) {
  var classes = '';
  var array = string.split(' ');

  for (var i = 0; i < array.length; i += 2) {
    var x = array[i];
    var y = array[i + 1];
    classes += style[property + '-' + x + '-' + y];

    if (i != array.length - 1) {
      classes += ' ';
    }
  }

  return classes;
};

var getStylesFromString = function getStylesFromString(property, string) {
  var accepted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var styles = {};
  var array = string.split(' ');

  for (var i = 0; i < array.length; i += 2) {
    var x = array[i];
    var y = array[i + 1];

    if (!accepted.includes(y)) {
      var propertyName = property + x.charAt(0).toUpperCase() + x.slice(1);
      styles[propertyName] = y;
    }
  }

  return styles;
};

function Text(_ref) {
  var id = _ref.id,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? '' : _ref$classes,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      _ref$alignment = _ref.alignment,
      alignment = _ref$alignment === void 0 ? 'center' : _ref$alignment,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'neutral-1' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'p' : _ref$size,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? 'all none' : _ref$margin,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 'all none' : _ref$padding,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'auto' : _ref$weight,
      _ref$italic = _ref.italic,
      italic = _ref$italic === void 0 ? false : _ref$italic,
      _ref$underline = _ref.underline,
      underline = _ref$underline === void 0 ? false : _ref$underline,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '' : _ref$href,
      _ref$canClick = _ref.canClick,
      canClick = _ref$canClick === void 0 ? false : _ref$canClick,
      children = _ref.children,
      extras = _objectWithoutProperties(_ref, _excluded);

  var getClasses = function getClasses() {
    var paddingClasses = getClassesFromString('padding', padding);
    var marginClasses = getClassesFromString('margin', margin);
    return (italic ? style['italic'] + ' ' : '') + (underline ? style['underline'] + ' ' : '') + style['alignment-' + alignment] + ' ' + paddingClasses + ' ' + marginClasses + ' ' + style['weight-' + weight] + ' ' + (color !== '' && !color.includes('#') ? ' ' + style['color-' + color] : '') + (canClick ? ' ' + style['can-click'] : '');
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

  var getColor = function getColor() {
    if (color.includes('#')) {
      return {
        color: color
      };
    } else {
      return {};
    }
  };

  var getPadding = function getPadding() {
    return getStylesFromString('padding', padding, ['small', 'medium', 'large', 'none']);
  };

  var getMargin = function getMargin() {
    return getStylesFromString('margin', margin, ['small', 'medium', 'large', 'none']);
  };

  return size == 'h1' ? /*#__PURE__*/React.createElement("h1", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, styles), getColor()), getPadding()), getMargin())
  }, extras), getChildren()) : size == 'h2' ? /*#__PURE__*/React.createElement("h2", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, styles), getColor()), getPadding()), getMargin())
  }, extras), getChildren()) : size == 'h3' ? /*#__PURE__*/React.createElement("h3", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, styles), getColor()), getPadding()), getMargin())
  }, extras), getChildren()) : size == 'h4' ? /*#__PURE__*/React.createElement("h4", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, styles), getColor()), getPadding()), getMargin())
  }, extras), getChildren()) : size == 'h5' ? /*#__PURE__*/React.createElement("h5", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, styles), getColor()), getPadding()), getMargin())
  }, extras), getChildren()) : size == 'h6' ? /*#__PURE__*/React.createElement("h6", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, styles), getColor()), getPadding()), getMargin())
  }, extras), getChildren()) : size == 'p' ? /*#__PURE__*/React.createElement("p", _extends({
    id: id,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, styles), getColor()), getPadding()), getMargin())
  }, extras), getChildren()) : /*#__PURE__*/React.createElement("div", null);
}

export { Button, Container, Dropdown, Header, List, Option, Responsive, Text, aspectRatio, isLandscape, isPortrait };
//# sourceMappingURL=index.js.map
