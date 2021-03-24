import React, {useEffect, useState} from "react";
import defaultAxios from "axios";
import './App.css';

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts).then(data => {
      setState({
        ...state,
        loading: false,
        data
      });
    }).catch(error => {
      setState({ ...state, loading: false, error });
    });
  }, [trigger]);
  if (!opts.url) {
    return;
  };
  return {...state, refetch};
} ;
// instance가 없으면 기본값으로 Axios 로 설정



function App() {
  const {loading, error, data, refetch} = useAxios({url: "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"});
  return (
    <div className="App" style={{height: "1000vh"}}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading..."}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};




export default App;
