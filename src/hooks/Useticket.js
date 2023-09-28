import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { filterTickets,getAllTicketsforTheUser } from "../Redux/slice/TicketSlice";

function Useticket(){
  const authState = useSelector((state) => state.auth);
  const ticketsState = useSelector((state) => state.tickets);
 
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
console.log(authState.token,"token");

  async function loadTickets() {
    if(ticketsState.downloadedTickets.length == 0) {
   const response =   await dispatch(getAllTicketsforTheUser());
   console.log("response",response);
  }
  if(searchParams.get("status")) {
  const response =  dispatch(filterTickets(searchParams.get("status")));
  console.log(response,"browser");
}  else{
  await dispatch(getAllTicketsforTheUser());
}  
// const response =   await dispatch(getAllTicketsforTheUser());
// console.log("response",response);
  }

  useEffect(()=>{
    loadTickets();
  },[authState.token, searchParams.get("status")]);

  return [ticketsState];
}

export default Useticket;