import {styles}  from "../../styles/styles";
import Button from '../Button/Button'
import {useNavigate} from 'react-router-dom'


const HeroSection = () => {
    const navigate = useNavigate()

    const handleButtonClicked = () => {
        navigate('/contact')
    };



  return (
    <section className={`relative w-full h-[80vh] md:h-[3/4] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start ml-3 md:ml-28  `}
      >
        <div className="w-full md:w-3/4  mt-12">
        
        <h1 className={`${styles.heroHeadText} text-black justify-start` }>
           
           Agricultural Worker Recruitment 
          </h1>
          <hr className="w-1/2 bg-green-600 h-0.5"/>
          <p className=" flex text-lg font-normal text-white  mt-4 ">
            Seasonal Workers from Africa and Romania  
          </p>
          <Button onClick={handleButtonClicked} label="GET IN TOUCH" variant="primary" />
  
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;