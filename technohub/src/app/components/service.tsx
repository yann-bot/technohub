


interface Props{
      nom:string;
      icone:React.ReactNode;
}




export default  function Service(service: Props){
      return(
          <div>
                <div>{service.icone}</div>
                <h2>{service.nom}</h2>
          </div>
      )
}