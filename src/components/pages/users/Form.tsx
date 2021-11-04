import { IUser } from "../../../models/User";

const Form = (showList: any, selectedItem: IUser) => {
    return (
        <div className='body mt-2'>
            <div className='flex flex-wrap -mx-3.5 clearfix'>
                <div className='sm:w-full md:w-1/2 px-3.5'>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='name'
                            value=''
                            className='form-control'
                            placeholder='name'
                        />
                    </div>
                </div>
                <div className='sm:w-full md:w-1/3 lg:w-1/4 px-3.5'>
                    <div className='form-group'>
                        <input
                            type='email'
                            name='email'
                            value=''
                            className='form-control'
                            placeholder='email'
                        />
                    </div>
                </div>
                <div className='sm:w-full md:w-1/3 lg:w-1/4 px-3.5'>
                    <div className='form-group'>
                        <select
                            name='role'
                            className='form-control show-tick'
                            value=''
                        >
                            <option>Select Role Type</option>
                            <option>Super Admin</option>
                            <option>Admin</option>
                            <option>Employee</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
