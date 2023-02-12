import React, {FC, useRef} from 'react';

interface FileUploadProp {
    setFile: Function;
    accept: string;
    children: any;
}

const FileIUpload: FC<FileUploadProp> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setFile(e.target.files[0])
    }

    return (
        <div onClick={() => ref.current?.click()}>
            <input
                type="file"
                accept={accept}
                style={{display: "none"}}
                // @ts-ignore
                ref={ref}
            />
            {children}
        </div>
    );
};

export default FileIUpload;