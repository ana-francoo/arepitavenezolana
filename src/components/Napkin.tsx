import ArepaGrid from './ArepaGrid';
import './Napkin.css';

const imagesarray = [
  'domino',
  'domino',
  'domino',
  'domino',
  'domino',
  'domino',
  'domino',
  'domino',
  'domino',
  'domino',
  'domino',
  'domino',
];

function Napkin({
  setActiveArepa,
}: {
  setActiveArepa: (name: string) => void;
}) {
  return (
    <div className="napkin">
      <ArepaGrid images={imagesarray} setActiveArepa={setActiveArepa} />
    </div>
  );
}

export default Napkin;
