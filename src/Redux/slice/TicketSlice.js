import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../helpers/axiosInstance";


const initialState = {
    downloadedTickets : [],
    ticketList : [],
    ticketDistribution : {
        open : 0,
        inProgress : 0,
        resolved : 0,
        onHold : 0,
        cancelled : 0
    }
};

export const getAllTicketsforTheUser = createAsyncThunk('tickets/getAllTicketsforTheUser',async()=>{

 try {
    const response =await axiosInstance.get("getMyAssignedTickets",{
        headers:{
            "x-access-token": localStorage.getItem('token')
        }
    });

    return response;
 } catch (error) {
    console.log(error);
 }
});

const ticketSlice = createSlice({
   name:'tickets',
   initialState,
   reducers : {
    filterTickets : (state,action)=>{
      const arr = state.downloadedTickets.filter((ticket)=>(ticket != null));
      state.ticketList =  arr.filter((ticket)=> (ticket.status == action.payload) );
    }
   },
   extraReducers : (builder) =>{
         builder.addCase(getAllTicketsforTheUser.fulfilled,(state , action) =>{
           const newArr = action.payload.data.result.filter((element)=>element != null);
          action.payload.data.result = newArr;
          
            if(!action?.payload?.data) return ;
            state.ticketList = action?.payload?.data?.result;
            state.downloadedTickets = action?.payload?.data?.result ;
            const tickets = action?.payload?.data?.result;
            state.ticketDistribution =  {
                open: 0,
                inProgress: 0,
                resolved: 0,
                onHold: 0,
                cancelled: 0
            };
            tickets.forEach((ticket)=>{ 
                state.ticketDistribution[ticket.status] =  state.ticketDistribution[ticket.status] + 1;
                
            });
         } );
   }
});

export const{ filterTickets } = ticketSlice.actions; 
export default ticketSlice.reducer;