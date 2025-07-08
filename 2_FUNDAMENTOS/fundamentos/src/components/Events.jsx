const Events = () => {

  const handleMyEvent = (e) =>{
    console.log(e);

    console.log("Ativou evento!");
;  }

  const renderSomething = (x) => {
    if(x){

      return <h1>Renderizado isso!</h1>

    }else{

      return <h1>Também posso renderizar isso!</h1>

    }
  } ; 

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>

      <div>
        <button onClick={() => console.log("Clicou!") }>Clique aqui também!</button>
      </div>

      <div>
        <button onClick={() => console.log("Clicou!") }>Clique aqui também por favor!</button>
      </div>

      {renderSomething(false)};

    </div>

  );

};

export default Events;