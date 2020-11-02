import AccountForm from './AccountForm.js';

// checkout main component
// checkout button
  // render form on click
// next button
// store user input as an item
class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
      showAccountForm: false
    }

    this.renderAccountForm = this.renderAccountForm.bind(this);
    this.addUserInfo = this.addUserInfo.bind(this);
  }

  addUserInfo(info) {
    const updatedUserInfo = Object.assign({}, this.state.userInfo, info);
    this.setState({userInfo: updatedUserInfo});
  }

  renderAccountForm(event) {
    // event.preventDefault();
    this.setState({
      showAccountForm: true
    })
  }

  render() {
    return (
      <div>
        <button type = 'button' onClick = {this.renderAccountForm}>Checkout</button>
        {this.state.showAccountForm ? <AccountForm addUserInfo = {this.addUserInfo}/> : null}
      </div>
    );
  }
}

export default Checkout;