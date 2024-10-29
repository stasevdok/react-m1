import photosDB from '../../database/photos.json'
import PhotoCard from '../PhotoCard/PhotoCard';
import './Photos.scss';
const photostList = photosDB.data;


export default function Photos() {
    return (
      <div className="photos">
        { 
          photostList.map((element, index) => 
            <PhotoCard {...element} index={index} key={element.id} />
           )
        }
      </div>
    );
  }