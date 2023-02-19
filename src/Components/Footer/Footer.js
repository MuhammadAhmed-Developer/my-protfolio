import React from 'react'

export default function Footer() {

    const year = new Date().getFullYear()

  return (
    <div className="container-fluid mt-5 bg-warning">
        <div className="row text-center">
            <div className="col-11  p-2">
                <a href="#" className='text-dark footer-a'>&copy; {year}, All Right Reserved Muhammad Ahmed</a>
            </div>
            <div className="col-1  p-2">
                <a href="#" className='text-dark footer-a'><i class="bi bi-arrow-up-circle-fill fs-5"></i></a>
            </div>
        </div>
    </div>
  )
}