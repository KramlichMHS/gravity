// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000404040404040404040404040404040404040404040404030404040404040404040404040303040403030404040404040404040404040404040404040303030303030303030302010201020102010201`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . 2 . . . . . . 
. . . . . . 2 2 . . 
2 2 . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthEast1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
