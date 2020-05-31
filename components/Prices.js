// Here we define the default currency "USD"

class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {

    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">Bitcoin rate for {this.props.bpi[this.state.currency].description} : 
          <span className="badge badge-primary">{this.props.bpi[this.state.currency].code}</span> 
          {/* Here we insert the actual rate  */}
          <strong>{this.props.bpi[this.state.currency].rate}</strong>
        </li>
        </ul>
        <br/>

        {/* We dont want to manually change the code every time we need a different currency. So we use the select and onChange event below.  */}
        <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
