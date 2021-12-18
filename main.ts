namespace SpriteKind {
    export const res = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -100
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.res, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    for (let index = 0; index <= 4; index++) {
        projectile = sprites.createProjectileFromSide(img`
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            `, 0, 200)
        projectile.setPosition(mySprite.x, mySprite.y - 50)
    }
})
let projectile: Sprite = null
let FLOWER: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 200
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`層級1`)
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    tiles.placeOnTile(mySprite, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    FLOWER = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.res)
    tiles.placeOnTile(FLOWER, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
