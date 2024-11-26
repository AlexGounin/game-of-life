import {expect} from "vitest";

describe('test', () => {

    it('XXX',()=>{
        expect("a").toEqual("a")
    })
})


// 1 - une cellule vivante ayant moins de deux cellules voisines vivantes va mourir par sous population
// 2 - une cellule vivante ayant deux ou trois cellules voisines vivantes va survivre
// 3 - une cellule vivante ayant plus de trois cellules voisines vivantes va mourir par surpopulation
// 4 - une cellule morte ayant exactement trois cellules voisines vivantes va revenir à la vie, par reproduction

// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
//   Any live cell with two or three live neighbours lives on to the next generation.
//   Any live cell with more than three live neighbours dies, as if by overpopulation.
//   Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.