import Logo from '../../assets/images/Blog/piggyvest_blog_logo.svg';
import { IoSearchOutline } from "react-icons/io5";

const Blognav = () => {
  return (
    <div className='max-w-[1240px] mx-auto'>
        <nav className="w-full flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex justify-between items-center gap-26">
            <img src={Logo} alt="PiggyVest Blog Logo" className="h-10 w-[170px]" />

            <ul className="flex gap-10 items-center font-[500]">
            <li><a href="#money" className="">Money</a></li>
            <li><a href="#save" className="">Save</a></li>
            <li><a href="#invest" className=""> Invest</a></li>
            <li><a href="#life" className="">Life</a></li>
            </ul>
            </div>
            

            <div className="flex  items-center gap-4 p-[10px]">
                <span className='text-blue-700 text-[27px] '><IoSearchOutline/></span>
                <button className='bg-blue-700 text-white py-[8px] px-[12px] rounded-[10px]' >Start Saving</button>
            </div>
        </nav>
    </div>
  )
}

export default Blognav