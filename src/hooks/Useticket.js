import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { filterTickets,getAllTicketsforTheUser } from "../Redux/slice/TicketSlice";

function Useticket(){
  const authState = useSelector((state) => state.auth);
  const ticketsState = useSelector((state) => state.tickets);

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  async function loadTickets() {
   console.log(searchParams.get("status"),"status");
    

     if(ticketsState.downloadedTickets.length == 0) {
      await dispatch(getAllTicketsforTheUser());
     }
     if(searchParams.get("status") == null){
      await dispatch(getAllTicketsforTheUser());
     }
     if(searchParams.get("status") != null) {
      dispatch(filterTickets(searchParams.get("status")));
      } 
    // else{
    //           await dispatch(getAllTicketsforTheUser());
    //  } 
  }

  useEffect(()=>{
    if(authState.role != "admin"){
    loadTickets();
    }
  },[authState.token, searchParams.get("status")]);

  return [ticketsState];
}

export default Useticket;