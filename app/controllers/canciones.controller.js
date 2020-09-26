const { find } = require("../models/track.model");
const Track = require("../models/track.model");
const tracksService = require("../services/spotify/spotify.service");
 
async function tracksTest(cancion) {
 let result = await tracksService(cancion);
 return result;
}
 
// Implementar los métodos create, findAll, findOne, deleteById
async function createTrack(req, res) {
 let track = new Track();
 let cancion = await tracksTest(req.query.cancion);
 track.nombre = cancion.name;
 track.artista = cancion.artista;
 track.album = cancion.album;
 track.url = cancion.url;
 track.id = cancion.id;
 track.img = cancion.img;
 
 let saveTrack = await track
   .save()
   .then((data) => res.send(data))
   .catch((err) => {
     res.status(500).send({
       message: err.message || "Error creando cancion",
     });
   });
}
 
async function findAllTracks(req, res) {
 let h = await Track.find()
   .then((data) => res.send(data))
   .catch((err) => {
     res.status(500).send({
       message: err.message || "Error retornando cancio",
     });
   });
}
 
module.exports = {
 findAllTracks: findAllTracks,
 createTrack: createTrack,
};