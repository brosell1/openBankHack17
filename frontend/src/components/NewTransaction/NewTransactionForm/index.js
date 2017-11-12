import React, { Component } from 'react';

// import Divider from 'material-ui/Divider';
// import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class NewTransactionForm extends Component {

  handleChange = (event, index, value) => this.setState({value});

  render(props) {

    const items = [
      <MenuItem key={1} value={1} primaryText="Bumbo" />,
      <MenuItem key={2} value={2} primaryText="Dumbo" />,
      <MenuItem key={3} value={3} primaryText="Rumbo" />,
    ]
    // const beneficiaries = this.props.beneficiaries.map((item, ind) => {
    //   <MenuItem value={item._id} primaryText={item.name} key={ind} />
    // })
    // const accounts = this.props.ledgers.map((item, ind) => {
    //   <MenuItem value={item._id} primaryText={item.name} key={ind} />
    // })
    return (
      <div className="NewTransactionForm">
        {/* <Paper zDepth={2}> */}
          <SelectField onChange={this.handleChange} floatingLabelText="Account From">
            {/* {beneficiaries} */}
            {items}
          </SelectField>
          <TextField hintText="Amount"></TextField>
          <SelectField floatingLabelText="Account To">
            {/* {accounts} */}
            {/* <MenuItem primaryText="bumbo" />
            <MenuItem primaryText="bumbo" />
            <MenuItem primaryText="bumbo" /> */}
            {items}
          </SelectField><br></br>
          <TextField hintText="Reference"></TextField>
        {/* </Paper> */}
      </div>
    );
  }
}

export default NewTransactionForm;
