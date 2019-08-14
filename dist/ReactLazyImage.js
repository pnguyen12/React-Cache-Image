"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReactLazyImage =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactLazyImage, _Component);

  function ReactLazyImage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ReactLazyImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReactLazyImage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "buildOptions", function () {
      var options = _this.props.options;

      if (!options) {
        // default options
        return {
          root: null,
          rootMargin: '0px',
          threshold: 1.0
        };
      } // set the default props for components that only implement some and not all


      return {
        root: options.root,
        rootMargin: options.rootMargin,
        threshold: options.threshold
      };
    });

    _defineProperty(_assertThisInitialized(_this), "validateProps", function () {
      var _this$props = _this.props,
          src = _this$props.src,
          height = _this$props.height,
          width = _this$props.width,
          className = _this$props.className,
          alt = _this$props.alt; // todo validate options for root, rootMargin, and threshold

      if (isNaN(height || width)) return 'height';else if (typeof className !== 'string') return 'className';else if (typeof alt !== 'string') return 'alt';else if (!src) return 'src';
      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "testable", function () {
      var testable = _this.props.testable;
      return testable;
    });

    _defineProperty(_assertThisInitialized(_this), "lazyLoad", function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // toggle the message to be displayed for development purposes
          // use this to check whether or not the image was loaded depending on the intersection elements hit
          if (_this.testable()) {
            console.warn('Intersection Hit');
          }

          var img = entry.target;
          var src = img.getAttribute('data-lazy');
          img.setAttribute('src', src);
        }
      });
    });

    return _this;
  }

  _createClass(ReactLazyImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var propValidation = this.validateProps();

      if (typeof propValidation === 'string') {
        throw new Error("Please provide correct prop type for ".concat(propValidation));
      } else {
        var node = document.querySelector('.hero-image');
        var observer = new IntersectionObserver(this.lazyLoad, this.buildOptions);
        observer.observe(node);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          src = _this$props2.src,
          className = _this$props2.className,
          alt = _this$props2.alt,
          height = _this$props2.height,
          width = _this$props2.width;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("img", {
        "data-lazy": src,
        alt: alt,
        className: className,
        width: width,
        height: height
      }));
    }
  }]);

  return ReactLazyImage;
}(_react.Component);

exports["default"] = ReactLazyImage;

_defineProperty(ReactLazyImage, "propTypes", {
  alt: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  src: _propTypes["default"].string.isRequired,
  testable: _propTypes["default"].bool,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  options: _propTypes["default"].shape({
    root: _propTypes["default"].string,
    rootMargin: _propTypes["default"].string,
    threshold: _propTypes["default"].number
  })
});

_defineProperty(ReactLazyImage, "defaultProps", {
  height: "100",
  width: "100",
  testable: false,
  alt: "" // options is built already no need for default props

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZWFjdExhenlJbWFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdExhenlJbWFnZSIsIm9wdGlvbnMiLCJwcm9wcyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJjbGFzc05hbWUiLCJhbHQiLCJpc05hTiIsInRlc3RhYmxlIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiY29uc29sZSIsIndhcm4iLCJpbWciLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJwcm9wVmFsaWRhdGlvbiIsInZhbGlkYXRlUHJvcHMiLCJFcnJvciIsIm5vZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwibGF6eUxvYWQiLCJidWlsZE9wdGlvbnMiLCJvYnNlcnZlIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm51bWJlciIsImJvb2wiLCJzaGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21FQXFDSixZQUFNO0FBQUEsVUFDWEMsT0FEVyxHQUNDLE1BQUtDLEtBRE4sQ0FDWEQsT0FEVzs7QUFFbkIsVUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWjtBQUNBLGVBQU87QUFDTEUsVUFBQUEsSUFBSSxFQUFFLElBREQ7QUFFTEMsVUFBQUEsVUFBVSxFQUFFLEtBRlA7QUFHTEMsVUFBQUEsU0FBUyxFQUFFO0FBSE4sU0FBUDtBQUtELE9BVGtCLENBVW5COzs7QUFDQSxhQUFPO0FBQ0xGLFFBQUFBLElBQUksRUFBRUYsT0FBTyxDQUFDRSxJQURUO0FBRUxDLFFBQUFBLFVBQVUsRUFBRUgsT0FBTyxDQUFDRyxVQUZmO0FBR0xD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RTZCLHNCQUFVQyxNQUFWLENBQWlCQyxVQUpMO0FBS2pCekIsRUFBQUEsUUFBUSxFQUFFdUIsc0JBQVVLLElBTEg7QUFNakJoQyxFQUFBQSxLQUFLLEVBQUUyQixzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUMsTUFBWCxFQUFtQkQsc0JBQVVJLE1BQTdCLENBQXBCLENBTlU7QUFPakJ0QyxFQUFBQSxPQUFPLEVBQUVrQyxzQkFBVU0sS0FBVixDQUFnQjtBQUN2QnRDLElBQUFBLElBQUksRUFBRWdDLHNCQUFVQyxNQURPO0FBRXZCaEMsSUFBQUEsVUFBVSxFQUFFK0Isc0JBQVVDLE1BRkM7QUFHdkIvQixJQUFBQSxTQUFTLEVBQUU4QixzQkFBVUk7QUFIRSxHQUFoQjtBQVBRLEM7O2dCQURBdkMsYyxrQkFlRztBQUNwQk8sRUFBQUEsTUFBTSxFQUFFLEtBRFk7QUFFcEJDLEVBQUFBLEtBQUssRUFBRSxLQUZhO0FBR3BCSSxFQUFBQSxRQUFRLEVBQUUsS0FIVTtBQUlwQkYsRUFBQUEsR0FBRyxFQUFFLEVBSmUsQ0FLcEI7O0FBTG9CLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0TGF6eUltYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGVzdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHJvb3Q6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICByb290TWFyZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdGhyZXNob2xkOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfSlcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogXCIxMDBcIixcbiAgICB3aWR0aDogXCIxMDBcIixcbiAgICB0ZXN0YWJsZTogZmFsc2UsXG4gICAgYWx0OiBcIlwiXG4gICAgLy8gb3B0aW9ucyBpcyBidWlsdCBhbHJlYWR5IG5vIG5lZWQgZm9yIGRlZmF1bHQgcHJvcHNcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcm9wVmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGVQcm9wcygpO1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbGlkYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBsZWFzZSBwcm92aWRlIGNvcnJlY3QgcHJvcCB0eXBlIGZvciAke3Byb3BWYWxpZGF0aW9ufWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8taW1hZ2UnKTtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICB0aGlzLmxhenlMb2FkLFxuICAgICAgICB0aGlzLmJ1aWxkT3B0aW9uc1xuICAgICAgKTtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgYnVpbGRPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgcm9vdE1hcmdpbjogJzBweCcsXG4gICAgICAgIHRocmVzaG9sZDogMS4wLFxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gc2V0IHRoZSBkZWZhdWx0IHByb3BzIGZvciBjb21wb25lbnRzIHRoYXQgb25seSBpbXBsZW1lbnQgc29tZSBhbmQgbm90IGFsbFxuICAgIHJldHVybiB7XG4gICAgICByb290OiBvcHRpb25zLnJvb3QsXG4gICAgICByb290TWFyZ2luOiBvcHRpb25zLnJvb3RNYXJnaW4sXG4gICAgICB0aHJlc2hvbGQ6IG9wdGlvbnMudGhyZXNob2xkLFxuICAgIH07XG4gIH07XG5cbiAgdmFsaWRhdGVQcm9wcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNyYywgaGVpZ2h0LCB3aWR0aCwgY2xhc3NOYW1lLCBhbHQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyB0b2RvIHZhbGlkYXRlIG9wdGlvbnMgZm9yIHJvb3QsIHJvb3RNYXJnaW4sIGFuZCB0aHJlc2hvbGRcblxuICAgIGlmIChpc05hTihoZWlnaHQgfHwgd2lkdGgpKSByZXR1cm4gJ2hlaWdodCc7XG4gICAgZWxzZSBpZiAodHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3N0cmluZycpIHJldHVybiAnY2xhc3NOYW1lJztcbiAgICBlbHNlIGlmICh0eXBlb2YgYWx0ICE9PSAnc3RyaW5nJykgcmV0dXJuICdhbHQnO1xuICAgIGVsc2UgaWYgKCFzcmMpIHJldHVybiAnc3JjJztcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHRlc3RhYmxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdGVzdGFibGUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIHRlc3RhYmxlO1xuICB9O1xuXG4gIGxhenlMb2FkID0gZW50cmllcyA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAvLyB0b2dnbGUgdGhlIG1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkIGZvciBkZXZlbG9wbWVudCBwdXJwb3Nlc1xuICAgICAgICAvLyB1c2UgdGhpcyB0byBjaGVjayB3aGV0aGVyIG9yIG5vdCB0aGUgaW1hZ2Ugd2FzIGxvYWRlZCBkZXBlbmRpbmcgb24gdGhlIGludGVyc2VjdGlvbiBlbGVtZW50cyBoaXRcbiAgICAgICAgaWYgKHRoaXMudGVzdGFibGUoKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignSW50ZXJzZWN0aW9uIEhpdCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGltZyA9IGVudHJ5LnRhcmdldDtcbiAgICAgICAgY29uc3Qgc3JjID0gaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXp5Jyk7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNyYywgY2xhc3NOYW1lLCBhbHQsIGhlaWdodCwgd2lkdGgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBkYXRhLWxhenk9e3NyY31cbiAgICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iXX0=