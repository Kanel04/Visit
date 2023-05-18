
import React from 'react'

function LieuPage() {
  var url = "https://goo.gl/maps/AvkQECWsgscPPZFq9" + "&output=embed";
 
  return (
    <div>
      <iframe src={url}  loading='lazy'></iframe>
    </div>
  )
}

export default LieuPage