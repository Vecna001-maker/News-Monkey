// import React, { Component } from 'react'



// export default class Spinner extends Component {
//   render() {
//     return (
//       <div className='text-center my-3'>
//         <img style={{ height:'100px' , width:"150px"}} src={loading} alt='..' />
//       </div>
//     )
//   }
// }

import React from 'react'
import loading from "../images/Loading_icon.gif"

export default function Spinner() {
  return (
    <div className='text-center my-3'>
      <img style={{ height: '100px', width: "150px" }} src={loading} alt='..' />
    </div>

  )
}

