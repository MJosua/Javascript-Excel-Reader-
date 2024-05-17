import { useState, useEffect } from "react"

function ExcelFileShow({ setUpdate, update }) {

    const [sessionData, setSessionData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(sessionStorage.getItem('excelData') || '[]')
        setSessionData(storedData);

    }, [update]);
    return (
        <div>
            <h2>
                Session Storage Data
            </h2>

            <table className="table table-strip">

                <thead>
                    {sessionData[0]?.slice(0,1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <th key={colIndex}>{cell}</th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {sessionData[0]?.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}

export default ExcelFileShow