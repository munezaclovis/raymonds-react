import React, { FC, useState, useEffect, FormEvent } from "react";
import { Modal } from "react-bootstrap";
import { RolesUrlName } from "../../../data/UrlNames";
import { IRole, IRoleErrors } from "../../../models/Role";
import Axios from "../../../services/api/Axios";
import Loading from "../../utilities/loading/Loading";

type Props = {
    visibleForm: boolean;
    setVisibleForm: React.Dispatch<React.SetStateAction<boolean>>;
    selectedId: number;
    setSelectedId: React.Dispatch<React.SetStateAction<number>>;
    reload: boolean;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
};

const Form: FC<Props> = ({
    visibleForm,
    setVisibleForm,
    selectedId,
    setReload,
    reload,
    setSelectedId,
}) => {
    const [state, setState] = useState<IRole>({} as IRole);
    const [errors, setErrors] = useState<IRoleErrors>({} as IRoleErrors);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setErrors({ message: null, name: null });
        setIsLoading(true);

        if (selectedId === 0) {
            Axios.post<IRole>(`${RolesUrlName}`, state)
                .then((response) => {
                    setState({} as IRole);
                    setSelectedId(0);
                    setReload(!reload);
                    setVisibleForm(false);
                })
                .catch((error) => {
                    setErrors({
                        message: error?.response?.data?.message,
                        name: error?.response?.data?.errors?.name,
                    });
                    setIsLoading(false);
                    throw error;
                });
        } else {
            Axios.put<IRole>(`${RolesUrlName}/${selectedId}`, state)
                .then((response) => {
                    setState({} as IRole);
                    setSelectedId(0);
                    setReload(!reload);
                    setVisibleForm(false);
                })
                .catch((error) => {
                    setErrors({
                        message: error?.response?.data?.message,
                        name: error?.response?.data?.errors?.name,
                    });
                    setIsLoading(false);
                    throw error;
                });
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (selectedId !== 0) {
            Axios.get<IRole>(`${RolesUrlName}/${selectedId}`)
                .then((response) => {
                    setState({
                        id: response?.data?.id,
                        name: response?.data?.name,
                    });
                })
                .catch((error) => {
                    throw error;
                });
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
                    <div className='flex flex-wrap justify-center items-center'>
                        <div className='w-full px-3.5'>
                            {errors?.message && (
                                <div className='p-2 mb-5 bg-danger text-white text-sm'>
                                    {errors?.message}
                                </div>
                            )}
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
                                    placeholder='name'
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
                    <button
                        className='btn btn-outline-primary'
                        onClick={handleSubmit}
                    >
                        {isLoading && <Loading />}
                        Save
                    </button>
                    <button
                        className='btn btn-outline-danger'
                        onClick={() => setVisibleForm(false)}
                    >
                        Cancel
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Form;
