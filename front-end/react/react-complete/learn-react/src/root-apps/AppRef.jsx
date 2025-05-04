import { forwardRef, useEffect, useRef, useState } from "react";

function ButtonCounter() {
  const countRef = useRef(0);

  const [count, setCount] = useState(0);

  console.log("✅ 리렌더링!");

  const handleClick = () => {
    countRef.current++;
    console.log("countRef: ", countRef.current);
    setCount(count + 1);
  };
  return <button onClick={handleClick}>Count</button>;
}

const MyForm = forwardRef((props, ref) => {
  const [isChanged, setIsChanged] = useState(false);
  const [form, setForm] = useState({
    title: "제목",
    author: "고래",
    content: "",
    // content: "고래가 살아가는 시간",
  });
  const prevForm = useRef(null);

  const titleInputRef = useRef(null);
  const authorInputRef = useRef(null);
  const contentTextareaRef = useRef(null);

  useEffect(() => {
    if (!form.title) {
      titleInputRef.current.focus();
      return;
    }
    if (!form.author) {
      authorInputRef.current.focus();
      return;
    }
    if (!form.content) {
      contentTextareaRef.current.focus();
      return;
    }
  }, []);

  useEffect(() => {
    // server api fetch
    prevForm.current = { ...form };
  }, []);

  useEffect(() => {
    const hasChanged =
      prevForm.current.title !== form.title ||
      prevForm.current.author !== form.author ||
      prevForm.current.content !== form.content;
    console.log("hasChanged > ", hasChanged);
    setIsChanged(hasChanged);
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DOM >", titleInputRef.current);
    if (!form.title) {
      titleInputRef.current.focus();
      return;
    }
    if (!form.author) {
      authorInputRef.current.focus();
      return;
    }
    if (!form.content) {
      contentTextareaRef.current.focus();
      return;
    }
    console.log("저장 성공~");
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const formRef = useRef(null);

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      <fieldset>
        <legend> 글쓰기 </legend>
        <input
          name="title"
          value={form.title}
          onChange={handleForm}
          placeholder="제목"
          ref={titleInputRef}
        />
        <hr />
        <input
          name="author"
          value={form.author}
          onChange={handleForm}
          placeholder="작성자"
          ref={authorInputRef}
        />
        <hr />
        <textarea
          name="content"
          value={form.content}
          onChange={handleForm}
          placeholder="내용"
          ref={contentTextareaRef}
        />
        <hr />
        <button disabled={!isChanged} type="submit">
          전송
        </button>
      </fieldset>
    </form>
  );
});

MyForm.displayName = "MyForm";

const AppRef = () => {
  const myFormRef = useRef(null);
  useEffect(() => {
    console.log("myFormRef > ", myFormRef.current);
  }, []);
  return (
    <>
      <h2> Count </h2>
      <ButtonCounter />
      <ButtonCounter />
      <h2> Form </h2>
      <MyForm ref={myFormRef} />
    </>
  );
};

export default AppRef;
