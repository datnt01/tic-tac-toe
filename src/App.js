
import {  useDispatch, useSelector } from "react-redux";
import Board from "./component/Board";
import Cell from "./component/Cell";
import { calculateWinner } from "./ultils";
import { reset } from "./store/slice/BoardSlice";

function App() {
  const board = useSelector(state=>state.board.board)
  const winner = calculateWinner(board)
  const dispatch = useDispatch()
  return (
    
      <div className="flex flex-col items-center w-full mt-5">
        <Board>
          {board.map((item, index) => (
              <Cell key={index} value={item} index={index}/>
            ))}
        </Board>
        <p>{winner&&`The winner is: ${winner}`}</p>
        <button className="border rounded-md px-5 py-2 mt-5" onClick={()=>dispatch(reset())}>reset</button>
      </div>
  );
}

export default App;
