class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <label>JSON data:</label>
        <input type = 'textarea'/>
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;