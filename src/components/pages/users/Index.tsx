import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UsersDetailsRoute } from "../../../data/RouteNames";
import { AllUsersUrlName } from "../../../data/UrlNames";
import Axios from "../../../services/api/Axios";
import { PaginationType } from "../../../shared/Types";
import UserAvatar from "../../../assets/images/xs/avatar5.jpg";
import { AxiosResponse } from "axios";
import BreadCrumbAddBtn from "../../template/BreadCrumbAddBtn";

const Index: FC = () => {
    const [usersList, setUsersList] = useState<PaginationType>();

    const showList = (url: string = "") => {
        Axios.get<any>(url === "" ? AllUsersUrlName : url)
            .then((response: AxiosResponse<PaginationType>) => {
                setUsersList(response.data);
            })
            .catch((error) => {
                throw error;
            });
    };

    useEffect(() => {
        showList();
    }, []);

    if (usersList) {
        return (
            <>
                <BreadCrumbAddBtn />
                <div className='flex -mx-3 clearfix'>
                    <div className='w-full'>
                        <div className='table-responsive'>
                            <table className='table header-border table-hover table-custom spacing8'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Created at</th>
                                        <th>Lastest update</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersList?.data?.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td className='flex items-center'>
                                                    <img
                                                        src={UserAvatar}
                                                        data-toggle='tooltip'
                                                        data-placement='top'
                                                        title=''
                                                        alt='Avatar'
                                                        className='w-10 h-10 rounded'
                                                        data-original-title='Avatar Name'
                                                    />
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>
                                                    <span className='badge badge-default'>
                                                        {item.role.name ??
                                                            "no role"}
                                                    </span>
                                                </td>
                                                <td>{item.created_at}</td>
                                                <td>{item.updated_at}</td>
                                                <td className='space-x-1'>
                                                    <Link
                                                        className='btn btn-sm btn-default'
                                                        title='Edit'
                                                        to={`${UsersDetailsRoute}/${item.id}`}
                                                    >
                                                        <i className='icon-info'></i>
                                                    </Link>
                                                    <button
                                                        type='button'
                                                        onClick={() => {}}
                                                        className='btn btn-sm btn-default js-sweetalert'
                                                        title='Delete'
                                                        data-type='confirm'
                                                    >
                                                        <i className='fa fa-trash-o text-danger'></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-1 items-center'>
                    <div className='w-full lg:w-1/4'>
                        <span className='flex lg:justify-start justify-center'>
                            Showing {usersList?.from} to {usersList?.to} of{" "}
                            {usersList?.total} entries
                        </span>
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <ul className='flex lg:justify-end justify-center my-0.5 pagination'>
                            {usersList?.links?.map((link, i) => {
                                return (
                                    <li
                                        key={i}
                                        className={`page-item${
                                            link.url === null ? " disabled" : ""
                                        }${
                                            link.active === true
                                                ? " active"
                                                : ""
                                        }`}
                                    >
                                        <button
                                            className='page-link'
                                            onClick={() => {
                                                link.url && showList(link.url);
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        ></button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
    return <>Loading...</>;
};

export default Index;
