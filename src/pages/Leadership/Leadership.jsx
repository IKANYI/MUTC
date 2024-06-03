import profile from '../../assets/patron.jpg';
import al from '../../assets/allan.jpg';
import br from '../../assets/bridget.jpg';
import vi from '../../assets/victory.jpg';
import ru from '../../assets/ruth.jpg';
import we from '../../assets/webster.jpg';
import ma from '../../assets/manase.jpg';
import ca from '../../assets/carolyn.jpg';
import st from '../../assets/stanley.jpg';
import pa from '../../assets/paul.jpg';
import ev from '../../assets/evyonn.jpg';
import './Leadership.css'
const Leadership = () =>{
  return(
    <section className="leaders">
      <div className="style">
      <div className="profile">
        <img src={profile} alt="img" />
      </div>
      <div className="descption">
      <p>Dr. John Ndia</p>
        <p>Patron of the club</p>
        <p>Twitter Meta Instagram</p>
      </div>
      </div>
      <div className="style">
      <div className="profile">
        <img src={vi} alt="img" />
      </div>
      <div className="descption">
      <p>Victory Njeri</p>
        <p>Chairperson</p>
        <p>Twitter Meta Instagram</p>
      </div>
      </div>
      <div className="style">
      <div className="profile">
        <img src={al} alt="img" />
      </div>
      <div className="descption">
      <p>Allan Muhari</p>
        <p>Vice-Chairperson</p>
        <p>Twitter Meta Instagram</p>
      </div>
      </div>
      <div className="style">
      <div className="profile">
        <img src={br} alt="img" />
      </div>
      <div className="descption">
      <p>Bridget Gitonga</p>
        <p>Secretary</p>
        <p>Twitter Meta Instagram</p>
      </div>
      </div>
      <div className="style">
      <div className="profile">
        <img src={ru} alt="img" />
      </div>
      <div className="descption">
      <p>Ruth Mutisya</p>
        <p>Treasurer</p>
        <p>Twitter Meta Instagram</p>
      </div>
      </div>
      <div className="style">
      <div className="profile">
        <img src={we} alt="img" />
      </div>
      <div className="descption">
      <p>Webster Ifedha</p>
        <p>Cyber Security Lead</p>
        <p>Twitter Meta Instagram</p>
      </div>
      </div>
      <div className="style">
      <div className="profile">
        <img src={ma} alt="img" />
      </div>
      <div className="descption">
      <p>Manase Gunga</p>
        <p>UI/UX lead</p>
        <p>Twitter Meta Instagram</p>
      </div>
      </div>
      <div className="style">
      <div className="profile">
        <img src={ca} alt="img" />
      </div>
      <div className="descption">
      <p>Carolyne Githeduka</p>
        <p>Web Development lead</p>
        <p>Twitter Meta Instagram</p>
      </div>
      </div>
      <div className="style">
      <div className="profile">
        <img src={st} alt="img" />
      </div>
      <div className="descption">
      <p>Stanley Amunze</p>
        <p>Mobile Apps Development lead</p>
        <p>Twitter Meta Instagram</p>
      </div>
      </div>
      <div className="style">
      <div className="profile">
        <img src={pa} alt="img" />
      </div>
      <div className="descption">
      <p>Paul Karanja</p>
        <p>Cloud Engineering Lead</p>
        <p>Twitter Meta Instagram</p>
      </div>
      </div>
      <div className="style">
      <div className="profile">
        <img src={ev} alt="img" />
      </div>
      <div className="descption">
      <p>Evyonn Mbithe</p>
        <p>Power Platform Lead</p>
        <p>Twitter Meta Instagram</p>
      </div>
      </div>
      
    </section>
  )
}
export default Leadership