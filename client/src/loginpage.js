import React from "react";
import $ from "jquery";
//import * as firebase from "firebase";

//bulma ui
import { Section, Container, Title, SubTitle, Input, Button, Hero} from 'reactbulma'


class LoginPage extends React.Component {
    // Set the components initial state..

componentWillMount() {
    document.title = "Validator";
  }
    render() {

        return (

            <div>
            {/*<div style={{display:"flex", height:"100%"}}>

                <Section style={{height:"100vh", width:"50%", backgroundImage:"url(https://shk-images.s3.amazonaws.com/wp-content/uploads/2014/09/SHK-Veggie-Stuffed-Chow-Mein-4.jpg)", backgroundPosition:"center", backgroundRepeat:"None", backgroundSize:"cover", position:"relative"}}>

                    <Hero style={{position:"absolute", bottom:"40%", background:"rgba(255,255,255,0.9)", width:"75%"}}>
                        <Hero.Body >
                            <Container style={{width:"100%", textAlign:"center"}}>
                            <Title >
                                Vegetarian eater
                            </Title>
                            <SubTitle>
                                A Faster route to the best vegetarian food.
                            </SubTitle>
                            </Container>
                        </Hero.Body>
                    </Hero>

                </Section>*/}

                <Section style={{width:"90%"}}>

                    <Container style={{width:"70%",bottom:"-30%", textAlign:"center"}}>
                        <form  onSubmit={this.handleSubmit}>

                            <div>
                                <h2>Enter your name, email & password to create an account</h2>
                                <Input style={{marginBottom:"2%"}} warning medium id="userName" placeholder="name"/>
                            </div>

                            <div>
                            <Input style={{marginTop:"2%", marginBottom:"2%"}} warning medium id="userEmail" placeholder="email address"/>
                            </div>

                            <div>

                            <Input style={{marginBottom:"2%"}} warning medium id="userPassword" placeholder="password" type="password" />
                            </div>
                            <div>
                                <Button  type="submit" primary>Next</Button>
                            </div>

                        </form>
                    </Container>
                </Section>
            </div>
        )
    }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //On click of submit button, grab user data and push to firebase.
        const userEmail = $("#userEmail").val().trim();
        const userPassword = $("#userPassword").val().trim();
        const userName = $("#userName").val().trim();
        const user = [userName,userPassword];
        //console.log('this is the user array ' + user)

};

export default LoginPage;