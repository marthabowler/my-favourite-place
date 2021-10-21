interface PlacesProps {
  title: string;
  PlaceName: string;
  CountryName: string;
  imageUrl: string;
  imageAlt: string;
  intro: string;
}

function PlaceItem(props: PlacesProps): JSX.Element {
  return (
    <section id={props.PlaceName}>
      <img src={props.imageUrl} alt={props.imageAlt} />
      <h2>{props.title}</h2>
      <h3>
        {props.PlaceName} {","} {props.CountryName}
      </h3>
      <p>{props.intro}</p>
    </section>
  );
}

export default PlaceItem;
