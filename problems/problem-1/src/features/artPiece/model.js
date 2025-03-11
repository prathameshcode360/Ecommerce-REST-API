export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static db = [];

  static create(title, artist, year, imageUrl) {
    const newArtPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(newArtPiece);
    return newArtPiece;
  }

  static getAll() {
    return ArtPiece.db;
  }

  static getById(id) {
    const artPiece = ArtPiece.db.find((p) => p.id == id);
    return artPiece;
  }

  static delete(id) {
    const index = ArtPiece.db.findIndex((p) => p.id === id);
    if (index >= 0) {
      ArtPiece.db.splice(index, 1);
      return "Art piece deleted successfully";
    }
    return "Art piece not found.";
  }

  static update(id, title, artist, year, imageUrl) {
    const piece = ArtPiece.db.find((p) => p.id === id);
    if (!piece) {
      return "Art piece not found.";
    }

    piece.title = title || piece.title;
    piece.artist = artist || piece.artist;
    piece.year = year || piece.year;
    piece.imageUrl = imageUrl || piece.imageUrl;

    return "Updated successfully.";
  }
}
