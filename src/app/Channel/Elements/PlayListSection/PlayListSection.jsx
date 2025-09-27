import PlayListCard from "../PlayListCard";

function PlayListSection({ PlayLists }) {
  return (
    <section className="mt-8">
      <h2 className="text-white text-[20px] md:text-[24px] font-bold mb-4">
        Playlists
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        {PlayLists?.map((playlist) => (
          <PlayListCard playlist={playlist} key={playlist.id} />
        ))}
      </div>
    </section>
  );
}

export default PlayListSection
