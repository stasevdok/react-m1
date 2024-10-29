import './AboutCard.scss';

export default function AboutCard({ name, description }) {
  return (
    <div className="about-card">
      <p className="fact-name">{name}</p>
      <p className="fact-text" dangerouslySetInnerHTML={{__html:description}} ></p>
    </div>
  );
}
