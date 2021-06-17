import React, { useState, useEffect } from 'react';

export default function UseFetch(url) {
  let process = require('../myProcess.json');

  const [data, setData] = useState([]);

  console.log(url)

  useEffect(() => {
    fetch(`http://${process.IP}:${process.PORT}/${url}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [process.IP, process.PORT, url]);

  return data;
}
