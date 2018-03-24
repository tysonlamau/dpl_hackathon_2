import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
        Button,
        Card,
        Divider,
        Header,
        //Image,
        Segment,} from 'semantic-ui-react';
import styled from 'styled-components'; //?? have it?

class menuItems extends React.Component {
  
  state = {dishes: []}
  menu = () =>
  {
    const {dishes } = this.props;
    return dishes.map( m => 
      <div>
      <Card 
        key={ m.id }
        color= 'purple'
      >
        <Card.Content>
          <Card.Header>
            { m.dish }
          </Card.Header>
          <Divider/>
          <Card.Content>
            {/*<Image src = {m.image}/>*/}
            --insert image here--
            <Divider/>
          </Card.Content>
          <Card.Description>
            {m.price}<br/>
            {m.description}
          </Card.Description>
        </Card.Content>
        </Card>
        
        
          <Button
           color = 'blue'>
            View          
          </Button>
        <Button>Add</Button>
      </div>
      
    )
  }

  render() {
    return (
      <div className = 'main-page'>
      <Segment inverted>
        <Header 
          as='h3' 
          size='huge'
          textAlign='center'
          inverted color ='purple'>
              Menu          
          </Header>
          </Segment>
          
            <Card.Group itemsPerRow={ 4 }>
                    { this.menu() }
            </Card.Group>
            </div>
          )
        }
       
    
  }



const mapStateToProps = (state, props) => {
  return {
    
    dishes: state.dishes
  }
}

export default connect(mapStateToProps)(menuItems);