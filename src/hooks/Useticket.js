import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllTicketsforTheUser } from "../Redux/slice/TicketSlice";



function Useticket(){
    const authState = useSelector((state) => state.auth);
  const ticketsState = useSelector((state) => state.tickets);
  const dispatch = useDispatch();


  async function loadTickets() {
          await dispatch(getAllTicketsforTheUser());
  }

  useEffect(()=>{
    if(ticketsState.length == 0){
        loadTickets();
    }
    loadTickets();
  },[authState.token]);

  return [ticketsState];
}

export default Useticket;