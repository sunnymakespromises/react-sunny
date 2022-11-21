import React, { forwardRef, useState, useLayoutEffect, useEffect } from 'react';

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

var css_248z$1 = "._wK23-E {\n  display: flex;\n  flex-direction: column;\n  cursor: default;\n  pointer-events: initial;\n}\n\n._-9-Yj5 {\n  display: flex;\n  flex-direction: row;\n  cursor: default;\n  pointer-events: initial;\n}\n\n._JVOsVu {\n  justify-content: center;\n  align-items: center;\n}\n\n._kkCXFx {\n  justify-content: center;\n  align-items: flex-start;\n}\n\n._rigoW1 {\n  justify-content: center;\n  align-items: flex-end;\n}\n\n._Yaoxq- {\n  justify-content: center;\n  align-items: space-around;\n}\n\n._Kb8687 {\n  justify-content: center;\n  align-items: space-between;\n}\n\n._ytCb4n {\n  justify-content: center;\n  align-items: first baseline;\n}\n\n._yGb7zY {\n  justify-content: center;\n  align-items: stretch;\n}\n\n._oBjMip {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n._guBJdP {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n._qi8CXu {\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n\n._B-yI6c {\n  justify-content: flex-start;\n  align-items: space-around;\n}\n\n._-xpbIv {\n  justify-content: flex-start;\n  align-items: space-between;\n}\n\n._OS1D-l {\n  justify-content: flex-start;\n  align-items: first baseline;\n}\n\n._JMroyX {\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n._Ji8EX1 {\n  justify-content: flex-end;\n  align-items: center;\n}\n\n._sKIrDk {\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n\n._ZOBXjo {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n._F6zDWW {\n  justify-content: flex-end;\n  align-items: space-around;\n}\n\n._8qZado {\n  justify-content: flex-end;\n  align-items: space-between;\n}\n\n._CFzx5p {\n  justify-content: flex-end;\n  align-items: first baseline;\n}\n\n._2ohi32 {\n  justify-content: flex-end;\n  align-items: stretch;\n}\n\n._Q3FJls {\n  justify-content: space-around;\n  align-items: center;\n}\n\n._U9MCmJ {\n  justify-content: space-around;\n  align-items: flex-start;\n}\n\n._GG82Kd {\n  justify-content: space-around;\n  align-items: flex-end;\n}\n\n._Ynr8YU {\n  justify-content: space-around;\n  align-items: space-around;\n}\n\n._68NreT {\n  justify-content: space-around;\n  align-items: space-between;\n}\n\n._0RPEd- {\n  justify-content: space-around;\n  align-items: first baseline;\n}\n\n._q4hAAt {\n  justify-content: space-around;\n  align-items: stretch;\n}\n\n._RDeHJ- {\n  justify-content: space-between;\n  align-items: center;\n}\n\n._wZZvye {\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n._K3MwWx {\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n._SmYm-D {\n  justify-content: space-between;\n  align-items: space-around;\n}\n\n._D-nyMy {\n  justify-content: space-between;\n  align-items: space-between;\n}\n\n._hA7dup {\n  justify-content: space-between;\n  align-items: first baseline;\n}\n\n._N9ywZE {\n  justify-content: space-between;\n  align-items: stretch;\n}\n\n._QZgDeR {\n  justify-content: first baseline;\n  align-items: center;\n}\n\n._oEIXLT {\n  justify-content: first baseline;\n  align-items: flex-start;\n}\n\n._ydozdO {\n  justify-content: first baseline;\n  align-items: flex-end;\n}\n\n._To70Vr {\n  justify-content: first baseline;\n  align-items: space-around;\n}\n\n._HjWX1- {\n  justify-content: first baseline;\n  align-items: space-between;\n}\n\n._RLY3-R {\n  justify-content: first baseline;\n  align-items: first baseline;\n}\n\n._nmX41U {\n  justify-content: first baseline;\n  align-items: stretch;\n}\n\n._NKxOaN {\n  justify-content: stretch;\n  align-items: center;\n}\n\n._0R3Tdt {\n  justify-content: stretch;\n  align-items: flex-start;\n}\n\n._QyimLf {\n  justify-content: stretch;\n  align-items: flex-end;\n}\n\n._EDBb-Z {\n  justify-content: stretch;\n  align-items: space-around;\n}\n\n._VUQdTB {\n  justify-content: stretch;\n  align-items: space-between;\n}\n\n._4WytG- {\n  justify-content: stretch;\n  align-items: first baseline;\n}\n\n._zIcBpV {\n  justify-content: stretch;\n  align-items: stretch;\n}\n\n._b92nbg {\n  position: relative;\n}\n\n._dUe7jL {\n  position: absolute;\n}\n\n._a6jqJu {\n  position: fixed;\n}\n\n._oLUgQu {\n  top: 0;\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n._0WX3w6 {\n  width: 100%;\n}\n\n._BkRz-N {\n  height: 100%;\n}\n\n._p-B4GE {\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n}\n\n._f-OnHJ {\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n}\n\n._cI5SF9 {\n  width: auto;\n  height: auto;\n}\n\n._frXUzP {\n  width: initial;\n  height: initial;\n}\n\n._j35VJM {\n  padding: 0;\n}\n\n._6N3CyI {\n  padding: 0.25rem;\n}\n\n._pjngfO {\n  padding: 0.5rem;\n}\n\n._iv7YFV {\n  padding: 1rem;\n}\n\n._IPVp1z {\n  padding: 2rem;\n}\n\n._iZOasQ {\n  padding: 4rem;\n}\n\n._z3Ird8 {\n  padding-top: 0;\n}\n\n._RoOPSq {\n  padding-top: 0.25rem;\n}\n\n._0vKWCu {\n  padding-top: 0.5rem;\n}\n\n._eiosQ9 {\n  padding-top: 1rem;\n}\n\n._XyuA3U {\n  padding-top: 2rem;\n}\n\n._alHTHR {\n  padding-top: 4rem;\n}\n\n._WMk9ZJ {\n  padding-left: 0;\n}\n\n._xmdg1z {\n  padding-left: 0.25rem;\n}\n\n._rw1IzZ {\n  padding-left: 0.5rem;\n}\n\n._5Ay-uS {\n  padding-left: 1rem;\n}\n\n._zSzGOb {\n  padding-left: 2rem;\n}\n\n._NOD7cA {\n  padding-left: 4rem;\n}\n\n._yvOluM {\n  padding-bottom: 0;\n}\n\n._iHWbWJ {\n  padding-bottom: 0.25rem;\n}\n\n._UXfxM5 {\n  padding-bottom: 0.5rem;\n}\n\n._t-TneE {\n  padding-bottom: 1rem;\n}\n\n._Xhrlwr {\n  padding-bottom: 2rem;\n}\n\n._JTvyXv {\n  padding-bottom: 4rem;\n}\n\n._63-TA- {\n  padding-right: 0;\n}\n\n._IP4Yfp {\n  padding-right: 0.25rem;\n}\n\n._MwzxXj {\n  padding-right: 0.5rem;\n}\n\n._vQfsyW {\n  padding-right: 1rem;\n}\n\n._P-j-ux {\n  padding-right: 2rem;\n}\n\n._n-TNnz {\n  padding-right: 4rem;\n}\n\n._ERim67 {\n  margin: 0;\n}\n\n._Or-eJL {\n  margin: 0;\n}\n\n._KERUhi {\n  margin: 0.25rem;\n}\n\n._TMPzXT {\n  margin: -0.25rem;\n}\n\n._EwqtOC {\n  margin: 0.5rem;\n}\n\n._9Z-wsk {\n  margin: -0.5rem;\n}\n\n._yximzo {\n  margin: 1rem;\n}\n\n._fLSxea {\n  margin: -1rem;\n}\n\n._wlilZ3 {\n  margin: 2rem;\n}\n\n._jGDqRC {\n  margin: -2rem;\n}\n\n._GWnWvC {\n  margin: 4rem;\n}\n\n._cLbKqJ {\n  margin: -4rem;\n}\n\n._3jdp75 {\n  margin-top: 0;\n}\n\n._0WRWj5 {\n  margin-top: 0;\n}\n\n._VW22Kv {\n  margin-top: 0.25rem;\n}\n\n._LtHoWc {\n  margin-top: -0.25rem;\n}\n\n._wVwjb3 {\n  margin-top: 0.5rem;\n}\n\n._lGqYFL {\n  margin-top: -0.5rem;\n}\n\n._hjC4AQ {\n  margin-top: 1rem;\n}\n\n._vQ78uS {\n  margin-top: -1rem;\n}\n\n._vARmsw {\n  margin-top: 2rem;\n}\n\n._YechZq {\n  margin-top: -2rem;\n}\n\n._5lAROs {\n  margin-top: 4rem;\n}\n\n._cPyuIj {\n  margin-top: -4rem;\n}\n\n._H1vksJ {\n  margin-left: 0;\n}\n\n._XSEkrl {\n  margin-left: 0;\n}\n\n._Ay4VhN {\n  margin-left: 0.25rem;\n}\n\n._mBOu9r {\n  margin-left: -0.25rem;\n}\n\n._n2s-yc {\n  margin-left: 0.5rem;\n}\n\n._IOPnLC {\n  margin-left: -0.5rem;\n}\n\n._moKUTa {\n  margin-left: 1rem;\n}\n\n._JuMFMY {\n  margin-left: -1rem;\n}\n\n._ta6Cyw {\n  margin-left: 2rem;\n}\n\n._CYCXyF {\n  margin-left: -2rem;\n}\n\n._fDWZVq {\n  margin-left: 4rem;\n}\n\n._lAPdEn {\n  margin-left: -4rem;\n}\n\n._9cPwE7 {\n  margin-bottom: 0;\n}\n\n._GcxiMz {\n  margin-bottom: 0;\n}\n\n._WLeS0A {\n  margin-bottom: 0.25rem;\n}\n\n._LE2Pbf {\n  margin-bottom: -0.25rem;\n}\n\n._6Iba-- {\n  margin-bottom: 0.5rem;\n}\n\n._mB1UY4 {\n  margin-bottom: -0.5rem;\n}\n\n._a68ExA {\n  margin-bottom: 1rem;\n}\n\n._wskTnp {\n  margin-bottom: -1rem;\n}\n\n._BIL8Th {\n  margin-bottom: 2rem;\n}\n\n._Bllmr3 {\n  margin-bottom: -2rem;\n}\n\n._EzjFfS {\n  margin-bottom: 4rem;\n}\n\n._wkKt1B {\n  margin-bottom: -4rem;\n}\n\n._8pZ8-T {\n  margin-right: 0;\n}\n\n._V9oa5v {\n  margin-right: 0;\n}\n\n._HEYmiL {\n  margin-right: 0.25rem;\n}\n\n._9hVn6O {\n  margin-right: -0.25rem;\n}\n\n._-Bor7t {\n  margin-right: 0.5rem;\n}\n\n._-YEuFl {\n  margin-right: -0.5rem;\n}\n\n._Md8l9X {\n  margin-right: 1rem;\n}\n\n._19jgoM {\n  margin-right: -1rem;\n}\n\n._KvI5pm {\n  margin-right: 2rem;\n}\n\n._CgZc6L {\n  margin-right: -2rem;\n}\n\n._afaSsp {\n  margin-right: 4rem;\n}\n\n._OEypNn {\n  margin-right: -4rem;\n}\n\n._9CVPZ7 {\n  column-gap: 0;\n}\n\n._HrOchg {\n  column-gap: 0.25rem;\n}\n\n._AAKjB8 {\n  column-gap: 0.5rem;\n}\n\n._d4Jzag {\n  column-gap: 1rem;\n}\n\n._AetcsS {\n  column-gap: 2rem;\n}\n\n._TF7D3w {\n  column-gap: 4rem;\n}\n\n._X1kmIA {\n  row-gap: 0;\n}\n\n._KCuxFs {\n  row-gap: 0.25rem;\n}\n\n._sfRUkQ {\n  row-gap: 0.5rem;\n}\n\n._ETLdMc {\n  row-gap: 1rem;\n}\n\n._Wl3pUe {\n  row-gap: 2rem;\n}\n\n._SidGsz {\n  row-gap: 4rem;\n}\n\n@media (prefers-color-scheme: dark) {\n  ._L12lRQ {\n    background-color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._L12lRQ {\n    background-color: white;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._6s-W0A {\n    background-color: #1c1c1e;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._6s-W0A {\n    background-color: #f2f2f7;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._PN21mR {\n    background-color: #3a3a3c;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._PN21mR {\n    background-color: #d1d1d6;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._-jwzMP {\n    background-color: white;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._-jwzMP {\n    background-color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._5-S3sa {\n    background-color: #f2f2f7;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._5-S3sa {\n    background-color: #1d1d1f;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._uBwTfw {\n    background-color: #d1d1d6;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._uBwTfw {\n    background-color: #424245;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._Lzi4uJ {\n    background-color: #007aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._Lzi4uJ {\n    background-color: #007aff;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._0uoWxM {\n    background-color: #0059b8;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._0uoWxM {\n    background-color: #0059b8;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._y26s1W {\n    background-color: #70b5ff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._y26s1W {\n    background-color: #70b5ff;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._TZd62R {\n    background-color: #fa3b2f;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._TZd62R {\n    background-color: #fa3b2f;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._EUBECn {\n    background-color: #f92b53;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._EUBECn {\n    background-color: #f92b53;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._yxx2o5 {\n    background-color: #fa6a86;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._yxx2o5 {\n    background-color: #fa6a86;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._rRT5zh {\n    background-color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._rRT5zh {\n    background-color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._bfKH2E {\n    background-color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._bfKH2E {\n    background-color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._CeCLI8 {\n    background-color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._CeCLI8 {\n    background-color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._bxvcmG {\n    background-color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._bxvcmG {\n    background-color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._qLMeKM {\n    background-color: white;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._qLMeKM {\n    background-color: white;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._aggqve {\n    background-color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._aggqve {\n    background-color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._WKE9J9 {\n    background-color: #8e8e93;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._WKE9J9 {\n    background-color: #8e8e93;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._r8czTI {\n    background-color: #636366;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._r8czTI {\n    background-color: #aeaeb2;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._YU6hw7 {\n    background-color: #48484a;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._YU6hw7 {\n    background-color: #c7c7cc;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._8rCk-8 {\n    background-color: #3a3a3c;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._8rCk-8 {\n    background-color: #d1d1d6;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._OsXfc8 {\n    background-color: #2c2c2e;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._OsXfc8 {\n    background-color: #e5e5ea;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._qnnZXb {\n    background-color: #1c1c1e;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._qnnZXb {\n    background-color: #f2f2f7;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._1xC0Nl {\n    background-color: #fa3b2f;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._1xC0Nl {\n    background-color: #fa3b2f;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._R6aex8 {\n    background-color: #ff9500;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._R6aex8 {\n    background-color: #ff9500;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._DWkBNY {\n    background-color: #ffcc02;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._DWkBNY {\n    background-color: #ffcc02;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._J7c-Yd {\n    background-color: #35c759;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._J7c-Yd {\n    background-color: #35c759;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._PuTjSx {\n    background-color: #007aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._PuTjSx {\n    background-color: #007aff;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._7r7ssM {\n    background-color: #5856d5;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._7r7ssM {\n    background-color: #5856d5;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._UCrMXf {\n    background-color: #ff6482;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._UCrMXf {\n    background-color: #ff6482;\n  }\n}\n\n._arBVGH {\n  cursor: pointer;\n  pointer-events: auto;\n}";
var style$1 = {"direction-column":"_wK23-E","direction-row":"_-9-Yj5","alignment-center-center":"_JVOsVu","alignment-center-start":"_kkCXFx","alignment-center-end":"_rigoW1","alignment-center-around":"_Yaoxq-","alignment-center-between":"_Kb8687","alignment-center-baseline":"_ytCb4n","alignment-center-stretch":"_yGb7zY","alignment-start-center":"_oBjMip","alignment-start-start":"_guBJdP","alignment-start-end":"_qi8CXu","alignment-start-around":"_B-yI6c","alignment-start-between":"_-xpbIv","alignment-start-baseline":"_OS1D-l","alignment-start-stretch":"_JMroyX","alignment-end-center":"_Ji8EX1","alignment-end-start":"_sKIrDk","alignment-end-end":"_ZOBXjo","alignment-end-around":"_F6zDWW","alignment-end-between":"_8qZado","alignment-end-baseline":"_CFzx5p","alignment-end-stretch":"_2ohi32","alignment-around-center":"_Q3FJls","alignment-around-start":"_U9MCmJ","alignment-around-end":"_GG82Kd","alignment-around-around":"_Ynr8YU","alignment-around-between":"_68NreT","alignment-around-baseline":"_0RPEd-","alignment-around-stretch":"_q4hAAt","alignment-between-center":"_RDeHJ-","alignment-between-start":"_wZZvye","alignment-between-end":"_K3MwWx","alignment-between-around":"_SmYm-D","alignment-between-between":"_D-nyMy","alignment-between-baseline":"_hA7dup","alignment-between-stretch":"_N9ywZE","alignment-baseline-center":"_QZgDeR","alignment-baseline-start":"_oEIXLT","alignment-baseline-end":"_ydozdO","alignment-baseline-around":"_To70Vr","alignment-baseline-between":"_HjWX1-","alignment-baseline-baseline":"_RLY3-R","alignment-baseline-stretch":"_nmX41U","alignment-stretch-center":"_NKxOaN","alignment-stretch-start":"_0R3Tdt","alignment-stretch-end":"_QyimLf","alignment-stretch-around":"_EDBb-Z","alignment-stretch-between":"_VUQdTB","alignment-stretch-baseline":"_4WytG-","alignment-stretch-stretch":"_zIcBpV","position-relative":"_b92nbg","position-absolute":"_dUe7jL","position-fixed":"_a6jqJu","position-sticky":"_oLUgQu","fill-width":"_0WX3w6","fill-height":"_BkRz-N","fill-parent":"_p-B4GE","fill-screen":"_f-OnHJ","fill-auto":"_cI5SF9","fill-none":"_frXUzP","padding-all-none":"_j35VJM","padding-all-x-small":"_6N3CyI","padding-all-small":"_pjngfO","padding-all-medium":"_iv7YFV","padding-all-large":"_IPVp1z","padding-all-x-large":"_iZOasQ","padding-top-none":"_z3Ird8","padding-top-x-small":"_RoOPSq","padding-top-small":"_0vKWCu","padding-top-medium":"_eiosQ9","padding-top-large":"_XyuA3U","padding-top-x-large":"_alHTHR","padding-left-none":"_WMk9ZJ","padding-left-x-small":"_xmdg1z","padding-left-small":"_rw1IzZ","padding-left-medium":"_5Ay-uS","padding-left-large":"_zSzGOb","padding-left-x-large":"_NOD7cA","padding-bottom-none":"_yvOluM","padding-bottom-x-small":"_iHWbWJ","padding-bottom-small":"_UXfxM5","padding-bottom-medium":"_t-TneE","padding-bottom-large":"_Xhrlwr","padding-bottom-x-large":"_JTvyXv","padding-right-none":"_63-TA-","padding-right-x-small":"_IP4Yfp","padding-right-small":"_MwzxXj","padding-right-medium":"_vQfsyW","padding-right-large":"_P-j-ux","padding-right-x-large":"_n-TNnz","margin-all-none":"_ERim67","margin-all--none":"_Or-eJL","margin-all-x-small":"_KERUhi","margin-all--x-small":"_TMPzXT","margin-all-small":"_EwqtOC","margin-all--small":"_9Z-wsk","margin-all-medium":"_yximzo","margin-all--medium":"_fLSxea","margin-all-large":"_wlilZ3","margin-all--large":"_jGDqRC","margin-all-x-large":"_GWnWvC","margin-all--x-large":"_cLbKqJ","margin-top-none":"_3jdp75","margin-top--none":"_0WRWj5","margin-top-x-small":"_VW22Kv","margin-top--x-small":"_LtHoWc","margin-top-small":"_wVwjb3","margin-top--small":"_lGqYFL","margin-top-medium":"_hjC4AQ","margin-top--medium":"_vQ78uS","margin-top-large":"_vARmsw","margin-top--large":"_YechZq","margin-top-x-large":"_5lAROs","margin-top--x-large":"_cPyuIj","margin-left-none":"_H1vksJ","margin-left--none":"_XSEkrl","margin-left-x-small":"_Ay4VhN","margin-left--x-small":"_mBOu9r","margin-left-small":"_n2s-yc","margin-left--small":"_IOPnLC","margin-left-medium":"_moKUTa","margin-left--medium":"_JuMFMY","margin-left-large":"_ta6Cyw","margin-left--large":"_CYCXyF","margin-left-x-large":"_fDWZVq","margin-left--x-large":"_lAPdEn","margin-bottom-none":"_9cPwE7","margin-bottom--none":"_GcxiMz","margin-bottom-x-small":"_WLeS0A","margin-bottom--x-small":"_LE2Pbf","margin-bottom-small":"_6Iba--","margin-bottom--small":"_mB1UY4","margin-bottom-medium":"_a68ExA","margin-bottom--medium":"_wskTnp","margin-bottom-large":"_BIL8Th","margin-bottom--large":"_Bllmr3","margin-bottom-x-large":"_EzjFfS","margin-bottom--x-large":"_wkKt1B","margin-right-none":"_8pZ8-T","margin-right--none":"_V9oa5v","margin-right-x-small":"_HEYmiL","margin-right--x-small":"_9hVn6O","margin-right-small":"_-Bor7t","margin-right--small":"_-YEuFl","margin-right-medium":"_Md8l9X","margin-right--medium":"_19jgoM","margin-right-large":"_KvI5pm","margin-right--large":"_CgZc6L","margin-right-x-large":"_afaSsp","margin-right--x-large":"_OEypNn","gap-column-none":"_9CVPZ7","gap-column-x-small":"_HrOchg","gap-column-small":"_AAKjB8","gap-column-medium":"_d4Jzag","gap-column-large":"_AetcsS","gap-column-x-large":"_TF7D3w","gap-row-none":"_X1kmIA","gap-row-x-small":"_KCuxFs","gap-row-small":"_sfRUkQ","gap-row-medium":"_ETLdMc","gap-row-large":"_Wl3pUe","gap-row-x-large":"_SidGsz","color-base-1":"_L12lRQ","color-base-2":"_6s-W0A","color-base-3":"_PN21mR","color-neutral-1":"_-jwzMP","color-neutral-2":"_5-S3sa","color-neutral-3":"_uBwTfw","color-accent-1":"_Lzi4uJ","color-accent-2":"_0uoWxM","color-accent-3":"_y26s1W","color-tertiary-1":"_TZd62R","color-tertiary-2":"_EUBECn","color-tertiary-3":"_yxx2o5","color-clear":"_rRT5zh","color-extra-1":"_bfKH2E","color-extra-2":"_CeCLI8","color-extra-3":"_bxvcmG","color-white":"_qLMeKM","color-black":"_aggqve","color-gray-1":"_WKE9J9","color-gray-2":"_r8czTI","color-gray-3":"_YU6hw7","color-gray-4":"_8rCk-8","color-gray-5":"_OsXfc8","color-gray-6":"_qnnZXb","color-red":"_1xC0Nl","color-orange":"_R6aex8","color-yellow":"_DWkBNY","color-green":"_J7c-Yd","color-blue":"_PuTjSx","color-purple":"_7r7ssM","color-pink":"_UCrMXf","can-click":"_arBVGH"};
styleInject(css_248z$1);

var _excluded$1 = ["id", "classes", "styles", "width", "height", "direction", "alignment", "gap", "position", "fill", "padding", "margin", "color", "canClick", "children"];

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

    if (i != array.length - 2) {
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

var getClass$1 = function getClass(valid, classname) {
  if (valid == true) {
    return ' ' + style$1[classname];
  } else {
    return '';
  }
};

var Container = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? '' : _ref$id,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? '' : _ref$classes,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '' : _ref$height,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'column' : _ref$direction,
      _ref$alignment = _ref.alignment,
      alignment = _ref$alignment === void 0 ? 'center center' : _ref$alignment,
      _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? '' : _ref$gap,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? '' : _ref$position,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? '' : _ref$fill,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? '' : _ref$padding,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '' : _ref$margin,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$canClick = _ref.canClick,
      canClick = _ref$canClick === void 0 ? false : _ref$canClick,
      children = _ref.children,
      extras = _objectWithoutProperties(_ref, _excluded$1);

  var getClasses = function getClasses() {
    var alignmentClasses = getClassesFromString$1('alignment', alignment);
    var paddingClasses = getClassesFromString$1('padding', padding);
    var marginClasses = getClassesFromString$1('margin', margin);
    var gapClasses = getClassesFromString$1('gap', gap);
    return style$1['direction-' + direction] + ' ' + alignmentClasses + (gap != '' ? ' ' + gapClasses : '') + getClass$1(position != '', 'position-' + position) + getClass$1(fill != '', 'fill-' + fill) + (padding != '' ? ' ' + paddingClasses : '') + (margin != '' ? ' ' + marginClasses : '') + getClass$1(color != '' && !color.includes('#'), 'color-' + color) + getClass$1(canClick, 'can-click');
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

  var getGap = function getGap() {
    return getStylesFromString$1('gap', gap, ['small', 'medium', 'large', 'none']);
  };

  var getWidth = function getWidth() {
    if (width !== '') {
      return {
        width: width
      };
    } else {
      return {};
    }
  };

  var getHeight = function getHeight() {
    if (height !== '') {
      return {
        height: height
      };
    } else {
      return {};
    }
  };

  var getStyles = function getStyles() {
    return _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, styles), getColor()), getPadding()), getMargin()), getGap()), getWidth()), getHeight());
  };

  console.log(getGap());
  return /*#__PURE__*/React.createElement("div", _extends({
    id: id != '' ? id : null,
    className: "".concat(getClasses()).concat(classes !== '' ? ' ' + classes : ''),
    style: getStyles(),
    ref: ref
  }, extras), children);
});

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
function aspectRatio() {
  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      isClient = _useState4[0],
      setIsClient = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      aspect = _useState6[0],
      setAspect = _useState6[1];

  useEffect(function () {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);
  useEffect(function () {
    if (isClient) {
      var getAspect = function getAspect() {
        var _window = window,
            width = _window.innerWidth,
            height = _window.innerHeight;
        return width / height;
      };

      var handleResize = function handleResize() {
        setAspect(getAspect());
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return function () {
        return window.removeEventListener('resize', handleResize);
      };
    }
  }, [isClient]);
  return aspect;
}
function isLandscape() {
  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      isClient = _useState8[0],
      setIsClient = _useState8[1];

  var _useState9 = useState(),
      _useState10 = _slicedToArray(_useState9, 2),
      aspect = _useState10[0],
      setAspect = _useState10[1];

  useEffect(function () {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);
  useEffect(function () {
    if (isClient) {
      var getAspect = function getAspect() {
        var _window2 = window,
            width = _window2.innerWidth,
            height = _window2.innerHeight;
        return width / height;
      };

      var handleResize = function handleResize() {
        setAspect(getAspect());
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return function () {
        return window.removeEventListener('resize', handleResize);
      };
    }
  }, [isClient]);
  return isClient ? aspect > 1 : false;
}
function isPortrait() {
  var _useState11 = useState(),
      _useState12 = _slicedToArray(_useState11, 2),
      isClient = _useState12[0],
      setIsClient = _useState12[1];

  var _useState13 = useState(),
      _useState14 = _slicedToArray(_useState13, 2),
      aspect = _useState14[0],
      setAspect = _useState14[1];

  useEffect(function () {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);
  useEffect(function () {
    if (isClient) {
      var getAspect = function getAspect() {
        var _window3 = window,
            width = _window3.innerWidth,
            height = _window3.innerHeight;
        return width / height;
      };

      var handleResize = function handleResize() {
        setAspect(getAspect());
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return function () {
        return window.removeEventListener('resize', handleResize);
      };
    }
  }, [isClient]);
  return isClient ? aspect < 1 : false;
}

var css_248z = "._KUgPzN {\n  font-style: italic;\n}\n\n._sEO-mW {\n  text-decoration: underline;\n}\n\n._ECYGLn {\n  font-size: 2em;\n}\n\n._1AibuH {\n  font-size: 1.5em;\n}\n\n._VUwLHs {\n  font-size: 1.17em;\n}\n\n._OzBbZO {\n  font-size: 1em;\n}\n\n._aJfbVP {\n  font-size: 0.83em;\n}\n\n._LKDNHE {\n  font-size: 0.67em;\n}\n\n._vKit1j {\n  font-size: 1em;\n}\n\n._BgaJqP {\n  font-weight: normal;\n}\n\n._L7OqmH {\n  font-weight: bold;\n}\n\n._Irwgbn {\n  font-weight: lighter;\n}\n\n@media (prefers-color-scheme: dark) {\n  ._2jREhU {\n    color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._2jREhU {\n    color: white;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._vOm2uW {\n    color: #1c1c1e;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._vOm2uW {\n    color: #f2f2f7;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._PUFZ-s {\n    color: #3a3a3c;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._PUFZ-s {\n    color: #d1d1d6;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._MqW00G {\n    color: white;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._MqW00G {\n    color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._Uc-VKN {\n    color: #f2f2f7;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._Uc-VKN {\n    color: #1d1d1f;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._suLIE8 {\n    color: #d1d1d6;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._suLIE8 {\n    color: #424245;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._TTGe5f {\n    color: #007aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._TTGe5f {\n    color: #007aff;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._2IkPSj {\n    color: #0059b8;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._2IkPSj {\n    color: #0059b8;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._qxhSkq {\n    color: #70b5ff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._qxhSkq {\n    color: #70b5ff;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._zwNxUY {\n    color: #fa3b2f;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._zwNxUY {\n    color: #fa3b2f;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._AbfntO {\n    color: #f92b53;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._AbfntO {\n    color: #f92b53;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._98d0ef {\n    color: #fa6a86;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._98d0ef {\n    color: #fa6a86;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._9KhHnW {\n    color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._9KhHnW {\n    color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._EC-VwS {\n    color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._EC-VwS {\n    color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._K84tt- {\n    color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._K84tt- {\n    color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._-DYnPX {\n    color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._-DYnPX {\n    color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._ReA-aU {\n    color: white;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._ReA-aU {\n    color: white;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._gc52Mn {\n    color: black;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._gc52Mn {\n    color: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._pfJXGU {\n    color: #8e8e93;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._pfJXGU {\n    color: #8e8e93;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._QxaLGK {\n    color: #636366;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._QxaLGK {\n    color: #aeaeb2;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._UXaYXz {\n    color: #48484a;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._UXaYXz {\n    color: #c7c7cc;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._d-hUzx {\n    color: #3a3a3c;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._d-hUzx {\n    color: #d1d1d6;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._HjzbSy {\n    color: #2c2c2e;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._HjzbSy {\n    color: #e5e5ea;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._kXCMtN {\n    color: #1c1c1e;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._kXCMtN {\n    color: #f2f2f7;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._jCjIJZ {\n    color: #fa3b2f;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._jCjIJZ {\n    color: #fa3b2f;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._0PpcT7 {\n    color: #ff9500;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._0PpcT7 {\n    color: #ff9500;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._hsGg0j {\n    color: #ffcc02;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._hsGg0j {\n    color: #ffcc02;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._qfTMEF {\n    color: #35c759;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._qfTMEF {\n    color: #35c759;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._wKExWW {\n    color: #007aff;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._wKExWW {\n    color: #007aff;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._Lpb14Y {\n    color: #5856d5;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._Lpb14Y {\n    color: #5856d5;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ._-UyIT1 {\n    color: #ff6482;\n  }\n}\n@media (prefers-color-scheme: light) {\n  ._-UyIT1 {\n    color: #ff6482;\n  }\n}\n\n._Rur-Sy {\n  text-align: left;\n}\n\n._51MYmx {\n  text-align: right;\n}\n\n._iBCjQO {\n  text-align: center;\n}\n\n._ql8Y3I {\n  text-align: justify;\n}\n\n._OWpWNF {\n  padding: 0;\n}\n\n._RbOFXt {\n  padding: 0;\n}\n\n._NhI0Yq {\n  padding: 0.25rem;\n}\n\n._Q3Hhas {\n  padding: -0.25rem;\n}\n\n._nH42ow {\n  padding: 0.5rem;\n}\n\n._YbOSoI {\n  padding: -0.5rem;\n}\n\n._CXxMAT {\n  padding: 1rem;\n}\n\n._xv0-DG {\n  padding: -1rem;\n}\n\n._T3Sw64 {\n  padding: 2rem;\n}\n\n._2Q81vt {\n  padding: -2rem;\n}\n\n._A-Up3- {\n  padding: 4rem;\n}\n\n._B8su0o {\n  padding: -4rem;\n}\n\n._VG01gx {\n  padding-top: 0;\n}\n\n._wGoVjn {\n  padding-top: 0;\n}\n\n._-nNmt5 {\n  padding-top: 0.25rem;\n}\n\n._IWSlqx {\n  padding-top: -0.25rem;\n}\n\n._nbL5Ov {\n  padding-top: 0.5rem;\n}\n\n._Lrpi-8 {\n  padding-top: -0.5rem;\n}\n\n._0QvlIC {\n  padding-top: 1rem;\n}\n\n._odIrup {\n  padding-top: -1rem;\n}\n\n._V-QYzV {\n  padding-top: 2rem;\n}\n\n._mmk0iI {\n  padding-top: -2rem;\n}\n\n._QpmwZ9 {\n  padding-top: 4rem;\n}\n\n._FCZNgW {\n  padding-top: -4rem;\n}\n\n._US9pLF {\n  padding-left: 0;\n}\n\n._L2KLP5 {\n  padding-left: 0;\n}\n\n._KmjaaQ {\n  padding-left: 0.25rem;\n}\n\n._kyh43F {\n  padding-left: -0.25rem;\n}\n\n._ffmveg {\n  padding-left: 0.5rem;\n}\n\n._Ao-AXv {\n  padding-left: -0.5rem;\n}\n\n._om3kk5 {\n  padding-left: 1rem;\n}\n\n._mA5bc- {\n  padding-left: -1rem;\n}\n\n._B1HE7T {\n  padding-left: 2rem;\n}\n\n._aOyuSZ {\n  padding-left: -2rem;\n}\n\n._wJSa7p {\n  padding-left: 4rem;\n}\n\n._qKIp8I {\n  padding-left: -4rem;\n}\n\n._4jEQQi {\n  padding-bottom: 0;\n}\n\n._SVKNzo {\n  padding-bottom: 0;\n}\n\n._jqy-OI {\n  padding-bottom: 0.25rem;\n}\n\n._C6dnVh {\n  padding-bottom: -0.25rem;\n}\n\n._TDKaNH {\n  padding-bottom: 0.5rem;\n}\n\n._-UiaZO {\n  padding-bottom: -0.5rem;\n}\n\n._TMhcQG {\n  padding-bottom: 1rem;\n}\n\n._30miCN {\n  padding-bottom: -1rem;\n}\n\n._lfbKs7 {\n  padding-bottom: 2rem;\n}\n\n._i3jC68 {\n  padding-bottom: -2rem;\n}\n\n._sQAJMy {\n  padding-bottom: 4rem;\n}\n\n._TfriFV {\n  padding-bottom: -4rem;\n}\n\n._2-jdmD {\n  padding-right: 0;\n}\n\n._cK8TBy {\n  padding-right: 0;\n}\n\n._6wagfb {\n  padding-right: 0.25rem;\n}\n\n._4eN3Ci {\n  padding-right: -0.25rem;\n}\n\n._FodmX4 {\n  padding-right: 0.5rem;\n}\n\n._8nLPCU {\n  padding-right: -0.5rem;\n}\n\n._dudm-x {\n  padding-right: 1rem;\n}\n\n._qMCjrb {\n  padding-right: -1rem;\n}\n\n._d4Aow2 {\n  padding-right: 2rem;\n}\n\n._qVDKg1 {\n  padding-right: -2rem;\n}\n\n._6TViBz {\n  padding-right: 4rem;\n}\n\n._5VGBms {\n  padding-right: -4rem;\n}\n\n._EX3CPz {\n  margin: 0;\n}\n\n._DwOaLi {\n  margin: 0;\n}\n\n._WxTR5j {\n  margin: 0.25rem;\n}\n\n._V5xhcC {\n  margin: -0.25rem;\n}\n\n._IWtm79 {\n  margin: 0.5rem;\n}\n\n._4ROkRp {\n  margin: -0.5rem;\n}\n\n._1Sntb0 {\n  margin: 1rem;\n}\n\n._eLOue3 {\n  margin: -1rem;\n}\n\n._zM2hiw {\n  margin: 2rem;\n}\n\n._lpi3v2 {\n  margin: -2rem;\n}\n\n._2x2cqe {\n  margin: 4rem;\n}\n\n._AyZUeO {\n  margin: -4rem;\n}\n\n._yolTyY {\n  margin-top: 0;\n}\n\n._imWQvC {\n  margin-top: 0;\n}\n\n._OK2LE2 {\n  margin-top: 0.25rem;\n}\n\n._ngXg2e {\n  margin-top: -0.25rem;\n}\n\n._MmDZ9y {\n  margin-top: 0.5rem;\n}\n\n._bQck6P {\n  margin-top: -0.5rem;\n}\n\n._c6i2s1 {\n  margin-top: 1rem;\n}\n\n._k3lB8I {\n  margin-top: -1rem;\n}\n\n._2rwPx4 {\n  margin-top: 2rem;\n}\n\n._GPk-Yl {\n  margin-top: -2rem;\n}\n\n._W6YRad {\n  margin-top: 4rem;\n}\n\n._TJ5k8G {\n  margin-top: -4rem;\n}\n\n._a83JmX {\n  margin-left: 0;\n}\n\n._3jMQyn {\n  margin-left: 0;\n}\n\n._QCGgfz {\n  margin-left: 0.25rem;\n}\n\n._hx-Ykp {\n  margin-left: -0.25rem;\n}\n\n._E-hqQ8 {\n  margin-left: 0.5rem;\n}\n\n._dLwMXa {\n  margin-left: -0.5rem;\n}\n\n._keNVmG {\n  margin-left: 1rem;\n}\n\n._Ry03db {\n  margin-left: -1rem;\n}\n\n._lhTZ2m {\n  margin-left: 2rem;\n}\n\n._57JQVF {\n  margin-left: -2rem;\n}\n\n._tt0MIG {\n  margin-left: 4rem;\n}\n\n._dh8vGJ {\n  margin-left: -4rem;\n}\n\n._ABl7B4 {\n  margin-bottom: 0;\n}\n\n._hwAETC {\n  margin-bottom: 0;\n}\n\n._-S88Kp {\n  margin-bottom: 0.25rem;\n}\n\n._zCwJNw {\n  margin-bottom: -0.25rem;\n}\n\n._JELwf8 {\n  margin-bottom: 0.5rem;\n}\n\n._7wYvUl {\n  margin-bottom: -0.5rem;\n}\n\n._J3Jmle {\n  margin-bottom: 1rem;\n}\n\n._gpBvy- {\n  margin-bottom: -1rem;\n}\n\n._vf3q-r {\n  margin-bottom: 2rem;\n}\n\n._Y55zub {\n  margin-bottom: -2rem;\n}\n\n._wbLVQG {\n  margin-bottom: 4rem;\n}\n\n._XiXU41 {\n  margin-bottom: -4rem;\n}\n\n._JUNt8N {\n  margin-right: 0;\n}\n\n._6-N1Fk {\n  margin-right: 0;\n}\n\n._xqgdQx {\n  margin-right: 0.25rem;\n}\n\n._ujPvYw {\n  margin-right: -0.25rem;\n}\n\n._oqfENQ {\n  margin-right: 0.5rem;\n}\n\n._1iCYkZ {\n  margin-right: -0.5rem;\n}\n\n._V-JTjI {\n  margin-right: 1rem;\n}\n\n._-Dox2Z {\n  margin-right: -1rem;\n}\n\n._ijg4ie {\n  margin-right: 2rem;\n}\n\n._E2d5nk {\n  margin-right: -2rem;\n}\n\n._3oM90j {\n  margin-right: 4rem;\n}\n\n._jLMUiD {\n  margin-right: -4rem;\n}\n\n._trIPjl {\n  cursor: pointer;\n  pointer-events: auto;\n}";
var style = {"italic":"_KUgPzN","underline":"_sEO-mW","size-h1":"_ECYGLn","size-h2":"_1AibuH","size-h3":"_VUwLHs","size-h4":"_OzBbZO","size-h5":"_aJfbVP","size-h6":"_LKDNHE","size-p":"_vKit1j","weight-normal":"_BgaJqP","weight-bold":"_L7OqmH","weight-light":"_Irwgbn","color-base-1":"_2jREhU","color-base-2":"_vOm2uW","color-base-3":"_PUFZ-s","color-neutral-1":"_MqW00G","color-neutral-2":"_Uc-VKN","color-neutral-3":"_suLIE8","color-accent-1":"_TTGe5f","color-accent-2":"_2IkPSj","color-accent-3":"_qxhSkq","color-tertiary-1":"_zwNxUY","color-tertiary-2":"_AbfntO","color-tertiary-3":"_98d0ef","color-clear":"_9KhHnW","color-extra-1":"_EC-VwS","color-extra-2":"_K84tt-","color-extra-3":"_-DYnPX","color-white":"_ReA-aU","color-black":"_gc52Mn","color-gray-1":"_pfJXGU","color-gray-2":"_QxaLGK","color-gray-3":"_UXaYXz","color-gray-4":"_d-hUzx","color-gray-5":"_HjzbSy","color-gray-6":"_kXCMtN","color-red":"_jCjIJZ","color-orange":"_0PpcT7","color-yellow":"_hsGg0j","color-green":"_qfTMEF","color-blue":"_wKExWW","color-purple":"_Lpb14Y","color-pink":"_-UyIT1","alignment-left":"_Rur-Sy","alignment-right":"_51MYmx","alignment-center":"_iBCjQO","alignment-justify":"_ql8Y3I","padding-all-none":"_OWpWNF","padding-all--none":"_RbOFXt","padding-all-x-small":"_NhI0Yq","padding-all--x-small":"_Q3Hhas","padding-all-small":"_nH42ow","padding-all--small":"_YbOSoI","padding-all-medium":"_CXxMAT","padding-all--medium":"_xv0-DG","padding-all-large":"_T3Sw64","padding-all--large":"_2Q81vt","padding-all-x-large":"_A-Up3-","padding-all--x-large":"_B8su0o","padding-top-none":"_VG01gx","padding-top--none":"_wGoVjn","padding-top-x-small":"_-nNmt5","padding-top--x-small":"_IWSlqx","padding-top-small":"_nbL5Ov","padding-top--small":"_Lrpi-8","padding-top-medium":"_0QvlIC","padding-top--medium":"_odIrup","padding-top-large":"_V-QYzV","padding-top--large":"_mmk0iI","padding-top-x-large":"_QpmwZ9","padding-top--x-large":"_FCZNgW","padding-left-none":"_US9pLF","padding-left--none":"_L2KLP5","padding-left-x-small":"_KmjaaQ","padding-left--x-small":"_kyh43F","padding-left-small":"_ffmveg","padding-left--small":"_Ao-AXv","padding-left-medium":"_om3kk5","padding-left--medium":"_mA5bc-","padding-left-large":"_B1HE7T","padding-left--large":"_aOyuSZ","padding-left-x-large":"_wJSa7p","padding-left--x-large":"_qKIp8I","padding-bottom-none":"_4jEQQi","padding-bottom--none":"_SVKNzo","padding-bottom-x-small":"_jqy-OI","padding-bottom--x-small":"_C6dnVh","padding-bottom-small":"_TDKaNH","padding-bottom--small":"_-UiaZO","padding-bottom-medium":"_TMhcQG","padding-bottom--medium":"_30miCN","padding-bottom-large":"_lfbKs7","padding-bottom--large":"_i3jC68","padding-bottom-x-large":"_sQAJMy","padding-bottom--x-large":"_TfriFV","padding-right-none":"_2-jdmD","padding-right--none":"_cK8TBy","padding-right-x-small":"_6wagfb","padding-right--x-small":"_4eN3Ci","padding-right-small":"_FodmX4","padding-right--small":"_8nLPCU","padding-right-medium":"_dudm-x","padding-right--medium":"_qMCjrb","padding-right-large":"_d4Aow2","padding-right--large":"_qVDKg1","padding-right-x-large":"_6TViBz","padding-right--x-large":"_5VGBms","margin-all-none":"_EX3CPz","margin-all--none":"_DwOaLi","margin-all-x-small":"_WxTR5j","margin-all--x-small":"_V5xhcC","margin-all-small":"_IWtm79","margin-all--small":"_4ROkRp","margin-all-medium":"_1Sntb0","margin-all--medium":"_eLOue3","margin-all-large":"_zM2hiw","margin-all--large":"_lpi3v2","margin-all-x-large":"_2x2cqe","margin-all--x-large":"_AyZUeO","margin-top-none":"_yolTyY","margin-top--none":"_imWQvC","margin-top-x-small":"_OK2LE2","margin-top--x-small":"_ngXg2e","margin-top-small":"_MmDZ9y","margin-top--small":"_bQck6P","margin-top-medium":"_c6i2s1","margin-top--medium":"_k3lB8I","margin-top-large":"_2rwPx4","margin-top--large":"_GPk-Yl","margin-top-x-large":"_W6YRad","margin-top--x-large":"_TJ5k8G","margin-left-none":"_a83JmX","margin-left--none":"_3jMQyn","margin-left-x-small":"_QCGgfz","margin-left--x-small":"_hx-Ykp","margin-left-small":"_E-hqQ8","margin-left--small":"_dLwMXa","margin-left-medium":"_keNVmG","margin-left--medium":"_Ry03db","margin-left-large":"_lhTZ2m","margin-left--large":"_57JQVF","margin-left-x-large":"_tt0MIG","margin-left--x-large":"_dh8vGJ","margin-bottom-none":"_ABl7B4","margin-bottom--none":"_hwAETC","margin-bottom-x-small":"_-S88Kp","margin-bottom--x-small":"_zCwJNw","margin-bottom-small":"_JELwf8","margin-bottom--small":"_7wYvUl","margin-bottom-medium":"_J3Jmle","margin-bottom--medium":"_gpBvy-","margin-bottom-large":"_vf3q-r","margin-bottom--large":"_Y55zub","margin-bottom-x-large":"_wbLVQG","margin-bottom--x-large":"_XiXU41","margin-right-none":"_JUNt8N","margin-right--none":"_6-N1Fk","margin-right-x-small":"_xqgdQx","margin-right--x-small":"_ujPvYw","margin-right-small":"_oqfENQ","margin-right--small":"_1iCYkZ","margin-right-medium":"_V-JTjI","margin-right--medium":"_-Dox2Z","margin-right-large":"_ijg4ie","margin-right--large":"_E2d5nk","margin-right-x-large":"_3oM90j","margin-right--x-large":"_jLMUiD","can-click":"_trIPjl"};
styleInject(css_248z);

var _excluded = ["id", "classes", "styles", "alignment", "color", "size", "margin", "padding", "weight", "italic", "underline", "href", "canClick", "children"];

var getClassesFromString = function getClassesFromString(property, string) {
  var classes = '';
  var array = string.split(' ');

  for (var i = 0; i < array.length; i += 2) {
    var x = array[i];
    var y = array[i + 1];
    var calculatedStyle = style[property + '-' + x + '-' + y];

    if (calculatedStyle != undefined) {
      classes += calculatedStyle;
    }

    if (i != array.length - 2) {
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

var getClass = function getClass(valid, classname) {
  if (valid == true) {
    return ' ' + style[classname];
  } else {
    return '';
  }
};

function Text(_ref) {
  var id = _ref.id,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? '' : _ref$classes,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      _ref$alignment = _ref.alignment,
      alignment = _ref$alignment === void 0 ? '' : _ref$alignment,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '' : _ref$size,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '' : _ref$margin,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? '' : _ref$padding,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? '' : _ref$weight,
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
    return getClass(size != '', 'size-' + size) + getClass(italic, 'italic') + getClass(underline, 'underline') + getClass(alignment != '', 'alignment-' + alignment) + (padding != '' ? ' ' + paddingClasses : '') + (margin != '' ? ' ' + marginClasses : '') + getClass(weight != '', 'weight-' + weight) + getClass(color != '' && !color.includes('#'), 'color-' + color) + getClass(canClick, 'can-click');
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

export { Container, Responsive, Text, aspectRatio, isLandscape, isPortrait };
//# sourceMappingURL=index.js.map
