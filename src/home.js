import './App.css';
import { FiArrowRight } from "react-icons/fi";

function home() {
    return (
        <div className='mr-[7%] mt-[7%] ml-[7%] min-h-screen'>
            <div >
                <p className='text-[43px] text-white '>UX , UI Digital Product Designer</p>
            </div>
            <div className='mt-[11%] h-[50%] w-min-screen' >
                <div className='h-[0%] w-inherit grid grid-cols-2 gap-[30px]'>
                    <div>
                        <div className='h-[100%] '>
                            <img src="https://wallpapercave.com/wp/wp9836067.png" alt="" className='bg-cover w-fit-content h-[100%] object-cover' />
                        </div>
                        <p className='text-white anp'><a href="">Project titles</a><FiArrowRight className='mt-[6px] ml-[3px]' /> </p>

                        <p className='text-white anpp'><a href=""> Disciplines</a></p>
                    </div>
                    <div>
                        <div className='h-[100%] '>
                            <img src="https://wallpapercave.com/wp/wp5522572.jpg" alt="" className='bg-cover h-[100%] object-cover' />
                        </div>
                        <p className='text-white anp'><a href="">Project titles</a> <FiArrowRight className='mt-[6px] ml-[3px]' /></p>

                        <p className='text-white anpp'><a href=""> Disciplines</a></p>
                    </div>
                </div>
                <div className='mt-20 grid grid-cols-3 gap-4'>
                    <div>
                        <div className='h-[100%] '>
                            <img src="https://wallpapercave.com/wp/wp7119191.jpg" alt="" className='bg-cover h-[100%] object-cover' />
                        </div>
                        <p className='text-white anp'><a href="">Project titles</a><FiArrowRight className='mt-[6px] ml-[3px]' /> </p>

                        <p className='text-white anpp'><a href=""> Disciplines</a></p>
                    </div>
                    <div>
                        <div className='h-[100%] '>
                            <img src="https://cutewallpaper.org/28/dead-area-desktop-wallpaper/991118083.jpg" alt="" className='bg-cover h-[100%] object-cover' />
                        </div>
                        <p className='text-white anp'><a href="">Project titles</a><FiArrowRight className='mt-[6px] ml-[3px]' /> </p>

                        <p className='text-white anpp'><a href=""> Disciplines</a></p>
                    </div>
                    <div>
                        <div className='h-[100%] '>
                            <img src="https://a-static.besthdwallpaper.com/halloween-is-coming-for-you-wallpaper-1920x1200-18413_6.jpg" alt="" className='bg-cover h-[100%] object-cover' />
                        </div>
                        <p className='text-white anp'><a href="">Project titles</a><FiArrowRight className='mt-[6px] ml-[3px]' /> </p>

                        <p className='text-white anpp'><a href=""> Disciplines</a></p>
                    </div>
                </div>

            </div>
            <div className="w-min-screen h-20  mt-[100px] "> <p className='text-white flex justify-center font-light'><a href="">See all work</a><FiArrowRight className='mt-[6px] ml-[3px]' /></p></div>
        </div>
    )
}
export default home;