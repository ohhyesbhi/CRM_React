


import {AiOutlineThunderbolt} from "react-icons/ai";
import {BsFillPencilFill } from "react-icons/bs";
import {GoIssueClosed} from "react-icons/go";
import {ImBlocked} from "react-icons/im";

// go GoIssueClosed
// ai AiOutlineThunderbolt
import Card from "../components/Card";
import Useticket from "../hooks/Useticket";
import Homelayout from "../layouts/Homelayout";
function Home() {


  const [ticketsState] = Useticket();

return (
 <>
 <Homelayout>
   <div className="flex flex-row flex-wrap justify-around mt-10">
        
        <Card status = {ticketsState.ticketDistribution.open/ticketsState.downloadedTickets.length }
         quantity = {ticketsState.ticketDistribution.open}
         cardText = "open"
        >
         <BsFillPencilFill className="inline"/><span className="ml-2">Open</span>
        </Card>

        <Card 
         status = {Math.floor((ticketsState.ticketDistribution.inProgress/ticketsState.downloadedTickets.length)*100) }
         quantity = {ticketsState.ticketDistribution.inProgress}
         cardText = "inProgress"
         background="bg-lime-300" fontColor="text-black" borderColor="border-y-fuchsia-400">
         <AiOutlineThunderbolt className="inline"/><span className="ml-2">Progress</span>
        </Card>

        <Card 
         status = {Math.floor((ticketsState.ticketDistribution.resolved/ticketsState.downloadedTickets.length)*100) }
         quantity = {ticketsState.ticketDistribution.resolved}
         cardText = "resolved"
        background="bg-gray-400" fontColor="text-black" borderColor="border-y-black-400">
         <GoIssueClosed className="inline"/><span className="ml-2">Resolved</span>
        </Card>

        
        <Card 
         status={Math.floor((ticketsState.ticketDistribution.onHold/ticketsState.downloadedTickets.length)*100)}
         quantity={ticketsState.ticketDistribution.onHold}
         cardText = "onHold"
        background="bg-fuchsia-400" fontColor="text-white" borderColor="border-y-lime-700">
         <ImBlocked className="inline"/><span className="ml-2">Onhold</span>
        </Card>

        <Card 
         status={Math.floor((ticketsState.ticketDistribution.cancelled/ticketsState.downloadedTickets.length)*100) }
         quantity={ticketsState.ticketDistribution.cancelled}
         cardText = "cancelled"
         background="bg-fuchsia-400 mt-8" fontColor="text-white" borderColor="border-y-lime-700">
         <ImBlocked className="inline"/><span className="ml-2">Cancelled</span>
        </Card>
   </div>
 </Homelayout>

 </>
);
}

export default Home;
