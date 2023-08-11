import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Corrected import path
import {
  faCoffee,
  faMusic,
  faBook,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const CircleIcons = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Circle Icons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Circle 1 */}
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-500">
            <FontAwesomeIcon icon={faCoffee} className="text-white text-2xl" />
          </div>

          {/* Circle 2 */}
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-green-500">
            <FontAwesomeIcon icon={faMusic} className="text-white text-2xl" />
          </div>

          {/* Circle 3 */}
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-purple-500">
            <FontAwesomeIcon icon={faBook} className="text-white text-2xl" />
          </div>

          {/* Circle 4 */}
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-orange-500">
            <FontAwesomeIcon icon={faCode} className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircleIcons;
