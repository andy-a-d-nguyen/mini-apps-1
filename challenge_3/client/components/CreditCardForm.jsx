class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creditCardNum: '',
      expiryDate: '',
      CVV: '',
      billingZipCode: ''
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
          Credit Card Number:
          <input type = 'text' name = 'creditCardNum' value = {this.state.creditCardNum} onChange = {this.storeInput}/>
        </label>
        <label>
          Expiry Date:
          <input type = 'text' name = 'expiryDate' value = {this.state.expiryDate} onChange = {this.storeInput}/>
        </label>
        <label>
          CVV:
          <input type = 'text' name = 'CVV' value = {this.state.CVV} onChange = {this.storeInput}/>
        </label>
        <label>
          Billing Zip Code:
          <input type = 'text' name = 'billingZipCode' value = {this.state.billingZipCode} onChange = {this.storeInput}/>
        </label>
        <button>Confirm</button>
      </form>
    )
  }
}

export default CreditCardForm;