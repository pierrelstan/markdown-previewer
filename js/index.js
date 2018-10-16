var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      textarea:
      " Heading \n ======= \n Sub-heading \n----------- \n ### Another deeper heading \n Paragraphs are separated by a blank line. \n Text attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\n\n  Shopping list: \n\n * apples \n * oranges \n * pears \n\n\n Numbered list: \n\n 1. apples \n 2. oranges \n 3. pears" };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.onChange = _this.onChange.bind(_this);return _this;
  }_createClass(App, [{ key: "handleChange", value: function handleChange(
    event) {
      this.setState({
        textarea: event.target.value });

    } }, { key: "onChange", value: function onChange(

    event) {
      this.setState({
        textarea: event.target.value });

    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement(Header, null),
          React.createElement("div", { className: "row" },
            React.createElement("div", { className: " col-sm-6 col-md-6" },
              React.createElement("h1", {
                  style: {
                    backgroundColor: "white",
                    color: "#993D44",
                    textAlign: "center" } }, "Input"),




              React.createElement("textarea", {
                className: "form-control rounded-0",
                rows: "15",
                type: "text",
                onChange: this.onChange,
                value: this.state.textarea,
                style: {
                  backgroundColor: "white",
                  fontSize: 14,
                  display: "block",
                  marginBottom: 10 } })),




            React.createElement("div", { className: "col-sm-6 col-md-6" },
              React.createElement("h1", {
                  style: {
                    backgroundColor: "white",
                    color: "#993D44",
                    textAlign: "center" } }, "Preview"),





              React.createElement("div", {
                style: { border: "1px solid white" },
                dangerouslySetInnerHTML: {
                  __html: marked(this.state.textarea) } })))));






    } }]);return App;}(React.Component);


var Header = function Header() {
  return (
    React.createElement("div", { style: { backgroundColor: "#993D44", marginBottom: 25 } },
      React.createElement("header", null,
        React.createElement("h1", {
            style: {
              textAlign: "center",
              color: "white",
              fontSize: 70 },

            className: "titre" }, "Reactjs Markdown"))));






};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));