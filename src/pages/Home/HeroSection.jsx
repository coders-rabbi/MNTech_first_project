import React from 'react';
import "./HeroSection.css"

const HeroSection = () => {
    return (
        <div className='heroBanner flex justify-center items-center'>
            <div>
                <div className='flex justify-center'>
                    <button className="btn btn-xs uppercase text-center border-0  bg-black text-white hover:bg-[#fee198] hover:text-black mb-2">Creative</button>

                </div>
                <h1 className=' text-4xl text-white hover:text-[#fee198] font-serif font-bold text-center'>Amazing Fashion Photography <br /> from Milan Week</h1>
                <div className='flex gap-3 mt-8 justify-center '>
                    <h4 className='text-[10px] font-bold text-white font-serif hover:text-[#fee198]'>
                        By Shelly Moore
                    </h4>

                    <h4 className='text-[10px] font-bold text-white font-serif hover:text-[#fee198]'>26 Mar 20207</h4>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;