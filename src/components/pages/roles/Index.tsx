import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { RolesDetailsRoute } from "../../../data/RouteNames";
import { AllRolesUrlName } from "../../../data/UrlNames";
import Axios from "../../../services/api/Axios";
import { PaginationType } from "../../../shared/Types";
import BreadCrumbAddBtn from "../../template/BreadCrumbAddBtn";
import Form from "./Form";

type Props = {
    visibleForm: boolean;
    setVisibleForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const Index: FC<Props> = ({ visibleForm, setVisibleForm }) => {
    const [rolesList, setRolesList] = useState<PaginationType>();
    const [selectedId, setSelectedId] = useState<number>(0);

    const showForm = (id: number) => {
        setSelectedId(id);
    };

    const showList = (url: string = "") => {
        Axios.get<PaginationType>(url === "" ? AllRolesUrlName : url)
            .then((response) => {
                setRolesList(response.data);
            })
            .catch((error) => {
                throw error;
            });
    };

    useEffect(() => {
        showList();
    }, []);

    if (rolesList) {
        return (
            <>
                <BreadCrumbAddBtn />
                <Form
                    visibleForm={visibleForm}
                    setVisibleForm={setVisibleForm}
                    selectedId={selectedId}
                />
                <div className='flex -mx-3 clearfix'>
                    <div className='w-full'>
                        <div className='table-responsive'>
                            <table className='table header-border table-hover table-custom spacing8'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rolesList?.data?.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td className='flex items-center'></td>
                                                <td>{item.name}</td>
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
                            Showing {rolesList?.from} to {rolesList?.to} of{" "}
                            {rolesList?.total} entries
                        </span>
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <ul className='flex lg:justify-end justify-center my-0.5 pagination'>
                            {rolesList?.links?.map((link, i) => {
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
