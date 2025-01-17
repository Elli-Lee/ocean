import Card from "../Card";
const CourseForm = () => {
  const handleCourseForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Card title="강의 목록">
        <form
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          onSubmit={handleCourseForm}
        >
          <input type="text" placeholder="강의 제목" />
          <input type="text" placeholder="강의 한줄 설명" />
          <input type="submit" value="등록" />
        </form>
      </Card>
    </div>
  );
};

export default CourseForm;
