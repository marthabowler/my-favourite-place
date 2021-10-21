import PlaceItem from "./PlaceItem";

function Places(): JSX.Element {
  return (
    <>
      <PlaceItem
        title={"The best place in Italy"}
        PlaceName={"Ravello"}
        CountryName={"Italy"}
        imageUrl={
          "https://media.istockphoto.com/photos/amalfi-coast-from-villa-rufolo-gardens-in-ravello-campania-italy-picture-id521206586?b=1&k=20&m=521206586&s=170667a&w=0&h=pQEWNHloKzmPsJ_W5rHHmoRwUBvQ9ZWbF5AopGNUCd8="
        }
        imageAlt={"A church and a tree with the sea in the background"}
        intro={
          'Ravello has the most amazing views, lemons and 5 star hotels. "It is my favourite place in the world!"'
        }
      />
      <PlaceItem
        title={"My Favourite Place in London"}
        PlaceName={"Borough Market"}
        CountryName={"London"}
        imageUrl={
          "https://media.istockphoto.com/photos/borough-market-street-food-picture-id904187812?b=1&k=20&m=904187812&s=170667a&w=0&h=wsznexHfdeP2YQB9HnD0ZX-vq4_KNJkFqqw1aYUNMXE="
        }
        imageAlt={
          "A hand holding a burger with a market in the background, the sign says borough market"
        }
        intro={
          'Borough market is located in London near the Shard, it has the most amazing diversity of food. "I buy my mozzarella there every month!"'
        }
      />
    </>
  );
}
export default Places;
