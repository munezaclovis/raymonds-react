import React, { FC, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import UserAvatar from "../../../assets/images/sm/avatar5.jpg";
import { UsersAddRoute } from "../../../data/RouteNames";
import { UsersUrlName } from "../../../data/UrlNames";
import { IUser } from "../../../models/User";
import Axios from "../../../services/api/Axios";

interface Props {}

const Details: FC<Props> = () => {
    const { id } = useParams<{ id: string }>();
    const [state, setState] = useState<IUser>({ name: "", email: "" } as IUser);

    useEffect(() => {
        Axios.get<IUser>(UsersUrlName + "/" + id)
            .then((response) => {
                setState(response.data);
            })
            .catch((error) => {
                throw error;
            });
    }, [id]);

    return (
        <>
            <div className='w-full flex justify-end px-1.5'>
                <Link className='btn btn-outline-info' to={UsersAddRoute}>
                    <i className='fa fa-plus mr-1'></i>
                    Add new
                </Link>
            </div>
            <div className='flex flex-wrap clearfix'>
                <div className='w-full md:w-1/2 xl:w-3/4 mx-auto px-3'>
                    <div className='card'>
                        <div className='header'>
                            <h2>Edit info</h2>
                        </div>
                        <div className='body'>
                            <div className='flex flex-wrap justify-center items-center'>
                                <div className='w-full xl:w-1/3 px-3.5'>
                                    <div className='form-group'>
                                        <small>Name:</small>
                                        <input
                                            type='text'
                                            name='name'
                                            value={state?.name ?? ""}
                                            className='form-control'
                                            placeholder='name'
                                            onChange={(
                                                e: FormEvent<HTMLInputElement>
                                            ) => {
                                                setState({
                                                    ...state,
                                                    name: e.currentTarget.value,
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='w-full xl:w-1/3 px-3.5'>
                                    <div className='form-group'>
                                        <small>email:</small>
                                        <input
                                            type='email'
                                            name='email'
                                            value={state?.email ?? ""}
                                            className='form-control'
                                            placeholder='email'
                                            onChange={(
                                                e: FormEvent<HTMLInputElement>
                                            ) => {
                                                setState({
                                                    ...state,
                                                    email: e.currentTarget
                                                        .value,
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='w-full xl:w-1/3 px-3.5'>
                                    <div className='form-group'>
                                        <small>role:</small>
                                        <select
                                            name='role'
                                            className='form-control show-tick'
                                            value={state?.role?.name ?? ""}
                                            onChange={(
                                                e: FormEvent<HTMLSelectElement>
                                            ) => {
                                                setState({
                                                    ...state,
                                                    role: {
                                                        ...state.role,
                                                        name: e.currentTarget
                                                            .value,
                                                    },
                                                });
                                            }}
                                        >
                                            <option value=''>
                                                Select Role Type
                                            </option>
                                            <option value=''>
                                                Super Admin
                                            </option>
                                            <option value=''>Admin</option>
                                            <option value=''>Employee</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='w-full flex justify-end px-3.5'>
                                    <button className='btn btn-theme'>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 xl:w-1/4 mx-auto px-3'>
                    <div className='card'>
                        <div className='header'>
                            <h2>Basic Info</h2>
                        </div>
                        <div className='body'>
                            <small className='text-muted'>User Profile:</small>
                            <div className='w-200 mx-auto pt-4 pb-2'>
                                <img
                                    src={UserAvatar}
                                    className='mx-auto w-full rounded-md'
                                    alt='User profile'
                                />
                            </div>
                            <hr className='my-3' />
                            <small className='text-muted'>Name:</small>
                            <p className='mb-3'>{state?.name}</p>
                            <hr className='my-3' />
                            <small className='text-muted'>Email address:</small>
                            <p className='mb-3'>{state?.email}</p>
                            <hr className='my-3' />
                            <small className='text-muted'>Social:</small>
                            <p className='mb-3'>
                                <i className='fa fa-twitter mr-3'></i>
                                https//twitter.com/example
                            </p>
                            <p className='mb-3'>
                                <i className='fa fa-facebook mr-3'></i>
                                https//facebook.com/example
                            </p>
                            <p className='mb-3'>
                                <i className='fa fa-github mr-3'></i>
                                https//github.com/example
                            </p>
                            <p className='mb-3'>
                                <i className='fa fa-instagram mr-3'></i>
                                https//instagram.com/example
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
