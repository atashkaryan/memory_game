function Card({item,id,handleClick,count}){
    const itemClass = item.state?" active "+item.state:""
return (
    
    <div className={"Card"+itemClass} onClick={()=>handleClick(id)}>
        <h1>{count}</h1>
        <img className="img" src={item.img} alt=""/>
    </div>
)
}
export default Card