import { useParams } from "react-router-dom";
import { getCategory } from "../app";

export default function Category() {
  const { catId } = useParams();
  const category = getCategory(catId);

  return (
    <>
      <h2>{category.name} Sections</h2>

      <ul className="section-list">
        {category?.sections.map(section => (
          <li className="section" key={section.id}>
            <p className="section-name">{section.name}</p>
            <p>
              {section.speaker.name} | {section.speaker.org}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
