import Image from 'next/image';

const BackGroundStars =({ children })=> {
    return(
        <div className="relative">
            <Image 
                className="z-0"            
                src="icons/stars.svg"
                alt='stars'
                priority
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }} // optional
            />
            <div className="z-10 absolute top-0 left-0 w-full">{children}</div>
        </div>
    );
}

export default BackGroundStars;