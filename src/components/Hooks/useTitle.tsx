import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title}-PostHub`;
  }, [title]);
};

export default useTitle;
