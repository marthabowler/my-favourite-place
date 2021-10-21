import FooterItem from "./FooterItem";

function AppFooter(): JSX.Element {
  return (
    <footer>
      <FooterItem
        url="https://www.istockphoto.com/portfolio/bluejayphoto?mediatype=photography"
        name="bluejayphoto"
      />
      <FooterItem
        url="https://www.istockphoto.com/portfolio/visualspace?mediatype=photography"
        name="visualspace"
      />
    </footer>
  );
}
export default AppFooter;
