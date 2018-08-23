'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      topoos: [],
      userInpoo: ''
    };
    _this.typePoo = _this.typePoo.bind(_this);
    _this.sendPoo = _this.sendPoo.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'typePoo',
    value: function typePoo(event) {
      // console.log("this is ", this);
      this.setState({ userInpoo: event.target.value });
    }
  }, {
    key: 'sendPoo',
    value: function sendPoo(event) {
      event.preventDefault();
      console.log("this is the event", event);
      console.log('trying to send poo');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          ' Poodo '
        ),
        React.createElement(Inpoo, { typePoo: this.typePoo, sendPoo: this.sendPoo })
      );
    }
  }]);

  return App;
}(React.Component);

var Inpoo = function (_React$Component2) {
  _inherits(Inpoo, _React$Component2);

  function Inpoo(props) {
    _classCallCheck(this, Inpoo);

    var _this2 = _possibleConstructorReturn(this, (Inpoo.__proto__ || Object.getPrototypeOf(Inpoo)).call(this, props));

    _this2.state = {
      userInput: ''
    };
    return _this2;
  }

  _createClass(Inpoo, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'form',
        null,
        React.createElement(
          'label',
          null,
          'Topoo:',
          React.createElement('input', { id: 'pooput', type: 'text', name: 'name', onChange: function onChange(event) {
              _this3.props.typePoo(event);
            } })
        ),
        React.createElement(
          'button',
          { id: 'poobutton', onClick: function onClick(event) {
              _this3.props.sendPoo(event);
            } },
          'PoopSender '
        )
      );
    }
  }]);

  return Inpoo;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInN0YXRlIiwidG9wb29zIiwidXNlcklucG9vIiwidHlwZVBvbyIsImJpbmQiLCJzZW5kUG9vIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJJbnBvbyIsInByb3BzIiwidXNlcklucHV0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFERztBQUVYQyxpQkFBVztBQUZBLEtBQWI7QUFJQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhQyxJQUFiLE9BQWY7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFQWTtBQVFiOzs7OzRCQUNPRSxLLEVBQU07QUFDWjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFDTCxXQUFXSSxNQUFNRSxNQUFOLENBQWFDLEtBQXpCLEVBQWQ7QUFDRDs7OzRCQUNPSCxLLEVBQU07QUFDWkEsWUFBTUksY0FBTjtBQUNBQyxjQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNOLEtBQWpDO0FBQ0FLLGNBQVFDLEdBQVIsQ0FBWSxvQkFBWjtBQUVEOzs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLDRCQUFDLEtBQUQsSUFBTyxTQUFTLEtBQUtULE9BQXJCLEVBQThCLFNBQVUsS0FBS0UsT0FBN0M7QUFGRixPQURGO0FBTUQ7Ozs7RUEzQmVRLE1BQU1DLFM7O0lBK0JsQkMsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwrR0FDWEEsS0FEVzs7QUFFakIsV0FBS2hCLEtBQUwsR0FBYTtBQUNYaUIsaUJBQVc7QUFEQSxLQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUNRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUVKLHlDQUFPLElBQUcsUUFBVixFQUFtQixNQUFLLE1BQXhCLEVBQStCLE1BQUssTUFBcEMsRUFBMkMsVUFBVSxrQkFBQ1gsS0FBRCxFQUFVO0FBQUUscUJBQUtVLEtBQUwsQ0FBV2IsT0FBWCxDQUFtQkcsS0FBbkI7QUFBNEIsYUFBN0Y7QUFGSSxTQURGO0FBS0U7QUFBQTtBQUFBLFlBQVEsSUFBSSxXQUFaLEVBQXdCLFNBQVMsaUJBQUNBLEtBQUQsRUFBUztBQUFFLHFCQUFLVSxLQUFMLENBQVdYLE9BQVgsQ0FBbUJDLEtBQW5CO0FBQTRCLGFBQXhFO0FBQUE7QUFBQTtBQUxGLE9BREY7QUFTRDs7OztFQWpCaUJPLE1BQU1DLFM7O0FBcUIxQkksU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdG9wb29zOiBbXSxcbiAgICAgIHVzZXJJbnBvbzogJydcbiAgICB9O1xuICAgIHRoaXMudHlwZVBvbyA9IHRoaXMudHlwZVBvby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VuZFBvbyA9IHRoaXMuc2VuZFBvby5iaW5kKHRoaXMpO1xuICB9XG4gIHR5cGVQb28oZXZlbnQpe1xuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyBcIiwgdGhpcyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcklucG9vOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuICBzZW5kUG9vKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgZXZlbnRcIiwgZXZlbnQpO1xuICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gc2VuZCBwb28nKTtcblxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPiBQb29kbyA8L2gxPlxuICAgICAgICA8SW5wb28gdHlwZVBvbz17dGhpcy50eXBlUG9vfSBzZW5kUG9vID17dGhpcy5zZW5kUG9vfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuY2xhc3MgSW5wb28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcklucHV0OiAnJ1xuICAgIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFRvcG9vOiBcbiAgICA8aW5wdXQgaWQ9XCJwb29wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9eyhldmVudCk9PiB7IHRoaXMucHJvcHMudHlwZVBvbyhldmVudCk7IH19IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gaWQgPVwicG9vYnV0dG9uXCIgb25DbGljaz17KGV2ZW50KT0+eyB0aGlzLnByb3BzLnNlbmRQb28oZXZlbnQpOyB9fT5Qb29wU2VuZGVyIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cblxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuIl19