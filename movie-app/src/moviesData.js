import janaNayaganImg     from "./assets/jana-nayagan.jpg";
import karuppuImg         from "./assets/karuppu.jpg";
import likImg             from "./assets/lik.jpg";
import coolieImg          from "./assets/coolie.jpg";
import parasakhtiImg      from "./assets/parasakthi.jpg";   
import projecthailmaryImg from "./assets/projecthailmary.jpg";
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
  {
    id: 4,
    title: "Coolie",
    genre: "Action",
    rating: 4.3,
    year: 2025,
    runtime: "160 min",
    description:
      "Rajinikanth plays a coolie worker who takes on a powerful criminal empire in this mass action entertainer.",
    poster: coolieImg,           
  },
  {
    id: 5,
    title: "Parasakthi",
    genre: "Drama",
    rating: 4.6,
    year: 1952,
    runtime: "175 min",
    description:
      "A classic Tamil drama about three brothers facing hardship, injustice, and social struggles in post-war India.",
    poster: parasakhtiImg,        
  },
  {
    id: 6,
    title: "Project Hail Mary",
    genre: "Sci-Fi",
    rating: 4.8,
    year: 2025,
    runtime: "145 min",
    description:
      "An astronaut wakes up alone in deep space with no memory, on a mission to save Earth from extinction.",
    poster: projecthailmaryImg,   
  },
];
export default movies;