import React, { Component } from 'react';


const styles = {
  color: '#9e9e9e',
  textAlign: 'center'
}


class TransactionsListBox extends Component {
  render() {
    return (
      <div className="TransactionsListBox">
        <h1> Transactions History </h1>
        {/* add {this.props.iban} below title */}
        <h4 style={styles}> IBAN - 453216874333 </h4>

      </div>
    );
  }
}

export default TransactionsListBox;
