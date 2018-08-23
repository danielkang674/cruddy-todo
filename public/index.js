class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topoos: [],
      userInpoo: ''
    };
    this.typePoo = this.typePoo.bind(this);
    this.sendPoo = this.sendPoo.bind(this);
  }
  typePoo(event){
    // console.log("this is ", this);
    this.setState({userInpoo: event.target.value});
  }
  sendPoo(event){
    event.preventDefault();
    console.log("this is the event", event);
    console.log('trying to send poo');

  }
  render() {
    return (
      <div>
        <h1> Poodo </h1>
        <Inpoo typePoo={this.typePoo} sendPoo ={this.sendPoo}/>
      </div>
    );
  }
}


class Inpoo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
  }
  render() {
    return (
      <form>
        <label>
          Topoo: 
    <input id="pooput" type="text" name="name" onChange={(event)=> { this.props.typePoo(event); }} />
        </label>
        <button id ="poobutton" onClick={(event)=>{ this.props.sendPoo(event); }}>PoopSender </button>
      </form>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));

