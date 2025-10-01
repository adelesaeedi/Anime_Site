function AnimeDetail({ anime }) {
  if (!anime) {
    return null;
  }
  return (
    <div className="card">
      <img
        src={anime.images.jpg.large_image_url}
        className="card-img-top"
        alt="cover"
      />
      <div className="card-body">
        <h5 className="card-title">{anime.title}</h5>
        <p className="card-text">{anime.synopsis}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{anime.score}</li>
        <li className="list-group-item">
          Genres:{anime.genres.map((genre) => genre.name).join(",")}
        </li>
        <li className="list-group-item">
          Studio:{anime.studios.map((Studio) => Studio.name).join(",")}
        </li>
      </ul>
    </div>
  );
}

export default AnimeDetail;
