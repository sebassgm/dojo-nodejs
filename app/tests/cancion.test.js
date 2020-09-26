const assert = require("chai").assert;
const cancionesController = require("../controllers/canciones.controller.js");

describe("Tests cancion services", function() {
    it("Get All tracks", async function() {
        const result = await cancionesController.findAllTracks();
        console.log(result);
    });
}); 