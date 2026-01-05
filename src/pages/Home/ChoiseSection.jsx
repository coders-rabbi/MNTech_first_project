import image01 from '../../assets/image/image-3.jpg';
import image02 from '../../assets/image/Image02.jpg'
import image03 from '../../assets/image/Image01.jpg'

const ChoiseSection = () => {
    return (
        <div className=' '>

            <div className='flex justify-center items-center text-center mb-10 mt-14'>
                <hr className=' bg-amber-500 h-3.5 text-3xl' />
                <div>
                    <h1 className='text-4xl font-bold font-serif'>Editor's Choice</h1>
                    <p className='font-serif text-gray-500'>Articles of The Day</p>
                </div>
                <hr className=' bg-amber-500 h-3.5 text-3xl' />
            </div>

            {/* Card items */}

            <div className='grid grid-cols-3  justify-items-center '>
                <div className="card bg-base-100 w-96 shadow-sm items-center">
                    <figure>
                        <img
                            src={image03}
                            alt="Image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xs text-gray-500 uppercase font-bold">
                            Design
                        </h2>
                        <p className='text-xl font-semibold font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, possimus.</p>
                        <div>
                            <p className='font-serif'>27 Jun 2025</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={image01} alt="Image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xs text-gray-500 uppercase font-bold">
                            Design
                        </h2>
                        <p className='text-xl font-semibold font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, possimus.</p>
                        <div>
                            <p className='font-serif'>27 Jun 2025</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={image02} alt="Image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xs text-gray-500 uppercase font-bold">
                            Design
                        </h2>
                        <p className='text-xl font-semibold font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, possimus.</p>
                        <div>
                            <p className='font-serif'>27 Jun 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoiseSection;