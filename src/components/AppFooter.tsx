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
  ];

  return (
    <footer>
      {footerData.map((loc, index: number) => (
        <FooterItem url={loc.url} name={loc.name} key={index} />
      ))}
    </footer>
  );
}

//
export default AppFooter;

// <footer>
//   //return without map
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
