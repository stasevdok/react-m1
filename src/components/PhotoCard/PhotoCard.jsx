import './Photo.scss';

export default function AboutCard({ name, location, alt }) {
    return (
      <div className="photo">
        <p>{name}</p>
        <img src={location} alt={alt}></img>
      </div>
    );
  }
  