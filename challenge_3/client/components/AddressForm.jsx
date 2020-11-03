class AddressForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addrLineOne: '',
      addrLineTwo: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNum: ''
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
      <form onSubmit = {this.submitInput}>
        <label>
          Address Line 1:
          <input type = 'text' name = 'addrLineOne' value = {this.state.addrLineOne} onChange = {this.storeInput}/>
        </label>
        <label>
          Address Line 2:
          <input type = 'text' name = 'addrLineTwo' value = {this.state.addrLineTwo} onChange = {this.storeInput}/>
        </label>
        <label>
          City:
          <input type = 'text' name = 'city' value = {this.state.city} onChange = {this.storeInput}/>
        </label>
        <label>
          State:
          <input type = 'text' name = 'state' value = {this.state.state} onChange = {this.storeInput}/>
        </label>
        <label>
          Zip Code:
          <input type = 'text' name = 'zipCode' value = {this.state.zipCode} onChange = {this.storeInput}/>
        </label>
        <label>
          Phone Number:
          <input type = 'text' name = 'phoneNum' value = {this.state.phoneNum} onChange = {this.storeInput}/>
        </label>
        <button onClick = {this.props.renderCreditCardForm}>Next</button>
      </form>
    )
  }
}

export default AddressForm;