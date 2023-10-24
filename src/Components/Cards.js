import '../Components/Css/Cards.css'


export const Cards=(props)=>{

    return(
        <div className='crd'>
         <div className='main'>
         <img src={props.imagePath} alt={props.imageAlt} className="image" /> 
         <div className='btm'>
         
         <p className='txt'>{props.txt}</p>
         <p>{props.rate}</p>
         </div>
         <h4>{props.btmtxt}</h4>
         </div>
        

        </div>
    );
}