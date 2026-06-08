import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <h2 className="font-mono text-base uppercase tracking-[0.12em] text-[#b65b3a] sm:text-lg dark:text-[#d4622a]">
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
