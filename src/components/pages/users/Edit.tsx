import React, { FC, useState } from "react";
import ReactCropper from "react-cropper";
import ICropper from "cropperjs";
import SampleImage from "../../../assets/images/image-gallery/1.jpg";
import "../../../assets/vendor/cropper/cropper.min.css";

type Props = {};

const Edit: FC<Props> = () => {
    const [cropData, setCropData] = useState<ICropper.Data>();

    return (
        <>
            <div className='flex mx-auto px-1.5'>
                <div className='card px-1.5 rounded-lg'>
                    <div className='body'>asd</div>
                </div>
            </div>
            {/* <div className='flex w-full flex-grow-0 flex-shrink-0 mx-auto px-1.5'>
                <div className='card'>
                    <div className='body m-b-10'>
                        <div className='row clearfix'>
                            <div className='col-lg-8 col-md-12'>
                                <ReactCropper
                                    preview='.img-preview'
                                    aspectRatio={1}
                                    responsive={true}
                                    style={{ maxHeight: 450 }}
                                    src={SampleImage}
                                    crop={(e) => {
                                        setCropData(e.detail);
                                    }}
                                />
                            </div>
                            <div className='col-lg-4 col-md-12'>
                                <div className='docs-preview clearfix'>
                                    <div className='img-preview preview-lg'></div>
                                    <div className='img-preview preview-md'></div>
                                    <div className='img-preview preview-sm'></div>
                                    <div className='img-preview preview-xs'></div>
                                </div>
                                <div className='docs-data'>
                                    <div className='input-group'>
                                        <div className='input-group-prepend'>
                                            <span
                                                className='input-group-text'
                                                data-for='dataX'
                                            >
                                                X
                                            </span>
                                        </div>
                                        <span className='form-control'>
                                            {cropData?.x}
                                        </span>
                                        <div className='input-group-append'>
                                            <span className='input-group-text'>
                                                px
                                            </span>
                                        </div>
                                    </div>

                                    <div className='input-group'>
                                        <div className='input-group-prepend'>
                                            <span className='input-group-text'>
                                                Y
                                            </span>
                                        </div>
                                        <span className='form-control'>
                                            {cropData?.y}
                                        </span>
                                        <div className='input-group-append'>
                                            <span className='input-group-text'>
                                                px
                                            </span>
                                        </div>
                                    </div>

                                    <div className='input-group'>
                                        <div className='input-group-prepend'>
                                            <span className='input-group-text'>
                                                Width
                                            </span>
                                        </div>
                                        <span className='form-control'>
                                            {cropData?.width}
                                        </span>
                                        <div className='input-group-append'>
                                            <span className='input-group-text'>
                                                px
                                            </span>
                                        </div>
                                    </div>

                                    <div className='input-group'>
                                        <div className='input-group-prepend'>
                                            <span className='input-group-text'>
                                                Height
                                            </span>
                                        </div>
                                        <span className='form-control'>
                                            {cropData?.height}
                                        </span>
                                        <div className='input-group-append'>
                                            <span className='input-group-text'>
                                                px
                                            </span>
                                        </div>
                                    </div>

                                    <div className='input-group'>
                                        <div className='input-group-prepend'>
                                            <span className='input-group-text'>
                                                Rotate
                                            </span>
                                        </div>
                                        <span className='form-control'>
                                            {cropData?.rotate}
                                        </span>
                                        <div className='input-group-append'>
                                            <span className='input-group-text'>
                                                deg
                                            </span>
                                        </div>
                                    </div>

                                    <div className='input-group'>
                                        <div className='input-group-prepend'>
                                            <span className='input-group-text'>
                                                ScaleX
                                            </span>
                                        </div>
                                        <span className='form-control'>
                                            {cropData?.scaleX}
                                        </span>
                                    </div>

                                    <div className='input-group'>
                                        <div className='input-group-prepend'>
                                            <span className='input-group-text'>
                                                ScaleY
                                            </span>
                                        </div>
                                        <span className='form-control'>
                                            {cropData?.scaleY}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Edit;
