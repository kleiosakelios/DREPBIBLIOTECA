import {signOut,useSession} from "next-auth/react";
import {useRouter} from "next/router";

export default function NavbarUser(){
    const { data: session, status } = useSession();
    const router =useRouter();
    return(
        <div name="navbar" className="bg-gray-900 py-3 flex justify-between rounded-xl">
            <div className="grid content-center mx-10">
                <img
                    src="https://1.bp.blogspot.com/-m_V7SVYx_KY/X5oVT7yWvHI/AAAAAAABlmg/AAEmKBdzPek_tjQSOUlvi77wYX22XPLvACLcBGAsYHQ/s174"
                    className="h-10" onClick={()=>(router.push('/'))}
                ></img>
            </div>
            <div name="foto usuario" className="w-80 mx-10 flex justify-evenly">

                <button
                    onClick={() => signOut()}
                    className="bg-blue-500 my-4 mx-2 px-1 rounded-xl hover:bg-blue-700 hover:text-white"
                >
                    Cerrar sesion
                </button>
                <h1 className="grid content-center text-white">
                    {session?.user?.name}
                </h1>
                <img src={session?.user?.image} className="w-24"></img>
            </div>
        </div>
    )
}