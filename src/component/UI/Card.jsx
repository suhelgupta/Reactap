function Card(props) {
  const classes = 'card ' + props.className; // classname set to custom component is Consider as properties, so we have created this constant
  return <div className={classes}>{props.children}</div>; // prop.children i9s used becase we wan tto use card component as the wraper tag
}

export default Card;
