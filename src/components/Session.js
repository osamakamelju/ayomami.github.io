import { getSection } from "../api";

export default function Session() {
  const catId = "Women";
  const sessionId = "Women";

  const { name, desc, speaker } = getSection({ catId, sessionId });

  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{speaker.name}</h4>
      <span>
        {speaker.title} at {speaker.org}
      </span>
      <p>{speaker.bio}</p>
    </>
  );
}
