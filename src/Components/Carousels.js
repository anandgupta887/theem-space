import Carousel from "react-material-ui-carousel";
import { Button, Paper } from "@material-ui/core";

function Carousels() {
  var items = [
    {
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=764&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586804257780-6874ce8151f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
  ];
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const divStyle = {
    backgroundImage: "url(" + props.item.image + ")",
  };

  return <Paper style={divStyle}></Paper>;
}

export default Carousels;
