import React, { Component } from 'react';

// import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  valign: {
    'vertical-align': 'top',
    display: 'inline-block',
    height: '72px'
  }
}

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
        <Paper zDepth={2} style={{margin: '0 10vw', padding: '10px', backgroundColor: '#c34433'}}>
                <div style={style.flex}><SelectField child={style.valign} onChange={this.handleChange} floatingLabelText="Account From">
                  {/* {beneficiaries} */}
                  {items}
                </SelectField>
                <TextField style={style.valign} hintText="Amount"></TextField>
                <SelectField child={style.valign} floatingLabelText="Account To">
                  {/* {accounts} */}
                  {/* <MenuItem primaryText="bumbo" />
                  <MenuItem primaryText="bumbo" />
                  <MenuItem primaryText="bumbo" /> */}
                  {items}
                </SelectField></div>
                <TextField fullWidth={true} hintText="Reference"></TextField>
                <div style={style.flex}><RaisedButton label="Submit" /></div>
        </Paper>
      </div>
    );
  }
}

export default NewTransactionForm;
