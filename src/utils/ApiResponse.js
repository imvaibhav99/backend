class ApiResponse{
    constructor(statusCode, data, message = "Succes"){
        this.statusCode = statusCode
        this.data=data
        this.message=messagethis.success=statusCode< 400  //for api response
    }
}