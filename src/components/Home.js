import featImg from "../assets/img-main.jpg";

export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Ayomami the clothes home.. for you and your family.."
      />

      <h1>{title}</h1>
      <p>
        This is a fictitious company and conference created by{" "}
        <a rel="noopener" href="" target="_blank">Ayomami... share your wishes...</a>
          
        Service allows you to save your time by purchasing all your needs of clothes, accessories & gifts to your lovely family and friends within a short time and high quality.
      </p>
    </div>
  );
}
