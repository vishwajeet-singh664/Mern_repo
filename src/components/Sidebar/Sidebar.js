import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='bg-white sidebar p-2'>
        <div className='m-2'>
            <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
            <span className='brand name fs-4'>E-Commerce</span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
            <a className='list-group-item list-group-item-action py-2 my-2'>
                <i className='bi bi-speedometer2 fs-5 me-3'></i>
                <span className="fs-5">Dashboard</span>
            </a>
            <a className='list-group-item list-group-item-action py-2 my-2'>
                <i className='bi bi-house fs-5 me-3'></i>
                <span className="fs-5">Home</span>
            </a>
            <a className='list-group-item list-group-item-action py-2 my-2'>
                <i className='bi bi-list-task fs-5 me-3'></i>
                <span className="fs-5">Task</span>
            </a>
            <a className='list-group-item list-group-item-action py-2 my-2'>
                <i className='bi bi-clipboard fs-5 me-3'></i>
                <span className="fs-5">Report</span>
            </a>
            <a className='list-group-item list-group-item-action py-2 my-2'>
                <i className='bi bi-bell fs-5 me-3'></i>
                <span className="fs-5">Notification</span>
            </a>
            <a className='list-group-item list-group-item-action py-2 my-2'>
                <i className='bi bi-reception-4 fs-5 me-3'></i>
                <span className="fs-5">Workflow</span>
            </a>
            <a className='list-group-item list-group-item-action py-2 my-2'>
                <i className='bi bi-question-circle-fill fs-5 me-3'></i>
                <span className="fs-5">Help</span>
            </a>
            <a className='list-group-item list-group-item-action py-2 my-2'>
                <i className='bi bi-power fs-5 py-2'></i>
                <span className="fs-5">Logout</span>
            </a>
        </div>
    </div>
  )
}

export default Sidebar