import { FocusCards } from "@/Components/Helpers/focuscards.jsx";

export default function Portfolio() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/Images/P-1.jpeg",
    },
    {
      title: "Valley of life",
      src: "/Images/P-2.jpeg",
    },
    {
      title: "Sala behta hi jayega",
      src: "/Images/P-3.jpeg",
    },
  ];

  return <FocusCards cards={cards} />;
}
