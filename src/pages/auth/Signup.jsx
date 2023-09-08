

function Signup() {
  return (
   <>
    <div className='flex justify-center w-full h-[95vh] items-center'> 
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="flex justify-center card-title text-4xl mb-4">Signup</h2>
            <input type="text" placeholder="user id" className="input input-bordered w-full max-w-xs" />
            <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs" />
            <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
            
            <details className="dropdown mb-4">
                 <summary className="m-1 btn bg-[black] ">User type</summary>
                 <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                     <li><a>Customer</a></li>
                     <li><a>Engineer</a></li>
                 </ul>
            </details>

            <div className="flex justify-center card-actions justify-end">
            <button className="btn btn-active btn-accent mt-4">Submit</button>
            </div>
          </div>
        </div>
      </div>  
   </>
  );
}

export default Signup;



// {
// "name": "xyz",
// "password": "$2b$11$bz7E05RVBbdYp87OPaoRueCEjj3PeYXbjrg.KT8WbokNBCZi1f7tW",
// "email": "abhishek@gmail.com",
// "clientName": "sanket",
// "userType": "customer",
// "userStatus": "approved",
// "ticketsCreated": [],
// "ticketsAssigned": [],
// "_id": "64f97714840f26f2c8628c09",
// "createdAt": "2023-09-07T07:09:08.403Z",
// "updatedAt": "2023-09-07T07:09:08.403Z",
// "__v": 0
// }