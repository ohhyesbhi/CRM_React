

function Card({children,status = 50 , quantity = 50 , fontColor = "text-white" , background = "bg-primary",borderColor = "border-y-orange-300"}) {
  return (
 <>
  <div className={`border-b-8 ${borderColor} w-64 h-52 ${background} rounded-md flex flex-col justify-start items-center py-8`}>
     
     <div className={`${fontColor} text-2xl mb-4`}>
       {children}
     </div>

     <div className="divider bg-black h-0.15 rounded"></div> 

     <div className="flex flex-row gap-8 justify-center w-full ">
          <div className={`text-6xl ${fontColor} font-semibold`}>
           {quantity}
          </div>

          <div >
            <div className={`radial-progress ${fontColor}`} style={{"--value":status,"--size":"5rem","--thickness": "7px"}}> {status}%</div> 
          </div> 

     </div>
    

  </div>
 </>
  );
}

export default Card;
