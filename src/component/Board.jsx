const Board = (props) => {
    return <div className="border bg-slate-500 w-[500px] h-[500px] grid grid-cols-3 grid-rows-3">{props.children}</div>;

}
 
export default Board;