// Category Card Component
// Use for each category on the Comparison page

import React from "react";
import { Card, Image } from "semantic-ui-react";

const CategoryCard = () => {
  
  const categories = [
    'Animal Products',
    'Beans',
    'Cereals - Maize',
    'Cereals - Other',
    'Cereals - Rice',
    'Fruits',
    'Other',
    'Peas',
    'Roots & Tubers',
    'Seeds & Nuts',
    'Vegetables'
  ]
  
  return (
    <div>
      {categories.map((cat, index) => {
        <Card 
        key={index}  
        centered={true} 
          style={{ maxWidth: "350px", width: "100%", height: "auto", margin: "10px" }}>
          <Image
            style={{ width: "100%" }}
            src="http://placeimg.com/640/360/any" //placeholder image src
          />
          <Card.Content>
            <Card.Header>{categories[cat]}</Card.Header>
            <Card.Meta>
              <span className="date">example products, etc.</span>
            </Card.Meta>
            <Card.Description>
              A brief description of the category and what may be included.
            </Card.Description>
          </Card.Content>
        </Card>
      })}
    </div>
      
  );
};

export default CategoryCard;
