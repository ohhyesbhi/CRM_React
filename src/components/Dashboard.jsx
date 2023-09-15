
import { useEffect, useState } from "react";
// go GoIssueClosed
// ai AiOutlineThunderbolt
import {FiDownload} from "react-icons/fi";
import { usePDF } from 'react-to-pdf';

import Useticket from "../hooks/Useticket";
import Homelayout from "../layouts/Homelayout";


function Dashboard() {
  const [array,setArray] = useState([]);
  
  const [response] = Useticket();
   
  useEffect(()=>{
  setArray(response.ticketList);
},[response]);

const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});


  return (
    <>
    <Homelayout>
    <div className="flex  flex-row justify-center">
    <p className="text-6xl text-center mt-6">All Tasks</p>
      <FiDownload className=" text-4xl text-center mt-10 ml-4 cursor-pointer" onClick={()=> toPDF()}/>
    </div>
    <div className="flex justify-center mt-7">
    
    <div className="bg-gray-700 overflow-x-auto w-4/5 ">
      <table ref={targetRef} className="element-to-print table">
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
</Homelayout>
    </>
  );
}

export default Dashboard;
