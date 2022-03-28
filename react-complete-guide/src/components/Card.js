import './Card.css'

function Card(props){
    // props.children is all the child elements from where
    // this composition component is declared
    
    // We combine the classes which used this component with card class
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;