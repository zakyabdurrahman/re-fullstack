export default function Navbar() {
    return (
        <>
            <div className="h-16 w-screen bg-neutral p-0 flex items-center justify-between px-10">
                <h2 className="text-center text-2xl font-bold">ASOOS Cars</h2>
                <a className="text-red-600 font-bold cursor-pointer">Logout</a>
            </div>
        </>
    )
}