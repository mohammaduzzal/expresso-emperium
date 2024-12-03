import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser,setUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email,password)
        .then(res=>{
          const user = res.user
          setUser(user)
          const lastSignInTime = res?.user?.metadata?.lastSignInTime
          const loginInfo = {email,lastSignInTime}
          fetch('http://localhost:5000/users', {
            method: "PATCH",
            headers:{
              "content-type" : "application/json"
            },
            body: JSON.stringify(loginInfo)
          })
          .then(res => res.json())
          .then(() =>{
            // Redirect to the desired route or home if no prior location is specified
            const from = location.state?.from || '/'
            navigate(from, {replace : true})
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Login  successfully!",
              showConfirmButton: false,
              timer: 1500
            });
          })
           

        })
        .catch(err =>{
          Swal.fire({
            icon: "error",
            title: "Signup failed!",
            text:  err.message || "Something went wrong.",
          
          });
        })
      

    }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
            
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>New to coffee store ? <Link className="text-red-600 underline" to='/signUp'>Signup or register</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;