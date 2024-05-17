import * as XLSX from 'xlsx';
import ExcelUploader from './ExcelUploader';
import { upload } from '@testing-library/user-event/dist/upload';


function ExcelReader({setUpdate,update}) {
    const handleFileUpload = (event) =>{
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            try {
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                if (!sheetName) {
                    console.error('No sheet found in the Excel file.');
                    return;
                }
                const worksheet = workbook.Sheets[sheetName];
                const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
                console.log("Excel",excelData)
                // Retrieve existing data from session storage or initialize an empty array
                const existingData = JSON.parse(sessionStorage.getItem('excelData') || '[]');
    
                // Append the new excelData to the existing data array
                const newDataArray = [...existingData, excelData];
    
                // Save the updated data array to session storage
                sessionStorage.setItem('excelData', JSON.stringify(newDataArray));
    
                // Optionally, you can redirect to another page or update the state to reflect the upload
                // history.push('/some-other-route');
                setUpdate("New")
                console.log("upload",update)
            } catch (error) {
                console.error('Error reading Excel file:', error);
            }
        };
        reader.readAsArrayBuffer(file);
    }
    return (
        <div>
            <h1>Excel Reader</h1>
            <ExcelUploader 
            setUpdate={setUpdate}
            update={update}
            onChange={handleFileUpload}/>
        </div>
    )
}
export default ExcelReader