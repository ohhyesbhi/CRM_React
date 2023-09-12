
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// go GoIssueClosed
// ai AiOutlineThunderbolt
import { getAllTicketsforTheUser } from "../Redux/slice/TicketSlice";



function Dashboard() {
    const [array,setArray] = useState([]);
  
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();
  
  
    async function loadTickets() {
      const response = await dispatch(getAllTicketsforTheUser());
      setArray(response.payload.data.result);
    }
  
    useEffect(()=>{
      loadTickets();
    },[authState.token]);

  return (
    <>
    <p className="text-6xl text-center mt-7">All Tasks</p>
<div className="flex justify-center mt-7">
    
<div className="bg-gray-700 overflow-x-auto w-4/5 ">
  <table className="element-to-print table">
    {/* head */}
    <thead>
      <tr >
        <th className="text-2xl text-center text-slate-900">id</th>
        <th className="text-2xl text-center text-slate-900">Title</th>
        <th className="text-2xl text-center text-slate-900">Description</th>
        <th className="text-2xl text-center text-slate-900">Priority</th>
        <th className="text-2xl text-center text-slate-900">Status</th>
      </tr>
    </thead>

{
  array.map((items)=>{
    return (
      <tbody key={items._id}>
        <td className="text-center">{items._id}</td>
        <td className="text-center">{items.title}</td>
        <td className="text-center">{items.description}</td>
        <td className="text-center">{items.ticketPriority}</td>
        <td className="text-center">{items.status}</td>
      </tbody>
    );
  })
}

  </table>
</div>
    
</div>  

    </>
  );
}

export default Dashboard;
