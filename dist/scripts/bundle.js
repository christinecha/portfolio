/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/scripts/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Jumbler = __webpack_require__(1);

	var $projects = Array.prototype.slice.call(document.getElementsByClassName('project'));
	var vw = window.innerWidth;

	var $activeProject = null;

	var handleMouseEnter = function handleMouseEnter(e) {
	  $activeProject = e.srcElement;
	  updateView();
	};

	var handleMouseLeave = function handleMouseLeave(e) {
	  if ($activeProject === e.srcElement) $activeProject = null;
	  updateView();
	};

	var updateView = function updateView() {
	  if (vw < 768) return;

	  projects.forEach(function (project) {
	    var isActive = $activeProject === project.$el;

	    if (!$activeProject || isActive) {
	      project.$el.classList.add('is-active');
	      project.title.unjumble();
	      project.body.unjumble();
	    } else {
	      project.$el.classList.remove('is-active');
	      project.title.jumble();
	      project.body.jumble();
	    }
	  });
	};

	var projects = $projects.map(function ($project) {
	  var project = { $el: $project };

	  if (vw >= 768) {
	    $project.addEventListener('mouseenter', handleMouseEnter);
	    $project.addEventListener('mouseleave', handleMouseLeave);

	    var $title = $project.getElementsByTagName('A')[0];
	    var $body = $project.getElementsByTagName('P')[0];

	    project.title = new Jumbler($title);
	    project.body = new Jumbler($body);
	  } else {
	    project.$el.classList.add('is-active');
	  }

	  return project;
	});

	updateView();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Jumbler = function () {
	  function Jumbler($element) {
	    _classCallCheck(this, Jumbler);

	    this.$element = $element;

	    this.makeSpans();

	    this.$chars = Array.prototype.slice.call(this.$element.getElementsByClassName('char'));
	  }

	  _createClass(Jumbler, [{
	    key: 'makeSpans',
	    value: function makeSpans() {
	      var innerHTML = this.$element.textContent.trim().split('              ').join('');
	      var $children = Array.prototype.slice.call(this.$element.children);

	      var _innerHTML = innerHTML;

	      var childrenMap = {};

	      $children.forEach(function ($child) {
	        var i = innerHTML.indexOf($child.outerHTML);
	        childrenMap[i] = $child.outerHTML;
	        _innerHTML = _innerHTML.split($child.outerHTML).join(i);
	      });

	      var _newInnerHTML = '';

	      var words = _innerHTML.split(' ');

	      words.forEach(function (word) {
	        var _newWordHTML = '<span>';

	        var chars = word.split('');

	        if (childrenMap[word]) {
	          console.log('hi', childrenMap[word], _newWordHTML);
	          _newWordHTML += '<span class="char">' + childrenMap[word] + '</span>';
	        } else {
	          chars.forEach(function (char) {
	            _newWordHTML += '<span class="char">' + char + '</span>';
	          });
	        }

	        _newWordHTML += '</span>';
	        _newInnerHTML += _newWordHTML + '<span class="space"> </span>';
	      });

	      this.$element.innerHTML = _newInnerHTML;
	    }
	  }, {
	    key: 'jumble',
	    value: function jumble() {
	      this.$chars.forEach(function ($char) {
	        var x = Math.random() * 40 - 20;
	        var y = Math.random() * 40 - 20;
	        var z = Math.random() * 20 - 10;
	        $char.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0) rotateZ(' + z + 'deg)';
	      });
	    }
	  }, {
	    key: 'unjumble',
	    value: function unjumble() {
	      this.$chars.forEach(function ($char) {
	        $char.style.removeProperty('transform');
	      });
	    }
	  }]);

	  return Jumbler;
	}();

	module.exports = Jumbler;

/***/ })
/******/ ]);