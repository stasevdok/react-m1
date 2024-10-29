import aboutDB from '../../database/about.json'
import AboutCard from '../AboutCard/AboutCard';
import './AboutGrid.scss';
const aboutList = aboutDB.data;

export default function AboutGrid() {
  return (
    <div className="about-facts">
      { 
        aboutList.map((element, index) => 
          <AboutCard {...element} index={index} key={element.id} />
         )
      }
    </div>
  );
}
