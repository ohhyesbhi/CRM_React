


import { ArcElement, Chart as ChartJS, Legend,Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {AiOutlineThunderbolt} from "react-icons/ai";
import {BsFillPencilFill } from "react-icons/bs";
import {GoIssueClosed} from "react-icons/go";
import {HiOutlineDotsCircleHorizontal} from "react-icons/hi";
import {ImBlocked} from "react-icons/im";

// go GoIssueClosed
// ai AiOutlineThunderbolt
import Card from "../components/Card";
import Useticket from "../hooks/Useticket";
import Homelayout from "../layouts/Homelayout";





function Home() {
  const [ticketsState] = Useticket();
console.log(ticketsState.ticketDistribution,"state");
  // pie chart implementation
  
   ChartJS.register(ArcElement, Tooltip, Legend);

   const data = {
    labels: ['open', 'progress', 'resolved', 'onhold', 'cancelled'],
    datasets: [
      {
        label: '# Number of tickets',
        data: [ticketsState.ticketDistribution.open, ticketsState.ticketDistribution.inProgress,ticketsState.ticketDistribution.resolved,ticketsState.ticketDistribution.onHold,ticketsState.ticketDistribution.cancelled],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          
        ],
        borderWidth: 1,
      },
    ],
  };


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
         background='rgba(54, 162, 235, 0.2)' fontColor="text-white" borderColor="border-y-fuchsia-400">
         <AiOutlineThunderbolt className="inline"/><span className="ml-2">Progress</span>
        </Card>

        <Card 
         status = {Math.floor((ticketsState.ticketDistribution.resolved/ticketsState.downloadedTickets.length)*100) }
         quantity = {ticketsState.ticketDistribution.resolved}
         cardText = "resolved"
        background="rgba(255, 206, 86, 0.2)" fontColor="text-white" borderColor="border-y-black">
         <GoIssueClosed className="inline"/><span className="ml-2">Resolved</span>
        </Card>

        
        <Card 
         status={Math.floor((ticketsState.ticketDistribution.onHold/ticketsState.downloadedTickets.length)*100)}
         quantity={ticketsState.ticketDistribution.onHold}
         cardText = "onHold"
        background="rgba(75, 192, 192, 0.2)" fontColor="text-white" borderColor="border-y-lime-200">
         <HiOutlineDotsCircleHorizontal className="inline"/><span className="ml-2">Onhold</span>
        </Card>

        <Card 
         status={Math.floor((ticketsState.ticketDistribution.cancelled/ticketsState.downloadedTickets.length)*100) }
         quantity={ticketsState.ticketDistribution.cancelled}
         cardText = "cancelled"
         background="rgba(153, 102, 255, 0.2)" fontColor="text-white"  borderColor="border-y-lime-700 mt-8">
         <ImBlocked className="inline"/><span className="ml-2">Cancelled</span>
        </Card>

   </div>

   <div className='w-[73rem] mt-10 flex flex-row justify-center'>
    <div className='w-[30rem]'>
    <Pie className='text-center' style={{width:"500px",height:"500px"}} data={data} />
    </div>
     
   </div>


 </Homelayout>

 </>
);
}

export default Home;
