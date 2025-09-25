import Navlog from "../assets/logo.png"
const Navbar = ({availableBalance}) => {
    return (
        <div>
        <div class="navbar bg-base-100 shadow-sm flex-col sm:flex-row">
            <div className="flex-1">
                <img src={Navlog} alt=""/>
            </div>
            <div class="flex-none">
                <button class="btn btn-ghost text-2xl border-2 border-red-500">
                    <span>${availableBalance}</span>
                </button>

            </div>
            </div>
        </div>
    );
};

export default Navbar;