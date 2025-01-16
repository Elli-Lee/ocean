import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <div className="card__header">강의 목록</div>
        <div className="card__body">
          <div className="courses">
            <article className="course">
              <img className="course__img" src="./img/htmlcss.png" alt="" />
              <div className="course__body">
                <div className="course__title">
                  입문자를 위한, HTML&CSS 웹 개발 입문
                </div>
                <div className="course__description">
                  웹 개발에 필요한 기본 지식을 배웁니다.{" "}
                </div>
              </div>
            </article>
            <article className="course">
              <img className="course__img" src="./img/htmlcss.png" alt="" />
              <div className="course__body">
                <div className="course__title">
                  입문자를 위한, HTML&CSS 웹 개발 입문
                </div>
                <div className="course__description">
                  웹 개발에 필요한 기본 지식을 배웁니다.{" "}
                </div>
              </div>
            </article>
            <article className="course">
              <img className="course__img" src="./img/htmlcss.png" alt="" />
              <div className="course__body">
                <div className="course__title">
                  입문자를 위한, HTML&CSS 웹 개발 입문
                </div>
                <div className="course__description">
                  웹 개발에 필요한 기본 지식을 배웁니다.{" "}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;