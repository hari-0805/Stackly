import janaNayaganImg from "./assets/jana-nayagan.jpg";
import karuppuImg from "./assets/karuppu.jpg";
import likImg from "./assets/lik.jpg";
const movies = [
  {
    id: 1,
    title: "Jana Nayagan",
    genre: "Action",
    rating: 4.2,
    year: 2024,
    runtime: "158 min",
    description:
      "A mass action entertainer featuring a powerful leader who fights for the people against a corrupt system.",
    poster: janaNayaganImg,
  },
  {
    id: 2,
    title: "Karuppu",
    genre: "Thriller",
    rating: 4.0,
    year: 2023,
    runtime: "142 min",
    description:
      "A gripping Tamil thriller that dives deep into the dark side of society with a raw and intense narrative.",
    poster: karuppuImg,
  },
  {
    id: 3,
    title: "Lik",
    genre: "Drama",
    rating: 3.8,
    year: 2024,
    runtime: "130 min",
    description:
      "An emotional Tamil drama that explores family bonds, struggles, and the strength of human relationships.",
    poster: likImg,
  },
];
export default movies;
