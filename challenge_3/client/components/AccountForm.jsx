class AccountForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
      // accountInfo: {}
    }

    this.storeInput = this.storeInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  storeInput(event) {
    this.setState({[event.target.name]: event.target.value});
    // this.setState(this.state.accountInfo[event.target.name] = event.target.value);
  }

  submitInput(event) {
    // event.preventDefault();
    console.log(event);
    this.props.addUserInfo(this.state);
    // this.props.addUserInfo(this.state.accountInfo);
  }

  render() {
    return (
      <form onSubmit = {this.props.renderAddressForm}>
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
        <button onClick = {this.submitInput}>Next</button>
      </form>
    )
  }
}
// on click of button, invoke a function passed down from Checkout to render address form
export default AccountForm;