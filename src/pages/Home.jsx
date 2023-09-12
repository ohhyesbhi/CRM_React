

import { useEffect} from "react";
import {AiOutlineThunderbolt} from "react-icons/ai";
import {BsFillPencilFill } from "react-icons/bs";
import {GoIssueClosed} from "react-icons/go";
import {ImBlocked} from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";

// go GoIssueClosed
// ai AiOutlineThunderbolt
import Card from "../components/Card";
import Homelayout from "../layouts/Homelayout";
import { getAllTicketsforTheUser } from "../Redux/slice/TicketSlice";

function Home() {


  const authState = useSelector((state) => state.auth);
  const ticketsState = useSelector((state) => state.tickets);
  const dispatch = useDispatch();


  async function loadTickets() {
    const response = await dispatch(getAllTicketsforTheUser());
    console.log(response.payload,"response");
  }

  useEffect(()=>{
    loadTickets();
  },[authState.token]);

return (
 <>
 <Homelayout>
   <div className="flex flex-row flex-wrap justify-around mt-10">
        
        <Card status={ticketsState.ticketDistribution.open/ticketsState.ticketList.length }
         quantity={ticketsState.ticketDistribution.open}
        >
         <BsFillPencilFill className="inline"/><span className="ml-2">Open</span>
        </Card>

        <Card 
         status={Math.floor((ticketsState.ticketDistribution.inProgress/ticketsState.ticketList.length)*100) }
         quantity={ticketsState.ticketDistribution.inProgress}
        background="bg-lime-300" fontColor="text-black" borderColor="border-y-fuchsia-400">
         <AiOutlineThunderbolt className="inline"/><span className="ml-2">Progress</span>
        </Card>

        <Card 
         status={Math.floor((ticketsState.ticketDistribution.resolved/ticketsState.ticketList.length)*100) }
         quantity={ticketsState.ticketDistribution.resolved}
        background="bg-gray-400" fontColor="text-black" borderColor="border-y-black-400">
         <GoIssueClosed className="inline"/><span className="ml-2">Resolved</span>
        </Card>

        
        <Card 
         status={Math.floor((ticketsState.ticketDistribution.onHold/ticketsState.ticketList.length)*100)}
         quantity={ticketsState.ticketDistribution.onHold}
        background="bg-fuchsia-400" fontColor="text-white" borderColor="border-y-lime-700">
         <ImBlocked className="inline"/><span className="ml-2">Onhold</span>
        </Card>

        <Card 
         status={Math.floor((ticketsState.ticketDistribution.cancelled/ticketsState.ticketList.length)*100) }
         quantity={ticketsState.ticketDistribution.cancelled}
        background="bg-fuchsia-400 mt-8" fontColor="text-white" borderColor="border-y-lime-700">
         <ImBlocked className="inline"/><span className="ml-2">Cancelled</span>
        </Card>
   </div>
 </Homelayout>

 </>
);
}

export default Home;
