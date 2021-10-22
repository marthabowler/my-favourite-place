// import FooterItem from "./FooterItem";

// function AppFooter(): JSX.Element {
//   return (
//     <footer>
//       <FooterItem
//         url="https://www.istockphoto.com/portfolio/bluejayphoto?mediatype=photography"
//         name="bluejayphoto"
//       />
//       <FooterItem
//         url="https://www.istockphoto.com/portfolio/visualspace?mediatype=photography"
//         name="visualspace"
//       />
//     </footer>
//   );
// }
// export default AppFooter;

import FooterItem from "./FooterItem";

function AppFooter(): JSX.Element {
  // return with map
  const footerData = [
    {
      url: "https://www.istockphoto.com/portfolio/bluejayphoto?mediatype=photography",
      name: "bluejayphoto",
    },
    {
      url: "https://www.istockphoto.com/portfolio/visualspace?mediatype=photography",
      name: "visualspace",
    },
    {
      url: "https://www.geograph.ie/profile/5835",
      name: "Albert Bridge",
    },
  ];

  return (
    <footer>
      {footerData.map((loc, index: number) => (
        <FooterItem url={loc.url} name={loc.name} key={index} />
      ))}
    </footer>
  );
}
export default AppFooter;
