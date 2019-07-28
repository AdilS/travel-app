import React, { Component } from "react";

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",   
            password: "",
            error: {
                emailErr: "",
                passwordErr: ""
            },
            commonerr: '',
            redirectToReferrer: false

        }
    }

    render() {
       
        // if(this.state.redirectToReferrer === true){
        //     alert('ds');
        //     return <Redirect to="/viewcategory" />;
        // }
        return (<React.Fragment>
            fdfsfds
        </React.Fragment>)
    }

}
export default LoginComponent;