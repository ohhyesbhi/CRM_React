

function Login() {
  return (
    <>
      <div className='flex justify-center w-full h-[95vh] items-center'> 
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="flex justify-center card-title text-4xl mb-4">Login</h2>
            <input type="text" placeholder="user id" className="input input-bordered w-full max-w-xs" />
            <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
    
            <div className="flex justify-center card-actions justify-end">
            <button className="btn btn-active btn-accent mt-4">Submit</button>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
}

export default Login;
