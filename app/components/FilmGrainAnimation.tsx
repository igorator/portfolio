export const FilmGrainOverlay = () => {
  return (
    <div className='z-50 fixed inset-0 opacity-10 pointer-events-none mix-blend-overlay'>
      <div className="absolute inset-0 bg-[url('/film-grain.png')] bg-repeat animate-grain" />
    </div>
  );
};
