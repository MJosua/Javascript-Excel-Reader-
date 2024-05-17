import {
    Input
} from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react";
function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        console.log("tombol")

        axios.post("https://anp.indofoodinternational.com:2864/bdrtny/iorudhtnhgi",
            {
                data: {
                    user_id: username,
                    pswd: password,
                }

            }, {

        }).then(function (response) {
            console.log('Authenticated');
        }).catch(function (error) {
            console.log('Error on Authentication');
        })

    }

    return (
        <div className="bg-white vw-100 vh-100">
            <div className="col-12 d-flex justify-content-center align-items-center h-100">
                <div className="col-11 col-md-3 " >
                    <div className="card border_radius_10px">
                        <div className=" fw-bold text-light card-header bg-danger">
                            IT Ticketing Login
                        </div>
                        <div className="card-body">
                            <div className="container">
                                <div className="row py-2">

                                    <div className="col-3 d-flex align-items-center">
                                        User ID
                                    </div>
                                    <div className="col-9">
                                        <Input size="sm" />
                                    </div>

                                    <div className="col-3 d-flex align-items-center">
                                        Password
                                    </div>
                                    <div className="col-9 mt-2">
                                        <Input type="password" size="sm" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-end">
                            <div className="btn px-4 py-0 btn-outline-danger">
                                Sign-in
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login