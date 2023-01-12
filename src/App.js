import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React, {useState, useEffect} from 'react';
import Footer from './Footer';

function App() {

  const [userData, setUserData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const[query, setQuery] = useState('');


  useEffect(() =>{
      const getUserData= async()=>{
          const reqData= await fetch('https://jsonplaceholder.typicode.com/users');
          const resData= await reqData.json();
         // console.log(resData);
          setUserData(resData);
          setFilterData(resData);
      }
      getUserData();
  },[]);   

  const handlesearch =(event) => {
    const getsearch = event.target.value;
    setQuery(getsearch);
   // console.log(getsearch);
    if(getsearch.length > 0)
    {
      const searchdata = userData.filter((item) => item.name.toLowerCase().includes(getsearch.toLowerCase()))
      setUserData(searchdata);
    } else{
      setUserData(filterData);
    }



  }


  return (
    <div className="App">
      <Header />

      <div className='__searchBar'>
        <div className='_search'>
          <div className='container'>
            <div className='row'>
              <div className='col-12' style={{ marginTop: "50px", marginBottom: "50px" }}>
                <h2>Search Record here</h2>
                <div className='col-6'>
                  <input type="text" id="name" value={query} onChange={(e)=> handlesearch(e)} className="form-control" placeholder='search...' />
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid'>
            <table className="table table-striped">
              <thead>
                <tr className='__table'>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">City</th>
                  <th scope="col">zipcode</th>
                  <th scope="col">street</th>
                </tr>
              </thead>
              <tbody>
              {
                userData.map((getUser, index)=>(

                
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{getUser.name}</td>
                  <td>{getUser.email}</td>
                  <td>{getUser.address.city}</td>
                  <td>{getUser.address.zipcode}</td>
                  <td>{getUser.address.street}</td>
                </tr>
                )  )
              }
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
