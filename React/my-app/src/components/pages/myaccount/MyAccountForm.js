import EditAccount from './EditAccount';
import SignUp from './SignUp';
import ChangePassword from './ChangePassword';
import ModifyAddress from './ModifyAddress';

export default function MyAccountForm() {
  return (
    <div class="myaccount-area pb-80 pt-100">
      <div class="container">
        <div class="row">
          <div class="ml-auto mr-auto col-lg-9">
            <div class="myaccount-wrapper">
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item single-my-account mb-20 card">
                  <div
                    class="panel-heading card-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <h3 class="panel-title">
                        <span>1 .</span> Edit your account information{' '}
                      </h3>
                    </button>
                  </div>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <SignUp />
                  </div>
                </div>
                <div class="accordion-item single-my-account mb-20 card">
                  <div
                    class="panel-heading card-header"
                    id="panelsStayOpen-headingTwo"
                  >
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      <h3 class="panel-title">
                        <span>2 .</span> Change your password
                      </h3>
                    </button>
                  </div>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse hide"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <ChangePassword />
                  </div>
                </div>
                <div class="accordion-item single-my-account mb-20 card">
                  <div
                    class="panel-heading card-header"
                    id="panelsStayOpen-headingThree"
                  >
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      <h3 class="panel-title">
                        <span>3 .</span> Modify your address book entries{' '}
                      </h3>
                    </button>
                  </div>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse hide"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <ModifyAddress />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
