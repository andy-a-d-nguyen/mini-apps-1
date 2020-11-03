class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '' // accountInfo: {}

    };
    this.storeInput = this.storeInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  storeInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    }); // this.setState(this.state.accountInfo[event.target.name] = event.target.value);
  }

  submitInput(event) {
    // event.preventDefault();
    // console.log(event);
    this.props.addUserInfo(this.state); // this.props.addUserInfo(this.state.accountInfo);
  }

  render() {
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: this.props.renderAddressForm
    }, /*#__PURE__*/React.createElement("label", null, "Name:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "name",
      value: this.state.name,
      onChange: this.storeInput
    })), /*#__PURE__*/React.createElement("label", null, "Email:", /*#__PURE__*/React.createElement("input", {
      type: "email",
      name: "email",
      value: this.state.email,
      onChange: this.storeInput
    })), /*#__PURE__*/React.createElement("label", null, "Password:", /*#__PURE__*/React.createElement("input", {
      type: "password",
      name: "password",
      value: this.state.password,
      onChange: this.storeInput
    })), /*#__PURE__*/React.createElement("button", {
      onClick: this.submitInput
    }, "Next"));
  }

} // on click of button, invoke a function passed down from Checkout to render address form


export default AccountForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FjY291bnRGb3JtLmpzeCJdLCJuYW1lcyI6WyJBY2NvdW50Rm9ybSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzdG9yZUlucHV0IiwiYmluZCIsInN1Ym1pdElucHV0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiYWRkVXNlckluZm8iLCJyZW5kZXIiLCJyZW5kZXJBZGRyZXNzRm9ybSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsV0FBTixTQUEwQkMsS0FBSyxDQUFDQyxTQUFoQyxDQUEwQztBQUN4Q0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsRUFESztBQUVYQyxNQUFBQSxLQUFLLEVBQUUsRUFGSTtBQUdYQyxNQUFBQSxRQUFRLEVBQUUsRUFIQyxDQUlYOztBQUpXLEtBQWI7QUFPQSxTQUFLQyxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUFuQjtBQUNEOztBQUVERCxFQUFBQSxVQUFVLENBQUNHLEtBQUQsRUFBUTtBQUNoQixTQUFLQyxRQUFMLENBQWM7QUFBQyxPQUFDRCxLQUFLLENBQUNFLE1BQU4sQ0FBYVIsSUFBZCxHQUFxQk0sS0FBSyxDQUFDRSxNQUFOLENBQWFDO0FBQW5DLEtBQWQsRUFEZ0IsQ0FFaEI7QUFDRDs7QUFFREosRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakI7QUFDQTtBQUNBLFNBQUtSLEtBQUwsQ0FBV1ksV0FBWCxDQUF1QixLQUFLWCxLQUE1QixFQUhpQixDQUlqQjtBQUNEOztBQUVEWSxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFDRTtBQUFNLE1BQUEsUUFBUSxFQUFJLEtBQUtiLEtBQUwsQ0FBV2M7QUFBN0Isb0JBQ0UseURBRUU7QUFBTyxNQUFBLElBQUksRUFBRyxNQUFkO0FBQXFCLE1BQUEsSUFBSSxFQUFHLE1BQTVCO0FBQW1DLE1BQUEsS0FBSyxFQUFJLEtBQUtiLEtBQUwsQ0FBV0MsSUFBdkQ7QUFBNkQsTUFBQSxRQUFRLEVBQUksS0FBS0c7QUFBOUUsTUFGRixDQURGLGVBS0UsMERBRUU7QUFBTyxNQUFBLElBQUksRUFBRyxPQUFkO0FBQXNCLE1BQUEsSUFBSSxFQUFHLE9BQTdCO0FBQXFDLE1BQUEsS0FBSyxFQUFJLEtBQUtKLEtBQUwsQ0FBV0UsS0FBekQ7QUFBZ0UsTUFBQSxRQUFRLEVBQUksS0FBS0U7QUFBakYsTUFGRixDQUxGLGVBU0UsNkRBRUU7QUFBTyxNQUFBLElBQUksRUFBRyxVQUFkO0FBQXlCLE1BQUEsSUFBSSxFQUFHLFVBQWhDO0FBQTJDLE1BQUEsS0FBSyxFQUFJLEtBQUtKLEtBQUwsQ0FBV0csUUFBL0Q7QUFBeUUsTUFBQSxRQUFRLEVBQUksS0FBS0M7QUFBMUYsTUFGRixDQVRGLGVBYUU7QUFBUSxNQUFBLE9BQU8sRUFBSSxLQUFLRTtBQUF4QixjQWJGLENBREY7QUFpQkQ7O0FBN0N1QyxDLENBK0MxQzs7O0FBQ0EsZUFBZVgsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFjY291bnRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICAgIC8vIGFjY291bnRJbmZvOiB7fVxuICAgIH1cblxuICAgIHRoaXMuc3RvcmVJbnB1dCA9IHRoaXMuc3RvcmVJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3VibWl0SW5wdXQgPSB0aGlzLnN1Ym1pdElucHV0LmJpbmQodGhpcyk7XG4gIH1cblxuICBzdG9yZUlucHV0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLmFjY291bnRJbmZvW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBzdWJtaXRJbnB1dChldmVudCkge1xuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xuICAgIHRoaXMucHJvcHMuYWRkVXNlckluZm8odGhpcy5zdGF0ZSk7XG4gICAgLy8gdGhpcy5wcm9wcy5hZGRVc2VySW5mbyh0aGlzLnN0YXRlLmFjY291bnRJbmZvKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQgPSB7dGhpcy5wcm9wcy5yZW5kZXJBZGRyZXNzRm9ybX0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBOYW1lOlxuICAgICAgICAgIDxpbnB1dCB0eXBlID0gJ3RleHQnIG5hbWUgPSAnbmFtZScgdmFsdWUgPSB7dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZSA9IHt0aGlzLnN0b3JlSW5wdXR9Lz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEVtYWlsOlxuICAgICAgICAgIDxpbnB1dCB0eXBlID0gJ2VtYWlsJyBuYW1lID0gJ2VtYWlsJyB2YWx1ZSA9IHt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZSA9IHt0aGlzLnN0b3JlSW5wdXR9Lz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFBhc3N3b3JkOlxuICAgICAgICAgIDxpbnB1dCB0eXBlID0gJ3Bhc3N3b3JkJyBuYW1lID0gJ3Bhc3N3b3JkJyB2YWx1ZSA9IHt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZSA9IHt0aGlzLnN0b3JlSW5wdXR9Lz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3RoaXMuc3VibWl0SW5wdXR9Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cbi8vIG9uIGNsaWNrIG9mIGJ1dHRvbiwgaW52b2tlIGEgZnVuY3Rpb24gcGFzc2VkIGRvd24gZnJvbSBDaGVja291dCB0byByZW5kZXIgYWRkcmVzcyBmb3JtXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50Rm9ybTsiXX0=