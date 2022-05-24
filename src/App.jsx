import ShowUserList from './Components/ShowUserListComponent';

import React from "react";

const App = () => {
    return(
        <div>
            <div className="bg-white container border-radius py-5 my-5" style={{borderRadius: 10}}>
                <ShowUserList/>
            </div>
        </div>
    )
}

export default App;