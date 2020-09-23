import React from 'react'
import './App.css';
import Customer from './components/Customer';

const customers= [
  {
  'id' : '1',
  'img' : 'http://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '910326' ,
  'gender': '남',
  'job' : '대학생' 
  },
  {
  'id' : '2',
  'img' : 'http://placeimg.com/64/64/2',
  'name' : '임꺽정',
  'birthday' : '920408' ,
  'gender': '남',
  'job' : '프로그레머' 
  },
  {
    'id' : '3',
    'img' : 'http://placeimg.com/64/64/3',
    'name' : '아무개',
    'birthday' : '961010' ,
    'gender': '남',
    'job' : '디자이너' 
  }

]


function App() {
  return (
    <div>
       {customers.map(c => {
         return(
          <Customer
            key={c.id}
            id={c.id}
            img={c.img}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}/>
          );
        }
      )}
    </div>
  
  );
}

export default App;
