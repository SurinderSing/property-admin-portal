import Link from 'next/link'
import React from 'react'
import { Media } from 'reactstrap'
import { Propertydata } from '../../data/dashboard/data'

const Properylist = () => {
    return (
        <div className="col-xl-3 xl-6 col-lg-12 col-md-6">
            <div className="card">
                <div className="card-header pb-0">
                    <div className="d-flex">
                        <h5>My properties</h5>
                        <a href="add-property.html">+ New</a>
                    </div>
                </div>
                <div className="card-body properties-list">
                    {
                        Propertydata && Propertydata.map((item, i) => {
                            return (
                                <Media key={i}>
                                    <img src={item.img} className="img-fluid" alt='' />
                                    <Media body>
                                        <Link href='/myproperties/propertylist'>
                                            <h6>{item.name}</h6>
                                        </Link>
                                        <ul>
                                            <li>
                                                <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt='' />
                                                <span>{item.bad}</span>
                                            </li>
                                            <li>
                                                <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt='' />
                                                <span>{item.bath}</span>
                                            </li>
                                            <li>
                                                <img src="/assets/images/svg/icon/sofa.svg" className="img-fluid" alt='' />
                                                <span>{item.sofa}</span>
                                            </li>
                                        </ul>
                                        <div>
                                            <span className="light-font">Status: </span>
                                            <span className={`label label-light-${item.class}`}>{item.status}</span>
                                        </div>
                                    </Media>
                                </Media>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Properylist