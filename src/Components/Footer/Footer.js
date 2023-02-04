import React from 'react'

export default function Footer() {

    const year = new Date().getFullYear()

  return (
    <div className="container-fluid mt-5 bg-warning">
        <div className="row text-center">
            <div className="col  p-2">
                <a href="" className='text-white footer-a'>&copy; {year}, Muhammad Ahmed</a>
            </div>
        </div>
    </div>
  )
}