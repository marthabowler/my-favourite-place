import PlaceItem from "./PlaceItem";

function Places(): JSX.Element {
  return (
    <section>
      <PlaceItem
        title={"The best place in Italy"}
        PlaceName={"Ravello"}
        CountryName={"Italy"}
        imageUrl={
          "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fe19e869e-443d-11e6-8b08-e4a8e44356ba.jpg?crop=1500%2C1000%2C0%2C0"
        }
        imageAlt={"A church and a tree with the sea in the background"}
        intro={
          'Ravello has the most amazing views, lemons and 5 star hotels. "It is my favourite place in the world!"'
        }
      />
    </section>
  );
}
export default Places;
