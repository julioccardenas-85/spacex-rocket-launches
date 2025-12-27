import Card from "./Card";
import { getLaunches } from "@/lib/getLaunches";
import { Launch } from "@/types/launch";

export default async function CardGrid() {
  const launches = await getLaunches();
    console.log(launches)
  const successful = launches.filter((l: Launch) => l.success === true).length;
  const failed = launches.filter((l: Launch) => l.success === false).length;
  const upcoming = launches.filter((l: Launch) => l.upcoming).length;

  const cards = [
    { title: "Total Launches", value: launches.length.toString() },
    { title: "Succesful", value: successful.toString() },
    { title: "Failed", value: failed.toString() },
    { title: "Upcoming", value: upcoming.toString() },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </section>
  );
}
