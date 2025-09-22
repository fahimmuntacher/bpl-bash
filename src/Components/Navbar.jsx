import Navlog from "../assets/logo.png"
const Navbar = () => {
    return (
        <div>
        <div class="navbar bg-base-100 shadow-sm">
            <div class="flex-1">
                <img src={Navlog} alt=""/>
            </div>
            <div class="flex-none">
                <button class="btn btn-ghost text-2xl border-2 border-red-500">
                    <span>$</span><span>600000000</span>
                </button>

            </div>
            </div>
        </div>
    );
};

export default Navbar;