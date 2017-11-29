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

  constructor(props) {
    super();
    this.state = {
      fromValue: 1,
      toValue: 1
    };
  }
  
  handleFromChange = (event, index, value) => {
    this.setState({fromValue: value});
  }

  handleToChange = (event, index, value) => {
    this.setState({toValue: value});
  }

  render(props) {

    const fromItems = [
      <MenuItem key={1} value={1} primaryText="From-1" />,
      <MenuItem key={2} value={2} primaryText="From-2" />,
      <MenuItem key={3} value={3} primaryText="From-3" />,
      <MenuItem key={4} value={4} primaryText="From-4" />,
      <MenuItem key={5} value={5} primaryText="From-5" />,
      <MenuItem key={6} value={6} primaryText="From-6" />,
    ]
    const toItems = [
      <MenuItem key={1} value={1} primaryText="To-1" />,
      <MenuItem key={2} value={2} primaryText="To-2" />,
      <MenuItem key={3} value={3} primaryText="To-3" />,
      <MenuItem key={4} value={4} primaryText="To-4" />,
      <MenuItem key={5} value={5} primaryText="To-5" />,
      <MenuItem key={6} value={6} primaryText="To-6" />,
    ]
    // const beneficiaries = this.props.beneficiaries.map((item, ind) => {
    //   <MenuItem value={item._id} primaryText={item.name} key={ind} />
    // })
    // const accounts = this.props.ledgers.map((item, ind) => {
    //   <MenuItem value={item._id} primaryText={item.name} key={ind} />
    // })
    return (
      <div className="NewTransactionForm">
        <Paper zDepth={1} style={{margin: '3em 10vw', padding: '1em 5em'}}>
                <div style={style.flex}><SelectField child={style.valign} value={this.state.fromValue} onChange={this.handleFromChange} floatingLabelText="Account From">
                  {/* {beneficiaries} */}
                  {fromItems}
                </SelectField>
                <TextField type="number" style={style.valign} hintText="Amount"></TextField>
                <SelectField child={style.valign} value={this.state.toValue} onChange={this.handleToChange} floatingLabelText="Account To">
                  {/* {accounts} */}
                  {/* <MenuItem primaryText="bumbo" />
                  <MenuItem primaryText="bumbo" />
                  <MenuItem primaryText="bumbo" /> */}
                  {toItems}
                </SelectField></div>
                <TextField style={{'margin-bottom': '1em'}} fullWidth={true} hintText="Reference"></TextField>
                <div style={style.flex}><RaisedButton onClick={this.props.handleSnackBar} label="Submit" backgroundColor="#c34433" labelColor="#fff" /></div>

        </Paper>
      </div>
    );
  }
}

export default NewTransactionForm;
