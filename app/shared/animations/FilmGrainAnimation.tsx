export const FilmGrainOverlay = () => {
  return (
    <div className='z-50 fixed inset-0 opacity-30 pointer-events-none mix-blend-overlay'>
      <div className="absolute inset-0 bg-[url('/assets/film-grain.png')] bg-repeat w-[200vw] h-[200vh] animate-grain pointer-events-none ]" />
    </div>
  );
};
