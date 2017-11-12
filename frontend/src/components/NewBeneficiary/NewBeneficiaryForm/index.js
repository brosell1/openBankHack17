import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  'column-count': '2',
  'padding-right': '28%',
  'padding-left': '28%',
  'position': 'absolute',
  'top': '50%',
  'transform': 'translateY(-50%)'
};
const gap = {
  'margin-bottom': '1em'
};

class NewBeneficiaryForm extends Component {
  render() {
    return (
      <div className="NewBeneficiaryForm" style={styles}>
          <TextField style={gap} type="text" hintText="Asset Class" id="asset_class" />
          <TextField style={gap} type="text" hintText="Asset Type" id="asset_type" />
          <TextField style={gap} type="text" hintText="Beneficiary Name" id="person" />
          <TextField style={gap} type="text" hintText="Company Name" id="company" />
          <TextField style={gap} type="text" hintText="IBAN" id="iban" />
          <TextField style={gap} type="text" hintText="Bic_swift" id="bic_swift" />
          <TextField style={gap} type="text" hintText="Sort code" id="uk_sort_code" />
          <RaisedButton onClick={this.props.handleSnackBar} style={gap} backgroundColor="#c34433" labelColor="#fff" fullWidth label="Create" />
      </div>
    );
  }
}

export default NewBeneficiaryForm;
