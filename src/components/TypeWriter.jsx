import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <h2 className="typewriter-text">
      <Typewriter
        options={{
          strings: ["Self Taught FullStack Developer",],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 100,
          cursor: "|",
          cursorClassName: "typewriter-cursor",
        }}
      />
    </h2>
  );
}

export default TypeWriter;
