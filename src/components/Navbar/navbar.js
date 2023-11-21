import Link from "next/link"
import { BsSearch } from "react-icons/bs"

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-neutral-300 w-100 h-10 py-3">
                <div className="container m-auto">
                    {/* <div className="btn-navbar border-2 border-white-300 rounded-full flex items-center px-4 py-1">
                    <Link href="#machines" className="w-52 text-center font-bold text-gray-600 hover:text-neutral-400">
                        <div>MACHINES</div>
                    </Link>
                    <button className="btn-search border-2 border-white-300 rounded-full p-2 mx-2">
                        <BsSearch className="m-auto text-gray-600 hover:text-neutral-400" />
                    </button>
                    <Link href="#berries" className="w-52 text-center font-bold text-gray-600 hover:text-neutral-400">
                        <div>BERRIES</div>
                    </Link>
                </div> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar