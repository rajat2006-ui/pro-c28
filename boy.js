class Boy{
    constructor(x,y,scale){
        this.sprite=createSprite(x,y);
        this.sprite.addImage("b",boyImg);
        this.sprite.scale=scale;
    }
}