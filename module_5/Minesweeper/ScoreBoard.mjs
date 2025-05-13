"use strict";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { SpriteInfoList, gameLevel } from "./Minesweeper.mjs";
//Lag en klasse med navn TScoreBoard
//Klassen har tre sprites;
// - Øvre venstre hjørne (antall timer). TSpriteNumber
// - Øvre høyre hjørne (tid). TSpriteNumber
// - Øvre midten (smiley). TSpriteButton
//Konstructørens parameter er : aSpriteCanvas
//Klassen trenger en draw metode som tegner alle sprites

export class TScoreBoard{
    #mines
    #time
    #smiley
    constructor(aSpriteCanvas){
        const pos = new lib2d.TPoint(112, 22);
        this.#mines = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers);
        this.#mines.justify = libSprite.ESpriteNumberJustifyType.Right;
        this.#mines.digits = 3;
        this.#mines.value = gameLevel.Mines;
        
        pos.x = aSpriteCanvas.canvas.width - 20;
        this.#time = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers);
        this.#time.justify = libSprite.ESpriteNumberJustifyType.Right;
        this.#time.digits = 3;
        this.#time.value = 0;
    }

    draw(){
        this.#mines.draw();
        this.#time.draw();
    }
}