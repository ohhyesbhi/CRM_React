import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../helpers/axiosInstance";


const initialState = {
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
    const response = axiosInstance.get("getMyAssignedTickets",{
        headers:{
            "x-access-token": localStorage.getItem('token')
        }
    });

    return await response;
 } catch (error) {
    console.log(error);
 }
});

const ticketSlice = createSlice({
   name:'tickets',
   initialState,
   reducers : {},
   extraReducers : (builder) =>{
         builder.addCase(getAllTicketsforTheUser.fulfilled,(state , action) =>{
            if(!action?.payload?.data) return ;
            state.ticketList = action?.payload?.data?.result;
            const tickets = action?.payload?.data?.result;
            state.ticketDistribution =  {
                open: 0,
                inProgress: 0,
                resolved: 0,
                onHold: 0,
                cancelled: 0
            };
            tickets.forEach(ticket=>{
                state.ticketDistribution[ticket.status] =  state.ticketDistribution[ticket.status] + 1;
            });
         } );
   }
});


export default ticketSlice.reducer;