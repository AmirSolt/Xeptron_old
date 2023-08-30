interface DetectionProfileData{
    pfpSrc:string;
    name:string;
    state:DetectionProfileState;
}

enum DetectionProfileState{
    loading = "loading",
    success = "success",
    fail = "fail",
}