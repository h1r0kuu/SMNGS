import {FC, ReactElement} from "react";
import {FieldError} from "react-hook-form";

interface ErrorProps {
    error: FieldError | undefined
}

const Error: FC<ErrorProps> = ({error}): ReactElement => {
    return (
        <>
        {error &&
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error!</strong> {error.message}
            </div>
        }
        </>
    )
}

export default Error