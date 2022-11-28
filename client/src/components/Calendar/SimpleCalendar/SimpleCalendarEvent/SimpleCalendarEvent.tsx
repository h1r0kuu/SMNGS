import React, {FC, ReactElement} from "react";

interface SimpleCalendarEventProps {
    start: string,
    cardColor: string,
    title: string,
    startEnd: string
}

const SimpleCalendarEvent: FC<SimpleCalendarEventProps> = ({start, cardColor, title, startEnd}): ReactElement => {
    return (
        <div className="calendar-details">
            <p>{start}</p>
            <h6 className={`calendar-${cardColor} d-flex justify-content-between align-items-center`}>{title}<span>{startEnd}</span>
            </h6>
        </div>
    )
}

export default SimpleCalendarEvent