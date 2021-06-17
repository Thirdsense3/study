export default function ChangePassword() {
  return (
    <div class="card-body">
      <div class="myaccount-info-wrapper">
        <div class="account-info-wrapper">
          <h4>Change Password</h4>
          <h5>Your Password</h5>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="billing-info">
              <label>Password</label>
              <input type="password" />
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="billing-info">
              <label>Password Confirm</label>
              <input type="password" />
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
