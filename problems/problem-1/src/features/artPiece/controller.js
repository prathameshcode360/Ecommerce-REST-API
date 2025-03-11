import ArtPiece from "./model.js";

export default class ArtPieceController {
  create(req, res) {
    try {
      const { title, artist, year, imageUrl } = req.body;
      const newArtPiece = ArtPiece.create(title, artist, year, imageUrl);
      return res
        .status(201)
        .send({ message: "Art piece created.", art: newArtPiece });
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }

  get(req, res) {
    try {
      const artPieces = ArtPiece.getAll();
      return res.status(200).send({ artPieces });
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }

  getOne(req, res) {
    try {
      const { id } = req.params;
      const artPiece = ArtPiece.getById(Number(id));
      if (!artPiece) {
        return res.status(404).send({ message: "Art piece not found." });
      }
      return res.status(200).json(artPiece);
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }

  update(req, res) {
    try {
      const { id } = req.params;
      const { title, artist, year, imageUrl } = req.body;
      const result = ArtPiece.update(Number(id), title, artist, year, imageUrl);

      if (result === "Art piece not found.") {
        return res.status(404).send({ message: result });
      }
      return res.status(200).send({ message: result });
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }

  delete(req, res) {
    try {
      const { id } = req.params;
      const result = ArtPiece.delete(Number(id));

      if (result === "Art piece not found.") {
        return res.status(404).send({ message: result });
      }
      return res.status(200).send({ message: result });
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }
}
