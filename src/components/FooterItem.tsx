import AppHeader from "./AppHeader";

interface FooterProps {
  name: string;
  url: string;
}

function FooterItem(props: FooterProps): JSX.Element {
  return (
    <>
      <p>
        Photo credits to :<a href={props.url}>{props.name}</a>
      </p>
    </>
  );
}

export default FooterItem;
