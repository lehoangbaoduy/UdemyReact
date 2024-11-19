import './CoreConcept.css';

// this could also written as function CoreConcept({image, title, descrciption})
export default function CoreConcept(props) {
    return (
      <li>
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    )
  }