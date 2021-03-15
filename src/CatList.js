// write your CatList component here

import React, { Component } from 'react'


export class CatList extends Component {
    
   
    render() {
        const { catPics } = this.props;
        const cats = catPics.map(cat => {
            return (<img key={cat.id} src={cat.url} alt={cat.id} />)
        })
      
        return (
            <div>
                {cats}
            </div>
        )
    }
}

export default CatList




// optional to write listCats as a function
// import React from 'react';

// class CatList extends React.Component {
//   listCats = () => {
//     return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
//   }

//   render() {
//     return (
//       <div>
//         {this.listCats()}
//       </div>
//     )
//   }
// }

// export default CatList;
