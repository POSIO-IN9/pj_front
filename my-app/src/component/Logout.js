import { Link } from "react-router-dom";

export default function Logout({ user, handleLogout,handleHome }) {

  return (

    <>
      <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl'>
        <div className='max-w-md mx-auto space-y-4 '>
          <h3 className="text-lg font-sans">어서오세요</h3>
          <h3 className="text-lg font-sans"><span className="text-lg font-bold text-green-700">{user}</span>님 좋은하루 되세요!</h3>
          <div className="flex gap-3 pt-3 items-center">
          <Link to="/">
          <button onClick={handleHome} className="border hover:border-green-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">home</button>
          </Link>
            <button onClick={handleLogout} className="border hover:border-green-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}
