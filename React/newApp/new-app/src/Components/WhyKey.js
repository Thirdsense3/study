import { useState, useRef, useEffect } from 'react';
import { shuffle } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },  
}));

export default function WhyKey() {
  const classes = useStyles();

  const inputText = useRef(null);

  const putUserList = () => {
    setUserList([
      ...userList,
      {
        id: userList.length + 1,
        name: inputText.current.value,
      },
    ]);
  };

  useEffect(() => {
    const id = setInterval(() => {
      const newUserList = shuffle(userList);
      setUserList(newUserList);
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const [userList, setUserList] = useState([
    {
      id: 1,
      name: '빌 게이츠',
    },
    {
      id: 2,
      name: '스티브 잡스',
    },
    {
      id: 3,
      name: '홍길동',
    },
    {
      id: 4,
      name: '일론 머스크',
    },
  ]);

  return (
    <div className="container">
      {userList.map((item, index) => (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label= {item.name}
            key={item.name}
            type="text"
            placeholder={item.name}
            style={{ display: 'block' }}
          ></TextField>
        </form>
      ))}

      <input type="text" ref={inputText}></input>
      <button onClick={putUserList}>Submit</button>
    </div>
  );
}
