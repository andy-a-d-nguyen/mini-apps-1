import AccountForm from './AccountForm.js';
import AddressForm from './AddressForm.js';


// checkout main component
// checkout button
  // render form on click
// next button
// store user input as an item
class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // userInfo: {},
      userInfo: [],
      showAccountForm: false,
      showAddressForm: false
    }

    this.renderAccountForm = this.renderAccountForm.bind(this);
    this.addUserInfo = this.addUserInfo.bind(this);
    this.renderAddressForm = this.renderAddressForm.bind(this);
    // this.addAddrInfo = this.addAddrInfo.bind(this);
  }

  addUserInfo(info) {
    console.log('running');
    const updatedUserInfo = Object.assign({}, this.state.userInfo, info);
    this.setState({userInfo: updatedUserInfo});
    // this.setState({userInfo: [...this.state.userInfo, info]});
  }

  // addAddrInfo(info) {
  //   const updatedAddrInfo = Object.assign({}, this.state.userInfo, info);
  //   this.setState({userInfo: updatedAddrInfo});
  // }

  renderAccountForm(event) {
    // event.preventDefault();
    this.setState({
      showAccountForm: true
    })
  }

  renderAddressForm(event) {
    event.preventDefault();
    this.setState({
      showAddressForm: true
    })
  }

  render() {
    return (
      <div>
        <button type = 'button' onClick = {this.renderAccountForm}>Checkout</button>
        {this.state.showAccountForm ? <AccountForm addUserInfo = {this.addUserInfo} renderAddressForm = {this.renderAddressForm}/> : null}
        {this.state.showAddressForm ? <AddressForm addUserInfo = {this.addUserInfo} /> : null}
      </div>
    );
  }
}

export default Checkout;