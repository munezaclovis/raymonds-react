import React, { FC, useEffect, useState } from "react";
import { AllUsersUrlName } from "../../../data/UrlNames";
import Axios from "../../../services/api/Axios";
import { PaginationType } from "../../../shared/Types";
import BreadCrumbAddBtn from "../../template/BreadCrumbAddBtn";
import Form from "./Form";
import RoleBadge from "../../utilities/role/RoleBadge";

type Props = {
    visibleForm: boolean;
    setVisibleForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const Index: FC<Props> = ({ visibleForm, setVisibleForm }) => {
    const [usersList, setUsersList] = useState<PaginationType>();
    const [selectedId, setSelectedId] = useState<number>(0);
    const [reload, setReload] = useState<boolean>(false);

    const showForm = (id: number) => {
        setSelectedId(id);
        setVisibleForm(true);
    };

    const showList = (url: string = "") => {
        Axios.get<PaginationType>(url === "" ? AllUsersUrlName : url)
            .then((response) => {
                setUsersList(response.data);
            })
            .catch((error) => {
                throw error;
            });
    };

    useEffect(() => {
        showList();
    }, [reload]);

    if (usersList) {
        return (
            <>
                <BreadCrumbAddBtn />
                <Form
                    visibleForm={visibleForm}
                    setVisibleForm={setVisibleForm}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    reload={reload}
                    setReload={setReload}
                />
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
                                                        src={`https://robohash.org/f6cd95755fc8ecc5a3d575277b09611f?set=set3&bgset=&size=400x400`}
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
                                                    <RoleBadge
                                                        name={item.role.name}
                                                    />
                                                </td>
                                                <td>{item.created_at}</td>
                                                <td>{item.updated_at}</td>
                                                <td className='space-x-1'>
                                                    <button
                                                        className='btn btn-sm btn-default'
                                                        title='Edit'
                                                        onClick={() =>
                                                            showForm(item.id)
                                                        }
                                                    >
                                                        <i className='icon-info'></i>
                                                    </button>
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
