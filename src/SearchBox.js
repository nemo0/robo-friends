import React from "react"

class SearchBox extends React.Component{
    render(){
        return(
            <div className="pa2 tc">
                <input type="search" 
                placeholder="Search Robots" 
                className="pa3 b--green bg-lightest-blue"
                onChange={this.props.searchChange}
                />
            </div>
        )
    }
}

// const SearchBox = ({ searchfield, searchChange }) => {
//     return (
//         <div className="pa2">
//             <input type="search"
//                 placeholder="Search Robots"
//                 className="pa3 b--green bg-lightest-blue"
//                 onChange={searchChange}
//                 />
//         </div>
//     )
// }


export default SearchBox;