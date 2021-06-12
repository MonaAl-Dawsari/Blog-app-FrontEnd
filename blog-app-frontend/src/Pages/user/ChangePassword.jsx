import { useLocation } from "react-router";
import Sidebar from "../../Components/Sidebar";
// import Posts from '../../Components/Posts'

export default function Home() {
  return (
    <>
      <div className="container my-5">
        <form>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Current Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              New Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-danger">
            Update
          </button>
        </form>
      </div>
    </>
  );
}
