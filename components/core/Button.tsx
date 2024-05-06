type propType = {
    title: string
    onClick?: () => void
}


const Button = ({title, onClick} : propType) => {
  return (
    <>
        <button className="bg-[#1dbbb4] rounded-md text-white px-10 py-2" onClick={onClick}>
            <span>{title}</span>
        </button> 
    </>
  )
}

export default Button
