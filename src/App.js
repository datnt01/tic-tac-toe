
import Board from "./component/Board";
import Cell from "./component/Cell";

function App() {
  return (
    
      <div className="flex flex-col items-center w-full mt-5">
        <Board>
          {Array(9).fill(null).map((item, index) => (
              <Cell key={index} value={item} index={index}/>
            ))}
        </Board>
        <button className="border rounded-md px-5 py-2 mt-5" >reset</button>
      </div>
  );
}

export default App;
