"use client";
import React, { useState , useRef} from "react";


export default function Home() {
  const [items , setItems] = useState([]) as any;
  const [model, setModel] = useState({
    vegetable_name : '',
    note: ''
  })
  const handleInputChange = (e : any) => {
    const { name, value } = e.target;
    setModel(prevModel => ({
      ...prevModel,
      [name]: value
    }));
  };
  // const formRef = {
  //   vegetable_name : useRef(null),
  //   note: useRef(null)
  // };
  async function formAction(){
    // const input = {
    //   vegetable_name: formRef.vegetable_name.current,
    //   note: formRef.note.current,
    // };
    console.log(model);
    // console.log(formRef.vegetable_name);
    // console.log(formRef.vegetable_name);
    setItems([...items , model]);
    // console.log(items);
    // setItems[[...items, {name :''}]];
  }
  return <>
      <form action={formAction}  className="max-w-sm mx-auto mt-5 border border-gray-300 bg-gray-100 p-5">
        <div className="grid gap-6 mb-6">
          <h1>Form</h1>
          {/* <ul>
            {items.map((item : any, index : number) => (
              <li key={index}>
                {item.vegetable_name}
              </li>
            ))}
          </ul> */}
          <div>
            <label htmlFor="vegetable_name" className="text-sm font-medium block text-gray-900">Vegetable Name</label>
            <input type="text" name="vegetable_name" onChange={handleInputChange} value={model.vegetable_name} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm w-full p-1" />
          </div>
          <div>
            <label htmlFor="" className="text-sm font-medium block text-gray-900">Note</label>
            <textarea name="note" value={model.note} onChange={handleInputChange}  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm w-full p-1"></textarea>
          </div>
          <div className="mt-1 text-right">
            <button type="submit" className="focus:outline-none text-white bg-blue-400 hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:focus:ring-blue-100">Save</button>
          </div>
        </div>
      </form>
      
      <div>
        <table className="m-5 w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead>
            <tr className="bg-white border">
              <th>No</th>
              <th>Vegetable Name</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item : any, index : number) => (
              <tr className="bg-white border ">
                <td>{index +1}</td>
                <td>{item.vegetable_name}</td>
                <td>{item.note}</td>
              </tr>  
            ))}
          </tbody>
        </table>
      </div>
    </>
}
