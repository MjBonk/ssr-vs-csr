// next.js by default is a server based component. 
"use client";
// else by default client based 


import styles from "../page.module.css";
import { useEffect, useState } from "react";
import Content from "@/components/content";
import { API_KEY } from "@/constants";

export default function Static() {
  const [data, setData] = useState(),
    [invalid, setInvalid] = useState(true),
    [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1&thumbs=true`,
        { cache: "no-cache" }
      );

      if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      const [json] = await response.json();

      setData(json);
      setInvalid(false);
      setLoading(false);
    };

    if (invalid) fetchData();
  }, [invalid]);

  useEffect(() => {
    if (!invalid && !data) setInvalid(true);
  });

  return (
    <main className={styles.main}>
      <div className={styles.title}>CLIENT RENDERED</div>
      <button onClick={() => setInvalid(true)}>Reload</button>
      {!loading && data ? <Content data={data} /> : <div>Loading...</div>}
    </main>
  );
}
