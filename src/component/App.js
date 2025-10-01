import SearchInput from "./SearchInput";
import axios from "axios";
import { useState ,useEffect} from "react";
import AnimeList from "./AnimeList";
import AnimeDetail from "./AnimeDetail";
import Loading from "./Loading/Loading";

function App() {
  const [selected, setSelected] = useState(null);
  // const [loading, setloading] = useState(false);
  // const [error, seterror] = useState(null);
  // const [serise, setserise] = useState([]);
  const [animeResponse, setAnimeResponse] = useState({
    loading: false,
    error: null,
    series: [],
  });
  const initialSearch = "dororo";

  useEffect(() => {
    search(initialSearch);
  }, []);

  const search = async (term) => {
    setAnimeResponse({
      series: [],
      loading: true,
      error: null,
    });

    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?limit=5&q=${term}`
      );

      setAnimeResponse({
        series: response.data.data,
        loading: false,
        error: null,
      });
      setSelected(response.data.data[0]);// Select the first anime by default
    } catch (e) {
      setAnimeResponse({
        series: [],
        loading: false,
        error: e.message,
      });
    }
  };
    const onItemClick = (anime) => {
      setSelected(anime);
    };

    const renderContent = () => {
      const { loading, error, series } = animeResponse;
      if (loading) {
        return <Loading />;
      }

      if (error) {
        return (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        );
      }
      return (
        <div className="row">
          <div className="col-4">
            <AnimeList series={series} onItemClick={onItemClick} />
          </div>
          <div className="col-8">
            <AnimeDetail anime={selected} />
          </div>
        </div>
      );
    };

    return (
      <div className="container m-5">
        <SearchInput onFormSubmit={search} initialValue={initialSearch}/>
        {renderContent()}
      </div>
    );
  };


export default App;
