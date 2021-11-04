import React, { FC } from "react";

const Profile: FC = () => {
    return (
        <>
            <div className='flex flex-wrap flex-row'>
                <div className='w-full md:w-1/3 mx-auto px-2'>
                    <div className='card'>
                        <div className='header'>
                            <h2>Info</h2>
                        </div>
                        <div className='body'>
                            <small className='text-muted'>Address: </small>
                            <p>
                                795 Folsom Ave, Suite 600 San Francisco, 94107
                            </p>
                            <div>
                                <iframe
                                    title='Location'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1923731.7533500232!2d-120.39098936853455!3d37.63767091877441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1522391841133'
                                    width='100%'
                                    height='150'
                                    frameBorder='0'
                                    style={{ border: "0" }}
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <hr />
                            <small className='text-muted'>
                                Email address:{" "}
                            </small>
                            <p>louispierce@example.com</p>
                            <hr />
                            <small className='text-muted'>Mobile: </small>
                            <p>+ 202-222-2121</p>
                            <hr />
                            <small className='text-muted'>Birth Date: </small>
                            <p className='m-b-0'>October 17th, 93</p>
                            <hr />
                            <small className='text-muted'>Social: </small>
                            <p>
                                <i className='fa fa-twitter m-r-5'></i>{" "}
                                twitter.com/example
                            </p>
                            <p>
                                <i className='fa fa-facebook  m-r-5'></i>{" "}
                                facebook.com/example
                            </p>
                            <p>
                                <i className='fa fa-github m-r-5'></i>{" "}
                                github.com/example
                            </p>
                            <p>
                                <i className='fa fa-instagram m-r-5'></i>{" "}
                                instagram.com/example
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-2/3 mx-auto px-2'>
                    <div className='card'>
                        <div className='header'>
                            <h2>Basic Information</h2>
                        </div>
                        <div className='body'>
                            <div className='row clearfix'>
                                <div className='col-lg-6 col-md-12'>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='First Name'
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Last Name'
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12'>
                                    <div className='form-group'>
                                        <select className='form-control'>
                                            <option value=''>
                                                -- Select Gander --
                                            </option>
                                            <option value='AF'>Male</option>
                                            <option value='AX'>Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12'>
                                    <div className='form-group'>
                                        <div className='input-group'>
                                            <div className='input-group-prepend'>
                                                <span className='input-group-text'>
                                                    <i className='icon-calendar'></i>
                                                </span>
                                            </div>
                                            <input
                                                data-provide='datepicker'
                                                data-date-autoclose='true'
                                                className='form-control'
                                                placeholder='Birthdate'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12'>
                                    <div className='form-group'>
                                        <div className='input-group'>
                                            <div className='input-group-prepend'>
                                                <span className='input-group-text'>
                                                    <i className='icon-globe'></i>
                                                </span>
                                            </div>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder='http://'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12'>
                                    <div className='form-group'>
                                        <select className='form-control'>
                                            <option value=''>
                                                -- Select Country --
                                            </option>
                                            <option value='AF'>
                                                Afghanistan
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12'>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='State/Province'
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12'>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='City'
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-12 col-md-12'>
                                    <div className='form-group'>
                                        <textarea
                                            rows={4}
                                            className='form-control'
                                            placeholder='Address'
                                        ></textarea>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <ul className='list-group mb-3 tp-setting'>
                                        <li className='list-group-item'>
                                            Anyone seeing my profile page
                                            <div className='float-right'>
                                                <label className='switch'>
                                                    <input type='checkbox' />
                                                    <span className='slider round'></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li className='list-group-item'>
                                            Anyone send me a message
                                            <div className='float-right'>
                                                <label className='switch'>
                                                    <input type='checkbox' />
                                                    <span className='slider round'></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li className='list-group-item'>
                                            Anyone posts a comment on my post
                                            <div className='float-right'>
                                                <label className='switch'>
                                                    <input type='checkbox' />
                                                    <span className='slider round'></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li className='list-group-item'>
                                            Anyone invite me to group
                                            <div className='float-right'>
                                                <label className='switch'>
                                                    <input type='checkbox' />
                                                    <span className='slider round'></span>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button
                                type='button'
                                className='btn btn-round btn-primary mr-1'
                            >
                                Update
                            </button>{" "}
                            &nbsp;&nbsp;
                            <button
                                type='button'
                                className='btn btn-round btn-default'
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
                <div className='sm:w-full mx-auto'>
                    <div className='card'>
                        <div className='header'>
                            <h2>Account Data</h2>
                        </div>
                        <div className='body'>
                            <div className='row clearfix'>
                                <div className='col-lg-4 col-md-12'>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            value='louispierce'
                                            disabled
                                            placeholder='Username'
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12'>
                                    <div className='form-group'>
                                        <input
                                            type='email'
                                            className='form-control'
                                            value='louis.info@yourdomain.com'
                                            placeholder='Email'
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12'>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Phone Number'
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-12 col-md-12'>
                                    <h6 className='my-2'>Change Password</h6>
                                    <div className='form-group'>
                                        <input
                                            type='password'
                                            className='form-control'
                                            autoComplete='current-password'
                                            placeholder='Current Password'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <input
                                            type='password'
                                            className='form-control'
                                            autoComplete='new-password'
                                            placeholder='New Password'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <input
                                            type='password'
                                            className='form-control'
                                            autoComplete='new-password'
                                            placeholder='Confirm New Password'
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type='button'
                                className='btn btn-round btn-primary mr-1'
                            >
                                Update
                            </button>{" "}
                            &nbsp;&nbsp;
                            <button
                                type='button'
                                className='btn btn-round btn-default'
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
