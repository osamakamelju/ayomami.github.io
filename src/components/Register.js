import { useRef } from "react";

export default function Register() {
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Register for Ayomami</h1>
      <p>
      Ayomami is a Service allows you to save your time by purchasing all your needs of clothes, accessories & gifts to your lovely family and friends within a short time and high quality.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
