const rolePlayingGame = require("../Index");
const assert = require("chai").assert;
describe("RolePlayingGame", () => {
    it("Can create an instance of the RolePlayingGame", () => {
        let game = new rolePlayingGame();
        assert.isDefined(game.player, "{}");
    });
    it("Can Create an Item", () => {
        let game = rolePlayingGame.gameGrabber.Item()
        let item = new game("Mandolorian Jetpack", "Grants Flight and Speed Boost, Allowing for multiple attacks per turn", 1000)
        assert.equal(item, )
    })
});