const AnimatedBackground = () => {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#f0ece4] dark:bg-[#151311]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.38] dark:opacity-[0.18] [background-image:radial-gradient(rgba(21,19,17,0.16)_0.7px,transparent_0.7px)] [background-size:6px_6px] dark:[background-image:radial-gradient(rgba(240,236,228,0.18)_0.7px,transparent_0.7px)]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-px bg-[#d8cfc3] dark:bg-[#f0ece4]/10" />
    </>
  );
};

export default AnimatedBackground;
