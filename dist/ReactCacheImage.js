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

var ReactCacheImage =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactCacheImage, _Component);

  function ReactCacheImage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ReactCacheImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReactCacheImage)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  _createClass(ReactCacheImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var propValidation = this.validateProps();

      if (typeof propValidation === 'string') {
        throw new Error("Please provide correct prop type for ".concat(propValidation));
      } else {
        var className = this.props.className;
        var node = document.querySelector(".".concat(className));
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

  return ReactCacheImage;
}(_react.Component);

exports["default"] = ReactCacheImage;

_defineProperty(ReactCacheImage, "propTypes", {
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

_defineProperty(ReactCacheImage, "defaultProps", {
  height: "100",
  width: "100",
  testable: false,
  alt: "" // options is built already no need for default props

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZWFjdENhY2hlSW1hZ2UuanMiXSwibmFtZXMiOlsiUmVhY3RDYWNoZUltYWdlIiwib3B0aW9ucyIsInByb3BzIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImFsdCIsImlzTmFOIiwidGVzdGFibGUiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJjb25zb2xlIiwid2FybiIsImltZyIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInByb3BWYWxpZGF0aW9uIiwidmFsaWRhdGVQcm9wcyIsIkVycm9yIiwibm9kZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJsYXp5TG9hZCIsImJ1aWxkT3B0aW9ucyIsIm9ic2VydmUiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiYm9vbCIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUVBc0NKLFlBQU07QUFBQSxVQUNYQyxPQURXLEdBQ0MsTUFBS0MsS0FETixDQUNYRCxPQURXOztBQUVuQixVQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaO0FBQ0EsZUFBTztBQUNMRSxVQUFBQSxJQUFJLEVBQUUsSUFERDtBQUVMQyxVQUFBQSxVQUFVLEVBQUUsS0FGUDtBQUdMQyxVQUFBQSxTQUFTLEVBQUU7QUFITixTQUFQO0FBS0QsT0FUa0IsQ0FVbkI7OztBQUNBLGFBQU87QUFDTEYsUUFBQUEsSUFBSSxFQUFFRixPQUFPLENBQUNFLElBRFQ7QUFFTEMsUUFBQUEsVUFBVSxFQUFFSCxPQUFPLENBQUNHLFVBRmY7QUFH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QW1CRCxzQkFBVUksTUFBN0IsQ0FBcEIsQ0FIUztBQUlqQmpDLEVBQUFBLEdBQUcsRUFBRTZCLHNCQUFVQyxNQUFWLENBQWlCQyxVQUpMO0FBS2pCekIsRUFBQUEsUUFBUSxFQUFFdUIsc0JBQVVLLElBTEg7QUFNakJoQyxFQUFBQSxLQUFLLEVBQUUyQixzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUMsTUFBWCxFQUFtQkQsc0JBQVVJLE1BQTdCLENBQXBCLENBTlU7QUFPakJ0QyxFQUFBQSxPQUFPLEVBQUVrQyxzQkFBVU0sS0FBVixDQUFnQjtBQUN2QnRDLElBQUFBLElBQUksRUFBRWdDLHNCQUFVQyxNQURPO0FBRXZCaEMsSUFBQUEsVUFBVSxFQUFFK0Isc0JBQVVDLE1BRkM7QUFHdkIvQixJQUFBQSxTQUFTLEVBQUU4QixzQkFBVUk7QUFIRSxHQUFoQjtBQVBRLEM7O2dCQURBdkMsZSxrQkFlRztBQUNwQk8sRUFBQUEsTUFBTSxFQUFFLEtBRFk7QUFFcEJDLEVBQUFBLEtBQUssRUFBRSxLQUZhO0FBR3BCSSxFQUFBQSxRQUFRLEVBQUUsS0FIVTtBQUlwQkYsRUFBQUEsR0FBRyxFQUFFLEVBSmUsQ0FLcEI7O0FBTG9CLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q2FjaGVJbWFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRlc3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICByb290OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcm9vdE1hcmdpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHRocmVzaG9sZDogUHJvcFR5cGVzLm51bWJlclxuICAgIH0pXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IFwiMTAwXCIsXG4gICAgd2lkdGg6IFwiMTAwXCIsXG4gICAgdGVzdGFibGU6IGZhbHNlLFxuICAgIGFsdDogXCJcIlxuICAgIC8vIG9wdGlvbnMgaXMgYnVpbHQgYWxyZWFkeSBubyBuZWVkIGZvciBkZWZhdWx0IHByb3BzXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgcHJvcFZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRlUHJvcHMoKTtcbiAgICBpZiAodHlwZW9mIHByb3BWYWxpZGF0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQbGVhc2UgcHJvdmlkZSBjb3JyZWN0IHByb3AgdHlwZSBmb3IgJHtwcm9wVmFsaWRhdGlvbn1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAgIHRoaXMubGF6eUxvYWQsXG4gICAgICAgIHRoaXMuYnVpbGRPcHRpb25zXG4gICAgICApO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlKTtcbiAgICB9XG4gIH1cblxuICBidWlsZE9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgICByZXR1cm4ge1xuICAgICAgICByb290OiBudWxsLFxuICAgICAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICAgICAgdGhyZXNob2xkOiAxLjAsXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBzZXQgdGhlIGRlZmF1bHQgcHJvcHMgZm9yIGNvbXBvbmVudHMgdGhhdCBvbmx5IGltcGxlbWVudCBzb21lIGFuZCBub3QgYWxsXG4gICAgcmV0dXJuIHtcbiAgICAgIHJvb3Q6IG9wdGlvbnMucm9vdCxcbiAgICAgIHJvb3RNYXJnaW46IG9wdGlvbnMucm9vdE1hcmdpbixcbiAgICAgIHRocmVzaG9sZDogb3B0aW9ucy50aHJlc2hvbGQsXG4gICAgfTtcbiAgfTtcblxuICB2YWxpZGF0ZVByb3BzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc3JjLCBoZWlnaHQsIHdpZHRoLCBjbGFzc05hbWUsIGFsdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIHRvZG8gdmFsaWRhdGUgb3B0aW9ucyBmb3Igcm9vdCwgcm9vdE1hcmdpbiwgYW5kIHRocmVzaG9sZFxuXG4gICAgaWYgKGlzTmFOKGhlaWdodCB8fCB3aWR0aCkpIHJldHVybiAnaGVpZ2h0JztcbiAgICBlbHNlIGlmICh0eXBlb2YgY2xhc3NOYW1lICE9PSAnc3RyaW5nJykgcmV0dXJuICdjbGFzc05hbWUnO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBhbHQgIT09ICdzdHJpbmcnKSByZXR1cm4gJ2FsdCc7XG4gICAgZWxzZSBpZiAoIXNyYykgcmV0dXJuICdzcmMnO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgdGVzdGFibGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0ZXN0YWJsZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gdGVzdGFibGU7XG4gIH07XG5cbiAgbGF6eUxvYWQgPSBlbnRyaWVzID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIC8vIHRvZ2dsZSB0aGUgbWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQgZm9yIGRldmVsb3BtZW50IHB1cnBvc2VzXG4gICAgICAgIC8vIHVzZSB0aGlzIHRvIGNoZWNrIHdoZXRoZXIgb3Igbm90IHRoZSBpbWFnZSB3YXMgbG9hZGVkIGRlcGVuZGluZyBvbiB0aGUgaW50ZXJzZWN0aW9uIGVsZW1lbnRzIGhpdFxuICAgICAgICBpZiAodGhpcy50ZXN0YWJsZSgpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdJbnRlcnNlY3Rpb24gSGl0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW1nID0gZW50cnkudGFyZ2V0O1xuICAgICAgICBjb25zdCBzcmMgPSBpbWcuZ2V0QXR0cmlidXRlKCdkYXRhLWxhenknKTtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3JjLCBjbGFzc05hbWUsIGFsdCwgaGVpZ2h0LCB3aWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGRhdGEtbGF6eT17c3JjfVxuICAgICAgICAgIGFsdD17YWx0fVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==