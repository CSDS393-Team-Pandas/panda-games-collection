import { Link } from "react-router-dom";

const ProfileDisplay = () => {
    return (
  <div class="container rounded bg-white mt-5 mb-5">
  <div class="row">
      <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <span class="font-weight-bold">Profile</span>
              <span class="text-black-50">Edit your own profile</span><span> </span></div>
      </div>
      <div class="col-md-5 border-right">
          <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="text-right">Profile Settings</h4>
              </div>
          </div>
          <div class="col-md-20">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-10">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Aaabsn
                    </div>
                  </div>
                </div>
                </div>
        </div>
        <div class="col-md-20">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-10">
                      <h6 class="mb-0">Email ID</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      abc@case.com
                    </div>
                  </div>
                </div>
                </div>
        </div>
        <div class="col-md-20">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-10">
                      <h6 class="mb-0">Game Perferences</h6>
                    </div>
                    <div class="col-sm-10 text-secondary">
                      Here should be a select box from the database
                    </div>
                  </div>
                </div>
                </div>
        </div>
              <div class="mt-5 text-center">
                 <Link to='/ProfileEdit' className="btn">
                        Edit
                 </Link>
              </div>
      </div>
      </div>
  </div>
  )
  };
  
  export default ProfileDisplay;
  