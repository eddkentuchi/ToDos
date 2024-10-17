import { CompleteIcon } from "../Icons/CompleteIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";
import '../styles/TodosStyles.css'

function TodoItem(props){
    return(
     <li className='TodoItem'>
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
        <CompleteIcon
            onClick={props.onComplete}
        />
       </span>
     <p
     className={`TodoItem-p ${props.completed&&"TodoItem-p--complete"}`}
     >{props.name}</p>
     <span className="Icon Icon-delete">
        <DeleteIcon
            onClick={props.onComplete}
        />
       </span>
     </li>
    );
   
   }
export {TodoItem};