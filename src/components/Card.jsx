import { useNavigate } from "react-router-dom";


function Card({cardText,children,status = 0 , quantity = 50 , fontColor = "text-white" , background = "rgba(255, 99, 132, 0.2)"}) {
  
  const navigator = useNavigate();

  function onClickCard(){
         navigator(`/dashboard?status=${cardText}`);
  }

  return (
 <>
  <div className={` mt-7 w-64 h-52  cursor-pointer rounded-md flex flex-col justify-start items-center py-8`}
       onClick={()=>onClickCard()}
       style={{backgroundColor:background}}
  >
     
     <div className={`${fontColor} text-2xl mb-4`}>
       {children}
     </div>

     <div className="divider bg-black h-0.15 rounded"></div> 

     <div className="flex flex-row gap-8 justify-center w-full ">
          <div className={`text-6xl ${fontColor} font-semibold`}>
           {quantity}
          </div>

          <div >
            <div className={`radial-progress ${fontColor}`} style={{"--value":status,"--size":"5rem","--thickness": "7px"}}> {status?status:0}%</div> 
          </div> 

     </div>
    

  </div>
 </>
  );
}

export default Card;
