import { useState, useEffect } from "react";

const Courses = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch(`data/courses_${filter}.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data 가져옴~");
        setList(data);
      });

    return () => {
      console.log("연결 헤제~");
    };
  }, [filter]);

  return (
    <>
      <label htmlFor="all">전체</label>
      <input
        id="all"
        type="radio"
        value="all"
        checked={filter === "all"}
        onChange={(e) => setFilter(e.target.value)}
      />
      <label htmlFor="favorite">좋아요</label>
      <input
        id="favorite"
        type="radio"
        value="favorite"
        checked={filter === "favorite"}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};
const AppEffect = () => {
  // DOM 조작하기
  // useEffect(() => {
  //   const $h2 = document.querySelector("#title");
  //   $h2.textContent = "data fetching";
  // }, []);

  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <h2 id="title">데이터 가져오기</h2>
      <button onClick={() => setIsShow(!isShow)}> toggle </button>
      <hr />
      {isShow && <Courses />}
    </>
  );
};

export default AppEffect;
