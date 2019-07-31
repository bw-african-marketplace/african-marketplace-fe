// Product Card Component
// Use for each product item to be reused throughout the application

import React from "react";
import { Card, Image } from "semantic-ui-react";

const Comparison = () => {
  return (
    <div>
      <Card centered={true} style={{ maxWidth: "250px", height: "auto", margin: "10px" }}>
        <Image
          style={{ maxWidth: "250px" }}
          src="http://placeimg.com/640/360/any"
        />
        <Card.Content>
          <Card.Header>Coffee Beans</Card.Header>
          <Card.Meta>
            <span className="date">Category: Beans</span>
          </Card.Meta>
          <Card.Description>
            An aromatic blend of dark and medium roasts.
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Comparison;
