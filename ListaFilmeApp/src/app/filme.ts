export class Filme{
  public Title: string;
  public Year: string;
  public Released: string;
  public Genre: string;
  public Writer: string;
  public Plot: string;
  public Language: string;
  public Country: string;
  public Poster: string;
  public Type: string;
  public Favoritos: boolean;

  constructor() {
    this.Title = '';
    this.Year = '';
    this.Released = '';
    this.Genre = '';
    this.Writer = '';
    this.Plot = '';
    this.Language = '';
    this.Country = '';
    this.Poster = '';
    this.Type = '';
    this.Favoritos = false;
  }
}
