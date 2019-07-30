// Comparison Page Component

// NEED TO UPDATE EACH CARD TO BE A LINK

import React from "react";
import { Container, Header, Grid, Card, Image, Link } from "semantic-ui-react";
import ComparisonPage from "./ComparisonPage"


const Comparison = () => {
  
  const animalProducts = require("../images/categories/meats.jpg")
  const beans = require("../images/categories/beans.jpg")
  const maize = require("../images/categories/maize.jpg")
  const rice = require("../images/categories/rice.jpg")
  const cerealOther = require("../images/categories/wheat.jpg")
  const fruit = require("../images/categories/fruit.jpg")
  const peas = require("../images/categories/peas.jpg")
  const roots = require("../images/categories/roots.jpg")
  const other = require("../images/categories/coffee.jpg")
  const vegetables = require("../images/categories/vegetables.jpg")
  const nuts = require("../images/categories/nuts.jpg")

  return (
    <div>
      <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Header size="large">Category List</Header>
        <Header size="small">Choose a category below to view products within that category</Header>
        <Grid centered={true} stackable={true}> 
          <Grid.Row columns={3}>

              <Card centered={true} style={{ maxWidth: "350px", width: "100%", height: "auto", margin: "10px" }}>
                <Image style={{ width: "100%" }} src={animalProducts} />
                <Card.Content>
                  <Card.Header>Animal Products</Card.Header>
                  <Card.Meta>
                    <span className="date">eggs, honey, meats, etc.</span>
                  </Card.Meta>
                  <Card.Description>
                    A brief description of the category and what may be included.
                  </Card.Description>
                </Card.Content>
              </Card>

            <Card centered={true} style={{ maxWidth: "350px", width: "100%", height: "auto", margin: "10px" }}>
              <Image style={{ width: "100%" }} src={beans} />
              <Card.Content>
                <Card.Header>Beans</Card.Header>
                <Card.Meta>
                  <span className="date">Kidney, Soya, White, etc.</span>
                </Card.Meta>
                <Card.Description>
                  A brief description of the category and what may be included.
                </Card.Description>
              </Card.Content>
            </Card> 

            <Card centered={true} style={{ maxWidth: "350px", width: "100%", height: "auto", margin: "10px" }}>
              <Image style={{ width: "100%" }} src={maize} />
              <Card.Content>
                <Card.Header>Cereals - Maize</Card.Header>
                <Card.Meta>
                  <span className="date">Dry, Green, Maize Bran, etc.</span>
                </Card.Meta>
                <Card.Description>
                  A brief description of the category and what may be included.
                </Card.Description>
              </Card.Content>
            </Card>    

          </Grid.Row>
          <Grid.Row columns={3}>

          <Card centered={true} style={{ maxWidth: "350px", width: "100%", height: "auto", margin: "10px" }}>
              <Image style={{ width: "100%" }} src={rice} />
              <Card.Content>
                <Card.Header>Cereals - Rice</Card.Header>
                <Card.Meta>
                  <span className="date">Kahama, Kayiso, Mbeya, etc.</span>
                </Card.Meta>
                <Card.Description>
                  A brief description of the category and what may be included.
                </Card.Description>
              </Card.Content>
            </Card>

            <Card centered={true} style={{ maxWidth: "350px", width: "100%", height: "auto", margin: "10px" }}>
              <Image style={{ width: "100%" }} src={cerealOther} />
              <Card.Content>
                <Card.Header>Cereals - Other</Card.Header>
                <Card.Meta>
                  <span className="date">barley, millet, sorghum, wheat, etc.</span>
                </Card.Meta>
                <Card.Description>
                  A brief description of the category and what may be included.
                </Card.Description>
              </Card.Content>
            </Card>

            <Card centered={true} style={{ maxWidth: "350px", width: "100%", height: "auto", margin: "10px" }}>
              <Image style={{ width: "100%" }} src={fruit} />
              <Card.Content>
                <Card.Header>Fruits</Card.Header>
                <Card.Meta>
                  <span className="date">bananas, citrus, exotic fruits, etc.</span>
                </Card.Meta>
                <Card.Description>
                  A brief description of the category and what may be included.
                </Card.Description>
              </Card.Content>
            </Card>

          </Grid.Row>
          <Grid.Row columns={3}>

          <Card centered={true} style={{ maxWidth: "350px", width: "100%", height: "auto", margin: "10px" }}>
              <Image style={{ width: "100%" }} src={peas} />
              <Card.Content>
                <Card.Header>Peas</Card.Header>
                <Card.Meta>
                  <span className="date">chic, dry, green, etc.</span>
                </Card.Meta>
                <Card.Description>
                  A brief description of the category and what may be included.
                </Card.Description>
              </Card.Content>
            </Card>

            <Card centered={true} style={{ maxWidth: "350px", width: "100%", height: "auto", margin: "10px" }}>
              <Image style={{ width: "100%" }} src={roots} />
              <Card.Content>
                <Card.Header>Roots & Tubers</Card.Header>
                <Card.Meta>
                  <span className="date">potatoes, sunflowers, etc.</span>
                </Card.Meta>
                <Card.Description>
                  A brief description of the category and what may be included.
                </Card.Description>
              </Card.Content>
            </Card>

            <Card centered={true} style={{ maxWidth: "350px", width: "100%", height: "auto", margin: "10px" }}>
              <Image style={{ width: "100%" }} src={other} />
              <Card.Content>
                <Card.Header>Other</Card.Header>
                <Card.Meta>
                  <span className="date">coffee, cotton, tea, tobacco, etc.</span>
                </Card.Meta>
                <Card.Description>
                  A brief description of the category and what may be included.
                </Card.Description>
              </Card.Content>
            </Card>

          </Grid.Row>
          <Grid.Row columns={2}>
            
          <Card centered={true} style={{ maxWidth: "350px", width: "100%", height: "auto", margin: "10px" }}>
              <Image style={{ width: "100%" }} src={vegetables} />
              <Card.Content>
                <Card.Header>Vegetables</Card.Header>
                <Card.Meta>
                  <span className="date">carrots, cauliflower, cucumber, etc.</span>
                </Card.Meta>
                <Card.Description>
                  A brief description of the category and what may be included.
                </Card.Description>
              </Card.Content>
            </Card>

            <Card centered={true} style={{ maxWidth: "350px", width: "100%", height: "auto", margin: "10px" }}>
              <Image style={{ width: "100%" }} src={nuts} />
              <Card.Content>
                <Card.Header>Seeds & Nutes</Card.Header>
                <Card.Meta>
                  <span className="date">nuts, sunflowers, etc.</span>
                </Card.Meta>
                <Card.Description>
                  A brief description of the category and what may be included.
                </Card.Description>
              </Card.Content>
            </Card>

          </Grid.Row>

        </Grid>
      </Container>
      <ComparisonPage />
    </div>
  );
};

export default Comparison;

//style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}