import { FC, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { HomeRoute } from "../../data/RouteNames";

interface Props {
    title: string;
    Component: FC<any>;
}

const Page: FC<Props> = ({ title, Component, ...rest }) => {
    const history = useHistory();
    const Data = history.location.pathname.replace("/", "").split("/");
    const [visibleForm, setVisibleForm] = useState(false);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <div className='block-header'>
                <div className='flex clearfix'>
                    <div className='md:w-1/2 w-full'>
                        <nav aria-label='breadcrumb'>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>
                                    <Link to={HomeRoute}>Home</Link>
                                </li>
                                {Data.map((item, i) => {
                                    return (
                                        <li
                                            key={i}
                                            className={`breadcrumb-item${
                                                i === Data.length - 1
                                                    ? " active"
                                                    : ""
                                            }`}
                                        >
                                            {item}
                                        </li>
                                    );
                                })}
                            </ol>
                        </nav>
                    </div>
                    <div
                        className='w-full md:w-1/2 hidden'
                        id='breadCrumbAddBtn'
                    >
                        <div className='flex justify-end'>
                            <button
                                className='btn btn-default rounded-md inline-block justify-center items-center space-x-1'
                                onClick={() => setVisibleForm(true)}
                            >
                                <i className='fa fa-plus'></i>
                                <span>Create</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Component
                {...rest}
                visibleForm={visibleForm}
                setVisibleForm={setVisibleForm}
            />
        </>
    );
};

export default Page;
