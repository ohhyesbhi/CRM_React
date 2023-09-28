

function CreateTicket() {
  return (
   <>
   <div className='flex flex-col h-[90vh] justify-around items-center'>
    <div className='flex flex-row w-full justify-center'>
        <p className=' mr-6'>Ticket title</p>
        <input type="text" placeholder="Ticket title" className="input input-bordered input-sm w-full max-w-xs" />
    </div>

    <div className='flex flex-row w-full justify-center'>
    <p className=' mr-6'>Ticket Description</p>
       <input type="text" placeholder="Ticket Description" className="input input-bordered input-sm w-full max-w-xs" />
    </div>

    <div className='flex flex-row w-full justify-center'>
    <p className=' mr-12'>Ticket Status</p>
    <input type="text" placeholder="Status" className="input input-bordered input-sm w-full max-w-xs" />
    </div>

    <div className='flex flex-row w-full justify-center'>
    <p className=' mr-12'>Ticket Priority</p>
    <input type="text" placeholder="Priority" className="input input-bordered input-sm w-full max-w-xs" />
    </div>

    <div className='flex flex-row w-full justify-center'>
    <p className=' mr-6'>Ticket assigned to</p>
    <input type="text" placeholder="Email" className="input input-bordered input-sm w-full max-w-xs" />
      </div>

      
    <div className='flex flex-row w-full justify-center'>
    <p className=' mr-6'>Client name</p>
    <input type="text" placeholder="Client name" className="input input-bordered input-sm w-full max-w-xs" />
      </div>



   </div>
     </>
  );
}

export default CreateTicket;
