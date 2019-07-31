import React from 'react';
import '../App.css';
import  'semantic-ui-react'
import productInfo from './ProductInfo'
import { Grid, Image } from "semantic-ui-react"


const BusinessProfile = (props) =>{
    console.log(productInfo)

// const products = [productInfo, setProductInfo] = useState([{}])

    return (
        <div>
            {productInfo.map(item => {
                return (
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <Image src='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/12_powerhouse_vegetables_slideshow/intro_cream_of_crop.jpg' />
                                    <h3 className= 'product'>{item.product}</h3>
                                    <p className= 'price'>{item.price}</p>
                                    <p className= 'description'>{item.description}</p>
                                    <p className= 'rating'>{item.rating}</p>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                <h3 className= 'product'>{item.product}</h3>
                                    <p className= 'price'>{item.price}</p>
                                    <p className= 'description'>{item.description}</p>
                                    <p className= 'rating'>{item.rating}</p>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                <h3 className= 'product'>{item.product}</h3>
                                    <p className= 'price'>{item.price}</p>
                                    <p className= 'description'>{item.description}</p>
                                    <p className= 'rating'>{item.rating}</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>  
            )})}
        </div>
    
    )
}

export default BusinessProfile









