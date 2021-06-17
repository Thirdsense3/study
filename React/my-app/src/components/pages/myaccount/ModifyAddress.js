export default function ModifyAddress() {
  return (
    <div class="card-body">
      <div class="myaccount-info-wrapper">
        <div class="account-info-wrapper">
          <h4>Address Book Entries</h4>
        </div>
        <div class="entries-wrapper">
          <div class="row">
            <div class="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
              <div class="entries-info text-center">
                <p>John Doe</p>
                <p>Paul Park </p>
                <p>Lorem ipsum dolor set amet</p>
                <p>NYC</p>
                <p>New York</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
              <div class="entries-edit-delete text-center">
                <button class="edit">Edit</button>
                <button>Delete</button>
              </div>
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
