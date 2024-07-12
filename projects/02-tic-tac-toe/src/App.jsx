import { useState } from "react"
import confetti from "canvas-confetti"
import { TURNS } from "./constants"
import { checkWinner, checkGameEnd } from "./logic/board"
import { Board } from "./components/Board"


export function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board]
    newBoard[index] = turn

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setBoard(newBoard)
    setTurn(newTurn)
    
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkGameEnd(newBoard)) {
      setWinner(false)
    }
  }
  
  const resetGame = () => {
    setWinner(null)
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <Board board={board} updateBoard={updateBoard} turn={turn} winner={winner} resetGame={resetGame} />
  )
}