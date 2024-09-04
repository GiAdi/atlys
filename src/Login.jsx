import { Link } from "react-router-dom";
import { createPortal } from 'react-dom';


export default function Login() {
    return (
        <div >
            Login
            <Link to='/register'>Register</Link>
            {
                createPortal(
                    <div className="flex items-center justify-center min-h-screen bg-gray-900">
                        <div className="w-96 p-6 bg-gray-800 rounded-lg shadow-lg">
                            <h2 className="text-sm font-bold text-center text-slate-500 mb-4">WELCOME BACK</h2>
                            <h3 className="text-xl text-center text-white mb-8">Log into your account</h3>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-400 mb-2">Email or Username</label>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="Enter your email or username"
                                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <label htmlFor="password" className="text-gray-400">Password</label>
                                        <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
                                >
                                    Login now
                                </button>
                            </form>
                            <div className="text-center mt-4">
                                <Link to='/register' className="text-blue-500 hover:underline">Register</Link>

                            </div>
                        </div>
                    </div>
                    ,
                    document.body
                )
            }
        </div>
    )
}
