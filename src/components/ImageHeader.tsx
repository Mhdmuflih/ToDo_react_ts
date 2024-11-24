
const ImageHeader = () => {
    return (
        <div className="flex items-center mb-8">
            <img className="w-20 h-20 object-contain"
                src="https://i.pinimg.com/474x/48/e1/70/48e17004352a84f0d4e62dc5e1c2cfc3.jpg"
                alt=""
            />
            
            <span className="mx-5"> + </span>

            <img className="w-20 h-20 object-contain"
                src="https://i.pinimg.com/474x/66/d5/23/66d5238900aab3d7b86dc5e53a77c817.jpg"
                alt=""
            />
        </div>
    )
}

export {
    ImageHeader
}