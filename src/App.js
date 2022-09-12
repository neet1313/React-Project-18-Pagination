import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;

    setFollowers(data[page]);
  }, [loading, page, data]);

  const handlePage = (index) => { setPage(index) }

  const clickHandler = (payload) => {
    if (payload === "next") {
      setPage(() => {
        let nextPage = page + 1;
        (nextPage > data.length - 1) && (nextPage = 0);

        return nextPage;
      });
    } else {
      setPage(() => {
        let prevPage = page - 1;
        (prevPage < 0) && (prevPage = data.length - 1);

        return prevPage;
      });
    }
  }

  return <main>
    <div className='section-title'>
      <h1>{loading ? "Loading..." : "Pagination"}</h1>
      <div className='underline' />
    </div>
    <section className='followers'>
      <div className='container'>
        {followers.map(follower => <Follower key={follower.id} {...follower} />)}
      </div>

      {!loading && <div className='btn-container'>
        <button type='button' className='prev-btn' onClick={() => clickHandler("prev")}>prev</button>
        {data.map((item, index) => {
          return <button key={index} className={`page-btn ${page === index && 'active-btn'}`} onClick={() => { handlePage(index) }}>{index + 1}</button>
        })}
        <button type='button' className='next-btn' onClick={() => clickHandler("next")} >next</button>
      </div>}

    </section>
  </main>
}
export default App;
