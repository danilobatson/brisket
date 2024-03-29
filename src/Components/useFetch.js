import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
	const [pending, setPending] = useState(true);
	const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController()

		fetch(url, {signal: abortCont.signal})
			.then((res) => {
				if (!res.ok) {
					throw Error('could not fetch data for that resource');
				}
				return res.json();
			})
			.then((data) => {
				setData(data);
				setError(null);
				setPending(false);
			})
			.catch((err) => {
        if(err.name === 'AbortError') {
          console.log('fetch aborted')
        }
        else {
          setPending(false);
          // setError(err.message);
        }
			});
      return () => abortCont.abort()
	}, [url]);

  return {data, pending, error }
}

export default useFetch;
