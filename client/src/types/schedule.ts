import {GroupResponse, GroupSubjectResponse} from "./group";

export interface ScheduleRequest {
    groupId: number,
    groupSubjectId: number,
    timeStart: Date,
    timeEnd: Date

}

export interface ScheduleResponse {
    id: number,
    group: GroupResponse,
    groupSubject: GroupSubjectResponse,
    timeStart: Date,
    timeEnd: Date

}