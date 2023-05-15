import { setBoard } from "../store/slice/BoardSlice";
import { useDispatch } from "react-redux";
const Cell  = ({ value ,index}) => {
    const dispatch = useDispatch()
    return (<button onClick={()=>dispatch(setBoard(index))} className="border">
        <span className="text-white text-xl font-bold">{value}</span> 
    </button>);
}

export default Cell ;