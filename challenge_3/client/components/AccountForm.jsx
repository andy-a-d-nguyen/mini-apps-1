class AccountForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <label>
          Name:
        </label>
        <input type = 'text' name = 'name'/>
        <label>
          Email:
        </label>
        <input type = 'email' value = 'email'/>
        <label>
          Password:
        </label>
        <input type = 'password' value = 'hidden'/>
      </form>
    )
  }
}

export default AccountForm;