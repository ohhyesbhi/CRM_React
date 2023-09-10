

import {AiOutlineThunderbolt} from "react-icons/ai";
import {BsFillPencilFill } from "react-icons/bs";
import {GoIssueClosed} from "react-icons/go";
import {ImBlocked} from "react-icons/im";

// go GoIssueClosed
// ai AiOutlineThunderbolt
import Card from "../components/Card";
import Homelayout from "../layouts/Homelayout";


function Home() {



return (
 <>
 <Homelayout>
   {/* <p>hello</p>
   <p>hello</p>
   <p>hello</p>
   <p>hello</p> */}
   <div className="flex flex-row justify-around mt-10">
        <Card>
         <BsFillPencilFill className="inline"/><span className="ml-2">Open</span>
        </Card>

        <Card background="bg-lime-300" fontColor="text-black" borderColor="border-y-fuchsia-400">
         <AiOutlineThunderbolt className="inline"/><span className="ml-2">Progress</span>
        </Card>

        <Card background="bg-gray-400" fontColor="text-black" borderColor="border-y-black-400">
         <GoIssueClosed className="inline"/><span className="ml-2">Open</span>
        </Card>

        
        <Card background="bg-fuchsia-400" fontColor="text-white" borderColor="border-y-lime-700">
         <ImBlocked className="inline"/><span className="ml-2">Blocked</span>
        </Card>
   </div>
 </Homelayout>
 </>
);
}

export default Home;
