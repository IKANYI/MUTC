import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
const SocialInfo = ({icon,label}) => {
  return(
    <div className="header-social">
      <div className="header-icon-wrapper">
        {icon}
      </div>
      <p>{label}</p> 
    </div>  
  )
}
const HeaderTop = () => {
  return(
    <div className="headerTop">
      <h1 className="logo">Murang'a University Tech Club</h1>
      <div className="logoinfo">
        <SocialInfo icon={ <MdEmail/>} label="info@Mut" />
        <SocialInfo icon={ <CiLocationOn/>} label="Murang'a Uni" />
        <SocialInfo icon={ <FaPhoneAlt/>} label="25479094456" />
      </div>
    </div>
  )
}
export default HeaderTop;