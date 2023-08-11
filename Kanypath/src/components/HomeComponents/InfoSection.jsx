
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLaptop, faSignature, faUserCheck } from '@fortawesome/free-solid-svg-icons';

const InfoSection = () => {
  const steps = [
    { icon: faEnvelope, title: 'STEP 1. GET IN TOUCH', text: 'Get in touch to discuss how KanyPath can help your business to gain great people to harvest your crop and pack your produce efficiently' },
    { icon: faLaptop, title: 'STEP 2. COMPUTER AUDIT', text: 'Each farm will undergo an operational audit. We establish the working and living conditions of seasonal employees in great detail.' },
    { icon: faSignature, title: 'STEP 3. SIGNING A SUPPLY AGREEMENT', text: 'KanyPath and Employer must have signed GLAA agreement for labour, as KanyPath cannot provide labour without it.' },
    { icon: faUserCheck, title: 'STEP 4. MEETING / FARM INSPECTION', text: 'We really like to meet our customers in person. Farms will also have an audit conducted by a 3rd party. This is a Seasonal Worker Scheme requirement.' },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h4 className="font-semibold text-2xl text-gray-700 text-center mb-5">customers process</h4>
        <h2 className="font-semibold text-4xl text-gray-900 text-center mb-5">STEP BY STEP</h2>
        <p className="text-center mb-8">
          <span className="text-gray-700">We made our process simple, fast, and effective.</span>
        </p>
        <div className="grid grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'md:ml-36' : 'md:mr-36'}`}>
              <div className="relative">
                <div className="absolute z-10 bg-lime-700 w-16 h-16 rounded-full flex items-center justify-center text-yellow-50" style={{ left: '-27px', top: '50%', transform: 'translateY(-50%)' }}>
                  <FontAwesomeIcon icon={step.icon} className="text-2xl" />
                </div>
                <div className="bg-gray-800 py-12 px-10 rounded-lg shadow-md flex-grow relative">
                  <div className="flex items-center mb-2">
                    <h4 className="text-lg font-semibold text-yellow-50">{step.title}</h4>
                  </div>
                  <p className="text-white font-light">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
