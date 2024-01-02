import React, { useEffect , useState} from 'react'
import axios from 'axios'
import User from './User'
 const UserList = () => {
    const[ListOfUser,setListOfUser]=useState()
    // useEffect : component should execute something after each display or each mount(function):consommation d'une API
useEffect(()=>{
  // axios send request du front-end vers back-endgit
    axios
    // request get to API
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{setListOfUser(res);console.log(res)} )
   
},[])
  return (
    <div>
      {/* if ListOfUser(array)=true => mape in this ListoFUser.data and take User of this element(objet) ,then if (indifined=false) =>wait*/}
        <h1>{(ListOfUser)? ListOfUser.data.map(el=><User msg={el}/>) : <h1>wait</h1>}</h1>
    </div>
  )
}
export default UserList;