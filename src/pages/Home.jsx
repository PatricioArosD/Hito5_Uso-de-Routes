import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
const Home = () => {
  
  const [pizzas, setPizzas] = useState([])
  const url = "http://localhost:5000/api/pizzas"
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
};

useEffect(() => {
    getData();
}, []);

  return (
    <>
      <Header />
      <article className="row">  
      {pizzas.map((pizzas,index)=>(
            <div className='col-md-4 col-sm-12 mt-4' key={pizzas.id} >
                <CardPizza pizza={pizzas} />
            </div>
        ))}
      </article>
       
    </>
  );
};

export default Home;
