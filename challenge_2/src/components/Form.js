class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      JSONdata: {},
    }

    this.storeInput = this.storeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/', this.state.JSONdata)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  storeInput(event) {
    this.setState({
      JSONdata: event.target.value
    })
  }

  render() {
    return (
      <form>
        <label>JSON data:</label>
        <input type = 'textarea' onChange = {this.storeInput}/>
        <button onClick = {this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default Form;