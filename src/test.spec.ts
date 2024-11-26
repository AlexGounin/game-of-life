import {expect} from "vitest";


/*
*
* Step 1 : définir une cellule
* Step 2 : modifier une seule cellule
* Step 3 : modifier deux cellules
* Step 4 : définir la taille de la grille de jeu
* Step 5 : choisir que ce qu'il se passe sur les bords
*
*/


// rien donne rien
// 1 cellule donne rien
// XXX

function nextGeneration(before: string) : string {
    let line = ""
    if (before[0] != undefined) {
        line += "."
    }
    if (before[1] != undefined) {
        if (before[0] === 'X' && before[1] === 'X' && before[2] === 'X') {
            line += "X"
        } else {
            line += "."
        }
    }
    if (before[2] != undefined) {
        if (before[1] === 'X' && before[2] === 'X' && before[3] === 'X') {
            line += "X"
        } else {
            line += "."
        }
    }
    if (before[3] != undefined) {
        line += "."
    }
    return line
}
describe('test', () => {

    it('00',()=>{
        expect(nextGeneration("...")).toEqual("...")
    })
    it('01',()=>{
        expect(nextGeneration(".X.")).toEqual("...")
    })
    it('02',()=>{
        expect(nextGeneration("XXX")).toEqual(".X.")
    })
    it('001',()=>{
        expect(nextGeneration(".")).toEqual(".")
    })
    it('002',()=>{
        expect(nextGeneration("X")).toEqual(".")
    })
    it('003',()=>{
        expect(nextGeneration("..")).toEqual("..")
    })
    it('004',()=>{
        expect(nextGeneration("X.")).toEqual("..")
    })
    it('005',()=>{
        expect(nextGeneration(".X")).toEqual("..")
    })
    it('006',()=>{
        expect(nextGeneration("XX")).toEqual("..")
    })
    it('007',()=>{
        expect(nextGeneration("....")).toEqual("....")
    })
    it('008',()=>{
        expect(nextGeneration("XXXX")).toEqual(".XX.")
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