import Photos from "../../components/Photos/Photos";
import Navbar from "../../components/Navbar/Navbar";

export default function PhotosPage() {
    return (
      <div>
        <Navbar />
        <h1>
            Фотографии
        </h1>
        <Photos />
      </div>
    );
  }