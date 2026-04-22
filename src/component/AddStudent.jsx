import { useState, useContext } from "react"
import { listContext } from "./ListContextProvider"

function AddStudent() {
    var { list, setlist } = useContext(listContext)
    var [name, setname] = useState("")
    var[status,setstatus] = useState(false)

    function handleName(evt) {
        setname(evt.target.value)
        setstatus(false)
    }

    function addName() {
        if (name.trim() === "") return   
        var newstudent = { name: name, status: false }
        setlist([...list, newstudent])  
        setstatus(true)
        setname("")  
    }

    return (
        <div className="flex flex-col items-start p-5 gap-2">

            <span className="text-xl font-medium p-1">
                Please enter Student Name:
            </span>

            <input 
                type="text" 
                className="border rounded-md p-1" 
                placeholder="Name..." 
                value={name} 
                onChange={handleName}
            />

            <button 
                className="font-bold bg-green-300 rounded-md p-1 px-2 cursor-pointer hover:bg-green-400 transition"
                onClick={addName}
                
            >
                Add
            </button>
            {status?<p className="text-green-800">Student Added Successfully</p>:null}
        </div>
    )
}

export default AddStudent