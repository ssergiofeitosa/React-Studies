import { useState,useEffect,useRef } from 'react';
import {  } from 'react';
import './App.css'
//useEffect  e useState
// function App() {
// // const [state, setState] = useState("");
// // const [items, setItems] = useState([]);
// // useEffect(() => {
// //   fetch(`https://jsonplaceholder.typicode.com/${state}`)
// //     .then((res) => res.json())
// //     .then((json) => console.log(json))
// //     .catch((err) => console.log("erro: " + err));
// // }, [state]);

// //OU
// // useEffect(()=>{
// //   const fetchState = async()=>{
// //     const response = await fetch(`https://jsonplaceholder.typicode.com/${state}`)
// //     const responseJSON = await response.json()
// //     console.log(responseJSON)
// //     setItems(responseJSON)
// //   };
// //   fetchState();
// // },[state])
// // //acima:sempre que state é alterado(quando os botões são clicados), a api faz a requisição e printa no console os dados da api
// // useEffect(()=>{
// //   console.log("componentDidMount")

// //   return ()=>{console.log("componentWillUnmount")}
// // },[])

//   return (
//     <>
//       {/* <div>
//         <h1>{state}</h1>
//         <div>
//           <button onClick={()=>{setState("posts")}}>posts</button>
//           <button onClick={()=>{setState("comments")}}>comments</button>
//           <button onClick={()=>{setState("todos")}}>todos</button>
//         </div>
//         <div>
//           {items.map((item)=><p>{item.id}</p> )}
//         </div>
//       </div> */}
//     </>
//   )
// }



//useRef
// function App(){
//   const [state, setState] = useState("");
//   const stateAnterior = useRef("");
//   useEffect(() => {
//     console.log("Estado Anterior: " + stateAnterior.current);
//     console.log("Estado atual: " + state);
//     stateAnterior.current = state;
//     console.log("Estado Anterior Novo: " + stateAnterior.current);
//   }, [state]);
//   return (
//     <>
    

//     <input type="text" onChange={(e)=>{setState(e.target.value)}} value={state}/> <br />
//       <span>Estado anterior: {stateAnterior.current}</span><br />
//       <span >Estado atual: {state} </span></>
//   )
// }

// export default App

//useReducer
import { useReducer } from 'react';
export default function App(){
  
  
  
  return(
    <>
    <div>
      <p></p>
      <button onClick={}></button>
      <button onClick={}></button>
      </div></>
  )
}