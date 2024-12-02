import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const {createUser,setUser,loginWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){
          Swal.fire({
            icon: "error",
            title: "Weak Password",
            text: "Password must be at least 6 characters long!",
          });
          return
        }
        createUser(email,password)
        .then(res=> {
          const user = res.user
          setUser(user)
          const createdAt = res?.user?.metadata?.creationTime;
          const newUser = {name,email,createdAt}
          // save user to the db 
          fetch('http://localhost:5000/users',{
            method: "POST",
            headers:{
              "content-type" : "application/json"
            },
            body: JSON.stringify(newUser)
          })
          .then(res=> res.json())
          .then(data =>{
            if(data.insertedId){
              navigate('/')
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Account created successfully!",
                showConfirmButton: false,
                timer: 1500
              });

            }
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

    const handleGoogleLogin = () =>{
      loginWithGoogle()
      .then(res =>{
        const user = res.user
        setUser(user)
        const createdAt = res?.user?.metadata?.creationTime;
        const newUser = {
          name: user.displayName,
          email: user.email,
          createdAt
        }
        // save user to db
        fetch('http://localhost:5000/users',{
          method:"Post",
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify(newUser)
        })
        .then(res =>res.json())
        .then(()=>{
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
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-rancho font-bold">Create an account!</h1>
          </div>
          <div>
          <button onClick={handleGoogleLogin} className="btn btn-accent bg-transparent hover:bg-gray-400">Signin with Google</button>
          </div>
          <p className="text-center font-raleway">Or</p>
          <div className="card bg-base-100 w-full max-w-sm shrink-0">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
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
                <button className="btn btn-primary">Signup</button>
              </div>
              <p>Already have an account ? <Link to='/signIn' className="text-red-600 underline">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;