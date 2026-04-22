import { listContext } from "./ListContextProvider"
import { useContext } from "react"
function FavouriteStudent(props) {
    var { list, setlist } = useContext(listContext)

    function handleRemove(i) {
        var updatedlist = list.map(function (item, index) {
            if (i === index) {
                return ({ ...item, status: false })
            }
            return item
        })
        setlist(updatedlist)

    }


    return (
        <div >
            <h1 className="text-xl font-bold px-3 py-2 ">Student list</h1>


            <ol className="flex flex-col gap-2 ">
                {list.map(function (item, index) {
                    if (item.status === true)
                        return (
                            <li
                                key={index}
                                className="px-3 py-2  rounded flex items-center gap-4"

                            >
                                <span className="w-5">{index + 1}.</span>
                                {/* Name column */}
                                <span className="w-32">{item.name}</span>

                                {/* Button */}
                                <button
                                    onClick={() => handleRemove(index)}
                                    className={"font-bold px-2 py-1 rounded-xl bg-red-500 text-white cursor-pointer hover:bg-red-700 transition duration-200"}>
                                    Remove
                                </button>
                            </li>
                        )
                })}
            </ol>
        </div>
    )
}

export default FavouriteStudent