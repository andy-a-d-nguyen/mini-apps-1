class AccountForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.storeInput = this.storeInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  storeInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  submitInput(event) {
    event.preventDefault();
    this.props.addUserInfo(this.state);
  }

  render() {
    return (
      <form onSubmit = {this.submitInput, this.props.renderAddressForm}>
        <label>
          Name:
          <input type = 'text' name = 'name' value = {this.state.name} onChange = {this.storeInput}/>
        </label>
        <label>
          Email:
          <input type = 'email' name = 'email' value = {this.state.email} onChange = {this.storeInput}/>
        </label>
        <label>
          Password:
          <input type = 'password' name = 'password' value = {this.state.password} onChange = {this.storeInput}/>
        </label>
        <button>Next</button>
      </form>
    )
  }
}
// on click of button, invoke a function passed down from Checkout to render address form
export default AccountForm;