import { Square } from "./Square";
import { TURNS } from "../constants";
import { WinnerModal } from "./WinnerModal";

export function Board({ board, updateBoard, turn, winner, resetGame }) {
    return (
        <main className="board">
            <h1>Tic tac toe</h1>
            <button onClick={resetGame}>Reiniciar juego</button>
            <section className="game">
                {
                    board.map((cell, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                updateBoard={() => updateBoard(index)}
                            >
                            {board[index]}
                            </Square>
                        );
            
                    })
                }
            </section>
            
            <section className="turn">
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>
            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    );
}
