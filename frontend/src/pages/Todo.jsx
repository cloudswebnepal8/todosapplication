import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import API from './../api/api';
function Todo() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [todos, setTodos] = useState([])
    const [editId, setEditId] = useState("")

    const loadTodos = async () => {
        const res = await API.get("/todos");
        console.log(res.data)
        setTodos(res.data)

    }
    useEffect(() => {
        loadTodos();
    }, [])

    const saveTodo = async () => {
        if (editId) {
            await API.put("/todos/" + editId, {
                title,
                description

            });
            toast.success("Todo updated successfully")
            setEditId("")
        }
        else {
            await API.post("todos/add", {
                title,
                description
            })
            toast.success("Todos added successfully")
        }

        setTitle("");
        setDescription("")
        loadTodos()

    }

    const editTodo = (todo) => {
        setTitle(todo.title);
        setDescription(todo.description);
        setEditId(todo._id);

    }

    const deleteTodo = async (id) => {
        await API.delete("/todos/" + id);
        toast.success("Todos deleted successfully");
        loadTodos()

    }



    const logout = () => {
        localStorage.removeItem("token");
        toast.success("Logout successful");
        navigate("/")

    }

    return (
        <div className='flex min-h-screen flex-col items-center justify-center'>
            <h1 className='text-green-400 text-xl p-5 font-bold uppercase'>Todos App</h1>
            {/* <button onClick={logout} className='bg-green-400 font-bold text-white p-2 relative top-30 left-150'>Logout</button> */}

            <input type="text"
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='border border-gray-300 p-2 w-full max-w-md' />

            <textarea placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='border border-gray-300 p-2 m-4 w-full max-w-md'></textarea>


            <button onClick={saveTodo} className='bg-green-400 font-bold text-white p-2 px-4'>{editId ? "Update" : "Add"}</button>

            <table className='w-full mt-10'>
                <thead className='bg-gray-200'>
                    <tr>

                        <th className='border border-gray-300 p-2'>S.N</th>
                        <th className='border border-gray-300 p-2'>Title</th>
                        <th className='border border-gray-300 p-2'>Description</th>
                        <th className='border border-gray-300 p-2'>Action</th>
                    </tr>

                </thead>

                <tbody>
                    {
                        todos.map((todo, index) => (
                            <tr key={todo._id}>
                                <td className='border border-gray-300 pl-10'>{index + 1}</td>
                                <td className='border border-gray-300 p-2'>{todo.title}</td>
                                <td className='border border-gray-300 p-2'>{todo.description}</td>
                                <td>
                                    <button onClick={() => editTodo(todo)} className='border border-gray-300 p-1 bg-blue-500 text-white m-1 px-5'>Update</button>
                                    <button onClick={() => deleteTodo(todo._id)} className='border border-gray-300 p-1 bg-blue-500 text-white m-1 px-5'>Delete</button>
                                </td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>





        </div>
    )
}

export default Todo