class AccountForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.storeInput = this.storeInput.bind(this);
  }

  storeInput(event) {
    // event.preventDefault();
    // event.persist();
    // console.log(event.target);
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form>
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

export default AccountForm;