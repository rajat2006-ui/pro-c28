class Tree{
    constructor(x,y,scale){
        this.sprite=createSprite(x,y);
        this.sprite.addImage("t",treeImg);
        this.sprite.scale=scale;
    }
}