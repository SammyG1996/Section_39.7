import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

const Board = ({ nrows, ncols, chanceLightStartsOn }) => {

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  const createBoard = () => {
    let initialBoard = []; /**Initiates the arraythat will be returned at the end */
    [...Array(nrows)].map((row) => { /**Creates an array the length of the number of rows in the board */
      const cols = [...Array(ncols)].map((c) => Math.random() < chanceLightStartsOn ? true : false) /**creates an array filled with true or false bools based on the num of cols */
      initialBoard.push(cols); /**pushes the array of true and false inot the initial borad */
    }) /**After looping through the initalBoard should be filled with nrows of rows and each row should have ncols of cells */
    console.log(initialBoard)
    return initialBoard;
  }

  const [board, setBoard] = useState(createBoard());

  const hasWon = () => {
    // TODO: check the board in state to determine whether the player has won.
  }

  const flipCellsAround = (coord) => {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number); /**These are the coordinated in the array of arrays when a block is clicked */
      // console.log(y) /**ROW */
      // console.log(x) /**CELL */

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      const boardCopy = oldBoard.map(row => [...row])
    
      flipCell(y, x, boardCopy); /** Cell clicked */
      flipCell(y-1, x, boardCopy); /**Cell Above */
      flipCell(y+1, x, boardCopy); /**Cell Below */
      flipCell(y, x-1, boardCopy) /**Cell Left */
      flipCell(y, x+1, boardCopy)/**Cell Right */

      return boardCopy

    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board
  return (
    <>
    
      <table className="Board">
      <caption>Lights Out</caption>
        {board.map((r, rowIndex) => {
          return (
                <tr>
                  {r.map((isCellLit, cellIndex) => <Cell flipCellsAroundMe={flipCellsAround} isLit={isCellLit} index={`${rowIndex}-${cellIndex}`}/>)}
                </tr>
              )
        })}
      </table>
    </>
  )

  // TODO
}

export default Board;
