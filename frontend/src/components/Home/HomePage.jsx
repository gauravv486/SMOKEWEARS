import { Link } from 'react-router-dom';
import NewCollection from './NewCollection';
import bgImage from "../../assets/bgImage.png"
import StreetWear from './StreetWear';
import menImage from "../../assets/men.png"
import womenImage from "../../assets/women.png"


const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.log('Background image failed to load');
            e.target.src = 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=800&fit=crop';
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white p-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">
              Art Meet Attitude
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Where creativity transcends boundaries
            </p>
            <Link to="/feed">
              <button className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors shadow-lg cursor-pointer">
                Explore Gallery
              </button>
            </Link>
          </div>
        </div>
      </section>

      <NewCollection />
      <StreetWear />

      <div className='flex relative w-full max-w-4xl gap-10 mx-auto mb-15'>
        <Link to="/men" className='relative w-1/2 cursor-pointer group'>
          <div>
            <img
              src={menImage}
              alt="Men's Fashion"
              className='w-full h-160 object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <p className='text-white text-6xl font-bold tracking-wider'>MAN</p>
            </div>
          </div>
        </Link>

        <Link to="/women" className='relative w-1/2 cursor-pointer group'>
          <div >
            <img
              src={womenImage}
              alt="Men's Fashion"
              className='w-full h-160 object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105'  
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <p className='text-white text-6xl font-bold tracking-wider'>WOMAN</p>
            </div>
          </div>
        </Link>
      </div>


    </div>
  )
}

export default HomePage
