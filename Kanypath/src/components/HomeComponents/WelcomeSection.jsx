import { styles } from "../../styles/styles"

function WelcomeSection() {
  return (
    <section className={`relative w-full max-h-screen`}>
      {/* Following the header section */}
      <div className={`relative w-full bg-white ${styles.paddingY}`}>
        <div className={`max-w-7xl mx-auto ${styles.flexCenter} text-center`}>
          
          <div className="md:w-1/2" >
          <hr className="w-3/4 md:w-full bg-lime-600 h-0.5 ml-14 md:ml-0" /> {/* Horizontal line above the text */}
            <h1 className="mb-5 mt-4 text-2xl font-semibold">Welcome to Kany<span className="text-lime-600">Path</span> </h1>
            <p className={`${styles.paddingX} mb-5 text-lg md:text-2xl`}>We are a UK-based company specialising in agricultural recruitment in the United Kingdom.</p>
            <p className={`${styles.paddingX} mb-5 text-lg md:text-2xl`}>We screen, interview and prepare candidates for their seasonal agricultural job.</p>
            <hr className="w-3/4 md:w-full bg-lime-600 h-0.5 ml-14 md:ml-0" /> {/* Horizontal line beneath the text */}
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection



