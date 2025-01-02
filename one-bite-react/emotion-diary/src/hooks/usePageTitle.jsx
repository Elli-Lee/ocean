import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    // 관례상 변수에 DOM 요소가 저장되는 경우 $ 를 변수명 맨 앞에 붙임
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
