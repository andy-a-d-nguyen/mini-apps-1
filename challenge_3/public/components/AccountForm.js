class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.storeInput = this.storeInput.bind(this);
  }

  storeInput(event) {
    // event.preventDefault();
    // event.persist();
    // console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "Name:", /*#__PURE__*/React.createElement("input", {
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
    })), /*#__PURE__*/React.createElement("button", null, "Next"));
  }

}

export default AccountForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FjY291bnRGb3JtLmpzeCJdLCJuYW1lcyI6WyJBY2NvdW50Rm9ybSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzdG9yZUlucHV0IiwiYmluZCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsV0FBTixTQUEwQkMsS0FBSyxDQUFDQyxTQUFoQyxDQUEwQztBQUN4Q0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsRUFESztBQUVYQyxNQUFBQSxLQUFLLEVBQUUsRUFGSTtBQUdYQyxNQUFBQSxRQUFRLEVBQUU7QUFIQyxLQUFiO0FBTUEsU0FBS0MsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixJQUFyQixDQUFsQjtBQUNEOztBQUVERCxFQUFBQSxVQUFVLENBQUNFLEtBQUQsRUFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxTQUFLQyxRQUFMLENBQWM7QUFBQyxPQUFDRCxLQUFLLENBQUNFLE1BQU4sQ0FBYVAsSUFBZCxHQUFxQkssS0FBSyxDQUFDRSxNQUFOLENBQWFDO0FBQW5DLEtBQWQ7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsK0NBQ0UseURBRUU7QUFBTyxNQUFBLElBQUksRUFBRyxNQUFkO0FBQXFCLE1BQUEsSUFBSSxFQUFHLE1BQTVCO0FBQW1DLE1BQUEsS0FBSyxFQUFJLEtBQUtWLEtBQUwsQ0FBV0MsSUFBdkQ7QUFBNkQsTUFBQSxRQUFRLEVBQUksS0FBS0c7QUFBOUUsTUFGRixDQURGLGVBS0UsMERBRUU7QUFBTyxNQUFBLElBQUksRUFBRyxPQUFkO0FBQXNCLE1BQUEsSUFBSSxFQUFHLE9BQTdCO0FBQXFDLE1BQUEsS0FBSyxFQUFJLEtBQUtKLEtBQUwsQ0FBV0UsS0FBekQ7QUFBZ0UsTUFBQSxRQUFRLEVBQUksS0FBS0U7QUFBakYsTUFGRixDQUxGLGVBU0UsNkRBRUU7QUFBTyxNQUFBLElBQUksRUFBRyxVQUFkO0FBQXlCLE1BQUEsSUFBSSxFQUFHLFVBQWhDO0FBQTJDLE1BQUEsS0FBSyxFQUFJLEtBQUtKLEtBQUwsQ0FBV0csUUFBL0Q7QUFBeUUsTUFBQSxRQUFRLEVBQUksS0FBS0M7QUFBMUYsTUFGRixDQVRGLGVBYUUsMkNBYkYsQ0FERjtBQWlCRDs7QUF0Q3VDOztBQXlDMUMsZUFBZVQsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFjY291bnRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9XG5cbiAgICB0aGlzLnN0b3JlSW5wdXQgPSB0aGlzLnN0b3JlSW5wdXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN0b3JlSW5wdXQoZXZlbnQpIHtcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgPGlucHV0IHR5cGUgPSAndGV4dCcgbmFtZSA9ICduYW1lJyB2YWx1ZSA9IHt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlID0ge3RoaXMuc3RvcmVJbnB1dH0vPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgRW1haWw6XG4gICAgICAgICAgPGlucHV0IHR5cGUgPSAnZW1haWwnIG5hbWUgPSAnZW1haWwnIHZhbHVlID0ge3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlID0ge3RoaXMuc3RvcmVJbnB1dH0vPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgPGlucHV0IHR5cGUgPSAncGFzc3dvcmQnIG5hbWUgPSAncGFzc3dvcmQnIHZhbHVlID0ge3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlID0ge3RoaXMuc3RvcmVJbnB1dH0vPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uPk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudEZvcm07Il19