//tab component
import React, {useState} from 'react'
import { Menu, Segment } from 'semantic-ui-react'


const NavTab = (props) =>  {
  console.log(props)

  //same as set people = props.setPeople
    const {addProduct, buttonText, activeItem} = props

    const [product, setProduct ] = useState()
    const handleItemClick = event => {
      event.preventDefault()

    }
    
    return (
        <div>
           <Segment>
            <img alt='logo' src='../images/AfricanMarketplace-logo.png' />
          </Segment>
          <Menu pointing>
              <Menu.Item name='Home' 
                active={activeItem === 'home'} 
                onClick={handleItemClick} />
            
              <Menu.Item
                  name='About'
                active={activeItem === 'about'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='Contact Us'
                active={activeItem === 'Contact Us'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='Business Profile'
                active={activeItem === 'businessProfile'}
                onClick={handleItemClick}
              />
              <Menu.Menu position='right'>

              <Menu.Item>
                <button icon='search'
                    placeholder='Search...'>{buttonText} 
                </button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
        
        )
}

export default NavTab;