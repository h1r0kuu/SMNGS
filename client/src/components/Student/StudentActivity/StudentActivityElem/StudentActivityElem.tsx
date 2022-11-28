import React, {FC, ReactElement} from "react";

interface StudentActivityElemProps {
    date: string,
    children: ReactElement | ReactElement[]
}

const StudentActivityElem: FC<StudentActivityElemProps> = ({date, children}): ReactElement => {
    return (
        <li className="feed-item">
            <div className="feed-date">{date}</div>
            <span className="feed-text">
                {children}
            </span>
        </li>
    )
}

export default StudentActivityElem