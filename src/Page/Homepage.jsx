import Header from "../Component/Header.jsx";

import Footer from "../Component/Footer";
import Sidebar from "../Component/Sidebar.jsx";
import ExcelReader from "./ExcelReader.jsx";
import ExcelFileShow from "./ExcelFileShow.jsx";
import { useState } from "react";

function Homepage() {

    const [update, setUpdate] = useState(undefined);

    return (
        <div>
            <Header />
            <div className="container-fluid vw-100 vh-100">
                <div className="row h-100">

                    <div className="col-0 col-md-3 col-lg-2 h-100 border bg-light d-none d-md-block">
                        <Sidebar />
                    </div>

                    <div className="col-12 col-md-9 pt-5 col-lg-10 h-100 bg-white ">
                        <ExcelReader 
                        setUpdate={setUpdate}
                        update={update}
                        />
                        <ExcelFileShow 
                        setUpdate={setUpdate}
                        update={update}
                        />
                    </div>

                </div>
            </div>

        </div>


    )
}
export default Homepage;