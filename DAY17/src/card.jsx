const Card = (props) => {
    return (<div className="card" >
        <h1 className="title">{props.title}</h1>
        <h2 className="info">you have consumed {props.info} calories</h2>
        <button onClick={() => {
        }}>Delete</button>
    </div>);
};
export default Card;