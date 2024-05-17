function ExcelUploader({ onChange, setUpdate, update }) {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <input type="file" onChange={onChange} />
                </div>
                <div className="col-1">
                    <div className="btn btn-secondary"
                        onClick={() => {

                            sessionStorage.clear();
                            setUpdate("Clear")
                            console.log("clear", update)
                        }
                        }>
                        clear
                    </div>
                </div>
                <div className="col-1">
                    <div className="btn btn-warning"
                        onClick={() => {

                            setUpdate("Upload")
                        }
                        }>
                        upload
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ExcelUploader