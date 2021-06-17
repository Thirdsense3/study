export default function EditAccount() {
  return (
    <div class="card-body">
      <div class="myaccount-info-wrapper">
        <div class="account-info-wrapper">
          <h4>My Account Information</h4>
          <h5>Your Personal Details</h5>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="billing-info">
              <label>First Name</label>
              <input type="text" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="billing-info">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="billing-info">
              <label>Email Address</label>
              <input type="email" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="billing-info">
              <label>Telephone</label>
              <input type="text" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="billing-info">
              <label>Fax</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="billing-back-btn">
          <div class="billing-btn">
            <button type="submit">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
