const Container:React.FC<{children:React.ReactNode,title:string}> = ({children,title})=>(
    <div className=" py-3   min-h-[200px] max-h-fit  outline-zinc-300 w-[600px] rounded-2xl bg-zinc-400 shadow   text-center">
                <h1 className="font-bold text-2xl">{title}</h1>
                <>{children}</>
            </div>
)
export default Container