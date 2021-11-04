import { FC, FormEvent, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { RolesUrlName, UsersUrlName } from "../../../data/UrlNames";
import { IRole } from "../../../models/Role";
import { IUser, IUserErrors } from "../../../models/User";
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
    const [state, setState] = useState<IUser>({} as IUser);
    const [errors, setErrors] = useState<IUserErrors>({} as IUserErrors);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [rolesList, setRolesList] = useState<IRole[]>();
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setErrors({ message: null, name: null, email: null });
        setIsLoading(true);

        if (selectedId === 0) {
            Axios.post<IUser>(`${UsersUrlName}`, state)
                .then((response) => {
                    setState({} as IUser);
                    setSelectedId(0);
                    setReload(!reload);
                    setVisibleForm(false);
                })
                .catch((error) => {
                    setErrors({
                        message: error?.response?.data?.message,
                        name: error?.response?.data?.errors?.name,
                        email: error?.response?.data?.errors?.email,
                    });
                    setIsLoading(false);
                    throw error;
                });
        } else {
            Axios.put<IUser>(`${UsersUrlName}/${selectedId}`, {
                ...state,
                id: selectedId,
            })
                .then((response) => {
                    console.log(response.data);
                    setState({} as IUser);
                    setSelectedId(0);
                    setReload(!reload);
                    setVisibleForm(false);
                })
                .catch((error) => {
                    setErrors({
                        message: error?.response?.data?.message,
                        name: error?.response?.data?.errors?.name,
                        email: error?.response?.data?.errors?.email,
                    });
                    setIsLoading(false);
                });
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (selectedId !== 0) {
            Axios.get<IUser>(`${UsersUrlName}/${selectedId}`)
                .then((response) => {
                    setState({
                        name: response?.data?.name,
                        email: response?.data?.email,
                        role: { name: response?.data?.role.name ?? "default" },
                    } as IUser);
                })
                .catch((error) => {
                    throw error;
                });

            Axios.get<IRole[]>(`${RolesUrlName}?page=all`)
                .then((reponse) => {
                    setRolesList(reponse.data);
                })
                .catch((error) => {
                    throw error;
                });
        }
    }, [selectedId]);

    return (
        <div>
            <Modal
                size='lg'
                show={visibleForm}
                onHide={() => setVisibleForm(false)}
            >
                <Modal.Header
                    closeButton={true}
                    closeLabel='Close'
                    closeVariant='white'
                >
                    <Modal.Title>Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='flex flex-wrap justify-center items-center'>
                        <div className='w-full sm:w-1/3 px-3.5'>
                            <small className='text-muted'>user profile</small>
                            <div className='w-200 mx-auto pt-4 pb-2'>
                                <img
                                    src={`https://robohash.org/f6cd95755fc8ecc5a3d575277b09611f?set=set3&bgset=&size=400x400`}
                                    className='mx-auto w-full rounded-md'
                                    alt='User profile'
                                />
                            </div>
                        </div>
                        <div className='w-full sm:w-2/3 px-3.5'>
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
                            <div className='form-group'>
                                <small>Email:</small>
                                <input
                                    type='text'
                                    name='email'
                                    value={state?.email ?? ""}
                                    className={`form-control${
                                        errors?.email !== null &&
                                        errors?.email !== undefined
                                            ? " border-red-700"
                                            : ""
                                    }`}
                                    placeholder='email'
                                    required={true}
                                    onChange={(
                                        e: FormEvent<HTMLInputElement>
                                    ) => {
                                        setState({
                                            ...state,
                                            email: e.currentTarget.value,
                                        });
                                    }}
                                />
                                <div
                                    className={`invalid-feedback${
                                        errors?.email !== null ? " block" : ""
                                    }`}
                                >
                                    {errors?.email?.map((item, i) => {
                                        return <p key={i}>{item}</p>;
                                    }) ?? ""}
                                </div>
                            </div>
                            <div className='form-group'>
                                <small>role:</small>
                                <select
                                    name='role'
                                    className='form-control show-tick'
                                    value={state?.role?.name ?? "default"}
                                    onChange={(
                                        e: FormEvent<HTMLSelectElement>
                                    ) => {
                                        setState({
                                            ...state,
                                            role: {
                                                ...state.role,
                                                id: parseInt(
                                                    e.currentTarget.value
                                                ),
                                            },
                                        });
                                    }}
                                >
                                    <option>Select Role</option>
                                    {(rolesList && rolesList.length > 0) ?
                                        rolesList?.map((item, i) => {
                                            return (
                                                <option
                                                    key={i}
                                                    value={item?.id ?? 0}
                                                >
                                                    {item?.name}
                                                </option>
                                            );
                                        }): ''}
                                </select>
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
