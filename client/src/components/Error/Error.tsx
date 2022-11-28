import {FC, ReactElement} from "react";
import {FieldError} from "react-hook-form";

interface ErrorProps {
    error?: FieldError
}

const Error: FC<ErrorProps> = ({error}): ReactElement => {
    return (
        <>
        {error &&
            <div className="invalid-feedback">
                {error.message}
            </div>
        }
        </>
    )
}

export default Error