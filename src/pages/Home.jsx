
import { ArcElement, BarElement,CategoryScale, Chart as ChartJS, Legend,LinearScale,LineElement,PointElement,Title,Tooltip} from 'chart.js';
import { useEffect, useState} from 'react';
import { Bar,Line,Pie } from 'react-chartjs-2';
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

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale,PointElement,LineElement,Legend,Title, BarElement);


function Home() {
  const [ticketsState] = Useticket();
console.log(ticketsState,"ticketstate");

  // pie chart implementation
  
  
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

  // line chart implementation




  const [openTickets , setOpenTickets] = useState({});
  const [inProgressTickets , setinProgressTickets] = useState({});
  const [CancelledTickets , setCancelledTickets] = useState({});
  const [resolvedTickets , setResolvedTickets] = useState({});
  const [onholdTickets , setonholdTickets] = useState({});

 
  const lineChartData = {
    labels: Object.keys(openTickets),
    datasets: [
      {
        label: '# Number of open tickets',
        data: Object.values(openTickets),
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
      },
      {
      label: '# Number of inProgress tickets',
      data: Object.values(inProgressTickets),
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      },
      {
        label: '# Number of cancelled tickets',
        data: Object.values(CancelledTickets),
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        },
       {
          label: '# Number of resolved tickets',
          data: Object.values(resolvedTickets),
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
       },
       {
        label: '# Number of onHold tickets',
        data: Object.values(onholdTickets),
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
     }
    ],
  
  };


  useEffect(()=>{
       lineChartTicketsData();
       barChartTicketsData();
  },[ticketsState]);



  function lineChartTicketsData(){

    const currentDate = new Date();
    const tenthDayFromToday = new Date();
    tenthDayFromToday.setDate(currentDate.getDate() - 10);

    if(ticketsState.ticketList.length > 0){

      let openTicketsData = {};
      let inProgressTicketsData = {};
      let cancelledTicketsData = {};
      let resolvedTicketsData = {};
      let onHoldTicketsData = {};

      const daysArr = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

      for(let i = 1 ; i < 7 ; i++){
        const dateObject = new Date ();
       const allDays = daysArr[(dateObject.getDay()+7-i)%7];
        openTicketsData[allDays] = 0 ;
        inProgressTicketsData[allDays] = 0 ;
        cancelledTicketsData[allDays] = 0;
        resolvedTicketsData[allDays] = 0;
        onHoldTicketsData[allDays] = 0;
      }


      ticketsState.ticketList.forEach(ticket=>{
       
        const ticketDate = new Date(ticket.createdAt);
        const day = ticketDate.getDay()-1;
        console.log(day,"day");
        console.log(tenthDayFromToday,ticketDate);
        if( ticket.status == "open" && ticketDate >= tenthDayFromToday ){
          openTicketsData[daysArr[day]] = (!openTicketsData[daysArr[day]]) ? 1 : openTicketsData[daysArr[day]] + 1 ;
        }
       if(  ticket.status == "inProgress" && ticketDate >= tenthDayFromToday  ){
           inProgressTicketsData[daysArr[day]] = (!inProgressTicketsData[daysArr[day]]) ? 1 : inProgressTicketsData[daysArr[day]] + 1 ;
        }
        if(  ticket.status == "cancelled" && ticketDate >= tenthDayFromToday  ){
          cancelledTicketsData[daysArr[day]] = (!cancelledTicketsData[daysArr[day]]) ? 1 : cancelledTicketsData[daysArr[day]] + 1 ;
       }
       if(  ticket.status == "resolved" && ticketDate >= tenthDayFromToday  ){
        resolvedTicketsData[daysArr[day]] = (!resolvedTicketsData[daysArr[day]]) ? 1 : resolvedTicketsData[daysArr[day]] + 1 ;
       }
       if(  ticket.status == "onHold" && ticketDate >= tenthDayFromToday  ){
        onHoldTicketsData[daysArr[day]] = (!onHoldTicketsData[daysArr[day]]) ? 1 : onHoldTicketsData[daysArr[day]] + 1 ;
       }
      });

      console.log(inProgressTicketsData,"jing");

      setOpenTickets(openTicketsData);
      setinProgressTickets(inProgressTicketsData);
      setCancelledTickets(cancelledTicketsData);
      setResolvedTickets(resolvedTicketsData);
      setonholdTickets(onHoldTicketsData);
      console.log(inProgressTicketsData,"pappa");
    }
  }

// bar chart implementation
const [openTicket , setOpenTicket] = useState({});
const [inProgressTicket , setinProgressTicket] = useState({});
const [CancelledTicket , setCancelledTicket] = useState({});
const [resolvedTicket , setResolvedTicket] = useState({});
const [onholdTicket , setonholdTicket] = useState({});


const barChartData = {
  labels: Object.keys(openTicket),
  datasets: [
    {
      label: '# Number of open tickets',
      data: Object.values(openTicket),
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
    },
    {
    label: '# Number of inProgress tickets',
    data: Object.values(inProgressTicket),
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
    },
    {
      label: '# Number of cancelled tickets',
      data: Object.values(CancelledTicket),
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
      },
     {
        label: '# Number of resolved tickets',
        data: Object.values(resolvedTicket),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
     },
     {
      label: '# Number of onhold tickets',
      data: Object.values(onholdTicket),
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
   }
  ],

};

function barChartTicketsData(){
 const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 const date = new Date();

 const index = date.getMonth();
 const startIndex = (index - 6 + 12) % 12;
 let openTicketsData = {};
 let inProgressTicketsData = {};
 let cancelledTicketsData = {};
 let resolvedTicketsData = {};
 let onHoldTicketsData = {};

 for (let i = 0; i <= 6; i++) {
  const index = (startIndex + i) % 12;
  openTicketsData[month[index]] = 0;
  inProgressTicketsData[month[index]] = 0;
  cancelledTicketsData[month[index]] = 0;
  resolvedTicketsData[month[index]] = 0;
  onHoldTicketsData[month[index]] = 0;
}

ticketsState.ticketList.forEach(ticket=>{
 let ticketCreatedMonth = (ticket.createdAt.split("-")[1].split(""));

 if(ticketCreatedMonth[0] == "0"){
     ticketCreatedMonth = ticketCreatedMonth[1] - 1;
}else{
  ticketCreatedMonth = ticketCreatedMonth.join("") - 1;
}
if(ticket.status == "open"){
  openTicketsData[month[ticketCreatedMonth]] += 1;
}
if(ticket.status == "inProgress"){
  inProgressTicketsData[month[ticketCreatedMonth]] += 1;
}
if(ticket.status == "cancelled"){
  cancelledTicketsData[month[ticketCreatedMonth]] += 1;
}
if(ticket.status == "onHold"){
  onHoldTicketsData[month[ticketCreatedMonth]] += 1;
}
if(ticket.status == "resolved"){
  resolvedTicketsData[month[ticketCreatedMonth]] += 1;
}

});
setCancelledTicket(cancelledTicketsData);
setOpenTicket(openTicketsData);
setResolvedTicket(resolvedTicketsData);
setinProgressTicket(inProgressTicketsData);
setonholdTicket(onHoldTicketsData);
}



  return (
 <>
 <Homelayout>
   <div className="flex flex-row flex-wrap justify-around mt-10">
        
        <Card status = {Math.round((ticketsState.ticketDistribution.open/ticketsState.downloadedTickets.length)*100) }
         quantity = {ticketsState.ticketDistribution.open}
         cardText = "open"
        >
         <BsFillPencilFill className="inline"/><span className="ml-2">Open</span>
        </Card>

        <Card 
         status = {Math.round((ticketsState.ticketDistribution.inProgress/ticketsState.downloadedTickets.length)*100) }
         quantity = {ticketsState.ticketDistribution.inProgress}
         cardText = "inProgress"
         background='rgba(54, 162, 235, 0.2)' fontColor="text-white" borderColor="border-y-fuchsia-400">
         <AiOutlineThunderbolt className="inline"/><span className="ml-2">Progress</span>
        </Card>

        <Card 
         status = {Math.round((ticketsState.ticketDistribution.resolved/ticketsState.downloadedTickets.length)*100) }
         quantity = {ticketsState.ticketDistribution.resolved}
         cardText = "resolved"
        background="rgba(255, 206, 86, 0.2)" fontColor="text-white" borderColor="border-y-black">
         <GoIssueClosed className="inline"/><span className="ml-2">Resolved</span>
        </Card>

        
        <Card 
         status={Math.round((ticketsState.ticketDistribution.onHold/ticketsState.downloadedTickets.length)*100)}
         quantity={ticketsState.ticketDistribution.onHold}
         cardText = "onHold"
        background="rgba(75, 192, 192, 0.2)" fontColor="text-white" borderColor="border-y-lime-200">
         <HiOutlineDotsCircleHorizontal className="inline"/><span className="ml-2">Onhold</span>
        </Card>

        <Card 
         status={Math.round((ticketsState.ticketDistribution.cancelled/ticketsState.downloadedTickets.length)*100) }
         quantity={ticketsState.ticketDistribution.cancelled}
         cardText = "cancelled"
         background="rgba(153, 102, 255, 0.2)" fontColor="text-white"  borderColor="border-y-lime-700 mt-8">
         <ImBlocked className="inline"/><span className="ml-2">Cancelled</span>
        </Card>

   </div>

                    


                       {/* pie chart implementation */}
                    <div className='flex justify-around flex-col items-center border h-[80vh] border-white mt-24 cursor-pointer  hover:bg-black'>
                            <p className='text-4xl underline'>Pie chart</p>
                            <div className='w-[27rem]'>
                                <Pie className='text-center' style={{width:"430px",height:"430px"}} data={data} />
                            </div>

                    </div>
        
                      {/* line chart implementation */}
                    <div className='flex justify-around flex-col items-center border h-[80vh]  border-white mt-24 cursor-pointer  hover:bg-black'>
                            <p className='text-4xl underline'>Line chart</p>
                            <div className='w-[60rem]'>
                                <Line data={lineChartData} />       
                             </div>

                    </div>
                    
                     {/* Bar chart implementation */}
                    <div  className='flex justify-around flex-col items-center border h-[80vh] border-white mt-24 mb-5 cursor-pointer   hover:bg-black'>
                             <p className='text-4xl underline'>Bar chart</p>
                             <div className='w-[60rem]'>
                                <Bar data = {barChartData}/>
                             </div>

</div>
      
        
     


  

 </Homelayout>

 </>
);
}

export default Home;
