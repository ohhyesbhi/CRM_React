
import DataTable,{createTheme} from 'react-data-table-component';
import {FiDownload} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';

import Useticket from '../hooks/Useticket';
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

function Dashboard() {



  const [response] = Useticket();

  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'}); 

  

const columns = [
    {
        name: 'Id',
        selector: row => row._id,
    },
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Description',
        selector: row => row.description,
    },
    {
        name: 'Priority',
        selector: row => row.ticketPriority,
        sortable:true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable:true,
        reorder : true
    },
];

const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
            fontSize: '28px'
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};


createTheme('solarized', {
    text: {
      primary: 'white',
      secondary: 'white',
    },
    background: {
      default: '#374151',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');


  return (
<>
    <div className="flex flex-col justify-center  items-center mb-8">
      <div className="flex flex-row justify-center mb-8">
        <p className="text-6xl text-center mt-6">All Tasks</p>
        <FiDownload className=" text-3xl text-center mt-10 ml-4 cursor-pointer"  onClick={()=> toPDF()}/>
      </div>
    <div ref={targetRef} className='w-[90rem]   flex flex-row justify-center items-center'>
      
      <DataTable 
           className='h-full'
           columns={columns}
           data={response.ticketList}
           expandableRows
           expandableRowsComponent={ExpandedComponent}
          //  customStyles={customStyles}
           theme="solarized"
        />
   
    </div>
   <Link to="/home"><p className='text-center underline mt-4'>Go back</p></Link>
    
    </div>
    


</>
     
  );
}

export default Dashboard;
