import { useEffect } from "react"; // we can avoid importing react as there is no jsx in the code

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `count ${count}`;
  }, [count]);
}

export default useDocumentTitle;
