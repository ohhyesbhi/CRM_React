import { BsFillMenuButtonWideFill } from "react-icons/bs";


function Home() {
  return (
 <>
 <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="drawer-button">
      <BsFillMenuButtonWideFill className="ml-4 mt-5 w-6 h-6 cursor-pointer"/>
    </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
 </>
  );
}

export default Home;
