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
      <MenuItem key={1} value={1} primaryText="Example-1" />,
      <MenuItem key={2} value={2} primaryText="Example-2" />,
      <MenuItem key={3} value={3} primaryText="Example-3" />,
      <MenuItem key={4} value={4} primaryText="Example-4" />,
      <MenuItem key={5} value={5} primaryText="Example-5" />,
      <MenuItem key={6} value={6} primaryText="Example-6" />,
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
                <div style={style.flex}><SelectField child={style.valign} onChange={this.handleChange} floatingLabelText="Account From">
                  {/* {beneficiaries} */}
                  {items}
                </SelectField>
                <TextField type="number" style={style.valign} hintText="Amount"></TextField>
                <SelectField child={style.valign} floatingLabelText="Account To">
                  {/* {accounts} */}
                  {/* <MenuItem primaryText="bumbo" />
                  <MenuItem primaryText="bumbo" />
                  <MenuItem primaryText="bumbo" /> */}
                  {items}
                </SelectField></div>
                <TextField style={{'margin-bottom': '1em'}} fullWidth={true} hintText="Reference"></TextField>
                <div style={style.flex}><RaisedButton onClick={this.props.handleSnackBar} label="Submit" backgroundColor="#c34433" labelColor="#fff" /></div>

        </Paper>
      </div>
    );
  }
}

export default NewTransactionForm;
