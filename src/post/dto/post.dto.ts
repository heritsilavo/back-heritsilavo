export class CreatePostDto {
  image: string;
  nbrVote: number;
  date: Date;
  heure: string; // Assuming 'Heure' is a custom type, it should be replaced by an appropriate type
  legende: string;
  idUser: string;
}