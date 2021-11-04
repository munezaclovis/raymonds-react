import React, { FC, FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserAvatar from "../../../assets/images/sm/avatar5.jpg";
import { IRole, IRoleErrors } from "../../../models/Role";

interface Props {}

const Details: FC<Props> = () => {
    const [state, setState] = useState<IRole>({} as IRole);
    const [errors, setErrors] = useState<IRoleErrors>({} as IRoleErrors);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({ message: null, name: null });
    };

    return (
        <>
            <div className='flex flex-wrap clearfix'>
                <div className='w-full mx-auto px-3'>
                    <div className='card'>
                        <div className='header'>
                            <h2>Edit info</h2>
                        </div>
                        <div className='body'>
                            <form
                                className='flex flex-wrap justify-center items-center'
                                onSubmit={handleSubmit}
                            >
                                <div className='w-full px-3.5'>
                                    <div className='form-group'>
                                        <small>Name:</small>
                                        <input
                                            type='text'
                                            name='name'
                                            value={state?.name ?? ""}
                                            className={`form-control${
                                                errors?.name !== null &&
                                                errors?.name !== undefined
                                                    ? " border-red-700"
                                                    : ""
                                            }`}
                                            placeholder='role name'
                                            required={true}
                                            onChange={(
                                                e: FormEvent<HTMLInputElement>
                                            ) => {
                                                setState({
                                                    ...state,
                                                    name: e.currentTarget.value,
                                                });
                                            }}
                                        />
                                        <div
                                            className={`invalid-feedback${
                                                errors?.name !== null
                                                    ? " block"
                                                    : ""
                                            }`}
                                        >
                                            {errors?.name?.map((item, i) => {
                                                return <p key={i}>{item}</p>;
                                            }) ?? ""}
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex justify-end px-3.5'>
                                    <button className='btn btn-outline-info'>
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
