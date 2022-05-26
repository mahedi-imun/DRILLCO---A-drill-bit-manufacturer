import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    if (adminLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="drawer drawer-mobile ">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet />
            </div>
            <div className="drawer-side ">
                <label htmlFor="sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    {
                        admin || <>
                            <li><Link className=' btn btn-ghost' to='/dashboard/my-order'>My orders</Link></li>
                            <li><Link className=' btn btn-ghost' to='/dashboard/my-review'>Add A Review</Link></li></>
                    }
                    <li><Link className=' btn btn-ghost' to='/dashboard/my-profile'>My Profile</Link></li>

                    {admin &&
                        <>
                            <li><Link className=' btn btn-ghost ' to='/dashboard/make-admin'>Make Admin</Link></li>
                            <li><Link className=' btn btn-ghost ' to='/dashboard/manage-all-order'>Manage All Orders</Link></li>
                            <li><Link className=' btn btn-ghost ' to='/dashboard/add-product'>Add Product</Link></li>
                            <li><Link className=' btn btn-ghost ' to='/dashboard/manage-product'>Manage Products</Link></li>

                        </>
                    }


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;