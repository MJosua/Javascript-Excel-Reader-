import { FaHome } from "react-icons/fa";
import { MdAddCard } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { BsQuestionDiamondFill } from "react-icons/bs";
function Sidebar() {
    return (
        <>

            <div className="container-fluid">
                <div className="row pt-5">

                    <div className="col-12 pointer hover-pink border-bottom mb-1">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-2 text-center  d-flex align-items-center">
                                    <div>
                                        <FaHome />
                                    </div>
                                </div>
                                <div className="col-10 align-items-center">
                                    <div>
                                        Home
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pointer hover-pink border-bottom mb-1">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-2 d-flex align-items-center">
                                    <div>
                                        <MdAddCard />
                                    </div>
                                </div>
                                <div className="col-10">
                                    New Ticket
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pointer hover-pink border-bottom mb-1">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-2 d-flex align-items-center">
                                    <div>
                                        <IoTicket />
                                    </div>
                                </div>
                                <div className="col-10">
                                    My Ticket
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pointer hover-pink border-bottom mb-1">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-2 d-flex align-items-center">
                                    <div>
                                        <BsQuestionDiamondFill />
                                    </div>
                                </div>
                                <div className="col-10">
                                    FAQ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Sidebar