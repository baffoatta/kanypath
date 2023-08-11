import {styles} from "../styles/styles"
import { kanypathLogo } from "../assets/AssetsIndex";
import { footerLinks, socialMedia } from "../constants/index";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-slate-200`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-4 w-full`}>
      <div className="flex-[1] flex flex-col justify-start ml-0 md:ml-36">
        <img
          src={kanypathLogo}
          alt="Kany Path Ltd"
          className="w-[266px] h-[72.14px] object-contain ml-3 md:ml-12"
        />
        <p className={`${styles.paragraphFooter} mt-4   max-w-sm`}>
        KanyPath, a UK-based recruitment agency, specializes in supplying 
        seasonal workers from Africa and Romania, ensuring accurate job 
        information and avoiding discrimination.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap mr-24 md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h3 className="font-poppins font-medium text-lg ml-4 md:-ml-2 leading-[20px] text-slate-900">
              {footerlink.title}
            </h3>
            <ul className="list-none mt-2">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[14px] ml-8 md:ml-0 leading-[24px] text-dimWhite
                   hover:text-lime-500 cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-2" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-black ml-0 md:ml-28">
        Copyright Ⓒ 2023 KanyPath Ltd. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 md:mr-56">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain text-black cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
