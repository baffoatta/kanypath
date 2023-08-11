import {BiSelection, BiUserPlus} from 'react-icons/bi'
 import {GiMagicPortal} from 'react-icons/gi'
 


const ServiceSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Seasonal Workers Section */}
          <div className="flex flex-col items-center p-4 border border-gray-400 rounded-lg">
          <BiUserPlus className='text-5xl text-lime-500 mb-4 mt-2'/>
            <h3 className="text-2xl font-semibold mb-2">Seasonal Workers</h3>
            <p className="text-lg text-gray-600 text-center">Provide the best possible workforce for agricultural employers in the UK</p>
          </div>

          {/* Screening or Selection Section */}
          <div className="flex flex-col items-center p-4 border border-gray-400 rounded-lg">
          <BiSelection className='text-5xl text-lime-500 mb-4 mt-2'/>
            <h3 className="text-2xl font-semibold mb-2">Screening or Selection</h3>
            <p className="text-lg text-gray-600 text-center">Utilising our expertise, we strategically focus on recruiting suitable personnel from specific areas.</p>
          </div>

          {/* Client Portal Section */}
          <div className="flex flex-col items-center p-4 border border-gray-400 rounded-lg">
          <GiMagicPortal className='text-5xl text-lime-500 mb-4 mt-2'/>
            <h3 className="text-2xl font-semibold mb-2">Client Portal</h3>
            <p className="text-lg text-gray-600 text-center">Employers can view and request candidates from a dedicated client portal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
