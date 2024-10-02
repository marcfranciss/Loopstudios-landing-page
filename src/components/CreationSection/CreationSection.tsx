import { SeeAllButton } from "../SeeAllButton/SeeAllButton";
import "./creationSection.sass";

const cardTexts = [
  "deep earth",
  "night arcade",
  "soccer team vr",
  "the grid",
  "from up above vr",
  "pocket borealis",
  "the curiosity",
  "make it fisheye",
];
export const CreationSection = () => {
  return (
    <section id='s-creations'>
      <div className='s-creation__header'>
        <h2>Our creation</h2>
        <SeeAllButton />
      </div>
      <div className='cards-list'>
        {cardTexts.map((text) => {
          return (
            <div className='card' key={text}>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
      <SeeAllButton />
    </section>
  );
};
