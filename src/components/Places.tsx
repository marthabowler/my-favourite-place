// import PlaceItem from "./PlaceItem";

// function Places(): JSX.Element {
//   return (
//     <>
//       <PlaceItem
//         title={"The best place in Italy"}
//         PlaceName={"Ravello"}
//         CountryName={"Italy"}
//         imageUrl={
//           "https://media.istockphoto.com/photos/amalfi-coast-from-villa-rufolo-gardens-in-ravello-campania-italy-picture-id521206586?b=1&k=20&m=521206586&s=170667a&w=0&h=pQEWNHloKzmPsJ_W5rHHmoRwUBvQ9ZWbF5AopGNUCd8="
//         }
//         imageAlt={"A church and a tree with the sea in the background"}
//         mapUrl={
//           "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12108.165440557066!2d14.605417837129933!3d40.65101866941549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b95759806ec37%3A0xfc15a139e8011360!2s84010%20Ravello%2C%20SA%2C%20Italy!5e0!3m2!1sen!2suk!4v1634831634859!5m2!1sen!2suk"
//         }
//         intro={
//           'Ravello has the most amazing views, lemons and 5 star hotels. "It is my favourite place in the world!"'
//         }
//       />
//       <PlaceItem
//         title={"My Favourite Place in London"}
//         PlaceName={"Borough Market"}
//         CountryName={"London"}
//         imageUrl={
//           "https://media.istockphoto.com/photos/borough-market-street-food-picture-id904187812?b=1&k=20&m=904187812&s=170667a&w=0&h=wsznexHfdeP2YQB9HnD0ZX-vq4_KNJkFqqw1aYUNMXE="
//         }
//         imageAlt={
//           "A hand holding a burger with a market in the background, the sign says borough market"
//         }
//         mapUrl={
//           "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.423259814924!2d-0.09315168379700585!3d51.505450379634745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035775cf660f%3A0x3128e7e59ca044b9!2sBorough%20Market!5e0!3m2!1sen!2suk!4v1634831707969!5m2!1sen!2suk"
//         }
//         intro={
//           'Borough market is located in London near the Shard, it has the most amazing diversity of food. "I buy my mozzarella there every month!"'
//         }
//       />
//     </>
//   );
// }
// export default Places;

import PlaceItem from "./PlaceItem";

function Places(): JSX.Element {
  const placesData = [
    {
      title: "The best place in Italy",
      PlaceName: "Ravello",
      CountryName: "Italy",
      imageUrl:
        "https://media.istockphoto.com/photos/amalfi-coast-from-villa-rufolo-gardens-in-ravello-campania-italy-picture-id521206586?b=1&k=20&m=521206586&s=170667a&w=0&h=pQEWNHloKzmPsJ_W5rHHmoRwUBvQ9ZWbF5AopGNUCd8=",
      imageAlt: "A church and a tree with the sea in the background",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12108.165440557066!2d14.605417837129933!3d40.65101866941549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b95759806ec37%3A0xfc15a139e8011360!2s84010%20Ravello%2C%20SA%2C%20Italy!5e0!3m2!1sen!2suk!4v1634831634859!5m2!1sen!2suk",
      intro:
        'Ravello has the most amazing views, lemons and 5 star hotels. "It is my favourite place in the world!"',
    },
    {
      title: "My Favourite Place in London",
      PlaceName: "Borough Market",
      CountryName: "London",
      imageUrl:
        "https://media.istockphoto.com/photos/borough-market-street-food-picture-id904187812?b=1&k=20&m=904187812&s=170667a&w=0&h=wsznexHfdeP2YQB9HnD0ZX-vq4_KNJkFqqw1aYUNMXE=",
      imageAlt:
        "A hand holding a burger with a market in the background, the sign says borough market",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.423259814924!2d-0.09315168379700585!3d51.505450379634745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035775cf660f%3A0x3128e7e59ca044b9!2sBorough%20Market!5e0!3m2!1sen!2suk!4v1634831707969!5m2!1sen!2suk",
      intro:
        'Borough market is located in London near the Shard, it has the most amazing diversity of food. "I buy my mozzarella there every month!"',
    },
  ];

  return (
    <>
      {placesData.map((loc, index: number) => (
        <PlaceItem
          title={loc.title}
          PlaceName={loc.PlaceName}
          CountryName={loc.CountryName}
          imageUrl={loc.imageUrl}
          imageAlt={loc.imageAlt}
          mapUrl={loc.mapUrl}
          intro={loc.intro}
          key={index}
        />
      ))}
    </>
  );
}

export default Places;
