import React, { Component } from 'react';

class NewBeneficiaryForm extends Component {
  render() {
    return (
      <div className="NewBeneficiaryForm">
          <label for="asset_class">Asset Class:</label>
          <input type="text" class="form-control" id="asset_class" />
          <label for="asset_type">Asset Type:</label>
          <input type="text" class="form-control" id="asset_type" />
          <label for="person">Beneficiary Name:</label>
          <input type="text" class="form-control" id="person" />
          <label for="company">Company Name:</label>
          <input type="text" class="form-control" id="company" />
          <label for="iban">IBAN:</label>
          <input type="text" class="form-control" id="iban" />
          <label for="bic_swift">BIC SWIFT:</label>
          <input type="text" class="form-control" id="bic_swift" />
          <label for="uk_sort_code">Sort Code:</label>
          <input type="text" class="form-control" id="uk_sort_code" />
      </div>
    );
  }
}

export default NewBeneficiaryForm;
