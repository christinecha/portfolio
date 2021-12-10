/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatechristine_cha_portfolio"]("main",{

/***/ "./src/scripts/Jumbler.js":
/*!********************************!*\
  !*** ./src/scripts/Jumbler.js ***!
  \********************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Jumbler = /*#__PURE__*/function () {\n  function Jumbler($element) {\n    _classCallCheck(this, Jumbler);\n\n    this.$element = $element;\n    this.makeSpans();\n    this.$chars = Array.prototype.slice.call(this.$element.getElementsByClassName('char'));\n  }\n\n  _createClass(Jumbler, [{\n    key: \"makeSpans\",\n    value: function makeSpans() {\n      var innerHTML = this.$element.textContent.trim().split('              ').join('');\n      var $children = Array.prototype.slice.call(this.$element.children);\n      var _innerHTML = innerHTML;\n      var childrenMap = {};\n      $children.forEach(function ($child) {\n        var i = innerHTML.indexOf($child.outerHTML);\n        childrenMap[i] = $child.outerHTML;\n        _innerHTML = _innerHTML.split($child.outerHTML).join(i);\n      });\n      var _newInnerHTML = '';\n\n      var words = _innerHTML.split(' ');\n\n      words.forEach(function (word) {\n        var _newWordHTML = '<span>';\n        var chars = word.split('');\n\n        if (childrenMap[word]) {\n          console.log('hi', childrenMap[word], _newWordHTML);\n          _newWordHTML += '<span class=\"char\">' + childrenMap[word] + '</span>';\n        } else {\n          chars.forEach(function (_char) {\n            _newWordHTML += '<span class=\"char\">' + _char + '</span>';\n          });\n        }\n\n        _newWordHTML += '</span>';\n        _newInnerHTML += _newWordHTML + '<span class=\"space\"> </span>';\n      });\n      this.$element.innerHTML = _newInnerHTML;\n    }\n  }, {\n    key: \"jumble\",\n    value: function jumble() {\n      this.$chars.forEach(function ($char) {\n        var x = Math.random() * 40 - 20;\n        var y = Math.random() * 40 - 20;\n        var z = Math.random() * 20 - 10;\n        $char.style.transform = \"translate3d(\".concat(x, \"px,\").concat(y, \"px,0) rotateZ(\").concat(z, \"deg)\");\n      });\n    }\n  }, {\n    key: \"unjumble\",\n    value: function unjumble() {\n      this.$chars.forEach(function ($char) {\n        $char.style.removeProperty('transform');\n      });\n    }\n  }]);\n\n  return Jumbler;\n}();\n\nmodule.exports = Jumbler;\n\n//# sourceURL=webpack://christine-cha-portfolio/./src/scripts/Jumbler.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var Jumbler = __webpack_require__(/*! ./Jumbler */ \"./src/scripts/Jumbler.js\");\n\nvar $projects = Array.prototype.slice.call(document.getElementsByClassName(\"project\"));\nvar vw = window.innerWidth;\nvar $activeProject = null;\n\nvar handleMouseEnter = function handleMouseEnter(e) {\n  $activeProject = e.srcElement;\n  updateView();\n};\n\nvar handleMouseLeave = function handleMouseLeave(e) {\n  if ($activeProject === e.srcElement) $activeProject = null;\n  updateView();\n};\n\nvar updateView = function updateView() {\n  if (vw < 768) return;\n  projects.forEach(function (project) {\n    var isActive = $activeProject === project.$el;\n\n    if (!$activeProject || isActive) {\n      project.$el.classList.add(\"is-active\");\n      project.title.unjumble();\n      project.body.unjumble();\n    } else {\n      project.$el.classList.remove(\"is-active\");\n      project.title.jumble();\n      project.body.jumble();\n    }\n  });\n};\n\nvar projects = $projects.map(function ($project) {\n  var project = {\n    $el: $project\n  };\n\n  if (vw >= 768) {\n    $project.addEventListener(\"mouseenter\", handleMouseEnter);\n    $project.addEventListener(\"mouseleave\", handleMouseLeave);\n    var $title = $project.getElementsByTagName(\"A\")[0];\n    var $body = $project.getElementsByTagName(\"P\")[0];\n    project.title = new Jumbler($title);\n    project.body = new Jumbler($body);\n  } else {\n    project.$el.classList.add(\"is-active\");\n  }\n\n  return project;\n});\nupdateView();\n\n//# sourceURL=webpack://christine-cha-portfolio/./src/scripts/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c4d35371f51e1b34d8ec")
/******/ })();
/******/ 
/******/ }
);