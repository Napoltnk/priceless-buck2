import React, { Component } from "react";

class Rezervacija extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ime: "",
      prezime: "",
      datum: "",
      predano: false,
    };
  }

  render() {
    return (
      <div>
        <h2>📅 Rezervacija stola</h2>

        <label>Ime: </label>
        <input
          type="text"
          onChange={(e) => this.setState({ ime: e.target.value })}
        />
        <br />
        <br />

        <label>Prezime: </label>
        <input
          type="text"
          onChange={(e) => this.setState({ prezime: e.target.value })}
        />
        <br />
        <br />

        <label>Datum: </label>
        <input
          type="date"
          onChange={(e) => this.setState({ datum: e.target.value })}
        />
        <br />
        <br />

        <button onClick={() => this.setState({ predano: true })}>
          Rezerviraj
        </button>

        {this.state.predano && (
          <div>
            <h3>✅ Rezervacija uspješna!</h3>
            <p>
              Ime: {this.state.ime} {this.state.prezime}
            </p>
            <p>Datum: {this.state.datum}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Rezervacija;
