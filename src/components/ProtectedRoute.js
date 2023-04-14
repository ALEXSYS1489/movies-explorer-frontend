import { Route, Redirect } from "react-router-dom";

function ProtectedRoute ({loggedIn ,component: Component, ...props}){

    return (
        <Route>
          {
            loggedIn
            ? <Component {...props}/>
            : <Redirect to="/"/>
          }
        </Route>
      );

}

export default ProtectedRoute; 