import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="bg-white">
        <div className="container pl-4">
        <div className="flex items-center justify-between h-12">
            <div className="flex items-center">
                <svg viewBox="0 0 200 200" width="50" height="50">
                    <linearGradient id="grad" gradientTransform="rotate(45)">
                        <stop offset="0%" stop-color="#FF0080" />
                        <stop offset="100%" stop-color="#FF9933" />
                    </linearGradient>
                    <polygon  points="150,5 195,295 15,115" fill="url(#grad)" />
                    <polygon  points="15,50 195,295 15,15" fill="#6527BE" />
                    <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="Ubuntu" font-size="60" font-weight="bold">ૐ</text>
                </svg> 
                <a className="mynav-items active">Home</a>
                <a className="mynav-items">About</a>
                <a className="mynav-items">Contact</a>
            </div>
            {/* <div className=' flex items-end m-0'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 -10 200 200">
                    <g transform="scale(-1, 1) translate(-200, 0)">
                        <polygon points="0,200 175,200 0,0" fill="#f31d33" />
                    </g>
                </svg>
            </div> */}
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
