export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full backdrop-blur-md p-4 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-lg font-semibold">
                    LOGO
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#home" className=" hover:text-gray-900">Home</a>
                    </li>
                    <li>
                        <a href="#individual" className=" hover:text-gray-900">About</a>
                    </li>
                    <li>
                        <a href="#section3" className=" hover:text-gray-900">Projects</a>
                    </li>
                    <li>
                        <a href="#section4" className=" hover:text-gray-900">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}