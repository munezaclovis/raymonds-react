import React, { FC, useState, useEffect, FormEvent } from "react";
import { Modal } from "react-bootstrap";
import { IRole, IRoleErrors } from "../../../models/Role";

type Props = {
    visibleForm: boolean;
    setVisibleForm: React.Dispatch<React.SetStateAction<boolean>>;
    selectedId: number;
};

const Form: FC<Props> = ({ visibleForm, setVisibleForm, selectedId }) => {
    const [state, setState] = useState<IRole>({} as IRole);
    const [errors, setSerrors] = useState<IRoleErrors>({} as IRoleErrors);
    const handleSubmit = () => {};

    useEffect(() => {
        if (selectedId !== 0) {
        }
    }, [selectedId]);

    return (
        <div>
            <Modal show={visibleForm} onHide={() => setVisibleForm(false)}>
                <Modal.Header
                    closeButton={true}
                    closeLabel='Close'
                    closeVariant='white'
                >
                    <Modal.Title>Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        className='flex flex-wrap justify-center items-center'
                        onSubmit={handleSubmit}
                    >
                        <div className='w-full px-3.5'>
                            <div className='form-group'>
                                <small>Name:</small>
                                <input
                                    type='text'
                                    name='name'
                                    value={state?.name}
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
                                        errors?.name !== null ? " block" : ""
                                    }`}
                                >
                                    {errors?.name?.map((item, i) => {
                                        return <p key={i}>{item}</p>;
                                    }) ?? ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-outline-primary'>Save</button>
                    <button className='btn btn-outline-danger'>Cancel</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Form;
