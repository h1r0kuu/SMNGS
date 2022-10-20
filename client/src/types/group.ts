export interface GroupRequest {
    groupTerm: number,
    groupName: string
    // private List<GroupStudentResponse> students;
}

export interface GroupResponse {
    id: number,
    groupTerm: number,
    // private List<GroupStudentResponse> students;
    createdAt: Date,
    updatedAt: Date,
}