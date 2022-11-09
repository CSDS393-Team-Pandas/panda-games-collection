import { Link } from "react-router-dom";

const ProfileEdit = () => {
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
                <div class="row mt-2">
                    <div class="col-md-12"><label class="labels">Full Name</label><input type="text" class="form-control" placeholder="full name" value=""></input></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value=""></input></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <label class="labels">Password</label><input type="text" class="form-control" placeholder="enter a new password" value=""></input>
                    </div>
                    </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <label class="labels">Verificationn</label><input type="text" class="form-control" placeholder="enter your new password again" value=""></input>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <label class="labels">Game Perferences</label>
                        <input type="text" class="form-control" placeholder="enter your new password again" value="">
            
                        </input>
                    </div>
                </div>
            </div>
                <div class="mt-5 text-center">
                <Link to='/Profile' className="btn">
                            Save Profile
                    </Link>
                </div>
        </div>
        </div>
    </div>
)
};

export default ProfileEdit;
